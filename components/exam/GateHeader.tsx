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
    <header className="w-full select-none font-sans">
      {/* ── Top SkillReady Official Banner ──────────────────────────── */}
      <div className="bg-white border-b border-[#e0e0e0] px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* SkillReady Emblem */}
          <div className="w-9 h-9 rounded-[8px] bg-[#713FFF] text-white flex items-center justify-center font-display font-bold text-sm shadow-xs tracking-tight">
            SR
          </div>
          <div>
            <h1 className="text-[14px] sm:text-[16px] font-bold text-[#1E1238] uppercase tracking-tight font-display leading-tight flex items-center gap-2">
              <span>SKILLREADY SOFTWARE ENGINEERING ASSESSMENT</span>
              <span className="hidden md:inline text-[10px] px-2 py-0.5 rounded bg-[#F2EEFD] text-[#713FFF] font-mono font-bold">
                SWE-CBT PROCTORED
              </span>
            </h1>
            <p className="text-[10px] sm:text-[11px] text-[#7A7A88] font-sans">
              SkillReady Certified Developer Program · Industry Placement & Coding Competency Benchmark
            </p>
          </div>
        </div>

        {/* Right Status Badge */}
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#F4F2FA] text-[#713FFF] text-[11px] font-mono font-bold border border-[#713FFF]/20">
            <span className="w-2 h-2 rounded-full bg-[#713FFF] animate-pulse" />
            Live Assessment Mode
          </span>
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
