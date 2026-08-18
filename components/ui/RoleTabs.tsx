"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export const ROLES = [
  {
    key: "student",
    label: "Student",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7" />
      </svg>
    ),
  },
  {
    key: "college",
    label: "College",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    key: "company",
    label: "Company",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

interface RoleTabsProps {
  panes: Record<string, React.ReactNode>;
  onRoleChange?: (role: string) => void;
  className?: string;
}

function RoleTabsContent({ panes, onRoleChange, className = "" }: RoleTabsProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const roleParam = searchParams.get("role");
  const [localRole, setLocalRole] = useState("student");
  
  const active = roleParam && ROLES.some((r) => r.key === roleParam) ? roleParam : localRole;

  const pick = (key: string) => {
    setLocalRole(key);
    onRoleChange?.(key);
    const params = new URLSearchParams(searchParams.toString());
    if (key === "student") {
      params.delete("role");
    } else {
      params.set("role", key);
    }
    const queryString = params.toString() ? `?${params.toString()}` : "";
    router.replace(`${pathname}${queryString}`, { scroll: false });
  };

  return (
    <div className={`bg-white rounded-[16px] border border-[#E8E4F0] p-6 sm:p-8 shadow-xl shadow-[#713FFF]/5 ${className}`}>
      {/* Segmented Role Tabs Pill */}
      <div
        className="flex items-center p-1.5 bg-[#F4F2FA] rounded-[12px] border border-[#E8E4F0] mb-6 w-full"
        role="tablist"
        aria-label="Account role selector"
      >
        {ROLES.map((r) => {
          const isSelected = active === r.key;
          return (
            <button
              key={r.key}
              role="tab"
              type="button"
              aria-selected={isSelected}
              onClick={() => pick(r.key)}
              className={`flex-1 py-2 sm:py-2.5 px-3 rounded-[9px] text-[13px] sm:text-[14px] font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer ${
                isSelected
                  ? "bg-black text-white shadow-sm"
                  : "text-[#4C4C58] hover:text-black hover:bg-white/60"
              }`}
            >
              <span className={`transition-colors ${isSelected ? "text-white" : "text-[#7A7A88]"}`}>
                {r.icon}
              </span>
              <span>{r.label}</span>
            </button>
          );
        })}
      </div>

      {/* Pane Content */}
      <div>
        {ROLES.map((r) => (
          <div
            key={r.key}
            role="tabpanel"
            className={active === r.key ? "block animate-in fade-in duration-200" : "hidden"}
          >
            {panes[r.key]}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function RoleTabs(props: RoleTabsProps) {
  return (
    <Suspense
      fallback={
        <div className="bg-white rounded-[16px] border border-[#E8E4F0] p-8 shadow-xl text-center text-[#7A7A88]">
          Loading options...
        </div>
      }
    >
      <RoleTabsContent {...props} />
    </Suspense>
  );
}

