import React from "react";
import StudentsHeroSection from "@/components/students/StudentsHeroSection";
import StudentsBenefitsSection from "@/components/students/StudentsBenefitsSection";
import StudentsRoadmapSection from "@/components/students/StudentsRoadmapSection";
import StudentsCoursesSection from "@/components/students/StudentsCoursesSection";
import StudentReviewsSection from "@/components/home/StudentReviewsSection";
import CtaSection from "@/components/home/CtaSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Students — Placement Preparation & Skill Readiness | SkillReady.ai",
  description:
    "SkillReady provides students with structured learning paths, topic-wise practice, company-specific mock tests, and verified employability profiles to accelerate career readiness.",
};

export default function StudentsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Students Hero Section */}
      <StudentsHeroSection />

      {/* 2. Key Benefits & Feature Grid */}
      <StudentsBenefitsSection />

      {/* 3. 5-Step Progression Roadmap */}
      <StudentsRoadmapSection />

      {/* 4. Top Placement Programs */}
      <StudentsCoursesSection />

      {/* 5. Student Reviews & Testimonials */}
      <StudentReviewsSection />

      {/* 6. High-Impact CTA Banner */}
      <CtaSection />
    </main>
  );
}
