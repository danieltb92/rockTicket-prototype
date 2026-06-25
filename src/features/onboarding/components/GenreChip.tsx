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
        backgroundColor: selected ? "#141454" : "rgba(255,255,255,0.1)",
        border: selected
          ? "1px solid #697fdf"
          : "1px solid rgba(255,255,255,0.2)",
      }}
    >
      <p
        className="text-[14px] whitespace-nowrap"
        style={{
          fontFamily: "'Source Sans Pro', sans-serif",
          fontWeight: 600,
          color: selected ? "white" : "rgba(255,255,255,0.7)",
        }}
      >
        {label}
      </p>
    </button>
  );
}
