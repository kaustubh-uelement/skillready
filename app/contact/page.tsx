import { ContactSection } from "@/components/home/ContactSection";

export default function ContactPage() {
  return (
    <main>
      <div style={{ padding: "4rem 0 2rem", background: "var(--color-ink)", color: "#fff" }}>
        <div className="wrap">
          <h1>Contact Us</h1>
          <p style={{ opacity: 0.8, marginTop: "0.5rem" }}>Get in touch with the SkillReady team</p>
        </div>
      </div>
      <ContactSection />
    </main>
  );
}
