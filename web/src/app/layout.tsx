import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";
import { Background } from "@/components/layout/Background";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CommandPalette } from "@/components/layout/CommandPalette";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { MotionProvider } from "@/components/layout/MotionProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const title = `${siteConfig.name} | ${siteConfig.role}`;
const description =
  "Full-Stack Developer building modern web applications, Python backends, APIs, databases, and practical AI-powered software.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: { default: title, template: "%s | Hanbal Ahmad" },
  description,
  keywords: [
    "Full-Stack Developer",
    "Python Developer",
    "AI/ML Developer",
    "Web Developer",
    "Next.js Developer",
    "FastAPI",
    "Python",
    "PostgreSQL",
    "Hanbal Ahmad",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    title,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  jobTitle: "Full-Stack Developer | Python & AI/ML",
  alumniOf: "University of Kamalia",
  knowsAbout: [
    "Full-Stack Web Development",
    "Python",
    "FastAPI",
    "Flask",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "AI/ML",
  ],
  sameAs: [siteConfig.githubUrl, siteConfig.linkedinUrl],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:border focus:border-accent focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:text-ink"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Background />
          <Navbar />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <CommandPalette />
          <CustomCursor />
        </MotionProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}