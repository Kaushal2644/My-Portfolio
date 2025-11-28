"use client";

export function Textarea({ className = "", ...props }) {
  return (
    <textarea
      className={`w-full px-4 py-2 rounded-lg border text-sm bg-white dark:bg-slate-900 dark:text-white border-gray-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 transition h-32 resize-none ${className}`}
      {...props}
    />
  );
}
