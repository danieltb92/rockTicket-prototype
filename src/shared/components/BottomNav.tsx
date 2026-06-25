import {
  Heart,
  Home,
  Search,
  Ticket,
  User,
} from "lucide-react";
import type { TabScreen } from "@/shared/hooks/useNavigation";

export function BottomNav({
  active,
  onNavigate,
}: {
  active: TabScreen;
  onNavigate: (screen: TabScreen) => void;
}) {
  const items: Array<{ label: string; tab?: TabScreen }> = [
    { label: "Home", tab: "home" },
    { label: "Search" },
    { label: "Tickets" },
    { label: "My Bands" },
    { label: "Profile", tab: "profile" },
  ];

  return (
    <div className="h-[80px] left-0 w-full z-[1] flex-shrink-0">
      <div className="bg-black flex flex-col gap-[2px] h-full items-start overflow-clip w-full">
        <div className="bg-[#272727] h-px opacity-20 w-full" />
        <div className="flex gap-[8px] items-start px-[8px] w-full">
          {items.map(({ label, tab }) => {
            const isActive = tab === active;
            const color = isActive ? "#007E7C" : "#404040";

            return (
              <button
                key={label}
                onClick={() => tab && onNavigate(tab)}
                className="flex flex-1 flex-col gap-[8px] items-center min-w-0 py-[9px] cursor-pointer disabled:cursor-default bg-transparent"
                disabled={!tab}
              >
                <div className="size-[24px] flex items-center justify-center">
                  {label === "Home" && (
                    <Home className="size-[24px]" color={color} strokeWidth={2.25} />
                  )}
                  {label === "Search" && (
                    <Search className="size-[24px]" color={color} strokeWidth={2.25} />
                  )}
                  {label === "Tickets" && (
                    <Ticket className="size-[24px]" color={color} strokeWidth={2.25} />
                  )}
                  {label === "My Bands" && (
                    <Heart className="size-[25px]" color={color} strokeWidth={2.25} />
                  )}
                  {label === "Profile" && (
                    <User className="size-[25px]" color={color} strokeWidth={2.25} />
                  )}
                </div>
                <p
                  className="leading-none text-[12px] text-center tracking-[-0.12px] w-full"
                  style={{
                    fontFamily: "'Source Sans Pro', sans-serif",
                    color,
                  }}
                >
                  {label}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
