export type QuestionType = "MCQ" | "MSQ" | "NAT";

export type QuestionStatus =
  | "not_visited"
  | "not_answered"
  | "answered"
  | "marked_for_review"
  | "answered_marked_for_review";

export interface QuestionOption {
  id: string; // "A", "B", "C", "D"
  text: string;
  image?: string;
}

export interface Question {
  id: number;
  testId: string;
  sectionId: string; // "GA" | "CS" | "DA"
  sectionName: string; // "General Aptitude" | "Computer Science & IT"
  type: QuestionType;
  marks: number; // 1 or 2
  negativeMarks: number; // 0.33, 0.66, or 0
  questionText: string;
  image?: string;
  options?: QuestionOption[]; // for MCQ and MSQ
  correctAnswer: string | string[] | { min: number; max: number }; // string for MCQ, array for MSQ, range for NAT
  explanation: string;
  topic?: string;
}

export interface ExamSection {
  id: string;
  name: string;
  totalQuestions: number;
  totalMarks: number;
}

export interface TestMeta {
  id: string;
  title: string;
  code: string;
  branch: string;
  durationMinutes: number;
  totalMarks: number;
  numQuestions: number;
  status: "not_attempted" | "attempted" | "in_progress";
  sections: ExamSection[];
  syllabus: string[];
  lastAttemptScore?: number;
  lastAttemptDate?: string;
}

export interface UserResponse {
  questionId: number;
  type: QuestionType;
  selectedOption?: string; // For MCQ ("A", "B", etc.)
  selectedOptions?: string[]; // For MSQ (["A", "C"])
  numericAnswer?: string; // For NAT ("4.5", "12")
  status: QuestionStatus;
  isCorrect?: boolean;
  marksAwarded?: number;
  timeSpentSeconds?: number;
}

export interface ProctoringViolation {
  id: string;
  timestamp: string;
  type: "tab_switch" | "window_blur" | "fullscreen_exit" | "devtools_attempt" | "right_click";
  message: string;
}

export interface ExamResult {
  testId: string;
  testTitle: string;
  branch: string;
  submittedAt: string;
  timeTakenSeconds: number;
  totalAllottedSeconds: number;
  totalMarks: number;
  scoreObtained: number;
  percentage: number;
  accuracy: number;
  percentile: number;
  predictedAIR: number;
  counts: {
    total: number;
    answered: number;
    correct: number;
    incorrect: number;
    unattempted: number;
    markedForReview: number;
    negativeMarks: number;
  };
  sectionScores: {
    sectionId: string;
    sectionName: string;
    totalMarks: number;
    scoreObtained: number;
    correct: number;
    incorrect: number;
    unattempted: number;
  }[];
  responses: Record<number, UserResponse>;
  violations: ProctoringViolation[];
}
