/**
 * Contact delivery resolution.
 *
 * GitHub Pages is a static host — it cannot run the FastAPI backend, so the
 * contact form must be wired to a reachable endpoint via one of two env vars:
 *
 *   1. NEXT_PUBLIC_API_URL  — base URL of the FastAPI backend deployed
 *      elsewhere (Render, Railway, Fly, a VPS…). The form posts JSON to
 *      {NEXT_PUBLIC_API_URL}/api/contact.
 *
 *   2. NEXT_PUBLIC_CONTACT_ENDPOINT — any absolute third-party form endpoint
 *      (Formspree, Web3Forms, etc.). Paired with NEXT_PUBLIC_CONTACT_FORMAT
 *      ("json" | "form") to control the request body.
 *
 * If neither is configured the form refuses to submit honestly — it never
 * fabricates a "sent" state.
 */

const API_URL = (process.env.NEXT_PUBLIC_API_URL ?? "").replace(/\/+$/, "");
const CONTACT_ENDPOINT = (process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "").trim();
export const contactFormat: "json" | "form" =
  (process.env.NEXT_PUBLIC_CONTACT_FORMAT ?? "json") === "form" ? "form" : "json";

export const contactEndpoint =
  CONTACT_ENDPOINT || (API_URL ? `${API_URL}/api/contact` : "");

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
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }

  if (!response.ok) {
    throw new Error("contact-rejected");
  }
}