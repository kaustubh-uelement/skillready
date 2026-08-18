import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-black text-[#9E9E9E] pt-16 pb-12 font-sans border-t border-[#222222]">
      <div className="wrap">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-[#222222]">
          {/* Brand Column */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl" aria-label="SkillReady.ai home">
              <Logo className="text-[#713FFF]" />
              <span className="text-white font-bold text-[22px]">SkillReady<span className="text-[#713FFF]">.ai</span></span>
            </Link>
            <p className="text-[14px] text-[#9E9E9E] leading-relaxed max-w-[320px]">
              Empowering students to land their dream jobs through structured learning and mentorship.
            </p>
            <div className="text-[13px] text-[#7B7B7B] leading-relaxed mt-2">
              <p>123, Techpark, Electronic City,</p>
              <p>Bangalore, Karnataka 560100</p>
              <p className="text-white hover:text-[#713FFF] mt-1 transition-colors">
                <a href="mailto:info@skillready.ai">info@skillready.ai</a>
              </p>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-2"></div>

          {/* Links Column 1: Browse */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <h4 className="text-white text-[15px] font-semibold tracking-wide">Browse</h4>
            <ul className="flex flex-col gap-2 text-[14px]">
              <li><Link href="/" className="hover:text-white transition-colors">Homepage</Link></li>
              <li><Link href="/students" className="hover:text-white transition-colors">Students</Link></li>
              <li><Link href="/companies" className="hover:text-white transition-colors">Companies</Link></li>
              <li><Link href="/courses" className="hover:text-white transition-colors">Courses</Link></li>
              <li><Link href="/#reviews" className="hover:text-white transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          {/* Links Column 2: Resources */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <h4 className="text-white text-[15px] font-semibold tracking-wide">Resources</h4>
            <ul className="flex flex-col gap-2 text-[14px]">
              <li><Link href="/courses" className="hover:text-white transition-colors">Search Site</Link></li>
              <li><Link href="/insights" className="hover:text-white transition-colors">Insights</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Helpdesk</Link></li>
              <li><Link href="/students" className="hover:text-white transition-colors">Career Guide</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Links Column 3: Legal */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <h4 className="text-white text-[15px] font-semibold tracking-wide">Legal</h4>
            <ul className="flex flex-col gap-2 text-[14px]">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Company Info</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Icons */}
          <div className="flex items-center gap-2.5">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg border border-[#292929] bg-[#111111] hover:bg-[#713FFF] hover:border-[#713FFF] hover:text-white flex items-center justify-center transition-all text-[#9E9E9E]" aria-label="LinkedIn">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg border border-[#292929] bg-[#111111] hover:bg-[#713FFF] hover:border-[#713FFF] hover:text-white flex items-center justify-center transition-all text-[#9E9E9E]" aria-label="Instagram">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg border border-[#292929] bg-[#111111] hover:bg-[#713FFF] hover:border-[#713FFF] hover:text-white flex items-center justify-center transition-all text-[#9E9E9E]" aria-label="Facebook">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg border border-[#292929] bg-[#111111] hover:bg-[#713FFF] hover:border-[#713FFF] hover:text-white flex items-center justify-center transition-all text-[#9E9E9E]" aria-label="X (Twitter)">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>

          {/* Copyright Disclaimer */}
          <div className="text-[12px] text-[#7B7B7B] text-center md:text-right max-w-[680px] leading-normal">
            © 2026 SKILL READY. All rights reserved. SkillReady provides learning, assessment, and career-readiness support. Course completion does not guarantee employment, placement, or specific career outcomes.
          </div>
        </div>
      </div>
    </footer>
  );
}
