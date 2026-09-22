/**
 * Artist card component.
 * Colors from Figma tokens:
 *   Name:      white, Source Sans Pro Bold
 *   Genre tag: teal 700 bg, white text (filled) / teal 300 border, teal 300 text (outlined)
 *   Day/venue: gulf 400, Source Sans Pro Bold
 *   Gradient:  black/50 → transparent
 */
export function ArtistCard({
  img,
  name,
  genre,
  day,
  venue,
  outlined,
  onClick,
}: {
  img: string;
  name: string;
  genre: string;
  day: string;
  venue: string;
  outlined?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="relative rounded-[8px] shrink-0 w-[200px] cursor-pointer group text-left"
    >
      <div className="flex flex-col items-start rounded-[8px] overflow-hidden">
        <div className="h-[182px] relative rounded-[8px] shrink-0 w-full overflow-hidden">
          <img
            alt={name}
            className="absolute inset-0 max-w-none object-cover rounded-[8px] size-full transition-transform duration-300 group-hover:scale-105"
            src={img}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        <div className="flex flex-col gap-[4px] items-start py-[16px] w-full">
          <p
            className="leading-[30px] text-[24px] text-white tracking-[0.72px] whitespace-nowrap"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 700,
            }}
          >
            {name}
          </p>
          <div
            className="flex gap-[6px] items-center px-[8px] py-[2px] rounded-[4px]"
            style={{
              backgroundColor: outlined ? undefined : "var(--color-teal-700)",
              border: outlined ? "2px solid var(--color-teal-300)" : undefined,
            }}
          >
            <p
              className="leading-[20px] text-[14px] tracking-[-0.14px] whitespace-nowrap"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                color: outlined ? "var(--color-teal-300)" : "white",
              }}
            >
              {genre}
            </p>
          </div>
          <p
            className="leading-[1.4] text-gulf-400 text-[16px]"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 700,
            }}
          >
            {day} · <span className="underline">{venue}</span>
          </p>
        </div>
      </div>
    </button>
  );
}
