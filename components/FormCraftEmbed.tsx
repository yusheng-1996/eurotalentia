"use client";

import { useEffect, useRef, useState } from "react";

const FORM_SRC = "https://formcraft.app/form/8eaf4ef7-3b52-48eb-a2e5-af81c92e5b6f";
const FORM_ORIGIN = "https://formcraft.app";

type Status = "idle" | "received";

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

/**
 * Embeds the FormCraft application form.
 *
 * Privacy / Google Ads compliance: this component sets NO cookies and loads
 * NO analytics, remarketing or advertising scripts. The duplicate-submission
 * guard is kept purely in-memory (a React ref) so nothing is written to
 * cookies, localStorage or sessionStorage.
 */
export default function FormCraftEmbed() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  // In-memory guard only — no web storage, no cookies.
  const hasSubmittedRef = useRef(false);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
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

      // Prevent the parent page from handling more than one submission /
      // firing the redirect twice.
      if (hasSubmittedRef.current) return;
      hasSubmittedRef.current = true;

      setStatus("received");

      // Resolve the thank-you destination (no tracking, no cookies).
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

      const REDIRECT_DELAY = 600;

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
          }, REDIRECT_DELAY);
        }
      } else {
        // Desktop: open WhatsApp in a new tab, then redirect this tab.
        if (hasWhatsapp) {
          window.open(redirect, "_blank", "noopener,noreferrer");
        }
        window.setTimeout(() => {
          window.location.href = thankYouUrl;
        }, REDIRECT_DELAY);
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
