"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getAllTests } from "@/lib/examStorage";
import { TestMeta } from "@/types/exam";

export default function TestSeriesDashboardPage() {
  const router = useRouter();
  const [tests] = useState<TestMeta[]>(() => getAllTests());
  const [selectedTestForInstructions, setSelectedTestForInstructions] = useState<TestMeta | null>(null);
  const [instructionsAccepted, setInstructionsAccepted] = useState(false);

  const totalTests = tests.length;
  const completedTests = tests.filter((t) => t.status === "attempted").length;
  const bestScore = tests.reduce(
    (max, t) => (t.lastAttemptScore ? Math.max(max, t.lastAttemptScore) : max),
    0
  );

  const handleLaunchTest = (test: TestMeta) => {
    setSelectedTestForInstructions(test);
    setInstructionsAccepted(false);
  };

  const handleProceedToExam = () => {
    if (!selectedTestForInstructions) return;
    router.push(`/exam/${selectedTestForInstructions.id}`);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* ── Header ─────────────────────────────────────────────────── */}
      <div className="pb-6 border-b border-[#E8E4F0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[28px] sm:text-[34px] font-normal text-black font-display tracking-tight leading-none">
            SWE <em className="italic font-bold text-[#713FFF]">Mock Test Series</em>
          </h1>
          <div className="font-mono text-[11px] text-[#7A7A88] uppercase tracking-widest mt-2">
            National SDE Rank Benchmarking & Proctored SWE Technical Assessments
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#F2EEFD] text-[#713FFF] border border-[#713FFF]/20">
            <span className="w-2 h-2 rounded-full bg-[#713FFF] animate-pulse" />
            SkillReady SDE Pattern
          </span>
        </div>
      </div>

      {/* ── Stat Overview Cards ───────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-[12px] border border-[#E8E4F0] shadow-xs">
          <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#7A7A88] mb-2">
            Total Mocks
          </div>
          <div className="text-[34px] font-bold text-black leading-none font-display">
            {totalTests}
          </div>
          <div className="font-mono text-[11px] text-[#7A7A88] mt-2">
            Full Stack, Systems & Cloud
          </div>
        </div>

        <div className="bg-white p-5 rounded-[12px] border border-[#E8E4F0] shadow-xs">
          <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#7A7A88] mb-2">
            Completed
          </div>
          <div className="text-[34px] font-bold text-black leading-none font-display">
            {completedTests}
          </div>
          <div className="font-mono text-[11px] text-[#7A7A88] mt-2">
            Evaluated attempts
          </div>
        </div>

        <div className="bg-white p-5 rounded-[12px] border border-[#E8E4F0] shadow-xs">
          <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#7A7A88] mb-2">
            Best Score
          </div>
          <div className="text-[34px] font-bold text-[#713FFF] leading-none font-display">
            {bestScore > 0 ? `${bestScore}` : "—"}
          </div>
          <div className="font-mono text-[11px] text-[#7A7A88] mt-2">
            out of 100 marks
          </div>
        </div>

        <div className="bg-white p-5 rounded-[12px] border border-[#E8E4F0] shadow-xs">
          <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#7A7A88] mb-2">
            Est. Percentile
          </div>
          <div className="text-[34px] font-bold text-black leading-none font-display">
            {bestScore > 0 ? "99.4%" : "—"}
          </div>
          <div className="font-mono text-[11px] text-[#7A7A88] mt-2 truncate">
            Top 1% SWE Nationwide
          </div>
        </div>
      </div>

      {/* ── Test Series Grid ───────────────────────────────────────── */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-[18px] font-bold text-black font-display">
            Available SDE Technical Assessments
          </h2>
          <span className="font-mono text-[11px] text-[#7A7A88]">
            3-Hour Timed Proctored Sessions
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tests.map((test) => {
            const isCompleted = test.status === "attempted";

            return (
              <div
                key={test.id}
                className={`bg-white rounded-[14px] border p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-md ${
                  isCompleted ? "border-[#713FFF]/40 shadow-xs" : "border-[#E8E4F0]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-[10px] font-bold tracking-wider px-2.5 py-1 rounded bg-[#F4F2FA] text-[#713FFF] border border-[#713FFF]/20 uppercase">
                      {test.code}
                    </span>

                    <span
                      className={`font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 border rounded-[4px] ${
                        isCompleted
                          ? "border-[#713FFF] bg-[#713FFF] text-white"
                          : "border-[#E2DEEA] bg-[#FBF9FF] text-[#7A7A88]"
                      }`}
                    >
                      {isCompleted ? "Completed" : "Not Attempted"}
                    </span>
                  </div>

                  <h3 className="text-[18px] font-bold text-black font-display leading-snug mb-2">
                    {test.title}
                  </h3>

                  <div className="font-mono text-[11px] text-[#7A7A88] mb-4">
                    Track: <span className="text-black font-medium">{test.branch}</span>
                  </div>

                  {/* Metadata Specs */}
                  <div className="grid grid-cols-3 gap-2 p-3 bg-[#FBF9FF] border border-[#E8E4F0] rounded-[8px] text-center font-mono text-[11px] mb-4">
                    <div>
                      <div className="text-[#7A7A88] text-[9px] uppercase">Duration</div>
                      <div className="font-bold text-black mt-0.5">{test.durationMinutes}m</div>
                    </div>
                    <div>
                      <div className="text-[#7A7A88] text-[9px] uppercase">Marks</div>
                      <div className="font-bold text-black mt-0.5">{test.totalMarks}</div>
                    </div>
                    <div>
                      <div className="text-[#7A7A88] text-[9px] uppercase">Questions</div>
                      <div className="font-bold text-black mt-0.5">{test.numQuestions}</div>
                    </div>
                  </div>

                  {/* Syllabus tags */}
                  <div className="space-y-1.5 mb-5">
                    <div className="font-mono text-[10px] uppercase font-bold text-[#7A7A88]">
                      Assessment Modules
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {test.sections.map((sec) => (
                        <span
                          key={sec.id}
                          className="text-[11px] px-2 py-0.5 rounded bg-white border border-[#E2DEEA] text-[#4C4C58]"
                        >
                          {sec.name} ({sec.totalMarks}M)
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-[#E8E4F0] flex items-center justify-between gap-3">
                  {isCompleted ? (
                    <>
                      <div>
                        <div className="font-mono text-[9px] uppercase text-[#7A7A88]">
                          Score: <span className="text-[#713FFF] font-bold">{test.lastAttemptScore} / {test.totalMarks}</span>
                        </div>
                        <div className="font-mono text-[9px] text-[#A8A8A8]">{test.lastAttemptDate}</div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Link
                          href={`/dashboard/tests/${test.id}/results`}
                          className="font-mono text-[11px] font-semibold uppercase tracking-wider px-3.5 py-2 border border-[#713FFF] bg-[#713FFF] text-white hover:bg-[#602ee6] rounded-[6px] transition-colors"
                        >
                          View Result →
                        </Link>
                        <button
                          type="button"
                          onClick={() => handleLaunchTest(test)}
                          className="font-mono text-[11px] font-semibold uppercase tracking-wider px-3 py-2 border border-[#E2DEEA] text-[#4C4C58] hover:border-[#713FFF] hover:text-[#713FFF] rounded-[6px] transition-colors cursor-pointer"
                        >
                          Retake
                        </button>
                      </div>
                    </>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleLaunchTest(test)}
                      className="w-full font-mono text-[11px] font-bold uppercase tracking-wider py-2.5 border border-[#713FFF] bg-[#713FFF] text-white hover:bg-[#602ee6] rounded-[6px] transition-all shadow-xs cursor-pointer text-center"
                    >
                      ▶ Start Proctored Assessment
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Pre-Exam Instructions Modal ────────────────────────────── */}
      {selectedTestForInstructions && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-[14px] border border-[#E8E4F0] max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl animate-in zoom-in-95 duration-150">
            {/* Header */}
            <div className="px-6 py-4 border-b border-[#E8E4F0] flex items-center justify-between bg-[#FBF9FF]">
              <div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#713FFF]">
                  Official SWE Assessment Guidelines
                </span>
                <h3 className="text-[18px] font-bold text-black font-display">
                  {selectedTestForInstructions.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedTestForInstructions(null)}
                className="text-[#7A7A88] hover:text-black p-1 text-lg font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto space-y-4 text-[13px] text-[#4C4C58] leading-relaxed">
              <div className="p-3 bg-[#F2EEFD] border border-[#713FFF]/20 rounded-[8px] text-[#713FFF] font-medium">
                ⚡ <strong>Important:</strong> This assessment opens in full-screen proctored environment. Anti-cheat telemetry (tab switches, fullscreen exits, window focus) is strictly monitored.
              </div>

              <div>
                <h4 className="font-bold text-black font-display text-[15px] mb-1">
                  1. Assessment Structure & Timing
                </h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Total duration is <strong>{selectedTestForInstructions.durationMinutes} minutes</strong>.</li>
                  <li>The countdown timer at the top right indicates remaining time.</li>
                  <li>When the countdown timer reaches zero, your answers will be automatically submitted for final scoring.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-black font-display text-[15px] mb-1">
                  2. Question Status Colors
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[12px] font-mono">
                  <div className="flex items-center gap-2 p-1.5 rounded bg-[#FBF9FF] border border-[#E8E4F0]">
                    <span className="w-4 h-4 rounded bg-[#5bb75b] text-white flex items-center justify-center font-bold text-[9px]">✓</span>
                    <span>Answered</span>
                  </div>
                  <div className="flex items-center gap-2 p-1.5 rounded bg-[#FBF9FF] border border-[#E8E4F0]">
                    <span className="w-4 h-4 rounded bg-[#da4f49] text-white flex items-center justify-center font-bold text-[9px]">✕</span>
                    <span>Not Answered</span>
                  </div>
                  <div className="flex items-center gap-2 p-1.5 rounded bg-[#FBF9FF] border border-[#E8E4F0]">
                    <span className="w-4 h-4 rounded bg-[#e6e6e6] text-black flex items-center justify-center font-bold text-[9px]">―</span>
                    <span>Not Visited</span>
                  </div>
                  <div className="flex items-center gap-2 p-1.5 rounded bg-[#FBF9FF] border border-[#E8E4F0]">
                    <span className="w-4 h-4 rounded-full bg-[#713FFF] text-white flex items-center justify-center font-bold text-[9px]">●</span>
                    <span>Marked for Review</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-black font-display text-[15px] mb-1">
                  3. Question Formats & Scoring
                </h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Multiple Choice (MCQ):</strong> 1 or 2 marks with standard negative marking (-0.33 / -0.66).</li>
                  <li><strong>Multiple Select (MSQ):</strong> Multi-correct choices without negative marks.</li>
                  <li><strong>Numerical Answer (NAT):</strong> Enter precise integer/decimal values without negative marks.</li>
                </ul>
              </div>

              <div className="pt-3 border-t border-[#E8E4F0]">
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={instructionsAccepted}
                    onChange={(e) => setInstructionsAccepted(e.target.checked)}
                    className="mt-1 w-4 h-4 accent-[#713FFF] cursor-pointer"
                  />
                  <span className="text-[12px] text-black font-medium">
                    I have read and agree to all assessment guidelines. I confirm that I will take this technical evaluation independently in full-screen proctored mode.
                  </span>
                </label>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-[#E8E4F0] flex items-center justify-between bg-[#FBF9FF]">
              <button
                type="button"
                onClick={() => setSelectedTestForInstructions(null)}
                className="font-mono text-[11px] uppercase tracking-wider px-4 py-2 border border-[#E8E4F0] hover:border-black text-black rounded-[6px] transition-colors cursor-pointer"
              >
                Cancel
              </button>

              <button
                type="button"
                disabled={!instructionsAccepted}
                onClick={handleProceedToExam}
                className="font-mono text-[11px] font-bold uppercase tracking-wider px-6 py-2.5 bg-[#713FFF] hover:bg-[#602ee6] disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-[6px] transition-all shadow-xs cursor-pointer"
              >
                I am ready to begin →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
