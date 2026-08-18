"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/layout/Logo";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF0FA] via-[#F5EFFE] to-[#F1E9FD] pt-12 pb-14 md:pt-20 md:pb-20">
      {/* Decorative ambient background glows */}
      <div
        className="pointer-events-none absolute -right-20 top-0 h-[600px] w-[600px] rounded-full bg-radial from-[#C9A6FF]/35 to-transparent blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-10 h-[450px] w-[450px] rounded-full bg-radial from-[#DCC7FF]/30 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="wrap relative z-10">
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Text & Content */}
          <div className="lg:col-span-6 flex flex-col items-start gap-5">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-[10px] border border-black/15 bg-white/70 backdrop-blur-sm px-4 py-1.5 text-[13px] font-medium text-black shadow-xs">
              <span>Welcome Onboard</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[40px] sm:text-[50px] lg:text-[56px] font-bold tracking-tight text-black leading-[1.08]">
              The Bridge <br />
              Between Learning <br />
              and Employment
            </h1>

            {/* Subtext */}
            <p className="text-[16px] sm:text-[18px] text-[#4C4C58] leading-relaxed max-w-[500px]">
              SkillReady connects students, colleges, and companies through a
              structured ecosystem that transforms career aspirations into real
              opportunities.
            </p>
          </div>

          {/* Right Column: 3D Visual Illustration */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <div className="relative w-full max-w-[560px] aspect-[4/3] sm:aspect-[1.15/1]">
              <Image
                src="/images/hero-illustration.png"
                alt="SkillReady learning and employment ecosystem"
                fill
                priority
                className="object-contain drop-shadow-xl"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </div>
          </div>
        </div>

        {/* Bottom Floating Action Bar */}
        <div className="mt-14 sm:mt-16 bg-white/95 backdrop-blur-md rounded-2xl md:rounded-full border border-[#E8E4F0] p-4 sm:p-5 md:px-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-5">
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
