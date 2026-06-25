import { useEffect } from "react";
import logoSvg from "@/imports/onboarding/logo.svg";

export function SplashScreen({ onNext }: { onNext: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onNext, 2500);
    return () => clearTimeout(timer);
  }, [onNext]);

  return (
    <div
      onClick={onNext}
      className="bg-[#090909] flex flex-col h-full items-center justify-center relative w-full cursor-pointer"
    >
      <img src={logoSvg} alt="RockTicket" className="w-[225px] h-[96px]" />
    </div>
  );
}
