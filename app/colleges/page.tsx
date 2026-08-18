import { CollegeSection } from "@/components/home/CollegeSection";

export default function CollegesPage() {
  return (
    <main>
      <div style={{ padding: "4rem 0 2rem", background: "var(--color-ink)", color: "#fff" }}>
        <div className="wrap">
          <h1>For Colleges</h1>
          <p style={{ opacity: 0.8, marginTop: "0.5rem" }}>Batch monitoring, training, and placement reports</p>
        </div>
      </div>
      <CollegeSection />
    </main>
  );
}
