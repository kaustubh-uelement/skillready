import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function CompanySection() {
  return (
    <section className="section tint" id="companies">
      <div className="wrap">
        <Reveal>
          <SectionHeading
            eyebrow="For companies"
            title="Screen fewer candidates for the same hire"
            lede="Posting is free and self-serve. Every candidate arrives with test data already attached, so your first filter removes real redundancy instead of guessing from CVs."
          />
        </Reveal>

        <Reveal className="mock">
          <div className="mock-top">
            <i></i><i></i><i></i>
            <span className="mock-title">Candidate search — Software Engineer Trainee</span>
          </div>
          <div className="mock-body">
            <div className="filters">
              <h4>Filters</h4>
              <div className="fgroup">
                <label htmlFor="cg">Minimum CGPA — 7.5</label>
                <div className="track" id="cg" role="img" aria-label="Minimum CGPA set to 7.5">
                  <i></i><b></b>
                </div>
              </div>
              <div className="fgroup">
                <label>Skills</label>
                <div className="chips">
                  <span className="on">Python</span>
                  <span className="on">SQL</span>
                  <span>Java</span>
                  <span>React</span>
                  <span>Excel</span>
                </div>
              </div>
              <div className="fgroup">
                <label>Aptitude score</label>
                <div className="chips">
                  <span>60+</span>
                  <span className="on">80+</span>
                  <span>90+</span>
                </div>
              </div>
              <div className="fgroup">
                <label>Graduation year</label>
                <div className="chips">
                  <span className="on">2027</span>
                  <span>2028</span>
                </div>
              </div>
              <div className="fgroup">
                <label>College</label>
                <div className="chips">
                  <span className="on">All partner colleges</span>
                </div>
              </div>
            </div>
            <div className="results">
              <div className="res-head">
                <span>Matching candidates — live</span>
                <span>Aptitude</span>
              </div>
              <div className="res-row">
                <div className="res-av"></div>
                <div>
                  <div className="res-name">Candidate A — B.E. CSE</div>
                  <div className="res-meta">CGPA 8.4 · Python, SQL · 6 mocks cleared · resume updated</div>
                </div>
                <div className="res-score">92</div>
              </div>
              <div className="res-row">
                <div className="res-av"></div>
                <div>
                  <div className="res-name">Candidate B — B.Sc. CS</div>
                  <div className="res-meta">CGPA 8.1 · Python, SQL · 4 mocks cleared · 2 projects</div>
                </div>
                <div className="res-score">88</div>
              </div>
              <div className="res-row">
                <div className="res-av"></div>
                <div>
                  <div className="res-name">Candidate C — BCCA</div>
                  <div className="res-meta">CGPA 7.9 · SQL, Excel · 5 mocks cleared · certified</div>
                </div>
                <div className="res-score">85</div>
              </div>
              <div className="res-row">
                <div className="res-av"></div>
                <div>
                  <div className="res-name">Candidate D — B.E. IT</div>
                  <div className="res-meta">CGPA 7.6 · Python · 3 mocks cleared · wishlisted you</div>
                </div>
                <div className="res-score">81</div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="grid-3" style={{ marginTop: "2.5rem" }}>
          <article className="card">
            <h3>No hiring fee, ever</h3>
            <p>You aren&apos;t charged to post roles or to shortlist. Our revenue comes from college training programmes and student subscriptions, not from employers.</p>
          </article>
          <article className="card">
            <h3>A better screening ratio</h3>
            <p>Filter on CGPA, skills, aptitude scores, and other parameters before the first call, so fewer candidates need screening per final selection.</p>
          </article>
          <article className="card">
            <h3>Live data across colleges</h3>
            <p>Student profiles stay current — resumes, skills, certifications, projects, and latest scores — across every partner campus, in one search.</p>
          </article>
        </Reveal>

        <Reveal>
          <h3 style={{ marginTop: "3.2rem", fontSize: "1.35rem" }}>Onboarding takes two steps</h3>
        </Reveal>
        
        <Reveal className="steps">
          <div className="step">
            <b className="num">01</b>
            <div>
              <h4>Verify your organisation</h4>
              <p>Sign up with your work email and confirm your company details. A simple two-step verification, no sales call required.</p>
            </div>
          </div>
          <div className="step">
            <b className="num">02</b>
            <div>
              <h4>Post the profile and required skills</h4>
              <p>Describe the role and the skills it needs. Matching candidates appear immediately, and students can wishlist you back.</p>
            </div>
          </div>
        </Reveal>

        <Reveal style={{ marginTop: "2.2rem" }}>
          <Button variant="violet" href="/contact">
            Post a role free
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
