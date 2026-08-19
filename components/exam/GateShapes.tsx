import React from "react";
import { QuestionStatus } from "@/types/exam";

interface GateShapeProps {
  status: QuestionStatus;
  number: number | string;
  size?: "sm" | "md" | "lg";
  className?: string;
  isSelected?: boolean;
}

export function GateShape({
  status,
  number,
  size = "md",
  className = "",
  isSelected = false,
}: GateShapeProps) {
  const sizeClasses = {
    sm: "w-7 h-7 text-[11px]",
    md: "w-10 h-10 text-[13px]",
    lg: "w-12 h-12 text-[15px]",
  }[size];

  // Selected ring highlight
  const selectedBorder = isSelected ? "ring-2 ring-black ring-offset-1" : "";

  switch (status) {
    case "answered":
      // Green shape: upward pointing pentagon / house roof
      return (
        <div
          className={`relative inline-flex items-center justify-center font-bold font-mono text-white ${sizeClasses} ${selectedBorder} ${className}`}
          style={{
            backgroundColor: "#5bb75b",
            clipPath: "polygon(50% 0%, 100% 30%, 100% 100%, 0% 100%, 0% 30%)",
          }}
        >
          <span className="pt-1.5">{number}</span>
        </div>
      );

    case "not_answered":
      // Red/Orange shape: downward pointing pentagon
      return (
        <div
          className={`relative inline-flex items-center justify-center font-bold font-mono text-white ${sizeClasses} ${selectedBorder} ${className}`}
          style={{
            backgroundColor: "#e04b3a",
            clipPath: "polygon(0% 0%, 100% 0%, 100% 70%, 50% 100%, 0% 70%)",
          }}
        >
          <span className="pb-1.5">{number}</span>
        </div>
      );

    case "marked_for_review":
      // Purple circle
      return (
        <div
          className={`relative inline-flex items-center justify-center rounded-full font-bold font-mono text-white ${sizeClasses} ${selectedBorder} ${className}`}
          style={{ backgroundColor: "#6f42c1" }}
        >
          <span>{number}</span>
        </div>
      );

    case "answered_marked_for_review":
      // Purple circle with vibrant green badge dot on bottom right
      return (
        <div
          className={`relative inline-flex items-center justify-center rounded-full font-bold font-mono text-white ${sizeClasses} ${selectedBorder} ${className}`}
          style={{ backgroundColor: "#6f42c1" }}
        >
          <span>{number}</span>
          <span
            className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-white"
            style={{ backgroundColor: "#32cd32" }}
            title="Answered & Marked for Review"
          />
        </div>
      );

    case "not_visited":
    default:
      // Grey / White rounded square
      return (
        <div
          className={`relative inline-flex items-center justify-center rounded-[4px] border border-[#d4d4d4] bg-[#f8f8f8] font-semibold font-mono text-black shadow-2xs ${sizeClasses} ${selectedBorder} ${className}`}
        >
          <span>{number}</span>
        </div>
      );
  }
}

export function GateLegendShape({ status }: { status: QuestionStatus }) {
  switch (status) {
    case "answered":
      return (
        <div
          className="w-5 h-5 flex-none"
          style={{
            backgroundColor: "#5bb75b",
            clipPath: "polygon(50% 0%, 100% 30%, 100% 100%, 0% 100%, 0% 30%)",
          }}
        />
      );
    case "not_answered":
      return (
        <div
          className="w-5 h-5 flex-none"
          style={{
            backgroundColor: "#e04b3a",
            clipPath: "polygon(0% 0%, 100% 0%, 100% 70%, 50% 100%, 0% 70%)",
          }}
        />
      );
    case "marked_for_review":
      return <div className="w-5 h-5 rounded-full flex-none" style={{ backgroundColor: "#6f42c1" }} />;
    case "answered_marked_for_review":
      return (
        <div className="relative w-5 h-5 rounded-full flex-none" style={{ backgroundColor: "#6f42c1" }}>
          <span
            className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border border-white"
            style={{ backgroundColor: "#32cd32" }}
          />
        </div>
      );
    case "not_visited":
    default:
      return <div className="w-5 h-5 rounded-[3px] border border-[#d4d4d4] bg-[#f8f8f8] flex-none" />;
  }
}
