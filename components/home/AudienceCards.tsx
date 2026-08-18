import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function AudienceCards() {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal>
          <SectionHeading
            eyebrow="One platform, three logins"
            title="Everyone in the hiring chain works from the same data"
            lede="Students practise on web and mobile. Colleges see how batches are actually progressing in real time. Companies filter live candidates instead of sorting CVs."
          />
        </Reveal>
        <div className="grid-3">
          <Reveal className="card aud">
            <span className="tag">Students</span>
            <h3>Practise, test, apply</h3>
            <p>Start in first year, not final year. Build the aptitude and technical base companies screen for, then apply from the same account.</p>
            <ul>
              <li>Learn, mock exams, video solutions</li>
              <li>Company-specific test patterns</li>
              <li>Mobile app for daily practice</li>
            </ul>
            <Button variant="dark" href="/students">
              Explore student portal
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </Button>
          </Reveal>
          
          <Reveal className="card aud">
            <span className="tag">Colleges</span>
            <h3>Training plus visibility</h3>
            <p>Training for your batches, plus a proprietary monitoring system that tracks student progress in real time — at disruptive rates.</p>
            <ul>
              <li>Real-time batch progress tracking</li>
              <li>Data your placement cell can act on</li>
              <li>Training, product, or both</li>
            </ul>
            <Button variant="dark" href="/colleges">
              See the college model
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </Button>
          </Reveal>
          
          <Reveal className="card aud">
            <span className="tag">Companies</span>
            <h3>Free, self-serve hiring</h3>
            <p>Post a role, then filter candidates in real time by CGPA, skills, and aptitude scores. Screen fewer people to make the same hire.</p>
            <ul>
              <li>Self-posting dashboard, no fee</li>
              <li>Live student data across colleges</li>
              <li>Two-step onboarding, then you&apos;re in</li>
            </ul>
            <Button variant="dark" href="/companies">
              Open a hiring account
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
