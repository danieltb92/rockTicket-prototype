import { StatusBar } from "@/shared/components/StatusBar";
import { OnboardingDots } from "../components/OnboardingDots";
import locationBg from "@/imports/onboarding/location-bg.svg";

export function LocationScreen({
  locationEnabled,
  onToggleLocation,
  notificationsEnabled,
  onToggleNotifications,
  onActivate,
  onSkip,
}: {
  locationEnabled: boolean;
  onToggleLocation: () => void;
  notificationsEnabled: boolean;
  onToggleNotifications: () => void;
  onActivate: () => void;
  onSkip: () => void;
}) {
  return (
    <div className="bg-[#090909] flex flex-col h-full relative w-full">
      {/* Background gradient */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(135deg, #1a0a28 0%, #2a0d3c 50%, #090909 100%)",
        }}
      />

      {/* Background image */}
      <img
        src={locationBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-[2]"
      />

      <div className="relative flex flex-col h-full z-[3]">
        <StatusBar />

        {/* Content */}
        <div className="w-full flex-1 flex flex-col items-start justify-end px-[24px] pb-[40px]">
          <div className="flex flex-col items-start gap-[16px] mb-[32px]">
            <p
              className="leading-[54px] text-[60px] text-white text-start uppercase"
              style={{ fontFamily: "'Squada One', sans-serif" }}
            >
              ENCUENTRA EL
              <br />
              UNDERGROUND.
            </p>
          </div>

          {/* Toggles */}
          <div className="flex flex-col gap-[16px] w-full mb-[16px]">
            {/* Location toggle */}
            <div
              className="flex items-center justify-between p-[16px] rounded-[8px]"
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <div className="flex-1 pr-[16px]">
                <p
                  className="leading-[20px] text-[14px] text-white"
                  style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
                >
                  Activa tu ubicación para ver los recintos y bares de rock más
                  cercanos.
                </p>
              </div>
              <button
                onClick={onToggleLocation}
                className="h-[24px] relative rounded-[999px] w-[40px] cursor-pointer transition-colors shrink-0"
                style={{
                  backgroundColor: locationEnabled ? "#007e7c" : "transparent",
                }}
              >
                <div
                  className="absolute inset-0 rounded-[999px]"
                  style={{ border: "2px solid #bdc8f1" }}
                />
                <div
                  className="absolute top-1/2 -translate-y-1/2 bg-[#272727] rounded-[9999px] size-[16px] transition-all duration-200"
                  style={{
                    left: locationEnabled ? "calc(100% - 20px)" : "4px",
                  }}
                />
              </button>
            </div>

            {/* Notifications toggle */}
            <div
              className="flex items-center justify-between p-[16px] rounded-[8px]"
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <div className="flex-1 pr-[16px]">
                <p
                  className="leading-[20px] text-[14px] text-white"
                  style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
                >
                  Activa notificaciones para ser el primero en enterarte de las
                  preventas.
                </p>
              </div>
              <button
                onClick={onToggleNotifications}
                className="h-[24px] relative rounded-[999px] w-[40px] cursor-pointer transition-colors shrink-0"
                style={{
                  backgroundColor: notificationsEnabled
                    ? "#007e7c"
                    : "transparent",
                }}
              >
                <div
                  className="absolute inset-0 rounded-[999px]"
                  style={{ border: "2px solid #bdc8f1" }}
                />
                <div
                  className="absolute top-1/2 -translate-y-1/2 bg-[#272727] rounded-[9999px] size-[16px] transition-all duration-200"
                  style={{
                    left: notificationsEnabled
                      ? "calc(100% - 20px)"
                      : "4px",
                  }}
                />
              </button>
            </div>
          </div>

          <OnboardingDots total={4} current={3} />

          <div className="flex flex-col gap-[12px] w-full mt-[16px]">
            <button
              onClick={onActivate}
              className="w-full bg-[#007e7c] flex items-center justify-center py-[16px] rounded-[8px] cursor-pointer hover:bg-[#006b69] transition-colors"
            >
              <p
                className="leading-[24px] text-[18px] text-white"
                style={{
                  fontFamily: "'Source Sans Pro', sans-serif",
                  fontWeight: 700,
                }}
              >
                Activar experiencia completa
              </p>
            </button>

            <button onClick={onSkip} className="cursor-pointer">
              <p
                className="leading-[20px] text-[14px] text-[rgba(255,255,255,0.6)] text-center"
                style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
              >
                Configurar después
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
