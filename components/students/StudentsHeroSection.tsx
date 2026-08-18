"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/layout/Logo";

export default function StudentsHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#FBF9FF] min-h-[720px] lg:min-h-[780px] flex flex-col justify-between pt-10 pb-12 sm:pb-16">
      {/* 1. Full Hero Background Artwork */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/students-hero-bg.png"
          alt="SkillReady Students Ecosystem Background"
          fill
          priority
          className="object-cover object-right-top lg:object-center opacity-95"
          sizes="100vw"
        />
        {/* Soft gradient blend for mobile readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/50 to-transparent lg:hidden pointer-events-none" />
      </div>

      {/* 2. Left Hero Content */}
      <div className="wrap relative z-10 pt-8 sm:pt-12 lg:pt-16">
        <div className="max-w-[540px] flex flex-col items-start gap-5 sm:gap-6">
          {/* Tag Pill */}
          <div className="inline-flex items-center gap-2 rounded-[10px] border border-black/15 bg-white/80 backdrop-blur-md px-4 py-1.5 text-[13px] font-medium text-black shadow-xs">
            <span>FOR STUDENTS</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-[42px] sm:text-[52px] lg:text-[56px] font-bold tracking-tight text-black leading-[1.08]">
            Build Skills. <br />
            Demonstrate Readiness. <br />
            Get Hired.
          </h1>

          {/* Subtitle */}
          <p className="text-[16px] sm:text-[18px] text-[#4C4C58] leading-relaxed max-w-[480px]">
            SkillReady provides students with structured learning paths,
            practical assessments, and an employability profile that helps you
            stand out to top employers.
          </p>
        </div>
      </div>

      {/* 3. Bottom Floating Action Bar */}
      <div className="wrap relative z-10 mt-14 sm:mt-20">
        <div className="bg-white/95 backdrop-blur-md rounded-[10px] border border-[#E8E4F0] p-4 sm:p-5 md:px-8 shadow-xs flex flex-col md:flex-row items-center justify-between gap-5">
          {/* Left: Star Mark & Core Value Statement */}
          <div className="flex items-center gap-4 text-left w-full md:w-auto">
            <Logo className="text-[#713FFF] w-10 h-10 flex-none" />
            <p className="text-[15px] sm:text-[16px] font-semibold text-black leading-snug">
              Learn the right skills. Track progress.{" "}
              <br className="hidden sm:inline" />
              Build employability. Get placed faster.
            </p>
          </div>

          {/* Right: Action Buttons */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap justify-start sm:justify-end w-full md:w-auto">
            <Link
              href="/courses"
              className="inline-flex items-center gap-1.5 bg-black hover:bg-[#222222] text-white text-[14px] font-medium px-5 py-2.5 rounded-[10px] transition-all duration-150 active:scale-95 shadow-xs"
            >
              <span>Explore Courses</span>
              <span aria-hidden="true" className="text-sm">
                →
              </span>
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center gap-1.5 bg-[#713FFF] hover:bg-[#5E2CEE] text-white text-[14px] font-medium px-5 py-2.5 rounded-[10px] transition-all duration-150 active:scale-95 shadow-xs"
            >
              <span>Take Free Assessment</span>
              <span aria-hidden="true" className="text-sm">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
