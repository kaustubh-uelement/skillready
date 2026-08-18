/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars, react-hooks/set-state-in-effect */
"use client";
import { useState } from "react";

export default function useForm(initialValues: any, config: any) {
  const [values, setValues] = useState(initialValues);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");

  const set = (key: string) => (e: any) => {
    const val = e && e.target ? e.target.value : e;
    setValues((prev: any) => ({ ...prev, [key]: val }));
  };

  const submit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setBusy(true);
    
    // Validate
    if (config.required) {
      for (const req of config.required) {
        if (!values[req.name]) {
          setMessage(`Please provide ${req.label}.`);
          setBusy(false);
          return;
        }
      }
    }

    // Mock submit
    setTimeout(() => {
      setMessage(config.success || "Success!");
      setBusy(false);
    }, 1000);
  };

  return { values, set, busy, message, submit };
}
