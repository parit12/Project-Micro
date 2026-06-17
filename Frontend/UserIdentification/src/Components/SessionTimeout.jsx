import { useEffect } from "react";

export function useSessionTimeout(timeoutMs, onTimeout) {
  useEffect(() => {
    let timer;

    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(onTimeout, timeoutMs);
    };

    globalThis.addEventListener("keydown", resetTimer);
    globalThis.addEventListener("mousemove", resetTimer);

    resetTimer();

    return () => {
      globalThis.removeEventListener("keydown", resetTimer);
      globalThis.removeEventListener("mousemove", resetTimer);
      clearTimeout(timer);
    };
  }, [onTimeout, timeoutMs]);
}
