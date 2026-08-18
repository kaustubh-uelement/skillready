import { StudentSection } from "@/components/home/StudentSection";

export default function StudentsPage() {
  return (
    <main>
      <div style={{ padding: "4rem 0 2rem", background: "var(--color-ink)", color: "#fff" }}>
        <div className="wrap">
          <h1>Students Portal</h1>
          <p style={{ opacity: 0.8, marginTop: "0.5rem" }}>Learn, exams, jobs, and courses</p>
        </div>
      </div>
      <StudentSection />
    </main>
  );
}
