import { useState, useEffect, useCallback } from "react";

interface OnboardingData {
  onboardingCompleted: boolean;
  isLoggedIn: boolean;
  selectedGenres: string[];
  locationEnabled: boolean;
  notificationsEnabled: boolean;
  authProvider: "google" | "facebook" | null;
  user: { name: string; email: string } | null;
}

const STORAGE_KEY = "rockticket_onboarding";

const DEFAULT_DATA: OnboardingData = {
  onboardingCompleted: false,
  isLoggedIn: false,
  selectedGenres: [],
  locationEnabled: false,
  notificationsEnabled: false,
  authProvider: null,
  user: null,
};

function loadFromStorage(): OnboardingData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...DEFAULT_DATA, ...JSON.parse(raw) };
  } catch {}
  return DEFAULT_DATA;
}

function saveToStorage(data: OnboardingData) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {}
}

export function useOnboardingState() {
  const [data, setData] = useState<OnboardingData>(loadFromStorage);

  useEffect(() => {
    saveToStorage(data);
  }, [data]);

  const completeOnboarding = useCallback(
    (genres: string[], location: boolean, notifications: boolean) => {
      setData((prev) => ({
        ...prev,
        onboardingCompleted: true,
        selectedGenres: genres,
        locationEnabled: location,
        notificationsEnabled: notifications,
      }));
    },
    []
  );

  const login = useCallback((provider: "google" | "facebook") => {
    setData((prev) => ({
      ...prev,
      isLoggedIn: true,
      authProvider: provider,
      user: { name: "Rock Fan", email: "fan@rockticket.com" },
    }));
  }, []);

  const skipLogin = useCallback(() => {
    setData((prev) => ({
      ...prev,
      onboardingCompleted: true,
      isLoggedIn: true,
      user: { name: "Guest", email: "" },
    }));
  }, []);

  const logout = useCallback(() => {
    setData(DEFAULT_DATA);
  }, []);

  return {
    ...data,
    completeOnboarding,
    login,
    skipLogin,
    logout,
  };
}
