RISP IT ASSET V7.6.9 — MAINTENANCE + QR LABEL POLISH
====================================================

Included:
- Shared Maintenance & Repair History backed by Apps Script / Google Sheets.
- Per-asset repair records with dates, vendor/service center, contact, fault, diagnosis,
  action taken, parts, parts/labor/total cost, status, notes and Drive attachments.
- Mobile PWA can list history and add records; Admin Web can list and add records.
- Photos and documents are stored in Drive under RISP IT ASSET — Maintenance Records,
  grouped by Asset ID. File sharing is limited to the Workspace domain where supported.
- Credential-only sticker now has a preview step and explicit print action in the PWA.
- Username/password labels wrap long values instead of silently ellipsizing.
- Back navigation from QR preview/credential preview to label format chooser.
- PWA brand logos retain original colors in dark/light themes; light-theme back arrow is dark.
- AI background-removal loader tries jsDelivr first and falls back to esm.sh, with clearer
  loading/processing timeouts.

Deployment notes:
1. Replace the Apps Script project source with RISP_IT_ASSET_v6.11.0_MAINTENANCE_QR.gs.
2. Save and deploy a NEW version of the Apps Script Web App. Keep the same /exec URL if
   updating the existing deployment.
3. Upload the contents of pwa_v768_final to the existing GitHub Pages v7 folder, preserving
   the directory structure. This release uses V7.6.9 cache-busting URLs.
4. Open the Admin Web once to authorize Google Sheets and Drive access; the
   ASSET_MAINTENANCE sheet and Drive folder are created on first use.
5. Test with a non-sensitive test asset before logging real repair invoices/photos.

Important:
- Existing ASSET_DATABASE columns and asset IDs are not modified.
- The maintenance history uses a separate ASSET_MAINTENANCE sheet.
- PWA attachment uploads are limited to 3 MB each and 4 files per group; server allows up to 5 MB per file.
- PWA writes use the existing connection-key-gated v7write API.
