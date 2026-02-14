import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://plnkaltimteluk.co.id"),
  title: {
    default:
      "Keanekaragaman Hayati PLN Nusantara Power Kaltim Teluk",
  },
  description:
    "Portal resmi keanekaragaman hayati PT PLN Nusantara Power Unit Pembangkitan Kaltim Teluk yang menampilkan konservasi, flora, fauna, dan komitmen lingkungan berkelanjutan. Biodiversity PLTU Teluk Balikpapan.",
  keywords: [
    "keanekaragaman hayati",
    "biodiversity PLTU",
    "biodiversity PLN balikpapan",
    "biodiversity PLTU balikpapan",
    "konservasi lingkungan",
    "flora fauna Kaltim",
    "PLN Nusantara Power Kaltim Teluk",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
