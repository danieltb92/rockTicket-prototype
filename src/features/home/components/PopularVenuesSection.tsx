import { VenueCard } from "./VenueCard";

export function PopularVenuesSection() {
  return (
    <div className="flex flex-col gap-[16px] items-start pb-[24px] pt-[40px] px-[24px] w-full">
      <div className="flex flex-col gap-[8px] w-full">
        <p className="text-white capitalize" style={{ fontFamily: "'Squada One', sans-serif" }}>
          <span className="text-[40px] leading-[30px]">Popular Venues </span>
          <span className="text-[30px] leading-[30px]">This Week</span>
        </p>
        <p
          className="leading-[16px] text-[#9aadf4] text-[14px] tracking-[1.2px] uppercase"
          style={{
            fontFamily: "'Source Sans Pro', sans-serif",
            fontWeight: 700,
          }}
        >
          Rising Stars Near You
        </p>
      </div>
      <div className="flex flex-col gap-[12px] w-full">
        <VenueCard name="Rock Bunker" sub="Major Venue • Downtown" icon="music" />
        <VenueCard name="Movistar Arena" sub="Teusaquillo • Bogotá D.C." icon="location" />
        <VenueCard name="The Cellar" sub="Major Venue • Downtown" icon="music" />
      </div>
    </div>
  );
}
