/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import React from "react";

export default function JobCard({ job, cta }: any) {
  return (
    <article className="card reveal" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ marginBottom: "1rem" }}>
        <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-violet-deep)", background: "var(--color-violet-soft)", padding: "0.2em 0.8em", borderRadius: "999px" }}>
          {job.type}
        </span>
      </div>
      <h3 style={{ fontSize: "1.15rem", marginBottom: "0.5rem" }}>{job.title}</h3>
      <p style={{ fontSize: "0.85rem", color: "var(--color-ink-60)", marginBottom: "1rem", lineHeight: 1.4 }}>
        {job.meta}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
        {job.skills.map((s: string) => (
          <span key={s} style={{ fontSize: "0.75rem", background: "#f3f4f6", padding: "0.2em 0.6em", borderRadius: "4px", color: "#4b5563", fontWeight: 500 }}>
            {s}
          </span>
        ))}
      </div>
      {cta && (
        <div style={{ marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid var(--color-line)" }}>
          <Link href={cta.to} style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--color-violet)", display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
            {cta.label} <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      )}
    </article>
  );
}
