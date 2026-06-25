import imgCard from "@/imports/ExploreFlow/0bc405322095361d894f0994829a4954829ea0e0.png";
import imgCard1 from "@/imports/ExploreFlow/0f125f89f467f5fb817508a4d8838a8146bc1c59.png";
import imgCard2 from "@/imports/ExploreFlow/054520838684f952a66ff81319c3d4cf1f3386dd.png";
import { EventCard } from "./EventCard";

export function MajorEventsSection({
  onEventClick,
}: {
  onEventClick: () => void;
}) {
  return (
    <div className="flex flex-col gap-[16px] items-start pt-[40px] w-full">
      <div className="flex items-start justify-between px-[24px] w-full">
        <div>
          <p
            className="leading-[30px] text-[40px] text-white tracking-[-0.6px] uppercase"
            style={{ fontFamily: "'Squada One', sans-serif" }}
          >
            Major Upcoming
          </p>
          <p
            className="leading-[30px] text-[40px] text-white tracking-[-0.6px] uppercase"
            style={{ fontFamily: "'Squada One', sans-serif" }}
          >
            Events
          </p>
        </div>
        <button className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity pt-[4px]">
          <p
            className="leading-[16px] text-[#b6fffc] text-[14px] tracking-[1.2px] uppercase text-right"
            style={{
              fontFamily: "'Source Sans Pro', sans-serif",
              fontWeight: 700,
            }}
          >
            See
            <br />
            All
          </p>
        </button>
      </div>
      <div className="overflow-x-auto overflow-y-clip w-full scrollbar-none">
        <div className="flex gap-[16px] items-center px-[24px] pb-[4px]">
          <EventCard
            img={imgCard}
            tag="SELLING FAST"
            tagVariant="teal"
            date="AUG 24  . OLYMPIC STADIUM"
            title="IRON MAIDEN:"
            subtitle="World Slavery Tour"
          />
          <EventCard
            img={imgCard1}
            tag="Sold Out"
            tagVariant="dark"
            date="AUG 30  . movistar arena"
            title="The midnight echoes"
            onClick={onEventClick}
          />
          <EventCard
            img={imgCard2}
            tag="Last Tickets"
            tagVariant="last"
            date="OCT 30  . mEDPLUS COLISEO"
            title="tOOL:"
            subtitle="WORLD TOUR"
          />
        </div>
      </div>
    </div>
  );
}
