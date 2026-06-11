import { useState } from "react";
import svgPaths from "../imports/ExploreFlow/svg-1jcjc478ov";
import imgCard from "../imports/ExploreFlow/0bc405322095361d894f0994829a4954829ea0e0.png";
import imgCard1 from "../imports/ExploreFlow/0f125f89f467f5fb817508a4d8838a8146bc1c59.png";
import imgCard2 from "../imports/ExploreFlow/054520838684f952a66ff81319c3d4cf1f3386dd.png";
import imgImageContent from "../imports/ExploreFlow/3b13c3a682555d40ee4781d14bfefc7d8b6c4691.png";
import imgImageContent1 from "../imports/ExploreFlow/14333276cdedd8b0615daa75a598e9e8eb76104a.png";
import imgUnsplash from "../imports/ExploreFlow/b433531d40de1cba12766d23f21b3cf4fc9869a5.png";
import imgSection from "../imports/ExploreFlow/49d72399db1c94f16bbf9602e5e863673d0f9c87.png";
import imgBackgroundBorder from "../imports/ExploreFlow/f1a1719a473706f7484e063b8901701ab535998c.png";
import imgBackgroundBorder1 from "../imports/ExploreFlow/65ac0ca1d450c7e231ffe8219025936555d9aef9.png";

type Screen = "home" | "event" | "artist";

function StatusBar() {
  return (
    <div className="h-[40px] overflow-clip relative shrink-0 w-full">
      <div className="-translate-y-1/2 absolute right-[4px] top-1/2 flex gap-[4px] items-center">
        <div className="overflow-clip relative size-[20px]" style={{ position: "absolute", right: "28px", top: "50%", transform: "translateY(-50%)" }}>
          <div className="absolute inset-[15%_5.53%_15%_5.21%]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.8528 14">
              <path d={svgPaths.p1abffe00} fill="white" />
            </svg>
          </div>
        </div>
        <div className="overflow-clip relative size-[20px]" style={{ position: "absolute", right: "4px", top: "50%", transform: "translateY(-50%)" }}>
          <div className="absolute inset-[20%_5%_20%_10%]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 12">
              <path d={svgPaths.p35f0d900} fill="white" />
            </svg>
          </div>
        </div>
      </div>
      <p className="absolute font-bold leading-[20px] left-[32px] text-[14px] text-white top-[calc(50%-10px)] whitespace-nowrap" style={{ fontFamily: "Inter, sans-serif" }}>9:41</p>
    </div>
  );
}

const CATEGORIES = ["All", "Metal", "Classic", "Punk", "Indie", "Trash", "Alternative"];

