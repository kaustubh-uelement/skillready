import React from "react";

export function SectionHeading({
  eyebrow,
  title,
  lede,
  className = "",
  titleStyle = {},
}: {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  lede?: React.ReactNode;
  className?: string;
  titleStyle?: React.CSSProperties;
}) {
  return (
    <div className={`sec-head ${className}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 style={titleStyle}>{title}</h2>
      {lede && <p className="lede">{lede}</p>}
    </div>
  );
}
