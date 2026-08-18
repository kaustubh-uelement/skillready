import React from "react";
import { Button } from "@/components/ui/Button";
import { HeroDashboard } from "./HeroDashboard";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-in">
        <div>
          <span className="badge">Welcome Onboard</span>
          <h1>
            The Bridge<br />Between Learning<br />and Employment
          </h1>
          <p className="lede">
            SkillReady makes students skill-ready to what companies actually ask for, helps companies find those candidates at no cost, and gives colleges the training and monitoring to move their numbers.
          </p>
          <div className="hero-cta">
            <Button variant="violet" href="/plans">
              Take a free mock test
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </Button>
            <Button variant="ghost" href="/contact">
              Book a college walkthrough
            </Button>
          </div>
          <p className="hero-sub">
            Separate logins for students, colleges, and companies. Free to post if you&apos;re hiring.
          </p>
        </div>

        <HeroDashboard />
      </div>

      <div className="wrap hero-strip">
        <svg className="strip-mark" viewBox="0 0 40 40" aria-hidden="true">
          <circle cx="20" cy="20" r="18.5" fill="none" stroke="#7A38E8" strokeWidth="2.4" />
          <path
            d="M20 8.5c1.3 6.1 5.4 10.2 11.5 11.5-6.1 1.3-10.2 5.4-11.5 11.5-1.3-6.1-5.4-10.2-11.5-11.5C14.6 18.7 18.7 14.6 20 8.5Z"
            fill="#7A38E8"
          />
        </svg>
        <p className="strip-copy">
          Learn the right skills.<br />Build employability.
        </p>
        <div className="strip-actions">
          <Button variant="dark" href="/students">
            Students
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </Button>
          <Button variant="dark" href="/colleges">
            Colleges
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </Button>
          <Button variant="dark" href="/companies">
            Companies
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
}
