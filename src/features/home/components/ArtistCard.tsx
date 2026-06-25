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
              fontFamily: "'Source Sans Pro', sans-serif",
              fontWeight: 700,
            }}
          >
            {name}
          </p>
          <div
            className="flex gap-[6px] items-center px-[8px] py-[2px] rounded-[4px]"
            style={{
              backgroundColor: outlined ? undefined : "#007e7c",
              border: outlined ? "2px solid #93c9c7" : undefined,
            }}
          >
            <p
              className="leading-[20px] text-[14px] tracking-[-0.14px] whitespace-nowrap"
              style={{
                fontFamily: "'Source Sans Pro', sans-serif",
                fontWeight: 600,
                color: outlined ? "#93c9c7" : "white",
              }}
            >
              {genre}
            </p>
          </div>
          <p
            className="leading-[1.4] text-[#9aadf4] text-[16px]"
            style={{
              fontFamily: "'Source Sans Pro', sans-serif",
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
