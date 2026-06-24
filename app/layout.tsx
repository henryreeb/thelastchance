
import type { Metadata } from "next";
import "./globals.css";

const jsonLd = {
  "@context": "http://thelastchance.vercel.app/",
  "@type": "VideoGame",
  name: "The Last Chance",
  description:
    "Organic roleplay DayZ server focused on immersive survival.",
  genre: "Survival",
  gamePlatform: "PC",
  url: "http://thelastchance.vercel.app/",
  image: "http://thelastchance.vercel.app/public/images/social-preview.jpg",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        {children}
      </body>
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