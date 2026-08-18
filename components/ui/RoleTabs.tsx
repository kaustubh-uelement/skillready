/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars, react-hooks/set-state-in-effect */
"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const ROLES = [
  { key: "student", label: "Student" },
  { key: "college", label: "College" },
  { key: "company", label: "Company" }
];

function RoleTabsContent({ panes }: any) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  
  const roleParam = searchParams.get("role");
  const initial = ROLES.some((r) => r.key === roleParam) ? roleParam : "student";
  const [active, setActive] = useState(initial);

  useEffect(() => {
    if (roleParam && ROLES.some((x) => x.key === roleParam) && roleParam !== active) {
      setActive(roleParam);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roleParam]);

  const pick = (key: string) => {
    setActive(key);
    const params = new URLSearchParams(searchParams.toString());
    if (key === "student") {
      params.delete("role");
    } else {
      params.set("role", key);
    }
    const queryString = params.toString() ? `?${params.toString()}` : "";
    router.replace(`${pathname}${queryString}`);
  };

  return (
    <div className="form-card">
      <div className="tabs" role="tablist" aria-label="Account type">
        {ROLES.map((r) => (
          <button
            key={r.key}
            role="tab"
            type="button"
            aria-selected={active === r.key}
            onClick={() => pick(r.key)}
          >
            {r.label}
          </button>
        ))}
      </div>
      {ROLES.map((r) => (
        <div className={"pane" + (active === r.key ? " on" : "")} key={r.key} role="tabpanel">
          {panes[r.key]}
        </div>
      ))}
    </div>
  );
}

export default function RoleTabs(props: any) {
  return (
    <Suspense fallback={<div>Loading tabs...</div>}>
      <RoleTabsContent {...props} />
    </Suspense>
  );
}
