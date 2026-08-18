import { PlansSection } from "@/components/home/PlansSection";

export default function PlansPage() {
  return (
    <main>
      <div style={{ padding: "4rem 0 2rem", background: "var(--color-ink)", color: "#fff" }}>
        <div className="wrap">
          <h1>Plans &amp; Pricing</h1>
          <p style={{ opacity: 0.8, marginTop: "0.5rem" }}>Find the right plan for you</p>
        </div>
      </div>
      <PlansSection />
    </main>
  );
}
