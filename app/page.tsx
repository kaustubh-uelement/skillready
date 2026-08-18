"use client";

import React from "react";
import HeroSection from "@/components/home/HeroSection";
import GapProblemSection from "@/components/home/GapProblemSection";
import AudienceSolutionsSection from "@/components/home/AudienceSolutionsSection";
import FeaturedOfferingsSection from "@/components/home/FeaturedOfferingsSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import StudentReviewsSection from "@/components/home/StudentReviewsSection";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. The Gap Problem Section */}
      <GapProblemSection />

      {/* 3. One Platform. One Shared Goal (Audience Feature Cards) */}
      <AudienceSolutionsSection />

      {/* 4. Featured Offerings Section */}
      <FeaturedOfferingsSection />

      {/* 5. How SkillReady Works Section */}
      <HowItWorksSection />

      {/* 6. Student Reviews Section */}
      <StudentReviewsSection />

      {/* 7. Bottom CTA Section */}
      <CtaSection />
    </main>
  );
}
