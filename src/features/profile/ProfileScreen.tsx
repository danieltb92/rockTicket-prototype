import {
  Accessibility,
  Flame,
  Headphones,
  Shield,
  Ticket,
  User,
  WalletCards,
} from "lucide-react";
import { StatusBar } from "@/shared/components/StatusBar";
import { BottomNav } from "@/shared/components/BottomNav";
import type { TabScreen } from "@/shared/hooks/useNavigation";
import { ProfileRow } from "./components/ProfileRow";

export function ProfileScreen({
  onTabNavigate,
}: {
  onTabNavigate: (screen: TabScreen) => void;
}) {
  const rows = [
    { label: "Personal information", icon: <User className="size-[25px]" strokeWidth={2.2} /> },
    { label: "Payments and payout", icon: <WalletCards className="size-[25px]" strokeWidth={2.2} /> },
    { label: "Login & Security", icon: <Shield className="size-[25px]" strokeWidth={2.2} /> },
    { label: "Accessibility", icon: <Accessibility className="size-[25px]" strokeWidth={2.2} /> },
    { label: "Your orders", icon: <Ticket className="size-[25px]" strokeWidth={2.2} /> },
    { label: "Support", icon: <Headphones className="size-[25px]" strokeWidth={2.2} /> },
  ];

  return (
    <div className="bg-[#030404] flex flex-col h-full relative w-full">
      <div className="flex-1 overflow-y-auto scrollbar-none">
        <div className="bg-[#090202] pb-[30px]">
          <StatusBar />
          <div className="px-[24px] pt-[24px]">
            <p
              className="leading-[54px] text-[52px] text-white"
              style={{ fontFamily: "'Squada One', sans-serif" }}
            >
              Profile
            </p>
          </div>
          <div className="flex items-center gap-[20px] px-[24px] pt-[30px]">
            <div
              className="flex items-center justify-center rounded-full size-[80px] shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, #ffc400 0%, #88671e 48%, #141454 100%)",
                border: "5px solid #3338df",
              }}
            >
              <p
                className="leading-none text-[46px] text-white"
                style={{ fontFamily: "'Squada One', sans-serif" }}
              >
                PJ
              </p>
            </div>
            <div className="min-w-0 pt-[4px]">
              <p
                className="max-w-[230px] overflow-hidden leading-[38px] text-[36px] text-white tracking-[-0.4px] whitespace-nowrap"
                style={{ fontFamily: "'Squada One', sans-serif" }}
              >
                Pedro Jimenez
              </p>
              <p
                className="leading-[24px] text-[#9aadf4] text-[22px]"
                style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
              >
                Bogota, Colombia.
              </p>
              <div
                className="bg-white flex gap-[8px] items-center mt-[12px] px-[10px] py-[4px] rounded-[6px] w-fit"
                style={{ border: "2px solid #2d5bff" }}
              >
                <Flame
                  className="size-[14px] text-[#2252df]"
                  strokeWidth={2.5}
                />
                <p
                  className="leading-[16px] text-[#2252df] text-[12px] tracking-[0.2px] uppercase whitespace-nowrap"
                  style={{
                    fontFamily: "'Source Sans Pro', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  Backstage Fan
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-[24px] pb-[28px] pt-[22px]">
          <div className="flex items-center gap-[10px] w-full">
            <div className="bg-[#141454] flex h-[36px] items-center justify-center rounded-[6px] w-[54px] shrink-0">
              <p
                className="text-[14px] text-white"
                style={{
                  fontFamily: "'Source Sans Pro', sans-serif",
                  fontWeight: 700,
                }}
              >
                LVL.42
              </p>
            </div>
            <div className="bg-[#d1dbef] flex-1 h-[10px] overflow-hidden rounded-full">
              <div className="bg-[#3b31bb] h-full rounded-full w-1/2" />
            </div>
            <p
              className="leading-[24px] text-[16px] text-white w-[34px]"
              style={{
                fontFamily: "'Source Sans Pro', sans-serif",
                fontWeight: 700,
              }}
            >
              50%
            </p>
          </div>

          <div
            className="bg-[#181818] mt-[20px] rounded-[8px] px-[40px] py-[34px] w-full"
            style={{ border: "2px solid #2a2a2a" }}
          >
            <p
              className="leading-[18px] text-[#9aadf4] text-[16px] tracking-[0.5px] uppercase"
              style={{
                fontFamily: "'Source Sans Pro', sans-serif",
                fontWeight: 700,
              }}
            >
              •&nbsp;&nbsp; Overview
            </p>
            <div className="flex items-end justify-between pt-[28px]">
              {[
                { value: "13", label: "Artists Follow" },
                { value: "4", label: "Shows" },
                { value: "21", label: "Favorites" },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col items-center min-w-[74px]">
                  <p
                    className="leading-[64px] text-[64px] text-white"
                    style={{
                      fontFamily: "'Source Sans Pro', sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    {value}
                  </p>
                  <p
                    className="leading-[20px] text-[16px] text-white whitespace-nowrap"
                    style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-[18px] mt-[26px]">
            <p
              className="leading-[42px] text-[44px] text-white tracking-[1.4px] uppercase"
              style={{ fontFamily: "'Squada One', sans-serif" }}
            >
              Account
            </p>
            <div className="bg-[#303030] flex-1 h-px" />
          </div>

          <div className="mt-[34px]">
            {rows.map((row) => (
              <div key={row.label} className="border-b border-[#565656]">
                <ProfileRow icon={row.icon} label={row.label} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav active="profile" onNavigate={onTabNavigate} />
    </div>
  );
}
