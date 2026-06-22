// Serverless function (Vercel) — sends each booking to the MyCharters staff
// WhatsApp numbers via the Twilio WhatsApp API.
//
// Required environment variables (set in Vercel → Project → Settings → Environment Variables):
//   TWILIO_ACCOUNT_SID    your Twilio Account SID (starts AC...)
//   TWILIO_AUTH_TOKEN     your Twilio Auth Token  (keep secret)
//   TWILIO_WHATSAPP_FROM  the WhatsApp sender, e.g. +14155238886 (Twilio sandbox) or your approved sender
//
// Staff numbers that receive the booking:
const STAFF_NUMBERS = ["+35679361991", "+35677019333"];

export default async function handler(req, res) {
  // Allow the form to call this from any origin (e.g. the GitHub Pages copy too)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const SID = process.env.TWILIO_ACCOUNT_SID;
  const TOKEN = process.env.TWILIO_AUTH_TOKEN;
  const FROM = process.env.TWILIO_WHATSAPP_FROM;
  if (!SID || !TOKEN || !FROM) {
    return res.status(500).json({ error: "Twilio is not configured (missing env vars)." });
  }

  const b = req.body || {};
  const clean = (s) => String(s == null ? "" : s).slice(0, 300);
  const text = [
    "🛥️ New booking — MyCharters",
    `Name: ${clean(b.name)} ${clean(b.surname)}`,
    `Phone: ${clean(b.phone)}`,
    `Address: ${clean(b.address)}`,
    `Date: ${clean(b.date)}`,
    `Charter: ${clean(b.charter)}`,
    `Guests: ${clean(b.guests)}`,
    `Food: ${clean(b.food)}`,
    `Allergies: ${clean(b.allergies) || "None declared"}`,
    "Deposit: €100 via Stripe",
  ].join("\n");

  const auth = Buffer.from(`${SID}:${TOKEN}`).toString("base64");
  const url = `https://api.twilio.com/2010-04-01/Accounts/${SID}/Messages.json`;

  try {
    const results = await Promise.all(
      STAFF_NUMBERS.map((to) =>
        fetch(url, {
          method: "POST",
          headers: {
            Authorization: `Basic ${auth}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            From: `whatsapp:${FROM}`,
            To: `whatsapp:${to}`,
            Body: text,
          }),
        }).then(async (r) => ({ to, ok: r.ok, status: r.status, body: await r.text() }))
      )
    );
    const failed = results.filter((r) => !r.ok);
    if (failed.length) {
      return res.status(502).json({ error: "Some messages failed", details: failed });
    }
    return res.status(200).json({ ok: true, sent: results.length });
  } catch (e) {
    return res.status(502).json({ error: "Send failed", detail: String(e) });
  }
}
