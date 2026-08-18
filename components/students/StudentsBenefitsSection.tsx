"use client";

import React, { useRef, useState, useEffect } from "react";

const BENEFITS = [
  {
    title: "Topic-Wise Practice Sets",
    desc: "Over 6,000+ practice questions covering Quantitative Aptitude, Logical Reasoning, Verbal Ability, and Core Coding.",
    icon: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    title: "Video Solutions for Every Question",
    desc: "Step-by-step video breakdowns showing the fastest shortcuts, mental math tricks, and optimal algorithms.",
    icon: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
  },
  {
    title: "Company-Specific Mock Tests",
    desc: "Simulate exact test patterns, sectional timing, and question types for TCS, Infosys, Wipro, Accenture, and product firms.",
    icon: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Verified Employability Profile",
    desc: "Build a living showcase of your demonstrated aptitude, coding scores, and certifications that companies can verify instantly.",
    icon: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Interactive Masterclasses",
    desc: "Learn directly from experienced corporate instructors, senior developers, and placement mentors.",
    icon: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    title: "Direct Recruiter Visibility",
    desc: "Top performers get highlighted directly to hiring managers looking for verified, pre-screened freshers.",
    icon: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
];

export default function StudentsBenefitsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, offsetWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / (offsetWidth * 0.7));
      setActiveIdx(Math.min(index, BENEFITS.length - 1));
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
    <section className="py-20 md:py-28 bg-white overflow-hidden" id="benefits">
      <div className="wrap">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-[760px] mx-auto mb-12 md:mb-18">
          <div className="inline-flex items-center rounded-[10px] border border-[#D9D9D9] px-3.5 py-1 text-[12px] font-semibold tracking-wider text-[#4C4C58] uppercase mb-4 shadow-2xs">
            WHAT YOU GET
          </div>

          <h2 className="text-[32px] sm:text-[42px] md:text-[48px] font-bold text-black tracking-tight leading-[1.12] mb-4">
            Everything You Need to Bridge <br />
            The Gap Between College & Career
          </h2>

          <p className="text-[15px] sm:text-[17px] md:text-[18px] text-[#4C4C58] leading-relaxed max-w-[640px]">
            Traditional degrees teach theory. SkillReady equips you with
            practical, job-ready skills that employers actively test in campus
            and off-campus drives.
          </p>
        </div>

        {/* 6 Grid Feature Cards (Slider on mobile, 2/3 col on desktop) */}
        <div
          ref={scrollRef}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-[1140px] mx-auto overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar px-4 sm:px-6 md:px-0 -mx-4 sm:-mx-6 md:mx-auto pb-4 md:pb-0"
        >
          {BENEFITS.map((item, idx) => (
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
          {BENEFITS.map((_, i) => (
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
