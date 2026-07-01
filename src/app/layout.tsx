import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import { Nav } from "@/components/nav/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const siteUrl = "https://ahmedelmersawy.online";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} - ${site.degree} Student`,
    template: `%s - ${site.name}`,
  },
  description: site.tagline,
  keywords: [
    "Ahmed Elmersawy",
    "Purdue University",
    "AI research",
    "reinforcement learning",
    "large language models",
    "code optimization",
    "high performance computing",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} - ${site.degree} Student`,
    description: site.tagline,
    url: siteUrl,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} - ${site.degree} Student`,
    description: site.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#faf7f0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: `Undergraduate Researcher, ${site.degree}`,
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: site.university,
    },
    email: `mailto:${site.email}`,
    sameAs: [site.social.github, site.social.linkedin],
    url: siteUrl,
    description: site.tagline,
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <Nav />
        <main id="main-content" className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
