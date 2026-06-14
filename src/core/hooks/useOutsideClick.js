import { useEffect, useRef } from "react";

export const useOutsideClick = (handler, listenOnEscape = true) => {
  const domRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (domRef.current && !domRef.current.contains(event.target)) {
        handler();
      }
    };

    const handleKeyDown = (event) => {
      if (listenOnEscape && event.key === "Escape") {
        handler();
      }
    };

    document.addEventListener("pointerdown", handleClickOutside);
    if (listenOnEscape) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
      if (listenOnEscape) {
        window.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [handler, listenOnEscape]);

  return domRef;
};
