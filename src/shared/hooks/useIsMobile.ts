import { useEffect, useState } from "react";

/**
 * Detecta si el dispositivo es móvil real (no desktop reducido).
 * Usa userAgent + screen width para evitar false positives en DevTools.
 */
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const ua = navigator.userAgent;
      const isMobileUA = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
      const isSmallScreen = window.innerWidth < 768;
      // Solo true si ES móvil real Y pantalla pequeña
      setIsMobile(isMobileUA && isSmallScreen);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
}