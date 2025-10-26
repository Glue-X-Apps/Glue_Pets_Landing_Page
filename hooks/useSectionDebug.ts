"use client";

import { useCallback, useEffect, useRef } from "react";
import { useMobileLikeLandscape } from "@/hooks/useMobileLikeLandscape";

/**
 * useSectionDebug
 * Logs detailed diagnostics to the console for a section container.
 * - Viewport info (inner + visualViewport)
 * - Media queries: orientation, min-width breakpoints
 * - Pointer/hover traits
 * - MLH (mobile-like landscape) status
 * - Section sizes: clientHeight, scrollHeight, offsetHeight, scrollable
 * - Computed styles: overflowY, justifyContent
 */
export function useSectionDebug(sectionName: string, isActive: boolean) {
  const ref = useRef<HTMLElement | null>(null);
  const isMLH = useMobileLikeLandscape();

  const compute = useCallback(() => {
    const el = ref.current;
    const vv = (typeof window !== "undefined" && (window as any).visualViewport) as VisualViewport | undefined;

    const iw = typeof window !== "undefined" ? window.innerWidth : 0;
    const ih = typeof window !== "undefined" ? window.innerHeight : 0;
    const vw = vv?.width;
    const vh = vv?.height;

    const orientationLandscape = typeof window !== "undefined" ? window.matchMedia("(orientation: landscape)").matches : false;
    const coarse = typeof window !== "undefined" ? window.matchMedia("(pointer: coarse)").matches : false;
    const hoverNone = typeof window !== "undefined" ? window.matchMedia("(hover: none)").matches : false;

    // Common Tailwind breakpoints
    const mq_sm = typeof window !== "undefined" ? window.matchMedia("(min-width: 640px)").matches : false;
    const mq_md = typeof window !== "undefined" ? window.matchMedia("(min-width: 768px)").matches : false;
    const mq_lg = typeof window !== "undefined" ? window.matchMedia("(min-width: 1024px)").matches : false;
    const mq_xl = typeof window !== "undefined" ? window.matchMedia("(min-width: 1280px)").matches : false;

    let clientHeight = 0;
    let scrollHeight = 0;
    let offsetHeight = 0;
    let overflowY: string | undefined = undefined;
    let justifyContent: string | undefined = undefined;
    let scrollable = false;

    if (el) {
      clientHeight = el.clientHeight;
      scrollHeight = el.scrollHeight;
      offsetHeight = el.offsetHeight;
      const styles = window.getComputedStyle(el);
      overflowY = styles.overflowY;
      justifyContent = styles.justifyContent;
      scrollable = scrollHeight > clientHeight + 1; // 1px tolerance
    }

    try {
      // eslint-disable-next-line no-console
      console.log("[SectionDebug]", {
        section: sectionName,
        isActive,
        isMobileLikeLandscape: isMLH,
        viewport: { inner: { w: iw, h: ih }, visual: { w: vw, h: vh } },
        media: {
          orientationLandscape,
          breakpoints: { sm: mq_sm, md: mq_md, lg: mq_lg, xl: mq_xl },
          traits: { coarse, hoverNone },
        },
        sectionBox: { clientHeight, scrollHeight, offsetHeight, scrollable, overflowY, justifyContent },
      });
    } catch {}
  }, [isMLH, isActive, sectionName]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    compute();
    const onResize = () => compute();
    const onOrientation = () => compute();
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onOrientation);
    const vv = (window as any).visualViewport as VisualViewport | undefined;
    if (vv) vv.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onOrientation);
      if (vv) vv.removeEventListener("resize", onResize);
    };
  }, [compute]);

  useEffect(() => {
    // Re-log when MLH or active state changes
    compute();
  }, [compute, isMLH, isActive]);

  return ref;
}

export default useSectionDebug;
