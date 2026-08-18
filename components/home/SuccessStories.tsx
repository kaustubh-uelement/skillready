import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SuccessStories() {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal>
          <SectionHeading
            eyebrow="Student success stories"
            title="The students who got there"
            lede="Real stories from our batches carry more weight than any claim we could make. These three slots are ready for them."
          />
        </Reveal>
        
        <div className="grid-3">
          <Reveal className="slot">
            <div className="mini-label">Story slot 1</div>
            <h3>Student name · College · Role joined</h3>
            <p>Add two lines in the student&apos;s own words: where they started, what they practised, what changed.</p>
          </Reveal>
          
          <Reveal className="slot">
            <div className="mini-label">Story slot 2</div>
            <h3>Student name · College · Role joined</h3>
            <p>Add two lines in the student&apos;s own words: where they started, what they practised, what changed.</p>
          </Reveal>
          
          <Reveal className="slot">
            <div className="mini-label">Story slot 3</div>
            <h3>Student name · College · Role joined</h3>
            <p>Add two lines in the student&apos;s own words: where they started, what they practised, what changed.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
