export function GenreChip({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="px-[16px] py-[8px] rounded-full cursor-pointer transition-all duration-200"
      style={{
        backgroundColor: selected ? "var(--color-gulf-950)" : "white/10",
        border: selected
          ? "1px solid var(--color-gulf-500)"
          : "1px solid white/20",
      }}
    >
      <p
        className="text-[14px] whitespace-nowrap"
        style={{
          fontFamily: "var(--font-body)",
          fontWeight: 600,
          color: selected ? "white" : "white/70",
        }}
      >
        {label}
      </p>
    </button>
  );
}
