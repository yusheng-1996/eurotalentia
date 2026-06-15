"use client";

import { useEffect, useRef, useState } from "react";

const FORM_SRC = "https://formcraft.app/form/8eaf4ef7-3b52-48eb-a2e5-af81c92e5b6f";
const FORM_ORIGIN = "https://formcraft.app";
const SUBMITTED_FLAG = "eurotalentia_form_submitted";

type Status = "idle" | "submitting" | "received";

/**
 * Runs conversion tracking exactly once. Wire up real pixels/analytics here.
 * Kept defensive so it never throws if a tag isn't present.
 */
function runConversionTracking() {
  try {
    const w = window as unknown as {
      gtag?: (...args: unknown[]) => void;
      fbq?: (...args: unknown[]) => void;
      dataLayer?: unknown[];
    };
    w.dataLayer?.push({ event: "application_submitted" });
    w.gtag?.("event", "generate_lead", { form: "eurotalentia_apply" });
    w.fbq?.("track", "Lead");
  } catch {
    /* tracking must never break the redirect flow */
  }
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
  // Guard against handling more than one successful submission.
  const hasSubmittedRef = useRef(false);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    // If the user already submitted in this session and then refreshed,
    // keep the guard closed so tracking/redirect never fire twice.
    if (sessionStorage.getItem(SUBMITTED_FLAG) === "true") {
      hasSubmittedRef.current = true;
    }

    const handleMessage = (event: MessageEvent) => {
      // Only trust messages from FormCraft.
      if (event.origin !== FORM_ORIGIN) return;

      const data = event.data;
      if (!data || typeof data !== "object") return;

      // 1) Auto-resize the iframe to fit its content.
      if (typeof data.iframeHeight === "number" && iframeRef.current) {
        iframeRef.current.style.height = `${data.iframeHeight}px`;
      }

      // 2) Handle a successful submission.
      const type = data.type ?? data.event;
      if (type !== "rf-submitted") return;

      // Already handled (including after a refresh) — ignore.
      if (hasSubmittedRef.current) return;
      hasSubmittedRef.current = true;
      try {
        sessionStorage.setItem(SUBMITTED_FLAG, "true");
      } catch {
        /* sessionStorage may be unavailable in some privacy modes */
      }

      setStatus("submitting");

      // Run tracking exactly once.
      runConversionTracking();

      // Resolve redirect + optional WhatsApp targets from the payload.
      const payload = (data.data ?? {}) as {
        thankYouUrl?: string;
        whatsappUrl?: string;
        whatsapp?: string;
      };
      const thankYouUrl = toAbsoluteUrl(payload.thankYouUrl || "/thank-you");
      const whatsappUrl = payload.whatsappUrl || payload.whatsapp || "";

      setStatus("received");

      const TRACK_DELAY = 600; // let async tags fire before navigating

      if (isMobileDevice()) {
        // Mobile: go to WhatsApp first (same tab), then thank-you afterwards.
        if (whatsappUrl) {
          window.location.href = whatsappUrl;
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
        if (whatsappUrl) {
          window.open(whatsappUrl, "_blank", "noopener,noreferrer");
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

      {status !== "idle" && (
        <div
          className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-brand/20 bg-brand-tint px-4 py-3 text-sm font-medium text-brand-dark"
          role="status"
          aria-live="polite"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-brand" />
          {status === "submitting"
            ? "Submitting…"
            : "Application received. Redirecting…"}
        </div>
      )}
    </div>
  );
}
