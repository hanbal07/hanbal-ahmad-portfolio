export const siteConfig = {
  name: "Hanbal Ahmad",
  role: "Full-Stack Developer | Python & AI/ML",
  headline: "I build practical digital products that solve real problems.",
  subheadline:
    "Full-Stack Developer focused on modern web applications, Python backends, and AI-powered solutions.",
  location: "Pakistan \u00b7 Open to Remote",
  statusBadge: "Open to Remote",
  /**
   * Public contact email used by the "Email me directly" block
   * (mailto link + copy button). Supply your own via
   * NEXT_PUBLIC_CONTACT_EMAIL (or edit this value); keep empty to
   * show "Email address coming soon" instead of a fake address.
   */
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  /**
   * Path to the profile photo shown in the hero.
   * Drop a real photograph at web/public/assets/profile/hanbal-ahmad.webp
   * (webp, ~4:5 portrait, up to ~1024×1280). A monogram tile is shown as
   * a graceful fallback while the file is absent, so the hero never breaks.
   */
  profileImage: "/assets/profile/hanbal-ahmad.webp",
  githubUsername: "hanbal07",
  githubUrl: "https://github.com/hanbal07",
  linkedinUrl: "https://linkedin.com/in/hanbal-ahmad/",
  /** Canonical site URL. Set NEXT_PUBLIC_SITE_URL in production. */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export const navigation = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
] as const;

export const profileStatements = {
  whoami: ["Full-Stack Developer", "Python Developer", "AI/ML Builder"],
} as const;