"use client";

import React from "react";
import { Question, ExamSection, UserResponse, QuestionStatus } from "@/types/exam";

interface SubmitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmSubmit: () => void;
  sections: ExamSection[];
  questions: Question[];
  responses: Record<number, UserResponse>;
}

export function SubmitConfirmModal({
  isOpen,
  onClose,
  onConfirmSubmit,
  sections,
  questions,
  responses,
}: SubmitModalProps) {
  if (!isOpen) return null;

  // Calculate per-section counts
  const sectionSummary = sections.map((sec) => {
    const secQuestions = questions.filter((q) => q.sectionId === sec.id);
    let answered = 0;
    let notAnswered = 0;
    let marked = 0;
    let answeredMarked = 0;
    let notVisited = 0;

    secQuestions.forEach((q) => {
      const resp = responses[q.id];
      const status: QuestionStatus = resp?.status || "not_visited";
      switch (status) {
        case "answered":
          answered++;
          break;
        case "not_answered":
          notAnswered++;
          break;
        case "marked_for_review":
          marked++;
          break;
        case "answered_marked_for_review":
          answeredMarked++;
          break;
        case "not_visited":
        default:
          notVisited++;
          break;
      }
    });

    return {
      name: sec.name,
      total: secQuestions.length,
      answered,
      notAnswered,
      marked,
      answeredMarked,
      notVisited,
    };
  });

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 select-none font-sans">
      <div className="bg-white rounded-[6px] border-2 border-[#337ab7] max-w-3xl w-full shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="bg-[#337ab7] text-white px-4 py-2.5 flex items-center justify-between font-bold text-[14px]">
          <span>Exam Summary & Final Submission</span>
          <button type="button" onClick={onClose} className="text-white hover:text-white/80 font-bold cursor-pointer">
            ✕
          </button>
        </div>

        {/* Summary Table */}
        <div className="p-5 space-y-4">
          <p className="text-[13px] text-[#333]">
            Please review your question attempts across all sections before submitting:
          </p>

          <div className="overflow-x-auto border border-[#ccc] rounded">
            <table className="w-full text-[12px] text-center border-collapse">
              <thead>
                <tr className="bg-[#f0f0f0] border-b border-[#ccc] font-bold text-[#333]">
                  <th className="py-2.5 px-3 text-left">Section Name</th>
                  <th className="py-2.5 px-2">Total Qs</th>
                  <th className="py-2.5 px-2 text-[#3c763d]">Answered</th>
                  <th className="py-2.5 px-2 text-[#a94442]">Not Answered</th>
                  <th className="py-2.5 px-2 text-[#6f42c1]">Marked for Review</th>
                  <th className="py-2.5 px-2 text-[#6f42c1]">Ans & Marked</th>
                  <th className="py-2.5 px-2 text-[#777]">Not Visited</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e4e4e4] font-mono">
                {sectionSummary.map((sec, i) => (
                  <tr key={i} className="hover:bg-[#fcfcfc]">
                    <td className="py-2 px-3 text-left font-sans font-medium text-black">{sec.name}</td>
                    <td className="py-2 px-2 font-bold">{sec.total}</td>
                    <td className="py-2 px-2 text-[#3c763d] font-bold">{sec.answered}</td>
                    <td className="py-2 px-2 text-[#a94442] font-bold">{sec.notAnswered}</td>
                    <td className="py-2 px-2 text-[#6f42c1] font-bold">{sec.marked}</td>
                    <td className="py-2 px-2 text-[#6f42c1] font-bold">{sec.answeredMarked}</td>
                    <td className="py-2 px-2 text-[#777]">{sec.notVisited}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-3 bg-[#fcf8e3] border border-[#faebcc] rounded text-[12px] text-[#8a6d3b]">
            ⚠️ <strong>Notice:</strong> Once submitted, you will not be able to modify any responses. Your scorecard and detailed performance analysis will be generated immediately.
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#f5f5f5] px-5 py-3 border-t border-[#ddd] flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 bg-white hover:bg-[#e6e6e6] border border-[#ccc] text-[#333] rounded-[3px] text-[12px] font-bold transition-colors cursor-pointer"
          >
            No, Resume Exam
          </button>
          <button
            type="button"
            onClick={onConfirmSubmit}
            className="px-5 py-1.5 bg-[#5cb85c] hover:bg-[#449d44] border border-[#4cae4c] text-white rounded-[3px] text-[12px] font-bold transition-colors cursor-pointer shadow-xs"
          >
            Yes, Submit Exam
          </button>
        </div>
      </div>
    </div>
  );
}

export function QuestionPaperModal({
  isOpen,
  onClose,
  questions,
}: {
  isOpen: boolean;
  onClose: () => void;
  questions: Question[];
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 select-none font-sans">
      <div className="bg-white rounded-[6px] border-2 border-[#337ab7] max-w-4xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150">
        <div className="bg-[#337ab7] text-white px-4 py-2.5 flex items-center justify-between font-bold text-[14px]">
          <span>Full Question Paper</span>
          <button type="button" onClick={onClose} className="text-white hover:text-white/80 font-bold cursor-pointer">
            ✕
          </button>
        </div>

        <div className="p-5 overflow-y-auto space-y-6 text-[13px]">
          {questions.map((q, idx) => (
            <div key={q.id} className="pb-5 border-b border-[#e0e0e0] last:border-0 space-y-2">
              <div className="flex items-center justify-between text-[12px] text-[#666]">
                <strong className="text-black">Q.{idx + 1} ({q.sectionName})</strong>
                <span>Type: {q.type} | Marks: +{q.marks} / -{q.negativeMarks}</span>
              </div>
              <div className="text-[#222] leading-relaxed whitespace-pre-line">
                {q.questionText}
              </div>
              {q.options && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 font-mono text-[12px]">
                  {q.options.map((opt) => (
                    <div key={opt.id} className="p-2 bg-[#f9f9f9] border border-[#e8e8e8] rounded">
                      <strong>{opt.id}.</strong> {opt.text}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-[#f5f5f5] px-4 py-2.5 border-t border-[#ddd] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 bg-[#337ab7] hover:bg-[#286090] text-white rounded-[3px] text-[12px] font-bold cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export function InstructionsModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 select-none font-sans">
      <div className="bg-white rounded-[6px] border-2 border-[#337ab7] max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150">
        <div className="bg-[#337ab7] text-white px-4 py-2.5 flex items-center justify-between font-bold text-[14px]">
          <span>General Examination Instructions</span>
          <button type="button" onClick={onClose} className="text-white hover:text-white/80 font-bold cursor-pointer">
            ✕
          </button>
        </div>

        <div className="p-5 overflow-y-auto space-y-4 text-[13px] text-[#333] leading-relaxed">
          <h4 className="font-bold text-black text-[14px]">Navigating to a Question:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Click on the question number in the Question Palette at the right of your screen to go to that numbered question directly.</li>
            <li>Click on <strong>Save & Next</strong> to save your answer for the current question and then go to the next question.</li>
            <li>Click on <strong>Mark for Review & Next</strong> to save your answer for the current question, mark it for review, and then go to the next question.</li>
          </ul>

          <h4 className="font-bold text-black text-[14px]">Answering a Question:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>For Multiple Choice Type (MCQ): To select your answer, click on the button of one of the options.</li>
            <li>To deselect your chosen answer, click on the button of the chosen option again or click on the <strong>Clear Response</strong> button.</li>
            <li>For Numerical Answer Type (NAT): Enter a number using the keyboard or virtual numerical keypad.</li>
          </ul>
        </div>

        <div className="bg-[#f5f5f5] px-4 py-2.5 border-t border-[#ddd] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 bg-[#337ab7] hover:bg-[#286090] text-white rounded-[3px] text-[12px] font-bold cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
