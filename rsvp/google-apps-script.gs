/**
 * RSVP collector for tengchanleong.com/events
 *
 * Setup: see rsvp/README.md. Paste this into Extensions > Apps Script of the
 * RSVP Google Sheet, set the SECRET script property, deploy as a Web app
 * (Execute as: Me, Access: Anyone).
 *
 * One tab per event (named by event slug, created on first RSVP).
 * A second RSVP with the same email or phone for the same event returns "duplicate".
 * If capacity > 0 and confirmed seats would exceed it, returns "full".
 *
 * Columns A-H are the original layout and never move. Title and "Show on website" were added at the end
 * (I, J) so older event tabs keep working untouched.
 *
 * doGet(?action=attendees&slug=...) is the PUBLIC guest list for the event page. It returns only name,
 * company and seats, only for Confirmed rows whose "Show on website" is Yes. No secret needed: nothing private leaves.
 *
 * Testimonials (kind: "testimonial") go to one shared "_Testimonials" tab, Status "Pending". Change Status to
 * "Approved" to show a line on the event page. doGet(?action=testimonials&slug=...) returns only Approved rows.
 */
const T_TAB = "_Testimonials";
const T_HEADERS = ["Timestamp", "Event", "Event title", "Name", "Title", "Company", "Feedback", "Status"];

const HEADERS = ["Timestamp", "Name", "WhatsApp", "Email", "Company", "Seats", "Notes", "Status", "Title", "Show on website"];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const d = JSON.parse(e.postData.contents);
    const secret = PropertiesService.getScriptProperties().getProperty("SECRET");
    if (!secret || d.secret !== secret) return out_({ ok: false, error: "unauthorized" });
    if (d.kind === "testimonial") return saveTestimonial_(d);

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sh = ss.getSheetByName(d.eventSlug.slice(0, 90));
    if (!sh) {
      sh = ss.insertSheet(d.eventSlug.slice(0, 90));
      sh.appendRow(HEADERS);
      sh.setFrozenRows(1);
      sh.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
    }

    // Older tabs were created with 8 headers: add Title / Show on website so every tab has them.
    const hdr = sh.getRange(1, 1, 1, HEADERS.length).getValues()[0];
    if (hdr[8] !== HEADERS[8] || hdr[9] !== HEADERS[9]) {
      sh.getRange(1, 9, 1, 2).setValues([[HEADERS[8], HEADERS[9]]]).setFontWeight("bold");
    }

    const rows = sh.getLastRow() > 1 ? sh.getRange(2, 1, sh.getLastRow() - 1, 8).getValues() : [];
    const norm = p => String(p).replace(/[^0-9]/g, "");
    const dup = rows.some(r =>
      String(r[3]).toLowerCase() === d.email || (norm(r[2]) && norm(r[2]) === norm(d.phone)));
    if (dup) return out_({ ok: true, status: "duplicate" });

    const taken = rows.filter(r => r[7] === "Confirmed").reduce((n, r) => n + Number(r[5] || 1), 0);
    if (d.capacity > 0 && taken + d.guests > d.capacity) return out_({ ok: true, status: "full" });

    sh.appendRow([new Date(), d.name, "'" + d.phone, d.email, d.company, d.guests, d.notes, "Confirmed",
      d.title || "", d.showOnSite || "No"]);
    return out_({ ok: true, status: "confirmed" });
  } catch (err) {
    return out_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  try {
    const p = (e && e.parameter) || {};
    if (p.action === "testimonials" && p.slug) return out_({ ok: true, testimonials: testimonials_(String(p.slug)) });
    if (p.action !== "attendees" || !p.slug) return out_({ ok: false, error: "bad request" });
    const sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(String(p.slug).slice(0, 90));
    if (!sh || sh.getLastRow() < 2) return out_({ ok: true, attendees: [] });
    const width = Math.max(sh.getLastColumn(), 10);
    const rows = sh.getRange(2, 1, sh.getLastRow() - 1, width).getValues();
    const attendees = rows
      .filter(r => r[7] === "Confirmed" && String(r[9]).toLowerCase() === "yes" && String(r[1]).trim())
      .map(r => ({ name: String(r[1]).trim(), company: String(r[4]).trim(), seats: Math.max(1, Number(r[5]) || 1) }));
    return out_({ ok: true, attendees: attendees });
  } catch (err) {
    return out_({ ok: false, error: "unavailable" });
  }
}

function testimonialSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(T_TAB);
  if (!sh) {
    sh = ss.insertSheet(T_TAB);
    sh.appendRow(T_HEADERS);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, T_HEADERS.length).setFontWeight("bold");
  }
  return sh;
}

function saveTestimonial_(d) {
  const sh = testimonialSheet_();
  const rows = sh.getLastRow() > 1 ? sh.getRange(2, 1, sh.getLastRow() - 1, T_HEADERS.length).getValues() : [];
  const key = s => String(s).trim().toLowerCase();
  if (rows.some(r => r[1] === d.event && key(r[3]) === key(d.name))) return out_({ ok: true, status: "duplicate" });
  const txt = v => (/^[=+\-@]/.test(String(v)) ? "'" : "") + String(v || ""); // never let input run as a formula
  sh.appendRow([new Date(), d.event, d.eventName, txt(d.name), txt(d.title), txt(d.company), txt(d.quote), "Pending"]);
  return out_({ ok: true, status: "received" });
}

function testimonials_(slug) {
  const sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(T_TAB);
  if (!sh || sh.getLastRow() < 2) return [];
  return sh.getRange(2, 1, sh.getLastRow() - 1, T_HEADERS.length).getValues()
    .filter(r => r[1] === slug && String(r[7]).trim().toLowerCase() === "approved" && String(r[6]).trim())
    .map(r => ({ name: String(r[3]).trim(), title: String(r[4]).trim(), company: String(r[5]).trim(), quote: String(r[6]).trim() }));
}

function out_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
