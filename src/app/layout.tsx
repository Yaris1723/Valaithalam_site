import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Correct metadata without themeColor
export const metadata: Metadata = {
  title: "Valaidhalam — Empowering Future Innovators & Leaders in Tamil Nadu",
  description: "Valaidhalam is a youth innovation and leadership ecosystem from Tamil Nadu empowering students with research, technology skilling, startup mentorship, and real-world projects.",
  keywords: [
    "Valaidhalam",
    "youth innovation Tamil Nadu",
    "student leadership ecosystem",
    "student research Tamil Nadu",
    "Salem innovation community",
    "tech skilling for students",
    "youth entrepreneurship programs India",
    "campus innovation forum",
    "Tamil Nadu student ecosystem",
  ],
  authors: [{ name: "Valaidhalam" }],
  alternates: { canonical: "https://valaithalam.org/" },
  openGraph: {
    title: "Valaidhalam — Empowering Future Innovators & Leaders in Tamil Nadu",
    description: "Youth innovation & leadership ecosystem empowering students in Tamil Nadu through research, tech training & startup mentorship.",
    url: "https://valaithalam.org/",
    siteName: "Valaidhalam",
    images: [
      {
        url: "https://valaithalam.org/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Valaidhalam — Future Innovators of Tamil Nadu",
    description: "Shaping the next generation of innovators & leaders through research, tech skilling & entrepreneurship programs.",
    images: ["https://valaithalam.org/og-image.png"],
  },
  icons: { icon: "/favicon.ico" },
};

// New viewport export for themeColor
export const viewport = {
  themeColor: "#125093ff",
};

// JSON-LD Schemas
const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Valaidhalam",
  url: "https://valaithalam.org/",
  logo: "https://valaithalam.org/logo.png",
  description: "Youth-driven innovation and leadership ecosystem in Tamil Nadu.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Salem",
    addressRegion: "Tamil Nadu",
    postalCode: "636010",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "support",
      email: "contact@valaithalam.org",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/valaithalam/",
    "https://www.instagram.com/valaithalam/",
  ],
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://valaithalam.org/",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
        />
      </head>
      <body>
        <div className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}
