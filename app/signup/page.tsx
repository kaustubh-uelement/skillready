"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useReveal from "@/lib/useReveal";
import useForm from "@/lib/useForm";
import RoleTabs from "@/components/ui/RoleTabs";
import { Field, Select, ChipRadio, FormMessage } from "@/components/ui/Field";

const COURSES = [
  "B.E. / B.Tech",
  "B.Sc. (CS / IT / Electronics)",
  "B.Com. / BBA",
  "BCCA / BCA",
  "B.Pharma",
  "M.Sc. / MCA / MBA",
  "Other Degree",
];

const CELL_ROLES = [
  "Dean, Training & Placement",
  "Training & Placement Officer (TPO)",
  "Principal / Director",
  "Management / Trustee",
  "Faculty Placement Coordinator",
  "Other",
];

const BATCH_SIZES = [
  "Under 100",
  "100 – 300",
  "300 – 600",
  "600 – 1000",
  "Over 1000",
];

const INTERESTS = [
  "Training and monitoring (Complete Suite)",
  "Placement Training only",
  "Assessment & Monitoring Platform only",
  "Complimentary Baseline Test for 1 Batch",
];

const HIRING_TYPES = [
  "Full-time Fresher Roles",
  "Internships",
  "Both Full-time & Interns",
  "Campus Placement Drive",
];

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

