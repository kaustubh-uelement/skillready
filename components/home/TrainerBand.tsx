import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function TrainerBand() {
  return (
    <section className="band">
      <div className="wrap band-in">
        <Reveal>
          <span className="eyebrow" style={{ color: "#C4A6FF" }}>
            Why we&apos;re different
          </span>
          <h2 style={{ marginTop: "0.8rem" }}>Built by trainers, not just by engineers</h2>
          <p>
            Most assessment platforms are software with content bolted on. SkillReady was built by people who have stood in front of classrooms for years — so the training and the product are designed to the same plan.
          </p>
        </Reveal>
        <Reveal className="band-facts">
          <div className="fact">
            <b>10,000+</b>
            <span>Students trained to placement by our aptitude head</span>
          </div>
          <div className="fact">
            <b>6,000+</b>
            <span>Questions, each with its own video solution</span>
          </div>
          <div className="fact">
            <b>3 states</b>
            <span>College partnerships today, Pan India in two years</span>
          </div>
          <div className="fact">
            <b>₹0</b>
            <span>Cost to companies for posting and hiring</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
