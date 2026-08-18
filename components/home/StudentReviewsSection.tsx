"use client";

import React from "react";

const REVIEWS = [
  {
    quote:
      "I always knew I wanted a good job, but I didn't know where to start. SkillReady gave me a roadmap and helped me prepare with confidence.",
    author: "Student Username",
  },
  {
    quote:
      "The structured mock tests and video solutions were game-changers for me. I went from feeling lost in interviews to receiving two offers.",
    author: "Student Username",
  },
  {
    quote:
      "I always knew I wanted a good job, but I didn't know where to start. SkillReady gave me a roadmap and helped me prepare with confidence.",
    author: "Student Username",
  },
  {
    quote:
      "Having our training aligned directly to company requirements made all the difference during placement season. Highly recommended!",
    author: "Student Username",
  },
  {
    quote:
      "I always knew I wanted a good job, but I didn't know where to start. SkillReady gave me a roadmap and helped me prepare with confidence.",
    author: "Student Username",
  },
  {
    quote:
      "The employability profile gave recruiters proof of what I can actually build, not just what's written on my standard CV.",
    author: "Student Username",
  },
  {
    quote:
      "I always knew I wanted a good job, but I didn't know where to start. SkillReady gave me a roadmap and helped me prepare with confidence.",
    author: "Student Username",
  },
  {
    quote:
      "Step-by-step guidance that actually works. The practice sets transformed my timing and problem-solving speed completely.",
    author: "Student Username",
  },
  {
    quote:
      "I always knew I wanted a good job, but I didn't know where to start. SkillReady gave me a roadmap and helped me prepare with confidence.",
    author: "Student Username",
  },
];

export default function StudentReviewsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#F2EEFD]" id="reviews">
      <div className="wrap">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-[760px] mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center rounded-[10px] border border-[#D9D9D9] bg-white px-3.5 py-1 text-[12px] font-semibold tracking-wider text-[#4C4C58] uppercase mb-4 shadow-2xs">
            STUDENT REVIEWS
          </div>

          <h2 className="text-[34px] sm:text-[44px] md:text-[48px] font-bold text-black tracking-tight leading-[1.12]">
            What our students <br />
            are saying
          </h2>
        </div>

        {/* 3 Staggered Columns of Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1080px] mx-auto">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            {REVIEWS.slice(0, 3).map((r, idx) => (
              <TestimonialCard key={`c1-${idx}`} review={r} />
            ))}
          </div>

          {/* Column 2 (Offset for visual masonry feel) */}
          <div className="flex flex-col gap-6 md:translate-y-4">
            {REVIEWS.slice(3, 6).map((r, idx) => (
              <TestimonialCard key={`c2-${idx}`} review={r} />
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            {REVIEWS.slice(6, 9).map((r, idx) => (
              <TestimonialCard key={`c3-${idx}`} review={r} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ review }: { review: { quote: string; author: string } }) {
  return (
    <div className="bg-white rounded-[10px] border border-[#E8E4F0] p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col gap-4">
      {/* Top: Avatar & 5 Stars */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#E5E7EB] flex items-center justify-center text-gray-500 font-bold text-sm flex-none">
          <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
        <div className="flex items-center gap-1 text-[#F3BB04]">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>

      {/* Quote text */}
      <p className="text-[14px] sm:text-[15px] text-[#4C4C58] leading-relaxed italic">
        &ldquo;{review.quote}&rdquo;
      </p>

      {/* Author Username */}
      <div className="pt-2 border-t border-gray-100">
        <h4 className="text-[14px] font-bold text-black">{review.author}</h4>
      </div>
    </div>
  );
}
