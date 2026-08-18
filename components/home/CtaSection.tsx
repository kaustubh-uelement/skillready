"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#6320EE] min-h-[520px] lg:min-h-[580px] flex items-center py-16 text-white" id="cta">
      {/* 1. Full CTA Background Artwork */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/cta-illustration.png"
          alt="SkillReady future-ready careers background"
          fill
          className="object-cover object-right lg:object-center opacity-95"
          sizes="100vw"
        />
        {/* Subtle gradient for mobile readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#6320EE]/95 via-[#6320EE]/70 to-transparent lg:hidden pointer-events-none" />
      </div>

      {/* 2. Left Content & Action Buttons */}
      <div className="wrap relative z-10">
        <div className="max-w-[520px] flex flex-col items-start gap-6">
          <h2 className="text-[38px] sm:text-[48px] lg:text-[54px] font-bold text-white tracking-tight leading-[1.08]">
            Are you Skill Ready <br />
            for the future?
          </h2>

          <p className="text-[16px] sm:text-[18px] text-white/90 leading-relaxed max-w-[480px]">
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
      </div>
    </section>
  );
}
