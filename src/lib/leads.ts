// TODO: replace with your deployed Apps Script /exec URL — see google-apps-script/README.md
export const SHEET_WEBHOOK_URL = '';

export function submitLead(data: Record<string, string>) {
  if (!SHEET_WEBHOOK_URL) return;

  // Apps Script Web Apps don't return CORS headers, so the response body can't be read
  // from the browser. "no-cors" still delivers the request — the Sheet write and WhatsApp
  // alert happen server-side regardless of what the browser can see back.
  fetch(SHEET_WEBHOOK_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(data),
  }).catch(() => {
    // Best-effort: a failed webhook shouldn't block the visitor's WhatsApp handoff.
  });
}
