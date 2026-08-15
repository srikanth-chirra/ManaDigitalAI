# Contact form backend (Google Apps Script)

Turns the site's contact form into: write a row to your Google Sheet, and (optionally)
send a WhatsApp alert to your business number.

## 1. Deploy the Sheet write-back

1. Open your sheet: https://docs.google.com/spreadsheets/d/1LFTpAyOKXfApu916Kz9MPJm27uAMO5gcWN7U0v39HzU/edit
2. Extensions → Apps Script.
3. Delete the placeholder code and paste in [`Code.gs`](Code.gs).
4. Deploy → New deployment → type **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Authorize when prompted (it's your own script acting on your own sheet).
6. Copy the `.../exec` URL you're given.
7. Paste that URL into `SHEET_WEBHOOK_URL` in [`src/lib/leads.ts`](../src/lib/leads.ts).

Every form submission now appends a row to a `Leads` tab (created automatically) with a
timestamp and all the fields from the form.

## 2. (Optional) WhatsApp alert on new leads

This requires a Meta WhatsApp Business Cloud API app — free, but takes a few steps on Meta's
side:

1. Go to https://developers.facebook.com/ → create an app → add the **WhatsApp** product.
2. In the WhatsApp → API Setup screen you'll get a **temporary access token** and a **Phone
   number ID** for the test number Meta gives you. (For a permanent token and your own number,
   follow Meta's guide to verify a business phone number and generate a permanent token — the
   temporary one expires in 24h and is only good for testing.)
3. Message templates: outbound alerts that aren't a reply within a live 24-hour conversation
   must use a pre-approved **template**. In WhatsApp Manager → Message Templates, create one,
   e.g. named `new_lead_alert`, category "Utility", with one body variable:
   > New lead: {{1}}
   Submit for approval (simple utility templates are often approved within minutes).
4. Back in the Apps Script project: Project Settings (gear icon) → Script Properties → add:
   - `WHATSAPP_TOKEN` — the access token
   - `WHATSAPP_PHONE_ID` — the Phone number ID
   - `WHATSAPP_ALERT_TO` — the number to alert, digits only with country code, e.g. `919177484155`
   - `WHATSAPP_TEMPLATE` — the template name, e.g. `new_lead_alert`
5. Re-deploy the Web app (Deploy → Manage deployments → edit → new version) so the script picks
   up the properties.

Leaving these properties unset just skips the WhatsApp step — the Sheet write-back keeps
working either way.
