RISP IT ASSET V6.11.7 + V7.6.16 — FINAL POLISH
================================================

Included improvements:
- QR + Laptop Credentials label: explicit visible right-hand Username / Password column in single and bulk print.
- Square-corner print label geometry designed for cut-and-stick label stock.
- CSS-rendered UK and Thai flags so flags remain visible on Windows / iOS even when regional emoji flags are unsupported.
- Web language dropdown aligned with the header row.
- App lock now uses an on-screen numeric keypad and a readonly PIN field, preventing the iPhone keyboard from opening.
- Clearer client error when the app reaches an older Apps Script backend: deploy V6.11.7 as a New version.
- More readable text sizing on app and desktop detail screens.
- Analytics RANK badge constrained inside its pill.
- Background removal no longer downloads a large third-party AI model. It performs fast, local edge-connected white-background removal and exports transparent PNG. Best with plain white/light backgrounds; complex backgrounds need a dedicated AI service and may not cut cleanly.
- Thai dictionary expanded for device detail and account sections; Sarabun font loaded with TH Sarabun New as first-choice local font.

DEPLOY:
1. Back up the current Apps Script project and GitHub Pages v7 folder.
2. Replace Apps Script source with RISP_IT_ASSET_v6.11.7_FINAL_POLISH.gs.
3. Save > Deploy > Manage deployments > Edit > New version. Make sure the app's saved V7 API URL points to this same updated deployment.
4. Extract V7.6.16_GITHUB_PAGES.zip and upload all contents into the existing GitHub Pages /v7/ folder, replacing existing files while preserving paths.
5. Wait for GitHub Pages to publish. Fully close the iPhone PWA and reopen it online.
6. If old assets remain cached, remove the Home Screen app, clear Safari website data for the site, then reinstall.

PIN:
- The backend default PIN constant is 172000.
- If Script Properties already contains a different RISP_V7_CREDENTIAL_SUPER_ADMIN_PIN, the saved value takes precedence. Use the existing PIN to unlock and change it in-app, or reset the Script Property manually in Apps Script.
- If the app displays "Apps Script backend is out of date", the deployed endpoint is still serving an older backend or the saved V7 API URL is pointing at a different deployment.

VERIFY:
- Open a laptop QR + Credentials preview: confirm QR at left, device identity in the middle, Username / Password on the right.
- Print one test label on plain paper and check physical size/alignment before printing sticker stock.
- Verify flags appear in web/app language dropdown and dropdown stays aligned with the header.
- On iPhone, unlock using on-screen number buttons; no native keyboard should appear.
- Test PIN 172000 only if no custom PIN was previously saved.
- Test Remove Background on a white-background product photo. It should return a transparent PNG quickly; photos with busy backgrounds may not be suitable for this local cutout.
