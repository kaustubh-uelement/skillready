"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const COURSES = [
  {
    tag: "DURATION : 8 WEEKS",
    title: "Campus Placement Masterclass",
    subtitle: "Complete Aptitude, Logical Reasoning, Verbal Ability & Coding fundamentals.",
    btnText: "View Course",
    href: "/courses",
    image: "/images/course-placement.png",
    bgGradient: "from-[#6320EE] to-[#3B0764]",
  },
  {
    tag: "DURATION : 10 WEEKS",
    title: "Data Analytics & Full Stack Bootcamp",
    subtitle: "Frontend, Backend, Database, Cloud & end-to-end portfolio projects.",
    btnText: "View Course",
    href: "/courses",
    image: "/images/course-fullstack.png",
    bgGradient: "from-[#15803D] to-[#14532D]",
  },
  {
    tag: "DURATION : 4 WEEKS",
    title: "Communication & Interview Skills",
    subtitle: "GD mastery, HR interview tactics, resume optimization & live mock rounds.",
    btnText: "View Course",
    href: "/courses",
    image: "/images/course-softskills.png",
    bgGradient: "from-[#0369A1] to-[#0C4A6E]",
  },
];

export default function StudentsCoursesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, offsetWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / (offsetWidth * 0.8));
      setActiveIdx(Math.min(index, COURSES.length - 1));
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
    <section className="py-20 md:py-28 bg-white overflow-hidden" id="courses">
      <div className="wrap">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-[760px] mx-auto mb-12 md:mb-18">
          <div className="inline-flex items-center rounded-[10px] border border-[#D9D9D9] px-3.5 py-1 text-[12px] font-semibold tracking-wider text-[#4C4C58] uppercase mb-4 shadow-2xs">
            POPULAR COURSES
          </div>

          <h2 className="text-[32px] sm:text-[42px] md:text-[48px] font-bold text-black tracking-tight leading-[1.12] mb-4">
            Top Placement-Ready Programs
          </h2>

          <p className="text-[15px] sm:text-[17px] md:text-[18px] text-[#4C4C58] leading-relaxed max-w-[620px]">
            Master high-impact skills with step-by-step training modules designed
            specifically for upcoming campus placement drives.
          </p>
        </div>

        {/* 3 Course Visual Cards (Slider on mobile, 3-col grid on desktop) */}
        <div
          ref={scrollRef}
          className="flex md:grid md:grid-cols-3 gap-6 lg:gap-8 max-w-[1140px] mx-auto overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar px-4 sm:px-6 md:px-0 -mx-4 sm:-mx-6 md:mx-auto pb-4 md:pb-0"
        >
          {COURSES.map((course) => (
            <div
              key={course.title}
              className={`w-[85vw] max-w-[320px] sm:w-[320px] flex-none snap-center md:w-auto md:max-w-none md:flex-initial group relative overflow-hidden rounded-[10px] bg-gradient-to-b ${course.bgGradient} p-6 sm:p-7 flex flex-col justify-between min-h-[480px] shadow-lg transition-transform duration-200 hover:-translate-y-1`}
            >
              {/* Top Tag Pill */}
              <div className="relative z-10">
                <span className="inline-block rounded-[10px] bg-white/20 backdrop-blur-md px-3.5 py-1 text-[11px] font-bold tracking-wider text-white uppercase border border-white/25">
                  {course.tag}
                </span>
              </div>

              {/* Central Graphic Image */}
              <div className="absolute inset-0 z-0 flex items-center justify-center p-0">
                <div className="relative w-full h-full">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 320px, 360px"
                  />
                </div>
              </div>

              {/* Bottom Content & Action Button */}
              <div className="relative z-10 mt-auto pt-44 flex flex-col items-start gap-4">
                <h3 className="text-[21px] sm:text-[22px] font-bold text-white leading-tight drop-shadow-md">
                  {course.title}
                </h3>
                <p className="text-[13px] text-white/90 leading-snug line-clamp-2 drop-shadow-sm">
                  {course.subtitle}
                </p>
                <Link
                  href={course.href}
                  className="inline-flex items-center gap-2 rounded-[10px] bg-black hover:bg-[#1C1C1C] text-white text-[13px] sm:text-[14px] font-semibold px-5 py-2.5 transition-all active:scale-95 shadow-md mt-1"
                >
                  <span>{course.btnText}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-4 md:hidden">
          {COURSES.map((_, i) => (
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
