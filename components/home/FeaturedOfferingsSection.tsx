"use client";

import React, { useRef, useState, useEffect } from "react";

const OFFERINGS = [
  {
    title: "Structured Learning Paths",
    desc: "Know what to learn, when to learn it, and why it matters for your career.",
    icon: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
        <path d="m4 9 4-4 4 4M12 19l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Skill Assessments",
    desc: "Evaluate strengths, identify gaps, and track improvement over time.",
    icon: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Career Readiness Framework",
    desc: "Structured benchmarking aligning student capability with real industry hiring expectations.",
    icon: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m19 9-5 5-4-4-3 3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Student Progress Tracking",
    desc: "Colleges gain real-time visibility into student engagement and performance.",
    icon: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M18 20V10M12 20V4M6 20v-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Employability Profiles",
    desc: "Students create a stronger professional profile that showcases capabilities beyond academic scores.",
    icon: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Industry Alignment",
    desc: "Companies connect with candidates who have already demonstrated readiness.",
    icon: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function FeaturedOfferingsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, offsetWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / (offsetWidth * 0.7));
      setActiveIdx(Math.min(index, OFFERINGS.length - 1));
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
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="wrap">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-[760px] mx-auto mb-12 md:mb-18">
          <div className="inline-flex items-center rounded-full border border-[#D9D9D9] px-3.5 py-1 text-[12px] font-semibold tracking-wider text-[#4C4C58] uppercase mb-4 shadow-2xs">
            FEATURED OFFERINGS
          </div>

          <h2 className="text-[32px] sm:text-[42px] md:text-[48px] font-bold text-black tracking-tight leading-[1.12]">
            Everything Needed To Become <br />
            Placement Ready
          </h2>
        </div>

        {/* 6 Grid Offerings Cards (Slider on mobile, 2/3 col grid on desktop) */}
        <div
          ref={scrollRef}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-[1140px] mx-auto overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar px-4 sm:px-6 md:px-0 -mx-4 sm:-mx-6 md:mx-auto pb-4 md:pb-0"
        >
          {OFFERINGS.map((item, idx) => (
            <div
              key={idx}
              className="w-[78vw] max-w-[280px] sm:w-[300px] flex-none snap-center md:w-auto md:max-w-none md:flex-initial bg-white rounded-[10px] border border-[#E8E4F0] p-6 sm:p-7 md:p-8 flex flex-col items-start gap-4 transition-all duration-200 hover:shadow-md hover:border-[#DCD2F5]"
            >
              {/* Icon Badge */}
              <div className="w-10 h-10 rounded-[10px] bg-[#713FFF] flex items-center justify-center shadow-xs flex-none">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-[19px] sm:text-[21px] md:text-[22px] font-bold text-black leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] sm:text-[15px] text-[#4C4C58] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Pagination Dots */}
        <div className="flex justify-center items-center gap-1.5 mt-4 md:hidden">
          {OFFERINGS.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-200 ${
                activeIdx === i ? "w-5 bg-[#713FFF]" : "w-1.5 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
