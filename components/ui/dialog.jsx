"use client";

import React, { useState } from "react";

export function Dialog({ open, onOpenChange, children, className = "" }) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => onOpenChange(false)}
        >
          <div
            className={`bg-white dark:bg-slate-900 rounded-xl shadow-xl w-full max-h-[90vh] flex flex-col overflow-hidden ${className || "max-w-lg"}`.trim()}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export function DialogContent({ children, className = "" }) {
  return <div className={`flex flex-col flex-1 min-h-0 overflow-hidden ${className}`.trim()}>{children}</div>;
}

export function DialogHeader({ children }) {
  return <div className="flex flex-col space-y-2">{children}</div>;
}

export function DialogTitle({ children }) {
  return (
    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
      {children}
    </h2>
  );
}
