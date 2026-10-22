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
 */
const HEADERS = ["Timestamp", "Name", "WhatsApp", "Email", "Company", "Seats", "Notes", "Status"];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const d = JSON.parse(e.postData.contents);
    const secret = PropertiesService.getScriptProperties().getProperty("SECRET");
    if (!secret || d.secret !== secret) return out_({ ok: false, error: "unauthorized" });

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sh = ss.getSheetByName(d.eventSlug.slice(0, 90));
    if (!sh) {
      sh = ss.insertSheet(d.eventSlug.slice(0, 90));
      sh.appendRow(HEADERS);
      sh.setFrozenRows(1);
      sh.getRange("A1:H1").setFontWeight("bold");
    }

    const rows = sh.getLastRow() > 1 ? sh.getRange(2, 1, sh.getLastRow() - 1, 8).getValues() : [];
    const norm = p => String(p).replace(/[^0-9]/g, "");
    const dup = rows.some(r =>
      String(r[3]).toLowerCase() === d.email || (norm(r[2]) && norm(r[2]) === norm(d.phone)));
    if (dup) return out_({ ok: true, status: "duplicate" });

    const taken = rows.filter(r => r[7] === "Confirmed").reduce((n, r) => n + Number(r[5] || 1), 0);
    if (d.capacity > 0 && taken + d.guests > d.capacity) return out_({ ok: true, status: "full" });

    sh.appendRow([new Date(), d.name, "'" + d.phone, d.email, d.company, d.guests, d.notes, "Confirmed"]);
    return out_({ ok: true, status: "confirmed" });
  } catch (err) {
    return out_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function out_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
