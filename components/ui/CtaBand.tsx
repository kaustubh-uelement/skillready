/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars, react-hooks/set-state-in-effect */
import Link from "next/link";
import React from "react";

export default function CtaBand({ 
  title = "Ready to start?", 
  body = "Join thousands of students and get placed.", 
  primary = { to: "/signup", label: "Create account" }, 
  secondary = { to: "/login", label: "Log in" } 
}: any) {
  return (
    <section className="section lilac" style={{ textAlign: "center" }}>
      <div className="wrap">
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.8rem)", marginBottom: "1rem" }}>{title}</h2>
        <p style={{ color: "var(--color-ink-60)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto 2rem" }}>{body}</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <Link href={primary.to} className="btn btn-violet btn-lg">{primary.label}</Link>
          {secondary && <Link href={secondary.to} className="btn btn-outline btn-lg">{secondary.label}</Link>}
        </div>
      </div>
    </section>
  );
}
