import { useState } from "react";
import svgPaths from "@/imports/ExploreFlow/svg-1jcjc478ov";
import imgUnsplash from "@/imports/ExploreFlow/b433531d40de1cba12766d23f21b3cf4fc9869a5.png";
import { StatusBar } from "@/shared/components/StatusBar";

export function EventDetailScreen({
  onBack,
  onArtistClick,
}: {
  onBack: () => void;
  onArtistClick: () => void;
}) {
  const [calendarOn, setCalendarOn] = useState(false);

  return (
    <div className="bg-background flex flex-col h-full relative w-full">
      {/* Floating back header */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <StatusBar />
        <div className="flex h-[76px] items-center justify-start px-[24px] w-full">
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
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-none">
        {/* Hero */}
        <div
          className="relative overflow-hidden"
          style={{ aspectRatio: "4/5" }}
        >
          <img
            alt="The Midnight Echoes"
            className="absolute max-w-none object-cover size-full"
            src={imgUnsplash}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(5,5,5,0) 0%, #050505 100%)",
            }}
          />
          <div className="absolute bottom-0 left-0 p-[24px] w-full flex flex-col gap-[20px]">
            <div className="flex gap-[8px] items-center">
              <div className="bg-gulf-950 flex gap-[6px] items-center px-[8px] py-[4px] rounded-[4px]">
                <p
                  className="leading-[20px] text-[10px] text-white tracking-[1px] uppercase whitespace-nowrap"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 700,
                  }}
                >
                  Local Talent
                </p>
              </div>
              <div className="bg-teal-700 flex gap-[6px] items-center px-[8px] py-[4px] rounded-[4px]">
                <p
                  className="leading-[20px] text-[10px] text-white tracking-[1px] uppercase whitespace-nowrap"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 700,
                  }}
                >
                  Official Event
                </p>
              </div>
            </div>
            <div>
              <p
                className="leading-[61.2px] text-[60px] text-white uppercase"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                The midnight
              </p>
              <p
                className="leading-[61.2px] text-[60px] text-white uppercase"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                echoes
              </p>
            </div>
            <div className="flex gap-[8px] items-center">
              <svg
                className="size-[10px] shrink-0"
                fill="none"
                viewBox="0 0 9.33333 11.6667"
              >
                <path d={svgPaths.pd490b00} fill="var(--color-gulf-700)" />
              </svg>
              <p
                className="leading-[20px] text-gulf-400 text-[14px] tracking-[0.35px] uppercase whitespace-nowrap"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 700,
                }}
              >
                Invitados: The Void
              </p>
            </div>
          </div>
        </div>

        {/* Info card */}
        <div className="px-[24px] py-[6px] w-full">
          <div
            className="bg-background relative rounded-[8px] w-full"
            style={{ border: "1px solid var(--color-zinc-700)" }}
          >
            <div
              className="flex items-center gap-[16px] pb-[21px] pt-[20px] px-[20px]"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
            >
              <div className="bg-teal-950 flex items-center justify-center p-[12px] rounded-[6px] shrink-0">
                <svg
                  className="size-[20px]"
                  fill="none"
                  viewBox="0 0 16.6667 18.3333"
                >
                  <path
                    clipRule="evenodd"
                    d={svgPaths.p1854c300}
                    fill="var(--color-teal-300)"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p
                  className="leading-[28px] text-[18px] text-white whitespace-nowrap"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 700,
                  }}
                >
                  Viernes, 15 de Octubre
                </p>
                <p
                  className="leading-[20px] text-[14px] text-white/40"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Puertas: 20:00 • Show: 21:30
                </p>
              </div>
            </div>
            <div
              className="flex items-center justify-between pb-[21px] pt-[20px] px-[20px]"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
            >
              <div className="flex items-center gap-[16px]">
                <div className="bg-teal-950 flex items-center justify-center p-[12px] rounded-[6px] shrink-0">
                  <svg
                    className="size-[20px]"
                    fill="none"
                    viewBox="0 0 13.75 17.5"
                  >
                    <path d={svgPaths.p1ef64900} fill="var(--color-teal-300)" />
                  </svg>
                </div>
                <div>
                  <p
                    className="leading-[28px] text-[18px] text-white whitespace-nowrap"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 700,
                    }}
                  >
                    Arena de Rock Ciudad
                  </p>
                  <p
                    className="leading-[20px] text-[14px] text-white/40 whitespace-nowrap"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Av. Principal 450, Centro
                  </p>
                </div>
              </div>
              <button className="flex items-center justify-center p-[12px] rounded-[6px] cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
                <svg
                  className="size-[20px]"
                  fill="none"
                  viewBox="0 0 18.3333 18.3333"
                >
                  <path d={svgPaths.p18a11a40} fill="var(--color-teal-900)" />
                  <path
                    clipRule="evenodd"
                    d={svgPaths.pa5bae80}
                    fill="var(--color-teal-900)"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center gap-[16px] p-[20px]">
              <div className="bg-teal-950 flex items-center justify-center p-[12px] rounded-[6px] shrink-0">
                <svg
                  className="size-[20px]"
                  fill="none"
                  viewBox="0 0 15.0039 17.5"
                >
                  <path d={svgPaths.p1b48db00} fill="var(--color-teal-300)" />
                </svg>
              </div>
              <div>
                <p
                  className="leading-[28px] text-[18px] text-white whitespace-nowrap"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 700,
                  }}
                >
                  $45.00 — $120.00
                </p>
                <p
                  className="leading-[20px] text-[14px] text-white/40 whitespace-nowrap"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Garantía oficial RockTicket
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Calendar toggle */}
        <div className="px-[24px] py-[8px] w-full">
          <div
            className="bg-zinc-999 relative rounded-[8px] w-full"
            style={{ border: "1px solid white/10" }}
          >
            <div className="flex items-center justify-between p-[17px]">
              <div className="bg-teal-3 flex items-center justify-center p-[8px] rounded-[6px]">
                <svg
                  className="size-[16px]"
                  fill="none"
                  viewBox="0 0 13 14.5"
                >
                  <path d={svgPaths.p159bf700} fill="var(--color-teal-300)" />
                </svg>
              </div>
              <p
                className="leading-[20px] text-[14px] text-white tracking-[0.7px] uppercase flex-1 px-[12px]"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 700,
                }}
              >
                Añadir al calendario
              </p>
              <button
                onClick={() => setCalendarOn(!calendarOn)}
                className="h-[24px] relative rounded-[999px] w-[40px] cursor-pointer transition-colors"
                style={{
                  backgroundColor: calendarOn ? "var(--color-teal-700)" : "transparent",
                }}
              >
                <div
                  className="absolute inset-0 rounded-[999px]"
                  style={{ border: "2px solid var(--color-gulf-300)" }}
                />
                <div
                  className="absolute top-1/2 -translate-y-1/2 bg-zinc-800 rounded-[9999px] size-[16px] transition-all duration-200"
                  style={{
                    left: calendarOn ? "calc(100% - 20px)" : "4px",
                  }}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Sobre el show */}
        <div className="flex flex-col gap-[16px] items-start px-[24px] py-[16px] w-full">
          <div className="flex gap-[12px] items-center w-full">
            <p
              className="leading-[32px] text-[30px] text-white tracking-[0.6px] uppercase whitespace-nowrap"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Sobre el Show
            </p>
            <div className="bg-zinc-800 flex-1 h-px" />
          </div>
          <p
            className="leading-[24.38px] text-[15px] text-white/60"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Crimson Rebellion regresa a casa para una noche de caos puro.
            Prepárate para el lanzamiento de su nuevo álbum "Echoes of the
            Underground". Un show visceral con visuales impactantes y la energía
            cruda que solo el rock local puede ofrecer.
          </p>
          <button
            onClick={onArtistClick}
            className="relative rounded-[6px] w-full cursor-pointer hover:bg-white/5 transition-colors"
          >
            <div className="flex items-center justify-center px-[24px] py-[16px]">
              <p
                className="leading-[20px] text-gulf-100 text-[16px]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Ver perfil del artista
              </p>
            </div>
            <div
              className="absolute inset-0 pointer-events-none rounded-[6px]"
              style={{ border: "2px solid var(--color-gulf-100)" }}
            />
          </button>
        </div>
      </div>

      {/* Bottom CTA */}
      <div
        className="bg-zinc-black px-[24px] pb-[20px] pt-[8px] w-full flex-shrink-0"
        style={{ borderTop: "1px solid white/10" }}
      >
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col items-center p-[16px]">
              <p
                className="leading-[24px] text-[12px] text-white"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 700,
                }}
              >
                DESDE
              </p>
              <p
                className="leading-[24px] text-[30px] text-white"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 700,
                }}
              >
                $45
              </p>
            </div>
            <button className="bg-teal-700 flex flex-1 gap-[12px] items-center justify-center p-[16px] rounded-[6px] mx-[8px] cursor-pointer hover:bg-teal-800 transition-colors">
              <p
                className="leading-[24px] text-[18px] text-white whitespace-nowrap"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 700,
                }}
              >
                COMPRAR ENTRADAS
              </p>
              <svg
                className="size-[20px]"
                fill="none"
                viewBox="0 0 21 15"
              >
                <path d={svgPaths.p282f8480} fill="white" />
              </svg>
            </button>
          </div>
          <p
            className="leading-[13.5px] text-[9px] text-white/10 text-center tracking-[1.8px] uppercase mt-[4px]"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 700,
            }}
          >
            Powered by RockTicket Official Platform
          </p>
        </div>
      </div>
    </div>
  );
}
