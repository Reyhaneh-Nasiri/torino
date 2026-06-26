import { useCallback, useMemo, useSyncExternalStore } from "react";

const getServerSnapshot = () => false;

export const useMediaQuery = (query) => {
  const media = useMemo(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query);
    }
    return null;
  }, [query]);

  const subscribe = useCallback(
    (callback) => {
      if (!media) return () => {};

      media.addEventListener("change", callback);
      return () => media.removeEventListener("change", callback);
    },
    [media],
  );

  const getSnapshot = useCallback(() => {
    return media ? media.matches : false;
  }, [media]);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};
