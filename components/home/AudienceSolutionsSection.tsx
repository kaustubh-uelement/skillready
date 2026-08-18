"use client";

import React, { useRef, useState, useEffect } from "react";
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, offsetWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / (offsetWidth * 0.8));
      setActiveIdx(Math.min(index, CARDS_DATA.length - 1));
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
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="wrap">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-[760px] mx-auto mb-12 md:mb-18">
          <div className="inline-flex items-center rounded-full border border-[#D9D9D9] px-3.5 py-1 text-[12px] font-semibold tracking-wider text-[#4C4C58] mb-4 shadow-2xs">
            Everything you need
          </div>

          <h2 className="text-[32px] sm:text-[42px] md:text-[48px] font-bold text-black tracking-tight leading-[1.12] mb-4">
            One Platform. <br />
            One Shared Goal.
          </h2>

          <p className="text-[15px] sm:text-[17px] md:text-[18px] text-[#4C4C58] leading-relaxed max-w-[660px]">
            SkillReady creates a connected ecosystem where students develop
            industry-relevant skills, colleges monitor progress and placement
            readiness, and companies gain access to better-prepared candidates.
          </p>
        </div>

        {/* 3 Colorful Audience Visual Cards (Slider on mobile, 3-col grid on desktop) */}
        <div
          ref={scrollRef}
          className="flex md:grid md:grid-cols-3 gap-6 lg:gap-8 max-w-[1140px] mx-auto overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar px-4 sm:px-6 md:px-0 -mx-4 sm:-mx-6 md:mx-auto pb-4 md:pb-0"
        >
          {CARDS_DATA.map((card) => (
            <div
              key={card.tag}
              className={`w-[85vw] max-w-[320px] sm:w-[320px] flex-none snap-center md:w-auto md:max-w-none md:flex-initial group relative overflow-hidden rounded-[10px] bg-gradient-to-b ${card.bgGradient} p-6 sm:p-7 flex flex-col justify-between min-h-[460px] shadow-lg transition-transform duration-200 hover:-translate-y-1`}
            >
              {/* Top Tag Pill */}
              <div className="relative z-10">
                <span className="inline-block rounded-[10px] bg-white/20 backdrop-blur-md px-3.5 py-1 text-[11px] font-bold tracking-wider text-white uppercase border border-white/25">
                  {card.tag}
                </span>
              </div>

              {/* Central Duotone Graphic Image */}
              <div className="absolute inset-0 z-0 flex items-center justify-center p-0">
                <div className="relative w-full h-full">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 320px, 360px"
                  />
                </div>
              </div>

              {/* Bottom Content & Action Button */}
              <div className="relative z-10 mt-auto pt-44 flex flex-col items-start gap-4">
                <h3 className="text-[20px] sm:text-[22px] font-bold text-white leading-tight drop-shadow-md">
                  {card.title}
                </h3>
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-2 rounded-[10px] bg-black hover:bg-[#1C1C1C] text-white text-[13px] sm:text-[14px] font-semibold px-5 py-2.5 transition-all active:scale-95 shadow-md"
                >
                  <span>{card.btnText}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-4 md:hidden">
          {CARDS_DATA.map((_, i) => (
            <span
              key={i}
              className={`h-2 rounded-full transition-all duration-200 ${
                activeIdx === i ? "w-6 bg-[#713FFF]" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
