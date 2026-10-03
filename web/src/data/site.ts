/**
 * Base path under which the site is served. The GitHub Pages deploy sets
 * NEXT_PUBLIC_REPO_NAME in CI (matching next.config.ts), so public asset
 * URLs must carry the same prefix — next/image with unoptimized static
 * export does NOT add it automatically.
 */
export const basePath = process.env.NEXT_PUBLIC_REPO_NAME
  ? `/${process.env.NEXT_PUBLIC_REPO_NAME}`
  : "";

export const siteConfig = {
  name: "Hanbal Ahmad",
  role: "Full-Stack Developer · Python · AI/ML",
  headline: "I build modern full-stack web applications and AI-powered software.",
  subheadline:
    "Full-stack web applications, Python backends and APIs, and practical AI-powered software — from database and API to interface.",
  location: "Kamalia, Punjab, Pakistan",
  statusBadge: "Open to Remote Opportunities",
  /**
   * Public contact email shown in the contact section and footer, and used
   * as the default delivery target for the contact form (FormSubmit).
   * Override via NEXT_PUBLIC_CONTACT_EMAIL if it ever changes.
   */
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hanbalahmad07@gmail.com",
  /**
   * Path to the profile photo shown in the hero.
   * A monogram tile is shown as a graceful fallback while the file
   * is absent, so the hero never breaks.
   */
  profileImage: `${basePath}/assets/profile/hanbal-ahmad.webp`,
  githubUsername: "hanbal07",
  githubUrl: "https://github.com/hanbal07",
  linkedinUrl: "https://linkedin.com/in/hanbal-ahmad/",
  /**
   * URL for the "Download CV" button. Set NEXT_PUBLIC_RESUME_URL, or drop
   * the file at web/public/assets/resume.pdf and set this to
   * "/assets/resume.pdf". While empty, the button is hidden — it never
   * links to a nonexistent file.
   */
  resumeUrl: process.env.NEXT_PUBLIC_RESUME_URL ?? "",
  /** Canonical site URL. Set NEXT_PUBLIC_SITE_URL in production. */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export const navigation = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;
