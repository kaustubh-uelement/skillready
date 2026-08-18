"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Logo } from "./Logo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className={`nav ${mobileMenuOpen ? "open" : ""}`} id="nav">
      <div className="wrap nav-in">
        <Link href="/" className="logo" aria-label="SkillReady.ai home">
          <Logo className="text-[#713FFF]" />
          <span>
            Skill<span className="dot">Ready</span>.ai
          </span>
        </Link>

        <nav className="nav-links" id="navLinks" aria-label="Main">
          <Link href="/students" onClick={() => setMobileMenuOpen(false)}>
            Students
          </Link>
          <Link href="/companies" onClick={() => setMobileMenuOpen(false)}>
            Companies
          </Link>
          <Link href="/colleges" onClick={() => setMobileMenuOpen(false)}>
            Colleges
          </Link>
          <Link href="/courses" onClick={() => setMobileMenuOpen(false)}>
            Courses
          </Link>
          <Link href="/plans" onClick={() => setMobileMenuOpen(false)}>
            Plans
          </Link>
          <Link href="/insights" onClick={() => setMobileMenuOpen(false)}>
            Insights
          </Link>
        </nav>

        <div className="nav-actions">
          <div
            className={`dd ${dropdownOpen ? "open" : ""}`}
            id="loginDd"
            ref={dropdownRef}
          >
            <button
              className="btn btn-light btn-sm"
              id="loginBtn"
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              onClick={(e) => {
                e.stopPropagation();
                setDropdownOpen(!dropdownOpen);
              }}
            >
              Log in
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div
              className="dd-panel"
              role="menu"
              aria-label="Choose account type"
            >
              <Link
                href="/students"
                role="menuitem"
                onClick={() => setDropdownOpen(false)}
              >
                Student login<span>Learn, exams, jobs, courses</span>
              </Link>
              <Link
                href="/colleges"
                role="menuitem"
                onClick={() => setDropdownOpen(false)}
              >
                College login<span>Batch monitoring and reports</span>
              </Link>
              <Link
                href="/companies"
                role="menuitem"
                onClick={() => setDropdownOpen(false)}
              >
                Company login<span>Post roles, filter candidates</span>
              </Link>
            </div>
          </div>
          <Link
            className="btn btn-dark btn-sm"
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact us
          </Link>
        </div>

        <button
          className="nav-toggle"
          id="navToggle"
          aria-expanded={mobileMenuOpen}
          aria-controls="navLinks"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
