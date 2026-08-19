"use client";

import React, { useState, useRef, useEffect } from "react";

interface GateCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GateCalculator({ isOpen, onClose }: GateCalculatorProps) {
  const [expression, setExpression] = useState("");
  const [displayValue, setDisplayValue] = useState("0");
  const [isRad, setIsRad] = useState(false); // Default is Deg in GATE
  const [memory, setMemory] = useState<number>(0);
  const [hasNewInput, setHasNewInput] = useState(true);

  // Dragging state
  const [position, setPosition] = useState({ x: 120, y: 80 });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef<{ startX: number; startY: number; posX: number; posY: number }>({
    startX: 0,
    startY: 0,
    posX: 120,
    posY: 80,
  });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      posX: position.x,
      posY: position.y,
    };
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - dragRef.current.startX;
      const dy = e.clientY - dragRef.current.startY;
      setPosition({
        x: Math.max(10, Math.min(window.innerWidth - 480, dragRef.current.posX + dx)),
        y: Math.max(10, Math.min(window.innerHeight - 350, dragRef.current.posY + dy)),
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  if (!isOpen) return null;

  // --- Calculator Logic ---
  const handleDigit = (digit: string) => {
    if (hasNewInput || displayValue === "0") {
      setDisplayValue(digit);
      setHasNewInput(false);
    } else {
      setDisplayValue(displayValue + digit);
    }
  };

  const handleDot = () => {
    if (hasNewInput) {
      setDisplayValue("0.");
      setHasNewInput(false);
    } else if (!displayValue.includes(".")) {
      setDisplayValue(displayValue + ".");
    }
  };

  const handleClear = () => {
    setDisplayValue("0");
    setExpression("");
    setHasNewInput(true);
  };

  const handleBackspace = () => {
    if (displayValue.length > 1) {
      setDisplayValue(displayValue.slice(0, -1));
    } else {
      setDisplayValue("0");
      setHasNewInput(true);
    }
  };

  const handleToggleSign = () => {
    if (displayValue !== "0") {
      setDisplayValue(displayValue.startsWith("-") ? displayValue.slice(1) : "-" + displayValue);
    }
  };

  const handleOperator = (op: string) => {
    setExpression(`${displayValue} ${op} `);
    setHasNewInput(true);
  };

  const toRad = (val: number) => (isRad ? val : (val * Math.PI) / 180);
  const fromRad = (val: number) => (isRad ? val : (val * 180) / Math.PI);

  const handleMathFunc = (fn: string) => {
    const current = parseFloat(displayValue);
    if (isNaN(current)) return;

    let res = 0;
    switch (fn) {
      case "sin":
        res = Math.sin(toRad(current));
        break;
      case "cos":
        res = Math.cos(toRad(current));
        break;
      case "tan":
        res = Math.tan(toRad(current));
        break;
      case "asin":
        res = fromRad(Math.asin(current));
        break;
      case "acos":
        res = fromRad(Math.acos(current));
        break;
      case "atan":
        res = fromRad(Math.atan(current));
        break;
      case "sinh":
        res = Math.sinh(current);
        break;
      case "cosh":
        res = Math.cosh(current);
        break;
      case "tanh":
        res = Math.tanh(current);
        break;
      case "asinh":
        res = Math.asinh(current);
        break;
      case "acosh":
        res = Math.acosh(current);
        break;
      case "atanh":
        res = Math.atanh(current);
        break;
      case "ln":
        res = Math.log(current);
        break;
      case "log":
        res = Math.log10(current);
        break;
      case "log2":
        res = Math.log2(current);
        break;
      case "sqrt":
        res = Math.sqrt(current);
        break;
      case "cbrt":
        res = Math.cbrt(current);
        break;
      case "sq":
        res = current * current;
        break;
      case "cube":
        res = current * current * current;
        break;
      case "exp":
        res = Math.exp(current);
        break;
      case "10x":
        res = Math.pow(10, current);
        break;
      case "inv":
        res = 1 / current;
        break;
      case "abs":
        res = Math.abs(current);
        break;
      case "fact":
        res = factorial(Math.floor(current));
        break;
      case "pi":
        res = Math.PI;
        break;
      case "e":
        res = Math.E;
        break;
      default:
        break;
    }

    const rounded = Math.round(res * 1e10) / 1e10;
    setDisplayValue(String(rounded));
    setHasNewInput(true);
  };

  const factorial = (n: number): number => {
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    let val = 1;
    for (let i = 2; i <= Math.min(n, 100); i++) val *= i;
    return val;
  };

  const handleEqual = () => {
    if (!expression) return;
    try {
      const fullExpr = `${expression} ${displayValue}`
        .replace(/×/g, "*")
        .replace(/÷/g, "/")
        .replace(/mod/g, "%")
        .replace(/\^/g, "**");

      // Safe arithmetic evaluation
      const sanitized = fullExpr.replace(/[^0-9+\-*/().%\s]/g, "");
      const result = Function(`"use strict"; return (${sanitized})`)();
      const rounded = Math.round(Number(result) * 1e10) / 1e10;

      setExpression(`${fullExpr} =`);
      setDisplayValue(String(rounded));
      setHasNewInput(true);
    } catch {
      setDisplayValue("Error");
      setHasNewInput(true);
    }
  };

  // Memory functions
  const handleMemory = (action: string) => {
    const val = parseFloat(displayValue) || 0;
    switch (action) {
      case "MC":
        setMemory(0);
        break;
      case "MR":
        setDisplayValue(String(memory));
        setHasNewInput(true);
        break;
      case "MS":
        setMemory(val);
        setHasNewInput(true);
        break;
      case "M+":
        setMemory((prev) => prev + val);
        setHasNewInput(true);
        break;
      case "M-":
        setMemory((prev) => prev - val);
        setHasNewInput(true);
        break;
    }
  };

  return (
    <div
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      className="fixed z-50 w-[460px] bg-[#f0f0f0] border-2 border-[#337ab7] rounded-[6px] shadow-2xl overflow-hidden font-sans select-none"
    >
      {/* ── Title Bar (Draggable) ─────────────────────────────────── */}
      <div
        onMouseDown={handleMouseDown}
        className="bg-[#337ab7] text-white px-3 py-1.5 flex items-center justify-between cursor-move text-[12px] font-bold"
      >
        <span>Scientific Calculator</span>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => alert("SkillReady Scientific & Engineering Calculator: Supports real arithmetic, trig, hyperbolic, log, and memory functions.")}
            className="text-[11px] underline hover:text-white/80 cursor-pointer"
          >
            Help
          </button>
          <button
            type="button"
            onClick={onClose}
            className="text-white hover:bg-red-600 px-1.5 rounded font-bold cursor-pointer"
          >
            ✕
          </button>
        </div>
      </div>

      {/* ── Screen Displays ───────────────────────────────────────── */}
      <div className="p-2.5 bg-[#e4e4e4] border-b border-[#ccc]">
        <div className="h-4 text-[10px] text-[#666] font-mono text-right truncate">
          {expression}
        </div>
        <div className="bg-white border border-[#999] rounded px-2.5 py-1 text-right font-mono text-[20px] font-bold text-black overflow-x-auto">
          {displayValue}
        </div>
      </div>

      {/* ── Button Grid ───────────────────────────────────────────── */}
      <div className="p-2 bg-[#f0f0f0] space-y-1.5 text-[11px]">
        {/* Row 1: Mode & Memory */}
        <div className="grid grid-cols-7 gap-1">
          <button
            type="button"
            onClick={() => handleOperator("mod")}
            className="calc-btn"
          >
            mod
          </button>

          <div className="col-span-2 flex items-center justify-center gap-2 bg-[#e0e0e0] border border-[#bbb] rounded text-[10px]">
            <label className="flex items-center gap-1 cursor-pointer">
              <input
                type="radio"
                name="angle_mode"
                checked={!isRad}
                onChange={() => setIsRad(false)}
                className="w-3 h-3 accent-[#337ab7]"
              />
              <span>Deg</span>
            </label>
            <label className="flex items-center gap-1 cursor-pointer">
              <input
                type="radio"
                name="angle_mode"
                checked={isRad}
                onChange={() => setIsRad(true)}
                className="w-3 h-3 accent-[#337ab7]"
              />
              <span>Rad</span>
            </label>
          </div>

          <button type="button" onClick={() => handleMemory("MC")} className="calc-btn">MC</button>
          <button type="button" onClick={() => handleMemory("MR")} className="calc-btn">MR</button>
          <button type="button" onClick={() => handleMemory("MS")} className="calc-btn">MS</button>
          <button type="button" onClick={() => handleMemory("M+")} className="calc-btn">M+</button>
        </div>

        {/* Row 2: Hyperbolic, Exp & Control */}
        <div className="grid grid-cols-11 gap-1">
          <button type="button" onClick={() => handleMathFunc("sinh")} className="calc-btn">sinh</button>
          <button type="button" onClick={() => handleMathFunc("cosh")} className="calc-btn">cosh</button>
          <button type="button" onClick={() => handleMathFunc("tanh")} className="calc-btn">tanh</button>
          <button type="button" onClick={() => handleMathFunc("exp")} className="calc-btn">Exp</button>
          <button type="button" onClick={() => handleDigit("(")} className="calc-btn">(</button>
          <button type="button" onClick={() => handleDigit(")")} className="calc-btn">)</button>
          <button type="button" onClick={handleBackspace} className="calc-btn-red">←</button>
          <button type="button" onClick={handleClear} className="calc-btn-red">C</button>
          <button type="button" onClick={handleToggleSign} className="calc-btn-red">+/-</button>
          <button type="button" onClick={() => handleMathFunc("sqrt")} className="calc-btn">√</button>
          <button type="button" onClick={() => handleMemory("M-")} className="calc-btn">M-</button>
        </div>

        {/* Row 3: Inverse Hyperbolic, Logarithms & Numbers */}
        <div className="grid grid-cols-11 gap-1">
          <button type="button" onClick={() => handleMathFunc("asinh")} className="calc-btn text-[10px]">sinh⁻¹</button>
          <button type="button" onClick={() => handleMathFunc("acosh")} className="calc-btn text-[10px]">cosh⁻¹</button>
          <button type="button" onClick={() => handleMathFunc("atanh")} className="calc-btn text-[10px]">tanh⁻¹</button>
          <button type="button" onClick={() => handleMathFunc("log2")} className="calc-btn text-[10px]">log₂x</button>
          <button type="button" onClick={() => handleMathFunc("ln")} className="calc-btn">ln</button>
          <button type="button" onClick={() => handleMathFunc("log")} className="calc-btn">log</button>
          <button type="button" onClick={() => handleDigit("7")} className="calc-num">7</button>
          <button type="button" onClick={() => handleDigit("8")} className="calc-num">8</button>
          <button type="button" onClick={() => handleDigit("9")} className="calc-num">9</button>
          <button type="button" onClick={() => handleOperator("/")} className="calc-op">/</button>
          <button type="button" onClick={() => handleOperator("%")} className="calc-op">%</button>
        </div>

        {/* Row 4: Constants, Powers & Numbers */}
        <div className="grid grid-cols-11 gap-1">
          <button type="button" onClick={() => handleMathFunc("pi")} className="calc-btn">π</button>
          <button type="button" onClick={() => handleMathFunc("e")} className="calc-btn">e</button>
          <button type="button" onClick={() => handleMathFunc("fact")} className="calc-btn">n!</button>
          <button type="button" onClick={() => handleOperator("^")} className="calc-btn text-[10px]">xʸ</button>
          <button type="button" onClick={() => handleMathFunc("exp")} className="calc-btn">eˣ</button>
          <button type="button" onClick={() => handleMathFunc("10x")} className="calc-btn text-[10px]">10ˣ</button>
          <button type="button" onClick={() => handleDigit("4")} className="calc-num">4</button>
          <button type="button" onClick={() => handleDigit("5")} className="calc-num">5</button>
          <button type="button" onClick={() => handleDigit("6")} className="calc-num">6</button>
          <button type="button" onClick={() => handleOperator("*")} className="calc-op">*</button>
          <button type="button" onClick={() => handleMathFunc("inv")} className="calc-op text-[10px]">1/x</button>
        </div>

        {/* Row 5: Trig, Squares & Numbers */}
        <div className="grid grid-cols-11 gap-1">
          <button type="button" onClick={() => handleMathFunc("sin")} className="calc-btn">sin</button>
          <button type="button" onClick={() => handleMathFunc("cos")} className="calc-btn">cos</button>
          <button type="button" onClick={() => handleMathFunc("tan")} className="calc-btn">tan</button>
          <button type="button" onClick={() => handleMathFunc("sq")} className="calc-btn">x²</button>
          <button type="button" onClick={() => handleMathFunc("cube")} className="calc-btn">x³</button>
          <button type="button" onClick={() => handleMathFunc("cbrt")} className="calc-btn">³√x</button>
          <button type="button" onClick={() => handleDigit("1")} className="calc-num">1</button>
          <button type="button" onClick={() => handleDigit("2")} className="calc-num">2</button>
          <button type="button" onClick={() => handleDigit("3")} className="calc-num">3</button>
          <button type="button" onClick={() => handleOperator("-")} className="calc-op">-</button>
          <button
            type="button"
            onClick={handleEqual}
            className="row-span-2 bg-[#28a745] hover:bg-[#218838] active:scale-98 text-white font-bold text-[16px] rounded border border-[#1e7e34] flex items-center justify-center cursor-pointer shadow-xs"
          >
            =
          </button>
        </div>

        {/* Row 6: Inverse Trig, Roots & Zero */}
        <div className="grid grid-cols-11 gap-1">
          <button type="button" onClick={() => handleMathFunc("asin")} className="calc-btn text-[10px]">sin⁻¹</button>
          <button type="button" onClick={() => handleMathFunc("acos")} className="calc-btn text-[10px]">cos⁻¹</button>
          <button type="button" onClick={() => handleMathFunc("atan")} className="calc-btn text-[10px]">tan⁻¹</button>
          <button type="button" onClick={() => handleMathFunc("abs")} className="calc-btn">|x|</button>
          <button type="button" onClick={() => handleDigit("0")} className="col-span-2 calc-num">0</button>
          <button type="button" onClick={handleDot} className="calc-num font-bold">.</button>
          <button type="button" onClick={() => handleOperator("+")} className="calc-op">+</button>
        </div>
      </div>

      <style jsx>{`
        .calc-btn {
          height: 26px;
          background: #e9e9e9;
          border: 1px solid #c0c0c0;
          border-radius: 3px;
          font-weight: 600;
          color: #333;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .calc-btn:hover {
          background: #d8d8d8;
        }
        .calc-btn:active {
          background: #c8c8c8;
        }
        .calc-btn-red {
          height: 26px;
          background: #e55353;
          border: 1px solid #d93737;
          border-radius: 3px;
          font-weight: bold;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .calc-btn-red:hover {
          background: #d93737;
        }
        .calc-num {
          height: 26px;
          background: #ffffff;
          border: 1px solid #b8b8b8;
          border-radius: 3px;
          font-weight: bold;
          color: #111;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .calc-num:hover {
          background: #f0f0f0;
        }
        .calc-op {
          height: 26px;
          background: #e0e0e0;
          border: 1px solid #b8b8b8;
          border-radius: 3px;
          font-weight: bold;
          color: #222;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .calc-op:hover {
          background: #d0d0d0;
        }
      `}</style>
    </div>
  );
}
