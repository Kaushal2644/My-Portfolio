"use client";

export function Card({ children, className = "", ...props }) {
  return (
    <div
      {...props}
      className={`rounded-xl border p-4 bg-white dark:bg-slate-900 shadow ${className}`}
    >
      {children}
    </div>
  );
}
