import { StatusBar } from "@/shared/components/StatusBar";
import { OnboardingDots } from "../components/OnboardingDots";
import { GenreChip } from "../components/GenreChip";
import genreBg from "@/imports/onboarding/genre-bg.svg";

const GENRES = [
  "Metal",
  "Classic",
  "Punk",
  "Indie",
  "Trash",
  "Alternative",
  "Grunge",
  "Hardcore",
];

export function GenreScreen({
  selectedGenres,
  onToggleGenre,
  onContinue,
}: {
  selectedGenres: string[];
  onToggleGenre: (genre: string) => void;
  onContinue: () => void;
}) {
  const canContinue = selectedGenres.length >= 3;

  return (
    <div className="bg-[#090909] flex flex-col h-full relative w-full">
      {/* Background gradient */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(135deg, #0a1a1a 0%, #0d2a2a 50%, #090909 100%)",
        }}
      />

      {/* Background image */}
      <img
        src={genreBg}
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
              ¿QUÉ TE HACE
              <br />
              SACUDIR LA
              <br />
              CABEZA?
            </p>
            <p
              className="leading-[30px] text-[24px] text-[rgba(255,255,255,0.7)] text-start"
              style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
            >
              Selecciona al menos 3
              <br />
              géneros para personalizar tu
              <br />
              cartelera
            </p>
          </div>

          {/* Genre chips */}
          <div className="flex flex-wrap gap-[8px] justify-start mb-[16px]">
            {GENRES.map((genre) => (
              <GenreChip
                key={genre}
                label={genre}
                selected={selectedGenres.includes(genre)}
                onClick={() => onToggleGenre(genre)}
              />
            ))}
          </div>

          <OnboardingDots total={4} current={2} />

          <button
            onClick={onContinue}
            disabled={!canContinue}
            className="w-full border border-white/30 flex items-center justify-center py-[16px] rounded-[8px] cursor-pointer transition-colors mt-[16px]"
            style={{
              opacity: canContinue ? 1 : 0.4,
              borderColor: canContinue ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.1)",
            }}
          >
            <p
              className="leading-[24px] text-[18px] text-white"
              style={{
                fontFamily: "'Source Sans Pro', sans-serif",
                fontWeight: 700,
              }}
            >
              Continuar
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
