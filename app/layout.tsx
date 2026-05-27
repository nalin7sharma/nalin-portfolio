import type { Metadata, Viewport } from "next";
import Script from "next/script";

import "./globals.css";
import { personal } from "@/lib/portfolio-data";

const title = "Nalin Sharma | AI Engineer & ML Systems Developer";
const description =
  "Portfolio for Nalin Sharma, an AI Engineer and ML Systems Developer building NLP, computer vision, healthcare AI, IoT, and secure AI product systems.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nalinsharma.co.in"),
  title,
  description,
  formatDetection: {
    telephone: false,
    date: false,
    email: false,
    address: false,
  },
  applicationName: "Nalin Sharma Portfolio",
  keywords: [
    "Nalin Sharma",
    "AI ML Engineer",
    "ML Systems Developer",
    "AI Engineer",
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
  colorScheme: "dark light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.name,
  jobTitle: "AI Engineer and ML Systems Developer",
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
      <body
        className="font-sans antialiased"
        suppressHydrationWarning
        data-gramm="false"
        data-gramm_editor="false"
        data-enable-grammarly="false"
      >
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
