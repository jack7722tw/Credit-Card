"use client";

import { useEffect, useState, useCallback } from "react";

const KEY = "ccb.ownedCards.v1";

export function readOwned(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const v = window.localStorage.getItem(KEY);
    return v ? (JSON.parse(v) as string[]) : [];
  } catch {
    return [];
  }
}

function writeOwned(ids: string[]) {
  window.localStorage.setItem(KEY, JSON.stringify(ids));
  window.dispatchEvent(new Event("ccb:owned-changed"));
}

export function useOwnedCards() {
  const [owned, setOwned] = useState<string[]>([]);

  useEffect(() => {
    setOwned(readOwned());
    const onChange = () => setOwned(readOwned());
    window.addEventListener("ccb:owned-changed", onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener("ccb:owned-changed", onChange);
      window.removeEventListener("storage", onChange);
    };
  }, []);

  const toggle = useCallback((id: string) => {
    const cur = readOwned();
    const next = cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id];
    writeOwned(next);
  }, []);

  const setAll = useCallback((ids: string[]) => {
    writeOwned(ids);
  }, []);

  return { owned, toggle, setAll, ownedSet: new Set(owned) };
}
