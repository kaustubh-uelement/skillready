import React from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function StudentSection() {
  return (
    <section className="section tint" id="students">
      <div className="wrap">
        <Reveal>
          <SectionHeading
            eyebrow="For students"
            title="Six modules that take you from first year to first offer"
            lede="Open to graduation and post-graduation students across B.E., B.Sc., B.Com., BCCA, and B.Pharma — and useful from the day you join, not the month before drives begin."
          />
        </Reveal>

        <Reveal className="modules">
          <div className="mod"><span className="mod-tag">Learn</span><b>Practice and watch-and-learn</b><span>Practice exercises, practice tests, and video lessons for every topic on the syllabus.</span></div>
          <div className="mod"><span className="mod-tag">Exam</span><b>Company-specific mocks</b><span>Attempt papers built to individual company patterns, plus general mock exams.</span></div>
          <div className="mod"><span className="mod-tag">Top recruiters</span><b>Know what they ask for</b><span>Browse recruiter profiles and required skills, then wishlist companies to raise your visibility with them.</span></div>
          <div className="mod"><span className="mod-tag">Profile</span><b>Kept current, not annual</b><span>Upload your resume and keep skills, certifications, academic records, and projects live for recruiters.</span></div>
          <div className="mod"><span className="mod-tag">Jobs &amp; internships</span><b>Apply where hiring is open</b><span>Live internships and jobs posted by companies, applied to from the same account.</span></div>
          <div className="mod"><span className="mod-tag">Courses</span><b>Live, online or hybrid</b><span>Instructor-led courses we run ourselves, for the areas that need more than practice.</span></div>
        </Reveal>

        <Reveal className="bank" style={{ marginTop: "3rem" }}>
          <div>
            <h2>6,000+ questions.<br />A video solution for every one.</h2>
            <p>Getting a question wrong is only useful if you find out why. Every question in the library has a worked video explanation, so practice turns into understanding.</p>
            <p className="bank-note">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true"><path d="m5 13 4 4L19 7"/></svg>
              Practise on the web or on the mobile app
            </p>
          </div>
          <div className="bank-grid">
            <div className="bank-cell"><b>Quants</b><span>Arithmetic, algebra, data interpretation</span></div>
            <div className="bank-cell"><b>Logical reasoning</b><span>Puzzles, series, critical reasoning</span></div>
            <div className="bank-cell"><b>Technical</b><span>Programming, DBMS, OS, core subjects</span></div>
            <div className="bank-cell"><b>Verbal</b><span>Grammar, comprehension, vocabulary</span></div>
          </div>
        </Reveal>

        <Reveal>
          <h3 style={{ marginTop: "3.5rem", fontSize: "1.35rem" }}>Start practising by topic</h3>
        </Reveal>
        
        <Reveal className="topics">
          <div className="topic-col">
            <h4>Quantitative aptitude</h4>
            <ul>
              <li><Link href="/students">Percentages</Link></li>
              <li><Link href="/students">Time, speed and distance</Link></li>
              <li><Link href="/students">Time and work</Link></li>
              <li><Link href="/students">Profit and loss</Link></li>
              <li><Link href="/students">Permutations and combinations</Link></li>
              <li><Link href="/students">Probability</Link></li>
              <li><Link href="/students">Data interpretation</Link></li>
            </ul>
          </div>
          <div className="topic-col">
            <h4>Logical reasoning</h4>
            <ul>
              <li><Link href="/students">Seating arrangements</Link></li>
              <li><Link href="/students">Blood relations</Link></li>
              <li><Link href="/students">Syllogisms</Link></li>
              <li><Link href="/students">Coding and decoding</Link></li>
              <li><Link href="/students">Number and letter series</Link></li>
              <li><Link href="/students">Data sufficiency</Link></li>
              <li><Link href="/students">Critical reasoning</Link></li>
            </ul>
          </div>
          <div className="topic-col">
            <h4>Technical</h4>
            <ul>
              <li><Link href="/students">C and C++</Link></li>
              <li><Link href="/students">Java</Link></li>
              <li><Link href="/students">Python</Link></li>
              <li><Link href="/students">Data structures and algorithms</Link></li>
              <li><Link href="/students">DBMS and SQL</Link></li>
              <li><Link href="/students">Operating systems</Link></li>
              <li><Link href="/students">Computer networks</Link></li>
            </ul>
          </div>
          <div className="topic-col">
            <h4>Verbal ability</h4>
            <ul>
              <li><Link href="/students">Reading comprehension</Link></li>
              <li><Link href="/students">Sentence correction</Link></li>
              <li><Link href="/students">Para jumbles</Link></li>
              <li><Link href="/students">Synonyms and antonyms</Link></li>
              <li><Link href="/students">Idioms and phrases</Link></li>
              <li><Link href="/students">Error spotting</Link></li>
              <li><Link href="/students">Vocabulary builder</Link></li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
