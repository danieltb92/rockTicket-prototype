import { useEffect, useState } from "react";

/**
 * Detecta si el dispositivo es móvil real (no desktop reducido).
 * Usa userAgent + screen width para evitar false positives en DevTools.
 * En desarrollo, se puede forzar con ?mobile=1 en la URL o localStorage.mobile=1
 */
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      // Forzar modo móvil en desarrollo (URL param o localStorage)
      const forceMobile = typeof window !== "undefined" && 
        (new URLSearchParams(window.location.search).get("mobile") === "1" ||
         localStorage.getItem("mobile") === "1");
      
      if (forceMobile) {
        setIsMobile(true);
        return;
      }

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