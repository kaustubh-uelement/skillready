"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getSavedResult, getQuestionsForTest } from "@/lib/examStorage";
import { ExamResult, Question } from "@/types/exam";

export default function TestResultPage({
  params,
}: {
  params: Promise<{ testId: string }>;
}) {
  const resolvedParams = use(params);
  const testId = resolvedParams.testId;
  const router = useRouter();

  const [result] = useState<ExamResult | null>(() => getSavedResult(testId));
  const [questions] = useState<Question[]>(() => getQuestionsForTest(testId));
  const [activeFilter, setActiveFilter] = useState<"ALL" | "CORRECT" | "INCORRECT" | "UNATTEMPTED">("ALL");

  if (!result) {
    return (
      <div className="p-8 text-center space-y-4">
        <div className="text-[18px] font-bold text-black font-display">No attempt found for this test.</div>
        <p className="text-[#7A7A88] text-sm">Please take the mock test first to generate your scorecard.</p>
        <Link
          href="/dashboard/tests"
          className="inline-block px-4 py-2 bg-[#713FFF] text-white font-mono text-xs uppercase font-bold rounded-[6px]"
        >
          ← Go to Test Series
        </Link>
      </div>
    );
  }

  const formatTime = (secs: number) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return `${h > 0 ? `${h}h ` : ""}${m}m ${s}s`;
  };

  const filteredQuestions = questions.filter((q) => {
    const resp = result.responses[q.id];
    if (activeFilter === "CORRECT") return resp?.isCorrect;
    if (activeFilter === "INCORRECT") return resp && !resp.isCorrect && resp.status !== "not_visited" && resp.status !== "not_answered";
    if (activeFilter === "UNATTEMPTED") return !resp || resp.status === "not_visited" || resp.status === "not_answered";
    return true;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* ── Top Header Bar ─────────────────────────────────────────── */}
      <div className="pb-6 border-b border-[#E8E4F0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Link
              href="/dashboard/tests"
              className="text-[#7A7A88] hover:text-[#713FFF] font-mono text-[11px] uppercase tracking-wider transition-colors"
            >
              ← Test Series
            </Link>
            <span className="text-[#CCC]">/</span>
            <span className="font-mono text-[11px] text-[#713FFF] font-bold uppercase tracking-wider">
              Scorecard & Analysis
            </span>
          </div>
          <h1 className="text-[26px] sm:text-[32px] font-bold text-black font-display tracking-tight mt-1 leading-tight">
            {result.testTitle}
          </h1>
          <div className="font-mono text-[11px] text-[#7A7A88] mt-1">
            Submitted {new Date(result.submittedAt).toLocaleString()} · {result.branch}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => router.push(`/exam/${testId}`)}
            className="px-4 py-2 border border-[#713FFF] bg-[#713FFF] text-white hover:bg-[#602ee6] font-mono text-[11px] uppercase font-bold tracking-wider rounded-[6px] transition-all shadow-xs cursor-pointer"
          >
            ↻ Retake Test
          </button>
        </div>
      </div>

      {/* ── Highlight Metrics Cards ────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Score Card */}
        <div className="bg-white p-5 rounded-[12px] border border-[#713FFF]/40 shadow-xs relative overflow-hidden">
          <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#7A7A88] mb-2">
            Score Obtained
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-[36px] font-bold text-[#713FFF] leading-none font-display">
              {result.scoreObtained}
            </span>
            <span className="text-[16px] text-[#7A7A88] font-mono">/ {result.totalMarks}</span>
          </div>
          <div className="font-mono text-[11px] text-[#7A7A88] mt-2">
            {result.percentage}% Total Marks
          </div>
        </div>

        {/* Rank & Percentile */}
        <div className="bg-white p-5 rounded-[12px] border border-[#E8E4F0] shadow-xs">
          <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#7A7A88] mb-2">
            Est. National SWE Rank
          </div>
          <div className="text-[36px] font-bold text-black leading-none font-display">
            Rank {result.predictedAIR}
          </div>
          <div className="font-mono text-[11px] text-[#713FFF] font-bold mt-2">
            {result.percentile}th Percentile
          </div>
        </div>

        {/* Accuracy */}
        <div className="bg-white p-5 rounded-[12px] border border-[#E8E4F0] shadow-xs">
          <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#7A7A88] mb-2">
            Accuracy Rate
          </div>
          <div className="text-[36px] font-bold text-black leading-none font-display">
            {result.accuracy}%
          </div>
          <div className="font-mono text-[11px] text-[#7A7A88] mt-2">
            {result.counts.correct} Correct · {result.counts.incorrect} Wrong
          </div>
        </div>

        {/* Time Taken */}
        <div className="bg-white p-5 rounded-[12px] border border-[#E8E4F0] shadow-xs">
          <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#7A7A88] mb-2">
            Time Spent
          </div>
          <div className="text-[26px] font-bold text-black leading-none font-display pt-1">
            {formatTime(result.timeTakenSeconds)}
          </div>
          <div className="font-mono text-[11px] text-[#7A7A88] mt-3">
            Allotted: {formatTime(result.totalAllottedSeconds)}
          </div>
        </div>
      </div>

      {/* ── Anti-Cheat Proctoring Audit Card ──────────────────────── */}
      <div className="bg-white rounded-[12px] border border-[#E8E4F0] p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-[8px] flex items-center justify-center font-bold text-lg ${
              result.violations.length === 0
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-amber-50 text-amber-700 border border-amber-200"
            }`}
          >
            {result.violations.length === 0 ? "✓" : "⚠️"}
          </div>
          <div>
            <div className="text-[14px] font-bold text-black font-display">
              Proctoring Audit Summary:{" "}
              {result.violations.length === 0 ? (
                <span className="text-[#3c763d]">Clean Session (0 Violations)</span>
              ) : (
                <span className="text-[#d9534f]">{result.violations.length} Warning(s) Recorded</span>
              )}
            </div>
            <div className="font-mono text-[11px] text-[#7A7A88] mt-0.5">
              Fullscreen verified · Tab switches and blur events tracked
            </div>
          </div>
        </div>

        {result.violations.length > 0 && (
          <div className="space-y-1">
            {result.violations.map((v, i) => (
              <div key={i} className="text-[11px] font-mono bg-red-50 text-red-700 px-2.5 py-1 rounded border border-red-200">
                {v.message}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── Section-Wise Score Breakdown Table ─────────────────────── */}
      <div className="bg-white rounded-[12px] border border-[#E8E4F0] shadow-xs overflow-hidden">
        <div className="px-6 py-4 border-b border-[#E8E4F0] bg-[#FBF9FF] flex items-center justify-between">
          <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#7A7A88]">
            Section-Wise Performance
          </span>
          <span className="font-mono text-[11px] text-[#a94442]">
            Negative Marks Incurred: -{result.counts.negativeMarks}
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-[13px] text-left">
            <thead>
              <tr className="border-b border-[#E8E4F0] font-mono text-[10px] uppercase text-[#7A7A88] bg-white">
                <th className="py-3.5 px-6">Section</th>
                <th className="py-3.5 px-4 text-center">Correct</th>
                <th className="py-3.5 px-4 text-center">Incorrect</th>
                <th className="py-3.5 px-4 text-center">Left</th>
                <th className="py-3.5 px-6 text-right">Score Scored / Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8E4F0]">
              {result.sectionScores.map((sec) => (
                <tr key={sec.sectionId} className="hover:bg-[#FBF9FF] transition-colors">
                  <td className="py-4 px-6 font-bold text-black">{sec.sectionName}</td>
                  <td className="py-4 px-4 text-center font-mono font-bold text-[#3c763d]">
                    +{sec.correct}
                  </td>
                  <td className="py-4 px-4 text-center font-mono font-bold text-[#a94442]">
                    -{sec.incorrect}
                  </td>
                  <td className="py-4 px-4 text-center font-mono text-[#7A7A88]">
                    {sec.unattempted}
                  </td>
                  <td className="py-4 px-6 text-right font-mono font-bold text-black">
                    <span className="text-[#713FFF] text-[15px]">{sec.scoreObtained}</span> / {sec.totalMarks}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Question-by-Question Solution Review ───────────────────── */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-[20px] font-bold text-black font-display">
            Question-by-Question Solutions
          </h2>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-[#F4F2FA] rounded-[8px] font-mono text-[10px] uppercase font-bold">
            <button
              type="button"
              onClick={() => setActiveFilter("ALL")}
              className={`px-3 py-1 rounded-[6px] transition-all cursor-pointer ${
                activeFilter === "ALL" ? "bg-white text-[#713FFF] shadow-xs" : "text-[#7A7A88] hover:text-black"
              }`}
            >
              All ({questions.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("CORRECT")}
              className={`px-3 py-1 rounded-[6px] transition-all cursor-pointer ${
                activeFilter === "CORRECT" ? "bg-white text-green-700 shadow-xs" : "text-[#7A7A88] hover:text-black"
              }`}
            >
              Correct ({result.counts.correct})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("INCORRECT")}
              className={`px-3 py-1 rounded-[6px] transition-all cursor-pointer ${
                activeFilter === "INCORRECT" ? "bg-white text-red-700 shadow-xs" : "text-[#7A7A88] hover:text-black"
              }`}
            >
              Incorrect ({result.counts.incorrect})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("UNATTEMPTED")}
              className={`px-3 py-1 rounded-[6px] transition-all cursor-pointer ${
                activeFilter === "UNATTEMPTED" ? "bg-white text-black shadow-xs" : "text-[#7A7A88] hover:text-black"
              }`}
            >
              Unattempted ({result.counts.unattempted})
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {filteredQuestions.map((q, idx) => {
            const resp = result.responses[q.id];
            const isCorrect = resp?.isCorrect;
            const isUnattempted = !resp || resp.status === "not_visited" || resp.status === "not_answered";
            const marksAwarded = resp?.marksAwarded ?? 0;

            const formatCorrectAnswer = () => {
              if (typeof q.correctAnswer === "object" && "min" in q.correctAnswer) {
                return `${q.correctAnswer.min} to ${q.correctAnswer.max}`;
              }
              if (Array.isArray(q.correctAnswer)) {
                return q.correctAnswer.join(", ");
              }
              return String(q.correctAnswer);
            };

            const formatUserAnswer = () => {
              if (isUnattempted) return "Unattempted";
              if (q.type === "MCQ") return resp?.selectedOption || "—";
              if (q.type === "MSQ") return resp?.selectedOptions?.join(", ") || "—";
              if (q.type === "NAT") return resp?.numericAnswer || "—";
              return "—";
            };

            return (
              <div
                key={q.id}
                className={`bg-white rounded-[12px] border p-6 shadow-xs space-y-4 transition-all ${
                  isCorrect
                    ? "border-green-300"
                    : !isUnattempted
                    ? "border-red-300"
                    : "border-[#E8E4F0]"
                }`}
              >
                {/* Question Header */}
                <div className="flex items-center justify-between gap-3 pb-3 border-b border-[#E8E4F0]">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-[4px] bg-[#F4F2FA] text-[#713FFF] font-mono font-bold text-xs flex items-center justify-center">
                      Q.{idx + 1}
                    </span>
                    <span className="font-mono text-[11px] text-[#7A7A88] uppercase">
                      {q.sectionName} · {q.type}
                    </span>
                    {q.topic && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FBF9FF] border border-[#E8E4F0] text-[#7A7A88]">
                        {q.topic}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 font-mono text-[11px]">
                    <span
                      className={`px-2.5 py-0.5 rounded font-bold uppercase ${
                        isCorrect
                          ? "bg-green-100 text-green-800"
                          : !isUnattempted
                          ? "bg-red-100 text-red-800"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {isCorrect ? `+${marksAwarded} Marks` : !isUnattempted ? `${marksAwarded} Marks` : "0 Marks"}
                    </span>
                  </div>
                </div>

                {/* Question Text */}
                <div className="text-[14px] text-black leading-relaxed whitespace-pre-line">
                  {q.questionText}
                </div>

                {/* Options if MCQ or MSQ */}
                {q.options && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-[12px] pt-1">
                    {q.options.map((opt) => {
                      const isOptionCorrect = Array.isArray(q.correctAnswer)
                        ? q.correctAnswer.includes(opt.id)
                        : q.correctAnswer === opt.id;
                      const isOptionChosen = q.type === "MCQ"
                        ? resp?.selectedOption === opt.id
                        : resp?.selectedOptions?.includes(opt.id);

                      return (
                        <div
                          key={opt.id}
                          className={`p-2.5 rounded-[6px] border flex items-start gap-2 ${
                            isOptionCorrect
                              ? "bg-green-50/80 border-green-400 text-green-900 font-bold"
                              : isOptionChosen && !isOptionCorrect
                              ? "bg-red-50/80 border-red-300 text-red-900 line-through"
                              : "bg-[#FBF9FF] border-[#E8E4F0] text-[#4C4C58]"
                          }`}
                        >
                          <span className="font-bold">{opt.id}.</span>
                          <span>{opt.text}</span>
                          {isOptionCorrect && <span className="ml-auto text-green-700 font-bold">✓ Key</span>}
                          {isOptionChosen && !isOptionCorrect && <span className="ml-auto text-red-700">✕ Your Choice</span>}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Answer Summary Pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 bg-[#FBF9FF] border border-[#E8E4F0] rounded-[8px] font-mono text-[12px]">
                  <div>
                    <span className="text-[#7A7A88] uppercase text-[10px]">Your Response: </span>
                    <strong className={isCorrect ? "text-green-700" : !isUnattempted ? "text-red-700" : "text-gray-600"}>
                      {formatUserAnswer()}
                    </strong>
                  </div>
                  <div>
                    <span className="text-[#7A7A88] uppercase text-[10px]">Official Key: </span>
                    <strong className="text-green-800">{formatCorrectAnswer()}</strong>
                  </div>
                </div>

                {/* Explanation */}
                <div className="p-3.5 bg-[#F2EEFD]/50 border border-[#713FFF]/20 rounded-[8px] text-[13px] leading-relaxed">
                  <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#713FFF] mb-1">
                    Detailed Solution & Concept Note
                  </div>
                  <div className="text-[#333]">{q.explanation}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
