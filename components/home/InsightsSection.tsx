import React from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function InsightsSection() {
  return (
    <section className="section tint" id="insights">
      <div className="wrap">
        <Reveal>
          <SectionHeading
            eyebrow="Insights"
            title="Notes from the campus-to-career gap"
            lede="Free tests, prep guides, and placement-cell reading — the pages that bring students to us organically."
          />
        </Reveal>
        
        <div className="grid-3">
          <Reveal className="post">
            <time>Placement prep</time>
            <h3>Why final-year prep is already too late</h3>
            <p>What changes when students start aptitude practice in first year instead of the semester before drives begin.</p>
            <Link href="/insights">Read the note →</Link>
          </Reveal>
          
          <Reveal className="post">
            <time>For placement cells</time>
            <h3>Reading a batch report properly</h3>
            <p>Attempt rate, score movement, and topic gaps — which numbers tell you a cohort is genuinely improving.</p>
            <Link href="/insights">Read the note →</Link>
          </Reveal>
          
          <Reveal className="post">
            <time>For recruiters</time>
            <h3>What a screening filter should actually check</h3>
            <p>CGPA alone predicts less than most shortlists assume. A look at combining it with test performance.</p>
            <Link href="/insights">Read the note →</Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
