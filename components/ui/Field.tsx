"use client";

import React, { useState } from "react";

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  icon?: React.ReactNode;
  hint?: string;
  error?: string;
  className?: string;
  wrapperClassName?: string;
}

export function Field({
  label,
  id,
  type = "text",
  icon,
  hint,
  error,
  className = "",
  wrapperClassName = "",
  ...props
}: FieldProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className={`flex flex-col gap-1.5 mb-4 ${wrapperClassName}`}>
      {label && (
        <div className="flex items-center justify-between">
          <label
            htmlFor={id}
            className="text-[13px] font-semibold text-black tracking-tight"
          >
            {label}
          </label>
          {hint && (
            <span className="text-[12px] text-[#7A7A88] font-normal">
              {hint}
            </span>
          )}
        </div>
      )}
      <div className="relative flex items-center">
        {icon && (
          <div className="absolute left-3.5 text-[#7A7A88] pointer-events-none flex items-center justify-center">
            {icon}
          </div>
        )}
        <input
          id={id}
          type={inputType}
          className={`w-full bg-white border ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-500/15"
              : "border-[#E2DEEA] focus:border-[#713FFF] focus:ring-[#713FFF]/15"
          } rounded-[10px] text-[14px] text-black placeholder:text-[#9E9EA7] ${
            icon ? "pl-10" : "pl-3.5"
          } ${
            isPassword ? "pr-10" : "pr-3.5"
          } py-2.5 sm:py-3 outline-none transition-all duration-150 focus:ring-3 ${className}`}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 text-[#7A7A88] hover:text-black focus:outline-none p-1 rounded transition-colors"
            tabIndex={-1}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            )}
          </button>
        )}
      </div>
      {error && <span className="text-[12px] text-red-500 font-medium">{error}</span>}
    </div>
  );
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  id: string;
  options: string[] | { label: string; value: string }[];
  hint?: string;
  error?: string;
  icon?: React.ReactNode;
  wrapperClassName?: string;
}

export function Select({
  label,
  id,
  options,
  hint,
  error,
  icon,
  className = "",
  wrapperClassName = "",
  ...props
}: SelectProps) {
  return (
    <div className={`flex flex-col gap-1.5 mb-4 ${wrapperClassName}`}>
      {label && (
        <div className="flex items-center justify-between">
          <label
            htmlFor={id}
            className="text-[13px] font-semibold text-black tracking-tight"
          >
            {label}
          </label>
          {hint && (
            <span className="text-[12px] text-[#7A7A88] font-normal">
              {hint}
            </span>
          )}
        </div>
      )}
      <div className="relative flex items-center">
        {icon && (
          <div className="absolute left-3.5 text-[#7A7A88] pointer-events-none flex items-center justify-center">
            {icon}
          </div>
        )}
        <select
          id={id}
          className={`w-full bg-white border ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-500/15"
              : "border-[#E2DEEA] focus:border-[#713FFF] focus:ring-[#713FFF]/15"
          } rounded-[10px] text-[14px] text-black placeholder:text-[#9E9EA7] ${
            icon ? "pl-10" : "pl-3.5"
          } pr-9 py-2.5 sm:py-3 outline-none transition-all duration-150 focus:ring-3 appearance-none cursor-pointer ${className}`}
          {...props}
        >
          {options.map((opt) => {
            const val = typeof opt === "string" ? opt : opt.value;
            const lbl = typeof opt === "string" ? opt : opt.label;
            return (
              <option key={val} value={val}>
                {lbl}
              </option>
            );
          })}
        </select>
        <div className="absolute right-3.5 pointer-events-none text-[#7A7A88]">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {error && <span className="text-[12px] text-red-500 font-medium">{error}</span>}
    </div>
  );
}

interface ChipRadioProps {
  label: string;
  name?: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  wrapperClassName?: string;
}

export function ChipRadio({
  label,
  options,
  value,
  onChange,
  wrapperClassName = "",
}: ChipRadioProps) {
  return (
    <div className={`flex flex-col gap-1.5 mb-4 ${wrapperClassName}`}>
      <label className="text-[13px] font-semibold text-black tracking-tight">
        {label}
      </label>
      <div className="flex flex-wrap items-center gap-2 pt-0.5">
        {options.map((opt) => {
          const isSelected = value === opt;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onChange(opt)}
              className={`px-3.5 py-1.5 rounded-[8px] text-[13px] font-medium transition-all duration-150 cursor-pointer ${
                isSelected
                  ? "bg-black text-white shadow-xs"
                  : "bg-[#F4F2FA] text-[#4C4C58] hover:bg-[#EBE7F7] border border-[#E2DEEA]"
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function FormMessage({
  children,
  type = "info",
}: {
  children?: React.ReactNode;
  type?: "info" | "success" | "error";
}) {
  if (!children) return null;

  const isSuccess =
    type === "success" ||
    (typeof children === "string" &&
      (children.toLowerCase().includes("ready") ||
        children.toLowerCase().includes("success") ||
        children.toLowerCase().includes("created") ||
        children.toLowerCase().includes("sent")));

  return (
    <div
      className={`p-3.5 my-3 rounded-[10px] text-[13px] flex items-start gap-2.5 leading-snug animate-in fade-in duration-200 ${
        isSuccess
          ? "bg-[#F2EEFD] text-[#4C1D95] border border-[#713FFF]/25"
          : "bg-red-50 text-red-700 border border-red-200"
      }`}
    >
      {isSuccess ? (
        <svg className="w-4 h-4 text-[#713FFF] flex-none mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="w-4 h-4 text-red-500 flex-none mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )}
      <span>{children}</span>
    </div>
  );
}

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  id: string;
  hint?: string;
  error?: string;
  wrapperClassName?: string;
}

export function TextArea({
  label,
  id,
  hint,
  error,
  className = "",
  wrapperClassName = "",
  ...props
}: TextAreaProps) {
  return (
    <div className={`flex flex-col gap-1.5 mb-4 ${wrapperClassName}`}>
      {label && (
        <div className="flex items-center justify-between">
          <label
            htmlFor={id}
            className="text-[13px] font-semibold text-black tracking-tight"
          >
            {label}
          </label>
          {hint && (
            <span className="text-[12px] text-[#7A7A88] font-normal">
              {hint}
            </span>
          )}
        </div>
      )}
      <textarea
        id={id}
        rows={4}
        className={`w-full bg-white border ${
          error
            ? "border-red-500 focus:border-red-500 focus:ring-red-500/15"
            : "border-[#E2DEEA] focus:border-[#713FFF] focus:ring-[#713FFF]/15"
        } rounded-[10px] text-[14px] text-black placeholder:text-[#9E9EA7] p-3.5 outline-none transition-all duration-150 focus:ring-3 resize-y ${className}`}
        {...props}
      />
      {error && <span className="text-[12px] text-red-500 font-medium">{error}</span>}
    </div>
  );
}
