import {
  Heart,
  Home,
  Search,
  Ticket,
  User,
} from "lucide-react";
import type { TabScreen } from "@/shared/hooks/useNavigation";

/**
 * Bottom navigation bar.
 * Colors from Figma tokens:
 *   Active:   teal 700 (#007E7C)
 *   Inactive: zinc 700 (#404040)
 *   Background: black (#000000)
 *   Divider: zinc 800 (#272727)
 */
export function BottomNav({
  active,
  onNavigate,
  isMobile = false,
}: {
  active: TabScreen;
  onNavigate: (screen: TabScreen) => void;
  isMobile?: boolean;
}) {
  const items: Array<{ label: string; tab?: TabScreen }> = [
    { label: "Home", tab: "home" },
    { label: "Search" },
    { label: "Tickets" },
    { label: "My Bands" },
    { label: "Profile", tab: "profile" },
  ];

  const navStyles = isMobile
    ? {
        position: "fixed" as const,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        paddingBottom: "env(safe-area-inset-bottom, 0)",
        backgroundColor: "var(--color-zinc-black)",
      }
    : {};

  const containerStyles = isMobile
    ? { borderTop: "1px solid var(--color-zinc-800)" }
    : {};

  return (
    <div
      className="h-[80px] left-0 w-full z-[1] flex-shrink-0"
      style={navStyles}
    >
      <div className="bg-zinc-black flex flex-col gap-[2px] h-full items-start overflow-clip w-full" style={containerStyles}>
        <div className="bg-zinc-800 h-px opacity-20 w-full" />
        <div className="flex gap-[8px] items-start px-[8px] w-full pb-[8px]">
          {items.map(({ label, tab }) => {
            const isActive = tab === active;
            const color = isActive ? "var(--color-teal-700)" : "var(--color-zinc-700)";

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
                    fontFamily: "var(--font-body)",
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