/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars, react-hooks/set-state-in-effect */
import React from "react";

export const Field = ({ label, id, ...props }: any) => (
  <div className="field">
    <label htmlFor={id}>{label}</label>
    <input id={id} {...props} />
  </div>
);

export const Select = ({ label, id, options, ...props }: any) => (
  <div className="field">
    <label htmlFor={id}>{label}</label>
    <select id={id} {...props}>
      {options.map((o: string) => <option key={o} value={o}>{o}</option>)}
    </select>
  </div>
);

export const ChipRadio = ({ label, name, options, value, onChange }: any) => (
  <div className="fgroup" style={{ marginBottom: "1rem" }}>
    <label style={{ display: "block", fontSize: "0.86rem", fontWeight: 600, marginBottom: "0.5rem" }}>{label}</label>
    <div className="chips">
      {options.map((o: string) => (
        <span 
          key={o} 
          className={value === o ? "on" : ""} 
          onClick={() => onChange(o)}
          style={{ cursor: "pointer" }}
        >
          {o}
        </span>
      ))}
    </div>
  </div>
);

export const FormMessage = ({ children }: any) => {
  if (!children) return null;
  return <div className="form-msg">{children}</div>;
};

export const TextArea = ({ label, id, ...props }: any) => (
  <div className="field">
    <label htmlFor={id}>{label}</label>
    <textarea id={id} {...props} />
  </div>
);
