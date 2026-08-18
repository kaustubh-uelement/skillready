"use client";

import React, { useState, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import useReveal from "@/lib/useReveal";
import useForm from "@/lib/useForm";
import RoleTabs from "@/components/ui/RoleTabs";
import { Field } from "@/components/ui/Field";

function ResetFormPane({
  roleTitle,
  emailPlaceholder,
  emailLabel,
}: {
  roleTitle: string;
  emailPlaceholder: string;
  emailLabel: string;
}) {
  const [step, setStep] = useState<"request" | "verify">("request");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpSentTo, setOtpSentTo] = useState("");

  const f = useForm(
    { email: "", newPassword: "", confirmPassword: "" },
    {
      required: [{ name: "email", label: emailLabel.toLowerCase() }],
    }
  );

  const handleSendLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (!f.values.email) {
      alert(`Please provide your ${emailLabel.toLowerCase()}.`);
      return;
    }
    setOtpSentTo(f.values.email);
    setStep("verify");
  };

  const handleOtpChange = (index: number, val: string) => {
    if (val.length > 1) val = val.slice(-1);
    const updated = [...otp];
    updated[index] = val;
    setOtp(updated);

    // Auto-focus next input
    if (val && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleResetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!f.values.newPassword) {
      alert("Please enter a new password.");
      return;
    }
    if (f.values.newPassword !== f.values.confirmPassword) {
      alert("Passwords do not match. Please recheck.");
      return;
    }
    alert("Password updated successfully! You can now log in.");
  };

  return (
    <div>
      <div className="mb-5">
        <h2 className="text-[20px] font-bold text-black tracking-tight mb-1">
          {roleTitle} Password Recovery
        </h2>
        <p className="text-[14px] text-[#4C4C58]">
          {step === "request"
            ? `Enter your registered ${emailLabel.toLowerCase()} to receive a verification link.`
            : `Enter the 6-digit code sent to ${otpSentTo} along with your new password.`}
        </p>
      </div>

      {step === "request" ? (
        <form onSubmit={handleSendLink}>
          <Field
            label={emailLabel}
            id={`reset-${roleTitle.toLowerCase()}-email`}
            type="text"
            value={f.values.email}
            onChange={f.set("email")}
            placeholder={emailPlaceholder}
            autoComplete="email"
            icon={
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
          />

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-black hover:bg-[#1E1E1E] text-white text-[15px] font-semibold py-3.5 px-6 rounded-[10px] transition-all duration-150 active:scale-[0.99] shadow-xs cursor-pointer mt-2"
          >
            <span>Send Reset Code & Link</span>
            <span className="text-base">→</span>
          </button>

          <div className="mt-5 pt-5 border-t border-[#E8E4F0] text-center text-[13px] text-[#4C4C58]">
            <Link href="/login" className="font-semibold text-[#713FFF] hover:underline inline-flex items-center gap-1.5">
              <span>← Back to Log in</span>
            </Link>
          </div>
        </form>
      ) : (
        <form onSubmit={handleResetSubmit}>
          <div className="mb-4">
            <label className="text-[13px] font-semibold text-black tracking-tight block mb-2">
              Verification Code (OTP)
            </label>
            <div className="flex items-center justify-between gap-2">
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  id={`otp-${idx}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(idx, e.target.value)}
                  className="w-11 h-12 text-center text-lg font-bold border border-[#E2DEEA] rounded-[10px] focus:border-[#713FFF] focus:ring-3 focus:ring-[#713FFF]/15 outline-none"
                />
              ))}
            </div>
          </div>

          <Field
            label="New Password"
            id={`reset-${roleTitle.toLowerCase()}-newpw`}
            type="password"
            value={f.values.newPassword}
            onChange={f.set("newPassword")}
            placeholder="At least 8 characters"
            autoComplete="new-password"
            icon={
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            }
          />

          <Field
            label="Confirm New Password"
            id={`reset-${roleTitle.toLowerCase()}-confirmpw`}
            type="password"
            value={f.values.confirmPassword}
            onChange={f.set("confirmPassword")}
            placeholder="Re-enter new password"
            autoComplete="new-password"
            icon={
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            }
          />

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-black hover:bg-[#1E1E1E] text-white text-[15px] font-semibold py-3.5 px-6 rounded-[10px] transition-all duration-150 active:scale-[0.99] shadow-xs cursor-pointer mt-2"
          >
            <span>Update Password & Log in</span>
            <span className="text-base">→</span>
          </button>

          <div className="flex items-center justify-between mt-4 text-[13px]">
            <button
              type="button"
              onClick={() => setStep("request")}
              className="text-[#7A7A88] hover:text-black transition-colors"
            >
              Change email
            </button>
            <button
              type="button"
              onClick={() => alert(`Resent verification code to ${otpSentTo}`)}
              className="font-semibold text-[#713FFF] hover:underline"
            >
              Resend code
            </button>
          </div>

          <div className="mt-5 pt-5 border-t border-[#E8E4F0] text-center text-[13px] text-[#4C4C58]">
            <Link href="/login" className="font-semibold text-[#713FFF] hover:underline inline-flex items-center gap-1.5">
              <span>← Back to Log in</span>
            </Link>
          </div>
        </form>
      )}
    </div>
  );
}

function ForgotPasswordContent() {
  useReveal();
  const searchParams = useSearchParams();
  const roleParam = searchParams.get("role") || "student";
  const [currentRole, setCurrentRole] = useState(roleParam);

  return (
    <main className="relative min-h-[calc(100vh-80px)] bg-[#FBF9FF] flex items-center py-12 lg:py-20 overflow-hidden">
      {/* Background artwork */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
        <Image
          src="/images/hero-bg.png"
          alt="SkillReady password recovery background"
          fill
          priority
          className="object-cover object-right-top lg:object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FBF9FF]/60 via-[#FBF9FF]/80 to-[#FBF9FF]" />
      </div>

      <div className="wrap relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Information */}
          <div className="lg:col-span-5 flex flex-col items-start gap-5 sm:gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/80 backdrop-blur-sm px-4 py-1.5 text-[13px] font-medium text-black shadow-xs">
              <span>Account Recovery • {currentRole.toUpperCase()}</span>
            </div>

            <h1 className="text-[36px] sm:text-[46px] lg:text-[50px] font-bold tracking-tight text-black leading-[1.1]">
              Recover your <br />
              password
            </h1>

            <p className="text-[16px] sm:text-[17px] text-[#4C4C58] leading-relaxed max-w-[480px]">
              Don&apos;t worry, it happens. Follow the simple steps to securely reset your credentials and regain access to your dashboard.
            </p>

            <div className="w-full max-w-[480px] bg-white/70 backdrop-blur-md rounded-[12px] border border-[#E8E4F0] p-5 shadow-xs flex flex-col gap-3">
              <div className="text-[12px] font-bold uppercase tracking-wider text-[#713FFF]">
                🔒 3-Step Quick Recovery
              </div>

              <div className="flex items-start gap-3 text-[14px] text-[#4C4C58]">
                <div className="w-6 h-6 rounded-full bg-[#F2EEFD] text-[#713FFF] font-bold flex items-center justify-center flex-none text-xs">
                  1
                </div>
                <span>Enter your registered email or phone number</span>
              </div>

              <div className="flex items-start gap-3 text-[14px] text-[#4C4C58]">
                <div className="w-6 h-6 rounded-full bg-[#F2EEFD] text-[#713FFF] font-bold flex items-center justify-center flex-none text-xs">
                  2
                </div>
                <span>Receive a one-time 6-digit secure code</span>
              </div>

              <div className="flex items-start gap-3 text-[14px] text-[#4C4C58]">
                <div className="w-6 h-6 rounded-full bg-[#F2EEFD] text-[#713FFF] font-bold flex items-center justify-center flex-none text-xs">
                  3
                </div>
                <span>Set your new password and sign in instantly</span>
              </div>
            </div>

            <div className="text-[13px] text-[#7A7A88]">
              Need additional assistance? Reach out directly at{" "}
              <a href="mailto:support@skillready.ai" className="font-semibold text-black hover:underline">
                support@skillready.ai
              </a>
            </div>
          </div>

          {/* Right Column: Recovery Card with Role Tabs */}
          <div className="lg:col-span-7 w-full max-w-[540px] mx-auto lg:ml-auto">
            <RoleTabs
              onRoleChange={setCurrentRole}
              panes={{
                student: (
                  <ResetFormPane
                    roleTitle="Student"
                    emailLabel="Registered Email or Mobile"
                    emailPlaceholder="e.g. rahul@example.com or 9876543210"
                  />
                ),
                college: (
                  <ResetFormPane
                    roleTitle="College"
                    emailLabel="Institutional Email"
                    emailPlaceholder="tpo@yourcollege.ac.in"
                  />
                ),
                company: (
                  <ResetFormPane
                    roleTitle="Company"
                    emailLabel="Official Work Email"
                    emailPlaceholder="you@company.com"
                  />
                ),
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default function ForgotPassword() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#FBF9FF] flex items-center justify-center text-[#7A7A88]">
          Loading recovery...
        </div>
      }
    >
      <ForgotPasswordContent />
    </Suspense>
  );
}
