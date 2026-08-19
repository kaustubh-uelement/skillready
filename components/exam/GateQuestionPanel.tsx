"use client";

import React from "react";
import { Question, UserResponse } from "@/types/exam";

interface GateQuestionPanelProps {
  question: Question;
  questionNumber: number;
  currentResponse?: UserResponse;
  onSelectOption: (optionId: string) => void;
  onToggleMsqOption: (optionId: string) => void;
  onChangeNumericAnswer: (value: string) => void;
}

export function GateQuestionPanel({
  question,
  questionNumber,
  currentResponse,
  onSelectOption,
  onToggleMsqOption,
  onChangeNumericAnswer,
}: GateQuestionPanelProps) {
  const getQuestionTypeLabel = () => {
    switch (question.type) {
      case "MCQ":
        return "Multiple Choice Question";
      case "MSQ":
        return "Multiple Select Question";
      case "NAT":
        return "Numerical Answer Type";
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-white overflow-y-auto p-4 sm:p-6 select-none font-sans">
      {/* ── Question Top Spec Banner ────────────────────────────────── */}
      <div className="pb-2 border-b border-[#ddd] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[12px]">
        <div className="text-[#c7254e] font-bold">
          Question Type: <span className="font-semibold">{getQuestionTypeLabel()}</span>
        </div>

        <div className="text-[#555] font-mono text-[11px]">
          Marks for correct answer:{" "}
          <strong className="text-[#3c763d]">{question.marks.toFixed(1)}</strong> | Negative Marks:{" "}
          <strong className="text-[#a94442]">{question.negativeMarks.toFixed(2)}</strong>
        </div>
      </div>

      {/* ── Question Statement Area ─────────────────────────────────── */}
      <div className="py-4 space-y-4">
        <h2 className="text-[15px] font-bold text-black flex items-center gap-2">
          <span>Question No. {questionNumber}</span>
          {question.topic && (
            <span className="text-[10px] font-mono font-normal px-2 py-0.5 rounded bg-[#f4f4f4] border border-[#ddd] text-[#666]">
              {question.topic}
            </span>
          )}
        </h2>

        {/* Question Text */}
        <div className="text-[14px] text-[#222] leading-relaxed whitespace-pre-line">
          {question.questionText}
        </div>

        {/* Optional Question Image / Diagram */}
        {question.image && (
          <div className="my-3 p-2 bg-[#fcfcfc] border border-[#eee] rounded max-w-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={question.image} alt={`Diagram for Question ${questionNumber}`} className="max-h-60 mx-auto object-contain" />
          </div>
        )}
      </div>

      {/* ── Response Options / Input Area ───────────────────────────── */}
      <div className="mt-2 pt-4 border-t border-[#eee]">
        {/* MCQ: Single Radio */}
        {question.type === "MCQ" && question.options && (
          <div className="space-y-3">
            {question.options.map((opt) => {
              const isSelected = currentResponse?.selectedOption === opt.id;
              return (
                <label
                  key={opt.id}
                  className={`flex items-start gap-3 p-2.5 rounded-[4px] border transition-all cursor-pointer select-none ${
                    isSelected
                      ? "bg-[#eaf4fe] border-[#337ab7] text-black font-medium"
                      : "bg-[#fafafa] border-[#e0e0e0] hover:bg-[#f0f0f0] text-[#333]"
                  }`}
                >
                  <input
                    type="radio"
                    name={`q_${question.id}`}
                    value={opt.id}
                    checked={isSelected}
                    onChange={() => onSelectOption(opt.id)}
                    className="mt-1 w-4 h-4 accent-[#337ab7] cursor-pointer"
                  />
                  <div className="flex-1 text-[13px] leading-snug">
                    <strong className="mr-2 font-mono">{opt.id}.</strong>
                    <span>{opt.text}</span>
                  </div>
                </label>
              );
            })}
          </div>
        )}

        {/* MSQ: Multiple Checkbox */}
        {question.type === "MSQ" && question.options && (
          <div className="space-y-3">
            <div className="text-[11px] text-[#666] font-mono mb-2">
              (Select all options that apply. No negative marking.)
            </div>
            {question.options.map((opt) => {
              const isSelected = currentResponse?.selectedOptions?.includes(opt.id) || false;
              return (
                <label
                  key={opt.id}
                  className={`flex items-start gap-3 p-2.5 rounded-[4px] border transition-all cursor-pointer select-none ${
                    isSelected
                      ? "bg-[#eaf4fe] border-[#337ab7] text-black font-medium"
                      : "bg-[#fafafa] border-[#e0e0e0] hover:bg-[#f0f0f0] text-[#333]"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => onToggleMsqOption(opt.id)}
                    className="mt-1 w-4 h-4 accent-[#337ab7] cursor-pointer"
                  />
                  <div className="flex-1 text-[13px] leading-snug">
                    <strong className="mr-2 font-mono">{opt.id}.</strong>
                    <span>{opt.text}</span>
                  </div>
                </label>
              );
            })}
          </div>
        )}

        {/* NAT: Numeric Answer Type Input */}
        {question.type === "NAT" && (
          <div className="space-y-4 max-w-sm">
            <div className="text-[11px] text-[#666] font-mono">
              (Enter the numeric answer. Decimals are permitted. No negative marking.)
            </div>

            <div className="flex items-center gap-3">
              <label className="text-[13px] font-bold text-black">
                Answer:
              </label>
              <input
                type="text"
                value={currentResponse?.numericAnswer || ""}
                onChange={(e) => onChangeNumericAnswer(e.target.value)}
                placeholder="e.g. 81 or 5.33"
                className="w-48 px-3 py-2 border-2 border-[#337ab7] bg-white font-mono text-[16px] font-bold text-black rounded outline-hidden focus:ring-2 focus:ring-[#337ab7]"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
