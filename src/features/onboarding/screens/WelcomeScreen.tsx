import { StatusBar } from "@/shared/components/StatusBar";
import { OnboardingDots } from "../components/OnboardingDots";
import welcomeBg from "@/imports/onboarding/welcome-bg.png";

export function WelcomeScreen({
  onStart,
  onGoToLogin,
}: {
  onStart: () => void;
  onGoToLogin: () => void;
}) {
  return (
    <div className="bg-[#090909] flex flex-col h-full relative w-full">
      {/* Background gradient */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 50%, #090909 100%)",
        }}
      />

      {/* Background image */}
      <img
        src={welcomeBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-[2]"
      />

      <div className="relative flex flex-col h-full z-[3]">
        <StatusBar />

        {/* Content */}
        <div className="w-full flex-1 flex flex-col items-start justify-end px-[24px] pb-[40px]">
          <div className="flex flex-col items-start gap-[16px] mb-[40px]">
            <p
              className="leading-[54px] text-[60px] text-white text-start uppercase"
              style={{ fontFamily: "'Squada One', sans-serif" }}
            >
              BIENVENIDO
              <br />
              AL POGO.
            </p>
            <p
              className="leading-[30px] text-[24px] text-[rgba(255,255,255,0.7)] text-start"
              style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
            >
              La app oficial para los
              <br />
              verdaderos amantes del rock.
            </p>
          </div>

          <div className="flex flex-col items-center gap-[16px] w-full">
            <button
              onClick={onStart}
              className="w-full bg-[#007e7c] flex items-center justify-center py-[16px] rounded-[8px] cursor-pointer hover:bg-[#006b69] transition-colors"
            >
              <p
                className="leading-[24px] text-[18px] text-white"
                style={{
                  fontFamily: "'Source Sans Pro', sans-serif",
                  fontWeight: 700,
                }}
              >
                Empezar
              </p>
            </button>

            <button
              onClick={onGoToLogin}
              className="cursor-pointer"
            >
              <p
                className="leading-[20px] text-[14px] text-[rgba(255,255,255,0.6)]"
                style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
              >
                Ya tengo cuenta
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
