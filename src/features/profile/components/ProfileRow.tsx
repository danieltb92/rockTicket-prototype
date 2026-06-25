import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

export function ProfileRow({
  icon,
  label,
}: {
  icon: ReactNode;
  label: string;
}) {
  return (
    <button className="flex h-[58px] items-center w-full cursor-pointer text-left">
      <div className="flex items-center justify-center w-[62px] shrink-0 text-white">
        {icon}
      </div>
      <p
        className="flex-1 leading-[24px] text-[16px] text-white"
        style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
      >
        {label}
      </p>
      <ChevronRight className="mr-[18px] size-[28px] text-white" strokeWidth={3} />
    </button>
  );
}
