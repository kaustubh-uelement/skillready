import { InsightsSection } from "@/components/home/InsightsSection";

export default function InsightsPage() {
  return (
    <main>
      <div style={{ padding: "4rem 0 2rem", background: "var(--color-ink)", color: "#fff" }}>
        <div className="wrap">
          <h1>Insights</h1>
          <p style={{ opacity: 0.8, marginTop: "0.5rem" }}>Notes from the campus-to-career gap</p>
        </div>
      </div>
      <InsightsSection />
    </main>
  );
}
