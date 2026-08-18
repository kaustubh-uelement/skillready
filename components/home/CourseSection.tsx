import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CourseSection() {
  return (
    <section className="section" id="courses">
      <div className="wrap">
        <Reveal>
          <SectionHeading
            eyebrow="Courses"
            title="Live courses, run by our own trainers"
            lede="Conducted online or in hybrid mode, on a fixed schedule, with the same trainers who deliver our campus programmes."
          />
        </Reveal>
        
        <div className="grid-3">
          <Reveal className="course">
            <div className="course-top">
              <span>Aptitude</span>
            </div>
            <div className="course-body">
              <h3>Quants and reasoning intensive</h3>
              <p>Arithmetic through data interpretation and logical reasoning, in the order companies test them. Built for students starting from zero.</p>
              <div className="course-foot">Live online · add schedule</div>
            </div>
          </Reveal>
          
          <Reveal className="course">
            <div className="course-top">
              <span>Technical</span>
            </div>
            <div className="course-body">
              <h3>Programming and core subjects</h3>
              <p>Coding fundamentals with DBMS, OS, and networks — the technical round, taught weekly with graded practice sets.</p>
              <div className="course-foot">Live online or hybrid · add schedule</div>
            </div>
          </Reveal>
          
          <Reveal className="course">
            <div className="course-top">
              <span>Verbal &amp; interview</span>
            </div>
            <div className="course-body">
              <h3>Verbal ability and interview craft</h3>
              <p>Comprehension and grammar for the written round, then group discussion and structured interview answers with mock rounds.</p>
              <div className="course-foot">Hybrid · add schedule</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
