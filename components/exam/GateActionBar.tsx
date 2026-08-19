"use client";

import React from "react";

interface GateActionBarProps {
  onMarkForReviewAndNext: () => void;
  onClearResponse: () => void;
  onPrevious: () => void;
  onSaveAndNext: () => void;
  isFirstQuestion: boolean;
  isLastQuestion: boolean;
}

export function GateActionBar({
  onMarkForReviewAndNext,
  onClearResponse,
  onPrevious,
  onSaveAndNext,
  isFirstQuestion,
  isLastQuestion,
}: GateActionBarProps) {
  return (
    <div className="w-full bg-[#f5f5f5] border-t border-[#d4d4d4] px-4 py-2.5 flex items-center justify-between gap-2 select-none">
      {/* Left Action Buttons */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onMarkForReviewAndNext}
          className="px-3.5 py-1.5 bg-white hover:bg-[#e6e6e6] border border-[#ccc] text-[#333] rounded-[3px] text-[12px] font-bold transition-colors cursor-pointer shadow-2xs"
        >
          Mark For Review & Next
        </button>

        <button
          type="button"
          onClick={onClearResponse}
          className="px-3.5 py-1.5 bg-white hover:bg-[#e6e6e6] border border-[#ccc] text-[#333] rounded-[3px] text-[12px] font-bold transition-colors cursor-pointer shadow-2xs"
        >
          Clear Response
        </button>
      </div>

      {/* Right Navigation Buttons */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          disabled={isFirstQuestion}
          onClick={onPrevious}
          className="px-4 py-1.5 bg-white hover:bg-[#e6e6e6] disabled:opacity-40 disabled:cursor-not-allowed border border-[#ccc] text-[#333] rounded-[3px] text-[12px] font-bold transition-colors cursor-pointer shadow-2xs"
        >
          Previous
        </button>

        <button
          type="button"
          onClick={onSaveAndNext}
          className="px-5 py-1.5 bg-[#337ab7] hover:bg-[#286090] active:scale-98 border border-[#2e6da4] text-white rounded-[3px] text-[12px] font-bold transition-colors cursor-pointer shadow-xs"
        >
          {isLastQuestion ? "Save & Next" : "Save & Next"}
        </button>
      </div>
    </div>
  );
}
