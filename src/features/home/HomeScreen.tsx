import { useState } from "react";
import { cn } from "@/app/components/ui/utils";
import svgPaths from "@/imports/ExploreFlow/svg-1jcjc478ov";
import { StatusBar } from "@/shared/components/StatusBar";
import { BottomNav } from "@/shared/components/BottomNav";
import type { TabScreen } from "@/shared/hooks/useNavigation";
import { CategoryChips } from "./components/CategoryChips";
import { MajorEventsSection } from "./components/MajorEventsSection";
import { LocalTalentSection } from "./components/LocalTalentSection";
import { PopularVenuesSection } from "./components/PopularVenuesSection";
import { useIsMobile } from "@/shared/hooks/useIsMobile";

export function HomeScreen({
  onEventClick,
  onArtistClick,
  onTabNavigate,
}: {
  onEventClick: () => void;
  onArtistClick: () => void;
  onTabNavigate: (screen: TabScreen) => void;
}) {
  const [activeCategory, setActiveCategory] = useState("All");
  const isMobile = useIsMobile();

  // Header height: status bar (54px) + header content (56px approx)
  const headerHeight = isMobile ? "calc(var(--status-bar-height) + 56px)" : "160px";
  // BottomNav height + safe area inset
  const bottomNavHeight = isMobile ? "calc(var(--bottom-nav-height) + env(safe-area-inset-bottom, 0))" : "0";

  return (
    <div className="bg-background flex flex-col h-full isolate items-start relative w-full">
      {/* Fixed header - absolute en desktop, fixed en móvil */}
      <div
        className={cn(
          "left-0 right-0 z-[2]",
          isMobile ? "fixed top-0" : "absolute top-0"
        )}
        style={{
          backgroundColor: "var(--background)",
          top: isMobile ? "env(safe-area-inset-top, 0)" : 0,
        }}
      >
        {!isMobile && <StatusBar backgroundColor="var(--background)" />}
        <div className="flex items-center justify-between px-6 py-4 w-full">
          <div>
            <p
              className="leading-[1.5] text-[32px] text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Bogotá, D.C.
            </p>
            <p
              className="leading-[1.5] text-gulf-500 text-[20px]"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 600,
              }}
            >
              All dates
            </p>
          </div>
          <button className="flex gap-[8px] items-center justify-center p-[16px] rounded-[6px] cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
            <svg
              className="size-[24px]"
              fill="none"
              viewBox="0 0 24 20"
            >
              <path d={svgPaths.p92d4e00} fill="white" />
              <path d={svgPaths.p1476cf00} fill="white" />
              <path d={svgPaths.pf8eaa00} fill="white" />
              <path d={svgPaths.p3a0314f1} fill="white" />
              <path d={svgPaths.p148ecf00} fill="white" />
              <path d={svgPaths.p34c01e00} fill="white" />
            </svg>
          </button>
        </div>
      </div>

      {/* Scrollable content con padding dinámico para header/bottomNav fijos */}
      <div
        className="flex-1 overflow-y-auto w-full scrollbar-none"
        style={{
          paddingTop: headerHeight,
          paddingBottom: bottomNavHeight,
        }}
      >
        <CategoryChips active={activeCategory} onSelect={setActiveCategory} />
        <MajorEventsSection onEventClick={onEventClick} />
        <LocalTalentSection onArtistClick={onArtistClick} />
        <PopularVenuesSection />
      </div>

      <BottomNav active="home" onNavigate={onTabNavigate} isMobile={isMobile} />
    </div>
  );
}