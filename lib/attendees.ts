export type PublicAttendee = { name: string; company: string };

/**
 * Public guest list for an event: name + company of confirmed guests who agreed to be listed.
 * Comes from the RSVP sheet's Apps Script (doGet ?action=attendees). Fails quiet: if the sheet is
 * unreachable or the script has not been updated yet, the page simply hides the list.
 */
export async function getAttendees(slug: string): Promise<PublicAttendee[] | null> {
  const base = process.env.RSVP_WEBHOOK_URL;
  if (!base) return [];
  try {
    const res = await fetch(`${base}?action=attendees&slug=${encodeURIComponent(slug)}`, {
      next: { revalidate: 120 },
    });
    const out = await res.json();
    if (!out?.ok || !Array.isArray(out.attendees)) return null;
    return out.attendees
      .map((a: PublicAttendee) => ({ name: String(a.name ?? "").trim(), company: String(a.company ?? "").trim() }))
      .filter((a: PublicAttendee) => a.name);
  } catch {
    return null;
  }
}
