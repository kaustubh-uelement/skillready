import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function CollegeSection() {
  return (
    <section className="section" id="colleges">
      <div className="wrap">
        <Reveal>
          <SectionHeading
            eyebrow="For colleges"
            title="Better training, and the data to prove it moved"
            lede="For deans of training and placement, placement officers, and principals who need to show progress with numbers rather than impressions. Take the training, the product, or both."
          />
        </Reveal>

        <div className="grid-3">
          <Reveal className="card">
            <div className="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h10"/></svg>
            </div>
            <h3>Trainer-led programme</h3>
            <p>Aptitude, technical, and verbal training delivered to your batches by trainers who have taken over 10,000 students through placement rounds.</p>
          </Reveal>
          
          <Reveal className="card">
            <div className="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 19V5m0 14h16M8 15V9m4 6V6m4 9v-4"/></svg>
            </div>
            <h3>Proprietary monitoring system</h3>
            <p>Track real-time progress for every student and batch: attempts, score movement, and the topics a cohort keeps failing.</p>
          </Reveal>
          
          <Reveal className="card">
            <div className="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="6" y="3" width="12" height="18" rx="3"/><path d="M11 18h2"/></svg>
            </div>
            <h3>Mobile app for students</h3>
            <p>Practice doesn&apos;t stop at the lab door. Students continue on the app, and their activity flows straight back into your dashboard.</p>
          </Reveal>
          
          <Reveal className="card">
            <div className="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
            </div>
            <h3>Lower cost, not more headcount</h3>
            <p>Implementing the product cuts what you spend on training and assessment. Our rates are deliberately disruptive — ask for the comparison.</p>
          </Reveal>
          
          <Reveal className="card">
            <div className="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 3 3 8l9 5 9-5-9-5Zm0 18v-7"/></svg>
            </div>
            <h3>Data-driven decisions</h3>
            <p>Deciding where to put training hours needs evidence. The platform gives your cell the tech layer to make those calls on data.</p>
          </Reveal>
          
          <Reveal className="card">
            <div className="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 5h16v14H4z"/><path d="M8 9h8M8 13h5"/></svg>
            </div>
            <h3>One product, three sides</h3>
            <p>The same platform serves your students, your placement cell, and the companies you invite — instead of three disconnected tools.</p>
          </Reveal>
        </div>

        <Reveal className="note">
          <b>What we don&apos;t do</b>
          <p>We don&apos;t charge colleges for placements and we don&apos;t commit placement outcomes. What we provide is better training and better insight through our monitoring system. Hiring decisions stay with companies, where they belong.</p>
        </Reveal>

        <Reveal style={{ marginTop: "2.2rem" }}>
          <Button variant="violet" href="/contact">
            Request a campus walkthrough
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
