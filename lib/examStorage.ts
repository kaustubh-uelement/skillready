import testsMeta from "@/data/tests.json";
import mock01Questions from "@/data/questions/gate-cs-mock-01.json";
import mock02Questions from "@/data/questions/gate-cs-mock-02.json";
import mockDa01Questions from "@/data/questions/gate-da-mock-01.json";
import mock01Result from "@/data/results/gate-cs-mock-01.json";
import {
  TestMeta,
  Question,
  UserResponse,
  ExamResult,
  ProctoringViolation,
} from "@/types/exam";

const STORAGE_KEYS = {
  TESTS_META: "skillready_gate_tests_meta",
  USER_ATTEMPTS: "skillready_gate_attempts_",
  USER_RESULTS: "skillready_gate_results_",
};

export function getAllTests(): TestMeta[] {
  if (typeof window === "undefined") {
    return testsMeta as TestMeta[];
  }

  try {
    const saved = localStorage.getItem(STORAGE_KEYS.TESTS_META);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error("Error reading tests from storage", e);
  }

  return testsMeta as TestMeta[];
}

export function getTestById(testId: string): TestMeta | undefined {
  const tests = getAllTests();
  return tests.find((t) => t.id === testId);
}

export function getQuestionsForTest(testId: string): Question[] {
  switch (testId) {
    case "gate-cs-mock-01":
      return mock01Questions as Question[];
    case "gate-cs-mock-02":
      return mock02Questions as Question[];
    case "gate-da-mock-01":
      return mockDa01Questions as Question[];
    default:
      return mock01Questions as Question[];
  }
}

export function getSavedResult(testId: string): ExamResult | null {
  if (typeof window !== "undefined") {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.USER_RESULTS + testId);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error("Error reading result from storage", e);
    }
  }

  if (testId === "gate-cs-mock-01") {
    return mock01Result as ExamResult;
  }

  return null;
}

export function evaluateAndSaveExam(
  testId: string,
  userResponses: Record<number, UserResponse>,
  timeTakenSeconds: number,
  violations: ProctoringViolation[]
): ExamResult {
  const test = getTestById(testId) || (testsMeta[0] as TestMeta);
  const questions = getQuestionsForTest(testId);

  let totalScore = 0;
  let correctCount = 0;
  let incorrectCount = 0;
  let unattemptedCount = 0;
  let answeredCount = 0;
  let markedCount = 0;
  let totalNegativeMarks = 0;

  const sectionScoreMap: Record<
    string,
    {
      sectionId: string;
      sectionName: string;
      totalMarks: number;
      scoreObtained: number;
      correct: number;
      incorrect: number;
      unattempted: number;
    }
  > = {};

  test.sections.forEach((sec) => {
    sectionScoreMap[sec.id] = {
      sectionId: sec.id,
      sectionName: sec.name,
      totalMarks: sec.totalMarks,
      scoreObtained: 0,
      correct: 0,
      incorrect: 0,
      unattempted: 0,
    };
  });

  const evaluatedResponses: Record<number, UserResponse> = {};

  questions.forEach((q) => {
    const resp = userResponses[q.id];
    const sec = sectionScoreMap[q.sectionId] || {
      sectionId: q.sectionId,
      sectionName: q.sectionName,
      totalMarks: 0,
      scoreObtained: 0,
      correct: 0,
      incorrect: 0,
      unattempted: 0,
    };

    if (!resp || (!resp.selectedOption && (!resp.selectedOptions || resp.selectedOptions.length === 0) && !resp.numericAnswer)) {
      unattemptedCount++;
      sec.unattempted++;
      evaluatedResponses[q.id] = {
        questionId: q.id,
        type: q.type,
        status: resp?.status || "not_visited",
        isCorrect: false,
        marksAwarded: 0,
        timeSpentSeconds: resp?.timeSpentSeconds || 0,
      };
      return;
    }

    answeredCount++;
    if (resp.status === "marked_for_review" || resp.status === "answered_marked_for_review") {
      markedCount++;
    }

    let isCorrect = false;

    if (q.type === "MCQ") {
      isCorrect = resp.selectedOption === q.correctAnswer;
    } else if (q.type === "MSQ") {
      const correctArr = Array.isArray(q.correctAnswer) ? q.correctAnswer : [q.correctAnswer as string];
      const userArr = resp.selectedOptions || [];
      const setCorrect = new Set(correctArr);
      const setUser = new Set(userArr);
      isCorrect =
        setCorrect.size === setUser.size &&
        [...setCorrect].every((opt) => setUser.has(opt));
    } else if (q.type === "NAT") {
      const userVal = parseFloat(resp.numericAnswer || "");
      if (!isNaN(userVal)) {
        if (typeof q.correctAnswer === "object" && "min" in q.correctAnswer) {
          isCorrect = userVal >= q.correctAnswer.min && userVal <= q.correctAnswer.max;
        } else if (typeof q.correctAnswer === "string" || typeof q.correctAnswer === "number") {
          isCorrect = Math.abs(userVal - Number(q.correctAnswer)) < 0.01;
        }
      }
    }

    let marks = 0;
    if (isCorrect) {
      marks = q.marks;
      correctCount++;
      sec.correct++;
    } else {
      marks = -q.negativeMarks;
      totalNegativeMarks += q.negativeMarks;
      incorrectCount++;
      sec.incorrect++;
    }

    totalScore += marks;
    sec.scoreObtained += marks;

    evaluatedResponses[q.id] = {
      ...resp,
      isCorrect,
      marksAwarded: marks,
    };
  });

  const finalScore = Math.max(0, Math.round(totalScore * 100) / 100);
  const percentage = Math.round((finalScore / test.totalMarks) * 10000) / 100;
  const accuracy =
    answeredCount > 0 ? Math.round((correctCount / answeredCount) * 1000) / 10 : 0;

  // Predictive AIR & Percentile estimation curve
  const percentile = Math.min(
    99.9,
    Math.max(40, Math.round((finalScore / test.totalMarks) * 60 + 39.5 * 100) / 100)
  );
  const predictedAIR = Math.max(1, Math.round(15000 * (1 - percentile / 100)));

  const result: ExamResult = {
    testId,
    testTitle: test.title,
    branch: test.branch,
    submittedAt: new Date().toISOString(),
    timeTakenSeconds,
    totalAllottedSeconds: test.durationMinutes * 60,
    totalMarks: test.totalMarks,
    scoreObtained: finalScore,
    percentage,
    accuracy,
    percentile,
    predictedAIR,
    counts: {
      total: questions.length,
      answered: answeredCount,
      correct: correctCount,
      incorrect: incorrectCount,
      unattempted: unattemptedCount,
      markedForReview: markedCount,
      negativeMarks: Math.round(totalNegativeMarks * 100) / 100,
    },
    sectionScores: Object.values(sectionScoreMap).map((s) => ({
      ...s,
      scoreObtained: Math.round(s.scoreObtained * 100) / 100,
    })),
    responses: evaluatedResponses,
    violations,
  };

  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(STORAGE_KEYS.USER_RESULTS + testId, JSON.stringify(result));

      // Update tests list metadata
      const allTests = getAllTests().map((t) => {
        if (t.id === testId) {
          return {
            ...t,
            status: "attempted" as const,
            lastAttemptScore: finalScore,
            lastAttemptDate: new Date().toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            }),
          };
        }
        return t;
      });
      localStorage.setItem(STORAGE_KEYS.TESTS_META, JSON.stringify(allTests));
    } catch (e) {
      console.error("Failed to save result to localStorage", e);
    }
  }

  return result;
}
