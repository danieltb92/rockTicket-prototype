import { StatusBar } from "@/shared/components/StatusBar";
import { OnboardingDots } from "../components/OnboardingDots";
import featureBg from "@/imports/onboarding/feature-bg.svg";

export function FeatureScreen({ onNext }: { onNext: () => void }) {
  return (
    <div className="bg-[#090909] flex flex-col h-full relative w-full">
      {/* Background gradient */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(135deg, #0a1628 0%, #0d1f3c 50%, #090909 100%)",
        }}
      />

      {/* Background image */}
      <img
        src={featureBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-[2]"
      />

      <div className="relative flex flex-col h-full z-[3]">
        <StatusBar />

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-end px-[24px] pb-[40px]">
          <div className="flex flex-col items-center gap-[16px] mb-[40px]">
            <p
              className="leading-[1.1] text-[44px] text-white text-center uppercase"
              style={{ fontFamily: "'Squada One', sans-serif" }}
            >
              NO TE
              <br />
              PIERDAS
              <br />
              NADA.
            </p>
            <p
              className="leading-[24px] text-[16px] text-[rgba(255,255,255,0.7)] text-center"
              style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
            >
              Aquí encontrarás los mejores
              <br />
              eventos de rock del talento
              <br />
              local de tu zona y los
              <br />
              principales artistas del género
            </p>
          </div>

          <OnboardingDots total={3} current={1} />

          <button
            onClick={onNext}
            className="w-full border border-white/30 flex items-center justify-center py-[16px] rounded-[8px] cursor-pointer hover:bg-white/5 transition-colors mt-[16px]"
          >
            <p
              className="leading-[24px] text-[18px] text-white"
              style={{
                fontFamily: "'Source Sans Pro', sans-serif",
                fontWeight: 700,
              }}
            >
              Siguiente
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
