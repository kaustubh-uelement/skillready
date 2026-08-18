import { CompanySection } from "@/components/home/CompanySection";

export default function CompaniesPage() {
  return (
    <main>
      <div style={{ padding: "4rem 0 2rem", background: "var(--color-ink)", color: "#fff" }}>
        <div className="wrap">
          <h1>For Companies</h1>
          <p style={{ opacity: 0.8, marginTop: "0.5rem" }}>Post roles, filter candidates, hire better</p>
        </div>
      </div>
      <CompanySection />
    </main>
  );
}
