import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TeamSection() {
  return (
    <section className="section lilac" id="about">
      <div className="wrap">
        <Reveal>
          <SectionHeading
            eyebrow="The team"
            title="A product built by the people who do the training"
            lede="Our vision is a single place to find a job and upgrade the skills that get you one — deployed across the majority of colleges in India."
          />
        </Reveal>
        
        <div className="team">
          <Reveal className="member">
            <div className="mono">AS</div>
            <h3>Aakash Satdeve</h3>
            <div className="role">Technical Head</div>
            <p>Previously at Persistent and Accenture. Builds the platform behind the training.</p>
          </Reveal>
          
          <Reveal className="member">
            <div className="mono">AS</div>
            <h3>Abhilash Sannyal</h3>
            <div className="role">Aptitude Head</div>
            <p>Consistent 99.7 percentiler in CAT. Has trained more than 10,000 students into placements.</p>
          </Reveal>
          
          <Reveal className="member">
            <div className="mono">PV</div>
            <h3>Poonam Vaidya</h3>
            <div className="role">Head — Sales &amp; College Communication</div>
            <p>Over 14 years in corporate roles. Runs institutional partnerships end to end.</p>
          </Reveal>
          
          <Reveal className="member">
            <div className="mono">HS</div>
            <h3>Hemant Sakore</h3>
            <div className="role">Head — Operations</div>
            <p>Previously at TCS. Keeps training delivery and assessments running on schedule.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
