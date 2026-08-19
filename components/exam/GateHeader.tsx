"use client";

import React from "react";
import { TestMeta } from "@/types/exam";

interface GateHeaderProps {
  test: TestMeta;
  onOpenQuestionPaper: () => void;
  onOpenInstructions: () => void;
}

export function GateHeader({
  test,
  onOpenQuestionPaper,
  onOpenInstructions,
}: GateHeaderProps) {
  return (
    <header className="w-full select-none">
      {/* ── Top White Official Banner ───────────────────────────────── */}
      <div className="bg-white border-b border-[#e0e0e0] px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* IIT Emblem Placeholder */}
          <div className="w-10 h-10 rounded-full border border-[#8b0000] bg-[#fff5f5] text-[#8b0000] flex items-center justify-center font-serif font-bold text-xs shadow-2xs">
            IITM
          </div>
          <div>
            <h1 className="text-[14px] sm:text-[16px] font-bold text-[#8b0000] uppercase tracking-tight font-serif leading-tight">
              GRADUATE APTITUDE TEST IN ENGINEERING (GATE 2027)
            </h1>
            <p className="text-[10px] sm:text-[11px] text-[#555] font-sans">
              Organizing Institute: INDIAN INSTITUTE OF TECHNOLOGY MADRAS · SkillReady CBT Portal
            </p>
          </div>
        </div>

        {/* Right Portal Emblem */}
        <div className="hidden sm:flex items-center gap-2">
          <div className="w-9 h-9 rounded-[6px] bg-[#713FFF] text-white flex items-center justify-center font-bold text-xs shadow-2xs font-mono">
            SR
          </div>
        </div>
      </div>

      {/* ── Dark Olive/Black Sub-Bar ────────────────────────────────── */}
      <div className="bg-[#24272c] text-white px-4 py-1.5 flex items-center justify-between text-[12px] font-medium shadow-xs">
        <div className="flex items-center gap-2">
          <span className="text-[#ffd700] font-bold">{test.title}</span>
          <span className="text-[#888]">|</span>
          <span className="text-[#ccc] text-[11px]">{test.branch}</span>
        </div>

        <div className="flex items-center gap-4 text-[12px]">
          <button
            type="button"
            onClick={onOpenQuestionPaper}
            className="flex items-center gap-1.5 text-white hover:text-[#5bb75b] transition-colors cursor-pointer"
          >
            <span className="w-3.5 h-3.5 bg-[#5bb75b] text-white rounded-xs flex items-center justify-center text-[9px] font-bold">
              📄
            </span>
            <span className="font-semibold">Question Paper</span>
          </button>

          <button
            type="button"
            onClick={onOpenInstructions}
            className="flex items-center gap-1.5 text-white hover:text-[#5bc0de] transition-colors cursor-pointer"
          >
            <span className="w-3.5 h-3.5 bg-[#5bc0de] text-white rounded-full flex items-center justify-center text-[9px] font-bold">
              ℹ
            </span>
            <span className="font-semibold">Instructions</span>
          </button>
        </div>
      </div>
    </header>
  );
}
