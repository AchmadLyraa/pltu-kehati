"use client";

import { useCallback } from "react";
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
