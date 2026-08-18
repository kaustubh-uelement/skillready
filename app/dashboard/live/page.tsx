"use client";

import React, { useState } from "react";
import { SESSIONS_DATA, RECORDED_SESSIONS } from "@/data/dashboardData";

export default function LiveSessionsPage() {
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
      <div className="pb-6 border-b border-[#E8E4F0]">
        <h1 className="text-[28px] sm:text-[34px] font-normal text-black font-display tracking-tight leading-none">
          Live <em className="italic font-bold text-[#713FFF]">Sessions</em>
        </h1>
        <div className="font-mono text-[11px] text-[#7A7A88] uppercase tracking-widest mt-2">
          Zoom Masterclasses & Hands-On Engineering Cohorts
        </div>
      </div>

      {/* ── Upcoming Sessions Panel ────────────────────────────────── */}
      <div className="bg-white rounded-[12px] border border-[#E8E4F0] shadow-xs overflow-hidden">
        <div className="px-6 py-4 border-b border-[#E8E4F0] flex items-center justify-between">
          <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#7A7A88]">
            Upcoming — Click to Join via Zoom
          </span>
        </div>

        <div className="divide-y divide-[#E8E4F0]">
          {SESSIONS_DATA.map((sess, idx) => (
            <div
              key={sess.id}
              onClick={() => openZoomForSession(idx)}
              className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#FBF9FF] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-[8px] border border-[#E8E4F0] bg-[#FBF9FF] flex flex-col items-center justify-center text-center flex-none font-mono">
                  <span className="text-[16px] font-bold text-black leading-none">{sess.day}</span>
                  <span className="text-[9px] text-[#7A7A88]">{sess.mon}</span>
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
                className={`font-mono text-[10px] font-semibold uppercase tracking-wider px-3.5 py-1.5 border rounded-[4px] transition-all ${
                  sess.live
                    ? "border-black bg-black text-white hover:bg-[#222]"
                    : "border-black text-black hover:bg-black hover:text-white"
                }`}
              >
                {sess.live ? "Join Live" : "Join"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ── Recorded Sessions Panel ────────────────────────────────── */}
      <div className="bg-white rounded-[12px] border border-[#E8E4F0] shadow-xs overflow-hidden">
        <div className="px-6 py-4 border-b border-[#E8E4F0]">
          <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#7A7A88]">
            Recorded Sessions
          </span>
        </div>

        <div className="divide-y divide-[#E8E4F0]">
          {RECORDED_SESSIONS.map((rec, idx) => (
            <div
              key={idx}
              className="p-5 flex items-center justify-between gap-4 hover:bg-[#FBF9FF] transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-[8px] border border-black bg-black text-white flex items-center justify-center flex-none">
                  <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <div>
                  <div className="text-[14px] font-bold text-black">{rec.title}</div>
                  <div className="font-mono text-[11px] text-[#7A7A88] mt-0.5">
                    {rec.track} · {rec.date} · {rec.duration} · {rec.engineer}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => alert(`Playing recording: ${rec.title}`)}
                className="font-mono text-[10px] font-semibold uppercase tracking-wider px-3 py-1.5 border border-[#E8E4F0] hover:border-black text-black rounded-[4px] transition-colors cursor-pointer"
              >
                Watch
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
                <div className="w-12 h-12 bg-black text-white font-mono font-bold text-xs flex items-center justify-center mx-auto mb-3 rounded-[6px]">
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
                    className="w-full inline-flex items-center justify-center gap-2 bg-black hover:bg-[#222] text-white font-mono text-[11px] uppercase tracking-wider py-3 rounded-[6px] transition-all"
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
                    className="w-full py-2 font-mono text-[10px] uppercase tracking-wider border border-[#E8E4F0] hover:border-black text-black rounded-[6px] transition-colors cursor-pointer"
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
                className="font-mono text-[11px] uppercase tracking-wider px-4 py-2 bg-black text-white rounded-[6px]"
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
