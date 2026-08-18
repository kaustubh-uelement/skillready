"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/layout/Logo";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#FBF9FF] min-h-[720px] lg:min-h-[780px] flex flex-col justify-between pt-10 pb-12 sm:pb-16">
      {/* 1. Full Hero Background Artwork spanning the entire section */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/hero-bg.png"
          alt="SkillReady learning and employment ecosystem background"
          fill
          priority
          className="object-cover object-right-top lg:object-center opacity-95"
          sizes="100vw"
        />
        {/* Soft gradient blend for mobile readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent lg:hidden pointer-events-none" />
      </div>

      {/* 2. Main Hero Content (Overlayed on left side) */}
      <div className="wrap relative z-10 pt-8 sm:pt-12 lg:pt-16">
        <div className="max-w-[540px] flex flex-col items-start gap-5 sm:gap-6">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-[10px] border border-black/15 bg-white/70 backdrop-blur-sm px-4 py-1.5 text-[13px] font-medium text-black shadow-xs">
            <span>Welcome Onboard</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-[42px] sm:text-[52px] lg:text-[56px] font-bold tracking-tight text-black leading-[1.08]">
            The Bridge <br />
            Between Learning <br />
            and Employment
          </h1>

          {/* Subtitle */}
          <p className="text-[16px] sm:text-[18px] text-[#4C4C58] leading-relaxed max-w-[480px]">
            SkillReady connects students, colleges, and companies through a
            structured ecosystem that transforms career aspirations into real
            opportunities.
          </p>
        </div>
      </div>

      {/* 3. Bottom Floating Action Bar */}
      <div className="wrap relative z-10 mt-14 sm:mt-20">
        <div className=" flex flex-col md:flex-row items-center justify-between gap-5">
          {/* Left: Star Mark & Core Value Statement */}
          <div className="flex items-center gap-4 text-left w-full md:w-auto">
            <Logo className="text-[#713FFF] w-10 h-10 flex-none" />
            <p className="text-[15px] sm:text-[16px] font-semibold text-black leading-snug">
              Learn the right skills. Track progress.{" "}
              <br className="hidden sm:inline" />
              Build employability. Hire with confidence.
            </p>
          </div>

          {/* Right: 3 Segment CTA Buttons */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap justify-start sm:justify-end w-full md:w-auto">
            <Link
              href="/students"
              className="inline-flex items-center gap-1.5 bg-black hover:bg-[#222222] text-white text-[14px] font-medium px-5 py-2.5 rounded-[10px] transition-all duration-150 active:scale-95 shadow-xs"
            >
              <span>Students</span>
              <span aria-hidden="true" className="text-sm">
                →
              </span>
            </Link>
            <Link
              href="/colleges"
              className="inline-flex items-center gap-1.5 bg-black hover:bg-[#222222] text-white text-[14px] font-medium px-5 py-2.5 rounded-[10px] transition-all duration-150 active:scale-95 shadow-xs"
            >
              <span>Colleges</span>
              <span aria-hidden="true" className="text-sm">
                →
              </span>
            </Link>
            <Link
              href="/companies"
              className="inline-flex items-center gap-1.5 bg-black hover:bg-[#222222] text-white text-[14px] font-medium px-5 py-2.5 rounded-[10px] transition-all duration-150 active:scale-95 shadow-xs"
            >
              <span>Companies</span>
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
