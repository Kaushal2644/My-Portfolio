"use client";

export function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-cyan-400 ${className}`}
    >
      {children}
    </span>
  );
}
