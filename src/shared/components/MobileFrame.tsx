import { type ReactNode, useRef, useState, useEffect } from "react";

const PHONE_WIDTH = 390;
const PHONE_HEIGHT = 844;

function ScrollHint({ scale }: { scale: number }) {
  return (
    <div
      className="text-white/30 text-xs text-center whitespace-nowrap"
      style={{ transform: `scale(${scale})`, transformOrigin: "top center" }}
    >
      Scroll horizontal: Shift + scroll
    </div>
  );
}

export function MobileFrame({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      const s = Math.min(width / PHONE_WIDTH, height / PHONE_HEIGHT, 1);
      setScale(s);
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#050505] flex flex-col items-center justify-center w-full h-full p-8"
    >
      <div
        className="relative overflow-hidden shrink-0"
        style={{
          width: PHONE_WIDTH,
          height: PHONE_HEIGHT,
          borderRadius: 40,
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.08), 0 40px 80px rgba(0,0,0,0.8)",
          transform: `scale(${scale})`,
          transformOrigin: "center center",
        }}
      >
        {children}
      </div>
      <ScrollHint scale={scale} />
    </div>
  );
}