/* Individual Signup Panes */
function StudentSignup() {
  const [agreed, setAgreed] = useState(true);
  const f = useForm(
    {
      name: "",
      phone: "",
      email: "",
      college: "",
      course: COURSES[0],
      year: "2nd",
      password: "",
    },
    {
      required: [
        { name: "name", label: "your full name" },
        { name: "phone", label: "your mobile number" },
        { name: "email", label: "your email address" },
        { name: "password", label: "a password" },
      ],
      success: "Student account created successfully! Setting up your dashboard...",
    }
  );

  return (
    <div>
      <div className="mb-5">
        <h2 className="text-[20px] font-bold text-black tracking-tight mb-1">
          Student Sign-up
        </h2>
        <p className="text-[14px] text-[#4C4C58]">
          Free forever. Start with a full-length mock test and verified practice sets.
        </p>
      </div>

      {/* Social Sign-up */}
      <div className="flex items-center gap-2.5 mb-5">
        <button
          type="button"
          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-white hover:bg-[#F9F8FD] border border-[#E2DEEA] hover:border-[#713FFF]/40 rounded-[10px] text-[13px] font-medium text-black transition-all duration-150 shadow-2xs cursor-pointer"
          onClick={() => alert("Continuing with Google...")}
        >
          <GoogleIcon />
          <span>Sign up with Google</span>
        </button>
        <button
          type="button"
          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-white hover:bg-[#F9F8FD] border border-[#E2DEEA] hover:border-[#713FFF]/40 rounded-[10px] text-[13px] font-medium text-black transition-all duration-150 shadow-2xs cursor-pointer"
          onClick={() => alert("Continuing with LinkedIn...")}
        >
          <LinkedInIcon />
          <span>LinkedIn</span>
        </button>
      </div>

      <div className="flex items-center gap-3 my-5">
        <div className="flex-1 h-px bg-[#E8E4F0]" />
        <span className="text-[12px] font-medium text-[#7A7A88] uppercase tracking-wider">
          Or register with email
        </span>
        <div className="flex-1 h-px bg-[#E8E4F0]" />
      </div>

      <form onSubmit={f.submit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3.5">
          <Field
            label="Full Name"
            id="su-name"
            value={f.values.name}
            onChange={f.set("name")}
            placeholder="e.g. Ananya Sharma"
            autoComplete="name"
            icon={
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            }
          />

          <Field
            label="Mobile Number"
            id="su-phone"
            type="tel"
            value={f.values.phone}
            onChange={f.set("phone")}
            placeholder="10-digit mobile"
            autoComplete="tel"
            icon={
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            }
          />
        </div>

        <Field
          label="Email Address"
          id="su-email"
          type="email"
          value={f.values.email}
          onChange={f.set("email")}
          placeholder="ananya@example.com"
          autoComplete="email"
          icon={
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3.5">
          <Field
            label="College Name"
            id="su-college"
            value={f.values.college}
            onChange={f.set("college")}
            placeholder="Your college or university"
            icon={
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            }
          />

          <Select
            label="Degree Course"
            id="su-course"
            value={f.values.course}
            onChange={f.set("course")}
            options={COURSES}
          />
        </div>

        <ChipRadio
          label="Year of Study"
          name="su-year"
          options={["1st", "2nd", "3rd", "Final"]}
          value={f.values.year}
          onChange={f.set("year")}
        />

        <Field
          label="Create Password"
          id="su-password"
          type="password"
          value={f.values.password}
          onChange={f.set("password")}
          placeholder="At least 8 characters"
          autoComplete="new-password"
          icon={
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          }
        />

        <div className="flex items-center gap-2 mt-1 mb-5">
          <input
            type="checkbox"
            id="terms-check"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="w-4 h-4 text-[#713FFF] border-[#E2DEEA] rounded focus:ring-[#713FFF] cursor-pointer accent-[#713FFF]"
          />
          <label htmlFor="terms-check" className="text-[12px] text-[#4C4C58] cursor-pointer select-none">
            I agree to the <Link href="/terms" className="underline hover:text-black">Terms of Service</Link> and <Link href="/privacy" className="underline hover:text-black">Privacy Policy</Link>.
          </label>
        </div>

        <button
          type="submit"
          disabled={f.busy || !agreed}
          className="w-full inline-flex items-center justify-center gap-2 bg-black hover:bg-[#1E1E1E] text-white text-[15px] font-semibold py-3.5 px-6 rounded-[10px] transition-all duration-150 active:scale-[0.99] shadow-xs cursor-pointer disabled:opacity-50"
        >
          <span>{f.busy ? "Creating account..." : "Create Free Student Account"}</span>
          <span className="text-base">→</span>
        </button>

        <FormMessage>{f.message}</FormMessage>

        <div className="mt-5 pt-5 border-t border-[#E8E4F0] text-center text-[13px] text-[#4C4C58]">
          <span>Already registered? </span>
          <Link href="/login?role=student" className="font-semibold text-[#713FFF] hover:underline">
            Log in to your account
          </Link>
        </div>
      </form>
    </div>
  );
}

function CollegeSignup() {
  const f = useForm(
    {
      name: "",
      role: CELL_ROLES[0],
      college: "",
      email: "",
      phone: "",
      size: BATCH_SIZES[1],
      want: INTERESTS[0],
    },
    {
      required: [
        { name: "name", label: "your name" },
        { name: "college", label: "your institution name" },
        { name: "email", label: "your institutional email" },
      ],
      success: "Walkthrough request submitted! Our institutional team will reach out within 24 hours.",
    }
  );

  return (
    <div>
      <div className="mb-5">
        <h2 className="text-[20px] font-bold text-black tracking-tight mb-1">
          College Institutional Enquiry
        </h2>
        <p className="text-[14px] text-[#4C4C58]">
          Partner with SkillReady to benchmark cohort employability and elevate placement numbers.
        </p>
      </div>

      <form onSubmit={f.submit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3.5">
          <Field
            label="Your Name"
            id="cs-name"
            value={f.values.name}
            onChange={f.set("name")}
            placeholder="Full name"
            icon={
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            }
          />

          <Select
            label="Designation / Role"
            id="cs-role"
            value={f.values.role}
            onChange={f.set("role")}
            options={CELL_ROLES}
          />
        </div>

        <Field
          label="College / University Name"
          id="cs-college"
          value={f.values.college}
          onChange={f.set("college")}
          placeholder="e.g. National Institute of Technology"
          icon={
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3.5">
          <Field
            label="Institutional Email"
            id="cs-email"
            type="email"
            value={f.values.email}
            onChange={f.set("email")}
            placeholder="tpo@yourcollege.ac.in"
            icon={
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
          />

          <Field
            label="Direct Mobile / Phone"
            id="cs-phone"
            type="tel"
            value={f.values.phone}
            onChange={f.set("phone")}
            placeholder="10-digit number"
            icon={
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            }
          />
        </div>

        <Select
          label="Estimated Batch Size"
          id="cs-size"
          value={f.values.size}
          onChange={f.set("size")}
          options={BATCH_SIZES}
        />

        <Select
          label="Primary Objective"
          id="cs-want"
          value={f.values.want}
          onChange={f.set("want")}
          options={INTERESTS}
        />

        <button
          type="submit"
          disabled={f.busy}
          className="w-full inline-flex items-center justify-center gap-2 bg-black hover:bg-[#1E1E1E] text-white text-[15px] font-semibold py-3.5 px-6 rounded-[10px] transition-all duration-150 active:scale-[0.99] shadow-xs cursor-pointer disabled:opacity-60 mt-2"
        >
          <span>{f.busy ? "Submitting request..." : "Request a Live Demo & Walkthrough"}</span>
          <span className="text-base">→</span>
        </button>

        <FormMessage>{f.message}</FormMessage>

        <div className="mt-5 pt-5 border-t border-[#E8E4F0] text-center text-[13px] text-[#4C4C58]">
          <span>Already a partner college? </span>
          <Link href="/login?role=college" className="font-semibold text-[#713FFF] hover:underline">
            Log in to your portal
          </Link>
        </div>
      </form>
    </div>
  );
}

function CompanySignup() {
  const f = useForm(
    {
      name: "",
      company: "",
      email: "",
      phone: "",
      hiring: HIRING_TYPES[0],
    },
    {
      required: [
        { name: "name", label: "your full name" },
        { name: "company", label: "your company name" },
        { name: "email", label: "your official work email" },
      ],
      success: "Employer account request submitted! Your account is set up for 1-click posting.",
    }
  );

  return (
    <div>
      <div className="mb-5">
        <h2 className="text-[20px] font-bold text-black tracking-tight mb-1">
          Company Employer Sign-up
        </h2>
        <p className="text-[14px] text-[#4C4C58]">
          Permanently free posting. Access verified candidate profiles with pre-evaluated coding and aptitude scores.
        </p>
      </div>

      {/* Social Sign-up */}
      <div className="mb-5">
        <button
          type="button"
          className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-white hover:bg-[#F9F8FD] border border-[#E2DEEA] hover:border-[#713FFF]/40 rounded-[10px] text-[13px] font-medium text-black transition-all duration-150 shadow-2xs cursor-pointer"
          onClick={() => alert("Connecting with LinkedIn...")}
        >
          <LinkedInIcon />
          <span>Sign up with LinkedIn</span>
        </button>
      </div>

      <div className="flex items-center gap-3 my-5">
        <div className="flex-1 h-px bg-[#E8E4F0]" />
        <span className="text-[12px] font-medium text-[#7A7A88] uppercase tracking-wider">
          Or register with work email
        </span>
        <div className="flex-1 h-px bg-[#E8E4F0]" />
      </div>

      <form onSubmit={f.submit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3.5">
          <Field
            label="Your Name"
            id="cm-name"
            value={f.values.name}
            onChange={f.set("name")}
            placeholder="Full name"
            icon={
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            }
          />

          <Field
            label="Company Name"
            id="cm-company"
            value={f.values.company}
            onChange={f.set("company")}
            placeholder="Organization name"
            icon={
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            }
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3.5">
          <Field
            label="Official Work Email"
            id="cm-email"
            type="email"
            value={f.values.email}
            onChange={f.set("email")}
            placeholder="recruiter@company.com"
            icon={
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
          />

          <Field
            label="Contact Mobile"
            id="cm-phone"
            type="tel"
            value={f.values.phone}
            onChange={f.set("phone")}
            placeholder="10-digit mobile"
            icon={
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            }
          />
        </div>

        <Select
          label="Currently Hiring For"
          id="cm-hiring"
          value={f.values.hiring}
          onChange={f.set("hiring")}
          options={HIRING_TYPES}
        />

        <button
          type="submit"
          disabled={f.busy}
          className="w-full inline-flex items-center justify-center gap-2 bg-black hover:bg-[#1E1E1E] text-white text-[15px] font-semibold py-3.5 px-6 rounded-[10px] transition-all duration-150 active:scale-[0.99] shadow-xs cursor-pointer disabled:opacity-60 mt-2"
        >
          <span>{f.busy ? "Creating account..." : "Create Free Employer Account"}</span>
          <span className="text-base">→</span>
        </button>

        <FormMessage>{f.message}</FormMessage>

        <div className="mt-5 pt-5 border-t border-[#E8E4F0] text-center text-[13px] text-[#4C4C58]">
          <span>Already registered? </span>
          <Link href="/login?role=company" className="font-semibold text-[#713FFF] hover:underline">
            Log in to hiring dashboard
          </Link>
        </div>
      </form>
    </div>
  );
}

export default function Signup() {
  useReveal();
  const [currentRole, setCurrentRole] = useState("student");

  return (
    <main className="relative min-h-[calc(100vh-80px)] bg-[#FBF9FF] flex items-center py-12 lg:py-20 overflow-hidden">
      {/* Background artwork */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
        <Image
          src="/images/hero-bg.png"
          alt="SkillReady registration background"
          fill
          priority
          className="object-cover object-right-top lg:object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FBF9FF]/60 via-[#FBF9FF]/80 to-[#FBF9FF]" />
      </div>

      <div className="wrap relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Brand & Value Prop */}
          <div className="lg:col-span-5 flex flex-col items-start gap-5 sm:gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/80 backdrop-blur-sm px-4 py-1.5 text-[13px] font-medium text-black shadow-xs">
              <span>Free to Start</span>
            </div>

            <h1 className="text-[36px] sm:text-[46px] lg:text-[50px] font-bold tracking-tight text-black leading-[1.1]">
              Create your <br />
              SkillReady account
            </h1>

            <p className="text-[16px] sm:text-[17px] text-[#4C4C58] leading-relaxed max-w-[480px]">
              Empower your journey. Build proven industry skills, measure real cohort outcomes, or recruit pre-assessed candidates.
            </p>

            {/* Dynamic Perks Card */}
            <div className="w-full max-w-[480px] bg-white/70 backdrop-blur-md rounded-[12px] border border-[#E8E4F0] p-5 shadow-xs">
              <div className="text-[12px] font-bold uppercase tracking-wider text-[#713FFF] mb-3">
                {currentRole === "student" && "🎓 Included in your free student plan"}
                {currentRole === "college" && "🏛️ Partnership benefits for institutions"}
                {currentRole === "company" && "💼 Direct recruiter benefits"}
              </div>

              <div className="flex flex-col gap-2.5 text-[14px] text-[#4C4C58]">
                {currentRole === "student" && (
                  <>
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#713FFF] font-bold">✓</span>
                      <span>1 complimentary full-length mock assessment</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#713FFF] font-bold">✓</span>
                      <span>Extensive practice sets in quants, reasoning & coding</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#713FFF] font-bold">✓</span>
                      <span>Verified profile visible to recruiters on score rank</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#713FFF] font-bold">✓</span>
                      <span>No credit card or upfront payment required</span>
                    </div>
                  </>
                )}

                {currentRole === "college" && (
                  <>
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#713FFF] font-bold">✓</span>
                      <span>30-minute tailored walkthrough for your placement cell</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#713FFF] font-bold">✓</span>
                      <span>Free baseline aptitude & technical test for 1 entire batch</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#713FFF] font-bold">✓</span>
                      <span>Instant gap identification report for dean and HODs</span>
                    </div>
                  </>
                )}

                {currentRole === "company" && (
                  <>
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#713FFF] font-bold">✓</span>
                      <span>Zero candidate search fees and zero posting limits</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#713FFF] font-bold">✓</span>
                      <span>Direct access to verified skills with benchmark scorecards</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#713FFF] font-bold">✓</span>
                      <span>2-step instant verification so you can post immediately</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Testimonial pill snippet */}
            <div className="w-full max-w-[480px] bg-[#F2EEFD] rounded-[10px] border border-[#713FFF]/20 p-4 text-[13px] text-[#4C1D95] italic leading-relaxed">
              &ldquo;SkillReady transformed how I prepared for placement drives. The practice sets and video explanations gave me real clarity.&rdquo;
              <div className="font-semibold not-italic text-black text-[12px] mt-1.5">— Student placed at top product firm</div>
            </div>
          </div>

          {/* Right Column: Multi-Role Sign-up Form */}
          <div className="lg:col-span-7 w-full max-w-[600px] mx-auto lg:ml-auto">
            <RoleTabs
              onRoleChange={setCurrentRole}
              panes={{
                student: <StudentSignup />,
                college: <CollegeSignup />,
                company: <CompanySignup />,
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

