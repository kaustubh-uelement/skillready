"use client";
import React, { useState } from "react";

export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div style={{ display: "grid", gap: "1rem", maxWidth: "800px" }}>
      {items.map((item, i) => (
        <div 
          key={i} 
          style={{ 
            borderBottom: "1px solid var(--color-line)",
            paddingBottom: "1rem"
          }}
        >
          <button 
            onClick={() => setOpen(open === i ? null : i)}
            style={{ 
              width: "100%", 
              textAlign: "left", 
              background: "none", 
              border: "none", 
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "1.1rem",
              fontWeight: 600,
              fontFamily: "var(--font-display)",
              padding: "0.5rem 0"
            }}
          >
            {item.q}
            <span>{open === i ? "−" : "+"}</span>
          </button>
          {open === i && (
            <div style={{ padding: "0.5rem 0 1rem", color: "var(--color-ink-60)", lineHeight: 1.6 }}>
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
