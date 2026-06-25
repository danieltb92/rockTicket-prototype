import { useState, useCallback } from "react";

export type Screen = "home" | "event" | "artist" | "profile";
export type TabScreen = "home" | "profile";

export function useNavigation(initialScreen: Screen = "home") {
  const [screen, setScreen] = useState<Screen>(initialScreen);
  const [history, setHistory] = useState<Screen[]>([]);

  const navigate = useCallback(
    (to: Screen) => {
      setHistory((h) => [...h, screen]);
      setScreen(to);
    },
    [screen]
  );

  const navigateTab = useCallback((to: TabScreen) => {
    setHistory([]);
    setScreen(to);
  }, []);

  const goBack = useCallback(() => {
    const prev = history[history.length - 1] ?? "home";
    setHistory((h) => h.slice(0, -1));
    setScreen(prev);
  }, [history]);

  const getTranslate = useCallback(
    (s: Screen) => {
      const order: Screen[] = ["home", "event", "artist", "profile"];
      const curr = order.indexOf(screen);
      const idx = order.indexOf(s);
      if (idx < curr) return "-100%";
      if (idx > curr) return "100%";
      return "0%";
    },
    [screen]
  );

  return { screen, history, navigate, navigateTab, goBack, getTranslate };
}
