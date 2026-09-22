/**
 * Event card component.
 * Colors from Figma tokens:
 *   Tag dark:    gulf 950 bg, white text
 *   Tag teal:    teal 100 bg, teal 950 text
 *   Tag last:    teal 100 bg, teal 950 text
 *   Date text:   gulf 400
 *   Title:       white, Squada One
 *   Subtitle:    white, Squada One
 *   Background:  zinc 950 (#090909)
 *   Gradient:    black/60 → transparent
 */
export function EventCard({
  img,
  tag,
  tagVariant,
  date,
  title,
  subtitle,
  onClick,
}: {
  img: string;
  tag: string;
  tagVariant: "teal" | "dark" | "last";
  date: string;
  title: string;
  subtitle?: string;
  onClick?: () => void;
}) {
  const tagBg =
    tagVariant === "dark" ? "var(--color-gulf-950)" : "var(--color-teal-100)";
  const tagColor =
    tagVariant === "dark" ? "white" : "var(--color-teal-950)";

  return (
    <button
      onClick={onClick}
      className="h-[230px] relative rounded-[8px] shrink-0 w-[340px] overflow-hidden cursor-pointer group text-left"
    >
      <div className="absolute inset-0">
        <div className="absolute bg-zinc-950 inset-0 rounded-[8px]" />
        <img
          alt={title}
          className="absolute max-w-none object-cover rounded-[8px] size-full transition-transform duration-300 group-hover:scale-105"
          src={img}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-[8px]" />
      </div>
      <div className="absolute inset-0 flex flex-col justify-between p-[16px] py-[13px]">
        <div>
          <div
            className="flex gap-[6px] items-center px-[8px] py-[4px] rounded-[4px] w-fit"
            style={{ backgroundColor: tagBg }}
          >
            <p
              className="leading-[20px] text-[10px] tracking-[-0.1px] uppercase whitespace-nowrap"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                color: tagColor,
              }}
            >
              {tag}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <p
            className="leading-[1.4] text-gulf-400 text-[18px] uppercase overflow-hidden text-ellipsis whitespace-pre"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 700,
            }}
          >
            {date}
          </p>
          <p
            className="leading-[0.9] text-[30px] text-white tracking-[1.5px] uppercase"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {title}
          </p>
          {subtitle && (
            <p
              className="leading-[0.9] text-[24px] text-white tracking-[0.72px] uppercase mt-[4px]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </button>
  );
}
