"use client";

import React from "react";

const ROADMAP_STEPS = [
  {
    step: "STEP 1",
    tag: "LEARN",
    title: "Structured Learning Paths",
    desc: "Access guided learning paths and industry focused programs designed to build practical knowledge.",
  },
  {
    step: "STEP 2",
    tag: "PRACTICE",
    title: "Daily Practice Sets",
    desc: "Apply concepts through assignments, projects, exercises, and hands on activities.",
  },
  {
    step: "STEP 3",
    tag: "TEST",
    title: "Skill Assessments & Mocks",
    desc: "Measure your understanding through assessments, aptitude tests, and skill evaluations.",
  },
  {
    step: "STEP 4",
    tag: "BUILD PROFILE",
    title: "Employability Profile",
    desc: "Create a stronger professional identity that showcases your abilities and achievements.",
  },
  {
    step: "STEP 5",
    tag: "GET VISIBLE",
    title: "Direct Recruiter Visibility",
    desc: "Become discoverable to colleges, mentors, recruiters, and industry opportunities.",
  },
];

export default function StudentsRoadmapSection() {
  return (
    <section className="py-20 md:py-28 bg-[#FAF8FF] border-y border-[#F0ECFA] overflow-hidden" id="roadmap">
      <div className="wrap">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-[760px] mx-auto mb-12 md:mb-18">
          <div className="inline-flex items-center rounded-[10px] border border-[#D9D9D9] bg-white px-3.5 py-1 text-[12px] font-semibold tracking-wider text-[#4C4C58] uppercase mb-4 shadow-2xs">
            HOW IT WORKS
          </div>

          <h2 className="text-[32px] sm:text-[42px] md:text-[48px] font-bold text-black tracking-tight leading-[1.12] mb-4">
            A Simple Path From Learning <br />
            To Opportunity
          </h2>

          <p className="text-[15px] sm:text-[17px] md:text-[18px] text-[#4C4C58] leading-relaxed max-w-[620px]">
            Students receive structured guidance that helps them understand
            exactly how to become job ready.
          </p>
        </div>

        {/* 5 Step Stack Cards */}
        <div className="flex flex-col gap-4.5 sm:gap-5 max-w-[1000px] mx-auto">
          {ROADMAP_STEPS.map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-[10px] border border-[#E8E4F0] p-6 sm:p-7 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 md:gap-8 shadow-xs hover:border-[#713FFF]/40 transition-all duration-200"
            >
              {/* Left: Step Pill & Tag */}
              <div className="flex items-center gap-3 flex-none">
                <span className="inline-block bg-[#713FFF] text-white text-[12px] font-bold px-3 py-1 rounded-[10px] shadow-xs">
                  {item.step}
                </span>
                <span className="inline-block bg-[#F4F4F7] text-[#4C4C58] text-[12px] font-bold px-3 py-1 rounded-[10px] uppercase">
                  {item.tag}
                </span>
              </div>

              {/* Center/Right: Title & Description */}
              <div className="flex-grow flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-8">
                <h3 className="text-[18px] sm:text-[20px] font-bold text-black flex-none md:w-[240px]">
                  {item.title}
                </h3>
                <p className="text-[14px] sm:text-[15px] text-[#4C4C58] leading-relaxed flex-grow">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
