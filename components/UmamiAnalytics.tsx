import { useEffect } from "react";

const UMAMI_SCRIPT_SRC = "https://eu.umami.is/script.js";

interface PublicRuntimeConfig {
  umamiToken?: string;
}

export function UmamiAnalytics() {
  useEffect(() => {
    let cancelled = false;

    async function loadUmami() {
      const response = await fetch("/api/runtime-config");

      if (!response.ok) {
        return;
      }

      const { umamiToken } = (await response.json()) as PublicRuntimeConfig;

      if (cancelled || !umamiToken) {
        return;
      }

      const existingScript = document.querySelector(
        `script[src="${UMAMI_SCRIPT_SRC}"][data-website-id="${umamiToken}"]`
      );

      if (existingScript) {
        return;
      }

      const script = document.createElement("script");
      script.defer = true;
      script.src = UMAMI_SCRIPT_SRC;
      script.dataset.websiteId = umamiToken;
      document.head.appendChild(script);
    }

    loadUmami().catch(() => undefined);

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
