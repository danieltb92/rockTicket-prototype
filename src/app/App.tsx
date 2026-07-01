import { MobileFrame } from "@/shared/components/MobileFrame";
import { useNavigation } from "@/shared/hooks/useNavigation";
import { useOnboardingState } from "@/shared/hooks/useOnboardingState";
import { OnboardingFlow } from "@/features/onboarding/OnboardingFlow";
import { LoginScreen } from "@/features/auth/LoginScreen";
import { HomeScreen } from "@/features/home/HomeScreen";
import { EventDetailScreen } from "@/features/home/EventDetailScreen";
import { ArtistScreen } from "@/features/home/ArtistScreen";
import { ProfileScreen } from "@/features/profile/ProfileScreen";
import { AppShell } from "@/shared/components/AppShell";

export default function App() {
  const {
    onboardingCompleted,
    isLoggedIn,
    completeOnboarding,
    login,
  } = useOnboardingState();
  const { screen, navigate, navigateTab, goBack } = useNavigation();

  // Onboarding flow
  if (!onboardingCompleted) {
    return (
      <AppShell>
        <MobileFrame>
          <OnboardingFlow
            onComplete={completeOnboarding}
            onLogin={login}
          />
        </MobileFrame>
      </AppShell>
    );
  }

  // Login screen (for "Ya tengo cuenta")
  if (!isLoggedIn) {
    return (
      <AppShell>
        <MobileFrame>
          <LoginScreen
            onLogin={login}
            onBack={() => {
              /* no-op: can't go back from login */
            }}
          />
        </MobileFrame>
      </AppShell>
    );
  }

  // Main app
  return (
    <AppShell>
    <MobileFrame>
      <div className="absolute inset-0 transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(${screen === "home" ? "0%" : "-100%"})` }}>
        <HomeScreen
          onEventClick={() => navigate("event")}
          onArtistClick={() => navigate("artist")}
          onTabNavigate={navigateTab}
        />
      </div>

      <div className="absolute inset-0 transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(${screen === "event" ? "0%" : screen === "home" || screen === "artist" || screen === "profile" ? "100%" : "-100%"})` }}>
        <EventDetailScreen
          onBack={goBack}
          onArtistClick={() => navigate("artist")}
        />
      </div>

      <div className="absolute inset-0 transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(${screen === "artist" ? "0%" : "100%"})` }}>
        <ArtistScreen onBack={goBack} />
      </div>

      <div className="absolute inset-0 transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(${screen === "profile" ? "0%" : "100%"})` }}>
        <ProfileScreen onTabNavigate={navigateTab} />
      </div>
    </MobileFrame>
    </AppShell>
  );
}
