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

// Web app destinations used by the /login routing page.
// Leave empty while web access is in development — /login will show a
// "web access is coming" message and route users to the iOS app / adviser
// pilot instead. When the web apps ship, set the URLs here and /login
// links straight through — no other code change needed.
window.CONSUMER_WEB_URL = "";
window.ADVISER_WEB_URL = "";
