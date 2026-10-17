import type { CSSProperties } from "react";

/**
 * Style TabsList tahun:
 * - lebar bar = 20% per tahun (5 tahun = penuh, persis seperti sekarang)
 * - lebih dari 5 tahun tetap 100%, tiap tab dibagi rata
 * - kalau layar terlalu sempit, tab turun ke baris berikutnya
 */
export function yearTabsStyle(count: number): CSSProperties {
  const n = Math.max(1, count);
  return {
    gridTemplateColumns: "repeat(auto-fit, minmax(4.5rem, 1fr))",
    width: `min(100%, ${n * 20}%)`,
  };
}
