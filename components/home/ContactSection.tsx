"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSend = () => {
    if (!name.trim() || !email.trim()) {
      setMsg("Add your name and email so we can reply.");
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setMsg("That email address looks incomplete.");
      return;
    }
    setMsg("Message ready to send - connect this form to your inbox or CRM to go live.");
  };

  return (
    <section className="section" id="contact">
      <div className="wrap contact">
        <Reveal>
          <span className="eyebrow">Contact us</span>
          <h2 style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.6rem)", margin: "0.9rem 0 1.1rem" }}>
            Tell us which side of the bridge you&apos;re on
          </h2>
          <p className="lede" style={{ marginBottom: "2rem" }}>
            Students can sign up and start free. Colleges and companies — send a note and we&apos;ll set up the right walkthrough.
          </p>

          <form onSubmit={(e) => { e.preventDefault(); handleSend(); }}>
            <div className="field">
              <label htmlFor="name">Your name</label>
              <input
                id="name"
                type="text"
                placeholder="Full name"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="role">I&apos;m reaching out as</label>
              <select id="role">
                <option>A student</option>
                <option>A college, dean or placement officer</option>
                <option>A company hiring freshers</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="org">College or company</label>
              <input id="org" type="text" placeholder="Institution or organisation name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone</label>
              <input id="phone" type="tel" placeholder="Mobile number" autoComplete="tel" />
            </div>
            <div className="field">
              <label htmlFor="msg">What do you need?</label>
              <textarea id="msg" placeholder="A batch size, a hiring requirement, or just a question."></textarea>
            </div>
            <button className="btn btn-violet" type="submit">
              Send message
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </button>
            <p className="form-msg" role="status">
              {msg}
            </p>
          </form>
        </Reveal>

        <Reveal>
          <aside className="reach">
            <h3 style={{ fontSize: "1.3rem" }}>Where we are</h3>
            <p style={{ color: "#3F3F4C", marginTop: "0.7rem", fontSize: "0.97rem" }}>
              Partnering with institutions across three states today, expanding to Pan India over the next two years.
            </p>
            <dl>
              <dt>Students</dt>
              <dd>Create an account and start with a free mock test.</dd>
              <dt>Colleges</dt>
              <dd>Cold visit, referral, or this form — we&apos;ll walk your placement cell through the training and monitoring package.</dd>
              <dt>Companies</dt>
              <dd>Two-step verification, then post roles and filter candidates the same day. No cost.</dd>
              <dt>Email</dt>
              <dd>
                <a href="mailto:hello@skillready.ai" style={{ color: "var(--color-violet-deep)", fontWeight: 600 }}>
                  hello@skillready.ai
                </a>
              </dd>
            </dl>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
