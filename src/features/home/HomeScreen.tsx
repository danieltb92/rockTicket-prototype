import { useState } from "react";
import svgPaths from "@/imports/ExploreFlow/svg-1jcjc478ov";
import { StatusBar } from "@/shared/components/StatusBar";
import { BottomNav } from "@/shared/components/BottomNav";
import type { TabScreen } from "@/shared/hooks/useNavigation";
import { CategoryChips } from "./components/CategoryChips";
import { MajorEventsSection } from "./components/MajorEventsSection";
import { LocalTalentSection } from "./components/LocalTalentSection";
import { PopularVenuesSection } from "./components/PopularVenuesSection";

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

  return (
    <div className="bg-[#090909] flex flex-col h-full isolate items-start relative w-full">
      {/* Fixed header */}
      <div className="absolute top-0 left-0 right-0 z-[2] bg-[#0A0505]">
        <StatusBar />
        <div className="flex items-center justify-between px-[24px] py-[16px] w-full">
          <div>
            <p
              className="leading-[1.5] text-[32px] text-white"
              style={{ fontFamily: "'Squada One', sans-serif" }}
            >
              Bogotá, D.C.
            </p>
            <p
              className="leading-[1.5] text-[#697fdf] text-[20px]"
              style={{
                fontFamily: "'Source Sans Pro', sans-serif",
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

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto pt-[160px] w-full scrollbar-none">
        <CategoryChips active={activeCategory} onSelect={setActiveCategory} />
        <MajorEventsSection onEventClick={onEventClick} />
        <LocalTalentSection onArtistClick={onArtistClick} />
        <PopularVenuesSection />
      </div>

      <BottomNav active="home" onNavigate={onTabNavigate} />
    </div>
  );
}
