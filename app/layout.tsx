import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
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
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full bg-white text-carbon font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
