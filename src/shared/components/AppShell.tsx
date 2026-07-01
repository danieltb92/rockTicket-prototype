import { type ReactNode } from "react";
import { DevResetButton } from "./DevResetButton";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#050505]">
      <div className="flex-1 flex items-center justify-center min-h-0">
        {children}
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
