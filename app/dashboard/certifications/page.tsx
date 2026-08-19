/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";

export default function CertificationsPage() {
  const { data: session } = useSession();
  const [downloading, setDownloading] = useState(false);

  const currentUser = {
    credentialId: (session?.user as any)?.credentialId || "SKILL-SDSE-26-0847",
  };

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      alert(`Certificate PDF downloaded: ${currentUser.credentialId}.pdf`);
    }, 1200);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      <div className="pb-6 border-b border-[#E8E4F0]">
        <h1 className="text-[28px] sm:text-[34px] font-normal text-black font-display tracking-tight leading-none">
          My <em className="italic font-bold text-[#713FFF]">Certifications</em>
        </h1>
        <div className="font-mono text-[11px] text-[#7A7A88] uppercase tracking-widest mt-2">
          Verified Employability Scorecards & Digital Credentials
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* ── Earned Certificate ──────────────────────────────────── */}
        <div className="bg-white rounded-[12px] border border-[#713FFF]/40 p-6 shadow-xs relative flex flex-col justify-between">
          <button
            type="button"
            onClick={handleDownload}
            disabled={downloading}
            className="absolute top-5 right-5 font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 border border-[#713FFF] bg-[#713FFF] text-white hover:bg-[#602ee6] transition-all rounded-[4px] cursor-pointer"
          >
            {downloading ? "Downloading…" : "↓ PDF"}
          </button>

          <div>
            <div className="w-12 h-12 rounded-full border border-[#713FFF]/30 bg-[#F2EEFD] text-[#713FFF] flex items-center justify-center font-display font-bold text-sm mb-4">
              SR
            </div>
            <h3 className="text-[20px] font-bold text-black font-display">
              DSA & Problem Solving Engineer
            </h3>
            <div className="font-mono text-[11px] text-[#7A7A88] uppercase tracking-wider mt-1">
              SDSE · LEVEL 1 · TRACK 03
            </div>
            <div className="font-mono text-[10px] text-[#7A7A88] mt-3">
              Earned 12 Jun 2026 · Credential ID {currentUser.credentialId}
            </div>
          </div>
        </div>

        {/* ── In Progress 1 ───────────────────────────────────────── */}
        <div className="bg-white rounded-[12px] border border-[#E8E4F0] p-6 shadow-xs relative flex flex-col justify-between opacity-70">
          <div>
            <div className="w-12 h-12 rounded-full border border-[#D9D9D9] text-[#7A7A88] flex items-center justify-center font-display font-bold text-sm mb-4">
              —
            </div>
            <h3 className="text-[20px] font-bold text-black font-display">
              Full Stack Python Developer
            </h3>
            <div className="font-mono text-[11px] text-[#7A7A88] uppercase tracking-wider mt-1">
              SFPD · LEVEL 1 · TRACK 01
            </div>
            <div className="font-mono text-[10px] text-[#7A7A88] mt-3">
              In progress — 64% · Capstone pending
            </div>
          </div>
        </div>

        {/* ── In Progress 2 ───────────────────────────────────────── */}
        <div className="bg-white rounded-[12px] border border-[#E8E4F0] p-6 shadow-xs relative flex flex-col justify-between opacity-70">
          <div>
            <div className="w-12 h-12 rounded-full border border-[#D9D9D9] text-[#7A7A88] flex items-center justify-center font-display font-bold text-sm mb-4">
              —
            </div>
            <h3 className="text-[20px] font-bold text-black font-display">
              Next.js & Frontend Architect
            </h3>
            <div className="font-mono text-[11px] text-[#7A7A88] uppercase tracking-wider mt-1">
              SNXA · LEVEL 1 · TRACK 02
            </div>
            <div className="font-mono text-[10px] text-[#7A7A88] mt-3">
              In progress — 31% · 3 modules remaining
            </div>
          </div>
        </div>

        {/* ── Locked Track ────────────────────────────────────────── */}
        <div className="bg-white rounded-[12px] border border-[#E8E4F0] p-6 shadow-xs relative flex flex-col justify-between opacity-40">
          <div>
            <div className="w-12 h-12 rounded-full border border-[#D9D9D9] text-[#7A7A88] flex items-center justify-center font-display font-bold text-sm mb-4">
              —
            </div>
            <h3 className="text-[20px] font-bold text-black font-display">
              Cloud DevOps Engineer
            </h3>
            <div className="font-mono text-[11px] text-[#7A7A88] uppercase tracking-wider mt-1">
              SCDE · LEVEL 1 · TRACK 05
            </div>
            <div className="font-mono text-[10px] text-[#7A7A88] mt-3">
              Locked — activate Track 05 to begin
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
