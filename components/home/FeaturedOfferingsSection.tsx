"use client";

import React from "react";

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
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="wrap">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-[760px] mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center rounded-full border border-[#D9D9D9] px-3.5 py-1 text-[12px] font-semibold tracking-wider text-[#4C4C58] uppercase mb-4">
            FEATURED OFFERINGS
          </div>

          <h2 className="text-[34px] sm:text-[44px] md:text-[48px] font-bold text-black tracking-tight leading-[1.12]">
            Everything Needed To Become <br />
            Placement Ready
          </h2>
        </div>

        {/* 6 Grid Offerings Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1140px] mx-auto">
          {OFFERINGS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#E8E4F0] p-7 sm:p-8 flex flex-col items-start gap-4 transition-all duration-200 hover:shadow-md hover:border-[#DCD2F5]"
            >
              {/* Icon Badge */}
              <div className="w-10 h-10 rounded-full bg-[#713FFF] flex items-center justify-center shadow-xs flex-none">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-[20px] sm:text-[22px] font-bold text-black leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] sm:text-[15px] text-[#4C4C58] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
