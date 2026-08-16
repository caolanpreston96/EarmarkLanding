// earmarkIQ site config
//
// DOWNLOAD_URL is the single source of truth for where "download" CTAs resolve.
// Every CTA on the site links to /download, and the /download page reads this
// constant on load:
//   - While it equals "/download", the page shows the email capture form.
//   - APPROVAL DAY: set it to the live App Store listing URL. The /download
//     page will immediately forward every visitor there — one change, every
//     CTA site-wide retargets.
window.DOWNLOAD_URL = "/download";

// Web app destinations — the single source of truth for all outbound web
// app links. /login and /signup read these at load; no other page hardcodes
// them. Change the base here and every routing page follows.
window.WEB_APP_BASE = "https://earmarkiq-web.vercel.app";
window.CONSUMER_WEB_URL = window.WEB_APP_BASE + "/app/login";
window.ADVISER_WEB_URL = window.WEB_APP_BASE + "/adviser/login";
