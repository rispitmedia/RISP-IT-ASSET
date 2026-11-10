RISP IT ASSET V6.11.6 + V7.6.15 — THAI UI / APP PIN
====================================================

WHAT CHANGED
- Expanded Thai translation coverage for device detail cards: Device Information, Assignment, Identification, Accounts & Access, and their field labels.
- Expanded Thai translations for dashboard, inventory, repair history, maintenance forms, QR dialogs, and app More/settings screens.
- Added Thai font stack: TH Sarabun New / TH SarabunPSK first, Sarabun web font fallback.
- Improved Admin Web language dropdown styling and Thai typography sizing.
- Added Change app passcode in Mobile App > More.
- Default PIN is 172000 when no custom PIN has previously been saved.
- Change PIN requires the current PIN and a matching new PIN (6–12 digits).
- Backend stores a changed PIN in Apps Script Script Properties.
- App lock and private-credential unlock currently share the same PIN/token system. Changing the app PIN also changes the PIN used to unlock private device credentials.
- Updated backend version to 6.11.6 and PWA cache to V7.6.15.

DEPLOYMENT
1. BACK UP the current Apps Script project and GitHub v7 folder.
2. Apps Script: replace the current source with RISP_IT_ASSET_v6.11.6_THAI_UI_APP_PIN.gs.
3. Save, then Deploy > Manage deployments > Edit > New version > Deploy.
4. GitHub: extract RISP_IT_ASSET_V7.6.15_GITHUB_PAGES.zip and upload ALL contents inside the existing repository /v7/ folder, replacing matching files. Do not move them outside /v7/.
5. Keep existing unrelated repository files/folders.
6. Wait for GitHub Pages to publish.
7. On iPhone, close the installed PWA fully and reopen while online. If old files remain cached, remove the Home Screen app, clear Safari website data for the site, and reinstall from the same /v7/ URL.

DEFAULT PIN
- 172000
- If an earlier custom PIN was already saved in Script Properties, that saved PIN remains active rather than being overwritten.
- After unlocking the app, go to More > Change app passcode to set another 6–12 digit PIN.

TEST CHECKLIST
- Admin Web: switch English / Thai on dashboard and asset detail.
- Asset detail: verify all four cards and field labels translate; asset names, serials, usernames and other user-entered values intentionally remain unchanged.
- Admin Web: open and close the language menu; confirm it displays as a styled dropdown.
- PWA: switch English / Thai on Home, Search, Scan, Add, device detail, Maintenance, QR, and More.
- PWA: More > Change app passcode; test current PIN, mismatch confirmation, successful change, then lock/unlock using the new PIN.
- PWA: test both dark and light themes on iPhone and desktop browser.

LIMITATIONS
- Sarabun is loaded from Google Fonts as a fallback if TH Sarabun New is not installed on the device; offline devices fall back to locally installed Thai fonts.
- Asset names, serial numbers, account values and free-text notes are not translated because they are device-specific data.
- Test on the live deployment before mass use. JavaScript syntax and package integrity checks passed, but this package has not been exercised against the live school's Apps Script deployment or physical iPhone.
