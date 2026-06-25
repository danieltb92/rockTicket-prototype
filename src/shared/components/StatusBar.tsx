import svgPaths from "@/imports/ExploreFlow/svg-1jcjc478ov";

export function StatusBar() {
  return (
    <div className="h-[54px] flex items-center justify-between px-[28px] shrink-0 w-full">
      {/* Time */}
      <p
        className="font-bold leading-[20px] text-[15px] text-white whitespace-nowrap"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        9:41
      </p>

      {/* Icons */}
      <div className="flex gap-[6px] items-center">
        {/* WiFi */}
        <div className="overflow-clip relative size-[16px]">
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
        <div className="overflow-clip relative size-[24px]">
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
