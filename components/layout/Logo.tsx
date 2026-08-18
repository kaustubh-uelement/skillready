import React from "react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`mark ${className}`}
      viewBox="0 0 40 40"
      aria-hidden="true"
      style={{ width: "34px", height: "34px", flex: "none" }}
    >
      <circle cx="20" cy="20" r="18.5" fill="none" stroke="currentColor" strokeWidth="2.4" />
      <path
        d="M20 8.5c1.3 6.1 5.4 10.2 11.5 11.5-6.1 1.3-10.2 5.4-11.5 11.5-1.3-6.1-5.4-10.2-11.5-11.5C14.6 18.7 18.7 14.6 20 8.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
