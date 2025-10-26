"use client";

import { useCallback, useEffect, useState } from "react";
import { useMobileLikeLandscape } from "@/hooks/useMobileLikeLandscape";

type ViewportInfo = {
  iw: number;
  ih: number;
  vw?: number;
  vh?: number;
  landscape: boolean;
  coarse: boolean;
  hoverNone: boolean;
};

export function DebugViewportInfo() {
  const [info, setInfo] = useState<ViewportInfo>(() => ({
    iw: typeof window !== "undefined" ? window.innerWidth : 0,
    ih: typeof window !== "undefined" ? window.innerHeight : 0,
    vw: typeof window !== "undefined" && (window as any).visualViewport ? (window as any).visualViewport.width : undefined,
    vh: typeof window !== "undefined" && (window as any).visualViewport ? (window as any).visualViewport.height : undefined,
    landscape: typeof window !== "undefined" ? window.matchMedia("(orientation: landscape)").matches : false,
    coarse: typeof window !== "undefined" ? window.matchMedia("(pointer: coarse)").matches : false,
    hoverNone: typeof window !== "undefined" ? window.matchMedia("(hover: none)").matches : false,
  }));

  const isMLH = useMobileLikeLandscape();

  const update = useCallback(() => {
    const vv = (typeof window !== "undefined" && (window as any).visualViewport) as VisualViewport | undefined;
    const next: ViewportInfo = {
      iw: typeof window !== "undefined" ? window.innerWidth : 0,
      ih: typeof window !== "undefined" ? window.innerHeight : 0,
      vw: vv?.width,
      vh: vv?.height,
      landscape: typeof window !== "undefined" ? window.matchMedia("(orientation: landscape)").matches : false,
      coarse: typeof window !== "undefined" ? window.matchMedia("(pointer: coarse)").matches : false,
      hoverNone: typeof window !== "undefined" ? window.matchMedia("(hover: none)").matches : false,
    };
    setInfo(next);
    // Console debug for each change
    try {
      // eslint-disable-next-line no-console
      console.log("[ViewportDebug]", { ...next, isMobileLikeLandscape: isMLH });
    } catch {}
  }, [isMLH]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    update();
    const onResize = () => update();
    const onOrientation = () => update();
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onOrientation);
    const vv = (window as any).visualViewport as VisualViewport | undefined;
    if (vv) vv.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onOrientation);
      if (vv) vv.removeEventListener("resize", onResize);
    };
  }, [update]);

  return (
    <div className="pointer-events-none fixed top-2 right-2 z-50 bg-black/70 text-white text-[10px] sm:text-xs rounded-md px-2 py-1 whitespace-pre font-mono leading-4 shadow-lg border border-white/10">
      {`inner: ${info.iw}x${info.ih}\nvisual: ${info.vw ?? '-'}x${info.vh ?? '-'}\nlandscape: ${info.landscape ? 'yes' : 'no'}\ncoarse: ${info.coarse ? 'yes' : 'no'} | hover:none: ${info.hoverNone ? 'yes' : 'no'}\nMLH: ${isMLH ? 'true' : 'false'}`}
    </div>
  );
}

export default DebugViewportInfo;
