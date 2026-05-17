import type { Metadata, Viewport } from "next";
import Script from "next/script";

import "./globals.css";
import { personal } from "@/lib/portfolio-data";

const title = "Nalin Sharma | AI/ML Engineer Portfolio";
const description =
  "Recruiter-ready portfolio for Nalin Sharma, an AI/ML Engineer and B.Tech CSE-AI student building NLP, computer vision, IoT, and secure AI product systems.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nalinsharma.co.in"),
  title,
  description,
  applicationName: "Nalin Sharma Portfolio",
  keywords: [
    "Nalin Sharma",
    "AI ML Engineer",
    "Computer Science AI",
    "NLP Engineer",
    "Computer Vision Developer",
    "AI Portfolio",
    "Machine Learning Internship",
  ],
  authors: [{ name: personal.name, url: personal.website }],
  creator: personal.name,
  openGraph: {
    title,
    description,
    url: "https://www.nalinsharma.co.in",
    siteName: "Nalin Sharma Portfolio",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Nalin Sharma AI/ML Engineer portfolio preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.svg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: "https://www.nalinsharma.co.in",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020617",
  colorScheme: "dark light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.name,
  jobTitle: "AI/ML Engineer",
  url: personal.website,
  email: personal.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Delhi",
    addressCountry: "IN",
  },
  sameAs: personal.socials
    .filter((social) => social.label !== "Email")
    .map((social) => social.href),
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Deep Learning",
    "Cloud Systems",
    "Secure AI Products",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
        <Script
          id="person-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
