import type { ReactNode } from "react";

export function MobileFrame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center">
      <div
        className="relative overflow-hidden"
        style={{
          width: "390px",
          height: "844px",
          borderRadius: "40px",
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.08), 0 40px 80px rgba(0,0,0,0.8)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
