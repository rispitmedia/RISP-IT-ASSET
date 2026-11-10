RISP IT ASSET V6.11.5 + V7.6.14
==================================
Changes in this release:
- QR + Credentials now uses one label with QR on the left, centered device identity in the middle, and username/password in a separate right column.
- The new QR label layout applies to single-asset print and bulk QR Label Studio.
- QR-only labels keep the previous two-column layout.
- Added flag-based language dropdown 🇬🇧 English / 🇹🇭 ไทย in the Admin Web and Mobile PWA.
- Expanded English/Thai translations for dashboard, inventory, asset details, maintenance, QR, settings, and forms.
- iPhone standalone app uses full screen height and reserves only actual iOS safe areas; bottom navigation is pinned to the bottom.
- Mobile app checks metadata every 4.5 seconds and fetches full inventory only when the server generation changes.
- Admin Web dashboard metadata polling set to 5 seconds.
- Cache and service-worker versions bumped to force fresh files.

DEPLOY:
1. Back up the current Apps Script project and GitHub Pages v7 folder.
2. Replace Apps Script source with RISP_IT_ASSET_v6.11.5_LANGUAGE_QR_IPHONE.gs.
3. Save > Deploy > Manage deployments > Edit > New version.
4. Extract V7.6.14_GITHUB_PAGES.zip and upload all its contents into the existing GitHub Pages v7/ folder, replacing existing files while preserving paths.
5. Wait for GitHub Pages to publish. Fully close the installed iPhone PWA and reopen it while online.
6. If the iPhone still serves the old service worker, remove the Home Screen app, clear Safari website data for the site, and reinstall from the updated v7 URL.

VERIFY:
- Single QR + Credentials: QR left, identity center, username/password right.
- Bulk QR + Credentials: same layout on every label.
- QR-only: no empty credentials column.
- Language dropdown: select Thai and English; check all major screens.
- iPhone 15 Pro: confirm bottom tabbar touches the bottom safe area with no large black dead space.
- Change one device status in Admin Web; mobile should update after the next metadata check, normally within about 5 seconds plus network/server response.

IMPORTANT:
- This release changes frontend layout and sync frequency; it does not change database columns.
- Five-second polling is faster but not true push. Real-time push needs a dedicated realtime service; Apps Script remains request/poll based.
- Test long usernames/passwords and physical Avery labels before mass printing.
- Translation dictionary covers the primary app workflows and common UI copy. Review any school-specific or newly added text not yet in the dictionary.
