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
    <div className="bg-[#090909] flex flex-col h-full relative w-full">
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
              <div className="bg-[#141454] flex gap-[6px] items-center px-[8px] py-[4px] rounded-[4px]">
                <p
                  className="leading-[20px] text-[10px] text-white tracking-[1px] uppercase whitespace-nowrap"
                  style={{
                    fontFamily: "'Source Sans Pro', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  Local Talent
                </p>
              </div>
              <div className="bg-[#007e7c] flex gap-[6px] items-center px-[8px] py-[4px] rounded-[4px]">
                <p
                  className="leading-[20px] text-[10px] text-white tracking-[1px] uppercase whitespace-nowrap"
                  style={{
                    fontFamily: "'Source Sans Pro', sans-serif",
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
                style={{ fontFamily: "'Squada One', sans-serif" }}
              >
                The midnight
              </p>
              <p
                className="leading-[61.2px] text-[60px] text-white uppercase"
                style={{ fontFamily: "'Squada One', sans-serif" }}
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
                <path d={svgPaths.pd490b00} fill="#3B42D3" />
              </svg>
              <p
                className="leading-[20px] text-[#9aadf4] text-[14px] tracking-[0.35px] uppercase whitespace-nowrap"
                style={{
                  fontFamily: "'Source Sans Pro', sans-serif",
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
            className="bg-[#090909] relative rounded-[8px] w-full"
            style={{ border: "1px solid #404040" }}
          >
            <div
              className="flex items-center gap-[16px] pb-[21px] pt-[20px] px-[20px]"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
            >
              <div className="bg-[#002e2d] flex items-center justify-center p-[12px] rounded-[6px] shrink-0">
                <svg
                  className="size-[20px]"
                  fill="none"
                  viewBox="0 0 16.6667 18.3333"
                >
                  <path
                    clipRule="evenodd"
                    d={svgPaths.p1854c300}
                    fill="#93C9C7"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p
                  className="leading-[28px] text-[18px] text-white whitespace-nowrap"
                  style={{
                    fontFamily: "'Source Sans Pro', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  Viernes, 15 de Octubre
                </p>
                <p
                  className="leading-[20px] text-[14px] text-[rgba(255,255,255,0.4)]"
                  style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
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
                <div className="bg-[#002e2d] flex items-center justify-center p-[12px] rounded-[6px] shrink-0">
                  <svg
                    className="size-[20px]"
                    fill="none"
                    viewBox="0 0 13.75 17.5"
                  >
                    <path d={svgPaths.p1ef64900} fill="#93C9C7" />
                  </svg>
                </div>
                <div>
                  <p
                    className="leading-[28px] text-[18px] text-white whitespace-nowrap"
                    style={{
                      fontFamily: "'Source Sans Pro', sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    Arena de Rock Ciudad
                  </p>
                  <p
                    className="leading-[20px] text-[14px] text-[rgba(255,255,255,0.4)] whitespace-nowrap"
                    style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
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
                  <path d={svgPaths.p18a11a40} fill="#00504E" />
                  <path
                    clipRule="evenodd"
                    d={svgPaths.pa5bae80}
                    fill="#00504E"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center gap-[16px] p-[20px]">
              <div className="bg-[#002e2d] flex items-center justify-center p-[12px] rounded-[6px] shrink-0">
                <svg
                  className="size-[20px]"
                  fill="none"
                  viewBox="0 0 15.0039 17.5"
                >
                  <path d={svgPaths.p1b48db00} fill="#93C9C7" />
                </svg>
              </div>
              <div>
                <p
                  className="leading-[28px] text-[18px] text-white whitespace-nowrap"
                  style={{
                    fontFamily: "'Source Sans Pro', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  $45.00 — $120.00
                </p>
                <p
                  className="leading-[20px] text-[14px] text-[rgba(255,255,255,0.4)] whitespace-nowrap"
                  style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
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
            className="bg-[#010101] relative rounded-[8px] w-full"
            style={{ border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <div className="flex items-center justify-between p-[17px]">
              <div className="bg-[#001d1d] flex items-center justify-center p-[8px] rounded-[6px]">
                <svg
                  className="size-[16px]"
                  fill="none"
                  viewBox="0 0 13 14.5"
                >
                  <path d={svgPaths.p159bf700} fill="#93C9C7" />
                </svg>
              </div>
              <p
                className="leading-[20px] text-[14px] text-white tracking-[0.7px] uppercase flex-1 px-[12px]"
                style={{
                  fontFamily: "'Source Sans Pro', sans-serif",
                  fontWeight: 700,
                }}
              >
                Añadir al calendario
              </p>
              <button
                onClick={() => setCalendarOn(!calendarOn)}
                className="h-[24px] relative rounded-[999px] w-[40px] cursor-pointer transition-colors"
                style={{
                  backgroundColor: calendarOn ? "#007e7c" : "transparent",
                }}
              >
                <div
                  className="absolute inset-0 rounded-[999px]"
                  style={{ border: "2px solid #bdc8f1" }}
                />
                <div
                  className="absolute top-1/2 -translate-y-1/2 bg-[#272727] rounded-[9999px] size-[16px] transition-all duration-200"
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
              style={{ fontFamily: "'Squada One', sans-serif" }}
            >
              Sobre el Show
            </p>
            <div className="bg-[#272727] flex-1 h-px" />
          </div>
          <p
            className="leading-[24.38px] text-[15px] text-[rgba(255,255,255,0.6)]"
            style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
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
                className="leading-[20px] text-[#ebeffb] text-[16px]"
                style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
              >
                Ver perfil del artista
              </p>
            </div>
            <div
              className="absolute inset-0 pointer-events-none rounded-[6px]"
              style={{ border: "2px solid #ebeffb" }}
            />
          </button>
        </div>
      </div>

      {/* Bottom CTA */}
      <div
        className="bg-black px-[24px] pb-[20px] pt-[8px] w-full flex-shrink-0"
        style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
      >
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col items-center p-[16px]">
              <p
                className="leading-[24px] text-[12px] text-white"
                style={{
                  fontFamily: "'Source Sans Pro', sans-serif",
                  fontWeight: 700,
                }}
              >
                DESDE
              </p>
              <p
                className="leading-[24px] text-[30px] text-white"
                style={{
                  fontFamily: "'Source Sans Pro', sans-serif",
                  fontWeight: 700,
                }}
              >
                $45
              </p>
            </div>
            <button className="bg-[#007e7c] flex flex-1 gap-[12px] items-center justify-center p-[16px] rounded-[6px] mx-[8px] cursor-pointer hover:bg-[#006b69] transition-colors">
              <p
                className="leading-[24px] text-[18px] text-white whitespace-nowrap"
                style={{
                  fontFamily: "'Source Sans Pro', sans-serif",
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
            className="leading-[13.5px] text-[9px] text-[rgba(255,255,255,0.1)] text-center tracking-[1.8px] uppercase mt-[4px]"
            style={{
              fontFamily: "'Source Sans Pro', sans-serif",
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
