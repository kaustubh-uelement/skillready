"use client";

import React, { useEffect, useState, useCallback } from "react";
import { ProctoringViolation } from "@/types/exam";

interface AntiCheatGuardProps {
  maxViolations?: number;
  onViolation: (violation: ProctoringViolation) => void;
  onAutoSubmitDueToViolations: () => void;
  enabled?: boolean;
}

export function AntiCheatGuard({
  maxViolations = 3,
  onViolation,
  onAutoSubmitDueToViolations,
  enabled = true,
}: AntiCheatGuardProps) {
  const [violationCount, setViolationCount] = useState(0);
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [lastWarningMessage, setLastWarningMessage] = useState("");
  const [isFullscreen, setIsFullscreen] = useState<boolean>(() =>
    typeof document !== "undefined" ? !!document.fullscreenElement : true
  );

  const requestFullscreen = useCallback(async () => {
    try {
      if (document.documentElement && document.documentElement.requestFullscreen) {
        if (!document.fullscreenElement) {
          await document.documentElement.requestFullscreen();
        }
      }
    } catch {
      // Ignored if user has not interacted with DOM yet
    }
  }, []);

  const recordViolation = useCallback(
    (type: ProctoringViolation["type"], message: string) => {
      if (!enabled) return;

      setViolationCount((prevCount) => {
        const newCount = prevCount + 1;

        const violation: ProctoringViolation = {
          id: `v-${Date.now()}`,
          timestamp: new Date().toISOString(),
          type,
          message: `${message} (Strike ${newCount}/${maxViolations})`,
        };

        onViolation(violation);
        setLastWarningMessage(`${message} (Warning ${newCount} of ${maxViolations})`);
        setShowWarningModal(true);

        if (newCount >= maxViolations) {
          setTimeout(() => {
            onAutoSubmitDueToViolations();
          }, 1500);
        }

        return newCount;
      });
    },
    [enabled, maxViolations, onViolation, onAutoSubmitDueToViolations]
  );

  useEffect(() => {
    if (!enabled) return;

    // 1. Fullscreen change listener
    const handleFullscreenChange = () => {
      const active = !!document.fullscreenElement;
      setIsFullscreen(active);
      if (!active) {
        recordViolation("fullscreen_exit", "Exited full-screen exam mode");
      }
    };

    // 2. Tab switch & visibility change listener
    const handleVisibilityChange = () => {
      if (document.hidden) {
        recordViolation("tab_switch", "Switched browser tab or minimized window");
      }
    };

    // 3. Disable context menu (right click)
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // 4. Disable copy/cut/paste
    const handleCopyCutPaste = (e: ClipboardEvent) => {
      e.preventDefault();
    };

    // 5. Block Devtools shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) ||
        (e.metaKey && e.altKey && (e.key === "i" || e.key === "j" || e.key === "c")) ||
        (e.ctrlKey && e.key === "u")
      ) {
        e.preventDefault();
        recordViolation("devtools_attempt", "Developer tools shortcut blocked");
      }
    };

    // 6. Before unload confirmation
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "Exam is in progress. Are you sure you want to leave?";
      return e.returnValue;
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("copy", handleCopyCutPaste);
    document.addEventListener("cut", handleCopyCutPaste);
    document.addEventListener("paste", handleCopyCutPaste);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("copy", handleCopyCutPaste);
      document.removeEventListener("cut", handleCopyCutPaste);
      document.removeEventListener("paste", handleCopyCutPaste);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [enabled, recordViolation]);

  return (
    <>
      {/* ── Warning Modal on Violation ────────────────────────────── */}
      {showWarningModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 select-none font-sans">
          <div className="bg-white rounded-[8px] border-2 border-[#d9534f] max-w-md w-full p-6 shadow-2xl animate-in zoom-in-95 duration-150 text-center space-y-4">
            <div className="w-14 h-14 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
              ⚠️
            </div>

            <h3 className="text-[18px] font-bold text-black font-sans">
              Proctoring Alert
            </h3>

            <p className="text-[13px] text-[#555] leading-relaxed">
              {lastWarningMessage}
            </p>

            <div className="p-2.5 bg-red-50 border border-red-200 rounded text-[12px] font-bold text-red-700 font-mono">
              Strikes: {violationCount} / {maxViolations}
              {violationCount >= maxViolations ? " — MAXIMUM VIOLATIONS REACHED. AUTO-SUBMITTING." : ""}
            </div>

            {violationCount < maxViolations && (
              <button
                type="button"
                onClick={() => {
                  setShowWarningModal(false);
                  requestFullscreen();
                }}
                className="w-full py-2.5 bg-[#337ab7] hover:bg-[#286090] text-white font-bold text-[13px] rounded transition-colors cursor-pointer shadow-xs"
              >
                Return to Full-Screen Exam
              </button>
            )}
          </div>
        </div>
      )}

      {/* Fullscreen banner prompt if not in fullscreen */}
      {!isFullscreen && !showWarningModal && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-[#d9534f] text-white px-4 py-2 flex items-center justify-between text-[12px] font-bold shadow-lg">
          <span>⚠️ Please keep exam in Fullscreen mode.</span>
          <button
            type="button"
            onClick={requestFullscreen}
            className="px-3 py-1 bg-white text-[#d9534f] rounded text-[11px] font-bold cursor-pointer hover:bg-gray-100"
          >
            Re-enter Fullscreen
          </button>
        </div>
      )}
    </>
  );
}
