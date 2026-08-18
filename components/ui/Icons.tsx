/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

export const Arrow = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export const Tick = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-violet)" }}>
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export const Mark = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="var(--color-violet)">
    <circle cx="12" cy="12" r="12" />
  </svg>
);

export const Icon = ({ name, className }: { name: string, className?: string }) => {
  // Generic fallback for different icons
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
    </svg>
  );
};
