"use client";

import React from "react";

const PROBLEMS_DATA = [
  {
    title: "Students",
    items: [
      "Career confusion",
      "Lack of practical skills",
      "Placement pressure",
      "No clear roadmap",
    ],
  },
  {
    title: "Colleges",
    items: [
      "Limited placements",
      "Tracking student readiness",
      "Industry expectations",
      "Measurable outcomes",
    ],
  },
  {
    title: "Companies",
    items: [
      "Too Many Applicants",
      "Skills Mismatch",
      "Costly Screening",
      "Longer Hiring Cycles",
    ],
  },
];

export default function GapProblemSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="wrap">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-[760px] mx-auto mb-14 md:mb-18">
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center rounded-[10px] border border-[#D9D9D9] px-3.5 py-1 text-[12px] font-semibold tracking-wider text-[#4C4C58] uppercase mb-4">
            THE GAP PROBLEM
          </div>

          {/* Heading */}
          <h2 className="text-[34px] sm:text-[44px] md:text-[48px] font-bold text-black tracking-tight leading-[1.12] mb-4">
            Everyone Wants Better Career Outcomes. Few Know How to Get There.
          </h2>

          {/* Subtitle */}
          <p className="text-[16px] sm:text-[18px] text-[#4C4C58] leading-relaxed max-w-[620px]">
            Today&apos;s education ecosystem faces critical gap. <br className="hidden sm:inline" />
            The gap isn&apos;t a lack of ambition. The gap is visibility, guidance, and alignment.
          </p>
        </div>

        {/* 3 Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-[1060px] mx-auto">
          {PROBLEMS_DATA.map((col) => (
            <div
              key={col.title}
              className="bg-white rounded-[10px] border border-[#E8E4F0] p-7 sm:p-8 shadow-xs hover:shadow-md transition-shadow flex flex-col items-start"
            >
              <h3 className="text-[24px] sm:text-[26px] font-bold text-black mb-6">
                {col.title}
              </h3>
              <div className="flex flex-col gap-3 w-full">
                {col.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-[#FAF8FF] border border-[#F0ECFA] rounded-[10px] px-4 py-3 text-[15px] sm:text-[16px] font-normal text-[#292929] transition-colors hover:bg-[#F2EEFD]"
                  >
                    <span className="text-red-500 font-bold text-sm flex-none">✕</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
