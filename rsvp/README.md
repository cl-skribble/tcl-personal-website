# RSVP storage

RSVPs from `/events/<slug>` post to `app/api/rsvp/route.ts`, which validates them and forwards each one to a **Google Sheet** through a small Apps Script web app. One tab per event; columns: Timestamp, Name, WhatsApp, Email, Company, Seats, Notes, Status.

Why a Sheet: no database to run, you can read and export the list on your phone, filter it, and mail-merge or WhatsApp-broadcast from it. Duplicate and capacity checks happen inside the script.

## One-time setup (about 5 minutes)

1. Create a Google Sheet named "Website RSVPs".
2. Extensions > Apps Script. Replace the contents with `rsvp/google-apps-script.gs`.
3. Project Settings > Script properties > add `SECRET` = a long random string.
4. Deploy > New deployment > Web app. Execute as: **Me**. Who has access: **Anyone**. Copy the Web app URL.
5. Set two environment variables where the site is hosted (and in `.env.local` for local testing):
   - `RSVP_WEBHOOK_URL` = the Web app URL
   - `RSVP_WEBHOOK_SECRET` = the same string as `SECRET`
6. Redeploy the site.

Without `RSVP_WEBHOOK_URL`, production returns "RSVP temporarily unavailable" (it never pretends to save). In dev it logs the RSVP to the console only.

## Adding an event

Add an entry to `lib/events.ts`. Set `rsvp: { required: true, capacity?: number, deadline?: ISO }`. Events move from Upcoming to Past automatically after their end time.

## Data notes

The sheet holds names, phone numbers and emails: keep it private to your account and tell attendees what it is used for (event updates).
