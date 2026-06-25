import { useState } from "react";
import svgPaths from "@/imports/ExploreFlow/svg-1jcjc478ov";
import imgSection from "@/imports/ExploreFlow/49d72399db1c94f16bbf9602e5e863673d0f9c87.png";
import imgBackgroundBorder from "@/imports/ExploreFlow/f1a1719a473706f7484e063b8901701ab535998c.png";
import imgBackgroundBorder1 from "@/imports/ExploreFlow/65ac0ca1d450c7e231ffe8219025936555d9aef9.png";
import { StatusBar } from "@/shared/components/StatusBar";

export function ArtistScreen({ onBack }: { onBack: () => void }) {
  const [following, setFollowing] = useState(false);

  return (
    <div className="bg-[#090909] flex flex-col h-full relative w-full">
      {/* Floating header */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <StatusBar />
        <div className="flex h-[76px] items-center justify-between px-[24px] w-full">
          <button
            onClick={onBack}
            className="flex items-center justify-center p-[12px] rounded-[6px] cursor-pointer hover:bg-white/10 transition-colors"
          >
            <svg
              className="size-[20px]"
              fill="none"
              viewBox="0 0 13.3333 13.3333"
            >
              <path d={svgPaths.p25894700} fill="white" />
            </svg>
          </button>
          <button className="flex items-center justify-center p-[12px] rounded-[6px] cursor-pointer hover:bg-white/10 transition-colors">
            <svg
              className="size-[20px]"
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

      <div className="flex-1 overflow-y-auto scrollbar-none">
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
          <div className="absolute bottom-0 left-0 p-[24px] w-full flex flex-col gap-[20px]">
            <div className="bg-[#141454] flex gap-[6px] items-center px-[8px] py-[4px] rounded-[4px] w-fit">
              <p
                className="leading-[20px] text-[10px] text-white tracking-[0.4px] uppercase whitespace-nowrap"
                style={{
                  fontFamily: "'Source Sans Pro', sans-serif",
                  fontWeight: 700,
                }}
              >
                Artist Spotlight
              </p>
            </div>
            <div>
              <p
                className="leading-[60px] text-[60px] text-white uppercase"
                style={{ fontFamily: "'Squada One', sans-serif" }}
              >
                The Midnight
              </p>
              <p
                className="leading-[60px] text-[60px] text-white uppercase"
                style={{ fontFamily: "'Squada One', sans-serif" }}
              >
                Echoes
              </p>
            </div>
            <div className="flex gap-[12px] items-center">
              <p
                className="leading-[20px] text-[14px] text-[rgba(255,255,255,0.7)] whitespace-nowrap"
                style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
              >
                Hard Rock
              </p>
              <div className="bg-[#007e7c] rounded-[9999px] size-[4px]" />
              <p
                className="leading-[20px] text-[14px] text-[rgba(255,255,255,0.7)] whitespace-nowrap"
                style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
              >
                London, UK
              </p>
              <div className="bg-[#007e7c] rounded-[9999px] size-[4px]" />
              <p
                className="leading-[20px] text-[14px] text-[rgba(255,255,255,0.7)] whitespace-nowrap"
                style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
              >
                12.5K Followers
              </p>
            </div>
          </div>
        </div>

        {/* Follow buttons */}
        <div className="flex items-start justify-between p-[24px] w-full">
          <button
            onClick={() => setFollowing(!following)}
            className="flex gap-[12px] items-center justify-center px-[24px] py-[16px] rounded-[6px] w-[256px] cursor-pointer transition-colors"
            style={{
              backgroundColor: following ? "#005d5b" : "#007e7c",
            }}
          >
            <svg
              className="size-[24px]"
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
              className="leading-[24px] text-[18px] text-white whitespace-nowrap"
              style={{
                fontFamily: "'Source Sans Pro', sans-serif",
                fontWeight: 700,
              }}
            >
              {following ? "FOLLOWING ✓" : "FOLLOW ARTIST"}
            </p>
          </button>
          <button className="bg-[#141454] flex items-center justify-center p-[16px] rounded-[6px] cursor-pointer hover:bg-[#1e1e70] transition-colors">
            <svg
              className="size-[24px]"
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
        <div className="flex items-center justify-between pb-[32px] px-[24px] w-full opacity-80">
          <div className="flex gap-[14px] items-center">
            {["Spotify", "YouTube", "Instagram"].map((social) => (
              <button
                key={social}
                className="flex flex-col items-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
              >
                <div className="flex items-center justify-center h-[30px] w-[30px]">
                  {social === "Spotify" && (
                    <svg
                      className="size-[20px]"
                      fill="none"
                      viewBox="0 0 18.8571 18.8571"
                    >
                      <path
                        d={svgPaths.p302f3080}
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.71429"
                      />
                      <path
                        d={svgPaths.p1c435ebc}
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.71429"
                      />
                      <path
                        d={svgPaths.p3393bc80}
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.71429"
                      />
                      <path
                        d={svgPaths.p33ee7c00}
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.71429"
                      />
                    </svg>
                  )}
                  {social === "YouTube" && (
                    <svg
                      className="size-[20px]"
                      fill="none"
                      viewBox="0 0 20.001 14.55"
                    >
                      <path
                        clipRule="evenodd"
                        d={svgPaths.p889d8f0}
                        fill="white"
                        fillRule="evenodd"
                      />
                      <path
                        clipRule="evenodd"
                        d={svgPaths.pe47d200}
                        fill="white"
                        fillRule="evenodd"
                      />
                    </svg>
                  )}
                  {social === "Instagram" && (
                    <svg
                      className="size-[20px]"
                      fill="none"
                      viewBox="0 0 18.3333 18.3333"
                    >
                      <path
                        clipRule="evenodd"
                        d={svgPaths.p6339580}
                        fill="white"
                        fillRule="evenodd"
                      />
                      <path d={svgPaths.pdab0c00} fill="white" />
                      <path
                        clipRule="evenodd"
                        d={svgPaths.p3f14f300}
                        fill="white"
                        fillRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <p
                  className="text-[10px] text-white text-center tracking-[0.3px] whitespace-nowrap"
                  style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
                >
                  {social}
                </p>
              </button>
            ))}
          </div>
          <div
            className="pb-[6px]"
            style={{ borderBottom: "2px solid rgba(0,126,124,0.5)" }}
          >
            <p
              className="leading-[15px] text-[#007e7c] text-[10px] tracking-[1px] uppercase"
              style={{
                fontFamily: "'Source Sans Pro', sans-serif",
                fontWeight: 700,
              }}
            >
              Verified Profile
            </p>
          </div>
        </div>

        {/* The Story */}
        <div className="flex flex-col gap-[16px] items-start px-[24px] py-[16px] w-full">
          <div className="flex gap-[12px] items-center w-full">
            <p
              className="leading-[36px] text-[30px] text-white tracking-[1.5px] uppercase whitespace-nowrap"
              style={{ fontFamily: "'Squada One', sans-serif" }}
            >
              The Story
            </p>
            <div className="bg-[#272727] flex-1 h-px" />
          </div>
          <p
            className="leading-[26px] text-[16px] text-[rgba(255,255,255,0.6)]"
            style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
          >
            Blending gritty guitar riffs with soulful melodies since 2018,{" "}
            <span className="text-white">The Midnight Echoes</span> are a
            four-piece hard rock outfit from the heart of London. Known for
            high-energy live shows and anthemic choruses that have dominated the
            local scene.
          </p>
        </div>

        {/* Greatest Hits */}
        <div className="flex flex-col gap-[24px] items-start px-[24px] py-[32px] w-full">
          <div className="flex gap-[12px] items-center w-full">
            <p
              className="leading-[36px] text-[30px] text-white tracking-[1.5px] uppercase whitespace-nowrap"
              style={{ fontFamily: "'Squada One', sans-serif" }}
            >
              Greatest Hits
            </p>
            <div className="bg-[#272727] flex-1 h-px" />
          </div>
          <div className="flex flex-col gap-[12px] w-full">
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
              <div key={num} className="flex gap-[16px] items-center p-[13px]">
                <p
                  className="leading-[32px] text-[24px] text-[#002e2d] w-[24px] shrink-0"
                  style={{ fontFamily: "'Squada One', sans-serif" }}
                >
                  {num}
                </p>
                <div
                  className="relative rounded-[8px] shrink-0 size-[56px]"
                  style={{
                    backgroundImage: `url("${img}")`,
                    backgroundSize: "54px 54px",
                    backgroundPosition: "top left",
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-[8px]"
                    style={{
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                  />
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <p
                    className="leading-[20px] text-[14px] text-white tracking-[-0.35px]"
                    style={{
                      fontFamily: "'Source Sans Pro', sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    {title}
                  </p>
                  <p
                    className="leading-[16px] text-[12px] text-[rgba(255,255,255,0.4)]"
                    style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
                  >
                    {streams}
                  </p>
                </div>
                <button className="bg-[#000b0b] flex items-center justify-center rounded-[9999px] size-[40px] cursor-pointer hover:bg-[#001a1a] transition-colors shrink-0">
                  <svg
                    className="h-[14px] w-[11px]"
                    fill="none"
                    viewBox="0 0 11 14"
                  >
                    <path
                      d="M0 14V0L11 7L0 14V14"
                      fill="#007E7C"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Live on Stage */}
        <div className="flex flex-col gap-[24px] items-start px-[24px] py-[16px] pb-[8px] w-full">
          <div className="flex gap-[12px] items-center w-full">
            <p
              className="leading-[36px] text-[30px] text-white tracking-[1.5px] uppercase whitespace-nowrap"
              style={{ fontFamily: "'Squada One', sans-serif" }}
            >
              Live on Stage
            </p>
            <div className="bg-[#272727] flex-1 h-px" />
          </div>
          <div className="flex flex-col gap-[16px] w-full">
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
                className="bg-[#090909] relative rounded-[8px] w-full"
                style={{
                  border: "2px solid #181818",
                  opacity: soldOut ? 0.3 : 1,
                }}
              >
                <div className="flex items-center gap-[16px] p-[12px]">
                  <div className="bg-[#9aadf4] flex items-center justify-center px-[16px] py-[12px] rounded-[6px] shrink-0">
                    <div
                      className="text-center"
                      style={{ fontFamily: "'Squada One', sans-serif" }}
                    >
                      <p className="leading-[16px] text-[18px] text-black">
                        {month}
                      </p>
                      <p className="leading-[16px] text-[18px] text-black">
                        {day}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <p
                      className="leading-[1.25] text-[16px] text-white tracking-[0.48px] whitespace-nowrap"
                      style={{
                        fontFamily: "'Source Sans Pro', sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      {venue}
                    </p>
                    <p
                      className="leading-[20px] text-[12px] text-[rgba(255,255,255,0.4)]"
                      style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
                    >
                      {loc}
                    </p>
                  </div>
                  {soldOut ? (
                    <div className="relative rounded-[6px]">
                      <div className="flex items-center justify-center p-[8px]">
                        <p
                          className="leading-[20px] text-[#ebeffb] text-[14px]"
                          style={{
                            fontFamily: "'Source Sans Pro', sans-serif",
                            fontWeight: 700,
                          }}
                        >
                          Sold Out
                        </p>
                      </div>
                      <div
                        className="absolute inset-0 pointer-events-none rounded-[6px]"
                        style={{ border: "2px solid #ebeffb" }}
                      />
                    </div>
                  ) : (
                    <button className="bg-[#002e2d] flex gap-[8px] items-center justify-center p-[8px] rounded-[6px] cursor-pointer hover:bg-[#003d3b] transition-colors shrink-0">
                      <p
                        className="leading-[20px] text-[14px] text-white whitespace-nowrap"
                        style={{
                          fontFamily: "'Source Sans Pro', sans-serif",
                          fontWeight: 700,
                        }}
                      >
                        Book Now
                      </p>
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
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom sticky nav */}
      <div
        className="bg-black px-[24px] pb-[20px] pt-[21px] w-full flex-shrink-0"
        style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-[12px] items-center">
            <div className="bg-[#007e7c] flex items-center justify-center p-[12px] rounded-[6px]">
              <svg
                className="size-[20px]"
                fill="none"
                viewBox="0 0 17.5 12.5"
              >
                <path d={svgPaths.p16d96780} fill="white" />
              </svg>
            </div>
            <div>
              <p
                className="text-[10px] text-white tracking-[0.5px] uppercase"
                style={{
                  fontFamily: "'Source Sans Pro', sans-serif",
                  fontWeight: 700,
                }}
              >
                Next Gig
              </p>
              <p
                className="leading-[20px] text-[#007e7c] text-[12px]"
                style={{
                  fontFamily: "'Source Sans Pro', sans-serif",
                  fontWeight: 700,
                }}
              >
                Camden • Oct 24
              </p>
            </div>
          </div>
          <button className="bg-white flex gap-[8px] items-center justify-center px-[24px] py-[16px] rounded-[6px] cursor-pointer hover:bg-gray-100 transition-colors">
            <p
              className="leading-[24px] text-[18px] text-black whitespace-nowrap"
              style={{
                fontFamily: "'Source Sans Pro', sans-serif",
                fontWeight: 700,
              }}
            >
              GET TICKETS
            </p>
            <svg
              className="size-[24px]"
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
