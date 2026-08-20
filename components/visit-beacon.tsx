"use client";

import { useEffect } from "react";

const SESSION_FLAG = "ssk-visit-recorded";

/**
 * Records one visit per browser session. Sits in the root layout so every
 * route counts, and stays silent when the store is not configured.
 */
export function VisitBeacon() {
  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_FLAG)) return;
      sessionStorage.setItem(SESSION_FLAG, "1");
    } catch {
      // Private mode or storage disabled — record the visit anyway.
    }

    void fetch("/api/visit", { method: "POST", keepalive: true }).catch(() => {
      // Analytics must never surface an error to the visitor.
    });
  }, []);

  return null;
}
