import { Hero } from "@/components/home/Hero";
import { TrainerBand } from "@/components/home/TrainerBand";
import { AudienceCards } from "@/components/home/AudienceCards";
import { StudentSection } from "@/components/home/StudentSection";
import { PlansSection } from "@/components/home/PlansSection";
import { CollegeSection } from "@/components/home/CollegeSection";
import { CompanySection } from "@/components/home/CompanySection";
import { CourseSection } from "@/components/home/CourseSection";
import { TeamSection } from "@/components/home/TeamSection";
import { SuccessStories } from "@/components/home/SuccessStories";
import { InsightsSection } from "@/components/home/InsightsSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrainerBand />
      <AudienceCards />
      <StudentSection />
      <PlansSection />
      <CollegeSection />
      <CompanySection />
      <CourseSection />
      <TeamSection />
      <SuccessStories />
      <InsightsSection />
      <ContactSection />
    </main>
  );
}
