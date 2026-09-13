// earmarkIQ site config

// APP_STORE_URL is the single source of truth for the live iOS listing.
// Every "download" CTA on the site links to /download, and that page routes:
//   - on iPhone/iPad it forwards straight to this listing;
//   - on Android or desktop it stays put and offers the web app instead,
//     because the Apple listing is a dead end on those devices.
// If the listing URL ever changes, change it here and nowhere else.
window.APP_STORE_URL = "https://apps.apple.com/gb/app/earmarkiq/id6759535975";

// Backend API base. /unsubscribe posts here; the suppression list lives in
// the backend because the send job has to be able to read it.
// MUST match the deployed API origin, and that origin MUST allow
// https://earmarkiq.app in CORS or the unsubscribe POST is blocked.
window.API_BASE = "https://web-production-61fc3.up.railway.app";

// Web app destinations — the single source of truth for all outbound web
// app links. /login, /signup and /download read these at load; no other page
// hardcodes them. Change the base here and every routing page follows.
window.WEB_APP_BASE = "https://my.earmarkiq.app";
window.CONSUMER_WEB_URL = window.WEB_APP_BASE + "/app/login";
window.ADVISER_WEB_URL = window.WEB_APP_BASE + "/adviser/login";
window.CONSUMER_SIGNUP_URL = window.WEB_APP_BASE + "/app/signup";
