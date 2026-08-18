"use client";

import React from "react";

const STEPS_DATA = [
  {
    role: "STUDENTS",
    flow: ["Learn", "Practice", "Test", "Build Profile", "Get Visible"],
    desc: "Students receive structured guidance that helps them understand exactly how to become job-ready.",
  },
  {
    role: "COLLEGES",
    flow: ["Train", "Monitor", "Track", "Improve", "Place"],
    desc: "Institutions gain dashboards, insights, and measurable visibility into student progress.",
  },
  {
    role: "COMPANIES",
    flow: ["Discover", "Assess", "Interview", "Hire"],
    desc: "Companies access candidates based on demonstrated skills and preparedness rather than resumes alone.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 md:py-28 bg-[#FAFAFC]">
      <div className="wrap">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-[760px] mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center rounded-full border border-[#D9D9D9] bg-white px-3.5 py-1 text-[12px] font-semibold tracking-wider text-[#4C4C58] uppercase mb-4 shadow-2xs">
            HOW SKILLREADY WORKS
          </div>

          <h2 className="text-[34px] sm:text-[44px] md:text-[48px] font-bold text-black tracking-tight leading-[1.12] mb-4">
            A Simple Path From Learning <br />
            To Opportunity
          </h2>

          <p className="text-[16px] sm:text-[18px] text-[#4C4C58] leading-relaxed max-w-[620px]">
            Students receive structured guidance that helps them understand exactly how to become job ready.
          </p>
        </div>

        {/* 3 Step Flow Row Cards */}
        <div className="flex flex-col gap-6 max-w-[1020px] mx-auto">
          {STEPS_DATA.map((row) => (
            <div
              key={row.role}
              className="bg-white rounded-2xl border border-[#E8E4F0] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 shadow-xs hover:border-[#713FFF]/40 transition-all duration-200"
            >
              {/* Role Pill */}
              <div className="flex-none">
                <span className="inline-block rounded-md bg-[#F4F4F7] px-3 py-1.5 text-[12px] font-bold tracking-wider text-[#4C4C58] uppercase">
                  {row.role}
                </span>
              </div>

              {/* Flow & Description */}
              <div className="flex flex-col gap-2 flex-grow">
                <div className="flex flex-wrap items-center gap-2 text-[18px] sm:text-[21px] font-bold text-black leading-snug">
                  {row.flow.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <span>{step}</span>
                      {idx < row.flow.length - 1 && (
                        <span className="text-[#713FFF] font-normal text-lg">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
                <p className="text-[14px] sm:text-[15px] text-[#4C4C58] leading-relaxed">
                  {row.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
