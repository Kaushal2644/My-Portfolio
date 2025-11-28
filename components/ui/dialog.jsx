"use client";

import React, { useState } from "react";

export function Dialog({ open, onOpenChange, children }) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => onOpenChange(false)}
        >
          <div
            className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-xl w-full max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export function DialogContent({ children }) {
  return <div className="space-y-4">{children}</div>;
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
