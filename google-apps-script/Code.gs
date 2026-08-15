/**
 * ManaDigitalAI contact form backend.
 *
 * Deploy this bound to the target Google Sheet as a Web App:
 *   Extensions > Apps Script > paste this file > Deploy > New deployment
 *   Type: Web app, Execute as: Me, Who has access: Anyone
 * Copy the resulting /exec URL into src/lib/leads.ts (SHEET_WEBHOOK_URL).
 *
 * Optional WhatsApp alert (Meta WhatsApp Cloud API):
 *   Project Settings > Script Properties, add:
 *     WHATSAPP_TOKEN      - permanent access token
 *     WHATSAPP_PHONE_ID   - the "Phone number ID" of your sending number
 *     WHATSAPP_ALERT_TO   - number to alert, E.164 digits only, e.g. 919177484155
 *     WHATSAPP_TEMPLATE   - name of an approved template (see README below)
 *   Leave these unset to skip the WhatsApp alert and only log to the Sheet.
 */

const SHEET_NAME = 'Leads';

const FIELDS = [
  'name',
  'businessName',
  'phone',
  'email',
  'website',
  'location',
  'businessType',
  'primaryGoal',
  'budget',
  'challenge',
  'message',
];

function doPost(e) {
  const data = JSON.parse(e.postData.contents || '{}');
  appendToSheet(data);
  maybeSendWhatsAppAlert(data);
  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(
    ContentService.MimeType.JSON,
  );
}

function appendToSheet(data) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['Timestamp', ...FIELDS]);
  }
  sheet.appendRow([new Date(), ...FIELDS.map((key) => data[key] || '')]);
}

function maybeSendWhatsAppAlert(data) {
  const props = PropertiesService.getScriptProperties();
  const token = props.getProperty('WHATSAPP_TOKEN');
  const phoneId = props.getProperty('WHATSAPP_PHONE_ID');
  const alertTo = props.getProperty('WHATSAPP_ALERT_TO');
  const template = props.getProperty('WHATSAPP_TEMPLATE');

  if (!token || !phoneId || !alertTo || !template) return;

  const summary =
    `New lead: ${data.name || '-'} (${data.businessName || '-'})\n` +
    `Phone: ${data.phone || '-'}  Email: ${data.email || '-'}\n` +
    `Type: ${data.businessType || '-'}  Goal: ${data.primaryGoal || '-'}`;

  const payload = {
    messaging_product: 'whatsapp',
    to: alertTo,
    type: 'template',
    template: {
      name: template,
      language: { code: 'en' },
      components: [
        {
          type: 'body',
          parameters: [{ type: 'text', text: summary }],
        },
      ],
    },
  };

  UrlFetchApp.fetch(`https://graph.facebook.com/v19.0/${phoneId}/messages`, {
    method: 'post',
    contentType: 'application/json',
    headers: { Authorization: `Bearer ${token}` },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true,
  });
}
