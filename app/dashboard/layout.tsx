/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { Logo } from "@/components/layout/Logo";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const currentUser = {
    name: session?.user?.name || "John Doe",
    initials: (session?.user as any)?.initials || "JD",
    role: (session?.user as any)?.role || "L1 Learner — Quantum + PQC",
  };

  const navItems = [
    {
      label: "Dashboard",
      href: "/dashboard",
      exact: true,
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
          <rect x="1" y="1" width="6" height="6" />
          <rect x="9" y="1" width="6" height="6" />
          <rect x="1" y="9" width="6" height="6" />
          <rect x="9" y="9" width="6" height="6" />
        </svg>
      ),
    },
    {
      label: "My Courses",
      href: "/dashboard/courses",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
          <path d="M2 4h12M2 8h8M2 12h10" />
        </svg>
      ),
    },
    {
      label: "Live Sessions",
      href: "/dashboard/live",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
          <rect x="2" y="2" width="12" height="12" />
          <polygon points="6,5 12,8 6,11" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      label: "Certifications",
      href: "/dashboard/certifications",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
          <path d="M8 1l2 4 5 .7-3.5 3.4.8 5L8 12l-4.3 2.1.8-5L1 5.7 6 5z" />
        </svg>
      ),
    },
    {
      label: "Lab Access",
      href: "/dashboard/labs",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
          <circle cx="8" cy="8" r="6" />
          <path d="M8 5v3l2 2" />
        </svg>
      ),
    },
    {
      label: "My Profile",
      href: "/dashboard/profile",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
          <circle cx="8" cy="5" r="3" />
          <path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" />
        </svg>
      ),
    },
  ];

  const isItemActive = (item: typeof navItems[0]) => {
    if (item.exact) {
      return pathname === item.href;
    }
    return pathname.startsWith(item.href);
  };

  return (
    <div className="min-h-screen bg-[#FBF9FF] flex flex-col font-sans text-black">
      {/* ── Top Navigation Bar (matching screenshot layout) ─────────── */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E8E4F0] h-16 flex items-center justify-between px-4 sm:px-8">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            className="lg:hidden p-1.5 rounded-lg text-[#4C4C58] hover:bg-[#F4F2FA]"
            aria-label="Toggle Sidebar"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <Link href="/" className="flex items-center gap-2">
            <Logo className="text-[#713FFF] w-7 h-7" />
            <span className="font-bold text-[19px] tracking-tight text-black">
              SkillReady<span className="text-[#713FFF]">.ai</span>
            </span>
          </Link>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-[12px] font-semibold tracking-widest uppercase text-[#7A7A88]">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <Link href="/courses" className="hover:text-black transition-colors">
            Tracks
          </Link>
          <Link href="/dashboard/certifications" className="hover:text-black transition-colors">
            Certifications
          </Link>
          <Link href="/dashboard/live" className="hover:text-black transition-colors">
            Live Sessions
          </Link>
          <Link href="/insights" className="hover:text-black transition-colors">
            About
          </Link>
        </nav>

        {/* Right User Chip & Log Out */}
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/profile"
            className="flex items-center gap-2.5 px-2.5 py-1 rounded-[8px] hover:bg-[#F4F2FA] transition-colors"
          >
            <span className="w-7 h-7 rounded-[6px] bg-[#F2EEFD] text-[#713FFF] border border-[#713FFF]/20 flex items-center justify-center font-mono text-[11px] font-bold">
              {currentUser.initials}
            </span>
            <span className="text-[13px] font-medium text-black hidden sm:inline">
              {currentUser.name.split(" ")[0]}
            </span>
          </Link>

          <button
            type="button"
            onClick={() => signOut({ callbackUrl: "/" })}
            className="font-mono text-[11px] font-semibold uppercase tracking-wider px-3.5 py-1.5 border border-[#713FFF]/40 text-[#713FFF] hover:bg-[#713FFF] hover:text-white rounded-[6px] transition-all cursor-pointer"
          >
            Log Out
          </button>
        </div>
      </header>

      {/* ── Two-Column Layout ────────────────────────────────────────── */}
      <div className="flex-1 flex">
        {/* Left Sidebar */}
        <aside
          className={`fixed lg:sticky top-16 left-0 z-30 h-[calc(100vh-64px)] w-[240px] bg-white border-r border-[#E8E4F0] flex flex-col justify-between transition-transform duration-200 lg:translate-x-0 ${
            mobileSidebarOpen ? "translate-x-0 shadow-xl" : "-translate-x-full"
          }`}
        >
          <div className="overflow-y-auto">
            {/* User header */}
            <div className="p-5 border-b border-[#E8E4F0]">
              <div className="w-8 h-8 rounded-[6px] bg-[#713FFF] text-white flex items-center justify-center font-bold text-xs mb-3 shadow-xs">
                {currentUser.initials}
              </div>
              <div className="text-[14px] font-bold text-black leading-tight truncate">
                {currentUser.name}
              </div>
              <div className="font-mono text-[9px] text-[#7A7A88] tracking-wider uppercase mt-1 truncate">
                {currentUser.role}
              </div>
            </div>

            {/* Navigation links */}
            <nav className="py-3 px-2 space-y-0.5" aria-label="Dashboard Menu">
              {navItems.map((item) => {
                const active = isItemActive(item);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileSidebarOpen(false)}
                    className={`flex items-center gap-3 px-3.5 py-2.5 rounded-[8px] text-[13px] font-medium transition-all duration-150 ${
                      active
                        ? "bg-[#713FFF] text-white font-semibold shadow-xs"
                        : "text-[#4C4C58] hover:bg-[#F4F2FA] hover:text-black"
                    }`}
                  >
                    <span className={active ? "text-white" : "text-[#713FFF]"}>
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Bottom Logout */}
          <div className="p-3 border-t border-[#E8E4F0]">
            <button
              type="button"
              onClick={() => signOut({ callbackUrl: "/" })}
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-[8px] text-[13px] font-medium text-[#7A7A88] hover:text-[#713FFF] hover:bg-[#F2EEFD] transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M6 2H2v12h4M10 5l3 3-3 3M13 8H6" />
              </svg>
              <span>Log Out</span>
            </button>
          </div>
        </aside>

        {/* Backdrop for mobile */}
        {mobileSidebarOpen && (
          <div
            className="fixed inset-0 z-20 bg-black/40 lg:hidden"
            onClick={() => setMobileSidebarOpen(false)}
          />
        )}

        {/* Main Content Pane */}
        <main className="flex-1 min-w-0 p-5 sm:p-8 lg:p-10 max-w-6xl mx-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