function CategoryChips({ active, onSelect }: { active: string; onSelect: (c: string) => void }) {
  return (
    <div className="overflow-x-auto overflow-y-clip relative shrink-0 w-full scrollbar-none">
      <div className="flex gap-[6px] h-[46px] items-center px-[24px] py-[6px] ">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => onSelect(c)}
            className="flex gap-[4px] items-center px-[12px] py-[8px] rounded-[10px] shrink-0 cursor-pointer transition-colors"
            style={{ backgroundColor: active === c ? "#141454" : "#f6f7fd" }}
          >
            <p
              className="leading-[24px] text-[14px] tracking-[-0.14px] whitespace-nowrap"
              style={{ fontFamily: "'Source Sans Pro', sans-serif", color: active === c ? "white" : "#2d3648" }}
            >
              {c}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

function EventCard({
  img, tag, tagVariant, date, title, subtitle, onClick,
}: {
  img: string; tag: string; tagVariant: "teal" | "dark" | "last";
  date: string; title: string; subtitle?: string; onClick?: () => void;
}) {
  const tagBg = tagVariant === "dark" ? "#141454" : "#b6fffc";
  const tagColor = tagVariant === "dark" ? "white" : "#002e2d";

  return (
    <button
      onClick={onClick}
      className="h-[230px] relative rounded-[8px] shrink-0 w-[340px] overflow-hidden cursor-pointer group text-left"
    >
      <div className="absolute inset-0">
        <div className="absolute bg-[#090909] inset-0 rounded-[8px]" />
        <img alt={title} className="absolute max-w-none object-cover rounded-[8px] size-full transition-transform duration-300 group-hover:scale-105" src={img} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-[8px]" />
      </div>
      <div className="absolute inset-0 flex flex-col justify-between p-[16px] py-[13px]">
        <div>
          <div className="flex gap-[6px] items-center px-[8px] py-[4px] rounded-[4px] w-fit" style={{ backgroundColor: tagBg }}>
            <p className="leading-[20px] text-[10px] tracking-[-0.1px] uppercase whitespace-nowrap" style={{ fontFamily: "'Source Sans Pro', sans-serif", fontWeight: 600, color: tagColor }}>{tag}</p>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <p className="leading-[1.4] text-[#9aadf4] text-[18px] uppercase overflow-hidden text-ellipsis whitespace-pre" style={{ fontFamily: "'Source Sans Pro', sans-serif", fontWeight: 700 }}>{date}</p>
          <p className="leading-[0.9] text-[30px] text-white tracking-[1.5px] uppercase" style={{ fontFamily: "'Squada One', sans-serif" }}>{title}</p>
          {subtitle && <p className="leading-[0.9] text-[24px] text-white tracking-[0.72px] uppercase mt-[4px]" style={{ fontFamily: "'Squada One', sans-serif" }}>{subtitle}</p>}
        </div>
      </div>
      <div className="absolute border border-[#2d3648] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </button>
  );
}

function MajorEventsSection({ onEventClick }: { onEventClick: () => void }) {
  return (
    <div className="flex flex-col gap-[16px] items-start pt-[40px] w-full">
      <div className="flex items-start justify-between px-[24px] w-full">
        <div>
          <p className="leading-[30px] text-[40px] text-white tracking-[-0.6px] uppercase" style={{ fontFamily: "'Squada One', sans-serif" }}>Major Upcoming</p>
          <p className="leading-[30px] text-[40px] text-white tracking-[-0.6px] uppercase" style={{ fontFamily: "'Squada One', sans-serif" }}>Events</p>
        </div>
        <button className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity pt-[4px]">
          <p className="leading-[16px] text-[#b6fffc] text-[14px] tracking-[1.2px] uppercase text-right" style={{ fontFamily: "'Source Sans Pro', sans-serif", fontWeight: 700 }}>See<br />All</p>
        </button>
      </div>
      <div className="overflow-x-auto overflow-y-clip w-full scrollbar-none">
        <div className="flex gap-[16px] items-center px-[24px] pb-[4px]">
          <EventCard img={imgCard} tag="SELLING FAST" tagVariant="teal" date="AUG 24  . OLYMPIC STADIUM" title="IRON MAIDEN:" subtitle="World Slavery Tour" />
          <EventCard img={imgCard1} tag="Sold Out" tagVariant="dark" date="AUG 30  . movistar arena" title="The midnight echoes" onClick={onEventClick} />
          <EventCard img={imgCard2} tag="Last Tickets" tagVariant="last" date="OCT 30  . mEDPLUS COLISEO" title="tOOL:" subtitle="WORLD TOUR" />
        </div>
      </div>
    </div>
  );
}

function ArtistCard({
  img, name, genre, day, venue, outlined, onClick,
}: {
  img: string; name: string; genre: string; day: string; venue: string; outlined?: boolean; onClick?: () => void;
}) {
  return (
    <button onClick={onClick} className="relative rounded-[8px] shrink-0 w-[200px] cursor-pointer group text-left">
      <div className="flex flex-col items-start rounded-[8px] overflow-hidden">
        <div className="h-[182px] relative rounded-[8px] shrink-0 w-full overflow-hidden">
          <img alt={name} className="absolute inset-0 max-w-none object-cover rounded-[8px] size-full transition-transform duration-300 group-hover:scale-105" src={img} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        <div className="flex flex-col gap-[4px] items-start py-[16px] w-full">
          <p className="leading-[30px] text-[24px] text-white tracking-[0.72px] whitespace-nowrap" style={{ fontFamily: "'Source Sans Pro', sans-serif", fontWeight: 700 }}>{name}</p>
          <div
            className="flex gap-[6px] items-center px-[8px] py-[2px] rounded-[4px]"
            style={{ backgroundColor: outlined ? undefined : "#007e7c", border: outlined ? "2px solid #93c9c7" : undefined }}
          >
            <p className="leading-[20px] text-[14px] tracking-[-0.14px] whitespace-nowrap" style={{ fontFamily: "'Source Sans Pro', sans-serif", fontWeight: 600, color: outlined ? "#93c9c7" : "white" }}>{genre}</p>
          </div>
          <p className="leading-[1.4] text-[#9aadf4] text-[16px]" style={{ fontFamily: "'Source Sans Pro', sans-serif", fontWeight: 700 }}>
            {day} · <span className="underline">{venue}</span>
          </p>
        </div>
      </div>
      <div className="absolute border border-[#2d3648] inset-0 pointer-events-none rounded-[8px]" />
    </button>
  );
}

function LocalTalentSection({ onArtistClick }: { onArtistClick: () => void }) {
  return (
    <div className="flex flex-col gap-[16px] items-start pt-[40px] px-[24px] w-full">
      <div className="flex flex-col gap-[8px] w-full">
        <p className="leading-[30px] text-[40px] text-white tracking-[-0.5px] capitalize" style={{ fontFamily: "'Squada One', sans-serif" }}>Local Talent Spotlight</p>
        <p className="leading-[16px] text-[#9aadf4] text-[14px] tracking-[1.2px] uppercase" style={{ fontFamily: "'Source Sans Pro', sans-serif", fontWeight: 700 }}>Rising Stars Near You</p>
      </div>
      <div className="overflow-x-auto overflow-y-clip w-full scrollbar-none">
        <div className="flex gap-[16px] items-start">
          <ArtistCard img={imgImageContent} name="Velvet Echo" genre="Alternative Rock" day="Friday" venue="The Cellar" />
          <ArtistCard img={imgImageContent1} name="Hot Guitar" genre="Indie Rock" day="Saturday" venue="Rock Bunker" />
          <ArtistCard img={imgImageContent1} name="The Midnight Echoes" genre="Indie Rock" day="Friday" venue="The Cellar" outlined onClick={onArtistClick} />
        </div>
      </div>
    </div>
  );
}

function VenueCard({ name, sub, icon }: { name: string; sub: string; icon: "music" | "location" }) {
  return (
    <div className="bg-[#090909] relative rounded-[8px] w-full">
      <div className="absolute border-2 border-[#181818] inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex items-center gap-[16px] p-[12px]">
        <div className="bg-[#9aadf4] flex items-center justify-center p-[12px] rounded-[6px] shrink-0">
          {icon === "music" ? (
            <svg className="size-[20px]" fill="none" viewBox="0 0 21 15"><path d={svgPaths.peb4da80} fill="#0C0C32" /></svg>
          ) : (
            <svg className="size-[20px]" fill="none" viewBox="0 0 20 20"><path d={svgPaths.p22de3980} fill="#0C0C32" /></svg>
          )}
        </div>
        <div className="flex flex-col flex-1 min-w-0">
          <p className="leading-[1.25] text-[16px] text-white tracking-[0.48px] whitespace-nowrap" style={{ fontFamily: "'Source Sans Pro', sans-serif", fontWeight: 700 }}>{name}</p>
          <p className="leading-[20px] text-[#9aadf4] text-[12px]" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>{sub}</p>
        </div>
        <div className="bg-[#002e2d] flex items-center justify-center p-[8px] rounded-[6px]">
          <svg className="size-[16px]" fill="none" viewBox="0 0 10.6667 10.6667"><path d={svgPaths.p39d11c00} fill="white" stroke="white" /></svg>
        </div>
      </div>
    </div>
  );
}

function PopularVenuesSection() {
  return (
    <div className="flex flex-col gap-[16px] items-start pb-[24px] pt-[40px] px-[24px] w-full">
      <div className="flex flex-col gap-[8px] w-full">
        <p className="text-white capitalize" style={{ fontFamily: "'Squada One', sans-serif" }}>
          <span className="text-[40px] leading-[30px]">Popular Venues </span>
          <span className="text-[30px] leading-[30px]">This Week</span>
        </p>
        <p className="leading-[16px] text-[#9aadf4] text-[14px] tracking-[1.2px] uppercase" style={{ fontFamily: "'Source Sans Pro', sans-serif", fontWeight: 700 }}>Rising Stars Near You</p>
      </div>
      <div className="flex flex-col gap-[12px] w-full">
        <VenueCard name="Rock Bunker" sub="Major Venue • Downtown" icon="music" />
        <VenueCard name="Movistar Arena" sub="Teusaquillo • Bogotá D.C." icon="location" />
        <VenueCard name="The Cellar" sub="Major Venue • Downtown" icon="music" />
      </div>
    </div>
  );
}

function BottomNav() {
  return (
    <div className="h-[80px] left-0 w-full z-[1] flex-shrink-0">
      <div className="bg-black flex flex-col gap-[2px] h-full items-start overflow-clip w-full">
        <div className="bg-[#272727] h-px opacity-20 w-full" />
        <div className="flex gap-[8px] items-start px-[8px] w-full">
          {[
            { label: "Home", active: true },
            { label: "Search", active: false },
            { label: "Tickets", active: false },
            { label: "My Bands", active: false },
            { label: "Profile", active: false },
          ].map(({ label, active }) => (
            <div key={label} className="flex flex-1 flex-col gap-[8px] items-center min-w-0 py-[9px] cursor-pointer">
              <div className="size-[24px] flex items-center justify-center">
                {label === "Home" && (
                  <svg className="size-[22px]" fill="none" viewBox="0 0 20 22">
                    <path clipRule="evenodd" d={svgPaths.p26406200} fill={active ? "#007E7C" : "#404040"} fillRule="evenodd" />
                  </svg>
                )}
                {label === "Search" && (
                  <svg className="size-[20px]" fill="none" viewBox="0 0 19.9997 19.9997">
                    <path d={svgPaths.p3921ef80} fill="#404040" />
                  </svg>
                )}
                {label === "Tickets" && (
                  <svg className="size-[22px]" fill="none" viewBox="0 0 22.4999 22.4999">
                    <path d={svgPaths.p33fc8c80} stroke="#404040" strokeMiterlimit="10" strokeWidth="1.5" />
                  </svg>
                )}
                {label === "My Bands" && (
                  <svg className="size-[22px]" fill="none" viewBox="0 0 22.8801 20.444">
                    <path clipRule="evenodd" d={svgPaths.pce61800} fill="#404040" fillRule="evenodd" />
                  </svg>
                )}
                {label === "Profile" && (
                  <svg className="size-[20px]" fill="none" viewBox="0 0 18 20">
                    <path clipRule="evenodd" d={svgPaths.p3a955100} fill="#404040" fillRule="evenodd" />
                    <path d={svgPaths.p16705e00} fill="#404040" />
                  </svg>
                )}
              </div>
              <p
                className="leading-none text-[12px] text-center tracking-[-0.12px] w-full"
                style={{ fontFamily: "'Source Sans Pro', sans-serif", color: active ? "#007e7c" : "#404040" }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── HOME SCREEN ────────────────────────────────────────────────────────────────
function HomeScreen({ onEventClick, onArtistClick }: { onEventClick: () => void; onArtistClick: () => void }) {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="bg-[#090909] flex flex-col h-full isolate items-start relative w-full">
      {/* Fixed header */}
      <div className="absolute top-0 left-0 right-0 backdrop-blur-[6px] z-[2]" style={{ backgroundColor: "rgba(10,5,5,0.8)" }}>
        <StatusBar />
        <div className="flex items-center justify-between px-[24px] py-[16px] w-full">
          <div>
            <p className="leading-[1.5] text-[32px] text-white" style={{ fontFamily: "'Squada One', sans-serif" }}>Bogotá, D.C.</p>
            <p className="leading-[1.5] text-[#697fdf] text-[20px]" style={{ fontFamily: "'Source Sans Pro', sans-serif", fontWeight: 600 }}>All dates</p>
          </div>
          <button className="flex gap-[8px] items-center justify-center p-[16px] rounded-[6px] cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
            <svg className="size-[24px]" fill="none" viewBox="0 0 24 20">
              <path d={svgPaths.p92d4e00} fill="white" />
              <path d={svgPaths.p1476cf00} fill="white" />
              <path d={svgPaths.pf8eaa00} fill="white" />
              <path d={svgPaths.p3a0314f1} fill="white" />
              <path d={svgPaths.p148ecf00} fill="white" />
              <path d={svgPaths.p34c01e00} fill="white" />
            </svg>
          </button>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto pt-[145px] w-full scrollbar-none">
        <CategoryChips active={activeCategory} onSelect={setActiveCategory} />
        <MajorEventsSection onEventClick={onEventClick} />
        <LocalTalentSection onArtistClick={onArtistClick} />
        <PopularVenuesSection />
      </div>

      <BottomNav />
    </div>
  );
}

// ── EVENT DETAIL SCREEN ────────────────────────────────────────────────────────
function EventDetailScreen({ onBack, onArtistClick }: { onBack: () => void; onArtistClick: () => void }) {
  const [calendarOn, setCalendarOn] = useState(false);

  return (
    <div className="bg-[#090909] flex flex-col h-full relative w-full">
      {/* Floating back header */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <StatusBar />
        <div className="flex h-[76px] items-center justify-start px-[24px] w-full">
          <button onClick={onBack} className="flex items-center justify-center p-[12px] rounded-[6px] cursor-pointer hover:bg-white/10 transition-colors">
            <svg className="size-[20px]" fill="none" viewBox="0 0 13.3333 13.3333">
              <path d={svgPaths.p25894700} fill="white" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-none">
        {/* Hero */}
        <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
          <img
            alt="The Midnight Echoes"
            className="absolute max-w-none object-cover size-full"
            src={imgUnsplash}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(5,5,5,0) 0%, #050505 100%)" }} />
          <div className="absolute bottom-0 left-0 p-[24px] w-full flex flex-col gap-[20px]">
            <div className="flex gap-[8px] items-center">
              <div className="bg-[#141454] flex gap-[6px] items-center px-[8px] py-[4px] rounded-[4px]">
                <p className="leading-[20px] text-[10px] text-white tracking-[1px] uppercase whitespace-nowrap" style={{ fontFamily: "'Source Sans Pro', sans-serif", fontWeight: 700 }}>Local Talent</p>
              </div>
              <div className="bg-[#007e7c] flex gap-[6px] items-center px-[8px] py-[4px] rounded-[4px]">
                <p className="leading-[20px] text-[10px] text-white tracking-[1px] uppercase whitespace-nowrap" style={{ fontFamily: "'Source Sans Pro', sans-serif", fontWeight: 700 }}>Official Event</p>
              </div>
            </div>
            <div>
              <p className="leading-[61.2px] text-[60px] text-white uppercase" style={{ fontFamily: "'Squada One', sans-serif" }}>The midnight</p>
              <p className="leading-[61.2px] text-[60px] text-white uppercase" style={{ fontFamily: "'Squada One', sans-serif" }}>echoes</p>
            </div>
            <div className="flex gap-[8px] items-center">
              <svg className="size-[10px] shrink-0" fill="none" viewBox="0 0 9.33333 11.6667">
                <path d={svgPaths.pd490b00} fill="#3B42D3" />
              </svg>
              <p className="leading-[20px] text-[#9aadf4] text-[14px] tracking-[0.35px] uppercase whitespace-nowrap" style={{ fontFamily: "'Source Sans Pro', sans-serif", fontWeight: 700 }}>Invitados: The Void</p>
            </div>
          </div>
        </div>

        {/* Info card */}
        <div className="px-[24px] py-[6px] w-full">
          <div className="bg-[#090909] relative rounded-[8px] w-full" style={{ border: "1px solid #404040" }}>
            <div className="flex items-center gap-[16px] pb-[21px] pt-[20px] px-[20px]" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              <div className="bg-[#002e2d] flex items-center justify-center p-[12px] rounded-[6px] shrink-0">
                <svg className="size-[20px]" fill="none" viewBox="0 0 16.6667 18.3333"><path clipRule="evenodd" d={svgPaths.p1854c300} fill="#93C9C7" fillRule="evenodd" /></svg>
              </div>
              <div>
                <p className="leading-[28px] text-[18px] text-white whitespace-nowrap" style={{ fontFamily: "'Source Sans Pro', sans-serif", fontWeight: 700 }}>Viernes, 15 de Octubre</p>
                <p className="leading-[20px] text-[14px] text-[rgba(255,255,255,0.4)]" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Puertas: 20:00 • Show: 21:30</p>
              </div>
            </div>
            <div className="flex items-center justify-between pb-[21px] pt-[20px] px-[20px]" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              <div className="flex items-center gap-[16px]">
                <div className="bg-[#002e2d] flex items-center justify-center p-[12px] rounded-[6px] shrink-0">
                  <svg className="size-[20px]" fill="none" viewBox="0 0 13.75 17.5"><path d={svgPaths.p1ef64900} fill="#93C9C7" /></svg>
                </div>
                <div>
                  <p className="leading-[28px] text-[18px] text-white whitespace-nowrap" style={{ fontFamily: "'Source Sans Pro', sans-serif", fontWeight: 700 }}>Arena de Rock Ciudad</p>
                  <p className="leading-[20px] text-[14px] text-[rgba(255,255,255,0.4)] whitespace-nowrap" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Av. Principal 450, Centro</p>
                </div>
              </div>
              <button className="flex items-center justify-center p-[12px] rounded-[6px] cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
                <svg className="size-[20px]" fill="none" viewBox="0 0 18.3333 18.3333">
                  <path d={svgPaths.p18a11a40} fill="#00504E" />
                  <path clipRule="evenodd" d={svgPaths.pa5bae80} fill="#00504E" fillRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="flex items-center gap-[16px] p-[20px]">
              <div className="bg-[#002e2d] flex items-center justify-center p-[12px] rounded-[6px] shrink-0">
                <svg className="size-[20px]" fill="none" viewBox="0 0 15.0039 17.5"><path d={svgPaths.p1b48db00} fill="#93C9C7" /></svg>
              </div>
              <div>
                <p className="leading-[28px] text-[18px] text-white whitespace-nowrap" style={{ fontFamily: "'Source Sans Pro', sans-serif", fontWeight: 700 }}>$45.00 — $120.00</p>
                <p className="leading-[20px] text-[14px] text-[rgba(255,255,255,0.4)] whitespace-nowrap" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Garantía oficial RockTicket</p>
              </div>
            </div>
          </div>
        </div>

        {/* Calendar toggle */}
        <div className="px-[24px] py-[8px] w-full">
          <div className="bg-[#010101] relative rounded-[8px] w-full" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
            <div className="flex items-center justify-between p-[17px]">
              <div className="bg-[#001d1d] flex items-center justify-center p-[8px] rounded-[6px]">
                <svg className="size-[16px]" fill="none" viewBox="0 0 13 14.5"><path d={svgPaths.p159bf700} fill="#93C9C7" /></svg>
              </div>
              <p className="leading-[20px] text-[14px] text-white tracking-[0.7px] uppercase flex-1 px-[12px]" style={{ fontFamily: "'Source Sans Pro', sans-serif", fontWeight: 700 }}>Añadir al calendario</p>
              <button
                onClick={() => setCalendarOn(!calendarOn)}
                className="h-[24px] relative rounded-[999px] w-[40px] cursor-pointer transition-colors"
                style={{ backgroundColor: calendarOn ? "#007e7c" : "transparent" }}
              >
                <div className="absolute inset-0 rounded-[999px]" style={{ border: "2px solid #bdc8f1" }} />
                <div
                  className="absolute top-1/2 -translate-y-1/2 bg-[#272727] rounded-[9999px] size-[16px] transition-all duration-200"
                  style={{ left: calendarOn ? "calc(100% - 20px)" : "4px" }}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Sobre el show */}
        <div className="flex flex-col gap-[16px] items-start px-[24px] py-[16px] w-full">
          <div className="flex gap-[12px] items-center w-full">
            <p className="leading-[32px] text-[30px] text-white tracking-[0.6px] uppercase whitespace-nowrap" style={{ fontFamily: "'Squada One', sans-serif" }}>Sobre el Show</p>
            <div className="bg-[#272727] flex-1 h-px" />
          </div>
          <p className="leading-[24.38px] text-[15px] text-[rgba(255,255,255,0.6)]" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
            Crimson Rebellion regresa a casa para una noche de caos puro. Prepárate para el lanzamiento de su nuevo álbum "Echoes of the Underground". Un show visceral con visuales impactantes y la energía cruda que solo el rock local puede ofrecer.
          </p>
          <button
            onClick={onArtistClick}
            className="relative rounded-[6px] w-full cursor-pointer hover:bg-white/5 transition-colors"
          >
            <div className="flex items-center justify-center px-[24px] py-[16px]">
              <p className="leading-[20px] text-[#ebeffb] text-[16px]" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Ver perfil del artista</p>
            </div>
            <div className="absolute inset-0 pointer-events-none rounded-[6px]" style={{ border: "2px solid #ebeffb" }} />
          </button>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-black px-[24px] pb-[20px] pt-[8px] w-full flex-shrink-0" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col items-center p-[16px]">
              <p className="leading-[24px] text-[12px] text-white" style={{ fontFamily: "'Source Sans Pro', sans-serif", fontWeight: 700 }}>DESDE</p>
              <p className="leading-[24px] text-[30px] text-white" style={{ fontFamily: "'Source Sans Pro', sans-serif", fontWeight: 700 }}>$45</p>
            </div>
            <button className="bg-[#007e7c] flex flex-1 gap-[12px] items-center justify-center p-[16px] rounded-[6px] mx-[8px] cursor-pointer hover:bg-[#006b69] transition-colors">
              <p className="leading-[24px] text-[18px] text-white whitespace-nowrap" style={{ fontFamily: "'Source Sans Pro', sans-serif", fontWeight: 700 }}>COMPRAR ENTRADAS</p>
              <svg className="size-[20px]" fill="none" viewBox="0 0 21 15"><path d={svgPaths.p282f8480} fill="white" /></svg>
            </button>
          </div>
          <p className="leading-[13.5px] text-[9px] text-[rgba(255,255,255,0.1)] text-center tracking-[1.8px] uppercase mt-[4px]" style={{ fontFamily: "'Source Sans Pro', sans-serif", fontWeight: 700 }}>Powered by RockTicket Official Platform</p>
        </div>
      </div>
    </div>
  );
}

// ── ARTIST SCREEN ──────────────────────────────────────────────────────────────
function ArtistScreen({ onBack }: { onBack: () => void }) {
  const [following, setFollowing] = useState(false);

  return (
    <div className="bg-[#090909] flex flex-col h-full relative w-full">
      {/* Floating header */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <StatusBar />
        <div className="flex h-[76px] items-center justify-between px-[24px] w-full">
          <button onClick={onBack} className="flex items-center justify-center p-[12px] rounded-[6px] cursor-pointer hover:bg-white/10 transition-colors">
            <svg className="size-[20px]" fill="none" viewBox="0 0 13.3333 13.3333"><path d={svgPaths.p25894700} fill="white" /></svg>
          </button>
          <button className="flex items-center justify-center p-[12px] rounded-[6px] cursor-pointer hover:bg-white/10 transition-colors">
            <svg className="size-[20px]" fill="none" viewBox="0 0 16.6667 18.3333">
              <path clipRule="evenodd" d={svgPaths.pb60bef0} fill="white" fillRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-none">
        {/* Hero */}
        <div className="h-[480px] relative overflow-hidden shrink-0">
          <img alt="The Midnight Echoes" className="absolute max-w-none object-cover" src={imgSection}
            style={{ height: "100%", width: "123.71%", left: "-11.86%", top: 0 }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(26,27,75,0) 0%, rgba(0,0,0,0.6) 60%, black 100%)" }} />
          <div className="absolute bottom-0 left-0 p-[24px] w-full flex flex-col gap-[20px]">
            <div className="bg-[#141454] flex gap-[6px] items-center px-[8px] py-[4px] rounded-[4px] w-fit">
              <p className="leading-[20px] text-[10px] text-white tracking-[0.4px] uppercase whitespace-nowrap" style={{ fontFamily: "'Source Sans Pro', sans-serif", fontWeight: 700 }}>Artist Spotlight</p>
            </div>
            <div>
              <p className="leading-[60px] text-[60px] text-white uppercase" style={{ fontFamily: "'Squada One', sans-serif" }}>The Midnight</p>
              <p className="leading-[60px] text-[60px] text-white uppercase" style={{ fontFamily: "'Squada One', sans-serif" }}>Echoes</p>
            </div>
            <div className="flex gap-[12px] items-center">
              <p className="leading-[20px] text-[14px] text-[rgba(255,255,255,0.7)] whitespace-nowrap" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Hard Rock</p>
              <div className="bg-[#007e7c] rounded-[9999px] size-[4px]" />
              <p className="leading-[20px] text-[14px] text-[rgba(255,255,255,0.7)] whitespace-nowrap" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>London, UK</p>
              <div className="bg-[#007e7c] rounded-[9999px] size-[4px]" />
              <p className="leading-[20px] text-[14px] text-[rgba(255,255,255,0.7)] whitespace-nowrap" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>12.5K Followers</p>
            </div>
          </div>
        </div>

        {/* Follow buttons */}
        <div className="flex items-start justify-between p-[24px] w-full">
          <button
            onClick={() => setFollowing(!following)}
            className="flex gap-[12px] items-center justify-center px-[24px] py-[16px] rounded-[6px] w-[256px] cursor-pointer transition-colors"
            style={{ backgroundColor: following ? "#005d5b" : "#007e7c" }}
          >
            <svg className="size-[24px]" fill="none" viewBox="0 0 22.8801 20.444">
              <path clipRule="evenodd" d={svgPaths.pce61800} fill="white" fillRule="evenodd" />
            </svg>
            <p className="leading-[24px] text-[18px] text-white whitespace-nowrap" style={{ fontFamily: "'Source Sans Pro', sans-serif", fontWeight: 700 }}>
              {following ? "FOLLOWING ✓" : "FOLLOW ARTIST"}
            </p>
          </button>
          <button className="bg-[#141454] flex items-center justify-center p-[16px] rounded-[6px] cursor-pointer hover:bg-[#1e1e70] transition-colors">
            <svg className="size-[24px]" fill="none" viewBox="0 0 22.0002 18">
              <path clipRule="evenodd" d={svgPaths.p171dfa00} fill="white" fillRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Social + verified */}
        <div className="flex items-center justify-between pb-[32px] px-[24px] w-full opacity-80">
          <div className="flex gap-[14px] items-center">
            {["Spotify", "YouTube", "Instagram"].map((social) => (
              <button key={social} className="flex flex-col items-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                <div className="flex items-center justify-center h-[30px] w-[30px]">
                  {social === "Spotify" && (
                    <svg className="size-[20px]" fill="none" viewBox="0 0 18.8571 18.8571">
                      <path d={svgPaths.p302f3080} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.71429" />
                      <path d={svgPaths.p1c435ebc} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.71429" />
                      <path d={svgPaths.p3393bc80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.71429" />
                      <path d={svgPaths.p33ee7c00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.71429" />
                    </svg>
                  )}
                  {social === "YouTube" && (
                    <svg className="size-[20px]" fill="none" viewBox="0 0 20.001 14.55">
                      <path clipRule="evenodd" d={svgPaths.p889d8f0} fill="white" fillRule="evenodd" />
                      <path clipRule="evenodd" d={svgPaths.pe47d200} fill="white" fillRule="evenodd" />
                    </svg>
                  )}
                  {social === "Instagram" && (
                    <svg className="size-[20px]" fill="none" viewBox="0 0 18.3333 18.3333">
                      <path clipRule="evenodd" d={svgPaths.p6339580} fill="white" fillRule="evenodd" />
                      <path d={svgPaths.pdab0c00} fill="white" />
                      <path clipRule="evenodd" d={svgPaths.p3f14f300} fill="white" fillRule="evenodd" />
                    </svg>
                  )}
                </div>
                <p className="text-[10px] text-white text-center tracking-[0.3px] whitespace-nowrap" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>{social}</p>
              </button>
            ))}
          </div>
          <div className="pb-[6px]" style={{ borderBottom: "2px solid rgba(0,126,124,0.5)" }}>
            <p className="leading-[15px] text-[#007e7c] text-[10px] tracking-[1px] uppercase" style={{ fontFamily: "'Source Sans Pro', sans-serif", fontWeight: 700 }}>Verified Profile</p>
          </div>
        </div>

        {/* The Story */}
        <div className="flex flex-col gap-[16px] items-start px-[24px] py-[16px] w-full">
          <div className="flex gap-[12px] items-center w-full">
            <p className="leading-[36px] text-[30px] text-white tracking-[1.5px] uppercase whitespace-nowrap" style={{ fontFamily: "'Squada One', sans-serif" }}>The Story</p>
            <div className="bg-[#272727] flex-1 h-px" />
          </div>
          <p className="leading-[26px] text-[16px] text-[rgba(255,255,255,0.6)]" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
            Blending gritty guitar riffs with soulful melodies since 2018,{" "}
            <span className="text-white">The Midnight Echoes</span>
            {" "}are a four-piece hard rock outfit from the heart of London. Known for high-energy live shows and anthemic choruses that have dominated the local scene.
          </p>
        </div>

        {/* Greatest Hits */}
        <div className="flex flex-col gap-[24px] items-start px-[24px] py-[32px] w-full">
          <div className="flex gap-[12px] items-center w-full">
            <p className="leading-[36px] text-[30px] text-white tracking-[1.5px] uppercase whitespace-nowrap" style={{ fontFamily: "'Squada One', sans-serif" }}>Greatest Hits</p>
            <div className="bg-[#272727] flex-1 h-px" />
          </div>
          <div className="flex flex-col gap-[12px] w-full">
            {[
              { num: "01", title: "Neon Rebellion", streams: "2.4M streams", img: imgBackgroundBorder },
              { num: "02", title: "Thunder & Grit", streams: "1.8M streams", img: imgBackgroundBorder1 },
            ].map(({ num, title, streams, img }) => (
              <div key={num} className="flex gap-[16px] items-center p-[13px]">
                <p className="leading-[32px] text-[24px] text-[#002e2d] w-[24px] shrink-0" style={{ fontFamily: "'Squada One', sans-serif" }}>{num}</p>
                <div className="relative rounded-[8px] shrink-0 size-[56px]" style={{ backgroundImage: `url("${img}")`, backgroundSize: "54px 54px", backgroundPosition: "top left" }}>
                  <div className="absolute inset-0 rounded-[8px]" style={{ border: "1px solid rgba(255,255,255,0.05)" }} />
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <p className="leading-[20px] text-[14px] text-white tracking-[-0.35px]" style={{ fontFamily: "'Source Sans Pro', sans-serif", fontWeight: 700 }}>{title}</p>
                  <p className="leading-[16px] text-[12px] text-[rgba(255,255,255,0.4)]" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>{streams}</p>
                </div>
                <button className="bg-[#000b0b] flex items-center justify-center rounded-[9999px] size-[40px] cursor-pointer hover:bg-[#001a1a] transition-colors shrink-0">
                  <svg className="h-[14px] w-[11px]" fill="none" viewBox="0 0 11 14">
                    <path d="M0 14V0L11 7L0 14V14" fill="#007E7C" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Live on Stage */}
        <div className="flex flex-col gap-[24px] items-start px-[24px] py-[16px] pb-[8px] w-full">
          <div className="flex gap-[12px] items-center w-full">
            <p className="leading-[36px] text-[30px] text-white tracking-[1.5px] uppercase whitespace-nowrap" style={{ fontFamily: "'Squada One', sans-serif" }}>Live on Stage</p>
            <div className="bg-[#272727] flex-1 h-px" />
          </div>
          <div className="flex flex-col gap-[16px] w-full">
            {[
              { month: "OCT", day: "15", venue: "Movistar Arena", loc: "Teusaquillo, Bogotá", soldOut: false },
              { month: "OCT", day: "24", venue: "The Underworld", loc: "Camden Town, London", soldOut: false },
              { month: "OCT", day: "24", venue: "The Underworld", loc: "Camden Town, London", soldOut: true },
            ].map(({ month, day, venue, loc, soldOut }, i) => (
              <div key={i} className="bg-[#090909] relative rounded-[8px] w-full" style={{ border: "2px solid #181818", opacity: soldOut ? 0.3 : 1 }}>
                <div className="flex items-center gap-[16px] p-[12px]">
                  <div className="bg-[#9aadf4] flex items-center justify-center px-[16px] py-[12px] rounded-[6px] shrink-0">
                    <div className="text-center" style={{ fontFamily: "'Squada One', sans-serif" }}>
                      <p className="leading-[16px] text-[18px] text-black">{month}</p>
                      <p className="leading-[16px] text-[18px] text-black">{day}</p>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <p className="leading-[1.25] text-[16px] text-white tracking-[0.48px] whitespace-nowrap" style={{ fontFamily: "'Source Sans Pro', sans-serif", fontWeight: 700 }}>{venue}</p>
                    <p className="leading-[20px] text-[12px] text-[rgba(255,255,255,0.4)]" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>{loc}</p>
                  </div>
                  {soldOut ? (
                    <div className="relative rounded-[6px]">
                      <div className="flex items-center justify-center p-[8px]">
                        <p className="leading-[20px] text-[#ebeffb] text-[14px]" style={{ fontFamily: "'Source Sans Pro', sans-serif", fontWeight: 700 }}>Sold Out</p>
                      </div>
                      <div className="absolute inset-0 pointer-events-none rounded-[6px]" style={{ border: "2px solid #ebeffb" }} />
                    </div>
                  ) : (
                    <button className="bg-[#002e2d] flex gap-[8px] items-center justify-center p-[8px] rounded-[6px] cursor-pointer hover:bg-[#003d3b] transition-colors shrink-0">
                      <p className="leading-[20px] text-[14px] text-white whitespace-nowrap" style={{ fontFamily: "'Source Sans Pro', sans-serif", fontWeight: 700 }}>Book Now</p>
                      <svg className="size-[16px]" fill="none" viewBox="0 0 10.6667 10.6667"><path d={svgPaths.p39d11c00} fill="white" stroke="white" /></svg>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom sticky nav */}
      <div className="bg-black px-[24px] pb-[20px] pt-[21px] w-full flex-shrink-0" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-[12px] items-center">
            <div className="bg-[#007e7c] flex items-center justify-center p-[12px] rounded-[6px]">
              <svg className="size-[20px]" fill="none" viewBox="0 0 17.5 12.5"><path d={svgPaths.p16d96780} fill="white" /></svg>
            </div>
            <div>
              <p className="text-[10px] text-white tracking-[0.5px] uppercase" style={{ fontFamily: "'Source Sans Pro', sans-serif", fontWeight: 700 }}>Next Gig</p>
              <p className="leading-[20px] text-[#007e7c] text-[12px]" style={{ fontFamily: "'Source Sans Pro', sans-serif", fontWeight: 700 }}>Camden • Oct 24</p>
            </div>
          </div>
          <button className="bg-white flex gap-[8px] items-center justify-center px-[24px] py-[16px] rounded-[6px] cursor-pointer hover:bg-gray-100 transition-colors">
            <p className="leading-[24px] text-[18px] text-black whitespace-nowrap" style={{ fontFamily: "'Source Sans Pro', sans-serif", fontWeight: 700 }}>GET TICKETS</p>
            <svg className="size-[24px]" fill="none" viewBox="0 0 16 16"><path d={svgPaths.p17e0ef80} fill="black" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// ── ROOT APP ───────────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState<Screen>("home");
  const [history, setHistory] = useState<Screen[]>([]);

  const navigate = (to: Screen) => {
    setHistory((h) => [...h, screen]);
    setScreen(to);
  };

  const goBack = () => {
    const prev = history[history.length - 1] ?? "home";
    setHistory((h) => h.slice(0, -1));
    setScreen(prev);
  };

  const getTranslate = (s: Screen) => {
    const order: Screen[] = ["home", "event", "artist"];
    const curr = order.indexOf(screen);
    const idx = order.indexOf(s);
    if (idx < curr) return "-100%";
    if (idx > curr) return "100%";
    return "0%";
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center">
      <div
        className="relative overflow-hidden"
        style={{
          width: "390px",
          height: "844px",
          borderRadius: "40px",
          boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0 40px 80px rgba(0,0,0,0.8)",
        }}
      >
        {(["home", "event", "artist"] as Screen[]).map((s) => (
          <div
            key={s}
            className="absolute inset-0 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(${getTranslate(s)})` }}
          >
            {s === "home" && (
              <HomeScreen
                onEventClick={() => navigate("event")}
                onArtistClick={() => navigate("artist")}
              />
            )}
            {s === "event" && (
              <EventDetailScreen onBack={goBack} onArtistClick={() => navigate("artist")} />
            )}
            {s === "artist" && (
              <ArtistScreen onBack={goBack} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
