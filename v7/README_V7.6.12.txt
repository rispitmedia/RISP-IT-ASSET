RISP IT ASSET v6.11.3 + Mobile PWA v7.6.12
Optional Assigned Student QR Label Update

Included:
- RISP_IT_ASSET_v6.11.3_OPTIONAL_ASSIGNEE_QR.gs
- v7/ GitHub Pages PWA source

Changes:
1. QR print modal shows "Include assigned student" only when ASSIGNED_TO is populated.
2. Assignee name is omitted by default and appears on the label only when the checkbox is selected.
3. Asset tag display removes a trailing parenthetical model suffix, e.g. "ES Student 17 (Redmi Pad2)" becomes "ES Student 17". Stored asset data is unchanged.
4. QR label metadata is reorganized:
   - Asset ID + Device Type + Brand on one line.
   - Serial on its own line.
5. Mobile PWA has matching optional assignee control and label output.
6. PWA cache version bumped to 7.6.12.

Deploy:
- Apps Script: replace the project source with the supplied .gs, save, then deploy a new version.
- GitHub Pages: upload the contents of v7/ to the existing v7/ directory and commit.
- Keep a backup of the current deployment and test on one assigned device and one unassigned device before broad rollout.

Notes:
- The Assigned To text is displayed only when explicitly opted in.
- Existing database values, Asset IDs, QR payload identity and stored Asset Tags are not changed.
- Syntax checks passed for the Apps Script source and PWA app.js. Live Google Workspace / printer / iPhone deployment testing has not been performed.
