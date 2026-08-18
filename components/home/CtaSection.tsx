"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#6320EE] via-[#713FFF] to-[#8B5CF6] py-16 md:py-24 text-white" id="cta">
      {/* Decorative ambient elements */}
      <div 
        className="pointer-events-none absolute -left-20 top-0 h-[450px] w-[450px] rounded-full bg-white/10 blur-3xl" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute -right-20 bottom-0 h-[450px] w-[450px] rounded-full bg-black/20 blur-3xl" 
        aria-hidden="true" 
      />

      <div className="wrap relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Content & Action Buttons */}
          <div className="lg:col-span-6 flex flex-col items-start gap-6">
            <h2 className="text-[38px] sm:text-[48px] lg:text-[54px] font-bold text-white tracking-tight leading-[1.08]">
              Are you Skill Ready <br />
              for the future?
            </h2>

            <p className="text-[16px] sm:text-[18px] text-white/85 leading-relaxed max-w-[500px]">
              Whether you&apos;re a student, college or company, SkillReady helps you move forward with confidence.
            </p>

            <div className="flex items-center gap-3 flex-wrap pt-2">
              <Link
                href="/students"
                className="inline-flex items-center gap-1.5 bg-black hover:bg-[#1C1C1C] text-white text-[14px] font-medium px-5 py-2.5 rounded-[10px] transition-all duration-150 active:scale-95 shadow-md"
              >
                <span>Students</span>
                <span aria-hidden="true" className="text-sm">→</span>
              </Link>
              <Link
                href="/colleges"
                className="inline-flex items-center gap-1.5 bg-black hover:bg-[#1C1C1C] text-white text-[14px] font-medium px-5 py-2.5 rounded-[10px] transition-all duration-150 active:scale-95 shadow-md"
              >
                <span>Colleges</span>
                <span aria-hidden="true" className="text-sm">→</span>
              </Link>
              <Link
                href="/companies"
                className="inline-flex items-center gap-1.5 bg-black hover:bg-[#1C1C1C] text-white text-[14px] font-medium px-5 py-2.5 rounded-[10px] transition-all duration-150 active:scale-95 shadow-md"
              >
                <span>Companies</span>
                <span aria-hidden="true" className="text-sm">→</span>
              </Link>
            </div>
          </div>

          {/* Right: 3D Visual Illustration */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <div className="relative w-full max-w-[520px] aspect-[4/3]">
              <Image
                src="/images/hero-illustration.png"
                alt="SkillReady future-ready careers"
                fill
                className="object-contain drop-shadow-2xl"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
