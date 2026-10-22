import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { SITE_URL, jsonLdString } from "@/lib/site";

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
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
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
    url: SITE_URL,
    siteName: "Teng Chan Leong",
    images: [{ url: "/images/profile.jpg", alt: "Teng Chan Leong" }],
  },
  twitter: { card: "summary_large_image" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profilepage`,
      url: SITE_URL,
      name: "Teng Chan Leong",
      mainEntity:
        {
          "@type": "Person",
          "@id": `${SITE_URL}/#person`,
          name: "Teng Chan Leong",
          alternateName: "Chan Leong Teng",
          url: SITE_URL,
          image: `${SITE_URL}/images/profile.jpg`,
          jobTitle: "Chief Executive Officer",
          description:
            "Chief Executive Officer of Skribble Group and Founder of the Strategic Asia Marketing Alliance (SAMA). Speaker on digital transformation, marketing and Southeast Asia growth.",
          worksFor: { "@id": "https://skribble.me/#organization" },
          founder: { "@id": "https://samaalliance.com/#organization" },
          knowsAbout: ["Digital transformation", "Marketing", "Brand strategy", "Regional agency collaboration", "AI in creative work"],
          sameAs: [
            "https://linkedin.com/in/tengchanleong",
            "https://skribble.me",
            "https://samaalliance.com",
          ],
        },
    },
    {
      "@type": "Organization",
      "@id": "https://skribble.me/#organization",
      name: "Skribble Group",
      url: "https://skribble.me",
      logo: "https://skribble.me/imgs/favicon.png",
      description: "Malaysian marketing and technology group (not affiliated with Skribble AG, Switzerland).",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Unit E-15-02, Level 15, Plaza Mont Kiara, No. 2, Jalan Kiara, Mont Kiara",
        postalCode: "50480",
        addressLocality: "Kuala Lumpur",
        addressCountry: "MY",
      },
      founder: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "Organization",
      "@id": "https://samaalliance.com/#organization",
      name: "Strategic Asia Marketing Alliance (SAMA)",
      alternateName: "SAMA",
      url: "https://samaalliance.com",
      founder: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable} h-full antialiased`}>
      <body className="min-h-full bg-catalyst-navy text-warm-white font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
