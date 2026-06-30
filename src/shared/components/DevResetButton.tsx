import { useEffect } from "react";

const STORAGE_KEY = "rockticket_onboarding";

function resetPrototype() {
  localStorage.removeItem(STORAGE_KEY);
  window.location.reload();
}

export function DevResetButton() {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "R") {
        e.preventDefault();
        resetPrototype();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <button
      onClick={resetPrototype}
      className="fixed bottom-6 right-6 z-50 px-3 py-1.5 rounded-full text-xs cursor-pointer transition-opacity hover:opacity-100 opacity-40"
      style={{
        backgroundColor: "rgba(0,0,0,0.6)",
        border: "1px solid rgba(255,255,255,0.2)",
        color: "white",
        fontFamily: "'Source Sans Pro', sans-serif",
      }}
    >
      Reset
    </button>
  );
}
