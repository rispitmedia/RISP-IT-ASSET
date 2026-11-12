RISP IT ASSET V7.6.31 — iPhone / Theme / Brand / Transparency Repair
=====================================================================

FRONTEND UPDATE ONLY
Replace these five files in the existing GitHub Pages /v7 folder:
- index.html
- styles.css
- app.js
- photo-tools.js
- sw.js

No Apps Script / Backend redeployment is required. Keep the existing
Apps Script deployment (Version 99), deployment URL, connection key and
PIN configuration unchanged.

WHAT CHANGED
1. Bottom navigation is fixed to the actual bottom edge of the iPhone
   viewport. The home-indicator safe area is filled by the navigation
   surface, and screen content reserves enough room so it is not covered.
2. Light theme receives explicit high-contrast surfaces for system cards,
   status menus, credential panels, sheets, controls and navigation.
3. Brand logos always render inside a neutral white tile in both themes,
   matching the user's brand-picker reference. Original logo artwork is
   not recolored or inverted.
4. Long asset identifiers and device labels wrap instead of being clipped
   with ellipses in the detail / information areas.
5. Photo previews use a checkerboard background so actual PNG transparency
   can be distinguished from a white background.
6. AI output verification is stricter: it checks meaningful alpha coverage
   and transparent pixels at the image corners. If the result is still
   effectively opaque, the app reports failure instead of claiming success.
7. Service worker cache version is bumped. HTML, JS and CSS are network-first
   so the updated styles are not trapped behind a stale CSS cache.

PIN PERFORMANCE / SECURITY
- The existing PIN Challenge -> Proof -> app_unlock flow is preserved.
- The PIN challenge is prefetched when the lock screen appears.
- The numeric keypad already submits automatically when six digits are entered.
- The browser still has to complete the server-side app_unlock request. A
  sub-second unlock cannot be guaranteed on every mobile network without
  weakening or bypassing server-side verification. No PIN is stored in this
  frontend package.

REMOVE BACKGROUND IMPORTANT
- The AI model is loaded from the IMG.LY CDN on first use and needs internet.
- The result is accepted only when the PNG has real transparency; a mostly
  opaque white-background result is rejected.
- The three screenshots supplied for this round are screenshots of inventory
  cards, not the original camera/upload photo file. Therefore a real-device
  cutout result using the original Canon photo could not be independently
  verified in this build. Test with the original photo before using in bulk.
- The preview checkerboard makes transparent areas visible. After saving,
  the backend stores the supplied image MIME type (image/png) without
  converting it to JPEG.

INSTALL
1. Unzip.
2. Replace the five files listed above in GitHub repository folder v7.
3. Commit changes and wait for GitHub Pages deployment.
4. Fully close the Home Screen app and reopen it. If old CSS persists,
   remove the old site data/service worker for rispitmedia.github.io once,
   then reopen.

VALIDATION PERFORMED
- app.js: Node syntax check passed (unchanged PIN / API logic).
- photo-tools.js: Node syntax check passed.
- sw.js: Node syntax check passed.
- index.html: HTML parser passed.
- styles.css: CSS parser passed with no top-level parse errors.

NOT CLAIMED
This package has not been run on the user's physical iPhone, and the AI
cutout has not been verified against the original Canon source photograph.
The first real-device test should confirm bottom navigation position in
Home Screen mode, Light/Dark contrast across routes, and PNG alpha after
Remove Background -> Save -> reload.
