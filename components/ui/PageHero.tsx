/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars, react-hooks/set-state-in-effect */
import Link from "next/link";
import React from "react";

export default function PageHero({ crumb, eyebrow, title, children, actions }: any) {
  return (
    <div style={{ background: "var(--color-ink)", color: "#fff", padding: "4rem 0 3rem" }}>
      <div className="wrap">
        {eyebrow && <span style={{ color: "#C4A6FF", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "1rem" }}>{eyebrow}</span>}
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.2rem)", maxWidth: "800px", lineHeight: 1.1, marginBottom: "1.5rem" }}>
          {title}
        </h1>
        {children && (
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.7)", maxWidth: "650px", lineHeight: 1.5, marginBottom: "2rem" }}>
            {children}
          </p>
        )}
        {actions && actions.length > 0 && (
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {actions.map((act: any, i: number) => {
              if (act.href) {
                return (
                  <a key={i} href={act.href} className={`btn ${act.style || "btn-ghost"}`} style={act.style === "btn-ghost" ? { color: "#fff", borderColor: "rgba(255,255,255,0.3)" } : {}}>
                    {act.label} {act.icon}
                  </a>
                );
              }
              return (
                <Link key={i} href={act.to} className={`btn ${act.style || "btn-ghost"}`} style={act.style === "btn-ghost" ? { color: "#fff", borderColor: "rgba(255,255,255,0.3)" } : {}}>
                  {act.label} {act.icon}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
