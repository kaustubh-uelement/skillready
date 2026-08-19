"use client";

import React from "react";
import { Question, QuestionStatus, UserResponse } from "@/types/exam";
import { GateShape } from "./GateShapes";

interface GateSidebarPaletteProps {
  candidateName: string;
  candidateId: string;
  sectionName: string;
  questions: Question[];
  currentQuestionId: number;
  responses: Record<number, UserResponse>;
  statusCounts: Record<QuestionStatus, number>;
  onSelectQuestion: (questionId: number) => void;
  onSubmitExam: () => void;
}

export function GateSidebarPalette({
  candidateName,
  candidateId,
  sectionName,
  questions,
  currentQuestionId,
  responses,
  statusCounts,
  onSelectQuestion,
  onSubmitExam,
}: GateSidebarPaletteProps) {
  return (
    <aside className="w-[280px] sm:w-[320px] bg-[#fdfdfd] border-l border-[#d4d4d4] flex flex-col justify-between select-none font-sans overflow-hidden">
      <div className="overflow-y-auto">
        {/* ── Candidate Card ────────────────────────────────────────── */}
        <div className="p-3 border-b border-[#e0e0e0] flex items-center gap-3 bg-[#f8f8f8]">
          <div className="w-14 h-14 rounded-[3px] bg-[#2bbbad] text-white flex items-center justify-center font-display font-bold text-2xl shadow-2xs">
            {candidateName.charAt(0)}
          </div>
          <div>
            <div className="text-[14px] font-bold text-black leading-tight">
              {candidateName}
            </div>
            <div className="font-mono text-[10px] text-[#666] mt-0.5">
              Roll No: {candidateId}
            </div>
          </div>
        </div>

        {/* ── Live Status Legend Table ──────────────────────────────── */}
        <div className="p-2.5 border-b border-[#e0e0e0] bg-white text-[11px]">
          <div className="grid grid-cols-2 gap-x-2 gap-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 flex items-center justify-center">
                <GateShape status="answered" number={statusCounts.answered} size="sm" />
              </div>
              <span className="text-[#333] text-[10px]">Answered</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-6 h-6 flex items-center justify-center">
                <GateShape status="not_answered" number={statusCounts.not_answered} size="sm" />
              </div>
              <span className="text-[#333] text-[10px]">Not Answered</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-6 h-6 flex items-center justify-center">
                <GateShape status="not_visited" number={statusCounts.not_visited} size="sm" />
              </div>
              <span className="text-[#333] text-[10px]">Not Visited</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-6 h-6 flex items-center justify-center">
                <GateShape status="marked_for_review" number={statusCounts.marked_for_review} size="sm" />
              </div>
              <span className="text-[#333] text-[10px]">Marked for Review</span>
            </div>
          </div>

          <div className="mt-2 pt-1.5 border-t border-[#f0f0f0] flex items-center gap-2">
            <div className="w-6 h-6 flex items-center justify-center">
              <GateShape status="answered_marked_for_review" number={statusCounts.answered_marked_for_review} size="sm" />
            </div>
            <span className="text-[#333] text-[9.5px] leading-tight">
              Answered & Marked for Review (will be considered for evaluation)
            </span>
          </div>
        </div>

        {/* ── Section Title Banner ──────────────────────────────────── */}
        <div className="bg-[#337ab7] text-white px-3 py-1.5 text-[12px] font-bold">
          {sectionName}
        </div>

        {/* ── Choose a Question Grid ────────────────────────────────── */}
        <div className="p-3">
          <div className="text-[12px] font-bold text-black mb-2.5">
            Choose a Question
          </div>

          <div className="grid grid-cols-4 gap-2.5 max-h-[calc(100vh-390px)] overflow-y-auto pr-1">
            {questions.map((q, idx) => {
              const resp = responses[q.id];
              const status = resp?.status || "not_visited";
              const isSelected = q.id === currentQuestionId;

              return (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => onSelectQuestion(q.id)}
                  className="flex items-center justify-center transition-transform active:scale-95 cursor-pointer"
                  title={`Question ${idx + 1} (${status})`}
                >
                  <GateShape
                    status={status}
                    number={idx + 1}
                    size="md"
                    isSelected={isSelected}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Bottom Submit Button ──────────────────────────────────── */}
      <div className="p-3 bg-[#e8e8e8] border-t border-[#ccc]">
        <button
          type="button"
          onClick={onSubmitExam}
          className="w-full py-2 bg-[#5bc0de] hover:bg-[#31b0d5] active:scale-98 text-white font-bold text-[14px] uppercase tracking-wider rounded-[3px] border border-[#46b8da] transition-all shadow-xs cursor-pointer"
        >
          Submit
        </button>
      </div>
    </aside>
  );
}
