"use client";

import React, { useState, useRef, useEffect } from "react";
import { ExamSection, QuestionStatus } from "@/types/exam";

interface GateSubHeaderProps {
  sections: ExamSection[];
  activeSectionId: string;
  onSelectSection: (sectionId: string) => void;
  timeLeftSeconds: number;
  onToggleCalculator: () => void;
  statusCounts: Record<QuestionStatus, number>;
}

export function GateSubHeader({
  sections,
  activeSectionId,
  onSelectSection,
  timeLeftSeconds,
  onToggleCalculator,
  statusCounts,
}: GateSubHeaderProps) {
  const [legendPopoverOpen, setLegendPopoverOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  // Format seconds to HH : MM : SS
  const hours = String(Math.floor(timeLeftSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((timeLeftSeconds % 3600) / 60)).padStart(2, "0");
  const seconds = String(timeLeftSeconds % 60).padStart(2, "0");

  const activeSection = sections.find((s) => s.id === activeSectionId) || sections[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setLegendPopoverOpen(false);
      }
    };
    if (legendPopoverOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [legendPopoverOpen]);

  return (
    <div className="w-full bg-[#fbfbfb] border-b border-[#dcdcdc] select-none">
      {/* ── Row 1: Section Dropdown & Timer + Calculator ───────────── */}
      <div className="px-4 py-2 flex items-center justify-between gap-4">
        {/* Left: Section Popover Button */}
        <div className="relative" ref={popoverRef}>
          <button
            type="button"
            onClick={() => setLegendPopoverOpen(!legendPopoverOpen)}
            className="flex items-center gap-2 bg-[#428bca] hover:bg-[#3071a9] text-white px-3 py-1 rounded-[3px] text-[12px] font-bold shadow-2xs transition-colors cursor-pointer"
          >
            <span>{activeSection.name}</span>
            <span className="w-4 h-4 rounded-full bg-white/20 text-white flex items-center justify-center text-[10px]">
              ℹ
            </span>
          </button>

          {/* Screenshot 3: Section Legend Popover */}
          {legendPopoverOpen && (
            <div className="absolute top-8 left-0 z-40 w-64 bg-white border border-[#3071a9] rounded-[4px] shadow-xl overflow-hidden animate-in fade-in-50 duration-100">
              <div className="bg-[#3071a9] text-white px-3 py-1.5 text-[12px] font-bold flex items-center justify-between">
                <span>{activeSection.name}</span>
                <span className="text-[10px] text-white/80 font-normal">Section Summary</span>
              </div>
              <div className="p-2 space-y-1.5 text-[11px]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-[2px] bg-[#5bb75b] text-white flex items-center justify-center font-mono font-bold text-xs">
                    {statusCounts.answered}
                  </div>
                  <span className="text-[#333]">Answered</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-[2px] bg-[#e04b3a] text-white flex items-center justify-center font-mono font-bold text-xs">
                    {statusCounts.not_answered}
                  </div>
                  <span className="text-[#333]">Not Answered</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-[2px] bg-[#e6e6e6] border border-[#ccc] text-black flex items-center justify-center font-mono font-bold text-xs">
                    {statusCounts.not_visited}
                  </div>
                  <span className="text-[#333]">Not Visited</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#6f42c1] text-white flex items-center justify-center font-mono font-bold text-xs">
                    {statusCounts.marked_for_review}
                  </div>
                  <span className="text-[#333]">Marked for Review</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative w-6 h-6 rounded-full bg-[#6f42c1] text-white flex items-center justify-center font-mono font-bold text-xs">
                    {statusCounts.answered_marked_for_review}
                    <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#32cd32]" />
                  </div>
                  <span className="text-[#333]">Answered & Marked for Review</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right: Calculator & Timer */}
        <div className="flex items-center gap-4">
          {/* Scientific Calculator Button */}
          <button
            type="button"
            onClick={onToggleCalculator}
            title="Open Scientific Calculator"
            className="flex items-center gap-1.5 px-2.5 py-1 bg-[#ff9800] hover:bg-[#f57c00] active:scale-95 text-white rounded-[3px] text-[12px] font-bold shadow-2xs transition-all cursor-pointer"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="4" y="2" width="16" height="20" rx="2" />
              <line x1="8" y1="6" x2="16" y2="6" />
              <line x1="16" y1="14" x2="16" y2="18" />
              <path d="M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M8 18h.01M12 18h.01" />
            </svg>
            <span className="hidden sm:inline">Calculator</span>
          </button>

          {/* Digital Timer */}
          <div className="flex items-center gap-1.5 font-mono text-[13px] sm:text-[15px] font-bold text-[#222]">
            <span className="text-[#666] text-[12px] uppercase font-sans font-semibold mr-1">Time Left :</span>
            <span className="bg-[#fff] border border-[#ccc] px-2 py-0.5 rounded text-[#8b0000]">
              {hours} : {minutes} : {seconds}
            </span>
          </div>
        </div>
      </div>

      {/* ── Row 2: Section Tabs ────────────────────────────────────── */}
      <div className="px-4 flex items-center gap-1 border-t border-[#eaeaea] pt-1">
        <span className="text-[11px] font-bold text-[#666] mr-2">Sections:</span>
        {sections.map((sec) => {
          const isActive = sec.id === activeSectionId;
          return (
            <button
              key={sec.id}
              type="button"
              onClick={() => onSelectSection(sec.id)}
              className={`px-3 py-1.5 text-[12px] font-bold rounded-t-[4px] border-t border-l border-r transition-colors cursor-pointer ${
                isActive
                  ? "bg-[#337ab7] border-[#337ab7] text-white shadow-xs"
                  : "bg-[#e8e8e8] border-[#ccc] text-[#333] hover:bg-[#ddd]"
              }`}
            >
              {sec.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
