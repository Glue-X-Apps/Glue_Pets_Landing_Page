"use client";

import { useEffect, useMemo, useState } from "react";

/**
 * Detects a "mobile-like" landscape scenario robustly:
 * - Device has coarse pointer and no hover (typical phones)
 * - Orientation is landscape
 * - Visual viewport height (or window height) is below a threshold (default 520px)
 *
 * This avoids misclassifying tablets/desktop in landscape while correctly
 * capturing phone landscape cases where width is large but height is small.
 */
export function useMobileLikeLandscape(threshold = 520) {
  const [isMobileLikeLandscape, setIsMobileLikeLandscape] = useState(false);

  const mediaQueries = useMemo(() => {
    if (typeof window === "undefined") return null;
    return {
      coarse: window.matchMedia("(hover: none) and (pointer: coarse) \0".trim()),
      landscape: window.matchMedia("(orientation: landscape)"),
    } as const;
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const compute = () => {
      const coarse = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
      const landscape = window.matchMedia("(orientation: landscape)").matches;
      const vv = (window as any).visualViewport as VisualViewport | undefined;
      const height = Math.min(window.innerHeight || 0, vv?.height || Number.POSITIVE_INFINITY);
      const smallHeight = height > 0 && height <= threshold;
      setIsMobileLikeLandscape(Boolean(coarse && landscape && smallHeight));
    };

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
  }, [mediaQueries, threshold]);

  return isMobileLikeLandscape;
}

export default useMobileLikeLandscape;
