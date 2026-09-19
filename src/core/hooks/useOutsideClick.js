import { useEffect, useRef } from "react";

export const useOutsideClick = (handler, listenOnEscape = true) => {
  const domRef = useRef(null);
  const handlerRef = useRef(handler);

  useEffect(() => {
    handlerRef.current = handler;
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        domRef.current &&
        event?.target &&
        !domRef.current.contains(event.target)
      ) {
        handlerRef.current?.();
      }
    };

    const handleKeyDown = (event) => {
      if (event?.key === "Escape") {
        handlerRef.current?.();
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
  }, [listenOnEscape]);

  return domRef;
};
