"use client";

import React, { useState } from "react";
import { LABS_DATA } from "@/data/dashboardData";

export default function LabsPage() {
  const [labs, setLabs] = useState(LABS_DATA);
  const [startingLabId, setStartingLabId] = useState<string | null>(null);

  const handleStartLab = (id: string) => {
    setStartingLabId(id);
    setTimeout(() => {
      setLabs((prev) =>
        prev.map((l) =>
          l.id === id ? { ...l, status: "running", sessionTime: "3H 00M REMAINING" } : l
        )
      );
      setStartingLabId(null);
    }, 1500);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      <div className="pb-6 border-b border-[#E8E4F0] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h1 className="text-[28px] sm:text-[34px] font-normal text-black font-display tracking-tight leading-none">
            Lab <em className="italic font-bold text-[#713FFF]">Access</em>
          </h1>
          <div className="font-mono text-[11px] text-[#7A7A88] uppercase tracking-widest mt-2">
            Digital Twin Labs · Region: AP-SOUTH
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {labs.map((lab) => {
          const isRunning = lab.status === "running";
          const isStarting = startingLabId === lab.id;

          return (
            <div
              key={lab.id}
              className={`bg-white rounded-[12px] border p-6 shadow-xs flex flex-col justify-between ${
                isRunning ? "border-black shadow-xs" : "border-[#E8E4F0]"
              } ${lab.status === "locked" ? "opacity-45" : ""}`}
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`inline-block w-2 h-2 rounded-full ${
                      isRunning
                        ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"
                        : lab.status === "stopped"
                        ? "bg-amber-400"
                        : "border border-[#7A7A88]"
                    }`}
                  />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#7A7A88]">
                    {isStarting ? "PROVISIONING…" : lab.status.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-[19px] font-bold text-black font-display mb-1.5">
                  {lab.name}
                </h3>
                <div className="font-mono text-[10px] text-[#7A7A88] leading-relaxed">
                  {lab.spec}
                  {lab.sessionTime && <div className="mt-0.5 text-black font-semibold">SESSION: {lab.sessionTime}</div>}
                  {lab.lastUsed && <div className="mt-0.5">LAST USED: {lab.lastUsed}</div>}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8E4F0]">
                {isRunning ? (
                  <button
                    type="button"
                    onClick={() => alert(`Opening web terminal console for: ${lab.name}`)}
                    className="font-mono text-[10px] font-semibold uppercase tracking-wider px-4 py-2 border border-black hover:bg-black hover:text-white rounded-[4px] transition-colors cursor-pointer"
                  >
                    Open Console
                  </button>
                ) : lab.status === "stopped" ? (
                  <button
                    type="button"
                    disabled={isStarting}
                    onClick={() => handleStartLab(lab.id)}
                    className="font-mono text-[10px] font-semibold uppercase tracking-wider px-4 py-2 border border-black hover:bg-black hover:text-white rounded-[4px] transition-colors cursor-pointer disabled:opacity-50"
                  >
                    {isStarting ? "Starting…" : "Start Lab"}
                  </button>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="font-mono text-[10px] font-semibold uppercase tracking-wider px-4 py-2 border border-[#D9D9D9] text-[#A8A8A8] rounded-[4px] cursor-not-allowed"
                  >
                    Locked
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
