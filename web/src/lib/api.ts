/** Contact API endpoint — resolved from NEXT_PUBLIC_API_URL at runtime. */
const API_URL = (process.env.NEXT_PUBLIC_API_URL ?? "").replace(/\/+$/, "");

export const contactEndpoint = API_URL ? `${API_URL}/api/contact` : "";

export function isContactEnabled(): boolean {
  return contactEndpoint.length > 0;
}