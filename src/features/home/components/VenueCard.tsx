import svgPaths from "@/imports/ExploreFlow/svg-1jcjc478ov";

/**
 * Venue card component.
 * Colors from Figma tokens:
 *   Background:  zinc 950 (#090909)
 *   Border:      zinc 900 (#181818)
 *   Icon bg:     gulf 400
 *   Icon fill:   gulf 980
 *   Name:        white, Source Sans Pro Bold
 *   Subtitle:    gulf 400
 *   Arrow bg:    teal 950
 */
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
    <div className="bg-zinc-950 relative rounded-[8px] w-full">
      <div className="absolute border-2 border-zinc-900 inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex items-center gap-[16px] p-[12px]">
        <div className="bg-gulf-400 flex items-center justify-center p-[12px] rounded-[6px] shrink-0">
          {icon === "music" ? (
            <svg
              className="size-[20px]"
              fill="none"
              viewBox="0 0 21 15"
            >
              <path d={svgPaths.peb4da80} fill="var(--color-gulf-980)" />
            </svg>
          ) : (
            <svg
              className="size-[20px]"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path d={svgPaths.p22de3980} fill="var(--color-gulf-980)" />
            </svg>
          )}
        </div>
        <div className="flex flex-col flex-1 min-w-0">
          <p
            className="leading-[1.25] text-[16px] text-white tracking-[0.48px] whitespace-nowrap"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 700,
            }}
          >
            {name}
          </p>
          <p
            className="leading-[20px] text-gulf-400 text-[12px]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {sub}
          </p>
        </div>
        <div className="bg-teal-950 flex items-center justify-center p-[8px] rounded-[6px]">
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
