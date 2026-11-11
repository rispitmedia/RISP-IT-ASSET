RISP IT ASSET V7.6.23 — IPHONE SAFE-AREA HEADER FIX

WHAT CHANGED
- Extends the navy header background behind the iPhone status bar / top safe area in Home Screen mode.
- Keeps the safe-area spacing so the logo and controls remain below the time, signal and battery icons.
- Updates the theme color and asset cache versions so the new appearance is picked up.
- Preserves the existing PIN/API implementation from V7.6.22. No Apps Script backend change is required.

INSTALL
1. Extract this ZIP.
2. In the existing GitHub Pages v7 folder, replace index.html, styles.css and sw.js.
3. Keep app.js and photo-tools.js unchanged; the ZIP includes the matching copies for a complete release.
4. Commit changes and wait for GitHub Pages to finish deploying.
5. Fully close the installed Home Screen app and reopen it.

NOTE
This update changes only the PWA safe-area/header presentation. It does not change the PIN value, API URL, connection key, Apps Script deployment, or inventory data.
