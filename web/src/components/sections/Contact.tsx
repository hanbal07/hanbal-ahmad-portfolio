"use client";

import { useState, type FormEvent } from "react";
import {
  Check,
  CheckCircle2,
  Copy,
  Loader2,
  Mail,
  Send,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/brand";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";
import { isContactEnabled, submitContact } from "@/lib/api";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error" };

interface FormState {
  name: string;
  email: string;
  projectType: string;
  message: string;
  company: string;
}

const initialForm: FormState = { name: "", email: "", projectType: "", message: "", company: "" };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const projectTypes = [
  "Full-Stack Web Application",
  "Web Development",
  "Python / Backend API",
  "AI-Powered Application",
  "REST API / Database",
  "Something Else",
];

const GENERIC_ERROR =
  "Something went wrong while sending your message. Please try again or email me directly.";

function fieldError(value: string, field: keyof FormState): string | null {
  if (field === "company") return null;
  if (!value.trim()) return "This field is required.";
  if (field === "name" && value.trim().length < 2) return "Please enter your name.";
  if (field === "email" && !EMAIL_RE.test(value.trim()))
    return "Please enter a valid email address.";
  if (field === "message" && value.trim().length < 10)
    return "A few more words so I can actually help (min 10 characters).";
  return null;
}

const inputClasses =
  "w-full rounded-lg border border-navy-line bg-navy/50 px-3.5 py-2.5 text-sm text-navy-ink placeholder:text-navy-ink-3 transition-colors focus:border-navy-accent/60 focus:outline-none";

export function Contact() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [copiedEmail, setCopiedEmail] = useState(false);

  const setField = <K extends keyof FormState>(key: K, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const copyEmail = async () => {
    const email = siteConfig.contactEmail;
    if (!email) return;
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopiedEmail(true);
    window.setTimeout(() => setCopiedEmail(false), 2200);
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    for (const field of ["name", "email", "message"] as const) {
      const err = fieldError(form[field], field);
      if (err) next[field] = err;
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status.kind === "submitting") return;

    // Honeypot: silently accept spam bots.
    if (form.company.trim()) {
      setStatus({ kind: "success" });
      return;
    }

    if (!validate()) return;

    if (!isContactEnabled()) {
      setStatus({ kind: "error" });
      return;
    }

    setStatus({ kind: "submitting" });
    try {
      await submitContact({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
        project_type: form.projectType || null,
        website: form.company.trim(),
      });
      setForm(initialForm);
      setStatus({ kind: "success" });
    } catch {
      setStatus({ kind: "error" });
    }
  };

  const showEmail = siteConfig.contactEmail.length > 0;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative scroll-mt-24 overflow-hidden border-t border-navy-line bg-navy py-24 sm:py-28"
    >
      {/* Decorative gradient washes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-[120px]"
      />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left */}
          <div>
            <SectionHeading
              eyebrow="contact"
              title="Have an idea worth building?"
              description="Let's turn it into something real."
              tone="navy"
            />
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-navy-ink-2">
                Whether it&apos;s an internship, a freelance project, or a product
                you want shipped — I&apos;ll give you a straight answer about scope,
                stack, and timeline.
              </p>
              <ul className="mt-8 space-y-3">
                <li>
                  {showEmail ? (
                    <div className="flex flex-wrap items-center gap-2">
                      <a
                        href={`mailto:${siteConfig.contactEmail}`}
                        className="group inline-flex items-center gap-3 font-mono text-sm text-navy-ink-2 transition-colors hover:text-navy-accent"
                      >
                        <Mail className="h-4 w-4 text-navy-accent" aria-hidden="true" />
                        {siteConfig.contactEmail}
                      </a>
                      <button
                        type="button"
                        onClick={copyEmail}
                        aria-label={`Copy ${siteConfig.contactEmail} to clipboard`}
                        className="mono-label inline-flex items-center gap-1.5 rounded-md border border-navy-line bg-navy-2/60 px-2.5 py-1.5 text-[10px] text-navy-ink-2 transition-colors hover:border-navy-accent/50 hover:text-navy-accent"
                      >
                        {copiedEmail ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                            Email copied
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                            Copy email
                          </>
                        )}
                      </button>
                    </div>
                  ) : (
                    <p className="inline-flex items-center gap-3 font-mono text-sm text-navy-ink-3">
                      <Mail className="h-4 w-4 text-navy-accent" aria-hidden="true" />
                      Email address coming soon
                    </p>
                  )}
                  <p className="mt-2 max-w-sm text-xs leading-relaxed text-navy-ink-3" role="status" aria-live="polite">
                    {showEmail
                      ? "Email works directly from your device — no form, no third party, no spam filtering."
                      : "Set NEXT_PUBLIC_CONTACT_EMAIL to publish my address here."}
                  </p>
                </li>
                <li aria-hidden="true">
                  <span className="mono-label block text-[10px] tracking-wider text-navy-ink-3">
                    — or send a message below —
                  </span>
                </li>
                <li>
                  <a
                    href={siteConfig.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 font-mono text-sm text-navy-ink-2 transition-colors hover:text-navy-accent"
                  >
                    <GitHubIcon className="h-4 w-4 text-navy-accent" />
                    github.com/hanbal07
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 font-mono text-sm text-navy-ink-2 transition-colors hover:text-navy-accent"
                  >
                    <LinkedInIcon className="h-4 w-4 text-navy-accent" />
                    linkedin.com/in/hanbal-ahmad
                  </a>
                </li>
              </ul>
              <p className="mono-label mt-8 inline-flex items-center gap-2 rounded-md border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 text-[11px] text-emerald-300">
                <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" />
                </span>
                Open to remote opportunities
              </p>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.1}>
            <div className="rounded-xl border border-navy-line bg-navy-2/70 p-6 backdrop-blur-sm sm:p-8">
              {status.kind === "success" ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="flex flex-col items-center gap-4 py-14 text-center"
                >
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                    aria-hidden="true"
                  >
                    <CheckCircle2 className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-base font-semibold text-navy-ink">Message sent.</p>
                    <p className="mt-1 text-sm text-navy-ink-2">
                      Thanks — your message has been sent successfully. I&apos;ll
                      get back to you as soon as possible.
                    </p>
                  </div>
                  <Button
                    variant="navy-outline"
                    size="sm"
                    onClick={() => setStatus({ kind: "idle" })}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mono-label mb-1.5 block text-[11px] text-navy-ink-2"
                      >
                        Name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={form.name}
                        onChange={(e) => setField("name", e.target.value)}
                        aria-invalid={errors.name ? true : undefined}
                        aria-describedby={errors.name ? "contact-name-error" : undefined}
                        className={cn(inputClasses, errors.name && "border-red-400/70")}
                        placeholder="Your name"
                      />
                      {errors.name ? (
                        <p id="contact-name-error" className="mt-1.5 text-xs text-red-300">
                          {errors.name}
                        </p>
                      ) : null}
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mono-label mb-1.5 block text-[11px] text-navy-ink-2"
                      >
                        Email *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={(e) => setField("email", e.target.value)}
                        aria-invalid={errors.email ? true : undefined}
                        aria-describedby={errors.email ? "contact-email-error" : undefined}
                        className={cn(inputClasses, errors.email && "border-red-400/70")}
                        placeholder="you@example.com"
                      />
                      {errors.email ? (
                        <p id="contact-email-error" className="mt-1.5 text-xs text-red-300">
                          {errors.email}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="mt-5">
                    <label
                      htmlFor="contact-project-type"
                      className="mono-label mb-1.5 block text-[11px] text-navy-ink-2"
                    >
                      Project type <span className="text-navy-ink-3">(optional)</span>
                    </label>
                    <select
                      id="contact-project-type"
                      name="project_type"
                      value={form.projectType}
                      onChange={(e) => setField("projectType", e.target.value)}
                      className={cn(inputClasses, "appearance-none bg-navy/50")}
                    >
                      <option value="">Select a type…</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mt-5">
                    <label
                      htmlFor="contact-message"
                      className="mono-label mb-1.5 block text-[11px] text-navy-ink-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => setField("message", e.target.value)}
                      aria-invalid={errors.message ? true : undefined}
                      aria-describedby={errors.message ? "contact-message-error" : undefined}
                      className={cn(
                        inputClasses,
                        "resize-y",
                        errors.message && "border-red-400/70",
                      )}
                      placeholder="Tell me about your project, role, or idea…"
                    />
                    {errors.message ? (
                      <p id="contact-message-error" className="mt-1.5 text-xs text-red-300">
                        {errors.message}
                      </p>
                    ) : null}
                  </div>

                  {/* Honeypot — hidden from humans */}
                  <div className="sr-only" aria-hidden="true">
                    <label htmlFor="contact-company">Leave this field empty</label>
                    <input
                      id="contact-company"
                      name="company"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.company}
                      onChange={(e) => setField("company", e.target.value)}
                    />
                  </div>

                  {status.kind === "error" ? (
                    <p
                      role="alert"
                      className="mt-5 rounded-lg border border-red-400/30 bg-red-400/10 px-3.5 py-2.5 text-xs leading-relaxed text-navy-ink-2"
                    >
                      {GENERIC_ERROR}
                    </p>
                  ) : null}

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={status.kind === "submitting"}
                    >
                      {status.kind === "submitting" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="h-4 w-4" aria-hidden="true" />
                        </>
                      )}
                    </Button>
                    <p className="text-xs text-navy-ink-3">
                      Honeypot spam trap.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}