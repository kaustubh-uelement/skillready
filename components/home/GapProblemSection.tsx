"use client";

import React, { useRef, useState, useEffect } from "react";

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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, offsetWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / (offsetWidth * 0.8));
      setActiveIdx(Math.min(index, PROBLEMS_DATA.length - 1));
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll, { passive: true });
      return () => el.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section className="pt-20 pb-20 md:pt-28 md:pb-36 bg-white overflow-hidden">
      <div className="wrap">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-[760px] mx-auto mb-12 md:mb-18">
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center rounded-full border border-[#D9D9D9] px-3.5 py-1 text-[12px] font-semibold tracking-wider text-[#4C4C58] uppercase mb-4 shadow-2xs">
            THE GAP PROBLEM
          </div>

          {/* Heading */}
          <h2 className="text-[32px] sm:text-[42px] md:text-[48px] font-bold text-black tracking-tight leading-[1.12] mb-4">
            Everyone Wants Better Career Outcomes. Few Know How to Get There.
          </h2>

          {/* Subtitle */}
          <p className="text-[15px] sm:text-[17px] md:text-[18px] text-[#4C4C58] leading-relaxed max-w-[620px]">
            Today&apos;s education ecosystem faces critical gap. <br className="hidden sm:inline" />
            The gap isn&apos;t a lack of ambition. The gap is visibility, guidance, and alignment.
          </p>
        </div>

        {/* 3 Column Cards: Slider on mobile (<md), V-shape on desktop (md+) */}
        <div
          ref={scrollRef}
          className="flex md:grid md:grid-cols-3 gap-5 lg:gap-8 max-w-[1060px] mx-auto overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar px-4 sm:px-6 md:px-0 -mx-4 sm:-mx-6 md:mx-auto pb-4 md:pb-0"
        >
          {PROBLEMS_DATA.map((col, index) => {
            // In Figma: Middle card (Colleges, index 1) is shifted down by 80px (V-shape) on desktop
            const vShapeClass =
              index === 1
                ? "md:translate-y-16 lg:translate-y-20"
                : "md:translate-y-0";

            return (
              <div
                key={col.title}
                className={`w-[85vw] max-w-[320px] sm:w-[320px] flex-none snap-center md:w-auto md:max-w-none md:flex-initial bg-white rounded-[10px] border border-[#E8E4F0] p-6 sm:p-7 md:p-8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col items-start ${vShapeClass}`}
              >
                <h3 className="text-[22px] sm:text-[24px] md:text-[26px] font-bold text-black mb-5 sm:mb-6">
                  {col.title}
                </h3>
                <div className="flex flex-col gap-3 w-full">
                  {col.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 bg-[#FAF8FF] border border-[#F0ECFA] rounded-[10px] px-3.5 py-2.5 sm:px-4 sm:py-3 text-[14px] sm:text-[15px] md:text-[16px] font-normal text-[#292929] transition-colors hover:bg-[#F2EEFD]"
                    >
                      <span className="text-red-500 font-bold text-xs sm:text-sm flex-none">✕</span>
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-4 md:hidden">
          {PROBLEMS_DATA.map((_, i) => (
            <span
              key={i}
              className={`h-2 rounded-full transition-all duration-200 ${
                activeIdx === i ? "w-6 bg-[#713FFF]" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
