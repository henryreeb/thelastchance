import { Inter, Bebas_Neue } from "next/font/google";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${inter.className} bg-black text-white`}>
      {children}</body>
    </html>
  );
}
export const metadata: Metadata = {
  title: "The Last Chance | Organic Roleplay DayZ Server",
  description:
    "The Last Chance is a DayZ organic roleplay server focused on immersive survival, base building, faction warfare, and community-driven stories.",

  keywords: [
    "DayZ server",
    "DayZ roleplay server",
    "Organic roleplay DayZ",
    "DayZ RP",
    "DayZ community server",
    "The Last Chance DayZ",
    "DayZ server Chernarus",
  ],

  openGraph: {
    title: "The Last Chance | DayZ Organic Roleplay",
    description:
      "Join The Last Chance, an immersive DayZ roleplay experience.",
    images: ["/images/social-preview.jpg"],
  },
};