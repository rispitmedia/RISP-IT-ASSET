RISP IT ASSET V7.6.30 — MOBILE UI / THEME / STATUS / PIN / PHOTO FIX

This is a FRONTEND update based on the working V7.6.23 / PIN-enabled build.
It does not change the Apps Script backend, deployment URL, connection key, PIN value,
credential challenge protocol, spreadsheet, Drive files, or inventory data.

CHANGES
1. iPhone bottom navigation now uses the actual app layout viewport height instead of
   physical screen.height. This prevents the unused strip below the bottom navigation.
   The bottom bar remains above the iOS home-indicator safe area.
2. App PIN challenge is requested as soon as the lock screen appears. When the user
   finishes entering six digits, the app can use the already prepared challenge and
   avoid waiting for a second network round trip. PIN proof/token validation remains
   server-side and challenge-bound.
3. Manufacturer logos keep their original image colors and receive a neutral white tile
   so dark brand marks (e.g. Apple) remain visible in both themes.
4. Light theme contrast is expanded across dashboard cards, asset details, forms,
   status menus, sheets, credentials, maintenance panels, QR dialogs and bottom nav.
5. Asset status badges on inventory cards are now independent quick controls. Tap the
   status badge to open a dropdown beside the card, select a status, and save it.
   Tapping the rest of the card still opens the asset detail.
6. Long asset tags, brand/model strings, assignees, serial numbers, service tags and
   detail values wrap instead of being clipped with an ellipsis.
7. Background removal explicitly configures the IMG.LY model asset path and requests a
   foreground PNG. The result is checked for real transparent alpha pixels before it is
   accepted. A failed/opaque result now raises a clear error rather than claiming success.
   The preview uses a checkerboard to show transparency.

FILES TO REPLACE
Replace these five files in the same GitHub Pages v7 folder:
- index.html
- styles.css
- app.js
- photo-tools.js
- sw.js

Do not replace Apps Script source and do not redeploy Apps Script for this frontend update.
Keep the current backend deployment and PIN 172000 as they are.

INSTALL
1. Extract the ZIP.
2. Open the existing RISP-IT-ASSET repository and its live v7 folder.
3. Replace the five files listed above.
4. Commit changes and wait for GitHub Pages to publish.
5. Fully close the installed Home Screen app and reopen it.
6. Test both themes, status dropdown on an asset card, detail status sheet, long serial/model
   values, and PIN unlock.
7. For Remove Background, the first run downloads the AI model/runtime from IMG.LY CDN and
   can take longer. Keep the app open until it finishes. A successful result must show the
   checkerboard through transparent parts of the device cut-out before saving.

VALIDATION PERFORMED
- app.js, photo-tools.js and sw.js pass Node syntax checks.
- index.html parses successfully.
- styles.css parses with no CSS syntax errors.
- Verified that the PIN flow still calls cred_challenge then app_unlock and that the PIN is
  not embedded in frontend source.
- Verified that the AI result is required to be PNG with a measurable transparent alpha area.

LIMITATION
The app has not been executed on a physical iPhone in this environment. The AI model download
and actual iPhone UI interaction therefore still require the on-device checks above.
