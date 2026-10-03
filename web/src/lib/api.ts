import { siteConfig } from "@/data/site";

/**
 * Contact delivery.
 *
 * The portfolio deploys to GitHub Pages (static hosting), so the contact
 * form posts to a reachable public endpoint. Resolution order:
 *
 *   1. NEXT_PUBLIC_CONTACT_ENDPOINT — any absolute form endpoint
 *      (Formspree, Web3Forms, …). Paired with NEXT_PUBLIC_CONTACT_FORMAT
 *      ("json" | "form") to control the request body.
 *   2. NEXT_PUBLIC_API_URL — base URL of the FastAPI backend in
 *      backend/ deployed elsewhere (Render, Railway, Fly, a VPS…).
 *      The form posts JSON to {NEXT_PUBLIC_API_URL}/api/contact.
 *   3. Default — FormSubmit's AJAX endpoint for the public contact
 *      address. No signup or key required; the address owner confirms
 *      delivery once via FormSubmit's activation email.
 *
 * The endpoint is a public, intentional part of the design — no secrets,
 * keys, or environment configuration are exposed in the UI.
 */

const API_URL = (process.env.NEXT_PUBLIC_API_URL ?? "").replace(/\/+$/, "");
const CONTACT_ENDPOINT = (process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "").trim();

export const contactFormat: "json" | "form" =
  (process.env.NEXT_PUBLIC_CONTACT_FORMAT ?? "json") === "form" ? "form" : "json";

/** True when delivering through the default FormSubmit integration. */
const usingFormSubmit = !CONTACT_ENDPOINT && !API_URL;

export const contactEndpoint =
  CONTACT_ENDPOINT ||
  (API_URL
    ? `${API_URL}/api/contact`
    : `https://formsubmit.co/ajax/${siteConfig.contactEmail}`);

export function isContactEnabled(): boolean {
  return contactEndpoint.length > 0;
}

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
  project_type: string | null;
  /** Honeypot — empty for real humans, caught by the server. */
  website: string;
}

function buildBody(payload: ContactPayload): Record<string, string> {
  if (!usingFormSubmit) return { ...payload, project_type: payload.project_type ?? "" };
  // FormSubmit field conventions: _honey honeypot, _captcha disabled in
  // favour of the honeypot + their server-side spam filtering, _replyto so
  // replies go straight to the sender, and a clear email subject.
  return {
    name: payload.name,
    email: payload.email,
    message: payload.message,
    project_type: payload.project_type ?? "",
    _replyto: payload.email,
    _subject: `Portfolio inquiry — ${payload.name}`,
    _template: "table",
    _captcha: "false",
    _honey: payload.website,
  };
}

export async function submitContact(payload: ContactPayload): Promise<void> {
  if (!isContactEnabled()) {
    throw new Error("contact-not-configured");
  }

  let response: Response;
  if (contactFormat === "form") {
    const body = new FormData();
    Object.entries(payload).forEach(([key, value]) =>
      body.append(key, value ?? ""),
    );
    response = await fetch(contactEndpoint, { method: "POST", body });
  } else {
    response = await fetch(contactEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(buildBody(payload)),
    });
  }

  if (!response.ok) {
    throw new Error("contact-rejected");
  }

  // FormSubmit-style endpoints answer 200 with {"success":"false"} for
  // rejected submissions — surface that as an error instead of "sent".
  if (usingFormSubmit) {
    try {
      const data = (await response.json()) as { success?: string };
      if (data && data.success === "false") {
        throw new Error("contact-rejected");
      }
    } catch (error) {
      if (error instanceof Error && error.message === "contact-rejected") {
        throw error;
      }
      // Unparseable body — treat as success; the endpoint already accepted.
    }
  }
}
