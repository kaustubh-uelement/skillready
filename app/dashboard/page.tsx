/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import {
  TRACKS,
  INITIAL_USER_COURSES,
  SESSIONS_DATA,
  TrackData,
} from "@/data/dashboardData";

function TrackIcon({ type }: { type: TrackData["icon"] }) {
  switch (type) {
    case "quantum":
      return (
        <svg className="w-5 h-5 text-[#713FFF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <ellipse cx="12" cy="12" rx="9" ry="4" />
          <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      );
    case "ai":
      return (
        <svg className="w-5 h-5 text-[#713FFF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="4" y="14" width="3" height="7" rx="1" />
          <rect x="9" y="10" width="3" height="11" rx="1" />
          <rect x="14" y="6" width="3" height="15" rx="1" />
        </svg>
      );
    case "robot":
      return (
        <svg className="w-5 h-5 text-[#713FFF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="7" y="14" width="10" height="7" rx="1" />
          <rect x="6" y="11" width="12" height="3" rx="1" />
          <circle cx="12" cy="8" r="3" />
        </svg>
      );
    case "security":
      return (
        <svg className="w-5 h-5 text-[#713FFF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="5" y="10" width="14" height="11" rx="2" />
          <path d="M8 10V7a4 4 0 018 0v3" />
        </svg>
      );
    case "pqc":
      return (
        <svg className="w-5 h-5 text-[#713FFF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="4" y="4" width="6" height="6" rx="1" />
          <rect x="14" y="4" width="6" height="6" rx="1" />
          <rect x="4" y="14" width="6" height="6" rx="1" />
          <rect x="14" y="14" width="6" height="6" rx="1" />
        </svg>
      );
    case "fde":
      return (
        <svg className="w-5 h-5 text-[#713FFF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="18" cy="18" r="3" />
        </svg>
      );
    default:
      return (
        <svg className="w-5 h-5 text-[#713FFF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}

export default function DashboardOverviewPage() {
  const { data: session } = useSession();

  const currentUser = {
    name: session?.user?.name || "John Doe",
    cohort: (session?.user as any)?.cohort || "Cohort Alpha — Batch 2026",
  };

  const userCourses = INITIAL_USER_COURSES;
  const activeCourses = userCourses.filter((c) => c.status === "active");
  const completedCourses = userCourses.filter((c) => c.status === "complete");
  const totalModulesCompleted = userCourses.reduce(
    (acc, c) => acc + c.modules.filter((m) => m.done).length,
    0
  );
  const nextSession = SESSIONS_DATA[0];

  // Zoom Modal
  const [zoomModalOpen, setZoomModalOpen] = useState(false);
  const [selectedSessionIdx, setSelectedSessionIdx] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);
  const [checklistState, setChecklistState] = useState<Record<number, boolean>>({});

  const openZoomForSession = (idx: number) => {
    setSelectedSessionIdx(idx);
    setCopiedLink(false);
    setChecklistState({});
    setZoomModalOpen(true);
  };

  const activeSession = SESSIONS_DATA[selectedSessionIdx] || SESSIONS_DATA[0];

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* ── Top Bar Header (matching screenshot) ──────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E8E4F0]">
        <div>
          <h1 className="text-[28px] sm:text-[34px] font-normal text-black font-display tracking-tight leading-none">
            Good morning, <em className="italic font-bold text-[#713FFF]">{currentUser.name.split(" ")[0]}.</em>
          </h1>
          <div className="font-mono text-[11px] text-[#7A7A88] uppercase tracking-widest mt-2">
            THU · 24 JUL 2026 · {currentUser.cohort.toUpperCase()}
          </div>
        </div>

        <button
          type="button"
          onClick={() => openZoomForSession(0)}
          className="inline-flex items-center justify-center gap-2 bg-[#713FFF] hover:bg-[#602ee6] text-white font-mono text-[11px] uppercase tracking-wider px-5 py-3 rounded-[8px] transition-all duration-150 active:scale-98 shadow-xs cursor-pointer"
        >
          <span>↗ Join Today&apos;s Session</span>
        </button>
      </div>

      {/* ── Stat Cards (4 columns matching screenshot) ───────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-[12px] border border-[#E8E4F0] shadow-xs">
          <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#7A7A88] mb-2">
            Active Tracks
          </div>
          <div className="text-[34px] font-bold text-black leading-none font-display">
            {activeCourses.length}
          </div>
          <div className="font-mono text-[11px] text-[#7A7A88] mt-2">
            of {TRACKS.length} available
          </div>
        </div>

        <div className="bg-white p-5 rounded-[12px] border border-[#E8E4F0] shadow-xs">
          <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#7A7A88] mb-2">
            Modules Done
          </div>
          <div className="text-[34px] font-bold text-black leading-none font-display">
            {totalModulesCompleted}
          </div>
          <div className="font-mono text-[11px] text-[#7A7A88] mt-2">
            across all tracks
          </div>
        </div>

        <div className="bg-white p-5 rounded-[12px] border border-[#E8E4F0] shadow-xs">
          <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#7A7A88] mb-2">
            Certs Earned
          </div>
          <div className="text-[34px] font-bold text-black leading-none font-display">
            {completedCourses.length}
          </div>
          <div className="font-mono text-[11px] text-[#7A7A88] mt-2">
            IISA · Jun 2026
          </div>
        </div>

        <div className="bg-white p-5 rounded-[12px] border border-[#E8E4F0] shadow-xs">
          <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#7A7A88] mb-2">
            Next Session
          </div>
          <div className="text-[22px] font-bold text-black leading-none font-display">
            {nextSession.day} {nextSession.mon}
          </div>
          <div className="font-mono text-[11px] text-[#7A7A88] mt-2 truncate">
            {nextSession.time} · {nextSession.engineer}
          </div>
        </div>
      </div>

      {/* ── Continue Learning Panel (matching screenshot) ─────────── */}
      <div className="bg-white rounded-[12px] border border-[#E8E4F0] shadow-xs overflow-hidden">
        <div className="px-6 py-4 border-b border-[#E8E4F0] flex items-center justify-between">
          <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#7A7A88]">
            Continue Learning
          </span>
          <Link
            href="/dashboard/courses"
            className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#713FFF] hover:underline"
          >
            All Courses →
          </Link>
        </div>

        <div className="divide-y divide-[#E8E4F0]">
          {userCourses.map((uc) => {
            const track = TRACKS.find((t) => t.id === uc.trackId);
            if (!track) return null;

            const isLocked = uc.status === "locked";

            return (
              <Link
                key={uc.trackId}
                href={`/dashboard/courses?track=${uc.trackId}`}
                className={`p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors hover:bg-[#FBF9FF] ${
                  isLocked ? "opacity-45" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-[8px] border border-[#E8E4F0] bg-[#FBF9FF] flex items-center justify-center flex-none">
                    <TrackIcon type={track.icon} />
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-black">
                      Track 0{track.id} — {track.title}
                    </div>
                    <div className="font-mono text-[11px] text-[#7A7A88] mt-0.5">
                      {uc.level} · {uc.level === "L1" ? track.l1.code : track.l0.code}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6 sm:w-60 justify-between sm:justify-end">
                  {!isLocked ? (
                    <div className="flex-1 max-w-[130px]">
                      <div className="font-mono text-[10px] text-[#7A7A88] text-right mb-1">
                        {uc.progress}% complete
                      </div>
                      <div className="w-full bg-[#F4F2FA] h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-[#713FFF] h-full rounded-full transition-all duration-300"
                          style={{ width: `${uc.progress}%` }}
                        />
                      </div>
                    </div>
                  ) : (
                    <span className="font-mono text-[11px] text-[#7A7A88]">Locked</span>
                  )}

                  <span
                    className={`font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 border rounded-[4px] ${
                      uc.status === "complete"
                        ? "border-[#713FFF] bg-[#713FFF] text-white"
                        : uc.status === "active"
                        ? "border-[#713FFF]/40 bg-[#F2EEFD] text-[#713FFF]"
                        : "border-[#D9D9D9] text-[#A8A8A8]"
                    }`}
                  >
                    {uc.status === "complete" ? "Certified" : uc.status === "active" ? "Active" : "Locked"}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* ── Upcoming Live Sessions Panel (matching screenshot) ─────── */}
      <div className="bg-white rounded-[12px] border border-[#E8E4F0] shadow-xs overflow-hidden">
        <div className="px-6 py-4 border-b border-[#E8E4F0] flex items-center justify-between">
          <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#7A7A88]">
            Upcoming Live Sessions
          </span>
          <Link
            href="/dashboard/live"
            className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#713FFF] hover:underline"
          >
            Full Schedule →
          </Link>
        </div>

        <div className="divide-y divide-[#E8E4F0]">
          {SESSIONS_DATA.slice(0, 3).map((sess, idx) => (
            <div
              key={sess.id}
              onClick={() => openZoomForSession(idx)}
              className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#FBF9FF] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-[8px] border border-[#E8E4F0] bg-[#FBF9FF] flex flex-col items-center justify-center text-center flex-none font-mono">
                  <span className="text-[16px] font-bold text-black leading-none">{sess.day}</span>
                  <span className="text-[9px] text-[#713FFF] font-bold">{sess.mon}</span>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[14px] font-bold text-black">{sess.title}</span>
                    {sess.live && (
                      <span className="font-mono text-[9px] font-bold bg-red-100 text-red-700 px-2 py-0.5 rounded-full animate-pulse">
                        ● LIVE
                      </span>
                    )}
                  </div>
                  <div className="font-mono text-[11px] text-[#7A7A88] mt-0.5">
                    {sess.track} · {sess.engineer} · {sess.time}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  openZoomForSession(idx);
                }}
                className={`font-mono text-[10px] font-semibold uppercase tracking-wider px-3.5 py-1.5 border rounded-[4px] transition-all cursor-pointer ${
                  sess.live
                    ? "border-[#713FFF] bg-[#713FFF] text-white hover:bg-[#602ee6]"
                    : "border-[#E2DEEA] text-[#4C4C58] hover:border-[#713FFF] hover:text-[#713FFF]"
                }`}
              >
                {sess.live ? "Join Live" : "Join"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ── Zoom Join Modal ────────────────────────────────────────── */}
      {zoomModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-[14px] border border-[#E8E4F0] max-w-lg w-full p-6 sm:p-7 shadow-2xl animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-4 border-b border-[#E8E4F0]">
              <div className="font-mono text-[12px] font-bold uppercase tracking-widest text-black">
                Join Live Session
              </div>
              <button
                type="button"
                onClick={() => setZoomModalOpen(false)}
                className="text-[#7A7A88] hover:text-black p-1 text-lg font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="py-5 space-y-4">
              <div className="bg-[#FBF9FF] border border-[#E8E4F0] p-5 text-center rounded-[10px]">
                <div className="w-12 h-12 bg-[#713FFF] text-white font-mono font-bold text-xs flex items-center justify-center mx-auto mb-3 rounded-[6px]">
                  ZOOM
                </div>
                <h3 className="text-[16px] font-bold text-black font-display">
                  {activeSession.title}
                </h3>
                <div className="font-mono text-[11px] text-[#7A7A88] mt-1">
                  Lead: {activeSession.engineer} · {activeSession.day} {activeSession.mon} · {activeSession.time}
                </div>

                <div className="mt-4 space-y-2">
                  <a
                    href={`https://zoom.us/j/${activeSession.id.replace(/\s/g, "")}?pwd=${activeSession.pass}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#713FFF] hover:bg-[#602ee6] text-white font-mono text-[11px] uppercase tracking-wider py-3 rounded-[6px] transition-all"
                  >
                    Open in Zoom
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      const link = `https://zoom.us/j/${activeSession.id.replace(/\s/g, "")}?pwd=${activeSession.pass}`;
                      navigator.clipboard.writeText(link);
                      setCopiedLink(true);
                      setTimeout(() => setCopiedLink(false), 2000);
                    }}
                    className="w-full py-2 font-mono text-[10px] uppercase tracking-wider border border-[#E8E4F0] hover:border-[#713FFF] text-[#4C4C58] hover:text-[#713FFF] rounded-[6px] transition-colors cursor-pointer"
                  >
                    {copiedLink ? "✓ Link Copied!" : "Copy Meeting Link"}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-[#FBF9FF] border border-[#E8E4F0] rounded-[8px]">
                  <div className="font-mono text-[10px] uppercase text-[#7A7A88]">Meeting ID</div>
                  <div className="font-mono font-bold text-[13px] text-black mt-0.5">{activeSession.id}</div>
                </div>
                <div className="p-3 bg-[#FBF9FF] border border-[#E8E4F0] rounded-[8px]">
                  <div className="font-mono text-[10px] uppercase text-[#7A7A88]">Passcode</div>
                  <div className="font-mono font-bold text-[13px] text-black mt-0.5">{activeSession.pass}</div>
                </div>
              </div>

              <div>
                <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#7A7A88] mb-2">
                  Pre-Session Checklist
                </div>
                <div className="space-y-1">
                  {activeSession.checklist.map((c, i) => (
                    <div
                      key={i}
                      onClick={() => setChecklistState((prev) => ({ ...prev, [i]: !prev[i] }))}
                      className="flex items-center gap-2 font-mono text-[12px] text-[#4C4C58] p-1.5 hover:bg-[#FBF9FF] rounded cursor-pointer select-none"
                    >
                      <span>{checklistState[i] ? "☑" : "☐"}</span>
                      <span className={checklistState[i] ? "line-through opacity-70" : ""}>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#E8E4F0] flex justify-end">
              <button
                type="button"
                onClick={() => setZoomModalOpen(false)}
                className="font-mono text-[11px] uppercase tracking-wider px-4 py-2 bg-[#713FFF] hover:bg-[#602ee6] text-white rounded-[6px] transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
