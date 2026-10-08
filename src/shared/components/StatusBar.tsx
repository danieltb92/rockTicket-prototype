import svgPaths from "@/imports/ExploreFlow/svg-1jcjc478ov";

interface StatusBarProps {
  backgroundColor?: string;
}

/**
 * iOS-style status bar.
 * Specs: height 54px, time 15px Inter bold, icons 16px/24px
 * Tokens: --status-bar-height, --icon-size-nav, --icon-size-nav-lg
 */
export function StatusBar({ backgroundColor = "transparent" }: StatusBarProps) {
  return (
    <div
      className="h-[var(--status-bar-height)] flex items-center justify-between px-[28px] shrink-0 w-full"
      style={{ backgroundColor }}
    >
      {/* Time */}
      <p
        className="font-bold leading-5 text-[15px] text-white whitespace-nowrap"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        9:41
      </p>

      {/* Icons */}
      <div className="flex gap-1.5 items-center">
        {/* WiFi */}
        <div className="overflow-clip relative size-4">
          <div className="absolute inset-[15%_5.53%_15%_5.21%]">
            <svg
              className="absolute block inset-0 size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 17.8528 14"
            >
              <path d={svgPaths.p1abffe00} fill="white" />
            </svg>
          </div>
        </div>
        {/* Battery */}
        <div className="overflow-clip relative size-6">
          <div className="absolute inset-[20%_5%_20%_10%]">
            <svg
              className="absolute block inset-0 size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 17 12"
            >
              <path d={svgPaths.p35f0d900} fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}