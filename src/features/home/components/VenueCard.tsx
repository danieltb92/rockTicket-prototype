import svgPaths from "@/imports/ExploreFlow/svg-1jcjc478ov";

export function VenueCard({
  name,
  sub,
  icon,
}: {
  name: string;
  sub: string;
  icon: "music" | "location";
}) {
  return (
    <div className="bg-[#090909] relative rounded-[8px] w-full">
      <div className="absolute border-2 border-[#181818] inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex items-center gap-[16px] p-[12px]">
        <div className="bg-[#9aadf4] flex items-center justify-center p-[12px] rounded-[6px] shrink-0">
          {icon === "music" ? (
            <svg
              className="size-[20px]"
              fill="none"
              viewBox="0 0 21 15"
            >
              <path d={svgPaths.peb4da80} fill="#0C0C32" />
            </svg>
          ) : (
            <svg
              className="size-[20px]"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path d={svgPaths.p22de3980} fill="#0C0C32" />
            </svg>
          )}
        </div>
        <div className="flex flex-col flex-1 min-w-0">
          <p
            className="leading-[1.25] text-[16px] text-white tracking-[0.48px] whitespace-nowrap"
            style={{
              fontFamily: "'Source Sans Pro', sans-serif",
              fontWeight: 700,
            }}
          >
            {name}
          </p>
          <p
            className="leading-[20px] text-[#9aadf4] text-[12px]"
            style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
          >
            {sub}
          </p>
        </div>
        <div className="bg-[#002e2d] flex items-center justify-center p-[8px] rounded-[6px]">
          <svg
            className="size-[16px]"
            fill="none"
            viewBox="0 0 10.6667 10.6667"
          >
            <path
              d={svgPaths.p39d11c00}
              fill="white"
              stroke="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
