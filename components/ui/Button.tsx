import React from "react";
import Link from "next/link";

type ButtonProps = {
  variant?: "dark" | "violet" | "ghost" | "light";
  size?: "sm" | "default";
  href?: string;
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "dark",
  size = "default",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const sizeClass = size === "sm" ? "btn-sm" : "";
  const variantClass = `btn-${variant}`;

  const combinedClasses = `btn ${sizeClass} ${variantClass} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
