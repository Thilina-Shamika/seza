import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const hostGrotesk = localFont({
  src: [
    { path: "./fonts/HostGrotesk-latin.woff2", weight: "300 800", style: "normal" },
    { path: "./fonts/HostGrotesk-Italic-latin.woff2", weight: "300 800", style: "italic" },
  ],
  display: "swap",
  variable: "--font-host-grotesk",
});

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Seza Leisure — Five rooms, one valley",
  description:
    "A 1928 planter's bungalow on the ridge above Hanguranketha, Sri Lanka. Five bedrooms, a lily court and a cook on call — taken whole, by one party at a time.",
  openGraph: {
    title: "Seza Leisure — Five rooms, one valley",
    description:
      "A 1928 planter's bungalow above Hanguranketha, Sri Lanka. Taken whole, by one party at a time.",
    images: ["/images/hero.jpg"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#fbfaf7",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={hostGrotesk.variable}>
      <body>{children}</body>
    </html>
  );
}
