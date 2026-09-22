const CATEGORIES = [
  "All",
  "Metal",
  "Classic",
  "Punk",
  "Indie",
  "Trash",
  "Alternative",
];

/**
 * Category filter chips.
 * Colors from Figma tokens:
 *   Active:   gulf 950 bg, white text
 *   Inactive: gulf 50 bg, dark text
 */
export function CategoryChips({
  active,
  onSelect,
}: {
  active: string;
  onSelect: (c: string) => void;
}) {
  return (
    <div className="overflow-x-auto overflow-y-clip relative shrink-0 w-full scrollbar-none">
      <div className="flex gap-[6px] h-[46px] items-center px-[24px] py-[6px]">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => onSelect(c)}
            className="flex gap-[4px] items-center px-[12px] py-[8px] rounded-[10px] shrink-0 cursor-pointer transition-colors"
            style={{
              backgroundColor:
                active === c ? "var(--color-gulf-950)" : "var(--color-gulf-50)",
            }}
          >
            <p
              className="leading-[24px] text-[14px] tracking-[-0.14px] whitespace-nowrap"
              style={{
                fontFamily: "var(--font-body)",
                color: active === c ? "white" : "#2d3648",
              }}
            >
              {c}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
