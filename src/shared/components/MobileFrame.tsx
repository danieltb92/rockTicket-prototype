import { type ReactNode, useRef, useState, useEffect } from "react";
import { DevResetButton } from "./DevResetButton";
import { useIsMobile } from "@/shared/hooks/useIsMobile";

const PHONE_WIDTH = 390;
const PHONE_HEIGHT = 844;

export function MobileFrame({ children }: { children: ReactNode }) {
  const isMobile = useIsMobile();
  const scaleRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = scaleRef.current;
    if (!el) return;

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      const s = Math.min(width / PHONE_WIDTH, height / PHONE_HEIGHT, 1);
      setScale(s);
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // MODO MÓVIL REAL: pantalla completa, sin marco, sin footer, sin StatusBar simulada
  if (isMobile) {
    return (
      <div
        className="relative min-h-screen w-full"
        style={{
          height: "100dvh",
          width: "100vw",
          paddingTop: "env(safe-area-inset-top, 0)",
          paddingBottom: "env(safe-area-inset-bottom, 0)",
          paddingLeft: "env(safe-area-inset-left, 0)",
          paddingRight: "env(safe-area-inset-right, 0)",
        }}
      >
        <div className="relative flex flex-col h-full w-full bg-background">
          {children}
        </div>
      </div>
    );
  }

  // MODO DESKTOP (DEMO): marco escalado + footer
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col w-full h-full">
      <div
        ref={scaleRef}
        className="flex-1 flex items-center justify-center min-h-0 p-4"
      >
        <div
          className="relative overflow-hidden shrink-0"
          style={{
            width: PHONE_WIDTH,
            height: PHONE_HEIGHT,
            borderRadius: 40,
            boxShadow: "0 0 0 1px rgba(255,255,255,0.08)",
            transform: `scale(${scale})`,
            transformOrigin: "center center",
          }}
        >
          {children}
        </div>
      </div>
      <div className="flex-shrink-0 flex items-center justify-center gap-4 px-4 pb-4 pt-2">
        <span className="text-white/30 text-[11px] tracking-wide pointer-events-none select-none">
          Scroll horizontal: Shift + scroll
        </span>
        <DevResetButton />
      </div>
    </div>
  );
}