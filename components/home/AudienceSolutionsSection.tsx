"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const CARDS_DATA = [
  {
    tag: "FOR STUDENTS",
    title: "Build the skills employers are looking for.",
    btnText: "Explore Student Path",
    href: "/students",
    image: "/images/card-students.png",
    bgGradient: "from-[#6320EE] to-[#4510B5]",
    cardBorder: "border-[#6320EE]/40",
  },
  {
    tag: "FOR COLLEGES",
    title: "Empower students with career readiness.",
    btnText: "Explore College Solutions",
    href: "/colleges",
    image: "/images/card-colleges.png",
    bgGradient: "from-[#0284C7] to-[#0369A1]",
    cardBorder: "border-[#0284C7]/40",
  },
  {
    tag: "FOR COMPANIES",
    title: "Connect with skilled, job-ready talent faster.",
    btnText: "Explore Hiring Solutions",
    href: "/companies",
    image: "/images/card-companies.png",
    bgGradient: "from-[#65A30D] to-[#4D7C0F]",
    cardBorder: "border-[#65A30D]/40",
  },
];

export default function AudienceSolutionsSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="wrap">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-[760px] mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center rounded-full border border-[#D9D9D9] px-3.5 py-1 text-[12px] font-semibold tracking-wider text-[#4C4C58] mb-4">
            Everything you need
          </div>

          <h2 className="text-[34px] sm:text-[44px] md:text-[48px] font-bold text-black tracking-tight leading-[1.12] mb-4">
            One Platform. <br />
            One Shared Goal.
          </h2>

          <p className="text-[16px] sm:text-[18px] text-[#4C4C58] leading-relaxed max-w-[660px]">
            SkillReady creates a connected ecosystem where students develop industry-relevant skills, colleges monitor progress and placement readiness, and companies gain access to better-prepared candidates.
          </p>
        </div>

        {/* 3 Colorful Audience Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-[1140px] mx-auto">
          {CARDS_DATA.map((card) => (
            <div
              key={card.tag}
              className={`group relative overflow-hidden rounded-[26px] border ${card.cardBorder} bg-gradient-to-b ${card.bgGradient} p-6 sm:p-7 flex flex-col justify-between min-h-[460px] shadow-lg transition-transform duration-200 hover:-translate-y-1`}
            >
              {/* Top Tag Pill */}
              <div className="relative z-10">
                <span className="inline-block rounded-full bg-white/20 backdrop-blur-md px-3.5 py-1 text-[11px] font-bold tracking-wider text-white uppercase border border-white/25">
                  {card.tag}
                </span>
              </div>

              {/* Central Duotone Graphic Image */}
              <div className="absolute inset-0 z-0 flex items-center justify-center p-2">
                <div className="relative w-full h-full">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover object-center rounded-[24px]"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                </div>
              </div>

              {/* Bottom Content & Action Button */}
              <div className="relative z-10 mt-auto pt-44 flex flex-col items-start gap-4">
                <h3 className="text-[21px] sm:text-[22px] font-bold text-white leading-tight drop-shadow-md">
                  {card.title}
                </h3>
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-2 rounded-full bg-black hover:bg-[#1C1C1C] text-white text-[13px] sm:text-[14px] font-semibold px-5 py-2.5 transition-all active:scale-95 shadow-md"
                >
                  <span>{card.btnText}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
