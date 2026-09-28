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
  "Business Website",
  "Python / Backend API",
  "AI-Powered Application",
  "Database & Integration",
  "Something Else",
];

const GENERIC_ERROR =
  "Something went wrong while sending your message. Please try again or reach me directly on LinkedIn.";

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
  "w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-3 transition-colors focus:border-accent/60 focus:outline-none";

function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const setField = <K extends keyof FormState>(key: K, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
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

  return (
    <div className="rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8">
      {status.kind === "success" ? (
        <div
          role="status"
          aria-live="polite"
          className="flex flex-col items-center gap-4 py-14 text-center"
        >
          <span
            className="flex h-12 w-12 items-center justify-center rounded-full border border-ok/30 bg-ok/10 text-ok"
            aria-hidden="true"
          >
            <CheckCircle2 className="h-6 w-6" />
          </span>
          <div>
            <p className="text-base font-semibold text-ink">Message sent.</p>
            <p className="mt-1 text-sm text-ink-2">
              Thanks — your message has been sent successfully. I&apos;ll get back
              to you as soon as possible.
            </p>
          </div>
          <Button
            variant="outline"
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
                className="mb-1.5 block text-[13px] font-medium text-ink-2"
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
                className={cn(inputClasses, errors.name && "border-err/70")}
                placeholder="Your name"
              />
              {errors.name ? (
                <p id="contact-name-error" className="mt-1.5 text-xs text-err">
                  {errors.name}
                </p>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="mb-1.5 block text-[13px] font-medium text-ink-2"
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
                className={cn(inputClasses, errors.email && "border-err/70")}
                placeholder="you@example.com"
              />
              {errors.email ? (
                <p id="contact-email-error" className="mt-1.5 text-xs text-err">
                  {errors.email}
                </p>
              ) : null}
            </div>
          </div>

          <div className="mt-5">
            <label
              htmlFor="contact-project-type"
              className="mb-1.5 block text-[13px] font-medium text-ink-2"
            >
              Project type <span className="text-ink-3">(optional)</span>
            </label>
            <select
              id="contact-project-type"
              name="project_type"
              value={form.projectType}
              onChange={(e) => setField("projectType", e.target.value)}
              className={cn(inputClasses, "appearance-none bg-white")}
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
              className="mb-1.5 block text-[13px] font-medium text-ink-2"
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
                errors.message && "border-err/70",
              )}
              placeholder="Tell me about your project, role, or idea…"
            />
            {errors.message ? (
              <p id="contact-message-error" className="mt-1.5 text-xs text-err">
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
              className="mt-5 rounded-lg border border-err/30 bg-err/5 px-3.5 py-2.5 text-xs leading-relaxed text-ink-2"
            >
              {GENERIC_ERROR}
            </p>
          ) : null}

          <div className="mt-6">
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
          </div>
        </form>
      )}
    </div>
  );
}

function DirectContactFallback() {
  return (
    <div className="flex h-full flex-col justify-center rounded-2xl border border-line bg-white p-8 shadow-sm sm:p-10">
      <h3 className="text-lg font-semibold tracking-tight text-ink">
        The fastest way to reach me
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-2">
        Send a short message on LinkedIn or open a discussion on GitHub —
        I check both daily and reply to every serious inquiry.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button href={siteConfig.linkedinUrl} external size="md">
          <LinkedInIcon className="h-4 w-4" aria-hidden="true" />
          Message me on LinkedIn
        </Button>
        <Button
          href={siteConfig.githubUrl}
          external
          size="md"
          variant="outline"
        >
          <GitHubIcon className="h-4 w-4" aria-hidden="true" />
          GitHub
        </Button>
      </div>
    </div>
  );
}

export function Contact() {
  const formReady = isContactEnabled();
  const email = siteConfig.contactEmail;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = async () => {
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

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 border-t border-line bg-canvas py-24 sm:py-28"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left */}
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Have a project in mind? Let's build it."
              description="Whether it's a full-stack product, a Python backend, or an AI-powered feature — tell me the goal and I'll give you a straight answer on scope, stack, and timeline."
            />
            <Reveal delay={0.15}>
              <ul className="mt-8 space-y-4">
                {email ? (
                  <li>
                    <div className="flex flex-wrap items-center gap-2">
                      <a
                        href={`mailto:${email}`}
                        className="group inline-flex items-center gap-3 text-sm text-ink-2 transition-colors hover:text-accent"
                      >
                        <Mail className="h-4 w-4 text-accent" aria-hidden="true" />
                        {email}
                      </a>
                      <button
                        type="button"
                        onClick={copyEmail}
                        aria-label={`Copy ${email} to clipboard`}
                        className="inline-flex items-center gap-1.5 rounded-md border border-line bg-white px-2.5 py-1.5 text-[11px] font-medium text-ink-2 transition-colors hover:border-accent/50 hover:text-accent"
                      >
                        {copiedEmail ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-ok" aria-hidden="true" />
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
                  </li>
                ) : null}
                <li>
                  <a
                    href={siteConfig.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 text-sm text-ink-2 transition-colors hover:text-accent"
                  >
                    <GitHubIcon className="h-4 w-4 text-accent" aria-hidden="true" />
                    github.com/hanbal07
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 text-sm text-ink-2 transition-colors hover:text-accent"
                  >
                    <LinkedInIcon className="h-4 w-4 text-accent" aria-hidden="true" />
                    linkedin.com/in/hanbal-ahmad
                  </a>
                </li>
              </ul>
            </Reveal>
          </div>

          {/* Right — form when a delivery endpoint is configured, direct channels otherwise */}
          <Reveal delay={0.1}>
            {formReady ? <ContactForm /> : <DirectContactFallback />}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
