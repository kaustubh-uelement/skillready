import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="logo" style={{ color: "#fff", marginBottom: "1rem" }}>
              <Logo className="text-[#A879FF]" />
              <span>SkillReady.ai</span>
            </div>
            <p style={{ maxWidth: "34ch" }}>
              One place for students, colleges, and companies to get skill-ready and employable.
            </p>
            <div className="socials">
              <a href="#" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M21.6 7.2s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9C17.1 4.1 12 4.1 12 4.1h0s-5.1 0-6.7.2c-.4.1-1.3.1-2.1.9-.6.6-.8 2-.8 2S2.2 8.8 2.2 10.4v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.2.9 1.6.2 6.6.2 6.6.2s5.1 0 6.7-.2c.4-.1 1.3-.1 2.1-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5c0-1.6-.2-3.2-.2-3.2ZM10 14.6V8.9l5.3 2.9-5.3 2.8Z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05A4.2 4.2 0 0 1 17.6 8.7c3 0 3.4 1.9 3.4 4.5V21h-4v-6.4c0-1.5-.3-2.6-1.8-2.6-1.4 0-1.8 1-1.8 2.5V21h-3.9V9Z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4>Students</h4>
            <ul>
              <li><Link href="/students">Learn module</Link></li>
              <li><Link href="/students">Mock exams</Link></li>
              <li><Link href="/students">Top recruiters</Link></li>
              <li><Link href="/students">Jobs &amp; internships</Link></li>
              <li><Link href="/plans">Plans</Link></li>
            </ul>
          </div>
          <div>
            <h4>Colleges</h4>
            <ul>
              <li><Link href="/colleges">Training programme</Link></li>
              <li><Link href="/colleges">Monitoring system</Link></li>
              <li><Link href="/colleges">Batch insights</Link></li>
              <li><Link href="/contact">Request a walkthrough</Link></li>
            </ul>
          </div>
          <div>
            <h4>Companies</h4>
            <ul>
              <li><Link href="/companies">Post a role free</Link></li>
              <li><Link href="/companies">Candidate filters</Link></li>
              <li><Link href="/companies">Onboarding</Link></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/#about">About the team</Link></li>
              <li><Link href="/courses">Courses</Link></li>
              <li><Link href="/insights">Insights</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 SkillReady.ai. All rights reserved.</span>
          <span>Training and assessment platform · No placement guarantees · Free for employers</span>
        </div>
      </div>
    </footer>
  );
}
