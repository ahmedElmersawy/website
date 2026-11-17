import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import { Nav } from "@/components/nav/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const siteUrl = "https://ahmedelmersawy.online";
const siteTitle = `${site.name} - AI Systems & Efficient ML Research`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s - ${site.name}`,
  },
  description: site.tagline,
  keywords: [
    "Ahmed Elmersawy",
    "Purdue University",
    "AI systems research",
    "efficient LLM systems",
    "decision models",
    "preference learning",
    "DPO",
    "code optimization",
    "training dynamics",
    "machine learning",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: siteTitle,
    description: site.tagline,
    url: siteUrl,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: site.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#f7f6f2",
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
    jobTitle: site.degree,
    worksFor: {
      "@type": "Organization",
      name: site.university,
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Purdue University",
    },
    email: `mailto:${site.email}`,
    sameAs: [site.social.github, site.social.linkedin],
    url: siteUrl,
    description: site.tagline,
  };

  return (
    <html
      lang="en"
      className={`${sourceSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <Nav />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
