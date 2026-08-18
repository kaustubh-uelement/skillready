import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function PlansSection() {
  return (
    <section className="section lilac" id="plans">
      <div className="wrap">
        <Reveal>
          <SectionHeading
            eyebrow="Plans and subscriptions"
            title="Start free. Upgrade when you're serious about the drive."
            lede="A free account gets you into the library and a mock test. Subscriptions open company-specific papers, full solutions, and the recruiter side of the platform."
          />
        </Reveal>
        <div className="plans">
          <Reveal className="plan">
            <h3>Free</h3>
            <div className="price">₹0</div>
            <small style={{ color: "var(--color-ink-40)" }}>No card, no expiry</small>
            <ul>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true"><path d="m5 13 4 4L19 7"/></svg>One free general mock test</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true"><path d="m5 13 4 4L19 7"/></svg>Sample practice exercises in all four sections</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true"><path d="m5 13 4 4L19 7"/></svg>Profile and resume upload</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true"><path d="m5 13 4 4L19 7"/></svg>Browse jobs and internships</li>
            </ul>
            <Button variant="ghost" href="/contact">Create a free account</Button>
          </Reveal>
          
          <Reveal className="plan featured">
            <h3>Student subscription</h3>
            <div className="price">Add price <small>/ year</small></div>
            <small style={{ color: "var(--color-ink-40)" }}>Full platform access</small>
            <ul>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true"><path d="m5 13 4 4L19 7"/></svg>All 6,000+ questions with video solutions</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true"><path d="m5 13 4 4L19 7"/></svg>Company-specific and general mock exams</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true"><path d="m5 13 4 4L19 7"/></svg>Top recruiters, skills required, and wishlisting</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true"><path d="m5 13 4 4L19 7"/></svg>Progress tracking on web and mobile app</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true"><path d="m5 13 4 4L19 7"/></svg>Apply to live jobs and internships</li>
            </ul>
            <Button variant="violet" href="/contact">
              Subscribe
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>
            </Button>
          </Reveal>
          
          <Reveal className="plan">
            <h3>Through your college</h3>
            <div className="price">Institutional</div>
            <small style={{ color: "var(--color-ink-40)" }}>Training and monitoring package</small>
            <ul>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true"><path d="m5 13 4 4L19 7"/></svg>Everything in the student subscription</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true"><path d="m5 13 4 4L19 7"/></svg>Trainer-led sessions on campus or online</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true"><path d="m5 13 4 4L19 7"/></svg>Scheduled assessments for your batches</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true"><path d="m5 13 4 4L19 7"/></svg>Monitoring dashboard for the placement cell</li>
            </ul>
            <Button variant="ghost" href="/colleges">See college packages</Button>
          </Reveal>
        </div>
        <p style={{ marginTop: "1.6rem", fontSize: "0.9rem", color: "var(--color-ink-40)" }}>
          Colleges can also license the product on its own, without training. Ask us for the rate card.
        </p>
      </div>
    </section>
  );
}
