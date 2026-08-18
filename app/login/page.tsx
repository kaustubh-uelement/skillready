"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useReveal from "@/lib/useReveal";
import useForm from "@/lib/useForm";
import RoleTabs from "@/components/ui/RoleTabs";
import { Field, FormMessage } from "@/components/ui/Field";

/* Social Login Button Component */
function SocialButton({
  provider,
  icon,
  label,
}: {
  provider: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-white hover:bg-[#F9F8FD] border border-[#E2DEEA] hover:border-[#713FFF]/40 rounded-[10px] text-[13px] font-medium text-black transition-all duration-150 active:scale-[0.98] shadow-2xs cursor-pointer"
      onClick={() => alert(`Connecting with ${provider}...`)}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

function GoogleIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24">
      <path
        fill="#EA4335"
        d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z"
      />
      <path
        fill="#4285F4"
        d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"
      />
      <path
        fill="#FBBC05"
        d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3 0-.8.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 12 0 14.5s.7 4.8 1.9 7.2l3.7-2.9z"
      />
      <path
        fill="#34A853"
        d="M12 23.5c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.4-6.4-5.2L1.9 16.5C3.7 20.2 7.5 23.5 12 23.5z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.96 0-1.74.78-1.74 1.75s.78 1.74 1.74 1.74 1.74-.78 1.74-1.74-.78-1.75-1.74-1.75z" />
    </svg>
  );
}

/* Individual Login Panes */
function StudentLoginPane() {
  const [rememberMe, setRememberMe] = useState(false);
  const f = useForm(
    { user: "", password: "" },
    {
      required: [
        { name: "user", label: "registered email or mobile number" },
        { name: "password", label: "your password" },
      ],
      success: "Welcome back! Redirecting to student dashboard...",
    }
  );

  return (
    <div>
      <div className="mb-5">
        <h2 className="text-[20px] font-bold text-black tracking-tight mb-1">
          Student Log in
        </h2>
        <p className="text-[14px] text-[#4C4C58]">
          Enter your credentials to access your courses, mock exams, and recruiter profile.
        </p>
      </div>

      {/* Social Login */}
      <div className="flex items-center gap-2.5 mb-5">
        <SocialButton provider="Google" icon={<GoogleIcon />} label="Google" />
        <SocialButton provider="LinkedIn" icon={<LinkedInIcon />} label="LinkedIn" />
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3 my-5">
        <div className="flex-1 h-px bg-[#E8E4F0]" />
        <span className="text-[12px] font-medium text-[#7A7A88] uppercase tracking-wider">
          Or continue with
        </span>
        <div className="flex-1 h-px bg-[#E8E4F0]" />
      </div>

      {/* Form Fields */}
      <form onSubmit={f.submit}>
        <Field
          label="Email or Mobile number"
          id="student-id"
          type="text"
          value={f.values.user}
          onChange={f.set("user")}
          placeholder="e.g. rahul@example.com or 9876543210"
          autoComplete="username"
          icon={
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
          }
        />

        <Field
          label="Password"
          id="student-pw"
          type="password"
          value={f.values.password}
          onChange={f.set("password")}
          placeholder="••••••••"
          autoComplete="current-password"
          icon={
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          }
        />

        {/* Remember me & Forgot password */}
        <div className="flex items-center justify-between mt-1 mb-5">
          <label className="flex items-center gap-2 text-[13px] text-[#4C4C58] cursor-pointer select-none">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 text-[#713FFF] border-[#E2DEEA] rounded focus:ring-[#713FFF] cursor-pointer accent-[#713FFF]"
            />
            <span>Remember me</span>
          </label>
          <Link
            href="/forgot-password?role=student"
            className="text-[13px] font-semibold text-[#713FFF] hover:text-[#4C1D95] transition-colors"
          >
            Forgot password?
          </Link>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={f.busy}
          className="w-full inline-flex items-center justify-center gap-2 bg-black hover:bg-[#1E1E1E] text-white text-[15px] font-semibold py-3 px-6 rounded-[10px] transition-all duration-150 active:scale-[0.99] shadow-xs cursor-pointer disabled:opacity-60"
        >
          <span>{f.busy ? "Logging in..." : "Log in to Student Portal"}</span>
          <span className="text-base transition-transform group-hover:translate-x-0.5">→</span>
        </button>

        <FormMessage>{f.message}</FormMessage>

        <div className="mt-5 pt-5 border-t border-[#E8E4F0] text-center text-[13px] text-[#4C4C58]">
          <span>Don&apos;t have an account yet? </span>
          <Link href="/signup?role=student" className="font-semibold text-[#713FFF] hover:underline">
            Create a free account
          </Link>
        </div>
      </form>
    </div>
  );
}

function CollegeLoginPane() {
  const [rememberMe, setRememberMe] = useState(false);
  const f = useForm(
    { user: "", password: "" },
    {
      required: [
        { name: "user", label: "institutional email address" },
        { name: "password", label: "your password" },
      ],
      success: "Verified! Loading College Placement portal...",
    }
  );

  return (
    <div>
      <div className="mb-5">
        <h2 className="text-[20px] font-bold text-black tracking-tight mb-1">
          College Portal Log in
        </h2>
        <p className="text-[14px] text-[#4C4C58]">
          Sign in to monitor batch assessment schedules, student analytics, and placement drives.
        </p>
      </div>

      <form onSubmit={f.submit}>
        <Field
          label="Institutional Email"
          id="college-id"
          type="email"
          value={f.values.user}
          onChange={f.set("user")}
          placeholder="tpo@yourcollege.ac.in"
          autoComplete="email"
          icon={
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          }
        />

        <Field
          label="Password"
          id="college-pw"
          type="password"
          value={f.values.password}
          onChange={f.set("password")}
          placeholder="••••••••"
          autoComplete="current-password"
          icon={
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          }
        />

        <div className="flex items-center justify-between mt-1 mb-5">
          <label className="flex items-center gap-2 text-[13px] text-[#4C4C58] cursor-pointer select-none">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 text-[#713FFF] border-[#E2DEEA] rounded focus:ring-[#713FFF] cursor-pointer accent-[#713FFF]"
            />
            <span>Remember institution</span>
          </label>
          <Link
            href="/forgot-password?role=college"
            className="text-[13px] font-semibold text-[#713FFF] hover:text-[#4C1D95] transition-colors"
          >
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={f.busy}
          className="w-full inline-flex items-center justify-center gap-2 bg-black hover:bg-[#1E1E1E] text-white text-[15px] font-semibold py-3 px-6 rounded-[10px] transition-all duration-150 active:scale-[0.99] shadow-xs cursor-pointer disabled:opacity-60"
        >
          <span>{f.busy ? "Authenticating..." : "Open College Dashboard"}</span>
          <span className="text-base">→</span>
        </button>

        <FormMessage>{f.message}</FormMessage>

        <div className="mt-5 pt-5 border-t border-[#E8E4F0] text-center text-[13px] text-[#4C4C58]">
          <span>Not a partner institution yet? </span>
          <Link href="/colleges" className="font-semibold text-[#713FFF] hover:underline">
            Explore College Solutions
          </Link>
        </div>
      </form>
    </div>
  );
}

function CompanyLoginPane() {
  const [rememberMe, setRememberMe] = useState(false);
  const f = useForm(
    { user: "", password: "" },
    {
      required: [
        { name: "user", label: "work email" },
        { name: "password", label: "your password" },
      ],
      success: "Access granted. Loading Employer Hiring portal...",
    }
  );

  return (
    <div>
      <div className="mb-5">
        <h2 className="text-[20px] font-bold text-black tracking-tight mb-1">
          Company Log in
        </h2>
        <p className="text-[14px] text-[#4C4C58]">
          Sign in to post job requirements, view verified scorecards, and shortlist talent.
        </p>
      </div>

      {/* Social Login */}
      <div className="flex items-center gap-2.5 mb-5">
        <SocialButton provider="LinkedIn" icon={<LinkedInIcon />} label="Sign in with LinkedIn" />
        <SocialButton provider="Google" icon={<GoogleIcon />} label="Google" />
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3 my-5">
        <div className="flex-1 h-px bg-[#E8E4F0]" />
        <span className="text-[12px] font-medium text-[#7A7A88] uppercase tracking-wider">
          Or continue with
        </span>
        <div className="flex-1 h-px bg-[#E8E4F0]" />
      </div>

      <form onSubmit={f.submit}>
        <Field
          label="Work Email"
          id="company-id"
          type="email"
          value={f.values.user}
          onChange={f.set("user")}
          placeholder="you@company.com"
          autoComplete="email"
          icon={
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          }
        />

        <Field
          label="Password"
          id="company-pw"
          type="password"
          value={f.values.password}
          onChange={f.set("password")}
          placeholder="••••••••"
          autoComplete="current-password"
          icon={
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          }
        />

        <div className="flex items-center justify-between mt-1 mb-5">
          <label className="flex items-center gap-2 text-[13px] text-[#4C4C58] cursor-pointer select-none">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 text-[#713FFF] border-[#E2DEEA] rounded focus:ring-[#713FFF] cursor-pointer accent-[#713FFF]"
            />
            <span>Remember me</span>
          </label>
          <Link
            href="/forgot-password?role=company"
            className="text-[13px] font-semibold text-[#713FFF] hover:text-[#4C1D95] transition-colors"
          >
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={f.busy}
          className="w-full inline-flex items-center justify-center gap-2 bg-black hover:bg-[#1E1E1E] text-white text-[15px] font-semibold py-3 px-6 rounded-[10px] transition-all duration-150 active:scale-[0.99] shadow-xs cursor-pointer disabled:opacity-60"
        >
          <span>{f.busy ? "Authenticating..." : "Open Hiring Dashboard"}</span>
          <span className="text-base">→</span>
        </button>

        <FormMessage>{f.message}</FormMessage>

        <div className="mt-5 pt-5 border-t border-[#E8E4F0] text-center text-[13px] text-[#4C4C58]">
          <span>Hiring for the first time? </span>
          <Link href="/signup?role=company" className="font-semibold text-[#713FFF] hover:underline">
            Create a free company account
          </Link>
        </div>
      </form>
    </div>
  );
}

export default function Login() {
  useReveal();
  const [currentRole, setCurrentRole] = useState("student");

  return (
    <main className="relative min-h-[calc(100vh-80px)] bg-[#FBF9FF] flex items-center py-12 lg:py-20 overflow-hidden">
      {/* 1. Full Hero Background Artwork */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
        <Image
          src="/images/hero-bg.png"
          alt="SkillReady login background"
          fill
          priority
          className="object-cover object-right-top lg:object-center"
          sizes="100vw"
        />
        {/* Soft background ambient gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FBF9FF]/60 via-[#FBF9FF]/80 to-[#FBF9FF]" />
      </div>

      <div className="wrap relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Brand & Ecosystem Showcase */}
          <div className="lg:col-span-6 flex flex-col items-start gap-5 sm:gap-6">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/80 backdrop-blur-sm px-4 py-1.5 text-[13px] font-medium text-black shadow-xs">
              <span>Welcome Back</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[36px] sm:text-[46px] lg:text-[50px] font-bold tracking-tight text-black leading-[1.1]">
              Sign in to your <br />
              SkillReady account
            </h1>

            {/* Subtitle */}
            <p className="text-[16px] sm:text-[17px] text-[#4C4C58] leading-relaxed max-w-[480px]">
              Students, colleges, and companies connect on one shared platform to bridge the gap between learning and employment.
            </p>

            {/* Role-Specific Feature Highlight Card */}
            <div className="w-full max-w-[480px] bg-white/70 backdrop-blur-md rounded-[12px] border border-[#E8E4F0] p-5 shadow-xs">
              <div className="text-[12px] font-bold uppercase tracking-wider text-[#713FFF] mb-3">
                {currentRole === "student" && "✨ What awaits you inside"}
                {currentRole === "college" && "🏛️ Institutional command centre"}
                {currentRole === "company" && "⚡ Verified candidate pipeline"}
              </div>

              <div className="flex flex-col gap-2.5 text-[14px] text-[#4C4C58]">
                {currentRole === "student" && (
                  <>
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#713FFF] font-bold">✓</span>
                      <span>Access unlimited question bank and full mock assessments</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#713FFF] font-bold">✓</span>
                      <span>Detailed video solutions and step-by-step reasoning for every problem</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#713FFF] font-bold">✓</span>
                      <span>Verified employability score visible to top hiring partners</span>
                    </div>
                  </>
                )}

                {currentRole === "college" && (
                  <>
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#713FFF] font-bold">✓</span>
                      <span>Real-time batch performance and progress analytics</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#713FFF] font-bold">✓</span>
                      <span>Schedule custom placement training and baseline tests</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#713FFF] font-bold">✓</span>
                      <span>Automated compliance & NAAC/NBA placement reporting</span>
                    </div>
                  </>
                )}

                {currentRole === "company" && (
                  <>
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#713FFF] font-bold">✓</span>
                      <span>Post full-time fresher & internship roles for free</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#713FFF] font-bold">✓</span>
                      <span>Filter candidates by verified aptitude and coding scorecards</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#713FFF] font-bold">✓</span>
                      <span>Direct 1-click candidate shortlisting and interview scheduling</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Trust Pill / Stats Banner */}
            <div className="flex items-center gap-4 text-[13px] text-[#4C4C58] pt-2">
              <div className="flex items-center gap-1 font-semibold text-black">
                <span className="text-[#F3BB04]">★</span> 4.9/5 Rating
              </div>
              <span className="text-[#E8E4F0]">•</span>
              <div>50+ Partner Colleges</div>
              <span className="text-[#E8E4F0]">•</span>
              <div>100+ Hiring Partners</div>
            </div>
          </div>

          {/* Right Column: Form Card with Role Tabs */}
          <div className="lg:col-span-6 w-full max-w-[540px] mx-auto lg:ml-auto">
            <RoleTabs
              onRoleChange={setCurrentRole}
              panes={{
                student: <StudentLoginPane />,
                college: <CollegeLoginPane />,
                company: <CompanyLoginPane />,
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

