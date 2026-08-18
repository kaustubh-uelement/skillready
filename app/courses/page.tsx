import { CourseSection } from "@/components/home/CourseSection";

export default function CoursesPage() {
  return (
    <main>
      <div style={{ padding: "4rem 0 2rem", background: "var(--color-ink)", color: "#fff" }}>
        <div className="wrap">
          <h1>Courses</h1>
          <p style={{ opacity: 0.8, marginTop: "0.5rem" }}>Instructor-led courses for in-demand skills</p>
        </div>
      </div>
      <CourseSection />
    </main>
  );
}
