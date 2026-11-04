import { useState } from "react";
import { cn } from "@/app/components/ui/utils";
import svgPaths from "@/imports/ExploreFlow/svg-1jcjc478ov";
import imgSection from "@/imports/ExploreFlow/49d72399db1c94f16bbf9602e5e863673d0f9c87.png";
import imgBackgroundBorder from "@/imports/ExploreFlow/f1a1719a473706f7484e063b8901701ab535998c.png";
import imgBackgroundBorder1 from "@/imports/ExploreFlow/65ac0ca1d450c7e231ffe8219025936555d9aef9.png";
import { StatusBar } from "@/shared/components/StatusBar";
import { useIsMobile } from "@/shared/hooks/useIsMobile";

export function ArtistScreen({ onBack }: { onBack: () => void }) {
  const [following, setFollowing] = useState(false);
  const isMobile = useIsMobile();

  const headerHeight = isMobile ? "calc(var(--status-bar-height) + 76px)" : "0";
  const bottomNavHeight = isMobile ? "calc(120px + env(safe-area-inset-bottom, 0))" : "0";

  return (
    <div className="bg-background flex flex-col h-full relative w-full">
      {/* Floating header - fixed en móvil, absolute en desktop */}
      <div
        className={cn("left-0 right-0 z-10", isMobile ? "fixed top-0" : "absolute top-0")}
        style={{
          top: isMobile ? "env(safe-area-inset-top, 0)" : 0,
        }}
      >
        <StatusBar />
        <div className="flex h-[76px] items-center justify-between px-6 w-full">
          <button
            onClick={onBack}
            className="flex items-center justify-center p-3 rounded-[6px] cursor-pointer hover:bg-white/10 transition-colors"
          >
            <svg
              className="size-5"
              fill="none"
              viewBox="0 0 13.3333 13.3333"
            >
              <path d={svgPaths.p25894700} fill="white" />
            </svg>
          </button>
          <button className="flex items-center justify-center p-3 rounded-[6px] cursor-pointer hover:bg-white/10 transition-colors">
            <svg
              className="size-5"
              fill="none"
              viewBox="0 0 16.6667 18.3333"
            >
              <path
                clipRule="evenodd"
                d={svgPaths.pb60bef0}
                fill="white"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className="flex-1 overflow-y-auto scrollbar-none"
        style={{
          paddingTop: headerHeight,
          paddingBottom: bottomNavHeight,
        }}
      >
        {/* Hero */}
        <div className="h-[480px] relative overflow-hidden shrink-0">
          <img
            alt="The Midnight Echoes"
            className="absolute max-w-none object-cover"
            src={imgSection}
            style={{
              height: "100%",
              width: "123.71%",
              left: "-11.86%",
              top: 0,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(26,27,75,0) 0%, rgba(0,0,0,0.6) 60%, black 100%)",
            }}
          />
          <div className="absolute bottom-0 left-0 p-6 w-full flex flex-col gap-5">
            <div className="bg-gulf-950 flex gap-1.5 items-center px-2 py-1 rounded-sm">
              <p
                className="leading-5 text-[10px] text-white tracking-[1px] uppercase whitespace-nowrap font-bold"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Artist Spotlight
              </p>
            </div>
            <div>
              <p
                className="leading-[61.2px] text-[60px] text-white uppercase"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                The Midnight
              </p>
              <p
                className="leading-[61.2px] text-[60px] text-white uppercase"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Echoes
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <p
                className="leading-5 text-[14px] text-white/70 whitespace-nowrap"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Hard Rock
              </p>
              <div className="bg-teal-700 rounded-full size-1" />
              <p
                className="leading-5 text-[14px] text-white/70 whitespace-nowrap"
                style={{ fontFamily: "var(--font-body)" }}
              >
                London, UK
              </p>
              <div className="bg-teal-700 rounded-full size-1" />
              <p
                className="leading-5 text-[14px] text-white/70 whitespace-nowrap"
                style={{ fontFamily: "var(--font-body)" }}
              >
                12.5K Followers
              </p>
            </div>
          </div>
        </div>

        {/* Follow buttons */}
        <div className="flex items-start justify-between p-6 w-full">
          <button
            onClick={() => setFollowing(!following)}
            className="flex gap-3 items-center justify-center px-6 py-4 rounded-[6px] w-[256px] cursor-pointer transition-colors"
            style={{
              backgroundColor: following ? "#005d5b" : "var(--color-teal-700)",
            }}
          >
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 22.8801 20.444"
            >
              <path
                clipRule="evenodd"
                d={svgPaths.pce61800}
                fill="white"
                fillRule="evenodd"
              />
            </svg>
            <p
              className="leading-6 text-[18px] text-white whitespace-nowrap font-bold"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {following ? "FOLLOWING ✓" : "FOLLOW ARTIST"}
            </p>
          </button>
          <button className="bg-gulf-950 flex items-center justify-center p-4 rounded-[6px] cursor-pointer hover:bg-gulf-900 transition-colors">
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 22.0002 18"
            >
              <path
                clipRule="evenodd"
                d={svgPaths.p171dfa00}
                fill="white"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Social + verified */}
        <div className="flex items-center justify-between pb-8 px-6 w-full opacity-80">
          <div className="flex gap-3.5 items-center">
            {["Spotify", "YouTube", "Instagram"].map((social) => (
              <button
                key={social}
                className="flex flex-col items-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
              >
                <div className="flex items-center justify-center h-7.5 w-7.5">
                  {social === "Spotify" && (
                    <svg className="size-5" fill="none" viewBox="0 0 18.8571 18.8571">
                      <path d={svgPaths.p302f3080} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.71429" />
                      <path d={svgPaths.p1c435ebc} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.71429" />
                      <path d={svgPaths.p3393bc80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.71429" />
                      <path d={svgPaths.p33ee7c00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.71429" />
                    </svg>
                  )}
                  {social === "YouTube" && (
                    <svg className="size-5" fill="none" viewBox="0 0 20.001 14.55">
                      <path clipRule="evenodd" d={svgPaths.p889d8f0} fill="white" fillRule="evenodd" />
                      <path clipRule="evenodd" d={svgPaths.pe47d200} fill="white" fillRule="evenodd" />
                    </svg>
                  )}
                  {social === "Instagram" && (
                    <svg className="size-5" fill="none" viewBox="0 0 18.3333 18.3333">
                      <path clipRule="evenodd" d={svgPaths.p6339580} fill="white" fillRule="evenodd" />
                      <path d={svgPaths.pdab0c00} fill="white" />
                      <path clipRule="evenodd" d={svgPaths.p3f14f300} fill="white" fillRule="evenodd" />
                    </svg>
                  )}
                </div>
                <p
                  className="text-[10px] text-white text-center tracking-[0.3px] whitespace-nowrap"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {social}
                </p>
              </button>
            ))}
          </div>
          <div className="pb-1.5" style={{ borderBottom: "2px solid rgba(0,126,124,0.5)" }}>
            <p
              className="leading-[15px] text-teal-700 text-[10px] tracking-[1px] uppercase font-bold"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Verified Profile
            </p>
          </div>
        </div>

        {/* The Story */}
        <div className="flex flex-col gap-4 items-start px-6 py-4 w-full">
          <div className="flex gap-3 items-center w-full">
            <p
              className="leading-9 text-[30px] text-white tracking-[1.5px] uppercase whitespace-nowrap"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              The Story
            </p>
            <div className="bg-zinc-800 flex-1 h-px" />
          </div>
          <p
            className="leading-6.5 text-[16px] text-white/60"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Blending gritty guitar riffs with soulful melodies since 2018,{" "}
            <span className="text-white">The Midnight Echoes</span> are a
            four-piece hard rock outfit from the heart of London. Known for
            high-energy live shows and anthemic choruses that have dominated the
            local scene.
          </p>
        </div>

        {/* Greatest Hits */}
        <div className="flex flex-col gap-6 items-start px-6 py-8 w-full">
          <div className="flex gap-3 items-center w-full">
            <p
              className="leading-9 text-[30px] text-white tracking-[1.5px] uppercase whitespace-nowrap"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Greatest Hits
            </p>
            <div className="bg-zinc-800 flex-1 h-px" />
          </div>
          <div className="flex flex-col gap-3 w-full">
            {[
              {
                num: "01",
                title: "Neon Rebellion",
                streams: "2.4M streams",
                img: imgBackgroundBorder,
              },
              {
                num: "02",
                title: "Thunder & Grit",
                streams: "1.8M streams",
                img: imgBackgroundBorder1,
              },
            ].map(({ num, title, streams, img }) => (
              <div key={num} className="flex gap-4 items-center p-3.25">
                <p
                  className="leading-8 text-[24px] text-teal-950 w-6 shrink-0"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {num}
                </p>
                <div
                  className="relative rounded-[8px] shrink-0 size-14"
                  style={{
                    backgroundImage: `url("${img}")`,
                    backgroundSize: "54px 54px",
                    backgroundPosition: "top left",
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-[8px]"
                    style={{ border: "1px solid rgba(255,255,255,0.05)" }}
                  />
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <p
                    className="leading-5 text-[14px] text-white tracking-[-0.35px] font-bold"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {title}
                  </p>
                  <p
                    className="leading-4 text-[12px] text-white/40"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {streams}
                  </p>
                </div>
                <button className="bg-teal-999 flex items-center justify-center rounded-full size-10 cursor-pointer hover:bg-teal-950 transition-colors shrink-0">
                  <svg
                    className="h-3.5 w-2.75"
                    fill="none"
                    viewBox="0 0 11 14"
                  >
                    <path
                      d="M0 14V0L11 7L0 14V14"
                      fill="var(--color-teal-700)"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Live on Stage */}
        <div className="flex flex-col gap-6 items-start px-6 py-4 pb-2 w-full">
          <div className="flex gap-3 items-center w-full">
            <p
              className="leading-9 text-[30px] text-white tracking-[1.5px] uppercase whitespace-nowrap"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Live on Stage
            </p>
            <div className="bg-zinc-800 flex-1 h-px" />
          </div>
          <div className="flex flex-col gap-4 w-full">
            {[
              {
                month: "OCT",
                day: "15",
                venue: "Movistar Arena",
                loc: "Teusaquillo, Bogotá",
                soldOut: false,
              },
              {
                month: "OCT",
                day: "24",
                venue: "The Underworld",
                loc: "Camden Town, London",
                soldOut: false,
              },
              {
                month: "OCT",
                day: "24",
                venue: "The Underworld",
                loc: "Camden Town, London",
                soldOut: true,
              },
            ].map(({ month, day, venue, loc, soldOut }, i) => (
              <div
                key={i}
                className="bg-background relative rounded-[8px] w-full"
                style={{
                  border: "2px solid var(--color-zinc-900)",
                  opacity: soldOut ? 0.3 : 1,
                }}
              >
                <div className="flex items-center gap-4 p-3">
                  <div className="bg-gulf-400 flex items-center justify-center px-4 py-3 rounded-[6px] shrink-0">
                    <div className="text-center" style={{ fontFamily: "var(--font-heading)" }}>
                      <p className="leading-4 text-[18px] text-black">{month}</p>
                      <p className="leading-4 text-[18px] text-black">{day}</p>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <p
                      className="leading-1.25 text-[16px] text-white tracking-[0.48px] whitespace-nowrap font-bold"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {venue}
                    </p>
                    <p
                      className="leading-5 text-[12px] text-white/40"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {loc}
                    </p>
                  </div>
                  {soldOut ? (
                    <div className="relative rounded-[6px]">
                      <div className="flex items-center justify-center p-2">
                        <p
                          className="leading-5 text-gulf-100 text-[14px] font-bold"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          Sold Out
                        </p>
                      </div>
                      <div
                        className="absolute inset-0 pointer-events-none rounded-[6px]"
                        style={{ border: "2px solid var(--color-gulf-100)" }}
                      />
                    </div>
                  ) : (
                    <button className="bg-teal-950 flex gap-2 items-center justify-center p-2 rounded-[6px] cursor-pointer hover:bg-teal-800 transition-colors shrink-0">
                      <p
                        className="leading-5 text-[14px] text-white whitespace-nowrap font-bold"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Book Now
                      </p>
                      <svg
                        className="size-4"
                        fill="none"
                        viewBox="0 0 10.6667 10.6667"
                      >
                        <path d={svgPaths.p39d11c00} fill="white" stroke="white" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom sticky nav - fixed en móvil, absolute en desktop */}
      <div
        className={cn(
          "bg-zinc-black px-6 pb-5 pt-5.25 w-full flex-shrink-0",
          isMobile ? "fixed bottom-0 left-0 right-0" : "absolute bottom-0 left-0 right-0"
        )}
        style={{
          borderTop: "1px solid white/10",
          bottom: isMobile ? "env(safe-area-inset-bottom, 0)" : 0,
        }}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-3 items-center">
            <div className="bg-teal-700 flex items-center justify-center p-3 rounded-[6px]">
              <svg
                className="size-5"
                fill="none"
                viewBox="0 0 17.5 12.5"
              >
                <path d={svgPaths.p16d96780} fill="white" />
              </svg>
            </div>
            <div>
              <p
                className="text-[10px] text-white tracking-[0.5px] uppercase font-bold"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Next Gig
              </p>
              <p
                className="leading-5 text-teal-700 text-[12px] font-bold"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Camden • Oct 24
              </p>
            </div>
          </div>
          <button className="bg-white flex gap-2 items-center justify-center px-6 py-4 rounded-[6px] cursor-pointer hover:bg-zinc-100 transition-colors">
            <p
              className="leading-6 text-[18px] text-black whitespace-nowrap font-bold"
              style={{ fontFamily: "var(--font-body)" }}
            >
              GET TICKETS
            </p>
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 16 16"
            >
              <path d={svgPaths.p17e0ef80} fill="black" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}