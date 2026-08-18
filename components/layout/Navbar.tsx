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
    <>
      {/* Top Kit Banner */}
      <div className="bg-[#713FFF] text-white text-xs md:text-sm py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-1.5 transition-colors">
        <span>This page is included in a free SaaS Website Kit.</span>
        <Link href="#cta" className="underline hover:opacity-90 font-semibold inline-flex items-center gap-1">
          View the complete Kit <span aria-hidden="true">→</span>
        </Link>
      </div>

      <header className={`nav ${mobileMenuOpen ? "open" : ""}`} id="nav">
        <div className="wrap nav-in flex items-center justify-between py-3.5">
          <Link href="/" className="logo flex items-center gap-2 font-bold text-xl tracking-tight text-black" aria-label="SkillReady.ai home">
            <Logo className="text-[#713FFF]" />
            <span className="font-bold text-[22px] tracking-tight">
              SkillReady<span className="text-[#713FFF]">.ai</span>
            </span>
          </Link>

          <nav className="nav-links hidden md:flex items-center gap-8 text-[15px] font-medium text-[#4C4C58]" id="navLinks" aria-label="Main">
            <Link href="/students" className="hover:text-black transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Students
            </Link>
            <Link href="/companies" className="hover:text-black transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Companies
            </Link>
            <Link href="/colleges" className="hover:text-black transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Colleges
            </Link>
            <Link href="/courses" className="hover:text-black transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Courses
            </Link>
            <Link href="/insights" className="hover:text-black transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Insights
            </Link>
          </nav>

          <div className="nav-actions hidden md:flex items-center gap-3">
            <Link
              className="bg-black hover:bg-[#222222] text-white text-[14px] font-medium px-5 py-2.5 rounded-full transition-all duration-150 active:scale-95 shadow-sm"
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>

          <button
            className="nav-toggle md:hidden"
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

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-[#E8E4F0] px-6 py-5 flex flex-col gap-4 shadow-xl">
            <Link href="/students" className="text-base font-medium py-1.5" onClick={() => setMobileMenuOpen(false)}>
              Students
            </Link>
            <Link href="/companies" className="text-base font-medium py-1.5" onClick={() => setMobileMenuOpen(false)}>
              Companies
            </Link>
            <Link href="/colleges" className="text-base font-medium py-1.5" onClick={() => setMobileMenuOpen(false)}>
              Colleges
            </Link>
            <Link href="/courses" className="text-base font-medium py-1.5" onClick={() => setMobileMenuOpen(false)}>
              Courses
            </Link>
            <Link href="/insights" className="text-base font-medium py-1.5" onClick={() => setMobileMenuOpen(false)}>
              Insights
            </Link>
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
              <Link
                className="bg-black text-white text-center text-sm font-semibold py-3 rounded-full"
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
