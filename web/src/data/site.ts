export const siteConfig = {
  name: "Hanbal Ahmad",
  role: "Full-Stack Developer · Python · AI/ML",
  headline: "I build modern web applications and AI-powered products.",
  subheadline:
    "Building modern web applications and AI-powered products with Next.js, TypeScript, Python, PostgreSQL, and practical AI/ML.",
  location: "Kamalia, Punjab, Pakistan",
  statusBadge: "Open to Remote Opportunities",
  /**
   * Public contact email used by the contact section and footer.
   * Supply your own via NEXT_PUBLIC_CONTACT_EMAIL (or edit this value);
   * keep empty to omit the email row entirely — no placeholder text.
   */
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  /**
   * Path to the profile photo shown in the hero.
   * A monogram tile is shown as a graceful fallback while the file
   * is absent, so the hero never breaks.
   */
  profileImage: "/assets/profile/hanbal-ahmad.webp",
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