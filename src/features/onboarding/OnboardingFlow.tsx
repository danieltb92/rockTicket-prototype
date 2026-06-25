import { useState } from "react";
import { WelcomeScreen } from "./screens/WelcomeScreen";
import { SplashScreen } from "./screens/SplashScreen";
import { FeatureScreen } from "./screens/FeatureScreen";
import { GenreScreen } from "./screens/GenreScreen";
import { LocationScreen } from "./screens/LocationScreen";
import { ProfileCreateScreen } from "./screens/ProfileCreateScreen";

type OnboardingStep = "splash" | "welcome" | "feature" | "genre" | "location" | "profile";

export function OnboardingFlow({
  onComplete,
  onLogin,
}: {
  onComplete: (
    genres: string[],
    location: boolean,
    notifications: boolean
  ) => void;
  onLogin: (provider: "google" | "facebook") => void;
}) {
  const [step, setStep] = useState<OnboardingStep>("splash");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const toggleGenre = (genre: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const handleComplete = () => {
    onComplete(selectedGenres, locationEnabled, notificationsEnabled);
  };

  const handleSkipAll = () => {
    onComplete([], false, false);
  };

  switch (step) {
    case "splash":
      return <SplashScreen onNext={() => setStep("welcome")} />;

    case "welcome":
      return (
        <WelcomeScreen
          onStart={() => setStep("feature")}
          onGoToLogin={handleSkipAll}
        />
      );

    case "feature":
      return <FeatureScreen onNext={() => setStep("genre")} />;

    case "genre":
      return (
        <GenreScreen
          selectedGenres={selectedGenres}
          onToggleGenre={toggleGenre}
          onContinue={() => setStep("location")}
        />
      );

    case "location":
      return (
        <LocationScreen
          locationEnabled={locationEnabled}
          onToggleLocation={() => setLocationEnabled(!locationEnabled)}
          notificationsEnabled={notificationsEnabled}
          onToggleNotifications={() =>
            setNotificationsEnabled(!notificationsEnabled)
          }
          onActivate={() => setStep("profile")}
          onSkip={handleSkipAll}
        />
      );

    case "profile":
      return (
        <ProfileCreateScreen
          onGoogle={() => {
            handleComplete();
            onLogin("google");
          }}
          onFacebook={() => {
            handleComplete();
            onLogin("facebook");
          }}
          onSkip={handleComplete}
        />
      );

    default:
      return null;
  }
}
