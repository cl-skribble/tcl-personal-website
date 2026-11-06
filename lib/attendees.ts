export type PublicAttendee = { name: string; company: string; seats: number };

/**
 * Public guest list for an event: name, company and seats of confirmed guests who agreed to be listed.
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
      .map((a: PublicAttendee) => ({
        name: String(a.name ?? "").trim(),
        company: String(a.company ?? "").trim(),
        seats: Math.max(1, Number(a.seats) || 1),
      }))
      .filter((a: PublicAttendee) => a.name);
  } catch {
    return null;
  }
}
