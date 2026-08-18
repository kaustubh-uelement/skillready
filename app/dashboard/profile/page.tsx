/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session } = useSession();

  const currentUser = {
    name: session?.user?.name || "John Doe",
    email: session?.user?.email || "john.doe@skillready.ai",
    initials: (session?.user as any)?.initials || "JD",
    role: (session?.user as any)?.role || "L1 Learner — Quantum + PQC",
    org: (session?.user as any)?.org || "Apex Technologies Pvt Ltd",
    cohort: (session?.user as any)?.cohort || "Cohort Alpha — Batch 2026",
    memberSince: (session?.user as any)?.memberSince || "Mar 2026",
    credentialId: (session?.user as any)?.credentialId || "SKILL-IISA-26-0847",
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      <div className="pb-6 border-b border-[#E8E4F0]">
        <h1 className="text-[28px] sm:text-[34px] font-normal text-black font-display tracking-tight leading-none">
          My <em className="italic font-bold text-[#713FFF]">Profile</em>
        </h1>
        <div className="font-mono text-[11px] text-[#7A7A88] uppercase tracking-widest mt-2">
          Learner Verification & Placement Cohort Details
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* ── Profile Left Card ─────────────────────────────────────── */}
        <div className="lg:col-span-4 bg-white rounded-[12px] border border-[#E8E4F0] p-6 text-center shadow-xs">
          <div className="w-20 h-20 rounded-full border border-black flex items-center justify-center font-display text-2xl font-bold mx-auto mb-4">
            {currentUser.initials}
          </div>
          <h2 className="text-[22px] font-bold text-black font-display leading-tight">
            {currentUser.name}
          </h2>
          <div className="font-mono text-[11px] text-[#7A7A88] mt-1">
            {currentUser.email}
          </div>
          <div className="mt-4">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-3 py-1 border border-black rounded-[4px]">
              {currentUser.role}
            </span>
          </div>
        </div>

        {/* ── Account Details ───────────────────────────────────────── */}
        <div className="lg:col-span-8 bg-white rounded-[12px] border border-[#E8E4F0] shadow-xs overflow-hidden">
          <div className="px-6 py-4 border-b border-[#E8E4F0] bg-[#FBF9FF]">
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#7A7A88]">
              Account Details
            </span>
          </div>

          <div className="divide-y divide-[#E8E4F0] text-[13px]">
            <div className="p-4 sm:grid sm:grid-cols-3 gap-4">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#7A7A88] self-center">
                Full Name
              </span>
              <span className="sm:col-span-2 text-black font-medium">{currentUser.name}</span>
            </div>

            <div className="p-4 sm:grid sm:grid-cols-3 gap-4">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#7A7A88] self-center">
                Email
              </span>
              <span className="sm:col-span-2 font-mono text-black">{currentUser.email}</span>
            </div>

            <div className="p-4 sm:grid sm:grid-cols-3 gap-4">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#7A7A88] self-center">
                Organization
              </span>
              <span className="sm:col-span-2 text-black font-medium">{currentUser.org}</span>
            </div>

            <div className="p-4 sm:grid sm:grid-cols-3 gap-4">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#7A7A88] self-center">
                Cohort
              </span>
              <span className="sm:col-span-2 text-black font-medium">{currentUser.cohort}</span>
            </div>

            <div className="p-4 sm:grid sm:grid-cols-3 gap-4">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#7A7A88] self-center">
                Member Since
              </span>
              <span className="sm:col-span-2 text-black font-medium">{currentUser.memberSince}</span>
            </div>

            <div className="p-4 sm:grid sm:grid-cols-3 gap-4">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#7A7A88] self-center">
                Enrolled Tracks
              </span>
              <span className="sm:col-span-2 text-black font-medium">
                Track 01 (L1) · Track 04 (L1 ✓) · Track 05 (L1)
              </span>
            </div>

            <div className="p-4 sm:grid sm:grid-cols-3 gap-4">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#7A7A88] self-center">
                Credential IDs
              </span>
              <span className="sm:col-span-2 font-mono text-black font-bold">
                {currentUser.credentialId}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
