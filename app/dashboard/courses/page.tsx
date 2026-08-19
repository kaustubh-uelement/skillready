"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  TRACKS,
  INITIAL_USER_COURSES,
  UserCourse,
  TrackData,
} from "@/data/dashboardData";

function TrackIcon({ type }: { type: TrackData["icon"] }) {
  switch (type) {
    case "python":
      return (
        <svg className="w-5 h-5 text-[#713FFF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 2C8.5 2 6 3.5 6 5.5V8h6v2H4.5C2.5 10 2 12.5 2 15s1.5 5 4 5h2v-2.5c0-1.5 1-2.5 2.5-2.5h6c1.5 0 2.5-1 2.5-2.5V8c0-3.5-2.5-6-7-6z" />
          <circle cx="8" cy="5" r="1" fill="currentColor" />
          <circle cx="16" cy="19" r="1" fill="currentColor" />
        </svg>
      );
    case "react":
      return (
        <svg className="w-5 h-5 text-[#713FFF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <ellipse cx="12" cy="12" rx="9" ry="4" />
          <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );
    case "dsa":
      return (
        <svg className="w-5 h-5 text-[#713FFF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="4" r="2" />
          <circle cx="6" cy="12" r="2" />
          <circle cx="18" cy="12" r="2" />
          <circle cx="6" cy="20" r="2" />
          <circle cx="18" cy="20" r="2" />
          <path d="M12 6v4m0 0L6 10m6 0l6 0M6 14v4M18 14v4" />
        </svg>
      );
    case "backend":
      return (
        <svg className="w-5 h-5 text-[#713FFF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="2" y="3" width="20" height="6" rx="2" />
          <rect x="2" y="11" width="20" height="6" rx="2" />
          <rect x="2" y="19" width="20" height="6" rx="2" />
          <circle cx="6" cy="6" r="1" fill="currentColor" />
          <circle cx="6" cy="14" r="1" fill="currentColor" />
          <circle cx="6" cy="22" r="1" fill="currentColor" />
        </svg>
      );
    case "devops":
      return (
        <svg className="w-5 h-5 text-[#713FFF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 17l6-6-6-6m8 14h8" />
        </svg>
      );
    case "ai":
      return (
        <svg className="w-5 h-5 text-[#713FFF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 2v4m0 12v4M2 12h4m12 0h4m-3.5-6.5l-2.8 2.8m-7.4 7.4l-2.8 2.8m0-13l2.8 2.8m7.4 7.4l2.8 2.8" />
          <circle cx="12" cy="12" r="3" />
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

function CoursesContent() {
  const searchParams = useSearchParams();
  const trackParam = searchParams.get("track");
  const initialTrackId = trackParam ? parseInt(trackParam, 10) : 1;

  const [selectedTrackId, setSelectedTrackId] = useState<number>(initialTrackId || 1);
  const [courses, setCourses] = useState<UserCourse[]>(INITIAL_USER_COURSES);

  const toggleModule = (trackId: number, idx: number) => {
    setCourses((prev) =>
      prev.map((c) => {
        if (c.trackId !== trackId) return c;
        const updated = [...c.modules];
        updated[idx] = { ...updated[idx], done: !updated[idx].done };
        const doneCount = updated.filter((m) => m.done).length;
        const newProg = Math.round((doneCount / updated.length) * 100);
        return {
          ...c,
          modules: updated,
          progress: newProg,
          status: newProg === 100 ? "complete" : "active",
        };
      })
    );
  };

  const selectedTrack = TRACKS.find((t) => t.id === selectedTrackId) || TRACKS[0];
  const userCourse = courses.find((c) => c.trackId === selectedTrackId);

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      <div className="pb-6 border-b border-[#E8E4F0]">
        <h1 className="text-[28px] sm:text-[34px] font-normal text-black font-display tracking-tight leading-none">
          My <em className="italic font-bold text-[#713FFF]">Courses</em>
        </h1>
        <div className="font-mono text-[11px] text-[#7A7A88] uppercase tracking-widest mt-2">
          Enrolled & Available Deep-Tech Certification Tracks
        </div>
      </div>

      {/* ── Tracks List ───────────────────────────────────────────── */}
      <div className="bg-white rounded-[12px] border border-[#E8E4F0] shadow-xs overflow-hidden">
        <div className="px-6 py-4 border-b border-[#E8E4F0] flex items-center justify-between">
          <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#7A7A88]">
            All Certification Tracks
          </span>
        </div>

        <div className="divide-y divide-[#E8E4F0]">
          {TRACKS.map((t) => {
            const c = courses.find((x) => x.trackId === t.id);
            const isSelected = selectedTrackId === t.id;
            const isLocked = !c || c.status === "locked";
            const progress = c ? c.progress : 0;

            return (
              <div
                key={t.id}
                onClick={() => setSelectedTrackId(t.id)}
                className={`p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-[#F4F2FA]/60 border-l-4 border-l-[#713FFF]"
                    : "hover:bg-[#FBF9FF]"
                } ${isLocked ? "opacity-50" : ""}`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-[8px] border border-[#E8E4F0] bg-white flex items-center justify-center flex-none">
                    <TrackIcon type={t.icon} />
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-black">
                      Track 0{t.id} — {t.title}
                    </div>
                    <div className="font-mono text-[11px] text-[#7A7A88] mt-0.5">
                      L1 · {t.l1.code}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6 sm:w-60 justify-between sm:justify-end">
                  {!isLocked ? (
                    <div className="flex-1 max-w-[130px]">
                      <div className="font-mono text-[10px] text-[#7A7A88] text-right mb-1">
                        {progress}% complete
                      </div>
                      <div className="w-full bg-[#F4F2FA] h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-[#713FFF] h-full rounded-full transition-all duration-300"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  ) : (
                    <span className="font-mono text-[11px] text-[#7A7A88]">Locked</span>
                  )}

                  <span
                    className={`font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 border rounded-[4px] ${
                      c?.status === "complete"
                        ? "border-[#713FFF] bg-[#713FFF] text-white"
                        : c?.status === "active"
                        ? "border-[#713FFF]/40 bg-[#F2EEFD] text-[#713FFF]"
                        : "border-[#D9D9D9] text-[#A8A8A8]"
                    }`}
                  >
                    {c?.status === "complete" ? "Certified" : c?.status === "active" ? "Active" : "Locked"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Selected Track Module Breakdown ───────────────────────── */}
      <div className="bg-white rounded-[12px] border border-[#E8E4F0] shadow-xs overflow-hidden">
        <div className="p-6 border-b border-[#E8E4F0] bg-[#FBF9FF] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#713FFF] mb-1">
              Modules — Track 0{selectedTrack.id} ({selectedTrack.l1.code})
            </div>
            <h2 className="text-[20px] font-bold text-black font-display">
              {selectedTrack.title}
            </h2>
            <p className="text-[13px] text-[#4C4C58] mt-1 max-w-2xl">
              {selectedTrack.short}
            </p>
          </div>

          {userCourse && (
            <div className="text-right flex-none">
              <div className="font-display text-[26px] font-bold text-black leading-none">
                {userCourse.progress}%
              </div>
              <div className="font-mono text-[10px] text-[#7A7A88] uppercase mt-1">
                Completed
              </div>
            </div>
          )}
        </div>

        {userCourse && userCourse.modules.length > 0 ? (
          <div className="divide-y divide-[#E8E4F0]">
            {userCourse.modules.map((mod, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-[#FBF9FF] transition-colors"
              >
                <div className="flex items-center gap-4">
                  {/* Module Checkbox */}
                  <button
                    type="button"
                    onClick={() => toggleModule(selectedTrack.id, idx)}
                    className={`w-6 h-6 rounded-[4px] border font-mono text-xs flex items-center justify-center transition-all cursor-pointer ${
                      mod.done
                        ? "bg-[#713FFF] border-[#713FFF] text-white"
                        : "border-[#D9D9D9] bg-white hover:border-[#713FFF] text-black"
                    }`}
                  >
                    {mod.done ? "✓" : ""}
                  </button>

                  <div>
                    <div className={`text-[13px] font-semibold ${mod.done ? "line-through opacity-70" : "text-black"}`}>
                      {mod.name}
                    </div>
                    <div className="font-mono text-[10px] text-[#7A7A88] mt-0.5">
                      Module {String(idx + 1).padStart(2, "0")} · {mod.dur}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => toggleModule(selectedTrack.id, idx)}
                  className={`font-mono text-[10px] font-semibold uppercase tracking-wider px-3.5 py-1.5 border rounded-[4px] transition-all cursor-pointer ${
                    mod.done
                      ? "border-[#E8E4F0] bg-[#FBF9FF] text-[#7A7A88] hover:border-[#713FFF] hover:text-[#713FFF]"
                      : "border-[#713FFF] bg-[#713FFF] text-white hover:bg-[#602ee6]"
                  }`}
                >
                  {mod.done ? "Review" : "Start"}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center font-mono text-[12px] text-[#7A7A88]">
            {userCourse?.status === "complete"
              ? `Track completed — certification earned ${userCourse.certDate}. Recordings and lab archives remain available.`
              : "Modules unlock when this track is activated."}
          </div>
        )}
      </div>
    </div>
  );
}

export default function CoursesPage() {
  return (
    <Suspense fallback={<div className="font-mono text-xs text-[#7A7A88]">Loading courses...</div>}>
      <CoursesContent />
    </Suspense>
  );
}
