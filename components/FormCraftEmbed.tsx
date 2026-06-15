"use client";

import { useEffect, useRef, useState } from "react";

const FORM_SRC = "https://formcraft.app/form/8eaf4ef7-3b52-48eb-a2e5-af81c92e5b6f";
const FORM_ORIGIN = "https://formcraft.app";
const SUBMITTED_FLAG = "eurotalentia_form_submitted";

type Status = "idle" | "received";

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => void;
  }
}

/**
 * Injects a tracking-code HTML snippet and runs it once.
 * - <script> tags are recreated so the browser actually executes them.
 * - Remaining nodes (noscript / img / iframe pixels) are appended to <body>.
 */
function runTrackingCode(html: string) {
  if (!html) return;
  const container = document.createElement("div");
  container.innerHTML = html;

  // Execute scripts (innerHTML-inserted scripts do not run on their own).
  const scripts = Array.from(container.querySelectorAll("script"));
  scripts.forEach((oldScript) => {
    const script = document.createElement("script");
    for (const attr of Array.from(oldScript.attributes)) {
      script.setAttribute(attr.name, attr.value);
    }
    script.text = oldScript.textContent || "";
    document.body.appendChild(script);
    oldScript.remove();
  });

  // Append the remaining markup (noscript pixels, tracking <img>/<iframe>, etc.).
  Array.from(container.childNodes).forEach((node) => {
    document.body.appendChild(node);
  });
}

function isMobileDevice() {
  if (typeof navigator === "undefined") return false;
  return /android|iphone|ipad|ipod|iemobile|blackberry|opera mini/i.test(
    navigator.userAgent.toLowerCase()
  );
}

function toAbsoluteUrl(url: string) {
  if (/^https?:\/\//i.test(url)) return url;
  return `${window.location.origin}${url.startsWith("/") ? "" : "/"}${url}`;
}

export default function FormCraftEmbed() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  // Prevents the parent page from handling more than one rf-submitted.
  const hasSubmittedRef = useRef(false);
  // Ensures the conversion callback fires at most once.
  const conversionFiredRef = useRef(false);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    // If the user already submitted in this session and then refreshed,
    // keep the guards closed so tracking/redirect never fire twice.
    if (sessionStorage.getItem(SUBMITTED_FLAG) === "true") {
      hasSubmittedRef.current = true;
      conversionFiredRef.current = true;
    }

    const handleMessage = (event: MessageEvent) => {
      // Only trust messages coming from FormCraft.
      if (event.origin !== FORM_ORIGIN) return;

      const data = event.data;
      if (!data || typeof data !== "object") return;

      // 1) Auto-resize the iframe to fit its content (does not require submit).
      if (typeof data.iframeHeight === "number" && iframeRef.current) {
        iframeRef.current.style.height = `${data.iframeHeight}px`;
      }

      // 2) Handle a successful submission.
      const type = data.type ?? data.event;
      if (type !== "rf-submitted") return;

      // Already handled (including after a refresh) — ignore extra messages.
      if (hasSubmittedRef.current) return;
      hasSubmittedRef.current = true;
      try {
        sessionStorage.setItem(SUBMITTED_FLAG, "true");
      } catch {
        /* sessionStorage may be unavailable in strict privacy modes */
      }

      setStatus("received");

      // --- Tracking (root-level field, runs once) ---
      if (typeof data.trackingCode === "string") {
        runTrackingCode(data.trackingCode);
      }
      if (!conversionFiredRef.current) {
        conversionFiredRef.current = true;
        if (typeof window.gtag_report_conversion === "function") {
          try {
            window.gtag_report_conversion();
          } catch {
            /* never let a tracking error block the redirect */
          }
        }
      }

      // --- Resolve destinations from root-level fields ---
      const thankYouUrl = toAbsoluteUrl(
        typeof data.thankYouUrl === "string" && data.thankYouUrl
          ? data.thankYouUrl
          : "/thank-you"
      );
      const whatsapp =
        typeof data.whatsapp === "string" || typeof data.whatsapp === "number"
          ? String(data.whatsapp).trim()
          : "";
      const redirect = typeof data.redirect === "string" ? data.redirect : "";
      const hasWhatsapp = whatsapp.length > 0 && redirect.length > 0;

      const TRACK_DELAY = 800; // give async tags time to fire before navigating

      if (isMobileDevice()) {
        // Mobile: open WhatsApp first (same tab), then thank-you afterwards.
        if (hasWhatsapp) {
          window.location.href = redirect;
          window.setTimeout(() => {
            window.location.href = thankYouUrl;
          }, 1500);
        } else {
          window.setTimeout(() => {
            window.location.href = thankYouUrl;
          }, TRACK_DELAY);
        }
      } else {
        // Desktop: open WhatsApp in a new tab, then redirect this tab.
        if (hasWhatsapp) {
          window.open(redirect, "_blank", "noopener,noreferrer");
        }
        window.setTimeout(() => {
          window.location.href = thankYouUrl;
        }, TRACK_DELAY);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className="relative">
      <iframe
        ref={iframeRef}
        id="whatsappForm"
        title="EuroTalentia application form"
        src={FORM_SRC}
        className="w-full"
        style={{ border: "none", minHeight: 500 }}
      />

      {status === "received" && (
        <div
          className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-brand/20 bg-brand-tint px-4 py-3 text-sm font-medium text-brand-dark"
          role="status"
          aria-live="polite"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-brand" />
          Application received. Redirecting…
        </div>
      )}
    </div>
  );
}
