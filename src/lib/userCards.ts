"use client";

import { useEffect, useState, useCallback } from "react";
import { CARD_MAP } from "@/data";

const KEY = "ccb.ownedCards.v1";

/**
 * Read owned card IDs from localStorage. Defensive against tampered/corrupted
 * data (must be an array of strings) and drops IDs for cards that no longer
 * exist in the dataset, while preserving every still-valid selection.
 */
export function readOwned(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const v = window.localStorage.getItem(KEY);
    if (!v) return [];
    const parsed: unknown = JSON.parse(v);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (id): id is string => typeof id === "string" && id in CARD_MAP,
    );
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
