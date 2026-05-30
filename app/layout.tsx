import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Teng Chan Leong | CEO · Speaker · Builder",
  description:
    "CEO of Skribble Group and Founder of SAMA — the Strategic Asia Marketing Alliance. Keynote speaker on digital transformation, marketing, and regional business growth across Southeast Asia.",
  keywords: [
    "Teng Chan Leong",
    "Chan Leong",
    "Skribble",
    "SAMA",
    "Strategic Asia Marketing Alliance",
    "CEO Malaysia",
    "keynote speaker Malaysia",
    "digital transformation speaker",
    "marketing speaker",
  ],
  openGraph: {
    title: "Teng Chan Leong | CEO · Speaker · Builder",
    description:
      "CEO of Skribble Group and Founder of SAMA. Keynote speaker on digital transformation, marketing, and Southeast Asia growth.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable} h-full antialiased`}>
      <body className="min-h-full bg-catalyst-navy text-warm-white font-sans">{children}</body>
    </html>
  );
}
