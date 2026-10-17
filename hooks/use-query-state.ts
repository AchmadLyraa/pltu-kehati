"use client";

import { useCallback, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

/**
 * Seperti useState, tapi nilainya disimpan di URL (?key=value).
 * - allowed: daftar nilai yang valid (nilai lain di URL diabaikan)
 * - resetOnChange: query lain yang dihapus saat nilai ini berubah
 */
export function useQueryState(
  key: string,
  defaultValue: string,
  allowed?: string[],
  options?: { resetOnChange?: string[] }
) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const raw = searchParams.get(key);
  const value = raw && (!allowed || allowed.includes(raw)) ? raw : defaultValue;

  const setValue = useCallback(
    (next: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (next === defaultValue) params.delete(key);
      else params.set(key, next);
      options?.resetOnChange?.forEach((k) => params.delete(k));
      const qs = params.toString();
      router.push(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [key, defaultValue, options?.resetOnChange, pathname, router, searchParams]
  );

  return [value, setValue] as const;
}

/**
 * Parameter tahun yang selalu terisi di URL.
 * - years: tahun yang tersedia di data komponen ini
 * - Kalau ?year kosong/tidak valid, dipakai tahun terbaru di `years`
 *   dan langsung ditulis ke URL (replace, jadi tombol Back tidak terjebak).
 */
export function useYearParam(years: Array<string | number>, key = "year") {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const list = years.map(String).sort();
  const latest = list.length ? list[list.length - 1] : "";

  const raw = searchParams.get(key);
  const value = raw && list.includes(raw) ? raw : latest;

  useEffect(() => {
    if (!latest || raw === value) return;
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, [raw, value, latest, key, pathname, router, searchParams]);

  const setValue = useCallback(
    (next: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(key, next);
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [key, pathname, router, searchParams]
  );

  return [value, setValue] as const;
}
