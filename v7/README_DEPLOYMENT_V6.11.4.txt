RISP IT ASSET V6.11.4 + V7.6.13
=================================
Includes Apps Script Admin Web/Backend and Mobile PWA.

Changes:
- Bulk QR Label Studio: optional Include assigned person control, shown only when selected scope has assigned people.
- QR credential label typography refined.
- Maintenance API aliases and app-wide PIN unlock endpoint.
- Mobile app PIN gate; credentials display on asset details only during unlocked session.
- Locking clears visible credentials; session expires with server token.
- EN/TH language toggle for common interface copy and key workflows.
- Clearer repair-history empty/error states.
- PWA cache and manifest version bumped to avoid old iPhone cached assets.

Deploy:
1. Back up the current Apps Script project.
2. Replace the current Apps Script source with RISP_IT_ASSET_v6.11.4_BILINGUAL_APP_LOCK_QR.gs.
3. Save and Deploy > Manage deployments > Edit > New version.
4. Upload the CONTENTS of v7/ to the existing GitHub Pages v7/ directory.
5. Test with a non-production device before broad rollout.

Security:
- The app-wide PIN uses the existing server-side challenge flow; the PIN is not embedded in app.js.
- Rotate the server-side PIN before production use.
- Credentials are fetched on demand and are not written to the PWA asset cache.
- A shared PIN is only a common access gate, not individual staff identity/audit. Stronger control requires Workspace authentication and role-based access.
- Old Apps Script deployments may still return Unknown v7 API action until a new deployment is published.

Test:
- QR Label Studio: All Categories, toggle assigned person on/off, QR-only and QR+credentials.
- PWA startup lock, unlock, open asset, confirm credentials; lock app and confirm credentials disappear.
- Repair History: empty state, list, add/edit/delete.
- EN/TH toggle on home, detail, maintenance and QR flows.
