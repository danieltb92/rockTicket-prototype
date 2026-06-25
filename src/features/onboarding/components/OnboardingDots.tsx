export function OnboardingDots({
  total,
  current,
}: {
  total: number;
  current: number;
}) {
  return (
    <div className="flex gap-[8px] items-center justify-center py-[16px]">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className="rounded-full transition-all duration-300"
          style={{
            width: i === current ? "8px" : "6px",
            height: i === current ? "8px" : "6px",
            backgroundColor: i === current ? "#007e7c" : "rgba(255,255,255,0.3)",
          }}
        />
      ))}
    </div>
  );
}
