import imgImageContent from "@/imports/ExploreFlow/3b13c3a682555d40ee4781d14bfefc7d8b6c4691.png";
import imgImageContent1 from "@/imports/ExploreFlow/14333276cdedd8b0615daa75a598e9e8eb76104a.png";
import { ArtistCard } from "./ArtistCard";

export function LocalTalentSection({
  onArtistClick,
}: {
  onArtistClick: () => void;
}) {
  return (
    <div className="flex flex-col gap-[16px] items-start pt-[40px] px-[24px] w-full">
      <div className="flex flex-col gap-[8px] w-full">
        <p
          className="leading-[30px] text-[40px] text-white tracking-[-0.5px] capitalize"
          style={{ fontFamily: "'Squada One', sans-serif" }}
        >
          Local Talent Spotlight
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
      <div className="overflow-x-auto overflow-y-clip w-full scrollbar-none">
        <div className="flex gap-[16px] items-start">
          <ArtistCard
            img={imgImageContent}
            name="Velvet Echo"
            genre="Alternative Rock"
            day="Friday"
            venue="The Cellar"
          />
          <ArtistCard
            img={imgImageContent1}
            name="Hot Guitar"
            genre="Indie Rock"
            day="Saturday"
            venue="Rock Bunker"
          />
          <ArtistCard
            img={imgImageContent1}
            name="The Midnight Echoes"
            genre="Indie Rock"
            day="Friday"
            venue="The Cellar"
            outlined
            onClick={onArtistClick}
          />
        </div>
      </div>
    </div>
  );
}
