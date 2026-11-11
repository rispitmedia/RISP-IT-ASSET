RISP IT ASSET V7.6.22 – iPhone PWA + PIN FIX

WHAT THIS PATCH FIXES
1. Language picker menus are anchored to the tapped language button and raised above the app UI. The menu is positioned in the visible viewport to avoid being clipped/covered in iPhone Home Screen mode.
2. Mobile text inputs, selects and textareas use a minimum 16px font size to prevent iOS Safari's automatic zoom when focusing fields. Pinch-to-zoom remains available for accessibility.
3. Fixed an over-escaped JavaScript PIN validation regex. It previously tested for a literal backslash-d instead of six digits, so a valid six-digit PIN could be rejected before the backend was called.
4. Kept the app-wide PIN lock and the existing secure challenge/proof/token flow. The PIN is NOT hardcoded into the frontend.
5. Updated asset cache versions and the service worker cache name so installed iPhone/PWA clients fetch the new files.

FILES TO REPLACE
Replace these five files in the SAME GitHub Pages folder that currently contains the live app index.html:
- index.html
- app.js
- styles.css
- photo-tools.js
- sw.js
Do not delete other repository files.

PIN 172000 – IMPORTANT BACKEND STEP
The Apps Script backend source already contains:
  function resetRispV7AppPinTo172000() {
    PropertiesService.getScriptProperties().setProperty('RISP_V7_CREDENTIAL_SUPER_ADMIN_PIN', '172000');
    Logger.log('RISP IT ASSET PIN reset to 172000.');
  }

If the Script Property was changed previously, run resetRispV7AppPinTo172000() ONCE from the Apps Script editor (select the function in the toolbar and click Run; authorize if prompted). This resets the server-side PIN to 172000. Do not paste the PIN into app.js or index.html.

Then confirm the existing Apps Script deployment is:
- Execute as: Me
- Who has access: Anyone
- Deployment version: New version (update the existing deployment)
Keep using the same deployed /exec URL already saved in the app. The backend must include JSONP actions cred_challenge, app_unlock and app_change_pin; the V6.11.8 backend source supplied for this project already has them.

AFTER UPLOADING
1. Commit the five files to GitHub Pages.
2. Wait for Pages to publish.
3. Fully close the Home Screen app, then reopen it. If it still loads old assets, remove the Home Screen shortcut once, open the live URL in Safari/Chrome, and add it to Home Screen again.
4. Test the PIN keypad with 172000. Then test language selection and typing into Search / an edit field.

NOTE
This archive contains the frontend files. It does not overwrite your Apps Script backend or its Script Properties. The one-time backend PIN reset is described above so existing stored settings are handled safely.
