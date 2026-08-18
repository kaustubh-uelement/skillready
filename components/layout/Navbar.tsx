/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Logo } from "./Logo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <>
      {/* Top Kit Banner */}
      <div className="bg-[#713FFF] text-white text-xs md:text-sm py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-1.5 transition-colors">
        <span>This page is included in a free SaaS Website Kit.</span>
        <Link href="/#cta" className="underline hover:opacity-90 font-semibold inline-flex items-center gap-1">
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

          <nav className="nav-links hidden md:flex items-center gap-7 lg:gap-8 text-[15px] font-medium text-[#4C4C58]" id="navLinks" aria-label="Main">
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
            {session?.user ? (
              <div className="flex items-center gap-3">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2 bg-[#F2EEFD] hover:bg-[#EBE7F7] text-[#713FFF] font-semibold text-[13px] px-3.5 py-1.5 rounded-full border border-[#713FFF]/20 transition-all shadow-2xs"
                >
                  <span className="w-5 h-5 rounded-full bg-[#713FFF] text-white flex items-center justify-center text-[10px] font-bold">
                    {(session.user as any)?.initials || "JD"}
                  </span>
                  <span>Dashboard</span>
                </Link>
                <button
                  type="button"
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="text-[13px] font-semibold text-[#7A7A88] hover:text-black transition-colors cursor-pointer"
                >
                  Log out
                </button>
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-[14px] font-semibold text-[#4C4C58] hover:text-black px-3 py-2 rounded-[10px] transition-colors"
                >
                  Log in
                </Link>
                <Link
                  className="bg-black hover:bg-[#222222] text-white text-[14px] font-medium px-4.5 py-2.5 rounded-[10px] transition-all duration-150 active:scale-95 shadow-xs"
                  href="/signup"
                >
                  Sign up
                </Link>
              </>
            )}
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
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2.5">
              {session?.user ? (
                <>
                  <Link
                    className="bg-[#713FFF] text-white text-center text-sm font-semibold py-2.5 rounded-[10px]"
                    href="/dashboard"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Open Dashboard
                  </Link>
                  <button
                    type="button"
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="bg-white border border-[#E2DEEA] text-black text-center text-sm font-semibold py-2.5 rounded-[10px]"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    className="bg-white border border-[#E2DEEA] text-black text-center text-sm font-semibold py-2.5 rounded-[10px]"
                    href="/login"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Log in
                  </Link>
                  <Link
                    className="bg-black text-white text-center text-sm font-semibold py-2.5 rounded-[10px]"
                    href="/signup"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign up
                  </Link>
                </div>
              )}
              <Link
                className="bg-[#F2EEFD] text-[#4C1D95] text-center text-sm font-semibold py-2.5 rounded-[10px]"
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
