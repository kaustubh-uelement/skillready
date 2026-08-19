/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect, useCallback, use } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { getTestById, getQuestionsForTest, evaluateAndSaveExam } from "@/lib/examStorage";
import { Question, QuestionStatus, UserResponse, ProctoringViolation } from "@/types/exam";
import { GateHeader } from "@/components/exam/GateHeader";
import { GateSubHeader } from "@/components/exam/GateSubHeader";
import { GateQuestionPanel } from "@/components/exam/GateQuestionPanel";
import { GateSidebarPalette } from "@/components/exam/GateSidebarPalette";
import { GateActionBar } from "@/components/exam/GateActionBar";
import { GateCalculator } from "@/components/exam/GateCalculator";
import { AntiCheatGuard } from "@/components/exam/AntiCheatGuard";
import {
  SubmitConfirmModal,
  QuestionPaperModal,
  InstructionsModal,
} from "@/components/exam/GateModals";

export default function ExamPage({
  params,
}: {
  params: Promise<{ testId: string }>;
}) {
  const resolvedParams = use(params);
  const testId = resolvedParams.testId;
  const router = useRouter();
  const { data: session } = useSession();

  const test = getTestById(testId);
  const [questions] = useState<Question[]>(() => getQuestionsForTest(testId));
  const [activeSectionId, setActiveSectionId] = useState<string>(() => test?.sections[0]?.id || "GA");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [responses, setResponses] = useState<Record<number, UserResponse>>({});
  const [timeLeft, setTimeLeft] = useState<number>(() => (test ? test.durationMinutes * 60 : 180 * 60));
  const [isCalculatorOpen, setIsCalculatorOpen] = useState<boolean>(false);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState<boolean>(false);
  const [isQuestionPaperOpen, setIsQuestionPaperOpen] = useState<boolean>(false);
  const [isInstructionsOpen, setIsInstructionsOpen] = useState<boolean>(false);
  const [violations, setViolations] = useState<ProctoringViolation[]>([]);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const candidateName = session?.user?.name || "John Doe";
  const candidateId = (session?.user as any)?.credentialId || "SKILL-SDSE-26-0847";

  // --- Anti-cheat violation handler with stable reference ---
  const handleViolation = useCallback((v: ProctoringViolation) => {
    setViolations((prev) => [...prev, v]);
  }, []);

  // --- Final Submission Handler ---
  const handleFinalSubmit = useCallback(() => {
    if (isSubmitting || !test) return;
    setIsSubmitting(true);

    const totalSecondsSpent = test.durationMinutes * 60 - timeLeft;
    evaluateAndSaveExam(testId, responses, totalSecondsSpent, violations);

    if (typeof document !== "undefined" && document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }

    router.push(`/dashboard/tests/${testId}/results`);
  }, [isSubmitting, test, timeLeft, testId, responses, violations, router]);

  // Countdown timer interval
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setTimeout(() => handleFinalSubmit(), 0);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [handleFinalSubmit]);

  if (!test || questions.length === 0) {
    return (
      <div className="min-h-screen bg-[#24272c] text-white flex items-center justify-center font-mono">
        <div className="text-center space-y-3">
          <div className="w-8 h-8 border-3 border-t-[#713FFF] border-white/20 rounded-full animate-spin mx-auto" />
          <div>Initializing GATE CBT Environment...</div>
        </div>
      </div>
    );
  }

  // Filter questions for the active section
  const sectionQuestions = questions.filter((q) => q.sectionId === activeSectionId);
  const currentQuestion = sectionQuestions[currentQuestionIndex] || sectionQuestions[0];
  const currentResponse = currentQuestion ? responses[currentQuestion.id] : undefined;

  // Calculate live status counts across the whole test
  const calculateStatusCounts = (): Record<QuestionStatus, number> => {
    const counts: Record<QuestionStatus, number> = {
      answered: 0,
      not_answered: 0,
      not_visited: 0,
      marked_for_review: 0,
      answered_marked_for_review: 0,
    };

    questions.forEach((q) => {
      const resp = responses[q.id];
      const status = resp?.status || "not_visited";
      counts[status] = (counts[status] || 0) + 1;
    });

    return counts;
  };

  const statusCounts = calculateStatusCounts();

  // --- Response Input Handlers ---
  const handleSelectOption = (optId: string) => {
    if (!currentQuestion) return;
    setResponses((prev) => {
      const existing = prev[currentQuestion.id];
      const isMarked = existing?.status === "marked_for_review" || existing?.status === "answered_marked_for_review";
      return {
        ...prev,
        [currentQuestion.id]: {
          questionId: currentQuestion.id,
          type: "MCQ",
          selectedOption: optId,
          status: isMarked ? "answered_marked_for_review" : "answered",
          timeSpentSeconds: (existing?.timeSpentSeconds || 0) + 5,
        },
      };
    });
  };

  const handleToggleMsqOption = (optId: string) => {
    if (!currentQuestion) return;
    setResponses((prev) => {
      const existing = prev[currentQuestion.id];
      const currentList = existing?.selectedOptions || [];
      const updated = currentList.includes(optId)
        ? currentList.filter((x) => x !== optId)
        : [...currentList, optId];

      const hasAnySelected = updated.length > 0;
      const isMarked = existing?.status?.includes("marked");

      return {
        ...prev,
        [currentQuestion.id]: {
          questionId: currentQuestion.id,
          type: "MSQ",
          selectedOptions: updated,
          status: hasAnySelected
            ? isMarked
              ? "answered_marked_for_review"
              : "answered"
            : isMarked
            ? "marked_for_review"
            : "not_answered",
          timeSpentSeconds: (existing?.timeSpentSeconds || 0) + 5,
        },
      };
    });
  };

  const handleChangeNumericAnswer = (val: string) => {
    if (!currentQuestion) return;
    setResponses((prev) => {
      const existing = prev[currentQuestion.id];
      const hasValue = val.trim().length > 0;
      const isMarked = existing?.status?.includes("marked");

      return {
        ...prev,
        [currentQuestion.id]: {
          questionId: currentQuestion.id,
          type: "NAT",
          numericAnswer: val,
          status: hasValue
            ? isMarked
              ? "answered_marked_for_review"
              : "answered"
            : isMarked
            ? "marked_for_review"
            : "not_answered",
          timeSpentSeconds: (existing?.timeSpentSeconds || 0) + 5,
        },
      };
    });
  };

  const isQuestionAnswered = (qId: number): boolean => {
    const r = responses[qId];
    if (!r) return false;
    if (r.type === "MCQ") return !!r.selectedOption;
    if (r.type === "MSQ") return !!r.selectedOptions && r.selectedOptions.length > 0;
    if (r.type === "NAT") return !!r.numericAnswer && r.numericAnswer.trim().length > 0;
    return false;
  };

  const handleSaveAndNext = () => {
    if (!currentQuestion) return;

    const answered = isQuestionAnswered(currentQuestion.id);

    setResponses((prev) => ({
      ...prev,
      [currentQuestion.id]: {
        ...prev[currentQuestion.id],
        questionId: currentQuestion.id,
        type: currentQuestion.type,
        status: answered ? "answered" : "not_answered",
      },
    }));

    if (currentQuestionIndex < sectionQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      const currentSecIdx = test.sections.findIndex((s) => s.id === activeSectionId);
      if (currentSecIdx < test.sections.length - 1) {
        const nextSec = test.sections[currentSecIdx + 1];
        setActiveSectionId(nextSec.id);
        setCurrentQuestionIndex(0);
      }
    }
  };

  const handleMarkForReviewAndNext = () => {
    if (!currentQuestion) return;

    const answered = isQuestionAnswered(currentQuestion.id);

    setResponses((prev) => ({
      ...prev,
      [currentQuestion.id]: {
        ...prev[currentQuestion.id],
        questionId: currentQuestion.id,
        type: currentQuestion.type,
        status: answered ? "answered_marked_for_review" : "marked_for_review",
      },
    }));

    if (currentQuestionIndex < sectionQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handleClearResponse = () => {
    if (!currentQuestion) return;

    setResponses((prev) => {
      const copy = { ...prev };
      delete copy[currentQuestion.id];
      return {
        ...copy,
        [currentQuestion.id]: {
          questionId: currentQuestion.id,
          type: currentQuestion.type,
          status: "not_answered",
        },
      };
    });
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleJumpToQuestion = (qId: number) => {
    const target = questions.find((q) => q.id === qId);
    if (!target) return;

    if (target.sectionId !== activeSectionId) {
      setActiveSectionId(target.sectionId);
    }

    const secQs = questions.filter((q) => q.sectionId === target.sectionId);
    const targetIdx = secQs.findIndex((q) => q.id === qId);
    setCurrentQuestionIndex(targetIdx >= 0 ? targetIdx : 0);

    setResponses((prev) => {
      if (!prev[qId] || prev[qId].status === "not_visited") {
        return {
          ...prev,
          [qId]: {
            questionId: qId,
            type: target.type,
            status: "not_answered",
          },
        };
      }
      return prev;
    });
  };

  const handleSwitchSection = (sectionId: string) => {
    setActiveSectionId(sectionId);
    setCurrentQuestionIndex(0);
  };

  return (
    <div className="min-h-screen h-screen flex flex-col bg-[#eef2f5] text-black overflow-hidden font-sans select-none">
      {/* ── Anti-Cheat Monitor ────────────────────────────────────── */}
      <AntiCheatGuard
        maxViolations={3}
        onViolation={handleViolation}
        onAutoSubmitDueToViolations={handleFinalSubmit}
      />

      {/* ── Official GATE Top Header ──────────────────────────────── */}
      <GateHeader
        test={test}
        onOpenQuestionPaper={() => setIsQuestionPaperOpen(true)}
        onOpenInstructions={() => setIsInstructionsOpen(true)}
      />

      {/* ── Sub-Header (Section dropdown, Timer, Calculator) ────────── */}
      <GateSubHeader
        sections={test.sections}
        activeSectionId={activeSectionId}
        onSelectSection={handleSwitchSection}
        timeLeftSeconds={timeLeft}
        onToggleCalculator={() => setIsCalculatorOpen((prev) => !prev)}
        statusCounts={statusCounts}
      />

      {/* ── Main Two-Column CBT Workspace ──────────────────────────── */}
      <div className="flex-1 flex overflow-hidden">
        {/* Center-Left Question Workspace */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <GateQuestionPanel
            question={currentQuestion}
            questionNumber={currentQuestionIndex + 1}
            currentResponse={currentResponse}
            onSelectOption={handleSelectOption}
            onToggleMsqOption={handleToggleMsqOption}
            onChangeNumericAnswer={handleChangeNumericAnswer}
          />

          <GateActionBar
            onMarkForReviewAndNext={handleMarkForReviewAndNext}
            onClearResponse={handleClearResponse}
            onPrevious={handlePrevious}
            onSaveAndNext={handleSaveAndNext}
            isFirstQuestion={currentQuestionIndex === 0}
            isLastQuestion={currentQuestionIndex === sectionQuestions.length - 1}
          />
        </div>

        {/* Right Candidate & Question Palette Sidebar */}
        <GateSidebarPalette
          candidateName={candidateName}
          candidateId={candidateId}
          sectionName={test.sections.find((s) => s.id === activeSectionId)?.name || "Subject"}
          questions={sectionQuestions}
          currentQuestionId={currentQuestion?.id || 1}
          responses={responses}
          statusCounts={statusCounts}
          onSelectQuestion={handleJumpToQuestion}
          onSubmitExam={() => setIsSubmitModalOpen(true)}
        />
      </div>

      {/* ── Draggable Scientific Calculator Widget ─────────────────── */}
      <GateCalculator
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />

      {/* ── Submit Confirmation Modal ───────────────────────────────── */}
      <SubmitConfirmModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        onConfirmSubmit={handleFinalSubmit}
        sections={test.sections}
        questions={questions}
        responses={responses}
      />

      {/* ── Question Paper Modal ────────────────────────────────────── */}
      <QuestionPaperModal
        isOpen={isQuestionPaperOpen}
        onClose={() => setIsQuestionPaperOpen(false)}
        questions={questions}
      />

      {/* ── Instructions Modal ──────────────────────────────────────── */}
      <InstructionsModal
        isOpen={isInstructionsOpen}
        onClose={() => setIsInstructionsOpen(false)}
      />
    </div>
  );
}
