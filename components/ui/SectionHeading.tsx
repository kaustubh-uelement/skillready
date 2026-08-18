import React from "react";

export function SectionHeading({
  eyebrow,
  title,
  lede,
  children,
  className = "",
  titleStyle = {},
}: {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  lede?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  titleStyle?: React.CSSProperties;
}) {
  return (
    <div className={`sec-head ${className} reveal`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 style={titleStyle}>{title}</h2>
      {(lede || children) && <p className="lede">{lede || children}</p>}
    </div>
  );
}
