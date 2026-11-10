// v6.11.3 OPTIONAL ASSIGNEE QR LABEL + CLEARER ASSET ID / SERIAL LAYOUT — based on v6.11.3 / V7.6.11.
// Full code: QR-only labels remain unchanged; laptop labels support selectable Local Username/Password pairs with auto-fit typography.
// ================================================================
// RISP IT ASSET SYSTEM
// v6.5.4 — MOBILE APP PHOTO RECOVERY + CHROME iOS APP ICON FIX / FAST BOOT
// ================================================================
// - External GitHub QR scanner only (NO internal camera / jsQR)
// - Single-page Dashboard <-> Detail navigation (no full reload)
// - Browser Back/Forward supported with google.script.history
// - Logo / Dashboard / asset cards use instant in-app routing
// - Add / Edit / Delete / Photo update UI + database without page reload
// - Script Cache reduces repeated Sheet reads on initial / scan loads
// - Dashboard thumbnails use smaller Drive images + lazy loading
// - Detail uses larger photo only when the asset is opened
// - Asset ID remains server-owned and immutable
// - Duplicate Asset Tag protection on Add AND Edit
// - Old Drive photo is trashed only after new photo is safely stored
// - Compact embedded RIS Phuket logo + favicon for smaller HTML payload
// - Navy school branding + black base + acid micro-accent
// - Larger readable Add/Edit forms using the same system theme
// - Staged photo preview with Save Changes / Cancel
// - Neon Active/Inactive status indicators
// - Quick-edit Type / Brand / Model / Status / Serial chips
// - Manufacturer support / warranty launcher from Detail
// - v6.0: Manufacturer links always open in a NEW TAB; app state is preserved
// - v6.0: Animated rock waveform / grunge header treatment around the RIS logo
// - v6.0: Professional date picker + THB money formatting
// - v6.0: One-tap coloured status control directly from Dashboard cards
// - v6.0: Printable RISP QR asset labels (Avery 5160 size)
// - v6.0: Add Device can scan an existing Libib/QR code into the form
// - v6.1: User-selected final blue/silver RISP rock logo across Header / QR label / favicon
// - v6.1: Browser tab title standardized to RISP IT ASSET
// - v6.2: Faster photo upload pipeline + optimistic preview sync
// - v6.2: Type / Brand / Model / Serial chips copy text instead of opening Edit
// - v6.2: Detail Status chip uses the same instant colour status menu as Dashboard
// - v6.2: Animated electric storm around the final RISP rock logo
// - v6.2: Edit modal no longer closes on outside clicks; unsaved-change guard on X / Cancel / Escape
// - v6.3: School-logo navy QR labels with 5-line asset identity
// - v6.3: Bulk QR Label Studio — Print All or print by Category (Avery 5160 / Libib 3×10)
// - v6.3: Header lightning simplified — side/back strikes only, no orbit ring
// - v6.3: Dashboard credit — VERSION.6.3 • ENGINEERED BY NEWVANA
// - v6.4: Explicit 30-label page engine — no duplicate / repeated print pages
// - v6.4: Category print uses only the pages it actually needs
// - v6.4: QR label typography / quiet-zone / cut-safe spacing redesigned
// - v6.4: Bulk preview shows real Letter pages before Print / Save PDF
// - v6.5: Fast shell — doGet no longer waits for Google Sheet before first paint
// - v6.5: Safe lightweight inventory cache in browser (no passwords stored locally)
// - v6.5: Background revalidation + lazy full-detail loading
// - v6.5: Dedicated mobile app UI with bottom navigation / bottom-sheet forms / swipe-back
// - v6.5: Add-to-Home-Screen / standalone mobile mode support
// - v6.5.3: Dedicated 180px / 192px / 512px app icons for Chrome iOS + Home Screen
// - v6.5.3: Versioned touch icon + favicon URLs to bypass stubborn iOS icon cache
// - v6.5.4: Mobile/PWA Drive photo recovery with Googleusercontent primary URL + automatic fallbacks
// - v6.5.4: Fresh bootstrap/local cache namespace so old no-photo cache cannot survive
// - v6.6: Authenticated read-only bridge for the GitHub v7 PWA
// - v6.6: Bridge exposes only safe inventory fields — no passwords / product keys / account credentials
// - v6.6: Existing v6 app routes remain unchanged unless ?bridge=1 is requested
// - v6.7: Public token-gated bridge for GitHub PWA (no third-party Google login iframe)
// - v6.7: Anonymous public deployment cannot access private v6 UI or sensitive server methods
// - v6.8: Direct JSONP read API for GitHub PWA — removes nested Apps Script iframe/postMessage dependency
// - v6.8: API remains connection-key gated and returns only sanitized Step 2 fields
// - v6.9: V7 PWA full-control write bridge: Add / Edit / Status / Photo / Delete
// - v6.9: Public write bridge uses strict safe-field allowlists; credentials/product keys remain private
// - v6.10: PWA UX/performance pass, Phone category, total asset valuation, faster photo workflow
// - v6.10: Public PWA still never returns credentials; private credentials remain Google-authenticated Admin Web only
// - v6.10.3: Admin Web boot recovery — server-preloaded lite inventory + non-blocking background refresh
// - v6.10.4: Fix removed-header event listener crash + instant cache-only Admin boot
// - v6.10.5: Category-aware brand menus + brand logos + advanced dashboard filters/sort
// - v6.10.5: Appends secure Email/iCloud credential columns without moving existing data
// - v6.10.5: Department adds IT; QR labels remain scannable without Libib using Asset Tag identity
// - v6.10.6: Dual light/dark Admin theme, larger brand marks, Xiaomi logo fix, faster detail prefetch, secure PWA credential unlock
// - v6.10.9: Embedded Canon/Cannon, Brother and Epson printer wordmarks — no external logo dependency
// - v6.10.14: Product-photo fit polish for Admin cards/detail/previews
// - v6.10.17: PWA native-layout polish, credential fast-token flow, smart scanner support, premium analytics
// - v6.10.18: scanner recovery, purchase-date analytics, crypto asset-value breakdown, direct credential entry, brand-layout polish
// - v6.10.19: interactive portfolio value, Top-5 leaderboard redesign, lifecycle/service analytics polish, theme-locked detail brand logo
// - v6.10.21: clean portfolio switcher redesign, glowing THB mark, collision-proof web chips, V7 value-switch fix
// - v6.10.22: minimal portfolio repair, QR issue dropdown, Student department, School_4–School_23 Dell migration
// - v6.10.16: Canonical QR identity + strict collision-safe resolver + live QR audit + PWA QR-after-add
// - v6.10.16: One-request credential unlock, theme-safe brand marks, hard bottom-nav pinning
// - v6.10.13: Final Tablet/iPad data cleanup + secure PWA photo fallback + iPhone bottom-tab fix
// - v6.10.10: Split Tablet and iPad categories + one-time iPad detail / credentials / photo migration
// - v6.10.12: Mac mini 01–18 model/cost/date/admin credentials/photo migration
// - v6.10.11: ES Student 1–15 Redmi Pad Pro details, shared photo, and email credentials migration
// - v6.10.7: Canon/Brother/Epson resilient logos + Mi tablet/NBRISP one-time migration helpers + shared-photo safety
// - v6.11: Optimistic PWA saves remove false API-timeout failures after successful writes
// - v6.11: Admin Department/Category selectors match PWA custom-option workflow
// - v6.11: Dedicated Total Asset Value panel + near-real-time cross-platform metadata sync
// - v6.11: Header utility strip removes duplicated Dashboard actions and highlights V7 + creator credit
// - v6.10.26: Fast white-background photo preparation on Web/Admin by default
// - v6.10.26: Optional manual Remove BG (AI) button for Add / Detail Photo
// - v6.10.26: Prepared photo payload is reused on upload (no second processing pass)
// - v6.10.27: Detail URL seeds only the requested lite asset for a smaller first response
// - v6.10.27: Fast photo payloads use compact JPEG output to reduce Drive upload time
// - v6.10.27: Add / Detail photo save returns to the UI immediately while Drive sync continues
// - v6.10.27: Premium live Detail identity card polish without changing Libib / QR data
// - v6.10.28: External scanner cache-busted to v765 with scan confirmation sound
// - v6.10.28: Scanner handoff accepts the clean GitHub entry host without changing Libib / QR matching
// - v6.10.29: Detail and bulk label printing add QR ONLY / QR + Local credentials / credentials-only modes
// - v6.10.29: Credentials-only stickers follow the supplied User / Pw multi-column layout
// - v6.10.30: Comma-separated Local Username / Local Password pairs can be selected per label
// - v6.10.30: Long User/Pw values auto-fit to one line for sticker printing
// - v6.10.31: Pro QR label studio — larger left-aligned QR, combined Asset ID + Serial line, and per-device copy count
// - v6.10.31: QR + credentials keeps Serial visible and enlarges User / Password typography
// ================================================================

const SYSTEM_VERSION = '6.11.7';
const APP_TITLE = 'RISP IT ASSET';
const SHEET_NAME = 'ASSET_DATABASE';
const PHOTO_FOLDER_NAME = 'RISP IT ASSET PHOTOS';
const PHOTO_FOLDER_ID_PROPERTY = 'RISP_IT_ASSET_PHOTO_FOLDER_ID';
const SCANNER_URL = 'https://rispitmedia.github.io/RISP-IT-ASSET/risp_asset_scanner.html';
const FAVICON_URL = 'https://rispitmedia.github.io/RISP-IT-ASSET/risp_app_icon_v652_192.png';
const TOUCH_ICON_URL = 'https://rispitmedia.github.io/RISP-IT-ASSET/risp_touch_icon_v652_180.png';
const APP_ICON_512_URL = 'https://rispitmedia.github.io/RISP-IT-ASSET/risp_app_icon_v652_512.png';
const DATA_CACHE_KEY = 'RISP_IT_ASSET_DB_V6114';
const DATA_CACHE_TTL_SECONDS = 300;
const SCHEMA_CACHE_KEY = 'RISP_IT_ASSET_SCHEMA_V6114';
const LITE_CACHE_KEY = 'RISP_IT_ASSET_LITE_V6114';
const LITE_CACHE_TTL_SECONDS = 300;
const V7_ALLOWED_ORIGIN = 'https://rispitmedia.github.io';
const V7_CONNECTION_KEY = 'gMyLthOOuIW37OwNxfVsl-5w3bcx38aJ6NjMcn0WJF4';
const PRIVATE_ALLOWED_DOMAIN = 'risphuket.ac.th';
const V7_CREDENTIAL_SUPER_ADMIN_PIN = '172000';
const V7_CREDENTIAL_CHALLENGE_TTL_SECONDS = 120;
const V7_CREDENTIAL_SESSION_TTL_SECONDS = 900;
const V7_CREDENTIAL_CHALLENGE_PREFIX = 'RISP_V7_CRED_CHALLENGE_';
const V7_CREDENTIAL_TOKEN_PREFIX = 'RISP_V7_CRED_TOKEN_';
const QR_CANONICAL_PREFIX = 'RISPIT';
const QR_CANONICAL_VERSION = '1';
const QR_AUDIT_SHEET_NAME = 'QR_AUDIT';

const RISP_LOGO_DATA_URI = 'data:image/webp;base64,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';

const SCHOOL_LOGO_DATA_URI = 'data:image/webp;base64,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';

const COL = {
  ASSET_ID: 0,
  ASSET_TAG: 1,
  DEVICE_TYPE: 2,
  BRAND: 3,
  MODEL: 4,
  SERIAL: 5,
  LIBIB: 6,
  SERVICE_TAG: 7,
  PRODUCT_KEY: 8,
  DEPARTMENT: 9,
  ASSIGNED_TO: 10,
  COLOR: 11,
  LOCAL_USERNAME: 12,
  LOCAL_PASSWORD: 13,
  ADMIN_USERNAME: 14,
  ADMIN_PASSWORD: 15,
  MICROSOFT_USERNAME: 16,
  MICROSOFT_PASSWORD: 17,
  PASSWORD_HINT: 18,
  STATUS: 19,
  PURCHASE_DATE: 20,
  WARRANTY: 21,
  COST: 22,
  NOTES: 23,
  SOURCE_SHEET: 24,
  SOURCE_ROW: 25,
  ORIGINAL_DATE: 26,
  UPDATED: 27,
  PHOTO_FILE_ID: 28,
  EMAIL: 29,
  EMAIL_PASSWORD: 30,
  ICLOUD: 31,
  ICLOUD_PASSWORD: 32
};

const HEADERS = [
  'ASSET_ID','ASSET_TAG','DEVICE_TYPE','BRAND','MODEL','SERIAL','LIBIB',
  'SERVICE_TAG','PRODUCT_KEY','DEPARTMENT','ASSIGNED_TO','COLOR',
  'LOCAL_USERNAME','LOCAL_PASSWORD','ADMIN_USERNAME','ADMIN_PASSWORD',
  'MICROSOFT_USERNAME','MICROSOFT_PASSWORD','PASSWORD_HINT','STATUS',
  'PURCHASE_DATE','WARRANTY','COST','NOTES','SOURCE_SHEET','SOURCE_ROW',
  'ORIGINAL_DATE','UPDATED','PHOTO_FILE_ID','EMAIL','EMAIL_PASSWORD','ICLOUD','ICLOUD_PASSWORD'
];

const DEVICE_TYPES = [
  'Laptop','Desktop PC','MacBook','Mac mini','iMac','Tablet','iPad',
  'Monitor','Printer','Projector','Network Equipment','Server','Phone','Other'
];

const EDITABLE_FIELDS = [
  'ASSET_TAG','DEVICE_TYPE','BRAND','MODEL','SERIAL','LIBIB','SERVICE_TAG',
  'PRODUCT_KEY','DEPARTMENT','ASSIGNED_TO','COLOR','LOCAL_USERNAME',
  'LOCAL_PASSWORD','ADMIN_USERNAME','ADMIN_PASSWORD','MICROSOFT_USERNAME',
  'MICROSOFT_PASSWORD','EMAIL','EMAIL_PASSWORD','ICLOUD','ICLOUD_PASSWORD',
  'PASSWORD_HINT','STATUS','PURCHASE_DATE','WARRANTY','COST','NOTES'
];

// ================================================================
// WEB APP
// ================================================================

function doGet(e) {
  const params = e && e.parameter ? e.parameter : {};

  // v6.8 DIRECT PWA API (JSONP):
  // Cross-origin script loading works reliably on desktop + iOS PWA without
  // relying on Apps Script's nested iframe sandbox or third-party cookies.
  if (String(params.v7api || '').trim()) {
    return renderV7JsonpApi_(params);
  }

  // v6.7 PUBLIC PWA BRIDGE kept only for backwards compatibility.
  if (String(params.v7bridge || '') === '1') {
    return renderV7PublicBridge_(params);
  }

  // Legacy authenticated iframe bridge kept for backwards compatibility.
  if (String(params.bridge || '') === '1') {
    return renderV7Bridge_(params);
  }

  // If this code is reached through the anonymous public deployment, do NOT
  // expose the normal v6 app shell. The real v6 deployment remains domain-only.
  if (!isAuthorizedPrivateUser_()) {
    return renderPrivateAccessRequired_();
  }

  // v6.10.4 ADMIN INSTANT BOOT:
  // Never block the first HTML response on a Spreadsheet read. We only use
  // the lightweight Script Cache here (normally already warm from Admin/V7),
  // then refresh from ASSET_DATABASE in the background with google.script.run.
  const scannedValue = String(params.scan || '').trim();
  const requestedId = String(params.id || '').trim();
  const addScanValue = String(params.addscan || '').trim();
  const lookupValue = scannedValue || requestedId || '';
  const lookupMode = scannedValue ? 'scan' : (requestedId ? 'id' : '');

  const cachedLiteAssets = getBootstrapCacheOnly_();
  // Detail links do not need the entire inventory embedded in the first HTML
  // response. Seed only the matching lite row, then hydrate the full row in
  // the background. Dashboard loads still receive the full lite cache.
  const initialLiteAssets = requestedId
    ? cachedLiteAssets.filter(function(asset) {
        const target = normalize_(requestedId);
        return ['ASSET_ID','ASSET_TAG','LIBIB','SERIAL','SERVICE_TAG'].some(function(key) {
          return normalize_(asset && asset[key]) === target;
        });
      })
    : cachedLiteAssets;
  return renderApp_(HEADERS, initialLiteAssets, lookupValue, addScanValue, lookupMode);
}


// ================================================================
// v7 DIRECT WRITE API (v6.9 / FULL CONTROL)
// ================================================================

function doPost(e) {
  const params = e && e.parameter ? e.parameter : {};
  const action = String(params.v7write || '').trim().toLowerCase();

  if (!action) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, version: SYSTEM_VERSION, error: 'Missing v7write action.' }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  let payload;
  try {
    assertV7ConnectionKey_(String(params.key || ''));

    if (action === 'maintenance_add') {
      payload = addAssetMaintenance_(String(params.id || ''), parseV7Payload_(params.payload));
    } else if (action === 'maintenance_update') {
      payload = updateAssetMaintenance_(String(params.id || ''), String(params.recordId || ''), parseV7Payload_(params.payload));
    } else if (action === 'maintenance_delete') {
      payload = deleteAssetMaintenance_(String(params.id || ''), String(params.recordId || ''));
    } else if (action === 'status') {
      payload = v7UpdateStatus_(String(params.id || ''), String(params.status || ''));
    } else if (action === 'add') {
      payload = v7AddAsset_(parseV7Payload_(params.payload));
    } else if (action === 'edit') {
      payload = v7UpdateAsset_(String(params.id || ''), parseV7Payload_(params.payload));
    } else if (action === 'delete') {
      payload = v7DeleteAsset_(String(params.id || ''));
    } else if (action === 'photo') {
      payload = v7SavePhoto_(
        String(params.id || ''),
        String(params.dataUrl || ''),
        String(params.fileName || 'photo.jpg'),
        String(params.mimeType || 'image/jpeg')
      );
    } else {
      throw new Error('Unknown v7 write action.');
    }
  } catch (err) {
    payload = {
      success: false,
      version: SYSTEM_VERSION,
      error: err && err.message ? String(err.message) : String(err || 'Unknown write error')
    };
  }

  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}


// ================================================================
// ACCESS CONTROL / v7 PUBLIC CONNECTION
// ================================================================

function isAuthorizedPrivateUser_() {
  const email = String(Session.getActiveUser().getEmail() || '').trim().toLowerCase();
  if (!email) return false;
  return email.endsWith('@' + PRIVATE_ALLOWED_DOMAIN);
}

function requireAuthorizedPrivateUser_() {
  if (!isAuthorizedPrivateUser_()) {
    throw new Error('Private RISP IT ASSET access requires an authorized ' + PRIVATE_ALLOWED_DOMAIN + ' account.');
  }
}

function assertV7ConnectionKey_(connectionKey) {
  const supplied = String(connectionKey || '').trim();
  if (!supplied || supplied !== V7_CONNECTION_KEY) {
    throw new Error('Invalid v7 connection key.');
  }
}

function credentialHexDigest_(text) {
  const bytes = Utilities.computeDigest(
    Utilities.DigestAlgorithm.SHA_256,
    String(text || ''),
    Utilities.Charset.UTF_8
  );
  return bytes.map(function(b) {
    const v = b < 0 ? b + 256 : b;
    return ('0' + v.toString(16)).slice(-2);
  }).join('');
}



/**
 * Run this function ONCE from the Apps Script editor if you need to reset
 * the shared app/private-credentials PIN to the requested default 172000.
 * The app's Change PIN menu can change it again later.
 */
function resetRispV7AppPinTo172000() {
  PropertiesService.getScriptProperties().setProperty('RISP_V7_CREDENTIAL_SUPER_ADMIN_PIN', '172000');
  Logger.log('RISP IT ASSET PIN reset to 172000.');
}

function getV7CredentialSuperAdminPin_() {
  const props = PropertiesService.getScriptProperties();
  const stored = props.getProperty('RISP_V7_CREDENTIAL_SUPER_ADMIN_PIN');
  if (stored) return stored;
  props.setProperty('RISP_V7_CREDENTIAL_SUPER_ADMIN_PIN', V7_CREDENTIAL_SUPER_ADMIN_PIN);
  return V7_CREDENTIAL_SUPER_ADMIN_PIN;
}

function changeV7CredentialSuperAdminPin_(challengeId, proof, newPin) {
  const cache = CacheService.getScriptCache();
  const id = String(challengeId || '').replace(/[^A-Za-z0-9]/g, '');
  const suppliedProof = String(proof || '').trim().toLowerCase();
  const pin = String(newPin || '').trim();
  if (!/^\d{6,12}$/.test(pin)) throw new Error('New PIN must contain 6 to 12 digits.');
  const challengeKey = V7_CREDENTIAL_CHALLENGE_PREFIX + id;
  const challenge = cache.get(challengeKey);
  cache.remove(challengeKey);
  if (!id || !challenge) throw new Error('PIN change challenge expired. Try again.');
  const expected = credentialHexDigest_(getV7CredentialSuperAdminPin_() + ':' + challenge);
  if (suppliedProof !== expected) throw new Error('Current PIN is incorrect.');
  PropertiesService.getScriptProperties().setProperty('RISP_V7_CREDENTIAL_SUPER_ADMIN_PIN', pin);
  return { success:true };
}

function createV7CredentialChallenge_() {
  const cache = CacheService.getScriptCache();
  const challengeId = Utilities.getUuid().replace(/-/g, '');
  const challenge = Utilities.getUuid().replace(/-/g, '') + String(new Date().getTime());
  cache.put(V7_CREDENTIAL_CHALLENGE_PREFIX + challengeId, challenge, V7_CREDENTIAL_CHALLENGE_TTL_SECONDS);
  return {
    success: true,
    version: SYSTEM_VERSION,
    challengeId: challengeId,
    challenge: challenge,
    expiresIn: V7_CREDENTIAL_CHALLENGE_TTL_SECONDS
  };
}

function issueV7CredentialToken_(challengeId, proof) {
  const cache = CacheService.getScriptCache();
  const id = String(challengeId || '').replace(/[^A-Za-z0-9]/g, '');
  const suppliedProof = String(proof || '').trim().toLowerCase();
  if (!id || !suppliedProof) throw new Error('Missing credential challenge proof.');
  const challengeKey = V7_CREDENTIAL_CHALLENGE_PREFIX + id;
  const challenge = cache.get(challengeKey);
  cache.remove(challengeKey);
  if (!challenge) throw new Error('Credential challenge expired. Try again.');

  const expected = credentialHexDigest_(getV7CredentialSuperAdminPin_() + ':' + challenge);
  if (suppliedProof !== expected) {
    throw new Error('Incorrect Super Admin PIN.');
  }

  const token = Utilities.getUuid().replace(/-/g, '') + Utilities.getUuid().replace(/-/g, '');
  cache.put(V7_CREDENTIAL_TOKEN_PREFIX + token, '1', V7_CREDENTIAL_SESSION_TTL_SECONDS);
  return token;
}

function issueV7CredentialTokenFast_(assetId, bucket, proof) {
  const cleanAssetId = String(assetId || '').trim();
  const suppliedProof = String(proof || '').trim().toLowerCase();
  const suppliedBucket = Number(bucket);
  const currentBucket = Math.floor(new Date().getTime() / 60000);
  if (!cleanAssetId || !suppliedProof || !isFinite(suppliedBucket)) {
    throw new Error('Missing secure credential proof.');
  }
  if (Math.abs(currentBucket - suppliedBucket) > 1) {
    throw new Error('Credential proof expired. Try again.');
  }
  const expected = credentialHexDigest_(
    getV7CredentialSuperAdminPin_() + ':' + cleanAssetId + ':' + String(suppliedBucket)
  );
  if (suppliedProof !== expected) {
    throw new Error('Incorrect Super Admin PIN.');
  }
  const token = Utilities.getUuid().replace(/-/g, '') + Utilities.getUuid().replace(/-/g, '');
  CacheService.getScriptCache().put(
    V7_CREDENTIAL_TOKEN_PREFIX + token,
    '1',
    V7_CREDENTIAL_SESSION_TTL_SECONDS
  );
  return token;
}

function validateV7CredentialToken_(token) {
  const clean = String(token || '').replace(/[^A-Za-z0-9]/g, '');
  if (!clean) return false;
  return CacheService.getScriptCache().get(V7_CREDENTIAL_TOKEN_PREFIX + clean) === '1';
}

function getV7PrivateCredentials_(assetId) {
  const target = normalize_(assetId);
  if (!target) throw new Error('Asset not found.');
  const sheet = getSheet_();
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) throw new Error('Asset not found.');
  // One Sheets read is consistently faster than TextFinder + a second row read on mobile JSONP unlocks.
  const rows = sheet.getRange(2, 1, lastRow - 1, HEADERS.length).getDisplayValues();
  let row = null;
  for (let i = 0; i < rows.length; i++) {
    if (normalize_(rows[i][COL.ASSET_ID]) === target) { row = rows[i]; break; }
  }
  if (!row) throw new Error('Asset not found.');
  const asset = rowToObject_(row);
  return {
    ASSET_ID: String(asset.ASSET_ID || ''),
    ASSET_TAG: String(asset.ASSET_TAG || ''),
    PRODUCT_KEY: String(asset.PRODUCT_KEY || ''),
    LOCAL_USERNAME: String(asset.LOCAL_USERNAME || ''),
    LOCAL_PASSWORD: String(asset.LOCAL_PASSWORD || ''),
    ADMIN_USERNAME: String(asset.ADMIN_USERNAME || ''),
    ADMIN_PASSWORD: String(asset.ADMIN_PASSWORD || ''),
    MICROSOFT_USERNAME: String(asset.MICROSOFT_USERNAME || ''),
    MICROSOFT_PASSWORD: String(asset.MICROSOFT_PASSWORD || ''),
    EMAIL: String(asset.EMAIL || ''),
    EMAIL_PASSWORD: String(asset.EMAIL_PASSWORD || ''),
    ICLOUD: String(asset.ICLOUD || ''),
    ICLOUD_PASSWORD: String(asset.ICLOUD_PASSWORD || ''),
    PASSWORD_HINT: String(asset.PASSWORD_HINT || '')
  };
}
function renderPrivateAccessRequired_() {
  const html = `<!doctype html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<title>RISP IT ASSET — Private</title>
<style>
html,body{margin:0;background:#07111d;color:#dcecff;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
main{max-width:560px;margin:10vh auto;padding:28px}.box{background:#0b1828;border:1px solid #24415e;border-radius:18px;padding:24px}
h1{margin:0 0 10px;font-size:22px}p{color:#91a7bd;line-height:1.6}code{color:#9ecaff}

/* V6.11.4 QR label refinement: clean type, consistent hierarchy, assigned-person bulk option */
.bulk-assigned-toggle{display:flex;align-items:center;gap:8px;white-space:nowrap;color:var(--text,#203247);font-size:11px;font-weight:750;letter-spacing:0;text-transform:none;padding:9px 11px;border:1px solid var(--line,#cbd5df);border-radius:10px;background:var(--surface,#fff)}
.bulk-assigned-toggle input{width:16px;height:16px;accent-color:#3498e8}
.bulk-assigned-toggle[hidden]{display:none!important}
.qr-assigned-toggle span{font-size:10px;letter-spacing:0;text-transform:none}
.qr-label{font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;letter-spacing:0}
.qr-label-school{height:3.2mm;gap:.55mm}
.qr-school-logo{width:4.4mm;height:3.0mm;filter:none!important;object-fit:contain}
.qr-label-school strong{font-size:6.2pt;letter-spacing:.015em}
.qr-label-tag{font-size:9pt;font-weight:780;letter-spacing:-.025em}
.qr-line{font-size:6.05pt;line-height:1.08;letter-spacing:0}
.qr-label-id{font-size:6.1pt!important}
.qr-label-serial{font-size:6.0pt!important}
.qr-label-assigned{font-size:5.9pt!important;font-weight:650}
.qr-label.qr-with-credentials .qr-label-copy{justify-content:center;gap:.1mm}
.qr-label.qr-with-credentials .qr-label-school{height:3.0mm}
.qr-label.qr-with-credentials .qr-label-school strong{font-size:6.0pt}
.qr-label.qr-with-credentials .qr-label-tag{font-size:8.2pt;margin-top:.25mm}
.qr-label.qr-with-credentials .qr-label-id{font-size:5.55pt!important;margin-top:.35mm}
.qr-label.qr-with-credentials .qr-label-serial{font-size:5.7pt!important;margin-top:.2mm}
.qr-label.qr-with-credentials .qr-label-credentials{display:block;font-size:6.15pt;font-weight:680;line-height:1.12;margin-top:.3mm;letter-spacing:0}
.qr-label.qr-with-credentials .qr-label-credentials b{font-weight:800;color:#173a63}
.qr-label.qr-with-credentials .qr-label-assigned{font-size:5.55pt!important}
@media(max-width:900px){
 .bulk-controls{grid-template-columns:1fr!important}
 .bulk-summary{text-align:left}
 .bulk-assigned-toggle{width:max-content;max-width:100%}
}

.web-language-toggle{cursor:pointer;font-weight:850;min-width:38px;justify-content:center}

/* V6.11.5 QR credential label: one physical label, three balanced columns */
.qr-label{grid-template-columns:18.8mm minmax(0,1fr) 17.2mm!important;gap:1.05mm!important;padding:.72mm 1.0mm!important}
.qr-code{width:18.5mm!important;height:18.5mm!important;padding:.55mm!important}
.qr-code img,.qr-code canvas,.qr-print-img{width:17.35mm!important;height:17.35mm!important;max-width:17.35mm!important;max-height:17.35mm!important}
.qr-label-copy{align-self:stretch!important;justify-content:center!important;min-width:0!important;gap:.15mm!important;padding:0 .35mm!important;overflow:hidden!important;text-align:center!important}
.qr-label-school{justify-content:center!important;height:2.8mm!important;gap:.45mm!important}
.qr-school-logo{width:3.5mm!important;height:2.8mm!important;filter:none!important}
.qr-label-school strong{font-size:5.9pt!important;letter-spacing:0!important}
.qr-label-tag{font-size:8.1pt!important;margin-top:.12mm!important;line-height:1.02!important}
.qr-line{font-size:5.55pt!important;line-height:1.05!important;margin-top:.18mm!important}
.qr-label-id,.qr-label-device,.qr-label-serial,.qr-label-assigned{white-space:nowrap!important;overflow:hidden!important;text-overflow:clip!important}
.qr-label-device{font-weight:700!important;color:#263f58!important}
.qr-label-serial{display:block!important}
.qr-credential-side{display:none;align-self:stretch;min-width:0;border-left:.25mm solid #d6e0e9;padding:1mm 0 1mm 1.25mm;flex-direction:column;justify-content:center;gap:1.2mm;overflow:hidden}
.qr-with-credentials .qr-credential-side{display:flex!important}
.qr-with-credentials{grid-template-columns:18.8mm minmax(0,1fr) 17.2mm!important}
.qr-with-credentials .qr-label-copy{border:0!important}
.qr-credential-item{min-width:0;display:flex;flex-direction:column;gap:.45mm;overflow:hidden}
.qr-credential-item span{font-size:4.7pt;font-weight:900;letter-spacing:.09em;color:#62758a;line-height:1}
.qr-credential-item b{display:block;font-size:6.2pt;font-weight:850;color:#102b47;line-height:1.08;overflow-wrap:anywhere;word-break:break-word;white-space:normal}
.qr-with-credentials .qr-label-tag{font-size:7.5pt!important}
.qr-with-credentials .qr-label-id,.qr-with-credentials .qr-label-device,.qr-with-credentials .qr-label-serial{font-size:5.2pt!important}
.qr-with-credentials .qr-label-assigned{font-size:4.9pt!important}
@media print{
 .qr-label{grid-template-columns:18.8mm minmax(0,1fr) 17.2mm!important}
 .qr-credential-side{display:flex!important}
 .qr-label:not(.qr-with-credentials) .qr-credential-side{display:none!important}
}


.web-language-picker{position:relative;display:inline-flex;z-index:10010}
.web-language-toggle{display:flex!important;align-items:center;gap:7px;cursor:pointer;white-space:nowrap}
.web-language-menu{position:absolute;right:0;top:calc(100% + 8px);min-width:150px;padding:6px;border:1px solid #315779;border-radius:12px;background:#0c1b2b;box-shadow:0 16px 40px rgba(0,0,0,.35);z-index:20000}
.web-language-menu[hidden]{display:none!important}
.web-language-menu button{width:100%;border:0;border-radius:8px;background:transparent;color:#eaf4ff;text-align:left;padding:10px 12px;font-size:12px;font-weight:750;cursor:pointer}
.web-language-menu button.selected{background:rgba(72,157,225,.2);color:#91d0ff}

</style></head><body><main><div class="box"><h1>Private RISP IT ASSET deployment</h1>
<p>This deployment does not expose the normal asset application to anonymous visitors.</p>
<p>For the v7 PWA, use the token-gated <code>?v7bridge=1</code> connection route.</p>
</div></main></body></html>`;
  return HtmlService.createHtmlOutput(html).setTitle('RISP IT ASSET — Private');
}

// ================================================================
// v7 DIRECT READ-ONLY JSONP API (v6.8 / STEP 2.3)
// ================================================================

function sanitizeV7JsonpCallback_(name) {
  const cb = String(name || '').trim();
  // Intentionally conservative: simple global callback names only.
  return /^[A-Za-z_$][A-Za-z0-9_$]{0,120}$/.test(cb) ? cb : '';
}

function renderV7JsonpApi_(params) {
  params = params || {};
  const callback = sanitizeV7JsonpCallback_(params.callback);

  if (!callback) {
    return ContentService
      .createTextOutput('/* RISP v7 API: invalid callback */')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }

  let payload;
  try {
    assertV7ConnectionKey_(String(params.key || ''));
    const action = String(params.v7api || '').trim().toLowerCase();

    if (action === 'bootstrap') {
      payload = getV7BootstrapData();
    } else if (action === 'asset') {
      const assetId = String(params.id || '').trim();
      if (!assetId) throw new Error('Missing asset id.');
      payload = {
        success: true,
        version: SYSTEM_VERSION,
        asset: getV7PublicAssetById(assetId)
      };
    } else if (action === 'maintenance' || action === 'maintenance_list' || action === 'maintenance_history') {
      const assetId = String(params.id || '').trim();
      if (!assetId) throw new Error('Missing asset id.');
      payload = { success:true, version:SYSTEM_VERSION, records:getAssetMaintenance_(assetId) };
    } else if (action === 'app_unlock') {
      // App-wide short-lived credential session. The PIN proof is challenge-bound and never sent in clear text.
      const token = issueV7CredentialToken_(String(params.challengeId || ''), String(params.proof || ''));
      payload = { success:true, version:SYSTEM_VERSION, credentialToken:token, expiresIn:V7_CREDENTIAL_SESSION_TTL_SECONDS };
    } else if (action === 'app_change_pin') {
      payload = changeV7CredentialSuperAdminPin_(
        String(params.challengeId || ''),
        String(params.proof || ''),
        String(params.newPin || '')
      );
      payload.version = SYSTEM_VERSION;
    } else if (action === 'meta') {
      payload = getV7DashboardMeta_();
    } else if (action === 'qr_health') {
      payload = getQrIntegrityDetailsV61024_();
    } else if (action === 'resolve') {
      payload = resolveScannedAsset(String(params.value || ''));
      payload.success = true;
      payload.version = SYSTEM_VERSION;
    } else if (action === 'cred_unlock_token') {
      const assetId = String(params.id || '').trim();
      if (!assetId) throw new Error('Missing asset id.');
      const token = issueV7CredentialTokenFast_(
        assetId,
        String(params.bucket || ''),
        String(params.proof || '')
      );
      payload = {
        success: true,
        version: SYSTEM_VERSION,
        credentialToken: token,
        expiresIn: V7_CREDENTIAL_SESSION_TTL_SECONDS
      };
    } else if (action === 'cred_unlock') {
      const assetId = String(params.id || '').trim();
      if (!assetId) throw new Error('Missing asset id.');
      const token = issueV7CredentialTokenFast_(
        assetId,
        String(params.bucket || ''),
        String(params.proof || '')
      );
      payload = {
        success: true,
        version: SYSTEM_VERSION,
        credentialToken: token,
        expiresIn: V7_CREDENTIAL_SESSION_TTL_SECONDS,
        credentials: getV7PrivateCredentials_(assetId)
      };
    } else if (action === 'cred_challenge') {
      payload = createV7CredentialChallenge_();
    } else if (action === 'photo') {
      const assetId = String(params.id || '').trim();
      if (!assetId) throw new Error('Missing asset id.');
      payload = getV7ProtectedPhoto_(assetId);
    } else if (action === 'credentials') {
      const assetId = String(params.id || '').trim();
      if (!assetId) throw new Error('Missing asset id.');
      let token = String(params.credToken || '').trim();
      if (!validateV7CredentialToken_(token)) {
        token = issueV7CredentialToken_(
          String(params.challengeId || ''),
          String(params.proof || '')
        );
      }
      payload = {
        success: true,
        version: SYSTEM_VERSION,
        credentialToken: token,
        expiresIn: V7_CREDENTIAL_SESSION_TTL_SECONDS,
        credentials: getV7PrivateCredentials_(assetId)
      };
    } else if (action === 'ping') {
      payload = {
        success: true,
        version: SYSTEM_VERSION,
        generatedAt: new Date().toISOString()
      };
    } else {
      throw new Error('Unknown v7 API action.');
    }
  } catch (err) {
    payload = {
      success: false,
      version: SYSTEM_VERSION,
      error: err && err.message ? String(err.message) : String(err || 'Unknown API error')
    };
  }

  const body = callback + '(' + JSON.stringify(payload) + ');';
  return ContentService
    .createTextOutput(body)
    .setMimeType(ContentService.MimeType.JAVASCRIPT);
}



function getV7ProtectedPhoto_(assetId) {
  const sheet = getSheet_();
  const data = sheet.getDataRange().getDisplayValues();
  const rows = data.length > 1 ? data.slice(1) : [];
  const rowIndex = findRowIndexByAssetId_(rows, assetId);
  if (rowIndex < 2) throw new Error('Asset not found: ' + assetId);

  const row = rows[rowIndex - 2];
  const fileId = String(row[COL.PHOTO_FILE_ID] || '').trim();
  if (!fileId) return { success: true, version: SYSTEM_VERSION, assetId: String(assetId), found: false, dataUrl: '' };

  const file = DriveApp.getFileById(fileId);
  const blob = file.getBlob();
  const bytes = blob.getBytes();
  if (bytes.length > 6 * 1024 * 1024) throw new Error('Asset photo is too large for protected preview.');
  const mime = String(blob.getContentType() || 'image/jpeg');
  return {
    success: true,
    version: SYSTEM_VERSION,
    assetId: String(assetId),
    found: true,
    fileId: fileId,
    dataUrl: 'data:' + mime + ';base64,' + Utilities.base64Encode(bytes)
  };
}

function makeAssetPhotoAppVisibleV6113_(fileId) {
  fileId = String(fileId || '').trim();
  if (!fileId) return false;
  try {
    const file = DriveApp.getFileById(fileId);
    try { file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW); } catch (shareErr) {}
    return true;
  } catch (err) {
    return false;
  }
}


function getAssetMaintenanceForUi(assetId) {
  if (!isAuthorizedPrivateUser_()) throw new Error('Not authorized.');
  return {success:true,records:getAssetMaintenance_(assetId)};
}
function addAssetMaintenanceForUi(assetId,input) {
  if (!isAuthorizedPrivateUser_()) throw new Error('Not authorized.');
  return addAssetMaintenance_(assetId,input);
}
function updateAssetMaintenanceForUi(assetId,recordId,input) {
  if (!isAuthorizedPrivateUser_()) throw new Error('Not authorized.');
  return updateAssetMaintenance_(assetId,recordId,input);
}
function deleteAssetMaintenanceForUi(assetId,recordId) {
  if (!isAuthorizedPrivateUser_()) throw new Error('Not authorized.');
  return deleteAssetMaintenance_(assetId,recordId);
}

// ================================================================
// v6.11 — SHARED ASSET MAINTENANCE / REPAIR HISTORY
// ================================================================
const ASSET_MAINTENANCE_SHEET = 'ASSET_MAINTENANCE';
const ASSET_MAINTENANCE_HEADERS = [
  'RECORD_ID','ASSET_ID','TYPE','REPORTED_DATE','SENT_DATE','RETURN_DATE',
  'VENDOR','CONTACT','PROBLEM','DIAGNOSIS','ACTION_TAKEN','PARTS',
  'PARTS_COST','LABOR_COST','TOTAL_COST','STATUS','PHOTOS','DOCUMENTS',
  'NOTES','CREATED_AT','CREATED_BY'
];

function getAssetMaintenanceSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) throw new Error('Spreadsheet is unavailable.');
  let sh = ss.getSheetByName(ASSET_MAINTENANCE_SHEET);
  if (!sh) {
    sh = ss.insertSheet(ASSET_MAINTENANCE_SHEET);
    sh.getRange(1,1,1,ASSET_MAINTENANCE_HEADERS.length).setValues([ASSET_MAINTENANCE_HEADERS]);
    sh.setFrozenRows(1);
    sh.getRange(1,1,1,ASSET_MAINTENANCE_HEADERS.length)
      .setBackground('#10243a').setFontColor('#ffffff').setFontWeight('bold');
  } else if (sh.getLastRow() === 0) {
    sh.getRange(1,1,1,ASSET_MAINTENANCE_HEADERS.length).setValues([ASSET_MAINTENANCE_HEADERS]);
    sh.setFrozenRows(1);
  }
  return sh;
}

function getAssetMaintenanceFolder_() {
  const props = PropertiesService.getScriptProperties();
  let id = props.getProperty('RISP_ASSET_MAINTENANCE_FOLDER_ID');
  if (id) {
    try { return DriveApp.getFolderById(id); } catch (e) {}
  }
  const folder = DriveApp.createFolder('RISP IT ASSET — Maintenance Records');
  props.setProperty('RISP_ASSET_MAINTENANCE_FOLDER_ID', folder.getId());
  return folder;
}

function maintenanceSaveFiles_(assetId, files, kind) {
  const out = [];
  (Array.isArray(files) ? files : []).slice(0,8).forEach(function(item) {
    if (!item || !item.dataUrl) return;
    const dataUrl = String(item.dataUrl);
    const match = dataUrl.match(/^data:([^;]+);base64,([\s\S]+)$/);
    if (!match) return;
    const bytes = Utilities.base64Decode(match[2]);
    if (bytes.length > 5 * 1024 * 1024) throw new Error('Each attachment must be 5 MB or smaller.');
    const mime = match[1] || 'application/octet-stream';
    const safeName = String(item.name || kind || 'attachment').replace(/[\\/:*?"<>|]/g,'_').slice(0,100);
    const folder = getAssetMaintenanceFolder_();
    const assetFolderName = String(assetId).replace(/[^A-Za-z0-9_-]/g,'_');
    let assetFolder;
    const found = folder.getFoldersByName(assetFolderName);
    assetFolder = found.hasNext() ? found.next() : folder.createFolder(assetFolderName);
    const file = assetFolder.createFile(Utilities.newBlob(bytes,mime,safeName));
    try { file.setSharing(DriveApp.Access.DOMAIN_WITH_LINK, DriveApp.Permission.VIEW); } catch (shareErr) {}
    out.push({id:file.getId(),name:file.getName(),mimeType:mime,url:file.getUrl()});
  });
  return out;
}

function getAssetMaintenance_(assetId) {
  const target = String(assetId || '').trim();
  if (!target) throw new Error('Asset ID is required.');
  const assetSheet = getSheet_();
  const assetData = assetSheet.getDataRange().getDisplayValues();
  const assetRows = assetData.length > 1 ? assetData.slice(1) : [];
  if (findRowIndexByAssetId_(assetRows,target) < 2) throw new Error('Asset not found.');
  const sh = getAssetMaintenanceSheet_();
  const values = sh.getDataRange().getDisplayValues();
  if (values.length < 2) return [];
  const idx = {};
  ASSET_MAINTENANCE_HEADERS.forEach((h,i)=>idx[h]=i);
  return values.slice(1).filter(r=>String(r[idx.ASSET_ID]||'').trim()===target).map(function(r) {
    const obj = {};
    ASSET_MAINTENANCE_HEADERS.forEach(h=>obj[h]=r[idx[h]] || '');
    try { obj.PHOTOS = JSON.parse(obj.PHOTOS || '[]'); } catch(e) { obj.PHOTOS=[]; }
    try { obj.DOCUMENTS = JSON.parse(obj.DOCUMENTS || '[]'); } catch(e) { obj.DOCUMENTS=[]; }
    return obj;
  }).sort((a,b)=>String(b.REPORTED_DATE||b.CREATED_AT).localeCompare(String(a.REPORTED_DATE||a.CREATED_AT)));
}

function addAssetMaintenance_(assetId, input) {
  const id = String(assetId || '').trim();
  if (!id) throw new Error('Asset ID is required.');
  input = input || {};
  return withWriteLock_(function() {
    const assetSheet = getSheet_();
    const data = assetSheet.getDataRange().getDisplayValues();
    const rows = data.length > 1 ? data.slice(1) : [];
    if (findRowIndexByAssetId_(rows,id) < 2) throw new Error('Asset not found.');
    const photos = maintenanceSaveFiles_(id,input.photos,'photo');
    const docs = maintenanceSaveFiles_(id,input.documents,'document');
    const now = new Date();
    const recordId = 'MNT-' + Utilities.getUuid().replace(/-/g,'').slice(0,12).toUpperCase();
    const clean = function(v,max){return String(v==null?'':v).trim().slice(0,max||2000);};
    const partsCost = Math.max(0,Number(input.partsCost)||0);
    const laborCost = Math.max(0,Number(input.laborCost)||0);
    const total = partsCost + laborCost;
    const row = [
      recordId,id,clean(input.type,50),clean(input.reportedDate,30),clean(input.sentDate,30),
      clean(input.returnDate,30),clean(input.vendor,200),clean(input.contact,200),
      clean(input.problem,4000),clean(input.diagnosis,4000),clean(input.actionTaken,4000),
      clean(input.parts,2000),partsCost,laborCost,total,clean(input.status,50),
      JSON.stringify(photos),JSON.stringify(docs),clean(input.notes,4000),now,
      Session.getActiveUser().getEmail() || 'PWA'
    ];
    const sh = getAssetMaintenanceSheet_();
    sh.getRange(sh.getLastRow() + 1, 1, 1, row.length).setValues([row]);
    SpreadsheetApp.flush();
    const record = {};
    ASSET_MAINTENANCE_HEADERS.forEach(function(h,i){ record[h] = row[i] || ''; });
    record.PHOTOS = photos;
    record.DOCUMENTS = docs;
    return {success:true,version:SYSTEM_VERSION,recordId:recordId,record:record};
  });
}

function updateAssetMaintenance_(assetId, recordId, input) {
  const id = String(assetId || '').trim();
  const rid = String(recordId || '').trim();
  if (!id || !rid) throw new Error('Asset and repair record IDs are required.');
  input = input || {};
  return withWriteLock_(function() {
    const sh = getAssetMaintenanceSheet_();
    const last = sh.getLastRow();
    if (last < 2) throw new Error('Repair record not found.');
    const finder = sh.getRange(2, 1, last - 1, 1).createTextFinder(rid).matchEntireCell(true);
    const cell = finder.findNext();
    if (!cell) throw new Error('Repair record not found.');
    const rowNumber = cell.getRow();
    const row = sh.getRange(rowNumber, 1, 1, ASSET_MAINTENANCE_HEADERS.length).getValues()[0];
    if (String(row[1] || '').trim() !== id) throw new Error('Repair record does not belong to this asset.');

    const parseFiles = function(value) { try { return JSON.parse(String(value || '[]')) || []; } catch(e) { return []; } };
    const oldPhotos = parseFiles(row[16]), oldDocs = parseFiles(row[17]);
    const newPhotos = maintenanceSaveFiles_(id, input.photos, 'photo');
    const newDocs = maintenanceSaveFiles_(id, input.documents, 'document');
    const clean = function(v,max){return String(v==null?'':v).trim().slice(0,max||2000);};
    const partsCost = Math.max(0, Number(input.partsCost) || 0);
    const laborCost = Math.max(0, Number(input.laborCost) || 0);

    row[2] = clean(input.type,50);
    row[3] = clean(input.reportedDate,30);
    row[4] = clean(input.sentDate,30);
    row[5] = clean(input.returnDate,30);
    row[6] = clean(input.vendor,200);
    row[7] = clean(input.contact,200);
    row[8] = clean(input.problem,4000);
    row[9] = clean(input.diagnosis,4000);
    row[10] = clean(input.actionTaken,4000);
    row[11] = clean(input.parts,2000);
    row[12] = partsCost;
    row[13] = laborCost;
    row[14] = partsCost + laborCost;
    row[15] = clean(input.status,50);
    row[16] = JSON.stringify(oldPhotos.concat(newPhotos));
    row[17] = JSON.stringify(oldDocs.concat(newDocs));
    row[18] = clean(input.notes,4000);
    sh.getRange(rowNumber, 1, 1, ASSET_MAINTENANCE_HEADERS.length).setValues([row]);
    SpreadsheetApp.flush();
    const record = {};
    ASSET_MAINTENANCE_HEADERS.forEach(function(h,i){ record[h] = row[i] || ''; });
    record.PHOTOS = oldPhotos.concat(newPhotos);
    record.DOCUMENTS = oldDocs.concat(newDocs);
    return {success:true, version:SYSTEM_VERSION, recordId:rid, record:record};
  });
}

function deleteAssetMaintenance_(assetId, recordId) {
  const id = String(assetId || '').trim();
  const rid = String(recordId || '').trim();
  if (!id || !rid) throw new Error('Asset and repair record IDs are required.');
  return withWriteLock_(function() {
    const sh = getAssetMaintenanceSheet_();
    const last = sh.getLastRow();
    if (last < 2) throw new Error('Repair record not found.');
    const cell = sh.getRange(2, 1, last - 1, 1).createTextFinder(rid).matchEntireCell(true).findNext();
    if (!cell) throw new Error('Repair record not found.');
    const rowNumber = cell.getRow();
    const rowAssetId = String(sh.getRange(rowNumber, 2).getDisplayValue() || '').trim();
    if (rowAssetId !== id) throw new Error('Repair record does not belong to this asset.');
    // Keep Drive attachments as an audit trail; only remove the indexed record.
    sh.deleteRow(rowNumber);
    SpreadsheetApp.flush();
    return {success:true, version:SYSTEM_VERSION, recordId:rid, deleted:true};
  });
}

// ================================================================
// v7 SAFE WRITE HELPERS (v6.9)
// ================================================================

const V7_SAFE_WRITE_FIELDS = [
  'ASSET_TAG',
  'DEVICE_TYPE',
  'BRAND',
  'MODEL',
  'SERIAL',
  'LIBIB',
  'SERVICE_TAG',
  'DEPARTMENT',
  'ASSIGNED_TO',
  'COLOR',
  'STATUS',
  'PURCHASE_DATE',
  'WARRANTY',
  'COST',
  'NOTES',
  'PRODUCT_KEY',
  'LOCAL_USERNAME',
  'LOCAL_PASSWORD',
  'ADMIN_USERNAME',
  'ADMIN_PASSWORD',
  'MICROSOFT_USERNAME',
  'MICROSOFT_PASSWORD',
  'PASSWORD_HINT',
  'EMAIL',
  'EMAIL_PASSWORD',
  'ICLOUD',
  'ICLOUD_PASSWORD'
];

const V7_PRIVATE_WRITE_FIELDS = [
  'PRODUCT_KEY','LOCAL_USERNAME','LOCAL_PASSWORD','ADMIN_USERNAME','ADMIN_PASSWORD',
  'MICROSOFT_USERNAME','MICROSOFT_PASSWORD','PASSWORD_HINT','EMAIL','EMAIL_PASSWORD','ICLOUD','ICLOUD_PASSWORD'
];

const V7_ALLOWED_STATUSES = [
  'Active',
  'Inactive',
  'In Use',
  'Available',
  'Repair',
  'Maintenance',
  'Storage',
  'Retired',
  'Lost',
  'Other'
];

function parseV7Payload_(raw) {
  const text = String(raw || '').trim();
  if (!text) return {};
  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch (err) {
    throw new Error('Invalid v7 payload.');
  }
  if (!parsed || Object.prototype.toString.call(parsed) !== '[object Object]') {
    throw new Error('Invalid v7 payload object.');
  }
  return parsed;
}

function v7SanitizeWriteAsset_(input) {
  input = input || {};
  const clean = {};
  V7_SAFE_WRITE_FIELDS.forEach(function(key) {
    if (!Object.prototype.hasOwnProperty.call(input, key)) return;
    clean[key] = String(input[key] == null ? '' : input[key]).trim();
  });

  if (Object.prototype.hasOwnProperty.call(clean, 'STATUS')) {
    clean.STATUS = v7NormalizeStatus_(clean.STATUS);
  }
  return clean;
}

function v7NormalizeStatus_(status) {
  const raw = String(status || '').trim();
  const normalized = normalize_(raw);
  for (let i = 0; i < V7_ALLOWED_STATUSES.length; i++) {
    if (normalize_(V7_ALLOWED_STATUSES[i]) === normalized) return V7_ALLOWED_STATUSES[i];
  }
  throw new Error('Unsupported status: ' + raw);
}

function v7UpdateStatus_(assetId, status) {
  const canonicalId = String(assetId || '').trim();
  if (!canonicalId) throw new Error('Asset ID is required.');
  const nextStatus = v7NormalizeStatus_(status);

  return withWriteLock_(function() {
    const sheet = getSheet_();
    const data = sheet.getDataRange().getDisplayValues();
    const rows = data.length > 1 ? data.slice(1) : [];
    const rowIndex = findRowIndexByAssetId_(rows, canonicalId);
    if (rowIndex < 2) throw new Error('Asset not found: ' + canonicalId);

    const now = new Date();
    sheet.getRange(rowIndex, COL.STATUS + 1).setValue(nextStatus);
    sheet.getRange(rowIndex, COL.UPDATED + 1).setValue(now);
    SpreadsheetApp.flush();
    invalidateDatabaseCache_();

    const refreshed = sheet.getRange(rowIndex, 1, 1, HEADERS.length).getDisplayValues()[0];
    return {
      success: true,
      version: SYSTEM_VERSION,
      assetId: String(refreshed[COL.ASSET_ID] || canonicalId),
      status: nextStatus,
      asset: v7PublicDetailAsset_(rowToObject_(refreshed))
    };
  });
}

function v7AddAsset_(input) {
  const asset = v7SanitizeWriteAsset_(input);

  return withWriteLock_(function() {
    ensureDatabaseColumns_();
    const sheet = getSheet_();
    const data = sheet.getDataRange().getDisplayValues();
    const rows = data.length > 1 ? data.slice(1) : [];
    const assetTag = String(asset.ASSET_TAG || '').trim();
    assertUniqueAssetTag_(rows, assetTag, '');

    const assetId = generateAssetId_();
    const now = new Date();
    const row = new Array(HEADERS.length).fill('');

    row[COL.ASSET_ID] = assetId;
    row[COL.ASSET_TAG] = assetTag;
    row[COL.DEVICE_TYPE] = String(asset.DEVICE_TYPE || 'Other').trim() || 'Other';
    row[COL.BRAND] = String(asset.BRAND || '').trim();
    row[COL.MODEL] = String(asset.MODEL || '').trim();
    row[COL.SERIAL] = String(asset.SERIAL || '').trim();
    row[COL.LIBIB] = String(asset.LIBIB || '').trim();
    row[COL.SERVICE_TAG] = String(asset.SERVICE_TAG || '').trim();
    row[COL.DEPARTMENT] = String(asset.DEPARTMENT || '').trim();
    row[COL.ASSIGNED_TO] = String(asset.ASSIGNED_TO || '').trim();
    row[COL.COLOR] = String(asset.COLOR || '').trim();
    row[COL.STATUS] = asset.STATUS ? v7NormalizeStatus_(asset.STATUS) : 'Active';
    row[COL.PURCHASE_DATE] = normalizePurchaseDate_(asset.PURCHASE_DATE);
    row[COL.WARRANTY] = String(asset.WARRANTY || '').trim();
    row[COL.COST] = normalizeBaht_(asset.COST);
    row[COL.NOTES] = String(asset.NOTES || '').trim();
    row[COL.PRODUCT_KEY] = String(asset.PRODUCT_KEY || '').trim();
    row[COL.LOCAL_USERNAME] = String(asset.LOCAL_USERNAME || '').trim();
    row[COL.LOCAL_PASSWORD] = String(asset.LOCAL_PASSWORD || '').trim();
    row[COL.ADMIN_USERNAME] = String(asset.ADMIN_USERNAME || '').trim();
    row[COL.ADMIN_PASSWORD] = String(asset.ADMIN_PASSWORD || '').trim();
    row[COL.MICROSOFT_USERNAME] = String(asset.MICROSOFT_USERNAME || '').trim();
    row[COL.MICROSOFT_PASSWORD] = String(asset.MICROSOFT_PASSWORD || '').trim();
    row[COL.PASSWORD_HINT] = String(asset.PASSWORD_HINT || '').trim();
    row[COL.EMAIL] = String(asset.EMAIL || '').trim();
    row[COL.EMAIL_PASSWORD] = String(asset.EMAIL_PASSWORD || '').trim();
    row[COL.ICLOUD] = String(asset.ICLOUD || '').trim();
    row[COL.ICLOUD_PASSWORD] = String(asset.ICLOUD_PASSWORD || '').trim();
    row[COL.SOURCE_SHEET] = 'RISP IT ASSET V7';
    row[COL.SOURCE_ROW] = '';
    row[COL.ORIGINAL_DATE] = now;
    row[COL.UPDATED] = now;
    row[COL.PHOTO_FILE_ID] = '';

    // v6.10.18: private fields are accepted as WRITE-ONLY input from the paired PWA.
    // They are never returned in bootstrap/detail payloads and are never stored in PWA local cache.
    const rowIndex = sheet.getLastRow() + 1;
    sheet.getRange(rowIndex, 1, 1, HEADERS.length).setValues([row]);
    applyAssetCellFormats_(sheet, rowIndex);
    SpreadsheetApp.flush();
    invalidateDatabaseCache_();

    const displayRow = sheet.getRange(rowIndex, 1, 1, HEADERS.length).getDisplayValues()[0];
    return {
      success: true,
      version: SYSTEM_VERSION,
      assetId: assetId,
      assetTag: assetTag,
      asset: v7PublicDetailAsset_(rowToObject_(displayRow))
    };
  });
}

function v7UpdateAsset_(assetId, input) {
  const requestedId = String(assetId || '').trim();
  if (!requestedId) throw new Error('Asset ID is required.');
  const patch = v7SanitizeWriteAsset_(input);

  return withWriteLock_(function() {
    ensureDatabaseColumns_();
    const sheet = getSheet_();
    const displayData = sheet.getDataRange().getDisplayValues();
    const rows = displayData.length > 1 ? displayData.slice(1) : [];
    const rowIndex = findRowIndexByAssetId_(rows, requestedId);
    if (rowIndex < 2) throw new Error('Asset not found: ' + requestedId);

    const oldDisplay = rows[rowIndex - 2];
    const canonicalAssetId = String(oldDisplay[COL.ASSET_ID] || '').trim();
    const oldValues = sheet.getRange(rowIndex, 1, 1, HEADERS.length).getValues()[0];
    const row = oldValues.slice();

    if (Object.prototype.hasOwnProperty.call(patch, 'ASSET_TAG')) {
      assertUniqueAssetTag_(rows, patch.ASSET_TAG, canonicalAssetId);
      row[COL.ASSET_TAG] = patch.ASSET_TAG;
    }
    if (Object.prototype.hasOwnProperty.call(patch, 'DEVICE_TYPE')) row[COL.DEVICE_TYPE] = patch.DEVICE_TYPE || 'Other';
    if (Object.prototype.hasOwnProperty.call(patch, 'BRAND')) row[COL.BRAND] = patch.BRAND;
    if (Object.prototype.hasOwnProperty.call(patch, 'MODEL')) row[COL.MODEL] = patch.MODEL;
    if (Object.prototype.hasOwnProperty.call(patch, 'SERIAL')) row[COL.SERIAL] = patch.SERIAL;
    if (Object.prototype.hasOwnProperty.call(patch, 'LIBIB')) row[COL.LIBIB] = patch.LIBIB;
    if (Object.prototype.hasOwnProperty.call(patch, 'SERVICE_TAG')) row[COL.SERVICE_TAG] = patch.SERVICE_TAG;
    if (Object.prototype.hasOwnProperty.call(patch, 'DEPARTMENT')) row[COL.DEPARTMENT] = patch.DEPARTMENT;
    if (Object.prototype.hasOwnProperty.call(patch, 'ASSIGNED_TO')) row[COL.ASSIGNED_TO] = patch.ASSIGNED_TO;
    if (Object.prototype.hasOwnProperty.call(patch, 'COLOR')) row[COL.COLOR] = patch.COLOR;
    if (Object.prototype.hasOwnProperty.call(patch, 'STATUS')) row[COL.STATUS] = v7NormalizeStatus_(patch.STATUS);
    if (Object.prototype.hasOwnProperty.call(patch, 'PURCHASE_DATE')) row[COL.PURCHASE_DATE] = normalizePurchaseDate_(patch.PURCHASE_DATE);
    if (Object.prototype.hasOwnProperty.call(patch, 'WARRANTY')) row[COL.WARRANTY] = patch.WARRANTY;
    if (Object.prototype.hasOwnProperty.call(patch, 'COST')) row[COL.COST] = normalizeBaht_(patch.COST);
    if (Object.prototype.hasOwnProperty.call(patch, 'NOTES')) row[COL.NOTES] = patch.NOTES;

    V7_PRIVATE_WRITE_FIELDS.forEach(function(key) {
      if (!Object.prototype.hasOwnProperty.call(patch, key)) return;
      const incoming = String(patch[key] == null ? '' : patch[key]).trim();
      if (!incoming) return; // Edit form: blank intentionally means KEEP CURRENT secret.
      row[COL[key]] = incoming;
    });

    // Asset ID remains immutable. Private fields above are write-only from v7.
    row[COL.ASSET_ID] = oldValues[COL.ASSET_ID];
    row[COL.UPDATED] = new Date();

    sheet.getRange(rowIndex, 1, 1, HEADERS.length).setValues([row]);
    applyAssetCellFormats_(sheet, rowIndex);
    SpreadsheetApp.flush();
    invalidateDatabaseCache_();

    const refreshed = sheet.getRange(rowIndex, 1, 1, HEADERS.length).getDisplayValues()[0];
    return {
      success: true,
      version: SYSTEM_VERSION,
      assetId: canonicalAssetId,
      asset: v7PublicDetailAsset_(rowToObject_(refreshed))
    };
  });
}


// ================================================================
// SHARED PHOTO REFERENCE SAFETY (v6.10.7)
// Allows one source photo to be reused by multiple assets without a later
// Edit/Delete on one asset trashing the file for every other asset.
// ================================================================
function photoFileReferencedElsewhereInRows_(rows, photoFileId, exceptAssetId) {
  const targetFile = String(photoFileId || '').trim();
  const exceptId = normalize_(exceptAssetId || '');
  if (!targetFile) return false;
  rows = Array.isArray(rows) ? rows : [];
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i] || [];
    const rowId = normalize_(row[COL.ASSET_ID] || '');
    if (exceptId && rowId === exceptId) continue;
    if (String(row[COL.PHOTO_FILE_ID] || '').trim() === targetFile) return true;
  }
  return false;
}

function v7DeleteAsset_(assetId) {
  const requestedId = String(assetId || '').trim();
  if (!requestedId) throw new Error('Asset ID is required.');

  return withWriteLock_(function() {
    const sheet = getSheet_();
    const data = sheet.getDataRange().getDisplayValues();
    const rows = data.length > 1 ? data.slice(1) : [];
    const rowIndex = findRowIndexByAssetId_(rows, requestedId);
    if (rowIndex < 2) throw new Error('Asset not found: ' + requestedId);

    const row = rows[rowIndex - 2];
    const photoId = String(row[COL.PHOTO_FILE_ID] || '').trim();
    const deletedTag = String(row[COL.ASSET_TAG] || '').trim();
    const canonicalId = String(row[COL.ASSET_ID] || requestedId).trim();
    const photoIsShared = photoFileReferencedElsewhereInRows_(rows, photoId, canonicalId);

    sheet.deleteRow(rowIndex);
    SpreadsheetApp.flush();
    invalidateDatabaseCache_();

    if (photoId && !photoIsShared) {
      try { DriveApp.getFileById(photoId).setTrashed(true); } catch (err) {}
    }

    return { success: true, version: SYSTEM_VERSION, assetId: canonicalId, assetTag: deletedTag };
  });
}

function v7SavePhoto_(assetId, dataUrl, fileName, mimeType) {
  const requestedId = String(assetId || '').trim();
  if (!requestedId || !dataUrl) throw new Error('Missing asset or image.');

  return withWriteLock_(function() {
    const sheet = getSheet_();
    const data = sheet.getDataRange().getDisplayValues();
    const rows = data.length > 1 ? data.slice(1) : [];
    const rowIndex = findRowIndexByAssetId_(rows, requestedId);
    if (rowIndex < 2) throw new Error('Asset not found: ' + requestedId);

    const match = String(dataUrl).match(/^data:([^;]+);base64,(.+)$/);
    if (!match) throw new Error('Invalid image data.');

    const actualMime = String(mimeType || match[1] || 'image/jpeg');
    const bytes = Utilities.base64Decode(match[2]);
    // 8 MB compressed client image ceiling for the PWA bridge.
    if (bytes.length > 8 * 1024 * 1024) throw new Error('Image is too large.');

    const safeName = String(fileName || 'photo.jpg').replace(/[^A-Za-z0-9._-]+/g, '_');
    const folder = getPhotoFolder_();
    const stamp = new Date().getTime();
    // Create the final Drive filename in one operation for the PWA write path.
    const finalName = 'RISP-' + requestedId.replace(/[^A-Za-z0-9_-]/g, '_') + '-' + stamp + '-' + safeName;
    const blob = Utilities.newBlob(bytes, actualMime, finalName);
    const newFile = folder.createFile(blob);

    try { newFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW); } catch (err) {}

    const oldPhotoId = String(rows[rowIndex - 2][COL.PHOTO_FILE_ID] || '').trim();
    const oldPhotoIsShared = photoFileReferencedElsewhereInRows_(rows, oldPhotoId, requestedId);
    const now = new Date();
    sheet.getRange(rowIndex, COL.UPDATED + 1, 1, 2).setValues([[now, newFile.getId()]]);
    SpreadsheetApp.flush();
    invalidateDatabaseCache_();

    if (oldPhotoId && oldPhotoId !== newFile.getId() && !oldPhotoIsShared) {
      try { DriveApp.getFileById(oldPhotoId).setTrashed(true); } catch (err) {}
    }

    // The row was already loaded above; patch the two changed fields instead
    // of reading the full row back after every PWA photo save.
    const updatedAsset = rowToObject_(rows[rowIndex - 2]);
    updatedAsset.PHOTO_FILE_ID = newFile.getId();
    updatedAsset.UPDATED = Utilities.formatDate(now, Session.getScriptTimeZone(), 'dd/MM/yyyy HH:mm');
    return {
      success: true,
      version: SYSTEM_VERSION,
      fileId: newFile.getId(),
      asset: v7PublicDetailAsset_(updatedAsset)
    };
  });
}

// ================================================================
// v7 PWA READ-ONLY BRIDGE (STEP 2)
// ================================================================

function v7PublicLiteAsset_(asset) {
  asset = asset || {};
  return {
    ASSET_ID: String(asset.ASSET_ID || ''),
    ASSET_TAG: String(asset.ASSET_TAG || ''),
    DEVICE_TYPE: String(asset.DEVICE_TYPE || ''),
    BRAND: String(asset.BRAND || ''),
    MODEL: String(asset.MODEL || ''),
    SERIAL: String(asset.SERIAL || ''),
    LIBIB: String(asset.LIBIB || ''),
    SERVICE_TAG: String(asset.SERVICE_TAG || ''),
    DEPARTMENT: String(asset.DEPARTMENT || ''),
    ASSIGNED_TO: String(asset.ASSIGNED_TO || ''),
    STATUS: String(asset.STATUS || ''),
    PURCHASE_DATE: String(asset.PURCHASE_DATE || ''),
    COST: String(asset.COST || ''),
    UPDATED: String(asset.UPDATED || ''),
    PHOTO_FILE_ID: String(asset.PHOTO_FILE_ID || '')
  };
}

function v7PublicDetailAsset_(asset) {
  asset = asset || {};
  return {
    ASSET_ID: String(asset.ASSET_ID || ''),
    ASSET_TAG: String(asset.ASSET_TAG || ''),
    DEVICE_TYPE: String(asset.DEVICE_TYPE || ''),
    BRAND: String(asset.BRAND || ''),
    MODEL: String(asset.MODEL || ''),
    SERIAL: String(asset.SERIAL || ''),
    LIBIB: String(asset.LIBIB || ''),
    SERVICE_TAG: String(asset.SERVICE_TAG || ''),
    DEPARTMENT: String(asset.DEPARTMENT || ''),
    ASSIGNED_TO: String(asset.ASSIGNED_TO || ''),
    COLOR: String(asset.COLOR || ''),
    STATUS: String(asset.STATUS || ''),
    PURCHASE_DATE: String(asset.PURCHASE_DATE || ''),
    WARRANTY: String(asset.WARRANTY || ''),
    COST: String(asset.COST || ''),
    NOTES: String(asset.NOTES || ''),
    UPDATED: String(asset.UPDATED || ''),
    PHOTO_FILE_ID: String(asset.PHOTO_FILE_ID || '')
  };
}

function getV7BootstrapData() {
  const base = getBootstrapData();
  return {
    success: true,
    version: SYSTEM_VERSION,
    generatedAt: base.generatedAt || new Date().toISOString(),
    assets: (base.assets || []).map(v7PublicLiteAsset_)
  };
}

function getV7PublicAssetById(assetId) {
  const asset = getAssetByIdInternal_(assetId);
  if (!asset) return null;
  return v7PublicDetailAsset_(asset);
}

function getV7BootstrapDataWithKey(connectionKey) {
  assertV7ConnectionKey_(connectionKey);
  return getV7BootstrapData();
}

function getV7PublicAssetByIdWithKey(connectionKey, assetId) {
  assertV7ConnectionKey_(connectionKey);
  return getV7PublicAssetById(assetId);
}

function renderV7PublicBridge_(params) {
  const connectionKey = String((params && params.key) || '').trim();
  const token = String((params && params.token) || '').replace(/[^A-Za-z0-9_-]/g, '').slice(0, 120);
  const allowedOrigin = V7_ALLOWED_ORIGIN;

  // Reject bad keys before the bridge page is even rendered.
  try {
    assertV7ConnectionKey_(connectionKey);
  } catch (err) {
    const html = '<!doctype html><html><head><meta charset="utf-8"><title>RISP v7 Bridge</title></head>' +
      '<body style="margin:0;background:#07111d;color:#ff8f94;font:13px -apple-system;padding:18px">' +
      '<b>RISP v7 Bridge</b><p>Invalid connection key.</p></body></html>';
    return HtmlService.createHtmlOutput(html)
      .setTitle('RISP v7 Bridge')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }

  const html = String.raw`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>RISP v7 Public Bridge</title>
<style>
html,body{margin:0;background:#07111d;color:#dcecff;font:13px -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
main{padding:18px}.ok{color:#67ed92}.muted{color:#7890a8}
</style>
</head>
<body>
<main><b>RISP IT ASSET v7 Bridge</b><div class="muted" id="state">Connecting…</div></main>
<script>
(function(){
  'use strict';
  var TOKEN=${JSON.stringify(token)};
  var KEY=${JSON.stringify(connectionKey)};
  var ALLOWED_ORIGIN=${JSON.stringify(allowedOrigin)};
  var state=document.getElementById('state');

  function send(type,payload,requestId){
    if (window.parent===window) return;
    window.parent.postMessage({
      source:'RISP_V7_PUBLIC_BRIDGE', token:TOKEN, type:type,
      requestId:requestId || '', payload:payload == null ? null : payload
    }, ALLOWED_ORIGIN);
  }

  function fail(err,requestId){
    var message=(err && err.message) ? err.message : String(err || 'Unknown bridge error');
    state.textContent='Connection failed';
    send('error',{message:message},requestId);
  }

  function loadBootstrap(requestId){
    google.script.run
      .withSuccessHandler(function(payload){
        state.textContent='Connected'; state.className='ok';
        send('bootstrap',payload,requestId);
      })
      .withFailureHandler(function(err){fail(err,requestId);})
      .getV7BootstrapDataWithKey(KEY);
  }

  window.addEventListener('message',function(event){
    if (event.origin !== ALLOWED_ORIGIN) return;
    var msg=event.data || {};
    if (msg.source !== 'RISP_V7_APP' || msg.token !== TOKEN) return;

    if (msg.type === 'bootstrap') {
      loadBootstrap(msg.requestId || '');
    } else if (msg.type === 'asset') {
      google.script.run
        .withSuccessHandler(function(asset){send('asset',asset,msg.requestId || '');})
        .withFailureHandler(function(err){fail(err,msg.requestId || '');})
        .getV7PublicAssetByIdWithKey(KEY,String(msg.assetId || ''));
    } else if (msg.type === 'ping') {
      send('pong',{version:${JSON.stringify(SYSTEM_VERSION)}},msg.requestId || '');
    }
  });

  send('ready',{version:${JSON.stringify(SYSTEM_VERSION)}});
  loadBootstrap('initial');
})();
</script>
</body>
</html>`;

  return HtmlService
    .createHtmlOutput(html)
    .setTitle('RISP v7 Public Bridge')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function renderV7Bridge_(params) {
  const token = String((params && params.token) || '').replace(/[^A-Za-z0-9_-]/g, '').slice(0, 120);
  const allowedOrigin = V7_ALLOWED_ORIGIN;
  const html = String.raw`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>RISP v7 Data Bridge</title>
<style>
html,body{margin:0;background:#07111d;color:#dcecff;font:13px -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
main{padding:18px}.ok{color:#67ed92}.muted{color:#7890a8}
</style>
</head>
<body>
<main><b>RISP IT ASSET v7 Bridge</b><div class="muted" id="state">Connecting…</div></main>
<script>
(function(){
  'use strict';
  var TOKEN=${JSON.stringify(token)};
  var ALLOWED_ORIGIN=${JSON.stringify(allowedOrigin)};
  var state=document.getElementById('state');

  function send(type,payload,requestId){
    if (window.parent===window) return;
    window.parent.postMessage({
      source:'RISP_V7_BRIDGE', token:TOKEN, type:type,
      requestId:requestId || '', payload:payload == null ? null : payload
    }, ALLOWED_ORIGIN);
  }

  function fail(err,requestId){
    var message=(err && err.message) ? err.message : String(err || 'Unknown bridge error');
    send('error',{message:message},requestId);
  }

  function loadBootstrap(requestId){
    google.script.run
      .withSuccessHandler(function(payload){
        state.textContent='Connected'; state.className='ok';
        send('bootstrap',payload,requestId);
      })
      .withFailureHandler(function(err){state.textContent='Connection failed'; fail(err,requestId);})
      .getV7BootstrapData();
  }

  window.addEventListener('message',function(event){
    if (event.origin !== ALLOWED_ORIGIN) return;
    var msg=event.data || {};
    if (msg.source !== 'RISP_V7_APP' || msg.token !== TOKEN) return;
    if (msg.type === 'bootstrap') {
      loadBootstrap(msg.requestId || '');
    } else if (msg.type === 'asset') {
      google.script.run
        .withSuccessHandler(function(asset){send('asset',asset,msg.requestId || '');})
        .withFailureHandler(function(err){fail(err,msg.requestId || '');})
        .getV7PublicAssetById(String(msg.assetId || ''));
    } else if (msg.type === 'ping') {
      send('pong',{version:${JSON.stringify(SYSTEM_VERSION)}},msg.requestId || '');
    }
  });

  send('ready',{version:${JSON.stringify(SYSTEM_VERSION)}});
  loadBootstrap('initial');
})();
</script>
</body>
</html>`;

  return HtmlService
    .createHtmlOutput(html)
    .setTitle('RISP v7 Data Bridge')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

// ================================================================
// DATABASE SETUP / SHEET
// ================================================================

function ensureDatabaseColumns_() {
  const schemaCache = CacheService.getScriptCache();
  try {
    if (schemaCache.get(SCHEMA_CACHE_KEY) === '1') return;
  } catch (err) {}

  const sheet = getSheet_();
  const lastRow = sheet.getLastRow();
  const lastColumn = sheet.getLastColumn();

  if (lastRow === 0) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    SpreadsheetApp.flush();
    invalidateDatabaseCache_();
  } else if (lastColumn < HEADERS.length) {
    sheet
      .getRange(1, lastColumn + 1, 1, HEADERS.length - lastColumn)
      .setValues([HEADERS.slice(lastColumn)]);
    SpreadsheetApp.flush();
    invalidateDatabaseCache_();
  }

  try { schemaCache.put(SCHEMA_CACHE_KEY, '1', 21600); } catch (err) {}
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) throw new Error('This Apps Script must be bound to the asset spreadsheet.');
  const sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) throw new Error('Sheet not found: ' + SHEET_NAME);
  return sheet;
}

function getDatabaseSnapshot_(forceRefresh) {
  const cache = CacheService.getScriptCache();

  if (!forceRefresh) {
    try {
      const cached = cache.get(DATA_CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed && Array.isArray(parsed.headers) && Array.isArray(parsed.rows)) {
          return parsed;
        }
      }
    } catch (err) {}
  }

  const data = getSheet_().getDataRange().getDisplayValues();
  const snapshot = {
    headers: data.length ? data[0] : HEADERS.slice(),
    rows: data.length > 1 ? data.slice(1) : []
  };

  try {
    const serialized = JSON.stringify(snapshot);
    // CacheService values are limited in size. Skip caching safely if the DB grows.
    if (serialized.length < 90000) {
      cache.put(DATA_CACHE_KEY, serialized, DATA_CACHE_TTL_SECONDS);
    }
  } catch (err) {}

  return snapshot;
}

function liteAssetFromRow_(row) {
  // Deliberately excludes passwords / product key / private account fields.
  return {
    ASSET_ID: String(row[COL.ASSET_ID] || ''),
    ASSET_TAG: String(row[COL.ASSET_TAG] || ''),
    DEVICE_TYPE: String(row[COL.DEVICE_TYPE] || ''),
    BRAND: String(row[COL.BRAND] || ''),
    MODEL: String(row[COL.MODEL] || ''),
    SERIAL: String(row[COL.SERIAL] || ''),
    LIBIB: String(row[COL.LIBIB] || ''),
    SERVICE_TAG: String(row[COL.SERVICE_TAG] || ''),
    DEPARTMENT: String(row[COL.DEPARTMENT] || ''),
    ASSIGNED_TO: String(row[COL.ASSIGNED_TO] || ''),
    STATUS: String(row[COL.STATUS] || ''),
    PURCHASE_DATE: String(row[COL.PURCHASE_DATE] || ''),
    COST: String(row[COL.COST] || ''),
    UPDATED: String(row[COL.UPDATED] || ''),
    PHOTO_FILE_ID: String(row[COL.PHOTO_FILE_ID] || ''),
    __full: false
  };
}

function getBootstrapCacheOnly_() {
  try {
    const cached = CacheService.getScriptCache().get(LITE_CACHE_KEY);
    if (!cached) return [];
    const parsed = JSON.parse(cached);
    return parsed && Array.isArray(parsed.assets) ? parsed.assets : [];
  } catch (err) {
    return [];
  }
}

function getBootstrapData() {
  ensureDatabaseColumns_();
  const cache = CacheService.getScriptCache();

  try {
    const cached = cache.get(LITE_CACHE_KEY);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (parsed && Array.isArray(parsed.assets)) return parsed;
    }
  } catch (err) {}

  const data = getSheet_().getDataRange().getDisplayValues();
  const rows = data.length > 1 ? data.slice(1) : [];
  const payload = {
    success: true,
    version: SYSTEM_VERSION,
    generatedAt: new Date().toISOString(),
    assets: rows.map(liteAssetFromRow_)
  };

  try {
    const serialized = JSON.stringify(payload);
    if (serialized.length < 90000) {
      cache.put(LITE_CACHE_KEY, serialized, LITE_CACHE_TTL_SECONDS);
    }
  } catch (err) {}

  return payload;
}

function getDashboardMeta() {
  requireAuthorizedPrivateUser_();
  return getV7DashboardMeta_();
}

function getV7DashboardMeta_() {
  const base = getBootstrapData();
  const assets = Array.isArray(base.assets) ? base.assets : [];
  let totalValue = 0;
  assets.forEach(function(asset) {
    const n = Number(String(asset.COST || '').replace(/[^0-9.\-]/g, ''));
    if (isFinite(n)) totalValue += n;
  });
  return {
    success: true,
    version: SYSTEM_VERSION,
    generatedAt: String(base.generatedAt || ''),
    count: assets.length,
    totalValue: totalValue
  };
}

function invalidateDatabaseCache_() {
  try {
    const cache = CacheService.getScriptCache();
    cache.remove(DATA_CACHE_KEY);
    cache.remove(LITE_CACHE_KEY);
  } catch (err) {}
}

function withWriteLock_(callback) {
  const lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try {
    return callback();
  } finally {
    lock.releaseLock();
  }
}

// ================================================================
// NORMALIZATION / SEARCH
// ================================================================

function normalize_(value) {
  return String(value == null ? '' : value)
    .trim()
    .toUpperCase()
    .replace(/\s+/g, ' ');
}

function digitsOnly_(value) {
  return String(value == null ? '' : value).replace(/\D/g, '');
}

function compact_(value) {
  return normalize_(value).replace(/[\s\-_:/.]+/g, '');
}

function getCandidates_(value) {
  const original = String(value == null ? '' : value).trim();
  if (!original) return [];

  const out = [];
  function add(v) {
    v = String(v || '').trim();
    if (v && out.indexOf(v) === -1) out.push(v);
  }

  add(original);
  try { add(decodeURIComponent(original)); } catch (err) {}

  // Parse URL-like QR values without depending on browser-only URL APIs.
  if (/^https?:\/\//i.test(original)) {
    try {
      const noHash = original.split('#')[0];
      const qPos = noHash.indexOf('?');
      const basePart = qPos >= 0 ? noHash.substring(0, qPos) : noHash;
      const queryPart = qPos >= 0 ? noHash.substring(qPos + 1) : '';
      const pathPart = basePart.replace(/^https?:\/\/[^/]+/i, '');
      add(basePart);
      add(pathPart);
      const parts = pathPart.split('/').filter(Boolean);
      if (parts.length) add(parts[parts.length - 1]);
      if (queryPart) {
        queryPart.split('&').forEach(function(pair) {
          const eq = pair.indexOf('=');
          const raw = eq >= 0 ? pair.substring(eq + 1) : pair;
          if (raw) {
            try { add(decodeURIComponent(raw.replace(/\+/g, ' '))); }
            catch (err) { add(raw); }
          }
        });
      }
    } catch (err) {}
  }

  const numbers = original.match(/\d{6,}/g);
  if (numbers) numbers.forEach(add);
  add(original.replace(/^https?:\/\//i, ''));
  add(original.replace(/[?#].*$/, ''));
  (original.match(/\d{4,}/g) || []).forEach(function(token) { add(token); });
  return out;
}

function getSearchFields_(row) {
  return [
    row[COL.ASSET_ID], row[COL.ASSET_TAG], row[COL.LIBIB],
    row[COL.SERIAL], row[COL.SERVICE_TAG]
  ];
}

function canonicalQrPayloadFromId_(assetId) {
  const id = String(assetId || '').trim();
  return id ? QR_CANONICAL_PREFIX + '|' + QR_CANONICAL_VERSION + '|' + id : '';
}

function canonicalQrPayload_(asset) {
  if (!asset) return '';
  const id = Array.isArray(asset) ? asset[COL.ASSET_ID] : asset.ASSET_ID;
  return canonicalQrPayloadFromId_(id);
}

function parseCanonicalQr_(rawValue) {
  const raw = String(rawValue || '').trim();
  const parts = raw.split('|');
  if (parts.length !== 3) return null;
  if (normalize_(parts[0]) !== normalize_(QR_CANONICAL_PREFIX)) return null;
  if (String(parts[1]) !== String(QR_CANONICAL_VERSION)) return null;
  const assetId = String(parts[2] || '').trim();
  return assetId ? { assetId: assetId, payload: raw } : null;
}

function meaningfulIdentity_(value) {
  const s = String(value == null ? '' : value).trim();
  if (!s) return false;
  if (/^(N\/?A|NA|NONE|NULL|UNKNOWN|-+)$/i.test(s)) return false;
  if (/^[^A-Za-z0-9]+$/.test(s)) return false;
  return true;
}

function strictScanCandidates_(value) {
  const original = String(value == null ? '' : value).trim();
  if (!original) return [];
  const out = [];
  function add(v) {
    v = String(v == null ? '' : v).trim();
    if (v && out.indexOf(v) === -1) out.push(v);
  }
  add(original);
  try { add(decodeURIComponent(original)); } catch (err) {}
  if (/^https?:\/\//i.test(original)) {
    try {
      const noHash = original.split('#')[0];
      const qPos = noHash.indexOf('?');
      const basePart = qPos >= 0 ? noHash.substring(0, qPos) : noHash;
      const queryPart = qPos >= 0 ? noHash.substring(qPos + 1) : '';
      const pathPart = basePart.replace(/^https?:\/\/[^/]+/i, '');
      const parts = pathPart.split('/').filter(Boolean);
      if (parts.length) add(parts[parts.length - 1]);
      if (queryPart) {
        queryPart.split('&').forEach(function(pair) {
          const eq = pair.indexOf('=');
          const key = (eq >= 0 ? pair.substring(0, eq) : '').toLowerCase();
          const raw = eq >= 0 ? pair.substring(eq + 1) : pair;
          if (['id','asset','scan','libib','code','qr'].indexOf(key) !== -1 && raw) {
            try { add(decodeURIComponent(raw.replace(/\+/g, ' '))); }
            catch (err) { add(raw); }
          }
        });
      }
    } catch (err) {}
  }
  return out;
}

function strictExactMatches_(rows, candidates) {
  const candidateSet = {};
  candidates.forEach(function(v) {
    const n = normalize_(v);
    if (n) candidateSet[n] = true;
  });
  const matches = [];
  rows.forEach(function(row) {
    const id = String(row[COL.ASSET_ID] || '').trim();
    if (!id) return;
    const matchedFields = [];
    const fields = [
      ['ASSET_ID', row[COL.ASSET_ID]],
      ['ASSET_TAG', row[COL.ASSET_TAG]],
      ['LIBIB', row[COL.LIBIB]],
      ['SERIAL', row[COL.SERIAL]],
      ['SERVICE_TAG', row[COL.SERVICE_TAG]]
    ];
    fields.forEach(function(pair) {
      if (meaningfulIdentity_(pair[1]) && candidateSet[normalize_(pair[1])]) matchedFields.push(pair[0]);
    });
    if (matchedFields.length) matches.push({ row: row, assetId: id, fields: matchedFields });
  });
  return matches;
}

function strictLegacyLibibDigitMatches_(rows, candidates) {
  const digitsSet = {};
  candidates.forEach(function(v) {
    const d = digitsOnly_(v);
    if (d.length >= 4) digitsSet[d] = true;
  });
  if (!Object.keys(digitsSet).length) return [];
  const matches = [];
  rows.forEach(function(row) {
    const libib = String(row[COL.LIBIB] || '').trim();
    const d = digitsOnly_(libib);
    if (d.length >= 4 && digitsSet[d]) {
      matches.push({ row: row, assetId: String(row[COL.ASSET_ID] || '').trim(), fields: ['LIBIB_DIGITS'] });
    }
  });
  return matches;
}

function summarizeStrictMatches_(matches, rawValue, mode) {
  const byAsset = {};
  matches.forEach(function(match) {
    const id = normalize_(match.assetId);
    if (!id) return;
    if (!byAsset[id]) byAsset[id] = match;
    else byAsset[id].fields = Array.from(new Set(byAsset[id].fields.concat(match.fields || [])));
  });
  const unique = Object.keys(byAsset).map(function(k) { return byAsset[k]; });
  if (unique.length === 1) {
    const row = unique[0].row;
    return {
      found: true,
      ambiguous: false,
      assetId: String(row[COL.ASSET_ID] || ''),
      assetTag: String(row[COL.ASSET_TAG] || ''),
      deviceType: String(row[COL.DEVICE_TYPE] || ''),
      brand: String(row[COL.BRAND] || ''),
      model: String(row[COL.MODEL] || ''),
      status: String(row[COL.STATUS] || ''),
      assignedTo: String(row[COL.ASSIGNED_TO] || ''),
      photoFileId: String(row[COL.PHOTO_FILE_ID] || ''),
      matchedBy: unique[0].fields.join(','),
      mode: mode || 'legacy',
      scanned: String(rawValue || '')
    };
  }
  if (unique.length > 1) {
    return {
      found: false,
      ambiguous: true,
      scanned: String(rawValue || ''),
      mode: mode || 'legacy',
      matches: unique.map(function(match) {
        return {
          assetId: String(match.row[COL.ASSET_ID] || ''),
          assetTag: String(match.row[COL.ASSET_TAG] || ''),
          matchedBy: match.fields.join(',')
        };
      }),
      message: 'QR identity is ambiguous. No asset was opened.'
    };
  }
  return { found: false, ambiguous: false, scanned: String(rawValue || ''), mode: mode || 'legacy', message: 'Asset not found.' };
}

function resolveScannedAssetFromRows_(rows, rawValue) {
  const canonical = parseCanonicalQr_(rawValue);
  if (canonical) {
    const matches = [];
    rows.forEach(function(row) {
      if (normalize_(row[COL.ASSET_ID]) === normalize_(canonical.assetId)) {
        matches.push({ row: row, assetId: String(row[COL.ASSET_ID] || ''), fields: ['CANONICAL_ASSET_ID'] });
      }
    });
    return summarizeStrictMatches_(matches, rawValue, 'canonical');
  }

  const candidates = strictScanCandidates_(rawValue);
  if (!candidates.length) return { found: false, ambiguous: false, scanned: String(rawValue || ''), message: 'Asset not found.' };

  const exact = strictExactMatches_(rows, candidates);
  if (exact.length) return summarizeStrictMatches_(exact, rawValue, 'legacy-exact');

  const libibDigits = strictLegacyLibibDigitMatches_(rows, candidates);
  if (libibDigits.length) return summarizeStrictMatches_(libibDigits, rawValue, 'legacy-libib-digits');

  return { found: false, ambiguous: false, scanned: String(rawValue || ''), message: 'Asset not found.' };
}

function findAsset_(rows, searchValue) {
  const result = resolveScannedAssetFromRows_(rows, searchValue);
  if (!result || !result.found || result.ambiguous) return null;
  const target = normalize_(result.assetId);
  for (let i = 0; i < rows.length; i++) {
    if (normalize_(rows[i][COL.ASSET_ID]) === target) return rows[i];
  }
  return null;
}

function resolveScannedAsset(rawValue) {
  const snapshot = getDatabaseSnapshot_(true);
  return resolveScannedAssetFromRows_(snapshot.rows, rawValue);
}

function buildQrIntegrityAudit_(rows) {
  const identityFields = [
    ['ASSET_ID', COL.ASSET_ID], ['ASSET_TAG', COL.ASSET_TAG], ['LIBIB', COL.LIBIB],
    ['SERIAL', COL.SERIAL], ['SERVICE_TAG', COL.SERVICE_TAG]
  ];
  const exactMap = {};
  const issuesById = {};
  const auditRows = [];

  function issue(assetId, severity, message) {
    const id = String(assetId || '').trim();
    if (!issuesById[id]) issuesById[id] = [];
    issuesById[id].push(severity + ': ' + message);
  }

  rows.forEach(function(row) {
    const assetId = String(row[COL.ASSET_ID] || '').trim();
    identityFields.forEach(function(def) {
      const value = String(row[def[1]] || '').trim();
      if (!meaningfulIdentity_(value)) return;
      const key = normalize_(value);
      if (!exactMap[key]) exactMap[key] = [];
      exactMap[key].push({ assetId: assetId, assetTag: String(row[COL.ASSET_TAG] || ''), field: def[0], value: value });
    });
  });

  Object.keys(exactMap).forEach(function(key) {
    const entries = exactMap[key];
    const ids = Array.from(new Set(entries.map(function(e) { return e.assetId; }).filter(Boolean)));
    if (ids.length > 1) {
      entries.forEach(function(e) {
        issue(e.assetId, 'CRITICAL', 'Identifier "' + e.value + '" is shared by ' + ids.length + ' assets (' + e.field + ').');
      });
    }
  });

  let canonicalPass = 0;
  rows.forEach(function(row) {
    const assetId = String(row[COL.ASSET_ID] || '').trim();
    const assetTag = String(row[COL.ASSET_TAG] || '').trim();
    if (!assetId) {
      issue(assetId, 'CRITICAL', 'Missing Asset ID; canonical QR cannot be generated.');
      return;
    }
    const payload = canonicalQrPayloadFromId_(assetId);
    const resolved = resolveScannedAssetFromRows_(rows, payload);
    if (resolved.found && !resolved.ambiguous && normalize_(resolved.assetId) === normalize_(assetId)) canonicalPass++;
    else issue(assetId, 'CRITICAL', 'Canonical QR did not resolve back to this asset.');

    if (!assetTag) issue(assetId, 'WARNING', 'Asset Tag is blank. QR still works because canonical QR uses immutable Asset ID.');
  });

  rows.forEach(function(row) {
    const assetId = String(row[COL.ASSET_ID] || '').trim();
    const issues = issuesById[assetId] || [];
    const critical = issues.filter(function(x){ return x.indexOf('CRITICAL:') === 0; }).length;
    const warnings = issues.filter(function(x){ return x.indexOf('WARNING:') === 0; }).length;
    auditRows.push([
      critical ? 'CRITICAL' : (warnings ? 'WARNING' : 'PASS'),
      assetId,
      String(row[COL.ASSET_TAG] || ''),
      canonicalQrPayloadFromId_(assetId),
      String(row[COL.LIBIB] || ''),
      String(row[COL.SERIAL] || ''),
      String(row[COL.SERVICE_TAG] || ''),
      issues.join(' | ')
    ]);
  });

  return {
    total: rows.length,
    canonicalPass: canonicalPass,
    criticalAssets: auditRows.filter(function(r){ return r[0] === 'CRITICAL'; }).length,
    warningAssets: auditRows.filter(function(r){ return r[0] === 'WARNING'; }).length,
    passAssets: auditRows.filter(function(r){ return r[0] === 'PASS'; }).length,
    rows: auditRows
  };
}

function getQrIntegritySummary() {
  requireAuthorizedPrivateUser_();
  const snapshot = getDatabaseSnapshot_(true);
  const audit = buildQrIntegrityAudit_(snapshot.rows);
  return {
    success: true,
    version: SYSTEM_VERSION,
    total: audit.total,
    canonicalPass: audit.canonicalPass,
    criticalAssets: audit.criticalAssets,
    warningAssets: audit.warningAssets,
    passAssets: audit.passAssets
  };
}


function getQrIntegrityDetails() {
  requireAuthorizedPrivateUser_();
  return getQrIntegrityDetailsV61024_();
}

function getQrIntegrityDetailsV61024_() {
  const snapshot = getDatabaseSnapshot_(true);
  const audit = buildQrIntegrityAudit_(snapshot.rows);
  const sourceById = Object.create(null);

  snapshot.rows.forEach(function(row) {
    const id = String(row[COL.ASSET_ID] || '').trim();
    if (id) sourceById[id] = row;
  });

  const items = audit.rows
    .filter(function(r){ return r[0] !== 'PASS'; })
    .map(function(r) {
      const assetId = String(r[1] || '').trim();
      const row = sourceById[assetId] || [];
      return {
        status: String(r[0] || 'WARNING'),
        assetId: assetId,
        assetTag: String(row[COL.ASSET_TAG] || r[2] || ''),
        deviceType: String(row[COL.DEVICE_TYPE] || ''),
        brand: String(row[COL.BRAND] || ''),
        model: String(row[COL.MODEL] || ''),
        serial: String(row[COL.SERIAL] || ''),
        assignedTo: String(row[COL.ASSIGNED_TO] || ''),
        issues: String(r[7] || ''),
        photoUrl: getPhotoUrl_(String(row[COL.PHOTO_FILE_ID] || ''), row[COL.UPDATED], 260)
      };
    })
    .sort(function(a,b) {
      const rankA = a.status === 'CRITICAL' ? 0 : 1;
      const rankB = b.status === 'CRITICAL' ? 0 : 1;
      if (rankA !== rankB) return rankA - rankB;
      return String(a.assetTag || a.assetId).localeCompare(String(b.assetTag || b.assetId));
    });

  return {
    success: true,
    version: SYSTEM_VERSION,
    total: audit.total,
    canonicalPass: audit.canonicalPass,
    criticalAssets: audit.criticalAssets,
    warningAssets: audit.warningAssets,
    passAssets: audit.passAssets,
    items: items
  };
}

function runFullQrIntegrityAuditV6116() {
  requireAuthorizedPrivateUser_();
  const snapshot = getDatabaseSnapshot_(true);
  const audit = buildQrIntegrityAudit_(snapshot.rows);
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(QR_AUDIT_SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(QR_AUDIT_SHEET_NAME);
  sheet.clear();
  const headers = [['STATUS','ASSET_ID','ASSET_TAG','CANONICAL_QR','LIBIB','SERIAL','SERVICE_TAG','ISSUES']];
  sheet.getRange(1,1,1,headers[0].length).setValues(headers);
  if (audit.rows.length) sheet.getRange(2,1,audit.rows.length,headers[0].length).setValues(audit.rows);
  sheet.setFrozenRows(1);
  sheet.getRange(1,1,1,headers[0].length).setFontWeight('bold').setBackground('#0b223d').setFontColor('#ffffff');
  sheet.autoResizeColumns(1, headers[0].length);
  sheet.setColumnWidth(4, 230);
  sheet.setColumnWidth(8, 520);
  SpreadsheetApp.flush();
  return {
    success: true,
    total: audit.total,
    canonicalPass: audit.canonicalPass,
    criticalAssets: audit.criticalAssets,
    warningAssets: audit.warningAssets,
    passAssets: audit.passAssets,
    sheetName: QR_AUDIT_SHEET_NAME
  };
}

// ================================================================
// ROW / ASSET HELPERS
// ================================================================

function rowToObject_(row) {
  const obj = {};
  HEADERS.forEach(function(key, index) {
    obj[key] = row[index] == null ? '' : row[index];
  });
  return obj;
}

function getAssetByIdInternal_(assetId) {
  ensureDatabaseColumns_();
  const target = String(assetId || '').trim();
  if (!target) return null;

  const sheet = getSheet_();
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return null;

  // Asset ID is column A and immutable, so fetch only the matching row.
  const match = sheet
    .getRange(2, COL.ASSET_ID + 1, lastRow - 1, 1)
    .createTextFinder(target)
    .matchEntireCell(true)
    .matchCase(false)
    .findNext();

  if (!match) return null;
  const row = sheet.getRange(match.getRow(), 1, 1, HEADERS.length).getDisplayValues()[0];
  const asset = rowToObject_(row);
  asset.__full = true;
  return asset;
}

function getAssetById(assetId) {
  requireAuthorizedPrivateUser_();
  return getAssetByIdInternal_(assetId);
}

function getAllAssets() {
  requireAuthorizedPrivateUser_();
  const snapshot = getDatabaseSnapshot_(false);
  return snapshot.rows.map(rowToObject_);
}

function findRowIndexByAssetId_(displayRows, assetId) {
  const target = normalize_(assetId);
  for (let i = 0; i < displayRows.length; i++) {
    if (normalize_(displayRows[i][COL.ASSET_ID]) === target) return i + 2;
  }
  return -1;
}

function assertUniqueAssetTag_(rows, assetTag, ignoreAssetId) {
  const tag = normalize_(assetTag);
  if (!tag) throw new Error('Asset Tag is required.');

  const ignore = normalize_(ignoreAssetId || '');
  for (let i = 0; i < rows.length; i++) {
    const rowId = normalize_(rows[i][COL.ASSET_ID]);
    if (ignore && rowId === ignore) continue;
    if (normalize_(rows[i][COL.ASSET_TAG]) === tag) {
      throw new Error('Asset Tag already exists: ' + assetTag);
    }
  }
}

function generateAssetId_() {
  const data = getSheet_().getDataRange().getDisplayValues();
  let max = 0;
  for (let i = 1; i < data.length; i++) {
    const id = String(data[i][COL.ASSET_ID] || '');
    const match = id.match(/(\d+)/);
    if (match) max = Math.max(max, Number(match[1]));
  }
  return 'RISP-' + String(max + 1).padStart(4, '0');
}


// ================================================================
// DATE / MONEY NORMALIZATION
// ================================================================

function normalizePurchaseDate_(value) {
  if (value instanceof Date && !isNaN(value.getTime())) return value;

  const raw = String(value == null ? '' : value).trim();
  if (!raw) return '';

  let match = raw.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (match) {
    return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  }

  match = raw.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/);
  if (match) {
    return new Date(Number(match[3]), Number(match[2]) - 1, Number(match[1]));
  }

  return raw;
}

function normalizeBaht_(value) {
  if (typeof value === 'number' && isFinite(value)) return value;

  const raw = String(value == null ? '' : value)
    .replace(/฿/g, '')
    .replace(/\bTHB\b/gi, '')
    .replace(/\bB\b/gi, '')
    .replace(/,/g, '')
    .trim();

  if (!raw) return '';

  const number = Number(raw);
  return isFinite(number) ? number : String(value || '').trim();
}

function applyAssetCellFormats_(sheet, rowIndex) {
  try {
    sheet.getRange(rowIndex, COL.PURCHASE_DATE + 1).setNumberFormat('dd/mm/yyyy');
  } catch (err) {}

  try {
    sheet.getRange(rowIndex, COL.COST + 1).setNumberFormat('฿#,##0.00');
  } catch (err) {}
}

// ================================================================
// QUICK STATUS UPDATE
// ================================================================

function updateAssetStatus(assetId, status) {
  requireAuthorizedPrivateUser_();
  return withWriteLock_(function() {
    const allowed = [
      'Active',
      'Inactive',
      'In Use',
      'Available',
      'Repair',
      'Maintenance',
      'Storage',
      'Retired',
      'Lost',
      'Other'
    ];

    const nextStatus = String(status || '').trim();
    if (allowed.indexOf(nextStatus) === -1) {
      throw new Error('Unsupported status: ' + nextStatus);
    }

    const sheet = getSheet_();
    const data = sheet.getDataRange().getDisplayValues();
    const rows = data.length > 1 ? data.slice(1) : [];
    const rowIndex = findRowIndexByAssetId_(rows, assetId);

    if (rowIndex < 2) throw new Error('Asset not found: ' + assetId);

    const now = new Date();
    sheet.getRange(rowIndex, COL.STATUS + 1).setValue(nextStatus);
    sheet.getRange(rowIndex, COL.UPDATED + 1).setValue(now);
    SpreadsheetApp.flush();
    invalidateDatabaseCache_();

    const refreshed = sheet
      .getRange(rowIndex, 1, 1, HEADERS.length)
      .getDisplayValues()[0];

    return {
      success: true,
      assetId: String(assetId),
      status: nextStatus,
      asset: rowToObject_(refreshed)
    };
  });
}

// ================================================================
// ADD DEVICE
// ================================================================

function addAsset(asset) {
  requireAuthorizedPrivateUser_();
  return withWriteLock_(function() {
    ensureDatabaseColumns_();
    if (!asset) throw new Error('No asset data received.');

    const sheet = getSheet_();
    const data = sheet.getDataRange().getDisplayValues();
    const rows = data.length > 1 ? data.slice(1) : [];
    const assetTag = String(asset.ASSET_TAG || '').trim();
    assertUniqueAssetTag_(rows, assetTag, '');

    const assetId = generateAssetId_();
    const now = new Date();

    const row = new Array(HEADERS.length).fill('');
    row[COL.ASSET_ID] = assetId;
    row[COL.ASSET_TAG] = assetTag;
    row[COL.DEVICE_TYPE] = String(asset.DEVICE_TYPE || 'Other').trim() || 'Other';
    row[COL.BRAND] = String(asset.BRAND || '').trim();
    row[COL.MODEL] = String(asset.MODEL || '').trim();
    row[COL.SERIAL] = String(asset.SERIAL || '').trim();
    row[COL.LIBIB] = String(asset.LIBIB || '').trim();
    row[COL.SERVICE_TAG] = String(asset.SERVICE_TAG || '').trim();
    row[COL.PRODUCT_KEY] = String(asset.PRODUCT_KEY || '').trim();
    row[COL.DEPARTMENT] = String(asset.DEPARTMENT || '').trim();
    row[COL.ASSIGNED_TO] = String(asset.ASSIGNED_TO || '').trim();
    row[COL.COLOR] = String(asset.COLOR || '').trim();
    row[COL.LOCAL_USERNAME] = String(asset.LOCAL_USERNAME || '').trim();
    row[COL.LOCAL_PASSWORD] = String(asset.LOCAL_PASSWORD || '').trim();
    row[COL.ADMIN_USERNAME] = String(asset.ADMIN_USERNAME || '').trim();
    row[COL.ADMIN_PASSWORD] = String(asset.ADMIN_PASSWORD || '').trim();
    row[COL.MICROSOFT_USERNAME] = String(asset.MICROSOFT_USERNAME || '').trim();
    row[COL.MICROSOFT_PASSWORD] = String(asset.MICROSOFT_PASSWORD || '').trim();
    row[COL.EMAIL] = String(asset.EMAIL || '').trim();
    row[COL.EMAIL_PASSWORD] = String(asset.EMAIL_PASSWORD || '').trim();
    row[COL.ICLOUD] = String(asset.ICLOUD || '').trim();
    row[COL.ICLOUD_PASSWORD] = String(asset.ICLOUD_PASSWORD || '').trim();
    row[COL.PASSWORD_HINT] = String(asset.PASSWORD_HINT || '').trim();
    row[COL.STATUS] = String(asset.STATUS || 'Active').trim() || 'Active';
    row[COL.PURCHASE_DATE] = normalizePurchaseDate_(asset.PURCHASE_DATE);
    row[COL.WARRANTY] = String(asset.WARRANTY || '').trim();
    row[COL.COST] = normalizeBaht_(asset.COST);
    row[COL.NOTES] = String(asset.NOTES || '').trim();
    row[COL.SOURCE_SHEET] = 'RISP IT ASSET';
    row[COL.SOURCE_ROW] = '';
    row[COL.ORIGINAL_DATE] = now;
    row[COL.UPDATED] = now;
    row[COL.PHOTO_FILE_ID] = '';

    const rowIndex = sheet.getLastRow() + 1;
    sheet.getRange(rowIndex, 1, 1, HEADERS.length).setValues([row]);
    applyAssetCellFormats_(sheet, rowIndex);
    SpreadsheetApp.flush();
    invalidateDatabaseCache_();

    const displayRow = sheet.getRange(rowIndex, 1, 1, HEADERS.length).getDisplayValues()[0];
    return {
      success: true,
      assetId: assetId,
      assetTag: assetTag,
      asset: rowToObject_(displayRow)
    };
  });
}

// ================================================================
// UPDATE DEVICE
// ================================================================

function updateAsset(asset) {
  requireAuthorizedPrivateUser_();
  return withWriteLock_(function() {
    ensureDatabaseColumns_();
    if (!asset || !asset.ASSET_ID) throw new Error('Asset ID is required.');

    const sheet = getSheet_();
    const data = sheet.getDataRange().getDisplayValues();
    const rows = data.length > 1 ? data.slice(1) : [];
    const rowIndex = findRowIndexByAssetId_(rows, asset.ASSET_ID);
    if (rowIndex < 2) throw new Error('Asset not found: ' + asset.ASSET_ID);

    const canonicalAssetId = String(rows[rowIndex - 2][COL.ASSET_ID] || '').trim();
    const assetTag = String(asset.ASSET_TAG || '').trim();
    assertUniqueAssetTag_(rows, assetTag, canonicalAssetId);

    const oldRow = sheet.getRange(rowIndex, 1, 1, HEADERS.length).getValues()[0];
    const row = oldRow.slice();

    // Asset ID is server-owned and immutable.
    row[COL.ASSET_ID] = oldRow[COL.ASSET_ID];
    row[COL.ASSET_TAG] = assetTag;
    row[COL.DEVICE_TYPE] = String(asset.DEVICE_TYPE || 'Other').trim() || 'Other';
    row[COL.BRAND] = String(asset.BRAND || '').trim();
    row[COL.MODEL] = String(asset.MODEL || '').trim();
    row[COL.SERIAL] = String(asset.SERIAL || '').trim();
    row[COL.LIBIB] = String(asset.LIBIB || '').trim();
    row[COL.SERVICE_TAG] = String(asset.SERVICE_TAG || '').trim();
    row[COL.PRODUCT_KEY] = String(asset.PRODUCT_KEY || '').trim();
    row[COL.DEPARTMENT] = String(asset.DEPARTMENT || '').trim();
    row[COL.ASSIGNED_TO] = String(asset.ASSIGNED_TO || '').trim();
    row[COL.COLOR] = String(asset.COLOR || '').trim();
    row[COL.LOCAL_USERNAME] = String(asset.LOCAL_USERNAME || '').trim();
    row[COL.LOCAL_PASSWORD] = String(asset.LOCAL_PASSWORD || '').trim();
    row[COL.ADMIN_USERNAME] = String(asset.ADMIN_USERNAME || '').trim();
    row[COL.ADMIN_PASSWORD] = String(asset.ADMIN_PASSWORD || '').trim();
    row[COL.MICROSOFT_USERNAME] = String(asset.MICROSOFT_USERNAME || '').trim();
    row[COL.MICROSOFT_PASSWORD] = String(asset.MICROSOFT_PASSWORD || '').trim();
    row[COL.EMAIL] = String(asset.EMAIL || '').trim();
    row[COL.EMAIL_PASSWORD] = String(asset.EMAIL_PASSWORD || '').trim();
    row[COL.ICLOUD] = String(asset.ICLOUD || '').trim();
    row[COL.ICLOUD_PASSWORD] = String(asset.ICLOUD_PASSWORD || '').trim();
    row[COL.PASSWORD_HINT] = String(asset.PASSWORD_HINT || '').trim();
    row[COL.STATUS] = String(asset.STATUS || 'Active').trim() || 'Active';
    row[COL.PURCHASE_DATE] = normalizePurchaseDate_(asset.PURCHASE_DATE);
    row[COL.WARRANTY] = String(asset.WARRANTY || '').trim();
    row[COL.COST] = normalizeBaht_(asset.COST);
    row[COL.NOTES] = String(asset.NOTES || '').trim();
    row[COL.UPDATED] = new Date();

    sheet.getRange(rowIndex, 1, 1, HEADERS.length).setValues([row]);
    applyAssetCellFormats_(sheet, rowIndex);
    SpreadsheetApp.flush();
    invalidateDatabaseCache_();

    const refreshed = sheet.getRange(rowIndex, 1, 1, HEADERS.length).getDisplayValues()[0];
    return { success: true, assetId: canonicalAssetId, asset: rowToObject_(refreshed) };
  });
}

// ================================================================
// DELETE DEVICE
// ================================================================

function deleteAsset(assetId) {
  requireAuthorizedPrivateUser_();
  return withWriteLock_(function() {
    const sheet = getSheet_();
    const data = sheet.getDataRange().getDisplayValues();
    const rows = data.length > 1 ? data.slice(1) : [];
    const rowIndex = findRowIndexByAssetId_(rows, assetId);
    if (rowIndex < 2) throw new Error('Asset not found: ' + assetId);

    const row = rows[rowIndex - 2];
    const photoId = String(row[COL.PHOTO_FILE_ID] || '').trim();
    const deletedTag = String(row[COL.ASSET_TAG] || '').trim();
    const canonicalId = String(row[COL.ASSET_ID] || assetId).trim();
    const photoIsShared = photoFileReferencedElsewhereInRows_(rows, photoId, canonicalId);

    sheet.deleteRow(rowIndex);
    SpreadsheetApp.flush();
    invalidateDatabaseCache_();

    if (photoId && !photoIsShared) {
      try { DriveApp.getFileById(photoId).setTrashed(true); } catch (err) {}
    }

    return { success: true, assetId: String(assetId), assetTag: deletedTag };
  });
}

// ================================================================
// PHOTO
// ================================================================

function getPhotoFolder_() {
  const props = PropertiesService.getScriptProperties();
  const cachedId = String(props.getProperty(PHOTO_FOLDER_ID_PROPERTY) || '').trim();

  if (cachedId) {
    try {
      return DriveApp.getFolderById(cachedId);
    } catch (err) {
      props.deleteProperty(PHOTO_FOLDER_ID_PROPERTY);
    }
  }

  const folders = DriveApp.getFoldersByName(PHOTO_FOLDER_NAME);
  const folder = folders.hasNext()
    ? folders.next()
    : DriveApp.createFolder(PHOTO_FOLDER_NAME);

  try { props.setProperty(PHOTO_FOLDER_ID_PROPERTY, folder.getId()); } catch (err) {}
  return folder;
}

function getPhotoUrl_(fileId, cacheKey, size) {
  fileId = String(fileId || '').trim();
  if (!fileId) return '';
  const width = Math.max(120, Math.min(2000, Number(size) || 1200));

  // googleusercontent is more reliable than drive.google.com/thumbnail
  // inside iOS standalone / Add-to-Home-Screen web apps.
  // Existing Drive files are NOT moved or changed — only the display URL changes.
  let url = 'https://lh3.googleusercontent.com/d/' + encodeURIComponent(fileId) + '=w' + width;
  if (cacheKey) url += '?v=' + encodeURIComponent(String(cacheKey));
  return url;
}

function saveAssetPhoto(assetId, dataUrl, fileName, mimeType) {
  requireAuthorizedPrivateUser_();
  return withWriteLock_(function() {
    if (!assetId || !dataUrl) throw new Error('Missing asset or image.');

    const sheet = getSheet_();
    const data = sheet.getDataRange().getDisplayValues();
    const rows = data.length > 1 ? data.slice(1) : [];
    const rowIndex = findRowIndexByAssetId_(rows, assetId);
    if (rowIndex < 2) throw new Error('Asset not found: ' + assetId);

    const match = String(dataUrl).match(/^data:([^;]+);base64,(.+)$/);
    if (!match) throw new Error('Invalid image data.');

    const actualMime = mimeType || match[1] || 'image/jpeg';
    const bytes = Utilities.base64Decode(match[2]);
    const safeName = String(fileName || 'photo.jpg').replace(/[^A-Za-z0-9._-]+/g, '_');
    const folder = getPhotoFolder_();
    const stamp = new Date().getTime();
    // Give Drive the final filename at creation time. This removes one extra
    // Drive write (createFile + setName) from every photo save.
    const finalName = 'RISP-' + String(assetId).replace(/[^A-Za-z0-9_-]/g, '_') + '-' + stamp + '-' + safeName;
    const blob = Utilities.newBlob(bytes, actualMime, finalName);
    const newFile = folder.createFile(blob);

    try {
      newFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    } catch (err) {}

    const oldPhotoId = String(rows[rowIndex - 2][COL.PHOTO_FILE_ID] || '').trim();
    const oldPhotoIsShared = photoFileReferencedElsewhereInRows_(rows, oldPhotoId, assetId);
    const now = new Date();

    // UPDATED and PHOTO_FILE_ID are adjacent columns, so write both in one Sheet call.
    sheet.getRange(rowIndex, COL.UPDATED + 1, 1, 2).setValues([[now, newFile.getId()]]);
    SpreadsheetApp.flush();
    invalidateDatabaseCache_();

    // Only trash the old file AFTER the new file ID is safely stored in Sheet.
    if (oldPhotoId && oldPhotoId !== newFile.getId() && !oldPhotoIsShared) {
      try { DriveApp.getFileById(oldPhotoId).setTrashed(true); } catch (err) {}
    }

    // Avoid another full row read. Reuse the already loaded display row and patch the two changed fields.
    const updatedAsset = rowToObject_(rows[rowIndex - 2]);
    updatedAsset.PHOTO_FILE_ID = newFile.getId();
    updatedAsset.UPDATED = Utilities.formatDate(now, Session.getScriptTimeZone(), 'dd/MM/yyyy HH:mm');

    return {
      success: true,
      fileId: newFile.getId(),
      url: getPhotoUrl_(newFile.getId(), stamp, 1200),
      asset: updatedAsset
    };
  });
}

function getAssetPhoto(assetId) {
  requireAuthorizedPrivateUser_();
  const asset = getAssetById(assetId);
  if (!asset) return { found: false };
  return {
    found: !!asset.PHOTO_FILE_ID,
    fileId: asset.PHOTO_FILE_ID || '',
    url: getPhotoUrl_(asset.PHOTO_FILE_ID, asset.UPDATED, 1400)
  };
}


// ================================================================
// ONE-TIME DATA MIGRATION — v6.10.7
// Run `runOneTimeAssetMigrationV6107` ONCE from the Apps Script editor.
// It is intentionally conservative:
//   • TAB-* non-Apple devices -> Category "Tablet / iPad", Brand "Mi"
//   • Apple/iPad rows are NOT changed
//   • NBRISP01..NBRISP16 -> model/date/cost requested by IT
//   • If NBRISP01 already has the desired photo, the same Drive photo is
//     safely linked to NBRISP01..16. Shared-photo safety above prevents
//     later edits/deletes from trashing it while another asset still uses it.
// ================================================================
function runOneTimeAssetMigrationV6107() {
  requireAuthorizedPrivateUser_();

  return withWriteLock_(function() {
    ensureDatabaseColumns_();
    const sheet = getSheet_();
    const data = sheet.getDataRange().getValues();
    if (!data || data.length < 2) {
      return { success: true, tabletUpdated: 0, nbrispUpdated: 0, photoApplied: false, message: 'ASSET_DATABASE is empty.' };
    }

    const rows = data.slice(1);
    const now = new Date();
    const purchaseDate = new Date(2024, 8, 30); // 30/09/2024
    let tabletUpdated = 0;
    let ipadPreserved = 0;
    let nbrispUpdated = 0;
    let photoApplied = false;
    let sourcePhotoId = '';

    // If NBRISP01 already has the requested photo, reuse that Drive file ID.
    for (let i = 0; i < rows.length; i++) {
      const compactTag = String(rows[i][COL.ASSET_TAG] || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
      if (compactTag === 'NBRISP01') {
        sourcePhotoId = String(rows[i][COL.PHOTO_FILE_ID] || '').trim();
        break;
      }
    }

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const assetId = String(row[COL.ASSET_ID] || '').trim();
      const tag = String(row[COL.ASSET_TAG] || '').trim();
      const compactTag = tag.toUpperCase().replace(/[^A-Z0-9]/g, '');
      const type = String(row[COL.DEVICE_TYPE] || '').trim();
      const brand = String(row[COL.BRAND] || '').trim();
      const model = String(row[COL.MODEL] || '').trim();

      const isTabletRecord =
        /^TAB-/i.test(assetId) ||
        normalize_(type).indexOf('TABLET') !== -1 ||
        compactTag.indexOf('TABLET') !== -1;

      const isAppleIpad =
        normalize_(brand) === 'APPLE' ||
        normalize_(model).indexOf('IPAD') !== -1 ||
        compactTag.indexOf('IPAD') !== -1;

      if (isTabletRecord) {
        if (isAppleIpad) {
          ipadPreserved++;
        } else {
          const nextType = 'Tablet';
          const nextBrand = 'Mi';
          if (String(row[COL.DEVICE_TYPE] || '') !== nextType || String(row[COL.BRAND] || '') !== nextBrand) {
            row[COL.DEVICE_TYPE] = nextType;
            row[COL.BRAND] = nextBrand;
            row[COL.UPDATED] = now;
            tabletUpdated++;
          }
        }
      }

      if (/^NBRISP(0[1-9]|1[0-6])$/.test(compactTag)) {
        row[COL.MODEL] = 'ASUS VIVOBOOK 14 M1404FA-NK552WS';
        row[COL.PURCHASE_DATE] = purchaseDate;
        row[COL.COST] = 15990;
        row[COL.UPDATED] = now;
        if (sourcePhotoId) {
          row[COL.PHOTO_FILE_ID] = sourcePhotoId;
          photoApplied = true;
        }
        nbrispUpdated++;
      }
    }

    // Write back only columns affected by this migration.
    const rowCount = rows.length;
    const deviceTypes = rows.map(function(r){ return [r[COL.DEVICE_TYPE]]; });
    const brands = rows.map(function(r){ return [r[COL.BRAND]]; });
    const models = rows.map(function(r){ return [r[COL.MODEL]]; });
    const purchaseDates = rows.map(function(r){ return [r[COL.PURCHASE_DATE]]; });
    const costs = rows.map(function(r){ return [r[COL.COST]]; });
    const updated = rows.map(function(r){ return [r[COL.UPDATED]]; });
    const photoIds = rows.map(function(r){ return [r[COL.PHOTO_FILE_ID]]; });

    sheet.getRange(2, COL.DEVICE_TYPE + 1, rowCount, 1).setValues(deviceTypes);
    sheet.getRange(2, COL.BRAND + 1, rowCount, 1).setValues(brands);
    sheet.getRange(2, COL.MODEL + 1, rowCount, 1).setValues(models);
    sheet.getRange(2, COL.PURCHASE_DATE + 1, rowCount, 1).setValues(purchaseDates).setNumberFormat('dd/MM/yyyy');
    sheet.getRange(2, COL.COST + 1, rowCount, 1).setValues(costs);
    sheet.getRange(2, COL.UPDATED + 1, rowCount, 1).setValues(updated);
    if (sourcePhotoId) {
      sheet.getRange(2, COL.PHOTO_FILE_ID + 1, rowCount, 1).setValues(photoIds);
    }

    SpreadsheetApp.flush();
    invalidateDatabaseCache_();

    return {
      success: true,
      tabletUpdated: tabletUpdated,
      ipadPreserved: ipadPreserved,
      nbrispUpdated: nbrispUpdated,
      photoApplied: photoApplied,
      sourcePhotoId: sourcePhotoId,
      purchaseDate: '30/09/2024',
      costPerNBRISP: 15990,
      model: 'ASUS VIVOBOOK 14 M1404FA-NK552WS',
      message: sourcePhotoId
        ? 'Migration complete, including NBRISP01 photo shared safely to NBRISP01–16.'
        : 'Migration complete. Photo not applied because NBRISP01 has no photo yet. Upload the desired photo to NBRISP01, then run applyNBRISP01PhotoToNBRISP01_16().'
    };
  });
}

function applyNBRISP01PhotoToNBRISP01_16() {
  requireAuthorizedPrivateUser_();

  return withWriteLock_(function() {
    const sheet = getSheet_();
    const data = sheet.getDataRange().getDisplayValues();
    const rows = data.length > 1 ? data.slice(1) : [];
    let sourcePhotoId = '';

    for (let i = 0; i < rows.length; i++) {
      const compactTag = String(rows[i][COL.ASSET_TAG] || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
      if (compactTag === 'NBRISP01') {
        sourcePhotoId = String(rows[i][COL.PHOTO_FILE_ID] || '').trim();
        break;
      }
    }

    if (!sourcePhotoId) {
      throw new Error('NBRISP01 has no photo. Upload the desired notebook photo to NBRISP01 first, then run this function again.');
    }

    const now = new Date();
    let updatedCount = 0;
    for (let i = 0; i < rows.length; i++) {
      const compactTag = String(rows[i][COL.ASSET_TAG] || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
      if (!/^NBRISP(0[1-9]|1[0-6])$/.test(compactTag)) continue;
      const sheetRow = i + 2;
      sheet.getRange(sheetRow, COL.UPDATED + 1, 1, 2).setValues([[now, sourcePhotoId]]);
      updatedCount++;
    }

    SpreadsheetApp.flush();
    invalidateDatabaseCache_();
    return {
      success: true,
      updated: updatedCount,
      sourcePhotoId: sourcePhotoId,
      message: 'NBRISP01 photo linked safely to NBRISP01–16.'
    };
  });
}


// ================================================================
// HTML HELPERS
// ================================================================

function escapeHtml_(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function buildScannerUrl_(appUrl) {
  return SCANNER_URL + '?v=766&return=' + encodeURIComponent(appUrl);
}

const DEPARTMENT_OPTIONS = ['IT','Staff','Teacher','Student','IA & Specialist'];

const BRAND_OPTIONS_BY_TYPE = {
  'Laptop': ['ASUS','Acer','Dell','HP','Lenovo','Apple','MSI'],
  'Desktop PC': ['Dell','HP','Lenovo','ASUS','Acer'],
  'MacBook': ['Apple'],
  'Mac mini': ['Apple'],
  'iMac': ['Apple'],
  'Tablet': ['Mi','Xiaomi','Samsung','Lenovo','Huawei','Redmi'],
  'iPad': ['Apple'],
  'Phone': ['Apple','Samsung','Xiaomi','Mi','Google','OPPO','vivo','Huawei','OnePlus'],
  'Monitor': ['Dell','ASUS','Acer','Samsung','LG','Lenovo','BenQ','HP'],
  'Printer': ['Canon','Epson','Brother','HP'],
  'Projector': ['Epson','BenQ','ViewSonic','Optoma','Acer'],
  'Network Equipment': ['TP-Link','Ubiquiti','MikroTik','Cisco','Hikvision'],
  'Server': ['Dell','HP','Lenovo','Supermicro'],
  'Other': ['ASUS','Acer','Dell','HP','Lenovo','Apple','Samsung','Xiaomi','Mi','Canon','Epson','Brother','LG','TP-Link']
};

const BRAND_DOMAIN_MAP = {
  'ASUS':'asus.com','ACER':'acer.com','DELL':'dell.com','HP':'hp.com','LENOVO':'lenovo.com',
  'APPLE':'apple.com','MSI':'msi.com','SAMSUNG':'samsung.com','XIAOMI':'mi.com','XIAOMI (MI)':'mi.com','XIAOMI (REDMI)':'mi.com','REDMI':'mi.com','MI':'mi.com',
  'HUAWEI':'huawei.com','GOOGLE':'google.com','OPPO':'oppo.com','VIVO':'vivo.com','ONEPLUS':'oneplus.com',
  'LG':'lg.com','BENQ':'benq.com','CANON':'global.canon','CANNON':'global.canon','EPSON':'epson.com',
  'BROTHER':'brother.com','VIEWSONIC':'viewsonic.com','OPTOMA':'optoma.com','TP-LINK':'tp-link.com',
  'UBIQUITI':'ui.com','MIKROTIK':'mikrotik.com','CISCO':'cisco.com','HIKVISION':'hikvision.com','SUPERMICRO':'supermicro.com'
};

const BRAND_LOGO_URL_MAP = {
  'ASUS':'https://cdn.simpleicons.org/asus/000000',
  'ACER':'https://cdn.simpleicons.org/acer/83B81A',
  'DELL':'https://cdn.simpleicons.org/dell/0672CE',
  'HP':'https://cdn.simpleicons.org/hp/0096D6',
  'LENOVO':'https://cdn.simpleicons.org/lenovo/E2231A',
  'APPLE':'https://cdn.simpleicons.org/apple/000000',
  'MSI':'https://cdn.simpleicons.org/msi/FF0000',
  'SAMSUNG':'https://cdn.simpleicons.org/samsung/1428A0',
  'XIAOMI':'https://cdn.simpleicons.org/xiaomi/FF6900',
  'XIAOMI (MI)':'https://cdn.simpleicons.org/xiaomi/FF6900',
  'XIAOMI (REDMI)':'https://cdn.simpleicons.org/xiaomi/FF6900',
  'REDMI':'https://cdn.simpleicons.org/xiaomi/FF6900',
  'MI':'https://cdn.simpleicons.org/xiaomi/FF6900',
  'HUAWEI':'https://cdn.simpleicons.org/huawei/FF0000',
  'GOOGLE':'https://cdn.simpleicons.org/google/4285F4',
  'OPPO':'https://cdn.simpleicons.org/oppo/2BB673',
  'VIVO':'https://cdn.simpleicons.org/vivo/415FFF',
  'ONEPLUS':'https://cdn.simpleicons.org/oneplus/F5010C',
  'LG':'https://cdn.simpleicons.org/lg/A50034',
  'CANON':'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNDAgNzIiPjxyZWN0IHdpZHRoPSIyNDAiIGhlaWdodD0iNzIiIHJ4PSIxMCIgZmlsbD0id2hpdGUiLz48dGV4dCB4PSIxMjAiIHk9IjQ5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwgQmxhY2ssQXJpYWwsc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NiIgZm9udC1zdHlsZT0iaXRhbGljIiBmb250LXdlaWdodD0iOTAwIiBmaWxsPSIjQ0MwMDAwIj5DYW5vbjwvdGV4dD48L3N2Zz4=',
  'CANNON':'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNDAgNzIiPjxyZWN0IHdpZHRoPSIyNDAiIGhlaWdodD0iNzIiIHJ4PSIxMCIgZmlsbD0id2hpdGUiLz48dGV4dCB4PSIxMjAiIHk9IjQ5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwgQmxhY2ssQXJpYWwsc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0NiIgZm9udC1zdHlsZT0iaXRhbGljIiBmb250LXdlaWdodD0iOTAwIiBmaWxsPSIjQ0MwMDAwIj5DYW5vbjwvdGV4dD48L3N2Zz4=',
  'EPSON':'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNzAgNzIiPjxyZWN0IHdpZHRoPSIyNzAiIGhlaWdodD0iNzIiIHJ4PSIxMCIgZmlsbD0id2hpdGUiLz48dGV4dCB4PSIxMzUiIHk9IjQ5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwgQmxhY2ssQXJpYWwsc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0MCIgZm9udC13ZWlnaHQ9IjkwMCIgbGV0dGVyLXNwYWNpbmc9IjMiIGZpbGw9IiMwMDMzOTkiPkVQU09OPC90ZXh0Pjwvc3ZnPg==',
  'BROTHER':'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgNzIiPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iNzIiIHJ4PSIxMCIgZmlsbD0id2hpdGUiLz48dGV4dCB4PSIxNTAiIHk9IjQ5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDIiIGZvbnQtd2VpZ2h0PSI4MDAiIGxldHRlci1zcGFjaW5nPSItMiIgZmlsbD0iIzAwNzJCQyI+YnJvdGhlcjwvdGV4dD48L3N2Zz4=',
  'VIEWSONIC':'https://cdn.simpleicons.org/viewsonic/000000',
  'TPLINK':'https://cdn.simpleicons.org/tplink/4ACBD6',
  'TP-LINK':'https://cdn.simpleicons.org/tplink/4ACBD6',
  'UBIQUITI':'https://cdn.simpleicons.org/ubiquiti/0559C9',
  'CISCO':'https://cdn.simpleicons.org/cisco/1BA0D7'
};

function customSelectControl_(id, selected, values, emptyLabel) {
  const current = String(selected || '').trim();
  const known = values.some(function(v){ return normalize_(v) === normalize_(current); });
  const isOther = !!current && !known;
  let options = emptyLabel ? '<option value="">' + escapeHtml_(emptyLabel) + '</option>' : '';
  options += values.map(function(v) {
    return '<option value="' + escapeHtml_(v) + '"' + (normalize_(v) === normalize_(current) ? ' selected' : '') + '>' + escapeHtml_(v) + '</option>';
  }).join('');
  options += '<option value="__OTHER__"' + (isOther ? ' selected' : '') + '>Other (specify)</option>';
  return '<div class="custom-select-stack"><select class="control" id="' + escapeHtml_(id) + '" data-custom-other="1">' + options + '</select>' +
    '<input class="control custom-other-control" id="' + escapeHtml_(id) + '_OTHER" value="' + escapeHtml_(isOther ? current : '') + '" placeholder="Please specify"' + (isOther ? '' : ' hidden') + '></div>';
}

function deviceControl_(id, selected) {
  const values = DEVICE_TYPES.filter(function(v){ return normalize_(v) !== 'OTHER'; });
  return customSelectControl_(id, selected || 'Laptop', values, '');
}

function departmentControl_(id, selected) {
  return customSelectControl_(id, selected, DEPARTMENT_OPTIONS, 'Not set');
}

function brandLogoUrl_(brand, size) {
  const key = normalize_(brand);
  if (BRAND_LOGO_URL_MAP[key]) return BRAND_LOGO_URL_MAP[key];
  const domain = BRAND_DOMAIN_MAP[key] || '';
  return domain
    ? 'https://www.google.com/s2/favicons?domain=' + encodeURIComponent(domain) + '&sz=' + String(size || 128)
    : '';
}

function brandOptionsForType_(deviceType) {
  const type = String(deviceType || 'Other').trim();
  return (BRAND_OPTIONS_BY_TYPE[type] || BRAND_OPTIONS_BY_TYPE.Other || []).slice();
}

function brandControl_(id, selected, deviceType) {
  const current = String(selected || '').trim();
  const values = brandOptionsForType_(deviceType);
  const known = values.some(function(v){ return normalize_(v) === normalize_(current); });
  const isOther = !!current && !known;
  let options = '<option value="">Not set</option>' + values.map(function(v) {
    return '<option value="' + escapeHtml_(v) + '"' + (normalize_(v) === normalize_(current) ? ' selected' : '') + '>' + escapeHtml_(v) + '</option>';
  }).join('');
  options += '<option value="__OTHER__"' + (isOther ? ' selected' : '') + '>Other (specify)</option>';
  const chips = values.map(function(v) {
    const logoUrl = brandLogoUrl_(v, 128);
    const logo = logoUrl
      ? '<img src="' + escapeHtml_(logoUrl) + '" alt="" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'inline-flex\'"><span style="display:none">' + escapeHtml_(String(v).slice(0,2).toUpperCase()) + '</span>'
      : '<span>' + escapeHtml_(String(v).slice(0,2).toUpperCase()) + '</span>';
    return '<button type="button" class="brand-option-chip' +
      (normalize_(v) === normalize_(current) ? ' selected' : '') +
      '" data-brand-choice="' + escapeHtml_(v) + '">' + logo + '<b>' + escapeHtml_(v) + '</b></button>';
  }).join('');
  return '<div class="brand-select-stack">' +
    '<div class="brand-select-row"><span class="brand-select-logo" id="' + escapeHtml_(id) + '_LOGO"><span>IT</span></span>' +
    '<select class="control" id="' + escapeHtml_(id) + '" data-brand-select="1" data-custom-other="1">' + options + '</select></div>' +
    '<div class="brand-option-strip" id="' + escapeHtml_(id) + '_CHIPS">' + chips + '</div>' +
    '<input class="control custom-other-control" id="' + escapeHtml_(id) + '_OTHER" value="' + escapeHtml_(isOther ? current : '') + '" placeholder="Please specify brand"' + (isOther ? '' : ' hidden') + '></div>';
}

function deviceOptions_(selected) {
  const current = String(selected || 'Other');
  return DEVICE_TYPES.map(function(type) {
    return '<option value="' + escapeHtml_(type) + '"' + (type === current ? ' selected' : '') + '>' + escapeHtml_(type) + '</option>';
  }).join('');
}

function statusOptions_(selected) {
  const values = ['Active','Inactive','In Use','Available','Repair','Maintenance','Storage','Retired','Lost','Other'];
  const current = String(selected || 'Active');
  if (current && values.indexOf(current) === -1) values.push(current);
  return values.map(function(v) {
    return '<option value="' + escapeHtml_(v) + '"' + (v === current ? ' selected' : '') + '>' + escapeHtml_(v) + '</option>';
  }).join('');
}

function photoMarkup_(asset, className) {
  const url = getPhotoUrl_(asset.PHOTO_FILE_ID, asset.UPDATED, 420);
  const fallbackText = escapeHtml_(String(asset.DEVICE_TYPE || 'IT').substring(0, 10));
  if (!url) {
    return '<div class="' + className + ' photo-fallback"><span>' + fallbackText + '</span></div>';
  }
  return '<div class="' + className + '">' +
    '<img src="' + escapeHtml_(url) + '" alt="' + escapeHtml_(asset.ASSET_TAG || 'Asset') + '" loading="lazy" decoding="async" ' +
    'onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">' +
    '<span class="photo-error-fallback" style="display:none">' + fallbackText + '</span>' +
    '</div>';
}

function commonBrandHtml_(appUrl, compact) {
  return '<a class="brand-link js-dashboard-link' + (compact ? ' compact' : '') + '" href="' + escapeHtml_(appUrl) + '" target="_top" aria-label="Back to Dashboard">' +
    '<span class="brand-logo rock-logo"><img src="' + RISP_LOGO_DATA_URI + '" alt="RIS Phuket"></span>' +
    '<span class="brand-copy"><strong>RISP IT ASSET</strong><small>CONTROL • SUPPORT • MAINTAIN</small><em>ENGINEERED BY NEWVANA</em></span>' +
    '<span class="brand-riff" aria-hidden="true"><b>⚡</b><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span>' +
    '</a>';
}

function commonBaseCss_() {
  return String.raw`
    :root{--ink:#0e1116;--paper:#f3f2ed;--card:#fff;--muted:#6f747b;--line:#d8d8d2;--navy:#173a63;--navy-deep:#0b223d;--navy-mid:#214d7e;--navy-soft:#e9eff6;--acid:#d9ff3f;--danger:#d92f2f;--shadow:0 14px 40px rgba(11,34,61,.10);--header-h:92px}
    *{box-sizing:border-box}
    html{scroll-behavior:auto}
    html,body{margin:0;padding:0;background:var(--paper);color:var(--ink);font-family:Inter,ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif}
    body{font-size:15px;letter-spacing:-.012em}
    button,input,select,textarea{font:inherit}
    button,a{-webkit-tap-highlight-color:transparent}
    a{color:inherit}
    .hidden{display:none!important}
    .app-view{animation:viewIn .16s ease both}
    @keyframes viewIn{from{opacity:.55;transform:translateY(3px)}to{opacity:1;transform:none}}
    .site-header{position:sticky;top:0;z-index:500;background:linear-gradient(90deg,#0b0d11 0%,#0e1218 58%,#0b223d 140%);color:#fff;border-bottom:1px solid #193b61;box-shadow:0 6px 22px rgba(7,18,31,.10)}
    .site-header-inner{max-width:1740px;margin:auto;padding:12px 28px;display:flex;align-items:center;justify-content:space-between;gap:18px}
    .brand-link{text-decoration:none;display:inline-flex;align-items:center;gap:14px;min-width:0;cursor:pointer}
    .brand-logo{width:72px;height:72px;display:grid;place-items:center;border-radius:16px;background:radial-gradient(circle at 50% 42%,rgba(23,58,99,.42),rgba(7,17,29,.18) 62%,rgba(7,17,29,0));padding:2px;border:1px solid rgba(84,153,223,.28);box-shadow:0 0 0 1px rgba(255,255,255,.035),0 8px 28px rgba(0,0,0,.28),0 0 24px rgba(22,116,220,.13);position:relative;overflow:visible;isolation:isolate}
    .brand-logo:before,.brand-logo:after{content:"";position:absolute;width:12px;height:62px;background:linear-gradient(180deg,#f4fdff 0%,#7ee3ff 23%,#2d8aff 58%,#0c56cf 82%,transparent 100%);clip-path:polygon(54% 0,100% 0,66% 35%,96% 35%,30% 100%,48% 52%,10% 52%);opacity:0;filter:drop-shadow(0 0 4px #a8efff) drop-shadow(0 0 11px #318dff) drop-shadow(0 0 20px rgba(30,102,255,.68));pointer-events:none;z-index:-1}
    .brand-logo:before{left:-13px;top:5px;transform:rotate(-18deg);animation:sideLightning 2.55s infinite}
    .brand-logo:after{right:-13px;bottom:4px;transform:rotate(162deg) scale(.86);animation:sideLightning 3.05s -1.38s infinite}
    .brand-logo img{display:block;width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 0 7px rgba(55,160,255,.30));opacity:1;position:relative;z-index:2}
    .brand-copy{display:flex;flex-direction:column;min-width:0}
    .brand-copy strong{font-size:18px;letter-spacing:.095em;line-height:1;font-weight:780;white-space:nowrap;text-shadow:1px 0 0 rgba(217,255,63,.20)}
    .brand-copy small{margin-top:8px;font-size:7.5px;letter-spacing:.245em;color:#b7c6d7;white-space:nowrap;font-weight:650}
    .brand-copy em{margin-top:4px;font-style:normal;font-size:6.4px;letter-spacing:.18em;color:#6faee9;white-space:nowrap;font-weight:780}
    .brand-riff{display:flex;gap:2px;align-items:center;height:28px;margin-left:4px;padding-left:2px}
    .brand-riff b{font-size:12px;color:var(--acid);margin-right:3px;transform:rotate(-9deg);text-shadow:0 0 10px rgba(217,255,63,.42)}
    .brand-riff i{display:block;width:3px;border-radius:4px;background:linear-gradient(180deg,var(--acid),#9fbf18);transform:skew(-9deg);transform-origin:center;animation:riffPulse 1.05s ease-in-out infinite;box-shadow:0 0 8px rgba(217,255,63,.16)}
    .brand-riff i:nth-of-type(1){height:8px;animation-delay:-.15s}.brand-riff i:nth-of-type(2){height:19px;animation-delay:-.75s}.brand-riff i:nth-of-type(3){height:12px;animation-delay:-.35s}.brand-riff i:nth-of-type(4){height:24px;animation-delay:-.9s}.brand-riff i:nth-of-type(5){height:14px;animation-delay:-.45s}.brand-riff i:nth-of-type(6){height:20px;animation-delay:-.65s}.brand-riff i:nth-of-type(7){height:9px;animation-delay:-.2s}
    @keyframes riffPulse{0%,100%{transform:skew(-9deg) scaleY(.55);opacity:.55}45%{transform:skew(-9deg) scaleY(1.08);opacity:1}70%{transform:skew(-9deg) scaleY(.78);opacity:.78}}
    @keyframes sideLightning{0%,7%,13%,42%,100%{opacity:0}8%{opacity:.92}9%{opacity:.08}10%{opacity:1}11%{opacity:.22}12%{opacity:.76}28%{opacity:0}29%{opacity:.66}30%{opacity:0}}
    @keyframes ampSweep{0%,65%{transform:translateX(-90%)}85%,100%{transform:translateX(90%)}}
    .header-actions{display:flex;gap:9px;align-items:center;flex-wrap:wrap;justify-content:flex-end}
    .header-system-strip{gap:8px;flex-wrap:nowrap}
    .system-chip{height:42px;padding:0 13px;border:1px solid #2a4663;border-radius:11px;background:#0d1927;display:inline-flex;align-items:center;gap:8px;color:#c8d9ea;font-size:8px;font-weight:850;letter-spacing:.10em;white-space:nowrap}
    .system-chip i{width:7px;height:7px;border-radius:50%;background:#58e68b;box-shadow:0 0 10px rgba(88,230,139,.7)}
    .system-chip b{font-size:12px;color:#fff;letter-spacing:.02em}
    .creator-chip{color:#84bff4;border-color:#28537b;background:#0b1b2b}.creator-chip strong{font-size:9px;color:#fff;letter-spacing:.09em}
    .btn{appearance:none;border:1px solid #222;background:#fff;color:#111;text-decoration:none;border-radius:11px;padding:12px 16px;font-size:11px;font-weight:740;letter-spacing:.055em;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:44px;transition:transform .14s ease,opacity .14s ease,box-shadow .14s ease,border-color .14s ease,background .14s ease}
    .btn:hover{transform:translateY(-1px);box-shadow:0 8px 18px rgba(0,0,0,.10)}
    .btn:disabled{opacity:.55;cursor:not-allowed;transform:none;box-shadow:none}
    .btn.dark{background:#111;color:#fff;border-color:#111}.btn.navy,.btn.acid{background:var(--navy);color:#fff;border-color:#28517e;box-shadow:inset 0 0 0 1px rgba(255,255,255,.03)}.btn.navy:hover,.btn.acid:hover{background:var(--navy-mid);border-color:#376795}.btn.danger{background:#fff;color:var(--danger);border-color:#d9a3a3}.btn.ghost-dark{background:transparent;color:#fff;border-color:#4b5664}.btn.ghost-dark:hover{border-color:#6e86a0}
    .modal{display:none;position:fixed;inset:0;background:rgba(8,8,10,.82);backdrop-filter:blur(7px);z-index:5000;padding:22px;overflow:auto}
    .modal.open{display:flex;align-items:center;justify-content:center}
    .modal-box{width:min(920px,100%);max-height:calc(100dvh - 44px);overflow:auto;background:var(--paper);border:1px solid #46586d;border-radius:22px;box-shadow:0 30px 90px rgba(0,0,0,.45)}
    .modal-head{position:sticky;top:0;z-index:2;background:rgba(243,242,237,.96);backdrop-filter:blur(10px);display:flex;justify-content:space-between;align-items:flex-start;gap:20px;padding:22px 24px;border-bottom:1px solid var(--line)}
    .modal-head:before{content:"";position:absolute;left:0;right:0;top:0;height:3px;background:var(--navy)}
    .modal-head h2{margin:0;font-size:26px;letter-spacing:-.035em;font-weight:800}.modal-head p{margin:6px 0 0;color:var(--muted);font-size:12px}
    .x-btn{width:42px;height:42px;border:1px solid #b8bcc1;background:#fff;border-radius:50%;cursor:pointer;font-size:21px;line-height:1}
    .form-body{padding:22px 24px 6px}.form-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}.field{display:flex;flex-direction:column;gap:6px}.field.full{grid-column:1/-1}.field label{font-size:9px;font-weight:800;letter-spacing:.11em;text-transform:uppercase;color:#666b72}.control{width:100%;padding:12px 13px;border:1px solid #c8c9c8;background:#fff;border-radius:10px;outline:none;color:#111}.control:focus{border-color:var(--navy);box-shadow:0 0 0 3px rgba(23,58,99,.10)}.control[readonly]{background:#e9e8e2;color:#777;cursor:not-allowed}textarea.control{min-height:110px;resize:vertical}
    .modal-actions{position:sticky;bottom:0;display:flex;gap:10px;justify-content:flex-end;padding:18px 24px;background:rgba(243,242,237,.97);backdrop-filter:blur(10px);border-top:1px solid var(--line)}
    .toast{position:fixed;left:50%;bottom:28px;z-index:9000;transform:translate(-50%,25px);opacity:0;pointer-events:none;background:#111;color:#fff;border:1px solid #334861;border-radius:12px;padding:12px 17px;font-size:12px;font-weight:750;transition:.2s}.toast.show{opacity:1;transform:translate(-50%,0)}
    .photo-error-fallback{position:absolute;inset:0;align-items:center;justify-content:center;background:var(--navy-deep);color:#fff;font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase}
    @media(max-width:760px){:root{--header-h:76px}.site-header-inner{padding:10px 13px}.brand-logo{width:58px;height:58px;border-radius:14px;padding:1px}.brand-copy strong{font-size:14px;letter-spacing:.09em}.brand-copy small{font-size:6.5px;letter-spacing:.17em;margin-top:6px}.brand-riff{display:none}.header-actions{gap:6px}.header-actions .btn{padding:10px 11px;font-size:9px;min-height:40px}.modal{padding:0;align-items:flex-end!important}.modal-box{width:100%;max-height:96dvh;border-radius:22px 22px 0 0;border-bottom:0}.form-grid{grid-template-columns:1fr}.field.full{grid-column:auto}.modal-head,.form-body,.modal-actions{padding-left:15px;padding-right:15px}}
    /* v6.11.3: exactly two printable lines; shrink type to fit, never truncate or wrap. */
    .credential-preview-sticker,.credential-sticker{align-items:stretch!important;justify-content:center!important;gap:1mm!important;padding:2mm 1.7mm!important;overflow:hidden!important}
    .credential-preview-sticker .credential-line,.credential-sticker .credential-line{display:block!important;width:100%!important;max-width:100%!important;min-width:0!important;height:7mm!important;max-height:7mm!important;min-height:0!important;overflow:visible!important;white-space:nowrap!important;text-overflow:clip!important;overflow-wrap:normal!important;word-break:normal!important;line-height:1!important;letter-spacing:-.025em!important;font-size:10pt}
    .credential-preview-sticker .credential-line b,.credential-sticker .credential-line b{font-weight:900!important;white-space:nowrap!important}
    .credential-value{display:inline!important;white-space:nowrap!important;overflow:visible!important;overflow-wrap:normal!important;word-break:normal!important}
    @media print{
      body.printing-credentials #credentialPrintPortal .credential-sticker{display:flex!important;flex-direction:column!important;justify-content:center!important;gap:1mm!important;padding:1.7mm 1.4mm!important;overflow:hidden!important}
      body.printing-credentials #credentialPrintPortal .credential-sticker .credential-line{height:7mm!important;max-height:7mm!important;overflow:visible!important;white-space:nowrap!important;overflow-wrap:normal!important;word-break:normal!important;text-overflow:clip!important;line-height:1!important;font-size:10pt}
    }

    /* v6.11.1 — compact service history cards + action controls */
    .maintenance-title-mark{display:inline-grid;place-items:center;width:30px;height:30px;margin-right:8px;border-radius:10px;background:linear-gradient(145deg,#e7f4ff,#cfe5f7);color:#173a63;vertical-align:middle}
    .maintenance-title-mark svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
    .maintenance-summary-web{display:flex;align-items:center;justify-content:space-between;gap:12px;margin:12px 0;padding:12px 14px;border:1px solid #244760;border-radius:14px;background:linear-gradient(135deg,#0a1c2d,#0d2940);color:#dceeff;font-size:12px}
    .maintenance-summary-web strong{font-size:16px;color:#83c9ff}
    .maintenance-list-web{display:grid;gap:10px}
    .maintenance-web-empty{display:grid;justify-items:center;gap:6px;padding:24px 14px;border:1px dashed #52708a;border-radius:14px;color:#91a9bf;text-align:center}
    .maintenance-web-empty b{color:#eaf4ff;font-size:13px}.maintenance-web-empty small{font-size:11px}
    .maintenance-web-record{padding:14px;border:1px solid #244760;border-radius:15px;background:linear-gradient(145deg,#0a1b2a,#0c2234);color:#eaf4ff}
    .mnt-web-top{display:flex;justify-content:space-between;align-items:flex-start;gap:10px}.mnt-web-top small{display:block;color:#83a0b9;font-size:9px;font-weight:900;letter-spacing:.09em}.mnt-web-top strong{display:block;margin-top:5px;font-size:14px}
    .mnt-web-status{padding:5px 9px;border-radius:999px;border:1px solid #397ba6;background:#12334b;color:#9bd6ff;font-size:9px;font-weight:900;white-space:nowrap}
    .maintenance-web-record p{margin:9px 0 0;color:#a9bed0;font-size:11px;line-height:1.5;overflow-wrap:anywhere}.maintenance-web-record p b{color:#edf7ff;margin-right:5px}
    .mnt-web-cost{display:flex;justify-content:space-between;gap:10px;align-items:center;margin-top:12px;padding-top:10px;border-top:1px solid #203e56;color:#8ea9c0;font-size:10px}.mnt-web-cost b{font-size:14px;color:#b7e0ff}
    .mnt-web-actions{display:flex;justify-content:flex-end;gap:7px;margin-top:12px}.mnt-web-actions button{border:1px solid #315a78;border-radius:9px;background:#102b42;color:#cce8ff;padding:7px 11px;font-size:10px;font-weight:850;cursor:pointer}.mnt-web-actions button:last-child{color:#ffb5b5;border-color:#78444a;background:#321b23}
    .mnt-web-files{display:flex;flex-wrap:wrap;gap:7px;margin-top:10px}.mnt-web-files a{max-width:100%;overflow-wrap:anywhere;border:1px solid #315a78;border-radius:8px;padding:6px 8px;color:#9bd6ff;font-size:10px;text-decoration:none}
    .mnt-web-notes{display:block;margin-top:9px;color:#8ea9c0;font-size:10px;line-height:1.5}
    [data-theme="light"] .maintenance-summary-web{background:#f2f8fc;color:#173a63;border-color:#c7d9e5}
    [data-theme="light"] .maintenance-summary-web strong{color:#1768a4}
    [data-theme="light"] .maintenance-web-record{background:#fff;color:#173047;border-color:#c7d9e5;box-shadow:0 7px 18px rgba(23,58,99,.06)}
    [data-theme="light"] .mnt-web-top small,[data-theme="light"] .maintenance-web-record p,[data-theme="light"] .mnt-web-cost,[data-theme="light"] .mnt-web-notes{color:#5f7488}
    [data-theme="light"] .mnt-web-top strong,[data-theme="light"] .maintenance-web-record p b{color:#173047}
    [data-theme="light"] .mnt-web-cost{border-top-color:#e1eaf0}[data-theme="light"] .mnt-web-cost b{color:#174d79}
    [data-theme="light"] .mnt-web-actions button{background:#eff6fb;color:#174d79;border-color:#bfd3e1}
    [data-theme="light"] .mnt-web-actions button:last-child{background:#fff4f4;color:#b42332;border-color:#f0c9ce}
  `;

}

// ================================================================
// DASHBOARD / SINGLE-PAGE APP
// ================================================================

function renderApp_(headers, rows, initialLookup, initialAddScan, initialLookupMode) {
  const appUrl = ScriptApp.getService().getUrl();
  const scannerUrl = buildScannerUrl_(appUrl);
  const addScannerUrl = scannerUrl + '&mode=add';
  const assets = (rows || []).map(function(row) {
    if (Array.isArray(row)) return rowToObject_(row);
    // v6.10.3: doGet may preload lite asset objects directly.
    return row && typeof row === 'object' ? Object.assign({}, row) : {};
  });
  const initialLookupValue = String(initialLookup || '').trim();
  const initialLookupKind = String(initialLookupMode || '').trim();
  const initialAddScanValue = String(initialAddScan || '').trim();

  const assetsJson = JSON.stringify(assets)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');

  const addFieldsHtml = renderFormFields_({}, 'a_');
  const editFieldsHtml = renderFormFields_({}, 'e_');

  function blankInfoRow(label, key) {
    return '<div class="info-row"><div class="info-label">' +
      escapeHtml_(label) +
      '</div><div class="info-value" id="d_' +
      escapeHtml_(key) +
      '">-</div></div>';
  }

  const deviceRows =
    blankInfoRow('Device Type','DEVICE_TYPE') +
    blankInfoRow('Brand','BRAND') +
    blankInfoRow('Model','MODEL') +
    blankInfoRow('Serial Number','SERIAL') +
    blankInfoRow('Service Tag','SERVICE_TAG') +
    blankInfoRow('Color','COLOR');

  const assignmentRows =
    blankInfoRow('Department','DEPARTMENT') +
    blankInfoRow('Assigned To','ASSIGNED_TO') +
    blankInfoRow('Status','STATUS') +
    blankInfoRow('Purchase Date','PURCHASE_DATE') +
    blankInfoRow('Warranty','WARRANTY') +
    blankInfoRow('Cost','COST');

  const identificationRows =
    blankInfoRow('Asset ID','ASSET_ID') +
    blankInfoRow('Asset Tag','ASSET_TAG') +
    blankInfoRow('Libib / QR Code','LIBIB') +
    blankInfoRow('Serial','SERIAL_2') +
    blankInfoRow('Service Tag','SERVICE_TAG_2') +
    blankInfoRow('Product Key','PRODUCT_KEY');

  const accountRows =
    blankInfoRow('Local Username','LOCAL_USERNAME') +
    blankInfoRow('Local Password','LOCAL_PASSWORD') +
    blankInfoRow('Admin Username','ADMIN_USERNAME') +
    blankInfoRow('Admin Password','ADMIN_PASSWORD') +
    blankInfoRow('Microsoft Username','MICROSOFT_USERNAME') +
    blankInfoRow('Microsoft Password','MICROSOFT_PASSWORD') +
    blankInfoRow('Email / Account Email','EMAIL') +
    blankInfoRow('Email Password','EMAIL_PASSWORD') +
    blankInfoRow('iCloud / Apple ID','ICLOUD') +
    blankInfoRow('iCloud Password','ICLOUD_PASSWORD') +
    blankInfoRow('Password Hint','PASSWORD_HINT');

  const html = String.raw`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#0b223d">
<script>
try {
  var savedTheme = localStorage.getItem('RISP_ADMIN_THEME_V1') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
} catch (e) {}
</script>
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="RISP IT ASSET">
<base target="_top">
<title>${escapeHtml_(APP_TITLE)}</title>
<link rel="icon" type="image/png" sizes="192x192" href="${escapeHtml_(FAVICON_URL)}?v=652">
<link rel="shortcut icon" type="image/png" href="${escapeHtml_(FAVICON_URL)}?v=652">
<link rel="apple-touch-icon" sizes="180x180" href="${escapeHtml_(TOUCH_ICON_URL)}?v=652">
<link rel="apple-touch-icon-precomposed" sizes="180x180" href="${escapeHtml_(TOUCH_ICON_URL)}?v=652">
<meta property="og:image" content="${escapeHtml_(APP_ICON_512_URL)}?v=652">
<link rel="preconnect" href="https://drive.google.com">
<script src="https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js"></script>
<style>

/* V6.11.7: aligned language picker and platform-independent flag marks */
.web-language-picker{position:relative!important;display:inline-flex!important;align-items:center!important;align-self:center!important;vertical-align:middle!important;flex:0 0 auto!important;z-index:20010!important;margin:0!important;transform:none!important}
.web-language-toggle{height:42px!important;min-height:42px!important;align-self:center!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;line-height:1!important;padding:0 12px!important}
.web-language-menu{position:absolute!important;top:calc(100% + 7px)!important;right:0!important;left:auto!important;transform:none!important;min-width:154px!important;display:flex;flex-direction:column;gap:3px;z-index:30000!important}
.web-language-menu[hidden]{display:none!important}
.web-language-menu button{display:flex!important;align-items:center!important;gap:9px!important;min-height:38px!important;line-height:1.2!important;white-space:nowrap!important}
.flag-icon{display:inline-block!important;flex:0 0 19px!important;width:19px!important;height:13px!important;border-radius:2px!important;box-shadow:0 0 0 1px rgba(120,150,180,.35)!important;background-size:cover!important;background-position:center!important;vertical-align:middle!important}
.flag-icon.flag-th{background-image:linear-gradient(to bottom,#a51931 0 16.66%,#fff 16.66% 33.33%,#2d2a4a 33.33% 66.66%,#fff 66.66% 83.33%,#a51931 83.33% 100%)!important}
.flag-icon.flag-gb{background-color:#21468b!important;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Crect width='60' height='30' fill='%23012169'/%3E%3Cpath d='M0 0L60 30M60 0L0 30' stroke='%23fff' stroke-width='6'/%3E%3Cpath d='M0 0L60 30M60 0L0 30' stroke='%23C8102E' stroke-width='2.5'/%3E%3Cpath d='M30 0V30M0 15H60' stroke='%23fff' stroke-width='10'/%3E%3Cpath d='M30 0V30M0 15H60' stroke='%23C8102E' stroke-width='5'/%3E%3C/svg%3E")!important}
.header-actions{align-items:center!important}
.header-actions>.web-language-picker{align-self:center!important;margin-block:auto!important}
.mini-analytics-glyph{display:inline-flex!important;align-items:center!important;justify-content:center!important;flex:0 0 38px!important;width:38px!important;min-width:38px!important;max-width:38px!important;height:34px!important;padding:0!important;box-sizing:border-box!important;overflow:hidden!important;white-space:nowrap!important;text-overflow:clip!important;font-size:9px!important;letter-spacing:0!important;line-height:1!important;border-radius:10px!important}


/* V6.11.7: print-first QR label geometry — hard square corners for die-cut sticker stock */
#qrPrintLabel.qr-label,.qr-sheet-page .qr-label{
  display:grid!important;
  grid-template-columns:18.2mm minmax(0,1fr) 17.8mm!important;
  gap:1.0mm!important;
  align-items:center!important;
  border-radius:0!important;
  border:.25mm solid #173a63!important;
  border-left:.25mm solid #173a63!important;
  padding:.65mm .8mm!important;
  overflow:hidden!important;
  box-sizing:border-box!important;
  background:#fff!important;
  color:#081522!important;
}
#qrPrintLabel.qr-label .qr-code,.qr-sheet-page .qr-label .qr-code{
  width:18.0mm!important;height:18.0mm!important;min-width:18.0mm!important;
  border-radius:0!important;padding:.35mm!important;box-sizing:border-box!important;
  display:grid!important;place-items:center!important;overflow:hidden!important;
}
#qrPrintLabel.qr-label .qr-code img,#qrPrintLabel.qr-label .qr-code canvas,
.qr-sheet-page .qr-label .qr-code img,.qr-sheet-page .qr-label .qr-code canvas,
.qr-sheet-page .qr-label .qr-print-img{
  width:17.25mm!important;height:17.25mm!important;max-width:17.25mm!important;max-height:17.25mm!important;
  object-fit:contain!important;display:block!important;
}
#qrPrintLabel.qr-label .qr-label-copy,.qr-sheet-page .qr-label .qr-label-copy{
  min-width:0!important;max-width:100%!important;align-self:stretch!important;
  display:flex!important;flex-direction:column!important;justify-content:center!important;
  gap:.28mm!important;overflow:hidden!important;
}
#qrPrintLabel.qr-label.qr-with-credentials,.qr-sheet-page .qr-label.qr-with-credentials{
  grid-template-columns:18.2mm minmax(0,1fr) 17.8mm!important;
}
#qrPrintLabel.qr-label.qr-with-credentials .qr-credential-side,
.qr-sheet-page .qr-label.qr-with-credentials .qr-credential-side{
  display:flex!important;visibility:visible!important;opacity:1!important;
  min-width:0!important;width:auto!important;height:100%!important;align-self:stretch!important;
  flex-direction:column!important;justify-content:center!important;gap:1.5mm!important;
  border-left:.25mm solid #aebdca!important;padding:0 0 0 1.0mm!important;
  overflow:hidden!important;box-sizing:border-box!important;
}
#qrPrintLabel.qr-label:not(.qr-with-credentials) .qr-credential-side,
.qr-sheet-page .qr-label:not(.qr-with-credentials) .qr-credential-side{display:none!important}
.qr-credential-item{display:flex!important;flex-direction:column!important;gap:.45mm!important;min-width:0!important;overflow:hidden!important}
.qr-credential-item span{font-size:5.2pt!important;line-height:1!important;font-weight:800!important;letter-spacing:.04em!important;color:#49627b!important}
.qr-credential-item b{display:block!important;min-width:0!important;max-width:100%!important;font-size:7.0pt!important;line-height:1.12!important;font-weight:850!important;color:#0b2742!important;white-space:normal!important;overflow-wrap:anywhere!important;word-break:break-word!important;overflow:hidden!important}
.qr-with-credentials .qr-label-school{height:2.8mm!important}
.qr-with-credentials .qr-label-school strong{font-size:5.8pt!important}
.qr-with-credentials .qr-label-tag{font-size:8.0pt!important;line-height:1.05!important;margin:0!important}
.qr-with-credentials .qr-label-id,.qr-with-credentials .qr-label-device,.qr-with-credentials .qr-label-serial{font-size:5.7pt!important;line-height:1.08!important;margin:0!important;white-space:normal!important;overflow-wrap:anywhere!important}
.qr-with-credentials .qr-label-assigned{font-size:5.2pt!important}
@media print{
  #qrPrintLabel.qr-label,.qr-sheet-page .qr-label{border-radius:0!important;box-shadow:none!important}
  #qrPrintLabel.qr-label.qr-with-credentials,.qr-sheet-page .qr-label.qr-with-credentials{grid-template-columns:18.2mm minmax(0,1fr) 17.8mm!important}
}


/* V6.11.7 readability pass: slightly larger base text and robust rank badge */
html,body{font-family:"TH Sarabun New","Sarabun","Noto Sans Thai",Inter,system-ui,sans-serif}
body{font-size:14px}
.detail-card h3,.detail-section h3,.info-card h3{font-size:16px!important;line-height:1.25!important}
.detail-card .row-label,.detail-section .row-label,.info-card .row-label{font-size:12px!important;line-height:1.35!important}
.detail-card .row-value,.detail-section .row-value,.info-card .row-value{font-size:13px!important;line-height:1.4!important}
.mini-analytics-glyph{white-space:nowrap!important;overflow:hidden!important;text-overflow:clip!important;flex:0 0 38px!important;width:38px!important;min-width:38px!important;max-width:38px!important;justify-content:center!important;padding:0!important;font-size:9px!important;letter-spacing:0!important;box-sizing:border-box!important}


${commonBaseCss_()}

.dashboard{max-width:1740px;margin:auto;padding:32px 28px 72px}
.hero{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin-bottom:22px}
.eyebrow{font-size:9px;font-weight:800;letter-spacing:.18em;color:var(--navy);text-transform:uppercase}
.hero h1{font-size:clamp(36px,5vw,64px);line-height:.94;letter-spacing:-.055em;margin:9px 0 0;font-weight:820}
.hero h1 em{font-style:normal;-webkit-text-stroke:1px #111;color:transparent}
.hero-sub{margin-top:12px;color:#666b72;font-size:13px}
.hero-actions{display:flex;gap:9px;flex-wrap:wrap;justify-content:flex-end}
.speed-badge{display:inline-flex;align-items:center;gap:7px;margin-top:12px;padding:6px 9px;border:1px solid #d5d9dd;border-radius:999px;background:#fff;color:#53606e;font-size:8px;font-weight:800;letter-spacing:.10em;text-transform:uppercase}
.speed-dot{width:6px;height:6px;border-radius:50%;background:var(--acid);box-shadow:0 0 0 3px rgba(217,255,63,.14)}

    .asset-value-overview{margin:4px 0 15px;display:grid;grid-template-columns:minmax(0,1fr) auto;gap:16px;align-items:center;min-height:108px;padding:20px 24px;border-radius:22px;background:linear-gradient(120deg,#081523 0%,#0b2743 62%,#102f4d 100%);color:#fff;border:1px solid #24557d;box-shadow:0 16px 38px rgba(11,34,61,.15);position:relative;overflow:hidden}
    .asset-value-overview:after{content:"฿";position:absolute;right:22px;top:-24px;font-size:132px;line-height:1;font-weight:900;color:rgba(125,193,255,.055);pointer-events:none}
.mini-analytics-wrap{margin:0 0 15px;padding:14px 15px;border:1px solid #d9e0e6;border-radius:18px;background:rgba(255,255,255,.72);box-shadow:0 8px 24px rgba(13,42,68,.045)}
.mini-analytics-head{display:flex;align-items:center;justify-content:space-between;gap:12px;margin:0 2px 10px}.mini-analytics-head span{font-size:8px;font-weight:900;letter-spacing:.15em;color:#173a63}.mini-analytics-head small{font-size:8px;color:#8995a1}
.mini-analytics-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:9px}.mini-analytics-card{min-height:92px;padding:13px 14px;border:1px solid #d9e0e6;border-radius:14px;background:#fff;overflow:hidden}.mini-analytics-card>small{display:block;font-size:7px;font-weight:900;letter-spacing:.13em;color:#72808d}.mini-analytics-card>strong{display:block;margin-top:7px;font-size:19px;line-height:1.05;color:#102a44;letter-spacing:-.03em}.mini-analytics-card>p{margin:5px 0 0;font-size:8px;color:#81909d;line-height:1.4}.mini-bars{display:grid;gap:5px;margin-top:9px}.mini-bar{display:grid;grid-template-columns:minmax(56px,auto) 1fr auto;align-items:center;gap:7px;font-size:7px;color:#516171}.mini-bar b{font-weight:800;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mini-bar i{display:block;height:5px;border-radius:999px;background:#e2e9ef;overflow:hidden}.mini-bar i:after{content:"";display:block;width:var(--w,0%);height:100%;border-radius:inherit;background:linear-gradient(90deg,#173a63,#4d8cc8)}.mini-bar em{font-style:normal;font-weight:850;color:#173a63}.mini-metrics{display:flex;gap:6px;flex-wrap:wrap;margin-top:10px}.mini-metric{display:inline-flex;align-items:center;gap:5px;padding:5px 7px;border:1px solid #dce3e9;border-radius:999px;background:#f7f9fb;font-size:7px;font-weight:800;color:#526577}.mini-metric b{font-size:9px;color:#173a63}
    .asset-value-copy{position:relative;z-index:1}.asset-value-copy small{display:block;color:#72a9d8;font-size:8px;letter-spacing:.18em;font-weight:850}.asset-value-copy b{display:block;margin-top:8px;font-size:38px;line-height:1;letter-spacing:-.04em}.asset-value-copy p{margin:8px 0 0;color:#8da8c1;font-size:10px}
    .asset-value-icon{position:relative;z-index:1;width:58px;height:58px;border-radius:17px;display:grid;place-items:center;background:#0b3559;border:1px solid #3574a8;color:#9bd3ff;font-size:25px;font-weight:900;box-shadow:0 0 26px rgba(50,145,224,.12)}
.stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(145px,1fr));gap:10px;margin-bottom:19px}
.stat-card{border:1px solid var(--line);border-radius:15px;background:#fff;padding:17px;text-align:left;cursor:pointer;min-height:100px;transition:.15s}
.stat-card:hover,.stat-card.active{background:#111;color:#fff;border-color:#111;transform:translateY(-2px)}
.stat-card.active{box-shadow:inset 0 -3px 0 var(--navy)}
.stat-card.active b{color:var(--acid)}
.stat-card b{display:block;font-size:29px;line-height:1;font-weight:800;letter-spacing:-.045em}
.stat-card span{display:block;margin-top:11px;font-size:8px;font-weight:800;letter-spacing:.11em;text-transform:uppercase}
.stat-card.value-card{cursor:default;background:linear-gradient(145deg,#0b223d,#061426);color:#fff;border-color:#214c78}.stat-card.value-card:hover{transform:none}.stat-card.value-card b{color:var(--acid);font-size:clamp(20px,2.1vw,29px)}.stat-card.value-card span{color:#c3d5e8}

.toolbar{display:flex;gap:10px;align-items:center;background:#fff;border:1px solid var(--line);border-radius:16px;padding:10px 12px;margin-bottom:16px;box-shadow:0 8px 24px rgba(0,0,0,.03)}
.asset-filterbar{display:grid;grid-template-columns:repeat(4,minmax(145px,1fr)) auto;gap:8px;align-items:end;margin:-5px 0 13px;padding:10px 12px;background:#eef1f4;border:1px solid #d7dce1;border-radius:15px}.filter-field{display:grid;gap:5px}.filter-field label{font-size:7px;font-weight:850;letter-spacing:.11em;text-transform:uppercase;color:#697681}.filter-field select{min-height:39px;border:1px solid #c7ccd1;border-radius:10px;background:#fff;color:#111;padding:0 10px;font-size:11px;font-weight:700}.filter-reset{min-height:39px;padding:0 14px;border-radius:10px;border:1px solid #b9c2ca;background:#fff;color:#173a63;font-size:8px;font-weight:850;letter-spacing:.07em;cursor:pointer}.filter-reset:hover{border-color:#173a63}.brand-select-stack{display:grid;gap:7px}.brand-option-strip{display:flex;gap:6px;overflow-x:auto;padding:1px 1px 5px;scrollbar-width:thin}.brand-option-chip{appearance:none;flex:0 0 auto;min-width:90px;display:grid;grid-template-columns:34px auto;gap:8px;align-items:center;border:1px solid #d1d7dd;background:#fff;color:#2b3947;border-radius:10px;padding:6px 8px;cursor:pointer;font-size:8px;font-weight:800;transition:.14s}.brand-option-chip:hover{border-color:#6d9bc7;transform:translateY(-1px)}.brand-option-chip.selected{border-color:#173a63;background:#edf6ff;color:#173a63;box-shadow:0 0 0 1px rgba(23,58,99,.08) inset}.brand-option-logo{width:34px;height:34px;border-radius:9px;background:#fff;display:grid;place-items:center;overflow:hidden;border:1px solid #dbe3ea}.brand-option-logo img{width:26px;height:26px;object-fit:contain}.brand-option-logo span{font-size:6px;font-weight:900;color:#173a63}.brand-select-row{display:grid;grid-template-columns:54px minmax(0,1fr);gap:10px;align-items:center}.brand-select-logo,.detail-brand-logo{width:52px;height:52px;border:1px solid #c9d0d6;border-radius:13px;background:#fff;display:grid;place-items:center;overflow:hidden}.brand-select-logo img,.detail-brand-logo img{width:37px;height:37px;object-fit:contain}.brand-select-logo span,.detail-brand-logo span{font-size:8px;font-weight:900;color:#173a63;letter-spacing:.06em}.detail-brand-lockup{display:flex;align-items:center;gap:11px;margin:10px 0 3px}.detail-brand-lockup .detail-brand-logo{width:58px;height:58px;border-color:#bec8d2}.detail-brand-name{display:grid;gap:2px}.detail-brand-name small{font-size:7px;letter-spacing:.12em;color:#7d8791;font-weight:800}.detail-brand-name b{font-size:13px;color:#173a63}.qr-ready-note{display:inline-flex;align-items:center;gap:6px;margin-top:8px;border:1px solid #b7d3c1;background:#f0fff5;color:#17623a;border-radius:999px;padding:6px 9px;font-size:8px;font-weight:800}.qr-ready-note i{width:7px;height:7px;border-radius:50%;background:#43db78;box-shadow:0 0 8px rgba(67,219,120,.5)}.asset-device{display:flex;align-items:center;gap:5px}.card-brand-mini{width:22px;height:22px;display:inline-grid;place-items:center;flex:0 0 auto;background:#fff;border:1px solid #d7e0e8;border-radius:6px}.card-brand-mini img{width:17px;height:17px;object-fit:contain}.brand-option-logo[data-wide-logo="1"]{width:50px;height:34px}.brand-option-logo[data-wide-logo="1"] img{width:48px;height:26px;object-fit:contain}.brand-option-chip:has(.brand-option-logo[data-wide-logo="1"]){grid-template-columns:50px auto;min-width:116px}.brand-select-logo[data-wide-logo="1"] img{width:49px;height:28px;object-fit:contain}.detail-brand-logo[data-wide-logo="1"] img{width:55px;height:31px;object-fit:contain}@media(max-width:1100px){.asset-filterbar{grid-template-columns:repeat(2,minmax(0,1fr)) auto}.filter-reset{align-self:end}}@media(max-width:760px){.asset-filterbar{grid-template-columns:1fr 1fr;margin-bottom:10px}.filter-reset{grid-column:1/-1}.brand-select-row{grid-template-columns:48px minmax(0,1fr)}.brand-select-logo{width:46px;height:46px}.brand-select-logo img{width:32px;height:32px}}
.search{flex:1;display:flex;align-items:center;gap:8px}
.search span{font-size:17px}
.search input{width:100%;border:0;outline:0;background:transparent;padding:10px 4px;font-size:15px}
.result-count{white-space:nowrap;font-size:11px;color:#777;font-weight:800}

.asset-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:13px}
.asset-card{position:relative;text-decoration:none;background:#fff;border:1px solid var(--line);border-radius:18px;padding:13px;display:grid;grid-template-columns:170px minmax(0,1fr) auto;gap:17px;align-items:center;min-height:154px;transition:.16s;overflow:hidden}
.asset-card:before{content:"";position:absolute;left:0;top:0;bottom:0;width:4px;background:transparent}
.asset-card:hover{transform:translateY(-2px);border-color:#9eabb9;box-shadow:var(--shadow)}
.asset-card:hover:before{background:var(--navy)}
.asset-photo{width:170px;height:128px;position:relative;overflow:hidden;border-radius:13px;background:var(--navy-deep);display:flex;align-items:center;justify-content:center;border:1px solid rgba(23,58,99,.13)}
.asset-photo img{width:100%;height:100%;object-fit:contain;display:block;padding:7px;box-sizing:border-box;background:linear-gradient(145deg,#f8fbff,#edf3f8)}
.asset-photo.photo-fallback{color:#fff;font-weight:800;font-size:10px;letter-spacing:.10em;text-transform:uppercase}
.asset-main{min-width:0}
.asset-kicker{font-size:8px;color:#7d8490;font-weight:800;letter-spacing:.12em;text-transform:uppercase}
.asset-tag{margin-top:6px;font-size:20px;font-weight:800;letter-spacing:-.035em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.asset-device{margin-top:6px;font-size:12px;color:#59616b;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.asset-meta{display:flex;gap:10px;flex-wrap:wrap;margin-top:11px;font-size:9px;color:#8d939b}
.asset-meta span{white-space:nowrap;max-width:145px;overflow:hidden;text-overflow:ellipsis}
.asset-assigned{margin-top:10px;font-size:10px;color:#6b7480;line-height:1.2}
.asset-assigned strong{display:block;margin-top:3px;font-size:15px;line-height:1.08;color:#17202a;font-weight:820;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.asset-side{height:100%;display:flex;flex-direction:column;align-items:flex-end;justify-content:space-between;gap:8px}
.asset-side strong{font-size:29px;color:#9aa4af;font-weight:300}
.status-pill{font-size:7.5px;font-weight:800;letter-spacing:.09em;text-transform:uppercase;border:1px solid #cbd2d9;border-radius:999px;padding:6px 8px;background:#f7f9fb;color:#34475b;white-space:nowrap}
.empty-state{display:none;padding:45px;text-align:center;background:#fff;border:1px dashed #bbb;border-radius:18px;color:#777}
.empty-state.show{display:block}

.add-photo-row{grid-column:1/-1;border:1px dashed #aaa;background:#fff;border-radius:14px;padding:13px}
.photo-picker{display:flex;align-items:center;gap:14px}
.photo-preview{width:92px;height:76px;flex:0 0 92px;border-radius:12px;background:#111;color:#fff;display:flex;align-items:center;justify-content:center;overflow:hidden;font-size:10px;font-weight:900}
.photo-preview img{width:100%;height:100%;object-fit:contain;padding:10px;box-sizing:border-box;background:linear-gradient(145deg,#f8fbff,#edf3f8)}
.photo-help{font-size:11px;color:#777;margin-top:5px}
.photo-ai-button{display:inline-flex;align-items:center;justify-content:center;margin-top:8px;border:1px solid #7c5aa6;background:#211735;color:#d7baff;border-radius:10px;padding:9px 12px;font:800 9px system-ui;letter-spacing:.04em;cursor:pointer}
.photo-ai-button:disabled{opacity:.42;cursor:not-allowed}

.detail-shell{max-width:1360px;margin:auto;padding:28px 25px 72px}
.detail-top{display:flex;justify-content:space-between;align-items:center;gap:18px;margin-bottom:15px}
.crumb{font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:#777;font-weight:900}
.detail-actions{display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-end}
.identity-card{background:#fff;border:1px solid var(--line);border-radius:22px;padding:22px;display:grid;grid-template-columns:320px minmax(0,1fr);gap:28px;box-shadow:0 12px 36px rgba(0,0,0,.04);margin-bottom:15px}
.detail-photo-wrap{min-width:0}
.detail-photo{width:100%;height:260px;position:relative;background:var(--navy-deep);border-radius:17px;display:flex;align-items:center;justify-content:center;overflow:hidden;color:#fff;font-size:12px;font-weight:900;letter-spacing:1px;text-transform:uppercase}
.detail-photo img{width:100%;height:100%;object-fit:contain;display:block;padding:12px;box-sizing:border-box;background:linear-gradient(145deg,#f8fbff,#e9f0f6)}
.photo-upload-row{display:grid;grid-template-columns:1fr;gap:7px;margin-top:9px}
.photo-upload-label{width:100%}
.photo-input{display:none}
.photo-note{font-size:9px;color:#888;text-align:center}
.detail-asset-kicker{font-size:9px;color:var(--navy);letter-spacing:.16em;font-weight:800;text-transform:uppercase}
.asset-title{font-size:clamp(38px,6vw,70px);line-height:.94;letter-spacing:-.06em;font-weight:850;margin:10px 0 0;word-break:break-word}
.asset-id{margin-top:10px;color:#7b7b7b;font-size:12px}
.summary-strip{display:flex;flex-wrap:wrap;gap:9px;margin-top:24px;padding-top:18px;border-top:1px solid #ecebe6}
.summary-chip{padding:9px 11px;border:1px solid #deddd7;border-radius:999px;background:#f8f8f5;font-size:11px}
.summary-chip b{margin-right:5px}
.updated-line{margin-top:16px;font-size:10px;color:#979797}
.detail-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
.info-card{background:#fff;border:1px solid var(--line);border-radius:18px;padding:18px}
.info-card.full{grid-column:1/-1}
.info-title{display:flex;justify-content:space-between;align-items:center;gap:10px;font-size:17px;font-weight:900;padding-bottom:13px;border-bottom:1px solid #e8e7e2;margin-bottom:2px}
.info-row{display:grid;grid-template-columns:155px minmax(0,1fr);gap:14px;padding:10px 0;border-bottom:1px solid #efeee9}
.info-row:last-child{border-bottom:0}
.info-label{font-size:11px;color:#7d7d7d}
.info-value{font-size:12px;font-weight:650;word-break:break-word;white-space:pre-wrap}
.notes-value{padding-top:12px;line-height:1.65;white-space:pre-wrap;color:#333;min-height:40px}
.system-row{font-size:10px;color:#8b8b8b;margin-top:14px}
.delete-box{width:min(520px,100%);background:var(--paper);border:1px solid #555;border-radius:22px;overflow:hidden}
.delete-icon{width:52px;height:52px;border-radius:50%;display:grid;place-items:center;background:#fee;color:var(--danger);font-size:23px;font-weight:900;margin-bottom:12px}
.delete-body{padding:25px}
.delete-body h2{margin:0;font-size:27px}
.delete-body p{color:#666;line-height:1.55}
.delete-name{background:#fff;border:1px solid #ddd;border-radius:12px;padding:13px;margin-top:13px;font-weight:900}
.delete-actions{display:flex;gap:9px;justify-content:flex-end;padding:17px 25px;border-top:1px solid var(--line);background:#ebeae4}

@media(max-width:1300px){.asset-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:820px){
  .detail-shell{padding:18px 12px 45px}
  .detail-top{align-items:flex-start}
  .detail-actions{display:grid;grid-template-columns:1fr 1fr}
  .detail-actions .btn:first-child{grid-column:1/-1}
  .identity-card{grid-template-columns:1fr;padding:14px;gap:18px}
  .detail-photo{height:310px}
  .detail-grid{grid-template-columns:1fr}
  .info-card.full{grid-column:auto}
  .info-row{grid-template-columns:118px minmax(0,1fr);gap:9px}
  .asset-title{font-size:42px}
}
@media(max-width:760px){
  .dashboard{padding:22px 13px 48px}
  .hero{display:block}
  .hero-actions{display:grid;grid-template-columns:1fr 1fr;margin-top:18px}
  .hero-actions .btn{width:100%}
  .stats{display:flex;overflow-x:auto;padding-bottom:4px;scroll-snap-type:x proximity}
  .stat-card{min-width:128px;scroll-snap-align:start}
  .toolbar{position:sticky;top:var(--header-h);z-index:40}
  .result-count{display:none}
  .asset-grid{grid-template-columns:1fr}
  .asset-card{grid-template-columns:118px minmax(0,1fr) auto;padding:10px;min-height:128px;gap:12px}
  .asset-photo{width:118px;height:108px}
  .asset-tag{font-size:18px}
  .asset-meta span{max-width:110px}
  .photo-picker{align-items:flex-start}
  .photo-preview{width:86px;height:76px;flex-basis:86px}
}
@media(max-width:460px){
  .detail-photo{height:260px}
  .detail-actions .btn{padding:10px 9px}
  .asset-title{font-size:36px}
}

/* ============================================================
   v5.9 — EDIT / ADD / STATUS / SUPPORT POLISH
   ============================================================ */
.status-pill{display:inline-flex;align-items:center;gap:7px;font-size:8px;padding:7px 9px}
.quick-status-trigger{appearance:none;cursor:pointer;transition:.15s ease}
.quick-status-trigger:hover{transform:translateY(-1px);box-shadow:0 6px 16px rgba(0,0,0,.09)}
.status-pill.status-active{border-color:#9ceabb;background:#effff5;color:#086b35}
.status-pill.status-inactive{border-color:#f0abb3;background:#fff1f3;color:#a1162a}
.status-pill.status-warning{border-color:#f0c676;background:#fff8e9;color:#8a5900}
.status-pill.status-storage{border-color:#a9bed8;background:#eef5ff;color:#234f83}
.status-pill.status-retired{border-color:#c5c5c5;background:#f1f1f1;color:#616161}
.quick-status-menu{position:fixed;z-index:8800;width:210px;padding:8px;background:#0d1117;border:1px solid #31475f;border-radius:15px;box-shadow:0 22px 60px rgba(0,0,0,.34)}
.quick-status-menu.hidden{display:none}
.quick-status-title{padding:7px 9px 9px;color:#91a2b4;font-size:8px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}
.quick-status-option{width:100%;appearance:none;border:0;background:transparent;color:#fff;display:flex;align-items:center;gap:9px;padding:10px 11px;border-radius:10px;cursor:pointer;font-size:12px;font-weight:720;text-align:left}
.quick-status-option:hover{background:#162434}
.quick-status-option.current{background:#1b2e43;color:var(--acid)}
.neon-status-dot,.status-dot{width:8px;height:8px;border-radius:50%;display:inline-block;flex:0 0 8px;background:#9ca3af;box-shadow:0 0 0 3px rgba(156,163,175,.12)}
.status-dot.active,.neon-status-dot.active{background:#38ff8f;box-shadow:0 0 5px #38ff8f,0 0 12px rgba(56,255,143,.82),0 0 0 3px rgba(56,255,143,.12)}
.status-dot.inactive,.neon-status-dot.inactive{background:#ff4055;box-shadow:0 0 5px #ff4055,0 0 12px rgba(255,64,85,.72),0 0 0 3px rgba(255,64,85,.10)}
.status-dot.warning,.neon-status-dot.warning{background:#ffb43b;box-shadow:0 0 6px rgba(255,180,59,.82),0 0 0 3px rgba(255,180,59,.10)}
.status-dot.neutral,.neon-status-dot.neutral{background:#6f91b8;box-shadow:0 0 6px rgba(111,145,184,.55),0 0 0 3px rgba(111,145,184,.10)}

.form-modal{border-color:#284a70;background:#f4f3ee}
.form-modal .modal-head{background:linear-gradient(112deg,#0b0d11 0%,#0b223d 72%,#173a63 130%);color:#fff;border-bottom-color:#24476d;padding:25px 28px 23px}
.form-modal .modal-head:before{height:3px;background:linear-gradient(90deg,var(--acid),var(--navy-mid),transparent 78%)}
.form-modal .modal-head h2{font-size:30px;line-height:1;letter-spacing:-.035em;font-weight:780}
.form-modal .modal-head p{margin-top:8px;color:#b8c6d6;font-size:13px;letter-spacing:-.005em}
.form-modal .x-btn{background:#101a27;color:#fff;border-color:#4d6783;font-size:20px}
.form-modal .form-body{padding:26px 28px 9px}
.form-modal .form-grid{gap:17px 16px}
.form-modal .field{gap:8px}
.form-modal .field label{font-size:10.5px;font-weight:760;letter-spacing:.065em;color:#425163}
.form-modal .control{min-height:47px;padding:13px 14px;border-radius:11px;border-color:#bdc5ce;font-size:15px;font-weight:520;letter-spacing:-.01em;background:#fff}
.form-modal select.control{cursor:pointer}
.form-modal textarea.control{min-height:125px;line-height:1.5}
.form-modal .control:focus{border-color:#214d7e;box-shadow:0 0 0 4px rgba(33,77,126,.12)}
.form-modal .modal-actions{padding:18px 28px;background:#ebeef1;border-top-color:#cfd6dd}
.form-modal .modal-actions .btn{font-size:12px;min-height:46px;padding:12px 18px}
.field.field-highlight{position:relative}
.field.field-highlight:after{content:"";position:absolute;inset:-7px;border:2px solid var(--acid);border-radius:14px;pointer-events:none;box-shadow:0 0 0 3px rgba(217,255,63,.12)}

.summary-strip{align-items:center}
.summary-chip{appearance:none;display:inline-flex;align-items:center;gap:6px;min-height:38px;padding:9px 12px;color:#17202a;cursor:default;font-family:inherit;transition:.15s ease}
button.summary-chip{cursor:pointer}
button.summary-chip:hover{background:#eef3f8;border-color:#9bb0c7;transform:translateY(-1px);box-shadow:0 6px 16px rgba(11,34,61,.08)}
.summary-chip b{color:#526171;font-size:9px;letter-spacing:.03em;text-transform:uppercase}
.chip-copy-mark{font-size:10px;color:#738ba6;margin-left:2px;opacity:.72}.summary-copy:active{transform:translateY(0) scale(.985)}
.status-summary{padding-left:10px}
.serial-summary{display:inline-flex;align-items:stretch;border-radius:999px;overflow:hidden;border:1px solid #c6d0da;background:#f8fafc}
.serial-summary .summary-chip{border:0;border-radius:0;background:transparent}
.serial-summary .summary-chip:hover{box-shadow:none;transform:none;background:#eef3f8}
.support-lookup-btn{appearance:none;border:0;border-left:1px solid #c6d0da;background:#0b223d;color:#fff;padding:8px 12px;font:700 9px/1 Inter,ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;letter-spacing:.07em;cursor:pointer;white-space:nowrap;transition:.15s}
.support-lookup-btn:hover{background:#173a63;color:var(--acid)}
.support-lookup-btn:disabled{opacity:.45;cursor:not-allowed;color:#d7dee6}

.photo-pending-actions{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:2px}
.photo-pending-actions .btn{width:100%;font-size:11px}
.photo-sync-badge{display:inline-flex;align-items:center;gap:7px;margin-top:8px;padding:7px 10px;border-radius:999px;background:#0b223d;color:#fff;font-size:9px;font-weight:800;letter-spacing:.08em}.photo-sync-badge:before{content:"";width:7px;height:7px;border-radius:50%;background:#59d8ff;box-shadow:0 0 9px #59d8ff;animation:syncBlink .85s ease-in-out infinite}@keyframes syncBlink{50%{opacity:.25;transform:scale(.72)}}
.guard-modal{z-index:7600}.guard-box{width:min(500px,100%)}.guard-copy{padding:22px 24px 8px}.guard-copy h3{margin:0;font-size:22px;letter-spacing:-.03em}.guard-copy p{margin:9px 0 0;color:#66717e;line-height:1.55;font-size:13px}.guard-actions{display:grid;grid-template-columns:1fr 1fr 1.2fr;gap:9px;padding:18px 24px 24px}.guard-actions .btn{width:100%}@media(max-width:620px){.guard-actions{grid-template-columns:1fr}.guard-copy{padding:20px 16px 6px}.guard-actions{padding:14px 16px 20px}}
.detail-photo.is-pending{outline:3px solid var(--acid);outline-offset:3px;box-shadow:0 0 0 7px rgba(217,255,63,.10)}
.photo-note.pending-note{color:#173a63;font-weight:650}
.scan-add-panel{grid-column:1/-1;display:flex;align-items:center;justify-content:space-between;gap:14px;padding:14px 15px;border:1px solid #b6c4d3;background:linear-gradient(100deg,#eef4fa,#fff);border-radius:14px}
.scan-add-copy strong{display:block;font-size:13px}.scan-add-copy span{display:block;margin-top:4px;font-size:10px;color:#667482}
.scan-add-panel .btn{white-space:nowrap}
.money-wrap{position:relative}.money-prefix{position:absolute;left:14px;top:50%;transform:translateY(-50%);font-size:14px;font-weight:800;color:#173a63;pointer-events:none}.money-wrap .control{padding-left:34px}
.quick-help{font-size:9px;color:#73808d;margin-top:5px}
.qr-box{width:min(720px,100%);background:#f3f2ed;border:1px solid #44566b;border-radius:22px;overflow:hidden}
.qr-modal-body{padding:26px;display:grid;place-items:center}
/* Physical Avery 5160 cell = 66.675mm × 25.4mm. The visible label sits inside a cut-safe inset. */
.qr-label-cell{width:66.675mm;height:25.4mm;display:grid;place-items:center;overflow:hidden;box-sizing:border-box}
.qr-label{width:64.8mm;height:23.6mm;background:#fff;color:#0a1018;border:.2mm solid #173a63;border-left:.75mm solid #173a63;border-radius:1.45mm;display:grid;grid-template-columns:21.35mm minmax(0,1fr);gap:1.55mm;align-items:center;padding:.72mm 1.05mm;overflow:hidden;box-sizing:border-box;font-family:Inter,ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;-webkit-font-smoothing:antialiased;text-rendering:geometricPrecision}
.qr-code{width:21.1mm;height:21.1mm;padding:.78mm;background:#fff;display:grid;place-items:center;box-sizing:border-box;border-radius:.8mm;overflow:hidden}
.qr-code img,.qr-code canvas,.qr-print-img{width:19.55mm!important;height:19.55mm!important;max-width:19.55mm!important;max-height:19.55mm!important;display:block!important;image-rendering:crisp-edges;object-fit:contain}
.qr-label-copy{min-width:0;align-self:stretch;display:flex;flex-direction:column;justify-content:center;line-height:1.05;overflow:hidden}
.qr-label-school{display:flex;align-items:center;gap:.75mm;color:#0b2f57;min-width:0;height:3.45mm}
.qr-school-logo{width:5.7mm;height:3.8mm;object-fit:contain;flex:0 0 auto;filter:brightness(0) saturate(100%) invert(16%) sepia(30%) saturate(1966%) hue-rotate(169deg) brightness(88%) contrast(96%)}
.qr-label-school strong{font-size:6.8pt;font-weight:850;letter-spacing:.015em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.qr-label-tag{margin-top:.22mm;font-size:9.45pt;font-weight:900;letter-spacing:-.018em;line-height:1.02;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#090d13}
.qr-line{margin-top:.3mm;font-size:5.75pt;font-weight:520;line-height:1.05;color:#4b5663;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.qr-line b{color:#173a63;font-weight:820}
.qr-label-serial{display:block!important;font-size:5.9pt;margin-top:.32mm}
.qr-label-id{color:#455465;font-size:5.9pt;margin-top:.38mm}.qr-label-assigned{display:none;color:#173a63;font-size:5.8pt;font-weight:760;margin-top:.32mm}.qr-label-assigned:not([hidden]){display:block}
.qr-meta-divider{color:#9aa8b5;padding:0 .3mm}
.qr-label-credentials{display:none;color:#0e2032;font-size:7.35pt;font-weight:820;line-height:1.06;margin-top:.45mm;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.qr-label.qr-with-credentials .qr-label-category{display:none}
.qr-label.qr-with-credentials .qr-label-credentials{display:block}
.qr-label.qr-with-credentials .qr-label-tag{font-size:8.35pt;margin-top:.45mm}
.qr-label.qr-with-credentials .qr-label-school strong{font-size:6.5pt}
.qr-label.qr-with-credentials .qr-label-id{font-size:5.25pt;margin-top:.6mm}
.qr-actions{display:flex;gap:9px;align-items:center;justify-content:flex-end;padding:16px 22px;background:#e9e8e2;border-top:1px solid #d4d3cd}
.qr-assigned-toggle{display:inline-flex;align-items:center;gap:7px;color:#334155;font-size:10px;font-weight:800;white-space:nowrap}.qr-assigned-toggle input{width:16px;height:16px;accent-color:#369cf5}.qr-assigned-toggle[hidden]{display:none!important}
.qr-copy-control{display:inline-flex;align-items:center;gap:7px;margin-right:auto;font-size:10px;font-weight:850;letter-spacing:.06em;color:#536171;text-transform:uppercase}
.qr-copy-control input{width:66px;min-height:40px;border:1px solid #b6c2cf;border-radius:10px;background:#fff;color:#11263d;padding:0 9px;font:800 15px/1 Inter,ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;text-align:center}

.qr-print-mode-box{width:min(720px,100%);background:#f3f2ed;border:1px solid #44566b;border-radius:22px;overflow:hidden}
.qr-print-mode-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:11px;padding:24px}
.qr-print-mode-card{appearance:none;text-align:left;min-height:145px;padding:16px;border:1px solid #c7d1db;border-radius:16px;background:#fff;color:#102238;cursor:pointer;display:flex;flex-direction:column;gap:8px;transition:.15s ease}
.qr-print-mode-card:hover{border-color:#173a63;box-shadow:0 10px 24px rgba(11,34,61,.12);transform:translateY(-2px)}
.qr-print-mode-card:disabled{opacity:.42;cursor:not-allowed;transform:none;box-shadow:none}
.qr-print-mode-card strong{font-size:13px;letter-spacing:.02em;line-height:1.18}.qr-print-mode-card small{font-size:10px;color:#6b7784;line-height:1.45}.qr-print-mode-icon{font-size:25px;color:#173a63}
.qr-print-mode-note{padding:0 24px 18px;color:#687785;font-size:10px;line-height:1.5}
.credential-account-box{max-width:560px}.credential-account-body{padding:24px;background:#fff;display:grid;gap:9px}.credential-account-body label{font-size:10px;font-weight:850;letter-spacing:.08em;text-transform:uppercase;color:#536171}.credential-account-body .control{width:100%;font-size:15px;min-height:46px}.credential-account-body small{color:#74818e;font-size:10px;line-height:1.45}

.credential-sheet-page{position:relative;width:215.9mm;height:279.4mm;background:#fff;box-sizing:border-box;padding:10mm 9.5mm;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));grid-template-rows:repeat(12,20mm);column-gap:3.3mm;row-gap:0;align-content:start;overflow:hidden}
.credential-sticker{height:20mm;box-sizing:border-box;padding:2.5mm 2mm;display:flex;flex-direction:column;justify-content:center;overflow:hidden;color:#111;font-family:Arial,Helvetica,sans-serif;font-weight:800}
.credential-sticker .credential-line{font-size:11.3pt;line-height:1.34;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;letter-spacing:-.01em}
.credential-sticker .credential-line b{font-weight:800}
.credential-preview-wrap{padding:28px;background:#dfe3e7;display:grid;place-items:center;min-height:190px}
.credential-preview-sticker{width:36.7mm;height:20mm;background:#fff;padding:3mm 2mm;box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;color:#111;font-family:Arial,Helvetica,sans-serif;font-weight:800;box-shadow:0 8px 22px rgba(0,0,0,.12)}
.credential-preview-sticker .credential-line{font-size:11pt;line-height:1.35;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;letter-spacing:-.01em}
.credential-preview-sticker .credential-line b{font-weight:800}

.bulk-qr-box{width:min(1080px,100%);background:var(--paper);border:1px solid #44566b;border-radius:22px;overflow:hidden;max-height:calc(100dvh - 34px);display:flex;flex-direction:column}
.bulk-controls{padding:18px 22px;display:grid;grid-template-columns:repeat(2,minmax(220px,1fr)) auto;gap:12px;align-items:end;border-bottom:1px solid var(--line)}
.bulk-controls label{display:flex;flex-direction:column;gap:7px;font-size:10px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#536171}
.bulk-controls select{font-size:15px}
.bulk-summary{font-size:12px;font-weight:780;color:#425163;padding:0 2px 3px;text-align:right}
.bulk-preview-wrap{padding:20px;background:#dfe3e7;overflow:auto;min-height:260px}
.bulk-sheet-preview{width:max-content;margin:0;display:flex;flex-direction:column;gap:22px;align-items:flex-start}
.qr-sheet-page{position:relative;width:215.9mm;height:279.4mm;background:#fff;box-sizing:border-box;padding:12.7mm 4.7625mm;box-shadow:0 14px 36px rgba(0,0,0,.16);overflow:hidden;flex:0 0 auto}
.qr-sheet-grid{width:206.375mm;height:254mm;display:grid;grid-template-columns:repeat(3,66.675mm);grid-template-rows:repeat(10,25.4mm);column-gap:3.175mm;row-gap:0;align-content:start;justify-content:start}
.qr-sheet-page .qr-label{box-shadow:none}
.qr-page-badge{position:absolute;right:5mm;top:4mm;font:700 9px/1 Inter,ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;letter-spacing:.06em;color:#8a929b;text-transform:uppercase}
.qr-empty-cell{width:66.675mm;height:25.4mm}
.bulk-empty{min-width:min(700px,85vw);min-height:220px;display:grid;place-items:center;text-align:center;color:#7b8188;font-weight:700;background:#fff;border-radius:16px;padding:30px}
.bulk-actions{display:flex;gap:9px;justify-content:flex-end;padding:16px 22px;background:#e9e8e2;border-top:1px solid #d4d3cd}
.bulk-print-portal{display:none}
@media(max-width:900px){.bulk-preview-wrap{padding:12px}.bulk-sheet-preview{margin:0}.bulk-summary{text-align:left}.bulk-controls{grid-template-columns:1fr}}
@media(max-width:760px){.bulk-preview-wrap{overflow:auto}.bulk-sheet-preview{transform-origin:top left}.bulk-controls{grid-template-columns:1fr}}

@media print{
  @page{size:Letter portrait;margin:0}
  html,body{width:215.9mm!important;height:auto!important;margin:0!important;padding:0!important;background:#fff!important}

  body.printing-qr > *{display:none!important}
  body.printing-qr #qrLabelModal{display:block!important;position:static!important;inset:auto!important;background:#fff!important;padding:0!important;margin:0!important;width:215.9mm!important;height:279.4mm!important;overflow:hidden!important}
  body.printing-qr #qrLabelModal .qr-box{border:0!important;box-shadow:none!important;width:215.9mm!important;height:279.4mm!important;background:#fff!important;border-radius:0!important}
  body.printing-qr #qrLabelModal .modal-head,body.printing-qr #qrLabelModal .qr-actions{display:none!important}
  body.printing-qr #qrLabelModal .qr-modal-body{padding:12.7mm 4.7625mm!important;display:block!important}
  body.printing-qr #qrLabelModal .qr-label{box-shadow:none!important}

  body.printing-bulk > *{display:none!important}
  body.printing-bulk #bulkPrintPortal{display:block!important;position:static!important;width:215.9mm!important;margin:0!important;padding:0!important;background:#fff!important}
  body.printing-bulk #bulkPrintPortal .qr-sheet-page{display:block!important;width:215.9mm!important;height:279.4mm!important;margin:0!important;padding:12.7mm 4.7625mm!important;box-shadow:none!important;overflow:hidden!important;break-after:page!important;page-break-after:always!important}
  body.printing-bulk #bulkPrintPortal .qr-sheet-page:last-child{break-after:auto!important;page-break-after:auto!important}
  body.printing-bulk #bulkPrintPortal .qr-sheet-grid{width:206.375mm!important;height:254mm!important;display:grid!important;grid-template-columns:repeat(3,66.675mm)!important;grid-template-rows:repeat(10,25.4mm)!important;column-gap:3.175mm!important;row-gap:0!important}
  body.printing-bulk #bulkPrintPortal .qr-page-badge{display:none!important}
  body.printing-bulk #bulkPrintPortal .qr-label-cell{width:66.675mm!important;height:25.4mm!important;display:grid!important;place-items:center!important;break-inside:avoid!important;page-break-inside:avoid!important}
  body.printing-bulk #bulkPrintPortal .qr-label{box-shadow:none!important;break-inside:avoid!important;page-break-inside:avoid!important}

  body.printing-credentials > *{display:none!important}
  body.printing-credentials #credentialPrintPortal{display:block!important;position:static!important;width:215.9mm!important;margin:0!important;padding:0!important;background:#fff!important}
  body.printing-credentials #credentialPrintPortal .credential-sheet-page{display:grid!important;width:215.9mm!important;height:279.4mm!important;margin:0!important;padding:10mm 9.5mm!important;grid-template-columns:repeat(5,minmax(0,1fr))!important;grid-template-rows:repeat(12,20mm)!important;column-gap:3.3mm!important;row-gap:0!important;break-after:page!important;page-break-after:always!important}
  body.printing-credentials #credentialPrintPortal .credential-sheet-page:last-child{break-after:auto!important;page-break-after:auto!important}
  body.printing-credentials #credentialPrintPortal .credential-sticker{height:20mm!important;break-inside:avoid!important;page-break-inside:avoid!important;box-shadow:none!important}
}

@media(max-width:760px){
  .form-modal .modal-head{padding:21px 16px 19px}.form-modal .modal-head h2{font-size:27px}.form-modal .modal-head p{font-size:12px}
  .form-modal .form-body{padding:20px 15px 7px}.form-modal .field label{font-size:10px}.form-modal .control{font-size:16px;min-height:49px}
  .form-modal .modal-actions{padding:14px 15px}.summary-strip{gap:7px}.summary-chip{font-size:11px}.serial-summary{max-width:100%}.support-lookup-btn{padding:8px 10px;font-size:8px}
}

/* ==============================================================
   v6.5 MOBILE APP MODE
   ============================================================= */
.app-boot{position:fixed;inset:0;z-index:12000;background:linear-gradient(160deg,#070a0f 0%,#0b1420 55%,#0b223d 115%);display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;transition:opacity .22s ease,visibility .22s ease}.app-boot.done{opacity:0;visibility:hidden;pointer-events:none}.app-boot-logo{width:94px;height:94px;border-radius:24px;padding:5px;background:rgba(11,34,61,.72);border:1px solid rgba(95,171,255,.3);box-shadow:0 0 42px rgba(37,133,255,.22)}.app-boot-logo img{width:100%;height:100%;object-fit:contain}.app-boot-name{margin-top:18px;font-size:18px;font-weight:850;letter-spacing:.12em}.app-boot-sub{margin-top:8px;font-size:8px;color:#aebfd2;letter-spacing:.28em;font-weight:750}.app-boot-bars{display:flex;gap:3px;align-items:center;height:27px;margin-top:16px}.app-boot-bars i{width:3px;border-radius:4px;background:var(--acid);animation:bootBars .85s ease-in-out infinite}.app-boot-bars i:nth-child(1){height:8px}.app-boot-bars i:nth-child(2){height:19px;animation-delay:-.2s}.app-boot-bars i:nth-child(3){height:27px;animation-delay:-.4s}.app-boot-bars i:nth-child(4){height:15px;animation-delay:-.6s}.app-boot-bars i:nth-child(5){height:10px;animation-delay:-.1s}@keyframes bootBars{50%{transform:scaleY(.35);opacity:.45}}
.mobile-tabbar,.install-app-chip{display:none}.sheet-grabber{display:none}

@media(max-width:760px){
  html{background:#eef1f4;overscroll-behavior-y:none}
  body{background:#eef1f4;padding-bottom:calc(82px + env(safe-area-inset-bottom));overscroll-behavior-y:none;-webkit-overflow-scrolling:touch;touch-action:pan-y}
  body.is-standalone{padding-top:env(safe-area-inset-top)}
  .site-header{position:sticky;top:0;background:rgba(8,12,18,.96);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border-bottom-color:rgba(64,115,168,.34)}
  .site-header-inner{min-height:62px;padding:7px 12px;gap:8px}.brand-link{gap:9px}.brand-logo{width:48px;height:48px;border-radius:13px}.brand-copy strong{font-size:13px;letter-spacing:.07em}.brand-copy small{display:none}.brand-riff{display:none}.header-actions{display:none!important}
  .dashboard{padding:15px 12px 28px}.asset-value-overview{min-height:92px;padding:16px 17px;border-radius:18px}.asset-value-copy b{font-size:29px}.asset-value-copy p{font-size:9px}.asset-value-icon{width:48px;height:48px;border-radius:14px;font-size:21px}.hero{display:block;margin-bottom:14px}.hero h1{font-size:30px;letter-spacing:-.045em;margin-top:6px}.hero h1 em{-webkit-text-stroke:0;color:var(--navy)}.eyebrow{font-size:7.5px;letter-spacing:.12em}.hero-sub{font-size:11px;margin-top:8px}.speed-badge{display:none}.hero-actions{display:none}
  .stats{display:flex;overflow-x:auto;gap:8px;margin:0 -12px 12px;padding:0 12px 7px;scroll-snap-type:x proximity;scrollbar-width:none}.stats::-webkit-scrollbar{display:none}.stat-card{flex:0 0 118px;min-height:78px;padding:13px;border-radius:17px;scroll-snap-align:start}.stat-card b{font-size:25px}.stat-card span{margin-top:8px;font-size:7px}
  .mini-analytics-wrap{padding:11px;margin-bottom:12px;border-radius:16px}.mini-analytics-head small{display:none}.mini-analytics-grid{display:flex;overflow-x:auto;gap:8px;scrollbar-width:none}.mini-analytics-grid::-webkit-scrollbar{display:none}.mini-analytics-card{flex:0 0 220px;min-height:86px;padding:12px}.mini-analytics-card>strong{font-size:17px}
  .toolbar{position:sticky;top:63px;z-index:60;margin:0 0 12px;padding:7px 10px;border-radius:15px;box-shadow:0 6px 22px rgba(8,20,33,.07)}.search input{font-size:16px;padding:9px 2px}.result-count{font-size:9px}
  .asset-grid{grid-template-columns:1fr;gap:9px}.asset-card{min-height:104px;padding:9px;grid-template-columns:104px minmax(0,1fr) auto;gap:11px;border-radius:18px;box-shadow:0 2px 10px rgba(12,30,50,.035)}.asset-card:hover{transform:none;box-shadow:0 2px 10px rgba(12,30,50,.035)}.asset-photo{width:104px;height:86px;border-radius:14px}.asset-kicker{font-size:7px}.asset-tag{font-size:17px;margin-top:4px}.asset-device{font-size:10px;margin-top:4px}.asset-meta{display:none}.asset-assigned{margin-top:7px;font-size:8px}.asset-assigned strong{font-size:13px}.asset-side strong{display:none}.status-pill{font-size:6.5px;padding:6px 7px}.asset-side{justify-content:flex-start}
  .detail-shell{padding:13px 10px 24px}.detail-top{display:block;margin-bottom:10px}.crumb{font-size:8px;margin-bottom:9px}.detail-actions{display:flex;overflow-x:auto;flex-wrap:nowrap;justify-content:flex-start;gap:7px;padding-bottom:4px;scrollbar-width:none}.detail-actions::-webkit-scrollbar{display:none}.detail-actions .btn{flex:0 0 auto;min-height:39px;padding:9px 11px;font-size:8px}.detail-actions .js-dashboard-link{display:none}.identity-card{display:block;padding:11px;border-radius:20px;margin-bottom:10px}.detail-photo{height:min(58vw,270px);border-radius:17px}.photo-note{font-size:8px}.asset-title{font-size:36px;margin-top:13px}.asset-id{font-size:10px}.summary-strip{flex-wrap:nowrap;overflow-x:auto;padding-bottom:5px;margin-right:-11px;scrollbar-width:none}.summary-strip::-webkit-scrollbar{display:none}.summary-chip{flex:0 0 auto;font-size:10px;padding:8px 10px}.detail-grid{grid-template-columns:1fr;gap:9px}.info-card,.info-card.full{grid-column:auto;border-radius:17px;padding:14px}.info-title{font-size:15px}.info-row{grid-template-columns:118px minmax(0,1fr);gap:9px;padding:9px 0}.info-label{font-size:9px}.info-value{font-size:11px}
  .modal{padding:0!important;align-items:flex-end!important;overscroll-behavior:contain}.modal-box,.delete-box,.qr-box,.bulk-qr-box,.guard-box{width:100%!important;max-width:none!important;max-height:93dvh!important;border-radius:24px 24px 0 0!important;border-bottom:0!important;box-shadow:0 -18px 70px rgba(0,0,0,.38)!important}.modal-head{padding-top:16px}.modal-head:after,.sheet-grabber{content:"";display:block;position:absolute;left:50%;top:7px;transform:translateX(-50%);width:42px;height:4px;border-radius:99px;background:#b7bec7}.modal-actions,.bulk-actions,.qr-actions{padding-bottom:calc(14px + env(safe-area-inset-bottom))}.control{border-radius:13px}.form-grid{gap:12px}
  .mobile-tabbar{position:fixed;left:0;right:0;bottom:0;z-index:3500;display:grid;grid-template-columns:repeat(5,1fr);align-items:end;padding:7px 8px calc(7px + env(safe-area-inset-bottom));background:rgba(8,12,18,.96);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-top:1px solid rgba(82,126,172,.34);box-shadow:0 -8px 28px rgba(6,16,28,.18)}.mobile-tab{appearance:none;border:0;background:transparent;color:#aeb9c5;text-decoration:none;min-height:50px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;font-size:7px;font-weight:800;letter-spacing:.07em}.mobile-tab b{font-size:20px;line-height:1;color:#dce7f2;font-weight:500}.mobile-tab:active{transform:scale(.94)}.mobile-scan{width:58px;height:58px;min-height:58px;justify-self:center;margin-top:-20px;border-radius:19px;background:linear-gradient(150deg,#173a63,#24588e);border:1px solid #3d77ae;box-shadow:0 8px 26px rgba(23,83,145,.4),inset 0 0 0 1px rgba(255,255,255,.07);color:#fff}.mobile-scan b{font-size:23px}.mobile-scan span{color:#fff}
  .install-app-chip{position:fixed;right:12px;bottom:calc(82px + env(safe-area-inset-bottom));z-index:3400;display:block;border:1px solid #35618f;background:#0b223d;color:#fff;border-radius:999px;padding:9px 12px;font-size:8px;font-weight:850;letter-spacing:.08em;box-shadow:0 10px 24px rgba(7,22,39,.22)}.install-app-chip.hidden{display:none}.install-box{text-align:center;padding:20px 18px calc(18px + env(safe-area-inset-bottom))!important;position:relative}.install-logo{width:74px;height:74px;margin:10px auto 10px}.install-logo img{width:100%;height:100%;object-fit:contain}.install-box h2{font-size:24px;margin:5px 0}.install-box p{font-size:12px;color:#6d7680;line-height:1.5}.install-steps{margin:14px 0 18px;padding:14px;border-radius:14px;background:#fff;border:1px solid var(--line);display:flex;flex-direction:column;gap:5px;text-align:left}.install-steps b{font-size:10px;color:var(--navy);letter-spacing:.08em}.install-steps span{font-size:13px}.install-box .guard-actions{padding:0;background:transparent;border:0}
  body.is-standalone .install-app-chip{display:none!important}
}
/* ==============================================================
   v6.10.6 — LIGHT / DARK APPEARANCE
   ============================================================== */
.theme-toggle{height:40px;display:inline-flex;align-items:center;gap:7px;padding:0 12px;border-radius:11px;border:1px solid #35506d;background:#0b1928;color:#dcecff;cursor:pointer;font-size:8px;font-weight:900;letter-spacing:.08em;transition:.14s}.theme-toggle:hover{border-color:#6da5d6;background:#10253a}.theme-toggle span{font-size:14px;line-height:1}
html[data-theme="dark"]{--ink:#eaf4ff;--paper:#050b14;--card:#091522;--muted:#7890a8;--line:#1b344d;--navy:#5aaeff;--navy-deep:#081a2c;--navy-mid:#1f5d96;--navy-soft:#0b1a29;--shadow:0 14px 40px rgba(0,0,0,.24)}
html[data-theme="dark"] body{background:linear-gradient(180deg,#07111d 0%,#050b14 52%,#040a12 100%);color:var(--ink)}
html[data-theme="dark"] .hero h1 em{-webkit-text-stroke:1px #b9d8f6;color:transparent}
html[data-theme="dark"] .hero-sub,html[data-theme="dark"] .info-label,html[data-theme="dark"] .crumb,html[data-theme="dark"] .asset-id,html[data-theme="dark"] .updated-line{color:#7f96ac}
html[data-theme="dark"] .speed-badge,html[data-theme="dark"] .toolbar,html[data-theme="dark"] .filter-reset,html[data-theme="dark"] .stat-card,html[data-theme="dark"] .asset-card,html[data-theme="dark"] .identity-card,html[data-theme="dark"] .info-card,html[data-theme="dark"] .modal-box,html[data-theme="dark"] .guard-box,html[data-theme="dark"] .delete-box{background:#091522;color:#eaf4ff;border-color:#1d3a55}
html[data-theme="dark"] .toolbar,html[data-theme="dark"] .stat-card,html[data-theme="dark"] .asset-card,html[data-theme="dark"] .identity-card,html[data-theme="dark"] .info-card{box-shadow:none}
html[data-theme="dark"] .stat-card:hover,html[data-theme="dark"] .stat-card.active{background:#0d2a46;border-color:#3c75a8}
html[data-theme="dark"] .mini-analytics-wrap{background:#07121e;border-color:#1d3a55;box-shadow:none}html[data-theme="dark"] .mini-analytics-head span{color:#9bc9f2}html[data-theme="dark"] .mini-analytics-head small{color:#6f879d}html[data-theme="dark"] .mini-analytics-card{background:#091522;border-color:#1d3a55}html[data-theme="dark"] .mini-analytics-card>small{color:#6e91b1}html[data-theme="dark"] .mini-analytics-card>strong{color:#e7f4ff}html[data-theme="dark"] .mini-analytics-card>p{color:#71879b}html[data-theme="dark"] .mini-bar{color:#8ca3b8}html[data-theme="dark"] .mini-bar i{background:#14283a}html[data-theme="dark"] .mini-bar i:after{background:linear-gradient(90deg,#2e6b9e,#75b9f2)}html[data-theme="dark"] .mini-bar em{color:#b7dcff}html[data-theme="dark"] .mini-metric{background:#0b1b2a;border-color:#213e58;color:#819ab1}html[data-theme="dark"] .mini-metric b{color:#c8e6ff}
/* v6.10.17 premium analytics */
.mini-analytics-wrap{position:relative;overflow:hidden;background:linear-gradient(145deg,rgba(255,255,255,.92),rgba(244,248,251,.88));box-shadow:0 14px 32px rgba(13,42,68,.07)}.mini-analytics-wrap:before{content:"";position:absolute;inset:-50% 58% -50% -20%;background:linear-gradient(110deg,transparent,rgba(71,142,201,.07),transparent);transform:translateX(-80%);animation:webAnalyticsSweep 9s ease-in-out infinite;pointer-events:none}@keyframes webAnalyticsSweep{0%,62%{transform:translateX(-80%)}86%,100%{transform:translateX(250%)}}
.mini-analytics-card{position:relative;min-height:124px;border-radius:17px;background:radial-gradient(circle at 92% 4%,rgba(44,128,198,.08),transparent 38%),linear-gradient(145deg,#fff,#f7fafc);box-shadow:0 8px 22px rgba(14,46,74,.055);transition:transform .16s ease,box-shadow .16s ease}.mini-analytics-card:hover{transform:translateY(-2px);box-shadow:0 13px 28px rgba(14,46,74,.09)}.mini-analytics-card-top{display:flex;align-items:flex-start;justify-content:space-between;gap:10px}.mini-analytics-glyph{width:34px;height:34px;border-radius:11px;display:grid;place-items:center;border:1px solid #c5d8e6;background:#edf6fc;color:#255e8d;font-size:15px}.mini-analytics-card>strong,.mini-analytics-card-top strong{font-size:21px}.mini-age-meter{height:9px;display:flex;overflow:hidden;margin-top:13px;border-radius:999px;background:#e4edf3;border:1px solid #d6e1e8}.mini-age-meter i:nth-child(1){background:#54cc86}.mini-age-meter i:nth-child(2){background:#4c9fdd}.mini-age-meter i:nth-child(3){background:#8f73de}.mini-health-layout{display:grid;grid-template-columns:92px minmax(0,1fr);gap:14px;align-items:center}.mini-health-ring{width:84px;height:84px;border-radius:50%;background:conic-gradient(#43d67d 0 var(--health-deg),#dbe6ed var(--health-deg) 360deg);display:grid;place-items:center;position:relative}.mini-health-ring:after{content:"";position:absolute;inset:9px;border-radius:50%;background:#fff;border:1px solid #d8e3eb}.mini-health-ring div{position:relative;z-index:1;text-align:center}.mini-health-ring b{display:block;font-size:19px;color:#143750}.mini-health-ring span{display:block;margin-top:2px;font-size:6px;letter-spacing:.14em;font-weight:900;color:#4ba673}.mini-health-copy{min-width:0}.mini-health-copy strong{display:block;font-size:16px;color:#102a44}.mini-health-copy p{margin:4px 0 0;font-size:8px;color:#7e8e9b}.mini-bar i:after{box-shadow:0 0 9px rgba(68,143,204,.22)}
html[data-theme="dark"] .mini-analytics-wrap{background:linear-gradient(145deg,#06111d,#081827);border-color:#20425f;box-shadow:0 14px 34px rgba(0,0,0,.19)}html[data-theme="dark"] .mini-analytics-card{background:radial-gradient(circle at 92% 4%,rgba(61,151,226,.13),transparent 38%),linear-gradient(145deg,#081522,#091a2b);border-color:#21445f;box-shadow:0 10px 26px rgba(0,0,0,.15)}html[data-theme="dark"] .mini-analytics-glyph{background:#0c2944;border-color:#2b587d;color:#86caff}html[data-theme="dark"] .mini-age-meter{background:#10283b;border-color:#1f435d}html[data-theme="dark"] .mini-health-ring{background:conic-gradient(#54e88a 0 var(--health-deg),#173149 var(--health-deg) 360deg)}html[data-theme="dark"] .mini-health-ring:after{background:#091624;border-color:#21425d}html[data-theme="dark"] .mini-health-ring b{color:#e9fff0}html[data-theme="dark"] .mini-health-ring span{color:#67dc96}html[data-theme="dark"] .mini-health-copy strong{color:#e5f3ff}html[data-theme="dark"] .mini-health-copy p{color:#71889d}
@media(max-width:720px){.mini-analytics-grid{display:grid;grid-template-columns:1fr;overflow:visible}.mini-analytics-card{min-height:112px}.mini-health-layout{grid-template-columns:84px minmax(0,1fr)}}

html[data-theme="dark"] .asset-filterbar{background:#07131f;border-color:#1b344d}
html[data-theme="dark"] .filter-field select,html[data-theme="dark"] .control,html[data-theme="dark"] .search input,html[data-theme="dark"] .custom-other-control{background:#07111d;color:#eaf4ff;border-color:#284764}
html[data-theme="dark"] .filter-reset{color:#a9d0f3}
html[data-theme="dark"] .search{color:#7697b6}
html[data-theme="dark"] .asset-device,html[data-theme="dark"] .asset-meta,html[data-theme="dark"] .asset-assigned,html[data-theme="dark"] .notes-value{color:#8aa0b5}
html[data-theme="dark"] .asset-assigned strong,html[data-theme="dark"] .asset-tag,html[data-theme="dark"] .info-title,html[data-theme="dark"] .info-value{color:#edf6ff}
html[data-theme="dark"] .detail-photo{background:#081a2c}
html[data-theme="dark"] .asset-photo img,html[data-theme="dark"] .photo-preview img,html[data-theme="dark"] .detail-photo img{background:linear-gradient(145deg,#0b1b2b,#0a1623)}
html[data-theme="dark"] .summary-chip{background:#081522;border-color:#264661;color:#bcd2e7}
html[data-theme="dark"] .info-row,html[data-theme="dark"] .summary-strip,html[data-theme="dark"] .info-title{border-color:#183049}
html[data-theme="dark"] .modal-head,html[data-theme="dark"] .modal-actions,html[data-theme="dark"] .delete-actions{background:rgba(7,17,29,.97);border-color:#1b344d}
html[data-theme="dark"] .field label,html[data-theme="dark"] .modal-head p,html[data-theme="dark"] .quick-help{color:#7890a8}
html[data-theme="dark"] .x-btn{background:#0a1725;color:#eaf4ff;border-color:#31506d}
html[data-theme="dark"] .brand-option-chip{background:#081522;color:#a6bdd3;border-color:#294861}
html[data-theme="dark"] .brand-option-chip.selected{background:#0d2b49;color:#d9eeff;border-color:#4c88bc}
html[data-theme="dark"] .brand-option-logo,html[data-theme="dark"] .brand-select-logo,html[data-theme="dark"] .detail-brand-logo,html[data-theme="dark"] .card-brand-mini{background:#f6fbff}
html[data-theme="dark"] .quick-status-menu{background:#081522;border-color:#2a4a68;color:#eaf4ff}
html[data-theme="dark"] .quick-status-title{color:#7594b2;border-color:#1d354e}
html[data-theme="dark"] .empty-state{color:#7890a8}
html[data-theme="dark"] .photo-upload-row,html[data-theme="dark"] .photo-note{color:#7792ad}
html[data-theme="dark"] .qr-ready-note{background:#081b16;border-color:#226342;color:#71e89a}
.qr-health-chip{cursor:pointer;font-family:inherit}.qr-health-chip.good{border-color:#2f7d54!important;color:#86f2b1!important}.qr-health-chip.bad{border-color:#a46032!important;color:#ffbd86!important}
@media(max-width:760px){.theme-toggle{height:37px;padding:0 9px}.theme-toggle b{display:none}}


/* v6.10.18 — premium analytics / crypto value polish */
.asset-value-overview{background:radial-gradient(circle at 82% 14%,rgba(70,185,255,.22),transparent 28%),radial-gradient(circle at 18% 120%,rgba(92,255,181,.11),transparent 34%),linear-gradient(125deg,#06121f,#07233c 52%,#0a3150)!important;border-color:#2d6c9e!important;box-shadow:0 18px 44px rgba(6,35,63,.22),0 0 0 1px rgba(115,202,255,.05) inset!important}.asset-value-copy small{color:#8fd2ff!important}.asset-value-copy b{text-shadow:0 0 20px rgba(103,196,255,.18)}.asset-value-spark{display:flex;align-items:end;gap:4px;height:18px;margin:10px 0 9px}.asset-value-spark i{display:block;width:5px;border-radius:5px;background:linear-gradient(#8fe9ff,#49adff);box-shadow:0 0 9px rgba(78,183,255,.3)}.asset-value-spark i:nth-child(1){height:5px}.asset-value-spark i:nth-child(2){height:10px}.asset-value-spark i:nth-child(3){height:7px}.asset-value-spark i:nth-child(4){height:15px}.asset-value-spark i:nth-child(5){height:11px}.asset-value-spark i:nth-child(6){height:18px}.asset-value-breakdown{display:flex;gap:7px;flex-wrap:wrap}.asset-value-breakdown span{display:inline-flex;align-items:center;gap:8px;padding:6px 9px;border:1px solid rgba(121,198,255,.2);background:rgba(4,18,30,.38);border-radius:999px;backdrop-filter:blur(8px)}.asset-value-breakdown b{margin:0!important;font-size:7px!important;letter-spacing:.04em!important;color:#8baac3!important}.asset-value-breakdown em{font-style:normal;font-size:8px;font-weight:900;color:#d9f1ff}.asset-value-icon{width:72px!important;height:72px!important;border-radius:22px!important;display:flex!important;flex-direction:column!important;gap:3px!important}.asset-value-icon span{font-size:28px}.asset-value-icon em{font-style:normal;font-size:6px;letter-spacing:.18em;color:#7fe8ae;font-weight:900}.brand-leader-title{display:flex!important;align-items:center;gap:9px}.analytics-leader-logo,.analytics-brand-logo{display:grid;place-items:center;background:#fff;border:1px solid #cbd9e3;overflow:hidden}.analytics-leader-logo{width:42px;height:32px;border-radius:9px}.analytics-brand-logo{width:26px;height:20px;border-radius:6px}.analytics-leader-logo img,.analytics-brand-logo img{width:82%;height:72%;object-fit:contain}.analytics-leader-logo span,.analytics-brand-logo span{color:#183a59;font-size:6px;font-weight:900}.mini-bar.premium{grid-template-columns:18px 26px minmax(62px,auto) minmax(100px,1fr) 24px!important;gap:7px!important}.mini-bar.premium .rank{font-size:6px;color:#6e8aa4;font-weight:900}.mini-bar.premium i{height:8px!important;position:relative;background:linear-gradient(90deg,#dfeaf2,#edf4f8)!important}.mini-bar.premium i:after{background:linear-gradient(90deg,#1766a5,#49a8ed 68%,#87ddff)!important}.mini-bar.premium i u{position:absolute;inset:1px auto 1px 2px;width:18%;border-radius:999px;background:rgba(255,255,255,.32);z-index:2;text-decoration:none}.age-missing{border-color:#e2a0a4!important;background:#fff1f1!important;color:#a5454b!important}.age-missing b{color:#c52f3c!important}html[data-theme="dark"] .age-missing{border-color:#693740!important;background:#261116!important;color:#ff929a!important}html[data-theme="dark"] .age-missing b{color:#ff8b95!important}html[data-theme="dark"] .analytics-leader-logo,html[data-theme="dark"] .analytics-brand-logo{background:#fff!important;border-color:#4b6780!important}.mini-analytics-card-top strong{font-size:22px!important}.mini-bar.premium b{font-size:8px!important}


/* ================================================================
   v6.10.22 — FINAL MINIMAL PORTFOLIO + QR ISSUE DROPDOWN
   Scoped IDs/classes intentionally override older experimental rules.
   ================================================================ */
#assetValueOverview.asset-value-overview{
  min-height:126px!important;
  padding:18px 20px!important;
  grid-template-columns:minmax(0,1fr) 96px!important;
  gap:18px!important;
  align-items:center!important;
  border-radius:22px!important;
  background:
    radial-gradient(circle at 78% -20%,rgba(77,187,255,.16),transparent 33%),
    linear-gradient(120deg,#061522 0%,#08263e 55%,#0a3150 100%)!important;
  border:1px solid rgba(76,155,211,.62)!important;
  box-shadow:0 14px 34px rgba(4,27,49,.16),inset 0 1px 0 rgba(255,255,255,.035)!important;
  overflow:hidden!important;
}
#assetValueOverview.asset-value-overview:after{
  content:""!important;
  display:none!important;
}
#assetValueOverview .asset-value-copy{min-width:0!important}
#assetValueOverview #webAssetValueLabel{
  font-size:8px!important;
  line-height:1!important;
  letter-spacing:.17em!important;
  font-weight:950!important;
  color:#8bcfff!important;
}
#assetValueOverview #webTotalAssetValue{
  margin-top:7px!important;
  font-size:37px!important;
  line-height:.96!important;
  letter-spacing:-.035em!important;
  color:#f6fbff!important;
  text-shadow:0 0 18px rgba(86,188,255,.15)!important;
}
#assetValueOverview .asset-value-spark{
  height:12px!important;
  margin:7px 0 9px!important;
  gap:3px!important;
}
#assetValueOverview .asset-value-spark i{width:3px!important;box-shadow:0 0 7px rgba(78,183,255,.24)!important}

/* Web-only category switcher: compact control row, never giant tiles. */
#webAssetValueBreakdown.asset-value-breakdown{
  display:flex!important;
  flex-wrap:wrap!important;
  align-items:center!important;
  gap:7px!important;
  margin:0!important;
  max-width:1120px!important;
}
#webAssetValueBreakdown > button.web-value-chip{
  all:unset;
  box-sizing:border-box!important;
  position:relative!important;
  min-width:118px!important;
  max-width:190px!important;
  height:42px!important;
  padding:6px 9px!important;
  display:grid!important;
  grid-template-columns:27px minmax(0,1fr) 6px!important;
  align-items:center!important;
  gap:7px!important;
  border:1px solid rgba(111,185,233,.24)!important;
  border-radius:12px!important;
  background:rgba(4,20,33,.46)!important;
  color:#e9f7ff!important;
  cursor:pointer!important;
  user-select:none!important;
  -webkit-user-select:none!important;
  box-shadow:inset 0 1px 0 rgba(255,255,255,.025)!important;
  transition:transform .15s ease,border-color .15s ease,background .15s ease,box-shadow .15s ease!important;
}
#webAssetValueBreakdown > button.web-value-chip:hover{
  transform:translateY(-1px)!important;
  border-color:rgba(113,205,255,.52)!important;
  background:rgba(7,34,54,.72)!important;
  box-shadow:0 7px 16px rgba(0,68,108,.12),0 0 14px rgba(79,190,255,.07)!important;
}
#webAssetValueBreakdown > button.web-value-chip.active{
  border-color:#68d1ff!important;
  background:linear-gradient(145deg,rgba(13,67,101,.90),rgba(6,38,62,.94))!important;
  box-shadow:0 0 0 1px rgba(122,219,255,.06) inset,0 0 16px rgba(75,188,248,.14)!important;
}
#webAssetValueBreakdown .web-value-chip-icon{
  all:unset;
  box-sizing:border-box!important;
  width:27px!important;
  height:27px!important;
  display:grid!important;
  place-items:center!important;
  border-radius:8px!important;
  border:1px solid rgba(126,204,247,.18)!important;
  background:rgba(86,172,224,.08)!important;
  color:#8edfff!important;
}
#webAssetValueBreakdown .web-value-chip-icon svg{
  width:15px!important;
  height:15px!important;
  fill:none!important;
  stroke:currentColor!important;
  stroke-width:1.8!important;
  stroke-linecap:round!important;
  stroke-linejoin:round!important;
}
#webAssetValueBreakdown .web-value-chip-copy{
  all:unset;
  min-width:0!important;
  display:grid!important;
  gap:3px!important;
  align-content:center!important;
}
#webAssetValueBreakdown .web-value-chip-copy strong{
  all:unset;
  display:block!important;
  min-width:0!important;
  overflow:hidden!important;
  text-overflow:ellipsis!important;
  white-space:nowrap!important;
  font-size:8px!important;
  line-height:1!important;
  font-weight:900!important;
  letter-spacing:.02em!important;
  color:#a9c7dc!important;
}
#webAssetValueBreakdown .web-value-chip-copy em{
  all:unset;
  display:block!important;
  font-size:10px!important;
  line-height:1!important;
  font-weight:950!important;
  letter-spacing:-.01em!important;
  color:#f2fbff!important;
}
#webAssetValueBreakdown .web-value-chip-led{
  all:unset;
  box-sizing:border-box!important;
  width:6px!important;
  height:6px!important;
  border-radius:50%!important;
  background:#3c5b71!important;
}
#webAssetValueBreakdown .web-value-chip.active .web-value-chip-led{
  background:#65efad!important;
  box-shadow:0 0 0 3px rgba(101,239,173,.07),0 0 10px rgba(101,239,173,.38)!important;
}

/* One clean THB badge. No category text here, so it cannot overlap. */
#webAssetValueHeroIcon.portfolio-thb-mark{
  position:relative!important;
  z-index:1!important;
  width:86px!important;
  height:76px!important;
  display:grid!important;
  grid-template-columns:42px 1fr!important;
  align-items:center!important;
  gap:8px!important;
  padding:8px!important;
  border-radius:18px!important;
  border:1px solid rgba(104,199,248,.25)!important;
  background:linear-gradient(145deg,rgba(7,42,68,.88),rgba(5,27,45,.90))!important;
  box-shadow:inset 0 1px 0 rgba(255,255,255,.035),0 0 22px rgba(54,176,239,.10)!important;
}
.portfolio-thb-coin{
  width:42px!important;
  height:42px!important;
  display:grid!important;
  place-items:center!important;
  border-radius:14px!important;
  border:1px solid rgba(142,224,255,.29)!important;
  background:radial-gradient(circle at 32% 25%,rgba(178,240,255,.25),transparent 35%),linear-gradient(145deg,#0e5682,#082e4e)!important;
  color:#b7efff!important;
  font-size:23px!important;
  line-height:1!important;
  font-weight:1000!important;
  text-shadow:0 0 12px rgba(102,220,255,.38)!important;
  box-shadow:0 0 17px rgba(82,199,255,.22)!important;
  animation:thbPulseV61022 3.8s ease-in-out infinite!important;
}
.portfolio-thb-copy{display:grid!important;gap:4px!important;align-content:center!important;min-width:0!important}
.portfolio-thb-copy strong{font-size:9px!important;line-height:1!important;letter-spacing:.08em!important;color:#edf9ff!important}
.portfolio-thb-copy small{font-size:6px!important;line-height:1!important;letter-spacing:.14em!important;font-weight:900!important;color:#6be7a6!important}
@keyframes thbPulseV61022{0%,100%{transform:scale(1);box-shadow:0 0 15px rgba(82,199,255,.18)}50%{transform:scale(1.035);box-shadow:0 0 23px rgba(82,199,255,.31)}}

/* Light theme keeps the same minimal proportions. */
html:not([data-theme="dark"]) #assetValueOverview.asset-value-overview{
  background:radial-gradient(circle at 78% -20%,rgba(65,153,210,.10),transparent 33%),linear-gradient(120deg,#f8fbfd,#eaf3f8)!important;
  border-color:#a9c8dc!important;
  box-shadow:0 12px 28px rgba(27,66,95,.08)!important;
}
html:not([data-theme="dark"]) #assetValueOverview #webTotalAssetValue{color:#0c2134!important;text-shadow:none!important}
html:not([data-theme="dark"]) #assetValueOverview #webAssetValueLabel{color:#39779f!important}
html:not([data-theme="dark"]) #webAssetValueBreakdown > button.web-value-chip{border-color:#c7d7e2!important;background:rgba(255,255,255,.72)!important;color:#15364f!important;box-shadow:0 4px 12px rgba(20,55,80,.035)!important}
html:not([data-theme="dark"]) #webAssetValueBreakdown > button.web-value-chip:hover{border-color:#83b6d3!important;background:#fff!important}
html:not([data-theme="dark"]) #webAssetValueBreakdown > button.web-value-chip.active{border-color:#5ca8d2!important;background:linear-gradient(145deg,#edf7fd,#dfedf6)!important;box-shadow:0 7px 15px rgba(26,83,120,.07)!important}
html:not([data-theme="dark"]) #webAssetValueBreakdown .web-value-chip-icon{border-color:#cadbe6!important;background:#eef5f9!important;color:#27698f!important}
html:not([data-theme="dark"]) #webAssetValueBreakdown .web-value-chip-copy strong{color:#58748a!important}
html:not([data-theme="dark"]) #webAssetValueBreakdown .web-value-chip-copy em{color:#123d5d!important}
html:not([data-theme="dark"]) #webAssetValueHeroIcon.portfolio-thb-mark{border-color:#abc9dc!important;background:linear-gradient(145deg,#f6fbfe,#e2eff7)!important;box-shadow:0 8px 18px rgba(29,72,103,.07)!important}
html:not([data-theme="dark"]) .portfolio-thb-coin{border-color:#a8cee3!important;background:radial-gradient(circle at 32% 25%,#fff,transparent 38%),linear-gradient(145deg,#dceffa,#add8ec)!important;color:#175b80!important;text-shadow:none!important;box-shadow:0 7px 15px rgba(35,99,139,.10)!important;animation:none!important}
html:not([data-theme="dark"]) .portfolio-thb-copy strong{color:#173c57!important}
html:not([data-theme="dark"]) .portfolio-thb-copy small{color:#168a61!important}

/* QR Health dropdown */
.qr-health-wrap{position:relative;display:inline-flex;align-items:center}
.qr-health-popover{
  position:absolute;
  top:calc(100% + 10px);
  right:0;
  z-index:120;
  width:min(430px,calc(100vw - 28px));
  max-height:min(560px,72vh);
  display:grid;
  grid-template-rows:auto auto minmax(0,1fr);
  border:1px solid #294b68;
  border-radius:18px;
  background:rgba(6,18,31,.985);
  color:#e9f6ff;
  box-shadow:0 22px 54px rgba(0,0,0,.34),0 0 0 1px rgba(97,176,234,.04) inset;
  overflow:hidden;
  backdrop-filter:blur(18px);
}
.qr-health-popover.hidden{display:none!important}
.qr-health-popover-head{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:15px 15px 8px}
.qr-health-popover-head small{display:block;font-size:7px;letter-spacing:.17em;font-weight:900;color:#70a5ce}
.qr-health-popover-head strong{display:block;margin-top:5px;font-size:16px;letter-spacing:-.02em;color:#f3faff}
.qr-health-close{width:32px;height:32px;border-radius:10px;border:1px solid #2d4c67;background:#091827;color:#bdd8ec;font:700 19px/1 inherit;cursor:pointer}
.qr-health-popover-sub{padding:0 15px 11px;color:#7894aa;font-size:9px;border-bottom:1px solid #182e42}
.qr-health-list{min-height:80px;overflow:auto;padding:8px;display:grid;gap:7px}
.qr-health-loading,.qr-health-empty{padding:22px 12px;text-align:center;color:#7390a8;font-size:9px;letter-spacing:.08em}
.qr-health-item{
  appearance:none;width:100%;display:grid;grid-template-columns:48px minmax(0,1fr) auto;gap:10px;align-items:center;
  padding:9px;border:1px solid #1f3c55;border-radius:13px;background:#081522;color:#eaf5ff;text-align:left;cursor:pointer;
  transition:transform .14s ease,border-color .14s ease,background .14s ease;
}
.qr-health-item:hover{transform:translateY(-1px);border-color:#47789e;background:#0a1c2d}
.qr-health-thumb{width:48px;height:48px;border-radius:10px;border:1px solid #294a65;background:#fff;overflow:hidden;display:grid;place-items:center}
.qr-health-thumb img{width:100%;height:100%;object-fit:contain;background:#fff}
.qr-health-thumb .analytics-brand-logo{width:38px!important;height:30px!important;border:0!important;box-shadow:none!important}
.qr-health-copy{min-width:0;display:grid;gap:3px}
.qr-health-copy strong{font-size:11px;line-height:1.1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.qr-health-copy span{font-size:8px;color:#88a5bc;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.qr-health-copy em{font-style:normal;font-size:7.5px;line-height:1.25;color:#6f8aa0;white-space:normal;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.qr-health-severity{align-self:start;padding:5px 7px;border-radius:999px;font-size:6.5px;letter-spacing:.08em;font-weight:950;border:1px solid #405267;color:#9eb3c4}
.qr-health-item.critical .qr-health-severity{border-color:#824a35;background:#271811;color:#ffc18d}
.qr-health-item.warning .qr-health-severity{border-color:#6a5f2d;background:#201e10;color:#ffe089}
html:not([data-theme="dark"]) .qr-health-popover{border-color:#b8cad8;background:rgba(250,252,253,.99);color:#0f273b;box-shadow:0 18px 42px rgba(24,57,81,.14)}
html:not([data-theme="dark"]) .qr-health-popover-head strong{color:#0f273b}
html:not([data-theme="dark"]) .qr-health-close{border-color:#c5d5e0;background:#fff;color:#355a75}
html:not([data-theme="dark"]) .qr-health-popover-sub{color:#657f93;border-color:#dfe8ee}
html:not([data-theme="dark"]) .qr-health-item{border-color:#d0dde6;background:#fff;color:#10293d}
html:not([data-theme="dark"]) .qr-health-item:hover{border-color:#92b6cd;background:#f6fafc}

@media(max-width:980px){
  #assetValueOverview.asset-value-overview{grid-template-columns:1fr!important}
  #webAssetValueHeroIcon.portfolio-thb-mark{display:none!important}
  #webAssetValueBreakdown.asset-value-breakdown{max-width:none!important}
}
@media(max-width:760px){
  #assetValueOverview.asset-value-overview{padding:15px!important;min-height:118px!important}
  #assetValueOverview #webTotalAssetValue{font-size:31px!important}
  #webAssetValueBreakdown > button.web-value-chip{min-width:108px!important;max-width:160px!important;height:40px!important}
  .qr-health-popover{position:fixed;left:12px;right:12px;top:76px;width:auto;max-height:70vh}
}
/* v6.10.24 — readable QR audit, contained header and centred scan result. */
.qr-health-popover{position:fixed!important;left:50%!important;right:auto!important;top:12vh!important;transform:translateX(-50%);width:min(900px,calc(100vw - 24px))!important;max-height:78vh!important;z-index:8000}
.qr-health-list{max-height:60vh;padding:12px;gap:10px}.qr-health-item{padding:14px;grid-template-columns:64px minmax(0,1fr) auto;gap:12px}.qr-health-thumb{width:64px;height:64px}.qr-health-copy strong{font-size:16px;line-height:1.3}.qr-health-copy span{font-size:12px;white-space:normal}.qr-health-copy em{display:block!important;-webkit-line-clamp:unset!important;font-size:13px;line-height:1.5;color:#a8bfd1;overflow:visible;overflow-wrap:anywhere}.qr-health-severity{font-size:10px}.qr-health-popover-sub{font-size:12px}
html:not([data-theme="dark"]) .qr-health-copy em{color:#426078}
.brand-link{min-width:0}.brand-logo{flex-shrink:0;overflow:hidden}.brand-logo:before{left:1px}.brand-logo:after{right:1px}.brand-riff{flex-shrink:0;max-width:65px;overflow:hidden}.brand-copy strong{font-size:clamp(12px,2.7vw,18px)}
.risp-scan-overlay{position:fixed;inset:0;z-index:9500;background:#03101bb8;backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);display:grid;place-items:center;padding:20px}.risp-scan-card{position:relative;width:min(560px,100%);max-height:86dvh;overflow:auto;border-radius:24px;background:var(--card,#fff);color:var(--ink,#172638);border:1px solid var(--line,#bccbd6);padding:28px;box-shadow:0 28px 90px #0006}.risp-scan-card h2{margin:12px 0}.risp-scan-photo{display:block;width:100%;height:240px;object-fit:contain;background:#edf2f6;border-radius:16px}.risp-scan-close{position:absolute;right:12px;top:10px;width:36px;height:36px;border:0;border-radius:50%;font-size:24px;cursor:pointer}.risp-scan-card code{display:block;overflow-wrap:anywhere}.risp-scan-actions{margin-top:20px}
@media(max-width:760px){.site-header-inner{flex-wrap:wrap}.brand-link{max-width:100%}.header-system-strip{max-width:100%;flex-wrap:wrap}.qr-health-item{grid-template-columns:48px minmax(0,1fr)}.qr-health-thumb{width:48px;height:48px}.qr-health-severity{grid-column:2;justify-self:start}.mobile-tabbar{padding-top:5px;padding-bottom:calc(5px + env(safe-area-inset-bottom));align-items:center}.mobile-tab{min-width:0;min-height:48px;gap:3px}.mobile-tab span{font-size:10px;letter-spacing:.02em}}
@media(prefers-reduced-motion:reduce){.brand-riff i,.brand-logo:before,.brand-logo:after{animation:none!important}}

/* v6.10.27 — premium live Detail surface */
.detail-shell{position:relative!important;isolation:isolate!important}
.detail-shell:before{content:"";position:absolute;z-index:-1;left:8%;right:8%;top:84px;height:260px;border-radius:50%;background:radial-gradient(ellipse,rgba(79,164,229,.13),transparent 68%);filter:blur(2px);pointer-events:none}
.identity-card{position:relative!important;overflow:hidden!important;background:linear-gradient(135deg,#fff 0%,#f6faff 54%,#edf5fa 100%)!important;border-color:#c9d9e6!important;box-shadow:0 22px 58px rgba(18,66,104,.13),0 0 0 1px rgba(95,174,231,.06) inset!important}
.identity-card:before{content:"";position:absolute;inset:0;pointer-events:none;opacity:.36;background:linear-gradient(115deg,transparent 0 52%,rgba(86,172,226,.12) 52.2%,transparent 52.8%),linear-gradient(0deg,transparent 0 86%,rgba(23,58,99,.06) 86.3%,transparent 86.8%)}
.identity-card:after{content:"RISP / LIVE ASSET PROFILE";position:absolute;right:24px;top:18px;color:#7aa7c8;font:850 7px system-ui;letter-spacing:.18em;pointer-events:none}
.identity-card>div{position:relative;z-index:1}
.detail-photo{border:1px solid #355d7f!important;box-shadow:0 16px 30px rgba(6,39,67,.20),0 0 0 4px rgba(255,255,255,.6)!important}
.detail-photo:after{content:"LIVE PHOTO";position:absolute;right:11px;top:11px;padding:5px 7px;border:1px solid rgba(145,210,255,.5);border-radius:999px;background:rgba(5,22,38,.72);color:#c9edff;font:850 7px system-ui;letter-spacing:.12em;pointer-events:none}
.detail-asset-kicker{display:flex!important;align-items:center;gap:8px}.detail-asset-kicker:before{content:"";width:24px;height:3px;border-radius:4px;background:var(--acid);box-shadow:0 0 12px rgba(217,255,63,.45)}
.asset-title{background:linear-gradient(105deg,#0d2239 12%,#216697 62%,#4c9bd0);-webkit-background-clip:text;background-clip:text;color:transparent;text-shadow:none}
.summary-strip{border-top-color:#cddde8!important}.summary-chip{border-color:#c8d8e4!important;background:rgba(255,255,255,.76)!important;box-shadow:0 4px 12px rgba(25,77,116,.05);transition:transform .15s ease,box-shadow .15s ease,border-color .15s ease}.summary-chip:hover{transform:translateY(-2px);border-color:#69a7d4!important;box-shadow:0 9px 18px rgba(31,102,157,.12)}
.info-card{border-color:#d0dde7!important;box-shadow:0 9px 24px rgba(21,69,104,.06);transition:transform .16s ease,box-shadow .16s ease,border-color .16s ease}.info-card:hover{transform:translateY(-2px);border-color:#8cb8d7!important;box-shadow:0 14px 30px rgba(21,89,136,.10)}
.photo-sync-badge{border:1px solid #5b8fb5!important;background:linear-gradient(90deg,#0b2238,#123c5b)!important;color:#d9f4ff!important;box-shadow:0 0 18px rgba(56,161,225,.18)}
html[data-theme="dark"] .identity-card{background:linear-gradient(135deg,#071522,#091d31 58%,#0a263d)!important;border-color:#214662!important;box-shadow:0 22px 58px rgba(0,0,0,.28),0 0 0 1px rgba(85,165,223,.08) inset!important}
html[data-theme="dark"] .identity-card:before{opacity:.22}html[data-theme="dark"] .identity-card:after{color:#639bc5}html[data-theme="dark"] .asset-title{background:linear-gradient(105deg,#eaf7ff 8%,#77c7ff 66%,#d3f5ff);-webkit-background-clip:text;background-clip:text;color:transparent}html[data-theme="dark"] .summary-strip{border-top-color:#1c3b56!important}html[data-theme="dark"] .summary-chip{background:rgba(8,24,39,.84)!important;border-color:#264b67!important}html[data-theme="dark"] .info-card{border-color:#20445f!important;box-shadow:0 12px 30px rgba(0,0,0,.16)}
@media(max-width:760px){.identity-card:after{right:14px;top:12px;font-size:6px}.detail-photo:after{right:9px;top:9px}.detail-shell:before{left:0;right:0;top:66px;height:210px}.info-card:hover{transform:none}}

.maintenance-summary-web{font-size:12px;color:#66829a;padding:10px 0}
.maintenance-list-web{display:grid;gap:10px}
.maintenance-web-empty{padding:18px;border:1px dashed #9fb3c3;border-radius:12px;color:#71879a}
.maintenance-web-record{border:1px solid #d9e2e8;border-radius:13px;padding:14px;background:#fbfdff}
.maintenance-web-record>div:first-child{display:flex;justify-content:space-between;gap:12px;font-size:11px;color:#44627b}
.maintenance-web-record>div:first-child span{border-radius:99px;background:#e7f3fb;padding:4px 8px}
.maintenance-web-record>strong{display:block;margin-top:7px;color:#102b43}
.maintenance-web-record p{font-size:12px;color:#51697d;margin:7px 0;overflow-wrap:anywhere}
.maintenance-web-record small{color:#536c80}
.maintenance-web-files{display:flex;flex-wrap:wrap;gap:8px;margin-top:9px}
.maintenance-web-files a{font-size:11px;color:#1473b8;text-decoration:none;border:1px solid #b9d5e8;border-radius:8px;padding:6px 8px}
[data-theme="dark"] .maintenance-web-record{background:#0b1b2b;border-color:#284761}
[data-theme="dark"] .maintenance-web-record>strong{color:#e4f2ff}
[data-theme="dark"] .maintenance-web-record p,[data-theme="dark"] .maintenance-web-record small{color:#9db3c7}
[data-theme="dark"] .maintenance-web-record>div:first-child{color:#9bc8e9}


html[lang="th"] body,html[lang="th"] button,html[lang="th"] input,html[lang="th"] select,html[lang="th"] textarea{
  font-family:"TH Sarabun New","TH SarabunPSK","Sarabun",Tahoma,sans-serif!important;
}
html[lang="th"] .info-title{font-size:21px;letter-spacing:0}
html[lang="th"] .info-label{font-size:15px;line-height:1.35}
html[lang="th"] .info-value{font-size:16px;line-height:1.4}
html[lang="th"] .info-row{padding:11px 0}
html[lang="th"] .web-language-menu{min-width:176px;padding:7px;background:#0c1b2b;border:1px solid #315779;border-radius:13px;box-shadow:0 18px 45px rgba(0,0,0,.42)}
html[lang="th"] .web-language-menu button{display:flex;align-items:center;gap:9px;width:100%;padding:10px 12px;border:0;border-radius:9px;background:transparent;color:#eaf4ff;font-family:inherit;font-size:15px;font-weight:700;text-align:left;cursor:pointer}
html[lang="th"] .web-language-menu button:hover,html[lang="th"] .web-language-menu button.selected{background:rgba(72,150,220,.2);color:#8ed0ff}
.web-language-menu{display:grid!important;gap:5px!important;min-width:176px!important;padding:7px!important;border:1px solid #315779!important;border-radius:13px!important;background:#0c1b2b!important;box-shadow:0 18px 45px rgba(0,0,0,.42)!important}
.web-language-menu[hidden]{display:none!important}
.web-language-menu button{display:flex!important;align-items:center!important;gap:9px!important;width:100%!important;padding:10px 12px!important;border:0!important;border-radius:9px!important;background:transparent!important;color:#eaf4ff!important;font-size:13px!important;font-weight:750!important;text-align:left!important;cursor:pointer!important}
.web-language-menu button:hover,.web-language-menu button.selected{background:rgba(72,150,220,.2)!important;color:#8ed0ff!important}

</style>
</head>
<body class="app-booting">
<div class="app-boot" id="appBoot" aria-live="polite">
  <div class="app-boot-logo"><img src="${RISP_LOGO_DATA_URI}" alt="RISP IT ASSET"></div>
  <div class="app-boot-name">RISP IT ASSET</div>
  <div class="app-boot-sub">SYNCING INVENTORY</div>
  <div class="app-boot-bars"><i></i><i></i><i></i><i></i><i></i></div>
</div>
<header class="site-header">
  <div class="site-header-inner">
    ${commonBrandHtml_(appUrl,false)}
    <div class="header-actions header-system-strip" id="headerDashboardActions">
      <span class="system-chip"><i></i> DATABASE LIVE</span>
      <span class="system-chip"><b id="headerAssetCount">${assets.length}</b> ASSETS</span>
      <span class="system-chip creator-chip">ENGINEERED BY <strong>NEWVANA</strong></span>
      <div class="qr-health-wrap" id="qrHealthWrap">
        <button class="system-chip qr-health-chip" id="qrHealthBtn" type="button" aria-expanded="false" aria-controls="qrHealthPopover">⌗ QR HEALTH</button>
        <div class="qr-health-popover hidden" id="qrHealthPopover" role="dialog" aria-label="QR integrity issues">
          <div class="qr-health-popover-head">
            <div><small>QR INTEGRITY</small><strong id="qrHealthPopoverTitle">CHECKING…</strong></div>
            <button type="button" class="qr-health-close" id="qrHealthCloseBtn" aria-label="Close">×</button>
          </div>
          <div class="qr-health-popover-sub" id="qrHealthPopoverSub">Checking live asset identifiers…</div>
          <div class="qr-health-list" id="qrHealthList"><div class="qr-health-loading">AUDITING LIVE DATABASE…</div></div>
        </div>
      </div>
      <div class="web-language-picker"><button class="system-chip web-language-toggle" type="button" data-risp-language-toggle aria-expanded="false"><span class="flag-icon flag-gb" data-web-lang-flag aria-hidden="true"></span><span data-web-lang-current>EN</span>⌄</button><div class="web-language-menu" hidden><button type="button" data-web-lang="en"><span class="flag-icon flag-gb" aria-hidden="true"></span>English</button><button type="button" data-web-lang="th"><span class="flag-icon flag-th" aria-hidden="true"></span>ไทย</button></div></div><button class="theme-toggle js-theme-toggle" type="button" aria-label="Toggle theme"><span>◐</span><b>THEME</b></button>
      <a class="btn ghost-dark" href="https://rispitmedia.github.io/RISP-IT-ASSET/v7/" target="_blank" rel="noopener">OPEN V7 ↗</a>
    </div>
    <div class="header-actions hidden" id="headerDetailActions">
      <span class="system-chip creator-chip">ENGINEERED BY <strong>NEWVANA</strong></span>
      <div class="web-language-picker"><button class="system-chip web-language-toggle" type="button" data-risp-language-toggle aria-expanded="false"><span class="flag-icon flag-gb" data-web-lang-flag aria-hidden="true"></span><span data-web-lang-current>EN</span>⌄</button><div class="web-language-menu" hidden><button type="button" data-web-lang="en"><span class="flag-icon flag-gb" aria-hidden="true"></span>English</button><button type="button" data-web-lang="th"><span class="flag-icon flag-th" aria-hidden="true"></span>ไทย</button></div></div><button class="theme-toggle js-theme-toggle" type="button" aria-label="Toggle theme"><span>◐</span><b>THEME</b></button>
      <a class="btn ghost-dark js-dashboard-link" href="${escapeHtml_(appUrl)}" target="_top">← DASHBOARD</a>
    </div>
  </div>
</header>

<nav class="mobile-tabbar" id="mobileTabbar" aria-label="Mobile navigation">
  <button type="button" class="mobile-tab" id="mHomeBtn"><b>⌂</b><span>HOME</span></button>
  <button type="button" class="mobile-tab" id="mSearchBtn"><b>⌕</b><span>SEARCH</span></button>
  <a class="mobile-tab mobile-scan" href="${escapeHtml_(scannerUrl)}" target="_top"><b>▣</b><span>SCAN</span></a>
  <button type="button" class="mobile-tab" id="mAddBtn"><b>＋</b><span>ADD</span></button>
  <button type="button" class="mobile-tab" id="mLabelsBtn"><b>▦</b><span>LABELS</span></button>
</nav>

<button type="button" class="install-app-chip hidden" id="installAppChip">＋ INSTALL APP</button>
<div class="modal install-sheet" id="installAppModal" aria-hidden="true">
  <div class="modal-box install-box">
    <div class="sheet-grabber"></div>
    <div class="install-logo"><img src="${RISP_LOGO_DATA_URI}" alt="RISP IT ASSET"></div>
    <h2>Install RISP IT ASSET</h2>
    <p id="installHelpText">Add this web app to your Home Screen. It will launch in its own app-style window.</p>
    <div class="install-steps" id="installSteps"><b>iPhone / iPad</b><span>Safari → Share → Add to Home Screen → Add</span></div>
    <div class="guard-actions">
      <button type="button" class="btn" id="closeInstallBtn">NOT NOW</button>
      <button type="button" class="btn navy hidden" id="nativeInstallBtn">INSTALL</button>
    </div>
  </div>
</div>

<main class="dashboard app-view hidden" id="dashboardView">
  <section class="hero">
    <div>
      <div class="eyebrow">TECHNOLOGY INVENTORY • VERSION.${escapeHtml_(SYSTEM_VERSION)} • ENGINEERED BY NEWVANA</div>
      <h1>Asset <em>Control.</em></h1>
      <div class="hero-sub"><span id="heroAssetCount">${assets.length}</span> devices connected to <strong>${escapeHtml_(SHEET_NAME)}</strong></div>
      <div class="speed-badge"><span class="speed-dot"></span>SPA FAST NAVIGATION</div>
    </div>
    <div class="hero-actions">
      <a class="btn dark" href="${escapeHtml_(scannerUrl)}" target="_top">▣ SCAN QR</a>
      <button class="btn navy" id="heroAddBtn" type="button">＋ ADD DEVICE</button>
      <button class="btn" id="heroBulkQrBtn" type="button">▦ PRINT QR</button>
    </div>
  </section>

  <section class="asset-value-overview" id="assetValueOverview">
    <div class="asset-value-copy"><small id="webAssetValueLabel">PORTFOLIO VALUE • LIVE</small><b id="webTotalAssetValue">฿0</b><div class="asset-value-spark"><i></i><i></i><i></i><i></i><i></i><i></i></div><div class="asset-value-breakdown" id="webAssetValueBreakdown"></div></div>
    <div class="portfolio-thb-mark" id="webAssetValueHeroIcon" aria-label="Thai Baht live portfolio value"><div class="portfolio-thb-coin">฿</div><div class="portfolio-thb-copy"><strong>THB</strong><small>LIVE</small></div></div>
  </section>

  <section class="mini-analytics-wrap" aria-label="Inventory analytics">
    <div class="mini-analytics-head"><span>LIVE ANALYTICS</span><small>Fast snapshot • updates with inventory</small></div>
    <div class="mini-analytics-grid" id="webMiniAnalytics"></div>
  </section>

  <section class="stats" id="stats"></section>

  <section class="toolbar">
    <div class="search">
      <span>⌕</span>
      <input id="searchInput" autocomplete="off" placeholder="Search Asset Tag, Serial, Libib, Brand, Model, Assigned To...">
    </div>
    <div class="result-count" id="resultCount">0 shown</div>
  </section>
  <section class="asset-filterbar" aria-label="Inventory filters and sorting">
    <div class="filter-field"><label>Brand</label><select id="filterBrand"><option value="">All brands</option></select></div>
    <div class="filter-field"><label>Department</label><select id="filterDepartment"><option value="">All departments</option></select></div>
    <div class="filter-field"><label>Status</label><select id="filterStatus"><option value="">All statuses</option></select></div>
    <div class="filter-field"><label>Sort by</label><select id="sortAssets"><option value="tag">Asset Tag</option><option value="brand">Brand</option><option value="department">Department</option><option value="status">Status</option><option value="cost_desc">Cost: High → Low</option><option value="cost_asc">Cost: Low → High</option><option value="updated">Recently Updated</option></select></div>
    <button class="filter-reset" id="resetAssetFilters" type="button">RESET FILTERS</button>
  </section>

  <section class="asset-grid" id="assetGrid"></section>
  <div class="empty-state" id="emptyState">No assets match this filter.</div>
</main>

<main class="detail-shell app-view hidden" id="detailView">
  <div class="detail-top">
    <div><div class="crumb">Live Asset Profile / <span id="crumbType">Other</span></div></div>
    <div class="detail-actions">
      <a class="btn js-dashboard-link" href="${escapeHtml_(appUrl)}" target="_top">← BACK TO DASHBOARD</a>
      <button class="btn dark" id="editBtn" type="button">✎ EDIT DEVICE</button>
      <button class="btn navy" id="qrLabelBtn" type="button">▦ PRINT QR LABEL</button>
      <button class="btn danger" id="deleteBtn" type="button">DELETE DEVICE</button>
    </div>
  </div>

  <section class="identity-card">
    <div class="detail-photo-wrap">
      <div class="detail-photo" id="photoPreview"><span>NO PHOTO</span></div>
      <div class="photo-upload-row">
        <label class="btn photo-upload-label" id="photoButton" for="photoInput">＋ ADD / CHANGE PHOTO</label>
        <input class="photo-input" id="photoInput" type="file" accept="image/*" capture="environment">
        <button type="button" class="btn photo-ai-button" id="photoAiBtn" disabled>REMOVE BACKGROUND — FAST</button>
        <div class="photo-note">Select a new image first, preview it here, then Save Changes. The old Drive photo is removed only after the replacement is saved.</div>
        <div class="photo-pending-actions hidden" id="photoPendingActions">
          <button type="button" class="btn" id="cancelPhotoBtn">CANCEL</button>
          <button type="button" class="btn navy" id="savePhotoBtn">SAVE CHANGES</button>
        </div>
        <div class="photo-sync-badge hidden" id="photoSyncBadge">SYNCING PHOTO TO DRIVE</div>
      </div>
    </div>

    <div>
      <div class="detail-asset-kicker">Asset Tag</div>
      <div class="asset-title" id="mainAssetTag">-</div>
      <div class="asset-id">Asset ID: <strong id="mainAssetId">-</strong> · Asset ID is locked</div>
      <div class="detail-brand-lockup"><span class="detail-brand-logo" id="detailBrandLogo"><span>IT</span></span><span class="detail-brand-name"><small>MANUFACTURER</small><b id="detailBrandName">-</b></span></div>
      <div class="qr-ready-note" id="qrReadyNote"><i></i><span>QR READY • Asset Tag identity</span></div>
      <div class="summary-strip" id="summaryStrip">
        <button type="button" class="summary-chip summary-copy" data-copy-field="DEVICE_TYPE" title="Copy device type"><b>Type</b><span id="summaryType">-</span><span class="chip-copy-mark">⧉</span></button>
        <button type="button" class="summary-chip summary-copy" data-copy-field="BRAND" title="Copy brand"><b>Brand</b><span id="summaryBrand">-</span><span class="chip-copy-mark">⧉</span></button>
        <button type="button" class="summary-chip summary-copy" data-copy-field="MODEL" title="Copy model"><b>Model</b><span id="summaryModel">-</span><span class="chip-copy-mark">⧉</span></button>
        <button type="button" class="summary-chip status-summary quick-status-trigger" id="detailStatusTrigger" title="Change status and save"><span class="neon-status-dot" id="summaryStatusDot"></span><b>Status</b><span id="summaryStatus">-</span><span>⌄</span></button>
        <div class="serial-summary">
          <button type="button" class="summary-chip summary-copy serial-edit-chip" data-copy-field="SERIAL" title="Copy serial number"><b>Serial</b><span id="summarySerial">-</span><span class="chip-copy-mark">⧉</span></button>
          <button type="button" class="support-lookup-btn" id="supportLookupBtn" title="Open official manufacturer support / warranty page">SUPPORT / WARRANTY ↗</button>
        </div>
      </div>
      <div class="updated-line">Last updated: <span id="lastUpdated">-</span></div>
    </div>
  </section>

  <section class="detail-grid">
    <div class="info-card"><div class="info-title">Device Information</div>${deviceRows}</div>
    <div class="info-card"><div class="info-title">Assignment</div>${assignmentRows}</div>
    <div class="info-card"><div class="info-title">Identification</div>${identificationRows}</div>
    <div class="info-card"><div class="info-title">Accounts & Access</div>${accountRows}</div>
    <div class="info-card full" id="webMaintenanceCard">
      <div class="info-title"><span class="maintenance-title-mark" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M14.2 6.2a5 5 0 0 0-6.6 6.6L3 17.4 6.6 21l4.6-4.6a5 5 0 0 0 6.6-6.6l-3 3-3.2-3.2 2.6-3.4Z"/><path d="m14.5 5.5 4-2 2 2-2 4"/></svg></span> Service History <button type="button" class="btn navy" id="webAddMaintenanceBtn">＋ ADD RECORD</button></div>
      <div id="webMaintenanceSummary" class="maintenance-summary-web">Loading service history…</div>
      <div id="webMaintenanceList" class="maintenance-list-web"></div>
    </div>
    <div class="info-card full">
      <div class="info-title">Notes</div>
      <div class="notes-value" id="d_NOTES">No notes.</div>
      <div class="system-row">Source: <span id="systemSource">-</span> · Original: <span id="systemOriginal">-</span></div>
    </div>
  </section>
</main>

<div class="modal" id="addModal" aria-hidden="true">
  <div class="modal-box form-modal">
    <div class="modal-head">
      <div><h2>Add Device</h2><p>New devices are written directly to ${escapeHtml_(SHEET_NAME)}.</p></div>
      <button type="button" class="x-btn" id="closeAddX">×</button>
    </div>
    <form id="addForm">
      <div class="form-body">
        <div class="form-grid">
          <div class="field"><label>Asset ID</label><input class="control" value="Auto-generated by system" readonly></div>
          <div class="scan-add-panel">
            <div class="scan-add-copy"><strong>Have an existing Libib / QR label?</strong><span>Scan it first and the QR value will return directly into this Add Device form.</span></div>
            <a class="btn navy" href="${escapeHtml_(addScannerUrl)}" target="_top">▣ SCAN QR TO ADD</a>
          </div>
          ${addFieldsHtml}
          <div class="add-photo-row">
            <div class="photo-picker">
              <div class="photo-preview" id="addPhotoPreview">NO PHOTO</div>
              <div>
                <label class="btn" for="addPhotoInput">＋ SELECT PHOTO</label>
                <input id="addPhotoInput" type="file" accept="image/*" capture="environment" style="display:none">
                <button type="button" class="btn photo-ai-button" id="addPhotoAiBtn" disabled>REMOVE BACKGROUND — FAST</button>
                <div class="photo-help">Optional. Works with phone camera or files on PC/Mac.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-actions">
        <button type="button" class="btn" id="cancelAddBtn">CANCEL</button>
        <button type="submit" class="btn dark" id="saveAddBtn">SAVE DEVICE</button>
      </div>
    </form>
  </div>
</div>

<div class="modal" id="editModal" aria-hidden="true">
  <div class="modal-box form-modal">
    <div class="modal-head">
      <div><h2>Edit Device</h2><p>Changes save to ${escapeHtml_(SHEET_NAME)} and update Detail instantly.</p></div>
      <button type="button" class="x-btn" id="closeEditX">×</button>
    </div>
    <form id="editForm">
      <div class="form-body">
        <div class="form-grid">
          <div class="field"><label>Asset ID — Locked</label><input class="control" id="editAssetIdLocked" value="" readonly></div>
          ${editFieldsHtml}
        </div>
      </div>
      <div class="modal-actions">
        <button type="button" class="btn" id="cancelEditBtn">CANCEL</button>
        <button type="submit" class="btn dark" id="saveEditBtn">SAVE CHANGES</button>
      </div>
    </form>
  </div>
</div>

<div class="modal guard-modal" id="editGuardModal" aria-hidden="true">
  <div class="modal-box guard-box">
    <div class="guard-copy">
      <h3>Unsaved changes</h3>
      <p>You changed this device but have not saved yet. Choose what you want to do before closing Edit.</p>
    </div>
    <div class="guard-actions">
      <button type="button" class="btn" id="keepEditingBtn">KEEP EDITING</button>
      <button type="button" class="btn danger" id="discardEditBtn">DISCARD</button>
      <button type="button" class="btn navy" id="saveBeforeCloseBtn">SAVE CHANGES</button>
    </div>
  </div>
</div>

<div class="modal" id="deleteModal" aria-hidden="true">
  <div class="delete-box">
    <div class="delete-body">
      <div class="delete-icon">!</div>
      <h2>Delete Device?</h2>
      <p>This removes the device row from <strong>${escapeHtml_(SHEET_NAME)}</strong>. If the asset has a managed photo, that Drive photo is also moved to trash.</p>
      <div class="delete-name"><span id="deleteAssetTag">-</span><br><small id="deleteAssetId">-</small></div>
    </div>
    <div class="delete-actions">
      <button type="button" class="btn" id="cancelDeleteBtn">CANCEL</button>
      <button type="button" class="btn danger" id="confirmDeleteBtn">YES, DELETE DEVICE</button>
    </div>
  </div>
</div>

<div class="modal" id="qrLabelModal" aria-hidden="true">
  <div class="qr-box">
    <div class="modal-head">
      <div><h2>RISP QR Asset Label</h2><p>School-logo asset label • Avery 5160 / Libib-style 2⅝″ × 1″.</p></div>
      <button type="button" class="x-btn" id="closeQrX">×</button>
    </div>
    <div class="qr-modal-body">
      <div class="qr-label" id="qrPrintLabel">
        <div class="qr-code" id="qrCode"></div>
        <div class="qr-label-copy">
          <div class="qr-label-school"><img class="qr-school-logo" src="${SCHOOL_LOGO_DATA_URI}" alt="RIS Phuket"><strong>RISP IT ASSET</strong></div>
          <div class="qr-label-tag" id="qrLabelTag">-</div>
          <div class="qr-line qr-label-id" id="qrLabelId"><b>Asset ID:</b> -</div>
          <div class="qr-line qr-label-device" id="qrLabelDevice">-</div>
          <div class="qr-line qr-label-serial" id="qrLabelSerial"><b>Serial:</b> -</div>
          <div class="qr-line qr-label-assigned" id="qrLabelAssigned"></div>
        </div>
        <div class="qr-credential-side">
          <div class="qr-credential-item"><span>USERNAME</span><b id="qrLabelUsername">-</b></div>
          <div class="qr-credential-item"><span>PASSWORD</span><b id="qrLabelPassword">-</b></div>
        </div>
      </div>
    </div>
    <div class="qr-actions">
      <label class="qr-copy-control" for="qrLabelCopies">COPIES <input id="qrLabelCopies" type="number" min="1" max="99" step="1" value="1" inputmode="numeric" aria-label="Number of QR label copies"></label>
      <label class="qr-assigned-toggle" id="qrAssignedToggleWrap" hidden><input type="checkbox" id="qrIncludeAssignedTo"><span>Include assigned person</span></label>
      <button type="button" class="btn" id="backQrToFormatBtn">← BACK</button><button type="button" class="btn" id="closeQrBtn">CANCEL</button>
      <button type="button" class="btn navy" id="printQrBtn">PRINT LABEL</button>
    </div>
  </div>
</div>

<div class="modal" id="qrPrintModeModal" aria-hidden="true">
  <div class="qr-print-mode-box">
    <div class="modal-head">
      <div><h2>Choose Label Format</h2><p id="qrPrintModeAssetHint">Select what should be printed for this device.</p></div>
      <button type="button" class="x-btn" id="closeQrPrintModeX">×</button>
    </div>
    <div class="qr-print-mode-grid">
      <button type="button" class="qr-print-mode-card" data-qr-print-mode="qr-only"><span class="qr-print-mode-icon">⌗</span><strong>QR ONLY</strong><small>Open the existing QR label exactly as before.</small></button>
      <button type="button" class="qr-print-mode-card" data-qr-print-mode="qr-credentials"><span class="qr-print-mode-icon">⌗＋</span><strong>QR + USERNAME PASSWORD</strong><small>For laptops only • prints the QR plus Local Username and Local Password.</small></button>
      <button type="button" class="qr-print-mode-card" data-qr-print-mode="credentials-only"><span class="qr-print-mode-icon">☷</span><strong>USERNAME PASSWORD ONLY</strong><small>For laptops only • User / Pw sticker format from the supplied sample.</small></button>
    </div>
    <div class="qr-print-mode-note">Existing Libib labels and QR matching are not changed. Username and password are read only from Local Username / Local Password.</div>
    <div class="qr-actions"><button type="button" class="btn" id="closeQrPrintModeBtn">← BACK TO ASSET</button></div>
  </div>
</div>

<div class="modal" id="credentialAccountModal" aria-hidden="true">
  <div class="qr-print-mode-box credential-account-box">
    <div class="modal-head">
      <div><h2>Choose Local Account</h2><p id="credentialAccountHint">This laptop has more than one Local Username / Local Password pair.</p></div>
      <button type="button" class="x-btn" id="closeCredentialAccountX">×</button>
    </div>
    <div class="credential-account-body">
      <label for="credentialAccountSelect">Print account</label>
      <select class="control" id="credentialAccountSelect"></select>
      <small>Each comma-separated username is matched with the password in the same position.</small>
    </div>
    <div class="qr-actions"><button type="button" class="btn" id="backCredentialAccountBtn">← BACK</button><button type="button" class="btn" id="cancelCredentialAccountBtn">CANCEL</button><button type="button" class="btn navy" id="useCredentialAccountBtn">USE THIS ACCOUNT</button></div>
  </div>
</div>

<div class="modal" id="credentialLabelModal" aria-hidden="true">
  <div class="qr-print-mode-box">
    <div class="modal-head">
      <div><h2>Username / Password Sticker</h2><p>Format follows the supplied User / Pw sticker sample.</p></div>
      <button type="button" class="x-btn" id="closeCredentialLabelX">×</button>
    </div>
    <div class="credential-preview-wrap"><div class="credential-preview-sticker" id="credentialStickerPreview"></div></div>
    <div class="qr-actions"><label class="qr-copy-control" for="credentialLabelCopies">COPIES <input id="credentialLabelCopies" type="number" min="1" max="99" step="1" value="1" inputmode="numeric" aria-label="Number of username password sticker copies"></label><button type="button" class="btn" id="backCredentialToFormatBtn">← BACK</button><button type="button" class="btn" id="closeCredentialLabelBtn">CANCEL</button><button type="button" class="btn navy" id="printCredentialLabelBtn">PRINT USERNAME PASSWORD</button></div>
  </div>
</div>

<div class="modal" id="bulkQrModal" aria-hidden="true">
  <div class="bulk-qr-box">
    <div class="modal-head">
      <div><h2>QR Label Studio</h2><p>Print all assets or filter by Category. Exactly 30 labels per Letter sheet (3 × 10); extra labels continue on the next sheet automatically.</p></div>
      <button type="button" class="x-btn" id="closeBulkQrX">×</button>
    </div>
    <div class="bulk-controls">
      <label>Label format
        <select class="control" id="bulkQrMode">
          <option value="qr-only">QR ONLY</option>
          <option value="qr-credentials">QR + USERNAME PASSWORD (LAPTOPS)</option>
          <option value="credentials-only">USERNAME PASSWORD ONLY (LAPTOPS)</option>
        </select>
      </label>
      <label>Print scope
        <select class="control" id="bulkQrCategory"><option value="__ALL__">All Categories</option></select>
      </label>
      <label class="bulk-assigned-toggle" id="bulkQrAssignedToggleWrap" hidden>
        <input type="checkbox" id="bulkQrIncludeAssigned"><span>Include assigned person</span>
      </label>
      <div class="bulk-summary" id="bulkQrSummary">0 labels ready</div>
    </div>
    <div class="bulk-preview-wrap">
      <div class="bulk-sheet-preview" id="bulkQrPrintRoot"><div class="bulk-empty">Preparing QR labels…</div></div>
    </div>
    <div class="bulk-actions">
      <button type="button" class="btn" id="closeBulkQrBtn">CANCEL</button>
      <button type="button" class="btn navy" id="printBulkQrBtn">PRINT / SAVE PDF</button>
    </div>
  </div>
</div>

<!-- Dedicated print-only portal prevents browser pagination from repeating the same absolute grid. -->
<div id="bulkPrintPortal" class="bulk-print-portal" aria-hidden="true"></div>
<div id="credentialPrintPortal" class="bulk-print-portal" aria-hidden="true"></div>


<div class="modal" id="webMaintenanceModal" aria-hidden="true">
  <div class="form-modal" style="max-width:760px">
    <div class="modal-head"><div><h2>Maintenance / Repair Record</h2><p id="webMaintenanceAssetHint">Record service history for this asset.</p></div><button type="button" class="x-btn" id="webMaintenanceCloseX">×</button></div>
    <form id="webMaintenanceForm" class="form-body">
      <div class="form-grid">
        <div class="field"><label>TYPE</label><select class="control" id="webMntType"><option>Repair</option><option>Maintenance</option><option>Inspection</option><option>Warranty Claim</option><option>Replacement</option></select></div>
        <div class="field"><label>STATUS</label><select class="control" id="webMntStatus"><option>Completed</option><option>In Progress</option><option>Waiting for Parts</option><option>Sent to Service Center</option><option>Unresolved</option></select></div>
        <div class="field"><label>REPORTED DATE</label><input class="control" id="webMntReported" type="date" required></div>
        <div class="field"><label>SENT DATE</label><input class="control" id="webMntSent" type="date"></div>
        <div class="field"><label>RETURN DATE</label><input class="control" id="webMntReturn" type="date"></div>
        <div class="field"><label>SHOP / SERVICE CENTER</label><input class="control" id="webMntVendor" maxlength="200"></div>
        <div class="field"><label>CONTACT / TECHNICIAN</label><input class="control" id="webMntContact" maxlength="200"></div>
        <div class="field"><label>PARTS REPLACED</label><input class="control" id="webMntParts"></div>
        <div class="field"><label>PROBLEM / REASON</label><textarea class="control" id="webMntProblem" rows="2" required></textarea></div>
        <div class="field"><label>DIAGNOSIS</label><textarea class="control" id="webMntDiagnosis" rows="2"></textarea></div>
        <div class="field"><label>REPAIR / ACTION TAKEN</label><textarea class="control" id="webMntAction" rows="2"></textarea></div>
        <div class="field"><label>NOTES</label><textarea class="control" id="webMntNotes" rows="2"></textarea></div>
        <div class="field"><label>PARTS COST (THB)</label><input class="control" id="webMntPartsCost" type="number" min="0" step="0.01" value="0"></div>
        <div class="field"><label>LABOR COST (THB)</label><input class="control" id="webMntLaborCost" type="number" min="0" step="0.01" value="0"></div>
        <div class="field"><label>PHOTOS (BEFORE / AFTER)</label><input class="control" id="webMntPhotos" type="file" accept="image/*" multiple></div>
        <div class="field"><label>INVOICE / QUOTATION / DOCUMENTS</label><input class="control" id="webMntDocuments" type="file" accept="image/*,.pdf,application/pdf" multiple></div>
      </div>
      <div class="modal-actions"><button type="button" class="btn" id="webMntCancel">CANCEL</button><button type="submit" class="btn navy" id="webMntSave">SAVE RECORD</button></div>
    </form>
  </div>
</div>

<div class="quick-status-menu hidden" id="quickStatusMenu">
  <div class="quick-status-title">Change status & save</div>
  <div id="quickStatusOptions"></div>
</div>

<div class="toast" id="toast"></div>

<script type="application/json" id="assetData">${assetsJson}</script>
<script>
(function(){
  'use strict';

  var APP_URL = ${JSON.stringify(appUrl)};
  var APP_TITLE = ${JSON.stringify(APP_TITLE)};
  var SCHOOL_LOGO_URI = ${JSON.stringify(SCHOOL_LOGO_DATA_URI)};
  var INITIAL_LOOKUP = ${JSON.stringify(initialLookupValue)};
  var INITIAL_LOOKUP_MODE = ${JSON.stringify(initialLookupKind)};
  var INITIAL_ADD_SCAN = ${JSON.stringify(initialAddScanValue)};
  var FIELDS = ${JSON.stringify(EDITABLE_FIELDS)};
  var BRAND_OPTIONS_BY_TYPE = ${JSON.stringify(BRAND_OPTIONS_BY_TYPE)};
  var BRAND_DOMAIN_MAP = ${JSON.stringify(BRAND_DOMAIN_MAP)};
  var BRAND_LOGO_URL_MAP = ${JSON.stringify(BRAND_LOGO_URL_MAP)};
  var ASSETS = JSON.parse(document.getElementById('assetData').textContent || '[]');
  var BOOTSTRAPPED = false;
  var SERVER_REFRESH_DONE = false;
  var LOCAL_CACHE_KEY = 'RISP_IT_ASSET_LITE_CACHE_STABLE_1';
  var deferredInstallPrompt = null;
  var assetIndex = Object.create(null);
  var currentCategory = '__ALL__';
  var currentAssetId = '';
  var dashboardScroll = 0;
  var selectedAddPhoto = null;
  var selectedAddPhotoPrepared = null;
  var pendingDetailPhoto = null;
  var pendingDetailPhotoFile = null;
  var pendingPhotoAssetId = '';
  var photoUploadInFlight = Object.create(null);
  var editInitialState = '';
  var webDisplayedAssetValue = 0;
  var webValueCategory = '__ALL__';
  var lastMetaStamp = '';
  var metaPollTimer = null;
  var fullAssetRequests = Object.create(null);
  var WEB_THEME_KEY = 'RISP_ADMIN_THEME_V1';

  function applyWebTheme(theme, persist) {
    var next = theme === 'dark' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    Array.prototype.slice.call(document.querySelectorAll('.js-theme-toggle')).forEach(function(btn) {
      var icon = btn.querySelector('span'); var label = btn.querySelector('b');
      if (icon) icon.textContent = next === 'dark' ? '☀' : '☾';
      if (label) label.textContent = next === 'dark' ? 'LIGHT' : 'DARK';
      btn.setAttribute('aria-label', next === 'dark' ? 'Use light theme' : 'Use dark theme');
    });
    var metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) metaTheme.setAttribute('content', next === 'dark' ? '#050b14' : '#0b223d');
    if (persist !== false) { try { localStorage.setItem(WEB_THEME_KEY, next); } catch (e) {} }
  }
  function toggleWebTheme() {
    applyWebTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark', true);
  }


  var dashboardView = document.getElementById('dashboardView');
  var detailView = document.getElementById('detailView');
  var headerDashboardActions = document.getElementById('headerDashboardActions');
  var headerDetailActions = document.getElementById('headerDetailActions');
  var statsEl = document.getElementById('stats');
  var assetGrid = document.getElementById('assetGrid');
  var emptyState = document.getElementById('emptyState');
  var searchInput = document.getElementById('searchInput');
  var filterBrand = document.getElementById('filterBrand');
  var filterDepartment = document.getElementById('filterDepartment');
  var filterStatus = document.getElementById('filterStatus');
  var sortAssets = document.getElementById('sortAssets');
  var resultCount = document.getElementById('resultCount');
  var addModal = document.getElementById('addModal');
  var editModal = document.getElementById('editModal');
  var editGuardModal = document.getElementById('editGuardModal');
  var deleteModal = document.getElementById('deleteModal');
  var qrLabelModal = document.getElementById('qrLabelModal');
  var qrLabelCopies = document.getElementById('qrLabelCopies');
  var qrIncludeAssignedTo = false;
  var qrIncludeAssignedToInput = document.getElementById('qrIncludeAssignedTo');
  var qrAssignedToggleWrap = document.getElementById('qrAssignedToggleWrap');
  var qrPrintModeModal = document.getElementById('qrPrintModeModal');
  var credentialAccountModal = document.getElementById('credentialAccountModal');
  var credentialAccountSelect = document.getElementById('credentialAccountSelect');
  var credentialAccountHint = document.getElementById('credentialAccountHint');
  var credentialLabelModal = document.getElementById('credentialLabelModal');
  var credentialLabelCopies = document.getElementById('credentialLabelCopies');
  var bulkQrModal = document.getElementById('bulkQrModal');
  var bulkQrMode = document.getElementById('bulkQrMode');
  var bulkQrCategory = document.getElementById('bulkQrCategory');
  var bulkQrPrintRoot = document.getElementById('bulkQrPrintRoot');
  var bulkQrAssignedToggleWrap = document.getElementById('bulkQrAssignedToggleWrap');
  var bulkQrIncludeAssignedInput = document.getElementById('bulkQrIncludeAssigned');
  var bulkQrIncludeAssigned = false;
  var bulkPrintPortal = document.getElementById('bulkPrintPortal');
  var credentialPrintPortal = document.getElementById('credentialPrintPortal');
  var credentialStickerPreview = document.getElementById('credentialStickerPreview');
  var qrPrintModeAsset = null;
  var qrLabelAsset = null;
  var qrLabelMode = 'qr-only';
  var qrLabelCredentials = null;
  var pendingCredentialPrintMode = '';
  var pendingCredentialPrintAsset = null;
  var pendingCredentialPairs = [];
  var credentialLabelAsset = null;
  var credentialLabelCredentials = null;
  var bulkCredentialRenderBusy = false;
  var quickStatusMenu = document.getElementById('quickStatusMenu');
  var quickStatusAssetId = '';
  var addForm = document.getElementById('addForm');
  var editForm = document.getElementById('editForm');
  var addPhotoInput = document.getElementById('addPhotoInput');
  var photoInput = document.getElementById('photoInput');
  var appBoot = document.getElementById('appBoot');
  var installAppChip = document.getElementById('installAppChip');
  var installAppModal = document.getElementById('installAppModal');
  var nativeInstallBtn = document.getElementById('nativeInstallBtn');
  window.setTimeout(function(){ bindWebCustomSelects(document); }, 0);

  function esc(value) {
    return String(value == null ? '' : value)
      .replace(/&/g,'&amp;')
      .replace(/</g,'&lt;')
      .replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;')
      .replace(/'/g,'&#039;');
  }

  function normalize(value) {
    return String(value == null ? '' : value).trim().toUpperCase().replace(/\s+/g,' ');
  }

  function valueOrDash(value) {
    return value === undefined || value === null || String(value).trim() === '' ? '-' : String(value);
  }


  function statusTone(value) {
    var v = normalize(value);
    if (v === 'ACTIVE' || v === 'IN USE' || v === 'AVAILABLE') return 'active';
    if (v === 'INACTIVE' || v === 'RETIRED' || v === 'LOST') return 'inactive';
    if (v === 'REPAIR' || v === 'MAINTENANCE') return 'warning';
    return 'neutral';
  }

  function statusDotHtml(value) {
    return '<span class="status-dot ' + statusTone(value) + '" aria-hidden="true"></span>';
  }

  function statusCss(value) {
    var v = normalize(value);
    if (v === 'ACTIVE' || v === 'IN USE' || v === 'AVAILABLE') return 'status-active';
    if (v === 'INACTIVE' || v === 'LOST') return 'status-inactive';
    if (v === 'REPAIR' || v === 'MAINTENANCE') return 'status-warning';
    if (v === 'STORAGE') return 'status-storage';
    if (v === 'RETIRED') return 'status-retired';
    return '';
  }

  function toDateInputValue(value) {
    var raw = String(value || '').trim();
    if (!raw) return '';
    var m = raw.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
    if (m) return m[1] + '-' + String(m[2]).padStart(2,'0') + '-' + String(m[3]).padStart(2,'0');
    m = raw.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/);
    if (m) return m[3] + '-' + String(m[2]).padStart(2,'0') + '-' + String(m[1]).padStart(2,'0');
    return '';
  }

  function moneyNumber(value) {
    var raw = String(value == null ? '' : value)
      .replace(/฿/g,'')
      .replace(/THB/gi,'')
      .replace(/\bB\b/gi,'')
      .replace(/,/g,'')
      .trim();
    var n = Number(raw);
    return isFinite(n) ? n : null;
  }

  function formatMoneyEditable(value) {
    var n = moneyNumber(value);
    if (n === null) return String(value || '').trim();
    return n.toLocaleString('en-US', {minimumFractionDigits:0, maximumFractionDigits:2});
  }

  function formatBahtDisplay(value) {
    var n = moneyNumber(value);
    if (n === null) return valueOrDash(value);
    return '฿' + n.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
  }

  function formatMoneyField(el) {
    if (!el) return;
    var n = moneyNumber(el.value);
    if (n === null) return;
    el.value = n.toLocaleString('en-US', {minimumFractionDigits:0, maximumFractionDigits:2});
  }

  function supportInfoForAsset(asset) {
    asset = asset || {};
    var brandRaw = String(asset.BRAND || '').trim();
    var brand = normalize(brandRaw);
    var identifier = String(asset.SERVICE_TAG || asset.SERIAL || '').trim();
    var serial = String(asset.SERIAL || asset.SERVICE_TAG || '').trim();
    var info = {
      label: brandRaw ? brandRaw.toUpperCase() + ' SUPPORT ↗' : 'SUPPORT / WARRANTY ↗',
      url: '',
      identifier: serial || identifier,
      direct: false
    };

    if (brand.indexOf('DELL') !== -1) {
      info.label = 'DELL SUPPORT ↗';
      info.identifier = identifier;
      info.url = identifier
        ? 'https://www.dell.com/support/home/en-th/product-support/servicetag/' + encodeURIComponent(identifier) + '/overview'
        : 'https://www.dell.com/support/home/en-th';
      info.direct = !!identifier;
    } else if (brand === 'HP' || brand.indexOf('HEWLETT') !== -1) {
      info.label = 'HP WARRANTY ↗';
      info.url = 'https://support.hp.com/th-en/check-warranty';
    } else if (brand.indexOf('LENOVO') !== -1) {
      info.label = 'LENOVO WARRANTY ↗';
      info.url = 'https://pcsupport.lenovo.com/th/en/warranty-lookup';
    } else if (brand.indexOf('ASUS') !== -1) {
      info.label = 'ASUS WARRANTY ↗';
      info.url = 'https://www.asus.com/th/support/warranty-status-inquiry/';
    } else if (brand.indexOf('ACER') !== -1) {
      info.label = 'ACER SUPPORT ↗';
      info.url = 'https://www.acer.com/th-th/support/product-support/';
    } else if (brand.indexOf('APPLE') !== -1 || brand.indexOf('MAC') !== -1) {
      info.label = 'APPLE COVERAGE ↗';
      info.url = 'https://checkcoverage.apple.com/?locale=th_TH';
    } else if (brand.indexOf('MICROSOFT') !== -1 || brand.indexOf('SURFACE') !== -1) {
      info.label = 'MICROSOFT DEVICES ↗';
      info.url = 'https://account.microsoft.com/devices';
    } else if (brand.indexOf('EPSON') !== -1) {
      info.label = 'EPSON SUPPORT ↗';
      info.url = 'https://www.epson.co.th/Support/sl/s';
    } else if (brand.indexOf('CANON') !== -1) {
      info.label = 'CANON SUPPORT ↗';
      info.url = 'https://th.canon/th/support';
    } else if (brand.indexOf('TP-LINK') !== -1 || brand.indexOf('TPLINK') !== -1) {
      info.label = 'TP-LINK SUPPORT ↗';
      info.url = 'https://www.tp-link.com/th/support/';
    } else if (brand.indexOf('HIKVISION') !== -1) {
      info.label = 'HIKVISION SUPPORT ↗';
      info.url = 'https://www.hikvision.com/en/support/';
    } else if (brand.indexOf('BROTHER') !== -1) {
      info.label = 'BROTHER SUPPORT ↗';
      info.url = 'https://support.brother.com/';
    }

    return info;
  }

  function copyIdentifierQuietly(value) {
    if (!value) return;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).catch(function(){});
        return;
      }
    } catch (err) {}

    try {
      var temp = document.createElement('textarea');
      temp.value = value;
      temp.setAttribute('readonly','');
      temp.style.position = 'fixed';
      temp.style.opacity = '0';
      document.body.appendChild(temp);
      temp.select();
      document.execCommand('copy');
      temp.remove();
    } catch (err2) {}
  }

  function liteAssetForCache(asset) {
    if (!asset) return null;
    return {
      ASSET_ID:String(asset.ASSET_ID || ''), ASSET_TAG:String(asset.ASSET_TAG || ''),
      DEVICE_TYPE:String(asset.DEVICE_TYPE || ''), BRAND:String(asset.BRAND || ''),
      MODEL:String(asset.MODEL || ''), SERIAL:String(asset.SERIAL || ''),
      LIBIB:String(asset.LIBIB || ''), SERVICE_TAG:String(asset.SERVICE_TAG || ''),
      DEPARTMENT:String(asset.DEPARTMENT || ''), ASSIGNED_TO:String(asset.ASSIGNED_TO || ''),
      STATUS:String(asset.STATUS || ''), COST:String(asset.COST || ''), UPDATED:String(asset.UPDATED || ''),
      PHOTO_FILE_ID:String(asset.PHOTO_FILE_ID || ''), __full:false
    };
  }

  function saveLocalLiteCache() {
    try {
      var safeAssets = ASSETS.map(liteAssetForCache).filter(Boolean);
      localStorage.setItem(LOCAL_CACHE_KEY, JSON.stringify({savedAt:Date.now(),assets:safeAssets}));
    } catch (err) {}
  }

  function loadLocalLiteCache() {
    var keys = [
      LOCAL_CACHE_KEY,
      'RISP_IT_ASSET_LITE_CACHE_V611',
      'RISP_IT_ASSET_LITE_CACHE_V610',
      'RISP_IT_ASSET_LITE_CACHE_V654'
    ];
    for (var i = 0; i < keys.length; i++) {
      try {
        var raw = localStorage.getItem(keys[i]);
        if (!raw) continue;
        var parsed = JSON.parse(raw);
        if (!parsed || !Array.isArray(parsed.assets) || !parsed.assets.length) continue;
        if (keys[i] !== LOCAL_CACHE_KEY) {
          try { localStorage.setItem(LOCAL_CACHE_KEY, raw); } catch (migrateErr) {}
        }
        return parsed.assets;
      } catch (err) {}
    }
    return [];
  }

  function markFullAsset(asset) {
    if (!asset) return asset;
    asset.__full = true;
    return asset;
  }

  function findAssetLocal(rawValue) {
    var target = normalize(rawValue);
    if (!target) return null;
    var compact = target.replace(/[^A-Z0-9]/g,'');
    var digits = target.replace(/\D/g,'');
    var keys = ['ASSET_ID','ASSET_TAG','LIBIB','SERIAL','SERVICE_TAG'];
    for (var i=0;i<ASSETS.length;i++) {
      var asset=ASSETS[i] || {};
      for (var k=0;k<keys.length;k++) {
        var value=normalize(asset[keys[k]]);
        if (!value) continue;
        if (value === target) return asset;
        if (compact && value.replace(/[^A-Z0-9]/g,'') === compact) return asset;
        if (digits && digits.length >= 5 && value.replace(/\D/g,'') === digits) return asset;
      }
    }
    return null;
  }

  function hideBoot() {
    BOOTSTRAPPED = true;
    document.body.classList.remove('app-booting');
    if (appBoot) appBoot.classList.add('done');
  }

  function applyBootstrapAssets(assets, fromServer) {
    ASSETS = Array.isArray(assets) ? assets : [];
    ASSETS.forEach(function(a){ if (a && a.__full !== true) a.__full = false; });
    rebuildIndex();
    renderDashboard();
    if (fromServer) saveLocalLiteCache();
  }

  function routeInitialLookup() {
    if(INITIAL_LOOKUP_MODE==='scan'&&INITIAL_LOOKUP){
      if(!scanReturnHandled){scanReturnHandled=true;routeToDashboard('replace',false);showVerifiedScan(INITIAL_LOOKUP);}
      return;
    }
    var target=INITIAL_LOOKUP?getAsset(INITIAL_LOOKUP):null;
    if(target)routeToDetail(target.ASSET_ID,'replace');
    else {routeToDashboard('replace',false);if(SERVER_REFRESH_DONE&&INITIAL_LOOKUP)showToast('Asset not found');}
    if(INITIAL_ADD_SCAN&&!scanReturnHandled){scanReturnHandled=true;window.setTimeout(function(){openAdd(INITIAL_ADD_SCAN);},120);}
  }

  function bootstrapApp() {
    var cached = loadLocalLiteCache();
    var preloaded = Array.isArray(ASSETS) && ASSETS.length ? ASSETS.slice() : [];

    // v6.10.3: prefer inventory already embedded by doGet().
    // It paints immediately and the async call below becomes refresh-only.
    if (preloaded.length) {
      applyBootstrapAssets(preloaded, true);
      hideBoot();
      routeInitialLookup();
    } else if (cached.length) {
      applyBootstrapAssets(cached, false);
      hideBoot();
      routeInitialLookup();
    }

    // Never allow the full-screen boot overlay to block the Admin Web forever.
    var bootWatchdog = window.setTimeout(function() {
      if (BOOTSTRAPPED) return;
      if (cached.length) applyBootstrapAssets(cached, false);
      else if (!Array.isArray(ASSETS)) applyBootstrapAssets([], false);
      hideBoot();
      routeInitialLookup();
      showToast('Dashboard opened — inventory refresh continues in background');
    }, 900);

    if (!(window.google && google.script && google.script.run)) {
      SERVER_REFRESH_DONE = true;
      window.clearTimeout(bootWatchdog);
      if (!BOOTSTRAPPED) {
        if (!cached.length && !preloaded.length) applyBootstrapAssets([], false);
        hideBoot();
        routeInitialLookup();
      }
      return;
    }

    google.script.run
      .withSuccessHandler(function(payload) {
        SERVER_REFRESH_DONE = true;
        window.clearTimeout(bootWatchdog);
        if (payload && payload.generatedAt) lastMetaStamp = String(payload.generatedAt);
        if (payload && Array.isArray(payload.assets)) {
          applyBootstrapAssets(payload.assets, true);
        }
        hideBoot();
        routeInitialLookup();
      })
      .withFailureHandler(function(err) {
        SERVER_REFRESH_DONE = true;
        window.clearTimeout(bootWatchdog);
        hideBoot();
        if (!BOOTSTRAPPED && !cached.length && !preloaded.length) {
          applyBootstrapAssets([], false);
          routeToDashboard('replace', false);
        }
        showToast((cached.length || preloaded.length) ? 'Inventory loaded — background refresh failed' : 'Could not sync inventory');
        console.warn(err);
      })
      .getBootstrapData();
  }

  function ensureFullAsset(id, callback) {
    var current = getAsset(id);
    if (current && current.__full) {
      callback(current);
      return;
    }
    if (!(window.google && google.script && google.script.run)) {
      callback(current);
      return;
    }

    var key = normalize(id);
    if (!fullAssetRequests[key]) {
      fullAssetRequests[key] = [];
      google.script.run
        .withSuccessHandler(function(asset) {
          var queue = fullAssetRequests[key] || [];
          delete fullAssetRequests[key];
          if (!asset) {
            showToast('Device data not found');
            queue.forEach(function(fn){ try { fn(current); } catch (e) {} });
            return;
          }
          markFullAsset(asset);
          upsertAsset(asset);
          queue.forEach(function(fn){ try { fn(asset); } catch (e) {} });
        })
        .withFailureHandler(function(err) {
          var queue = fullAssetRequests[key] || [];
          delete fullAssetRequests[key];
          showToast('Could not load full device data');
          console.warn(err);
          queue.forEach(function(fn){ try { fn(current); } catch (e) {} });
        })
        .getAssetById(id);
    }
    fullAssetRequests[key].push(typeof callback === 'function' ? callback : function(){});
  }

  function prefetchFullAsset(id) {
    var asset = getAsset(id);
    if (!asset || asset.__full) return;
    ensureFullAsset(id, function(){});
  }

  function rebuildIndex() {
    assetIndex = Object.create(null);
    ASSETS.forEach(function(asset) {
      if (asset && asset.ASSET_ID) assetIndex[normalize(asset.ASSET_ID)] = asset;
    });
  }

  function getAsset(id) {
    return assetIndex[normalize(id)] || null;
  }

  function upsertAsset(asset) {
    if (!asset || !asset.ASSET_ID) return;
    var id = normalize(asset.ASSET_ID);
    var replaced = false;
    for (var i = 0; i < ASSETS.length; i++) {
      if (normalize(ASSETS[i].ASSET_ID) === id) {
        ASSETS[i] = asset;
        replaced = true;
        break;
      }
    }
    if (!replaced) ASSETS.push(asset);
    rebuildIndex();
    if (BOOTSTRAPPED) saveLocalLiteCache();
  }

  function removeAsset(id) {
    var target = normalize(id);
    ASSETS = ASSETS.filter(function(asset) {
      return normalize(asset.ASSET_ID) !== target;
    });
    rebuildIndex();
    if (BOOTSTRAPPED) saveLocalLiteCache();
  }

  function photoSources(asset, size) {
    if (!asset || !asset.PHOTO_FILE_ID) return [];
    var id = encodeURIComponent(String(asset.PHOTO_FILE_ID));
    var width = String(size || 420);
    var cache = asset.UPDATED ? encodeURIComponent(String(asset.UPDATED)) : '';

    var primary = 'https://lh3.googleusercontent.com/d/' + id + '=w' + width;
    if (cache) primary += '?v=' + cache;

    var driveThumb = 'https://drive.google.com/thumbnail?id=' + id + '&sz=w' + width;
    if (cache) driveThumb += '&v=' + cache;

    var driveView = 'https://drive.google.com/uc?export=view&id=' + id;
    if (cache) driveView += '&v=' + cache;

    return [primary, driveThumb, driveView];
  }

  function photoUrl(asset, size) {
    var sources = photoSources(asset, size);
    return sources.length ? sources[0] : '';
  }

  function bindPhotoFallback(img, asset, size, onFinalFailure) {
    if (!img || !asset || !asset.PHOTO_FILE_ID) return;
    var sources = photoSources(asset, size);
    if (!sources.length) return;
    var index = 0;

    img.addEventListener('error', function handlePhotoError() {
      index += 1;
      if (index < sources.length) {
        img.src = sources[index];
        return;
      }
      img.removeEventListener('error', handlePhotoError);
      if (typeof onFinalFailure === 'function') onFinalFailure();
    });
  }

  function showToast(message) {
    var el = document.getElementById('toast');
    el.textContent = message;
    el.classList.add('show');
    window.setTimeout(function(){ el.classList.remove('show'); }, 2200);
  }

  function setText(id, value) {
    var el = document.getElementById(id);
    if (el) el.textContent = valueOrDash(value);
  }

  function formatWebBaht(n) {
    return '฿' + Number(n || 0).toLocaleString('en-US', {minimumFractionDigits:0, maximumFractionDigits:2});
  }


  function portfolioIconSvg(type) {
    var n = normalize(type || 'ALL');
    var common = 'viewBox="0 0 24 24" aria-hidden="true" focusable="false"';
    if (n === 'LAPTOP' || n === 'MACBOOK') return '<svg '+common+'><rect x="4" y="4" width="16" height="11" rx="2"></rect><path d="M2.8 18h18.4M8 18l1-2h6l1 2"></path></svg>';
    if (n === 'TABLET' || n === 'TABLET / IPAD' || n === 'IPAD') return '<svg '+common+'><rect x="6" y="2.5" width="12" height="19" rx="2.3"></rect><path d="M10 18.5h4"></path></svg>';
    if (n === 'MAC MINI') return '<svg '+common+'><rect x="3" y="5" width="18" height="14" rx="4"></rect><circle cx="17.5" cy="8.5" r="1"></circle><path d="M7 15h10"></path></svg>';
    if (n === 'DESKTOP PC' || n === 'IMAC' || n === 'MONITOR') return '<svg '+common+'><rect x="3" y="3.5" width="18" height="13" rx="2"></rect><path d="M9 20h6M12 16.5V20"></path></svg>';
    if (n === 'PRINTER') return '<svg '+common+'><path d="M7 8V3h10v5"></path><rect x="4" y="8" width="16" height="9" rx="2"></rect><path d="M7 14h10v7H7zM16.5 11h.01"></path></svg>';
    if (n === 'PROJECTOR') return '<svg '+common+'><rect x="3" y="7" width="18" height="10" rx="3"></rect><circle cx="14.5" cy="12" r="3"></circle><path d="M6.5 10.5h2"></path></svg>';
    if (n === 'PHONE') return '<svg '+common+'><rect x="7" y="2" width="10" height="20" rx="2.5"></rect><path d="M10 18.5h4"></path></svg>';
    if (n.indexOf('NETWORK') !== -1 || n === 'SERVER') return '<svg '+common+'><rect x="3" y="4" width="18" height="6" rx="2"></rect><rect x="3" y="14" width="18" height="6" rx="2"></rect><path d="M6.5 7h.01M9.5 7h.01M6.5 17h.01M9.5 17h.01"></path></svg>';
    if (n.indexOf('HANDHELD') !== -1 || n.indexOf('CONSOLE') !== -1) return '<svg '+common+'><path d="M7 8h10a4 4 0 0 1 3.7 5.5l-1.2 3a2 2 0 0 1-3.1.8L14.5 16h-5l-1.9 1.3a2 2 0 0 1-3.1-.8l-1.2-3A4 4 0 0 1 7 8Z"></path><path d="M7 12h4M9 10v4M16.8 11.2h.01M18.4 13h.01"></path></svg>';
    return '<svg '+common+'><path d="M12 3 4.5 7v10L12 21l7.5-4V7L12 3Z"></path><path d="m4.5 7 7.5 4 7.5-4M12 11v10"></path></svg>';
  }

  function renderWebPortfolioValue(totalAssetValue, valueByType) {
    var label = document.getElementById('webAssetValueLabel');
    var icon = document.getElementById('webAssetValueHeroIcon');
    var host = document.getElementById('webAssetValueBreakdown');
    var keys = Object.keys(valueByType).filter(function(k){ return valueByType[k] > 0; }).sort(function(a,b){ return valueByType[b] - valueByType[a]; });
    if (webValueCategory !== '__ALL__' && !Object.prototype.hasOwnProperty.call(valueByType, webValueCategory)) webValueCategory='__ALL__';
    var selectedValue = webValueCategory === '__ALL__' ? totalAssetValue : (valueByType[webValueCategory] || 0);
    animateWebAssetValue(selectedValue);
    if (label) label.textContent = webValueCategory === '__ALL__' ? 'PORTFOLIO VALUE • LIVE' : String(webValueCategory).toUpperCase() + ' VALUE • LIVE';
    if (!host) return;
    var buttons = [{key:'__ALL__',label:'All Assets',value:totalAssetValue}].concat(keys.slice(0,9).map(function(k){return {key:k,label:k,value:valueByType[k]};}));
    host.innerHTML = buttons.map(function(item){
      var active = webValueCategory === item.key ? ' active' : '';
      return '<button type="button" class="web-value-chip'+active+'" data-web-value-type="'+esc(item.key)+'"><div class="web-value-chip-icon">'+portfolioIconSvg(item.key==='__ALL__'?'ALL':item.key)+'</div><div class="web-value-chip-copy"><strong>'+esc(item.label)+'</strong><em>'+formatWebBaht(item.value)+'</em></div><div class="web-value-chip-led"></div></button>';
    }).join('');
    Array.prototype.forEach.call(host.querySelectorAll('[data-web-value-type]'), function(btn){
      btn.addEventListener('click', function(){ webValueCategory = btn.getAttribute('data-web-value-type') || '__ALL__'; renderWebPortfolioValue(totalAssetValue, valueByType); });
    });
  }

  function animateWebAssetValue(target) {
    target = Math.max(0, Number(target) || 0);
    var el = document.getElementById('webTotalAssetValue');
    if (!el) return;
    var start = webDisplayedAssetValue;
    var diff = target - start;
    var started = performance.now();
    var duration = Math.abs(diff) < 1 ? 0 : 360;
    if (!duration) { webDisplayedAssetValue = target; el.textContent = formatWebBaht(target); return; }
    function tick(now) {
      var p = Math.min(1, (now - started) / duration);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = formatWebBaht(start + diff * eased);
      if (p < 1) requestAnimationFrame(tick);
      else { webDisplayedAssetValue = target; el.textContent = formatWebBaht(target); }
    }
    requestAnimationFrame(tick);
  }

  function brandDomain(brand) {
    return BRAND_DOMAIN_MAP[normalize(brand)] || '';
  }
  function brandLogoUrl(brand) {
    var key = normalize(brand);
    if (BRAND_LOGO_URL_MAP[key]) return BRAND_LOGO_URL_MAP[key];
    var domain = brandDomain(brand);
    return domain ? 'https://www.google.com/s2/favicons?domain=' + encodeURIComponent(domain) + '&sz=128' : '';
  }
  function brandLogoHtml(brand, className) {
    var name = String(brand || '').trim();
    var url = brandLogoUrl(name);
    var initials = name ? name.replace(/[^A-Za-z0-9]/g,'').slice(0,3).toUpperCase() : 'IT';
    var wide = ['CANON','CANNON','BROTHER','EPSON'].indexOf(normalize(name)) >= 0 ? ' data-wide-logo="1"' : '';
    return '<span class="' + (className || 'brand-select-logo') + '"' + wide + '>' +
      (url ? '<img src="' + esc(url) + '" alt="" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'inline\'"><span style="display:none">' + esc(initials) + '</span>' : '<span>' + esc(initials) + '</span>') +
      '</span>';
  }
  function brandValuesForType(type) {
    return (BRAND_OPTIONS_BY_TYPE[String(type || '').trim()] || BRAND_OPTIONS_BY_TYPE.Other || []).slice();
  }
  function updateBrandLogo(prefix) {
    var select = document.getElementById(prefix + 'BRAND');
    var host = document.getElementById(prefix + 'BRAND_LOGO');
    if (!select || !host) return;
    var v = String(select.value || '').trim();
    if (v === '__OTHER__') {
      var other = document.getElementById(prefix + 'BRAND_OTHER');
      v = String(other && other.value || '').trim();
    }
    host.outerHTML = brandLogoHtml(v, 'brand-select-logo').replace('class="brand-select-logo"','class="brand-select-logo" id="' + prefix + 'BRAND_LOGO"');
  }
  function brandChoiceChipsHtml(values, selected) {
    selected = String(selected || '');
    return (values || []).map(function(v) {
      return '<button type="button" class="brand-option-chip' +
        (normalize(v) === normalize(selected) ? ' selected' : '') +
        '" data-brand-choice="' + esc(v) + '">' +
        brandLogoHtml(v, 'brand-option-logo') + '<b>' + esc(v) + '</b></button>';
    }).join('');
  }
  function bindBrandChipButtons(prefix) {
    var host = document.getElementById(prefix + 'BRAND_CHIPS');
    var select = document.getElementById(prefix + 'BRAND');
    if (!host || !select) return;
    host.querySelectorAll('[data-brand-choice]').forEach(function(btn) {
      if (btn.getAttribute('data-brand-chip-bound') === '1') return;
      btn.setAttribute('data-brand-chip-bound','1');
      btn.addEventListener('click', function() {
        var v = String(btn.getAttribute('data-brand-choice') || '');
        select.value = v;
        var other = document.getElementById(prefix + 'BRAND_OTHER');
        if (other) { other.value = ''; other.hidden = true; other.required = false; }
        host.querySelectorAll('.brand-option-chip').forEach(function(x){ x.classList.toggle('selected', x === btn); });
        updateBrandLogo(prefix);
      });
    });
  }

  function rebuildBrandSelect(prefix, preserveValue) {
    var typeEl = document.getElementById(prefix + 'DEVICE_TYPE');
    var brandEl = document.getElementById(prefix + 'BRAND');
    if (!typeEl || !brandEl) return;
    var typeValue = String(typeEl.value || 'Other').trim();
    if (typeValue === '__OTHER__') {
      var typeOther = document.getElementById(prefix + 'DEVICE_TYPE_OTHER');
      typeValue = String(typeOther && typeOther.value || 'Other').trim() || 'Other';
    }
    var current = preserveValue != null ? String(preserveValue) : String(brandEl.value || '');
    if (current === '__OTHER__') {
      var currentOther = document.getElementById(prefix + 'BRAND_OTHER');
      current = String(currentOther && currentOther.value || '');
    }
    var values = brandValuesForType(typeValue);
    var matched = values.find(function(v){ return normalize(v) === normalize(current); });
    brandEl.innerHTML = '<option value="">Not set</option>' + values.map(function(v){ return '<option value="' + esc(v) + '">' + esc(v) + '</option>'; }).join('') + '<option value="__OTHER__">Other (specify)</option>';
    brandEl.value = !current ? '' : (matched || '__OTHER__');
    var chipHost = document.getElementById(prefix + 'BRAND_CHIPS');
    if (chipHost) {
      chipHost.innerHTML = brandChoiceChipsHtml(values, matched || '');
      bindBrandChipButtons(prefix);
    }
    var other = document.getElementById(prefix + 'BRAND_OTHER');
    if (other) other.value = current && !matched ? current : '';
    applyCustomSelectVisibility(brandEl);
    updateBrandLogo(prefix);
  }
  function uniqueSorted(field) {
    var seen = Object.create(null), values = [];
    ASSETS.forEach(function(asset){ var v = String(asset[field] || '').trim(); if (!v) return; var n = normalize(v); if (!seen[n]) { seen[n]=1; values.push(v); } });
    return values.sort(function(a,b){ return a.localeCompare(b); });
  }
  function syncFilterMenus() {
    function fill(select, field, firstLabel) {
      if (!select) return;
      var keep = select.value;
      select.innerHTML = '<option value="">' + firstLabel + '</option>' + uniqueSorted(field).map(function(v){ return '<option value="' + esc(v) + '">' + esc(v) + '</option>'; }).join('');
      Array.prototype.forEach.call(select.options,function(o){ if (normalize(o.value) === normalize(keep)) select.value = o.value; });
    }
    fill(filterBrand,'BRAND','All brands'); fill(filterDepartment,'DEPARTMENT','All departments'); fill(filterStatus,'STATUS','All statuses');
  }
  function costNumber(v) { var n=Number(String(v||'').replace(/[^0-9.\-]/g,'')); return isFinite(n)?n:0; }
  function sortVisibleAssets(list) {
    var mode = sortAssets ? sortAssets.value : 'tag'; var out=list.slice();
    function txt(a,k){ return String(a[k]||'').toUpperCase(); }
    out.sort(function(a,b){
      if(mode==='brand')return txt(a,'BRAND').localeCompare(txt(b,'BRAND'))||txt(a,'ASSET_TAG').localeCompare(txt(b,'ASSET_TAG'));
      if(mode==='department')return txt(a,'DEPARTMENT').localeCompare(txt(b,'DEPARTMENT'))||txt(a,'ASSET_TAG').localeCompare(txt(b,'ASSET_TAG'));
      if(mode==='status')return txt(a,'STATUS').localeCompare(txt(b,'STATUS'))||txt(a,'ASSET_TAG').localeCompare(txt(b,'ASSET_TAG'));
      if(mode==='cost_desc')return costNumber(b.COST)-costNumber(a.COST);
      if(mode==='cost_asc')return costNumber(a.COST)-costNumber(b.COST);
      if(mode==='updated')return String(b.UPDATED||'').localeCompare(String(a.UPDATED||''));
      return txt(a,'ASSET_TAG').localeCompare(txt(b,'ASSET_TAG'));
    }); return out;
  }

  function parseAnalyticsDate(value) {
    var raw=String(value||'').trim(); if(!raw)return null;
    var m=raw.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/);
    if(m){var d=new Date(Number(m[3]),Number(m[2])-1,Number(m[1]));return isNaN(d.getTime())?null:d;}
    m=raw.match(/^(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})$/);
    if(m){var d2=new Date(Number(m[1]),Number(m[2])-1,Number(m[3]));return isNaN(d2.getTime())?null:d2;}
    var d3=new Date(raw); return isNaN(d3.getTime())?null:d3;
  }

  function renderMiniAnalyticsWeb() {
    var host=document.getElementById('webMiniAnalytics'); if(!host)return;
    var brandCounts=Object.create(null), attention=0, active=0, unassigned=0;
    var age={lt1:0,one3:0,gt3:0,unknown:0}, now=new Date();
    ASSETS.forEach(function(a){
      var brand=String(a.BRAND||'Unknown').trim()||'Unknown'; brandCounts[brand]=(brandCounts[brand]||0)+1;
      var s=normalize(a.STATUS); if(s==='ACTIVE'||s==='IN USE'||s==='AVAILABLE')active++; if(s.indexOf('REPAIR')!==-1||s.indexOf('MAINTENANCE')!==-1)attention++; if(!String(a.ASSIGNED_TO||'').trim())unassigned++;
      var d=parseAnalyticsDate(a.PURCHASE_DATE); if(!d){age.unknown++;return;} var years=(now-d)/(365.25*24*3600*1000); if(years<1)age.lt1++; else if(years<3)age.one3++; else age.gt3++;
    });
    var brands=Object.keys(brandCounts).sort(function(a,b){return brandCounts[b]-brandCounts[a]||a.localeCompare(b)}).slice(0,5), maxBrand=brands.length?brandCounts[brands[0]]:1;
    var brandBars=brands.length?brands.map(function(b,i){
      var w=Math.max(10,Math.round((brandCounts[b]/maxBrand)*100));
      return '<div class="mini-bar premium"><span class="rank">'+String(i+1).padStart(2,'0')+'</span>'+brandLogoHtml(b,'analytics-brand-logo')+'<b>'+esc(b)+'</b><i style="--w:'+w+'%"><u></u></i><em>'+brandCounts[b]+'</em></div>';
    }).join(''):'<p>No brand data yet</p>';
    var total=ASSETS.length||1, health=Math.round((active/total)*100), knownAge=Math.max(1,age.lt1+age.one3+age.gt3), p1=Math.round(age.lt1/knownAge*100),p2=Math.round(age.one3/knownAge*100),p3=Math.max(0,100-p1-p2);
    var ageHeadline=age.unknown ? age.unknown+' DATES TO COMPLETE' : 'PURCHASE DATES COMPLETE';
    var healthHeadline=attention ? attention+' DEVICE'+(attention===1?'':'S')+' NEED ATTENTION' : 'FLEET RUNNING CLEAN';
    host.innerHTML=''+
      '<article class="mini-analytics-card brand-leader-card premium-analytics-card"><div class="premium-card-glow"></div><div class="mini-analytics-card-top"><div><small class="analytics-kicker-pro">INVENTORY INTELLIGENCE</small><strong class="analytics-heading-pro">TOP 5 BRANDS</strong><p>Most deployed manufacturers across '+ASSETS.length+' managed assets</p></div><span class="mini-analytics-glyph">RANK</span></div><div class="mini-bars premium-leaderboard">'+brandBars+'</div></article>'+
      '<article class="mini-analytics-card premium-analytics-card age-card-pro"><div class="premium-card-glow age-glow"></div><div class="mini-analytics-card-top"><div><small class="analytics-kicker-pro">ASSET LIFECYCLE</small><strong class="analytics-heading-pro">'+ageHeadline+'</strong><p>Calculated live from Purchase Date</p></div><span class="mini-analytics-glyph">AGE</span></div><div class="mini-age-meter pro-meter"><i style="width:'+p1+'%"></i><i style="width:'+p2+'%"></i><i style="width:'+p3+'%"></i><i class="age-unknown-seg" style="width:'+(age.unknown/total*100)+'%"></i></div><div class="mini-metrics metric-grid-pro"><span class="mini-metric age-new"><b>'+age.lt1+'</b><i>&lt; 1 YEAR</i></span><span class="mini-metric age-mid"><b>'+age.one3+'</b><i>1–3 YEARS</i></span><span class="mini-metric age-old"><b>'+age.gt3+'</b><i>3+ YEARS</i></span><span class="mini-metric age-missing"><b>'+age.unknown+'</b><i>NO DATE</i></span></div></article>'+
      '<article class="mini-analytics-card premium-analytics-card health-card-pro"><div class="premium-card-glow health-glow"></div><div class="mini-health-layout"><div class="mini-health-ring pro-ring" style="--health-deg:'+(health*3.6)+'deg"><div><b>'+health+'%</b><span>READY</span></div></div><div class="mini-health-copy"><small class="analytics-kicker-pro">FLEET READINESS</small><strong class="analytics-heading-pro">'+healthHeadline+'</strong><p>'+active+' assets operational • live service snapshot</p><div class="mini-metrics health-grid-pro"><span class="mini-metric health-active"><b>'+active+'</b><i>ACTIVE</i></span><span class="mini-metric health-attention"><b>'+attention+'</b><i>ATTENTION</i></span><span class="mini-metric health-free"><b>'+unassigned+'</b><i>UNASSIGNED</i></span></div></div></div></article>';
  }

  function renderStats() {
    var categories = Object.create(null);
    ASSETS.forEach(function(asset) {
      var type = String(asset.DEVICE_TYPE || 'Other').trim() || 'Other';
      categories[type] = (categories[type] || 0) + 1;
    });

    var order = Object.keys(categories).sort(function(a,b) {
      return categories[b] - categories[a] || a.localeCompare(b);
    });

    var totalAssetValue = ASSETS.reduce(function(sum, asset) {
      var raw = String(asset.COST || '').replace(/[^0-9.\-]/g, '');
      var n = Number(raw);
      return sum + (isFinite(n) ? n : 0);
    }, 0);
    var valueByType=Object.create(null);
    ASSETS.forEach(function(asset){var k=String(asset.DEVICE_TYPE||'Other').trim()||'Other';valueByType[k]=(valueByType[k]||0)+costNumber(asset.COST);});
    renderWebPortfolioValue(totalAssetValue,valueByType);
    renderMiniAnalyticsWeb();

    var html = '<button type="button" class="stat-card' +
      (currentCategory === '__ALL__' ? ' active' : '') +
      '" data-filter-category="__ALL__"><b>' + ASSETS.length +
      '</b><span>Total Assets</span></button>';

    order.forEach(function(type) {
      html += '<button type="button" class="stat-card' +
        (currentCategory === type ? ' active' : '') +
        '" data-filter-category="' + esc(type) + '">' +
        '<b>' + categories[type] + '</b><span>' + esc(type) + '</span></button>';
    });

    statsEl.innerHTML = html;
    document.getElementById('heroAssetCount').textContent = String(ASSETS.length);
    var hc = document.getElementById('headerAssetCount');
    if (hc) hc.textContent = String(ASSETS.length);
  }

  function assetSearchText(asset) {
    return normalize([
      asset.ASSET_ID, asset.ASSET_TAG, asset.DEVICE_TYPE, asset.BRAND, asset.MODEL,
      asset.SERIAL, asset.LIBIB, asset.SERVICE_TAG, asset.DEPARTMENT,
      asset.ASSIGNED_TO, asset.STATUS
    ].join(' '));
  }

  function renderCards() {
    var q = normalize(searchInput.value || '');
    var visible = ASSETS.filter(function(asset) {
      var type = String(asset.DEVICE_TYPE || 'Other').trim() || 'Other';
      var categoryOK = currentCategory === '__ALL__' || type === currentCategory;
      var searchOK = !q || assetSearchText(asset).indexOf(q) !== -1;
      var brandOK = !filterBrand || !filterBrand.value || normalize(asset.BRAND) === normalize(filterBrand.value);
      var departmentOK = !filterDepartment || !filterDepartment.value || normalize(asset.DEPARTMENT) === normalize(filterDepartment.value);
      var statusOK = !filterStatus || !filterStatus.value || normalize(asset.STATUS) === normalize(filterStatus.value);
      return categoryOK && searchOK && brandOK && departmentOK && statusOK;
    });
    visible = sortVisibleAssets(visible);

    assetGrid.innerHTML = visible.map(function(asset) {
      var id = String(asset.ASSET_ID || '');
      var type = String(asset.DEVICE_TYPE || 'Other').trim() || 'Other';
      var image = photoUrl(asset, 420);
      var media = image
        ? '<div class="asset-photo"><img src="' + esc(image) + '" alt="' +
          esc(asset.ASSET_TAG || 'Asset') +
          '" loading="lazy" decoding="async" data-photo-id="' + esc(id) + '"><span class="photo-error-fallback" style="display:none">' +
          esc(type.substring(0,10)) + '</span></div>'
        : '<div class="asset-photo photo-fallback"><span>' + esc(type.substring(0,10)) + '</span></div>';

      return '<article class="asset-card" role="link" tabindex="0" data-asset-id="' + esc(id) + '">' +
        media +
        '<div class="asset-main">' +
          '<div class="asset-kicker">' + esc(type) + '</div>' +
          '<div class="asset-tag">' + esc(asset.ASSET_TAG || '-') + '</div>' +
          '<div class="asset-device"><span class="card-brand-mini">' + (brandLogoUrl(asset.BRAND) ? '<img src="' + esc(brandLogoUrl(asset.BRAND)) + '" alt="">' : '') + '</span>' + esc([asset.BRAND,asset.MODEL].filter(Boolean).join(' ') || '-') + '</div>' +
          '<div class="asset-assigned">ASSIGNED TO<strong>' + esc(asset.ASSIGNED_TO || 'Unassigned') + '</strong></div>' +
          '<div class="asset-meta"><span>' + esc(asset.ASSET_ID || '-') + '</span></div>' +
        '</div>' +
        '<div class="asset-side"><button type="button" class="status-pill quick-status-trigger ' +
          statusCss(asset.STATUS) + '" data-quick-status="' + esc(id) + '" aria-label="Change status">' +
          statusDotHtml(asset.STATUS) + '<span>' + esc(asset.STATUS || '-') + '</span><span>⌄</span></button>' +
        '<strong>›</strong></div></article>';
    }).join('');

    assetGrid.querySelectorAll('img[data-photo-id]').forEach(function(img) {
      var asset = getAsset(img.getAttribute('data-photo-id'));
      if (!asset) return;
      bindPhotoFallback(img, asset, 420, function() {
        img.style.display = 'none';
        var fallback = img.parentElement ? img.parentElement.querySelector('.photo-error-fallback') : null;
        if (fallback) fallback.style.display = 'flex';
      });
    });

    resultCount.textContent = visible.length + ' shown';
    emptyState.classList.toggle('show', visible.length === 0);
  }

  function renderDashboard() {
    renderStats();
    syncFilterMenus();
    renderCards();
  }

  function applyCustomSelectVisibility(select) {
    if (!select || select.getAttribute('data-custom-other') !== '1') return;
    var other = document.getElementById(select.id + '_OTHER');
    if (!other) return;
    var show = select.value === '__OTHER__';
    other.hidden = !show;
    other.required = show;
  }

  function bindWebCustomSelects(root) {
    (root || document).querySelectorAll('select[data-custom-other="1"]').forEach(function(select) {
      if (select.getAttribute('data-custom-bound') !== '1') {
        select.setAttribute('data-custom-bound','1');
        select.addEventListener('change', function(){
          applyCustomSelectVisibility(select);
          if (/_DEVICE_TYPE$/.test(select.id)) rebuildBrandSelect(select.id.replace('DEVICE_TYPE',''), null);
          if (/_BRAND$/.test(select.id)) updateBrandLogo(select.id.replace('BRAND',''));
        });
      }
      applyCustomSelectVisibility(select);
    });
    ['a_','e_'].forEach(function(prefix){
      var brand=document.getElementById(prefix+'BRAND'), other=document.getElementById(prefix+'BRAND_OTHER');
      if(brand) updateBrandLogo(prefix);
      bindBrandChipButtons(prefix);
      if(other && other.getAttribute('data-brand-other-bound')!=='1'){ other.setAttribute('data-brand-other-bound','1'); other.addEventListener('input',function(){updateBrandLogo(prefix);}); }
    });
  }

  function setWebCustomSelect(prefix, key, raw) {
    var select = document.getElementById(prefix + key);
    if (!select || select.getAttribute('data-custom-other') !== '1') return false;
    var value = String(raw || '').trim();
    var matchedValue = '';
    Array.prototype.forEach.call(select.options, function(opt) {
      if (opt.value !== '__OTHER__' && normalize(opt.value) === normalize(value)) matchedValue = opt.value;
    });
    if (!value) select.value = '';
    else if (matchedValue) select.value = matchedValue;
    else select.value = '__OTHER__';
    var other = document.getElementById(select.id + '_OTHER');
    if (other) other.value = (!value || matchedValue) ? '' : value;
    applyCustomSelectVisibility(select);
    return true;
  }

  function syncEditForm(asset) {
    document.getElementById('editAssetIdLocked').value = asset.ASSET_ID || '';
    FIELDS.forEach(function(key) {
      var el = document.getElementById('e_' + key);
      if (!el) return;
      if ((key === 'DEVICE_TYPE' || key === 'DEPARTMENT') && setWebCustomSelect('e_', key, asset[key])) return;
      if (key === 'BRAND') { rebuildBrandSelect('e_', asset.BRAND || ''); return; }
      if (key === 'PURCHASE_DATE') el.value = toDateInputValue(asset[key]);
      else if (key === 'COST') el.value = formatMoneyEditable(asset[key]);
      else el.value = asset[key] || '';
    });
  }

  function editFormState() {
    var state = {};
    FIELDS.forEach(function(key) {
      var el = document.getElementById('e_' + key);
      if (!el) return;
      var v = String(el.value || '');
      if (el.getAttribute && el.getAttribute('data-custom-other') === '1' && v === '__OTHER__') {
        var other = document.getElementById('e_' + key + '_OTHER');
        v += '|' + String(other && other.value || '');
      }
      state[key] = v;
    });
    return JSON.stringify(state);
  }

  function setEditBaseline() {
    editInitialState = editFormState();
  }

  function editHasUnsavedChanges() {
    return !!editInitialState && editFormState() !== editInitialState;
  }

  function forceCloseEdit() {
    editInitialState = '';
    closeModal(editGuardModal);
    closeModal(editModal);
  }

  function requestCloseEdit() {
    if (!editModal.classList.contains('open')) return;
    if (!editHasUnsavedChanges()) {
      forceCloseEdit();
      return;
    }
    openModal(editGuardModal);
  }


  function webEsc(value){return String(value==null?'':value).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');}
  var webMaintenanceEditingId = '', webMaintenanceRecords = [];
  function webLoadMaintenance(assetId){
    var host=document.getElementById('webMaintenanceList'),summary=document.getElementById('webMaintenanceSummary');
    if(host)host.innerHTML='<div class="maintenance-web-empty"><span class="mnt-spin"></span> Loading history…</div>';
    if(!window.google||!google.script||!google.script.run){if(host)host.textContent='Maintenance history requires the deployed Apps Script web app.';return}
    google.script.run.withSuccessHandler(function(res){
      var records=res&&res.records||[];webMaintenanceRecords=records;var total=records.reduce(function(sum,r){return sum+(Number(r.TOTAL_COST)||0)},0);
      if(summary)summary.innerHTML='<span><b>'+records.length+'</b> service records</span><strong>฿'+total.toLocaleString('en-US',{maximumFractionDigits:2})+' total</strong>';
      if(!host)return;
      if(!records.length){host.innerHTML='<div class="maintenance-web-empty"><span class="mnt-empty-icon">🔧</span><b>No service history yet</b><small>Repairs, inspections and warranty visits will appear here.</small></div>';return}
      host.innerHTML=records.map(function(r){
        var files=[].concat(r.PHOTOS||[],r.DOCUMENTS||[]).map(function(f){return '<a target="_blank" rel="noopener" href="'+webEsc(f.url||('https://drive.google.com/open?id='+encodeURIComponent(f.id||'')))+'">'+webEsc(f.name||'Attachment')+'</a>'}).join('');
        return '<article class="maintenance-web-record"><div class="mnt-web-top"><div><small>'+webEsc(r.TYPE||'Service')+' · '+webEsc(r.REPORTED_DATE||'Date not set')+'</small><strong>'+webEsc(r.VENDOR||'IT Department')+'</strong></div><span class="mnt-web-status">'+webEsc(r.STATUS||'Logged')+'</span></div><p><b>Issue</b> '+webEsc(r.PROBLEM||'—')+'</p>'+(r.DIAGNOSIS?'<p><b>Diagnosis</b> '+webEsc(r.DIAGNOSIS)+'</p>':'')+(r.ACTION_TAKEN?'<p><b>Work done</b> '+webEsc(r.ACTION_TAKEN)+'</p>':'')+'<div class="mnt-web-cost"><span>Parts ฿'+(Number(r.PARTS_COST)||0).toLocaleString()+' · Labour ฿'+(Number(r.LABOR_COST)||0).toLocaleString()+'</span><b>฿'+(Number(r.TOTAL_COST)||0).toLocaleString()+'</b></div>'+(files?'<div class="maintenance-web-files">'+files+'</div>':'')+(r.NOTES?'<small class="mnt-web-notes">'+webEsc(r.NOTES)+'</small>':'')+'<div class="mnt-web-actions"><button type="button" data-web-mnt-edit="'+webEsc(r.RECORD_ID)+'">✎ Edit</button><button type="button" data-web-mnt-delete="'+webEsc(r.RECORD_ID)+'">Delete</button></div></article>'
      }).join('');
    }).withFailureHandler(function(err){if(host)host.textContent='Could not load maintenance history: '+(err&&err.message||err)}).getAssetMaintenanceForUi(assetId);
  }
  function webReadFiles(inputId){
    var files=Array.prototype.slice.call(document.getElementById(inputId).files||[]);
    if(files.length>8)return Promise.reject(new Error('Maximum 8 files per group.'));
    return Promise.all(files.map(function(file){if(file.size>5*1024*1024)throw new Error(file.name+' is over 5 MB.');return new Promise(function(resolve,reject){var r=new FileReader();r.onload=function(){resolve({name:file.name,mimeType:file.type||'application/octet-stream',dataUrl:String(r.result||'')})};r.onerror=function(){reject(new Error('Could not read '+file.name))};r.readAsDataURL(file)})}));
  }
  function webOpenMaintenance(record){
    var asset=getAsset(currentAssetId);if(!asset)return;
    webMaintenanceEditingId=record&&record.RECORD_ID?String(record.RECORD_ID):'';
    var form=document.getElementById('webMaintenanceForm');form.reset();
    var fields={webMntType:'TYPE',webMntStatus:'STATUS',webMntReported:'REPORTED_DATE',webMntSent:'SENT_DATE',webMntReturn:'RETURN_DATE',webMntVendor:'VENDOR',webMntContact:'CONTACT',webMntProblem:'PROBLEM',webMntDiagnosis:'DIAGNOSIS',webMntAction:'ACTION_TAKEN',webMntParts:'PARTS',webMntPartsCost:'PARTS_COST',webMntLaborCost:'LABOR_COST',webMntNotes:'NOTES'};
    Object.keys(fields).forEach(function(id){var el=document.getElementById(id);if(el)el.value=record&&record[fields[id]]!=null?record[fields[id]]:(id==='webMntPartsCost'||id==='webMntLaborCost'?'0':'')});
    document.getElementById('webMaintenanceAssetHint').textContent=(asset.ASSET_TAG||asset.ASSET_ID)+' · '+(asset.BRAND||'')+' '+(asset.MODEL||'');
    document.querySelector('#webMaintenanceModal .modal-head h2').textContent=webMaintenanceEditingId?'Edit service record':'Add service record';
    document.getElementById('webMntSave').textContent=webMaintenanceEditingId?'SAVE CHANGES':'SAVE RECORD';
    if(!record)document.getElementById('webMntReported').value=new Date().toISOString().slice(0,10);
    openModal(document.getElementById('webMaintenanceModal'));
  }
  document.getElementById('webAddMaintenanceBtn').addEventListener('click',function(){webOpenMaintenance(null)});
  function webCloseMaintenance(){
    var modal=document.getElementById('webMaintenanceModal');
    if(!modal)return;
    closeModal(modal);
    webMaintenanceEditingId='';
    var form=document.getElementById('webMaintenanceForm');
    if(form)form.reset();
  }
  document.getElementById('webMaintenanceCloseX').addEventListener('click',webCloseMaintenance);
  document.getElementById('webMntCancel').addEventListener('click',webCloseMaintenance);
  document.getElementById('webMaintenanceModal').addEventListener('click',function(e){
    if(e.target===this)webCloseMaintenance();
  });
  document.addEventListener('keydown',function(e){
    var modal=document.getElementById('webMaintenanceModal');
    if(e.key==='Escape'&&modal&&modal.classList.contains('open'))webCloseMaintenance();
  });
  document.getElementById('webMaintenanceList').addEventListener('click',function(e){
    var edit=e.target.closest('[data-web-mnt-edit]'),del=e.target.closest('[data-web-mnt-delete]');
    if(edit){var rec=(webMaintenanceRecords||[]).find(function(r){return String(r.RECORD_ID)===edit.getAttribute('data-web-mnt-edit')});if(!rec){google.script.run.withSuccessHandler(function(x){var rr=(x&&x.records||[]).find(function(r){return String(r.RECORD_ID)===edit.getAttribute('data-web-mnt-edit')});if(rr)webOpenMaintenance(rr)}).getAssetMaintenanceForUi(currentAssetId)}else webOpenMaintenance(rec)}
    if(del){var rid=del.getAttribute('data-web-mnt-delete');if(!confirm('Delete this service record? The Drive attachments will be retained.'))return;del.disabled=true;google.script.run.withSuccessHandler(function(){webLoadMaintenance(currentAssetId);showToast('Service record deleted')}).withFailureHandler(function(err){del.disabled=false;showToast(err&&err.message||'Could not delete record')}).deleteAssetMaintenanceForUi(currentAssetId,rid)}
  });
  document.getElementById('webMaintenanceForm').addEventListener('submit',function(e){
    e.preventDefault();var btn=document.getElementById('webMntSave'),old=btn.textContent;btn.disabled=true;btn.textContent='SAVING…';
    Promise.all([webReadFiles('webMntPhotos'),webReadFiles('webMntDocuments')]).then(function(files){
      var payload={type:document.getElementById('webMntType').value,status:document.getElementById('webMntStatus').value,reportedDate:document.getElementById('webMntReported').value,sentDate:document.getElementById('webMntSent').value,returnDate:document.getElementById('webMntReturn').value,vendor:document.getElementById('webMntVendor').value,contact:document.getElementById('webMntContact').value,problem:document.getElementById('webMntProblem').value,diagnosis:document.getElementById('webMntDiagnosis').value,actionTaken:document.getElementById('webMntAction').value,parts:document.getElementById('webMntParts').value,partsCost:document.getElementById('webMntPartsCost').value,laborCost:document.getElementById('webMntLaborCost').value,notes:document.getElementById('webMntNotes').value,photos:files[0],documents:files[1]};
      var runner=google.script.run.withSuccessHandler(function(){closeModal(document.getElementById('webMaintenanceModal'));webMaintenanceEditingId='';webLoadMaintenance(currentAssetId);showToast('Service record saved');btn.disabled=false;btn.textContent=old}).withFailureHandler(function(err){showToast(err&&err.message||'Could not save record');btn.disabled=false;btn.textContent=old});
      if(webMaintenanceEditingId)runner.updateAssetMaintenanceForUi(currentAssetId,webMaintenanceEditingId,payload);else runner.addAssetMaintenanceForUi(currentAssetId,payload);
    }).catch(function(err){showToast(err.message||'Could not read attachments');btn.disabled=false;btn.textContent=old});
  });


  function renderDetail(asset) {
    if (!asset) return;

    currentAssetId = String(asset.ASSET_ID || '');
    setText('crumbType', asset.DEVICE_TYPE);
    setText('mainAssetTag', asset.ASSET_TAG);
    setText('mainAssetId', asset.ASSET_ID);
    setText('summaryType', asset.DEVICE_TYPE);
    setText('summaryBrand', asset.BRAND);
    setText('summaryModel', asset.MODEL);
    var brandLogoHost=document.getElementById('detailBrandLogo');
    if(brandLogoHost) brandLogoHost.outerHTML=brandLogoHtml(asset.BRAND,'detail-brand-logo').replace('class="detail-brand-logo"','class="detail-brand-logo" id="detailBrandLogo"');
    var brandNameHost=document.getElementById('detailBrandName'); if(brandNameHost) brandNameHost.textContent=valueOrDash(asset.BRAND);
    var qrReady=document.getElementById('qrReadyNote'); if(qrReady){ var qrs=qrReady.querySelector('span'); if(qrs) qrs.textContent=asset.LIBIB?'QR READY • Libib + Asset Tag searchable':'QR READY • Asset Tag '+valueOrDash(asset.ASSET_TAG); }
    setText('summaryStatus', asset.STATUS);
    setText('summarySerial', asset.SERIAL || asset.SERVICE_TAG);
    setText('lastUpdated', asset.UPDATED);

    var statusDot = document.getElementById('summaryStatusDot');
    if (statusDot) statusDot.className = 'neon-status-dot ' + statusTone(asset.STATUS);

    var supportBtn = document.getElementById('supportLookupBtn');
    if (supportBtn) {
      var supportInfo = supportInfoForAsset(asset);
      supportBtn.textContent = supportInfo.label;
      supportBtn.disabled = !supportInfo.url;
      supportBtn.title = supportInfo.direct
        ? 'Open this device directly on the manufacturer support page'
        : 'Open official manufacturer support. Serial / Service Tag will be copied when available.';
    }

    var map = [
      'ASSET_TAG','DEVICE_TYPE','BRAND','MODEL','SERIAL','SERVICE_TAG','COLOR',
      'DEPARTMENT','ASSIGNED_TO','STATUS','PURCHASE_DATE','WARRANTY','COST',
      'ASSET_ID','LIBIB','PRODUCT_KEY','LOCAL_USERNAME','LOCAL_PASSWORD',
      'ADMIN_USERNAME','ADMIN_PASSWORD','MICROSOFT_USERNAME','MICROSOFT_PASSWORD',
      'EMAIL','EMAIL_PASSWORD','ICLOUD','ICLOUD_PASSWORD','PASSWORD_HINT'
    ];
    map.forEach(function(key){ setText('d_' + key, asset[key]); });
    setText('d_COST', asset.COST ? formatBahtDisplay(asset.COST) : '—');
    setText('d_SERIAL_2', asset.SERIAL);
    setText('d_SERVICE_TAG_2', asset.SERVICE_TAG);

    var notes = document.getElementById('d_NOTES');
    notes.textContent = asset.NOTES && String(asset.NOTES).trim() ? asset.NOTES : 'No notes.';
    setText('systemSource', asset.SOURCE_SHEET);
    setText('systemOriginal', asset.ORIGINAL_DATE);

    var preview = document.getElementById('photoPreview');
    var hasPendingPhoto = pendingDetailPhoto && normalize(pendingPhotoAssetId) === normalize(asset.ASSET_ID);
    var inFlight = photoUploadInFlight[normalize(asset.ASSET_ID)];
    var hasInFlightPhoto = !hasPendingPhoto && !!(inFlight && inFlight.photo && inFlight.photo.dataUrl);
    var image = hasPendingPhoto
      ? pendingDetailPhoto.dataUrl
      : hasInFlightPhoto
        ? inFlight.photo.dataUrl
        : photoUrl(asset, 1400);
    preview.classList.toggle('is-pending', !!(hasPendingPhoto || hasInFlightPhoto));
    preview.innerHTML = image
      ? '<img src="' + esc(image) + '" alt="Device photo" decoding="async">' +
        '<span class="photo-error-fallback" style="display:none">NO PHOTO</span>'
      : '<span>NO PHOTO</span>';

    var pendingActions = document.getElementById('photoPendingActions');
    if (pendingActions) pendingActions.classList.toggle('hidden', !(hasPendingPhoto && !hasInFlightPhoto));
    var syncBadge = document.getElementById('photoSyncBadge');
    if (syncBadge) {
      syncBadge.classList.toggle('hidden', !hasInFlightPhoto);
      if (hasInFlightPhoto) syncBadge.textContent = 'PHOTO SYNCING…';
    }

    var img = preview.querySelector('img');
    if (img) {
      if (!hasPendingPhoto && !hasInFlightPhoto) {
        bindPhotoFallback(img, asset, 1400, function() {
          img.style.display = 'none';
          var fallback = preview.querySelector('.photo-error-fallback');
          if (fallback) fallback.style.display = 'flex';
        });
      } else {
        img.addEventListener('error', function() {
          img.style.display = 'none';
          var fallback = preview.querySelector('.photo-error-fallback');
          if (fallback) fallback.style.display = 'flex';
        });
      }
    }

    document.getElementById('deleteAssetTag').textContent = valueOrDash(asset.ASSET_TAG);
    document.getElementById('deleteAssetId').textContent = valueOrDash(asset.ASSET_ID);
    if (!editModal.classList.contains('open')) syncEditForm(asset);
    webLoadMaintenance(asset.ASSET_ID);
  }

  function hasAppsScriptHistory() {
    return !!(
      window.google &&
      google.script &&
      google.script.history &&
      typeof google.script.history.push === 'function' &&
      typeof google.script.history.replace === 'function' &&
      typeof google.script.history.setChangeHandler === 'function'
    );
  }

  function historyUrlForDetail(id) {
    return location.pathname + '?id=' + encodeURIComponent(id);
  }

  function historyUrlForDashboard() {
    return location.pathname;
  }

  function writeHistory(mode, view, id) {
    var state = {view:view,id:id || ''};

    /*
     * Apps Script HTML Service runs inside an IFRAME sandbox.
     * google.script.history is the supported way to sync the
     * top-level web-app URL with SPA state without reloading.
     */
    try {
      if (hasAppsScriptHistory()) {
        var params = view === 'detail' && id
          ? {id:String(id)}
          : {};

        if (mode === 'replace') {
          google.script.history.replace(state, params, '');
        } else if (mode === 'push') {
          google.script.history.push(state, params, '');
        }

        return;
      }
    } catch (err) {
      console.warn('Apps Script history warning:', err);
    }

    /*
     * Fallback for local/static testing only.
     */
    try {
      var url = view === 'detail'
        ? historyUrlForDetail(id)
        : historyUrlForDashboard();

      if (mode === 'replace') history.replaceState(state, '', url);
      else if (mode === 'push') history.pushState(state, '', url);
    } catch (err2) {}
  }

  function installHistoryHandler() {
    if (hasAppsScriptHistory()) {
      try {
        google.script.history.setChangeHandler(function(e) {
          var id = '';

          if (e && e.state && e.state.id) {
            id = String(e.state.id);
          } else if (
            e &&
            e.location &&
            e.location.parameter &&
            e.location.parameter.id
          ) {
            id = String(e.location.parameter.id);
          }

          if (id && getAsset(id)) {
            routeToDetail(id, '');
          } else {
            routeToDashboard('', true);
          }
        });

        return true;
      } catch (err) {
        console.warn('History handler warning:', err);
      }
    }

    return false;
  }

  function routeToDetail(id, historyMode) {
    var asset = getAsset(id);
    if (!asset) return false;

    if (pendingDetailPhoto && normalize(pendingPhotoAssetId) !== normalize(asset.ASSET_ID)) clearPendingPhoto(false);
    dashboardScroll = window.scrollY || dashboardScroll;
    renderDetail(asset);
    dashboardView.classList.add('hidden');
    detailView.classList.remove('hidden');
    headerDashboardActions.classList.add('hidden');
    headerDetailActions.classList.remove('hidden');

    if (historyMode) writeHistory(historyMode, 'detail', asset.ASSET_ID);
    document.title = valueOrDash(asset.ASSET_TAG) + ' • ' + APP_TITLE;
    window.scrollTo(0,0);

    if (!asset.__full) {
      detailView.classList.add('detail-loading');
      ensureFullAsset(asset.ASSET_ID, function(fullAsset) {
        detailView.classList.remove('detail-loading');
        if (fullAsset && normalize(currentAssetId) === normalize(fullAsset.ASSET_ID)) {
          renderDetail(fullAsset);
        }
      });
    } else {
      detailView.classList.remove('detail-loading');
    }
    return true;
  }

  function routeToDashboard(historyMode, restoreScroll) {
    clearPendingPhoto(false);
    currentAssetId = '';
    detailView.classList.add('hidden');
    dashboardView.classList.remove('hidden');
    headerDetailActions.classList.add('hidden');
    headerDashboardActions.classList.remove('hidden');

    if (historyMode) writeHistory(historyMode, 'dashboard', '');
    document.title = APP_TITLE;

    if (restoreScroll) {
      window.requestAnimationFrame(function(){ window.scrollTo(0, dashboardScroll || 0); });
    } else {
      window.scrollTo(0,0);
    }
  }

  function openModal(el) {
    el.classList.add('open');
    el.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(el) {
    el.classList.remove('open');
    el.setAttribute('aria-hidden','true');
    if (!document.querySelector('.modal.open')) document.body.style.overflow = '';
  }


  function openEditField(fieldKey) {
    var asset = getAsset(currentAssetId);
    if (!asset) return;
    if (!asset.__full) {
      showToast('Loading full device data…');
      ensureFullAsset(asset.ASSET_ID, function(){ openEditField(fieldKey); });
      return;
    }

    syncEditForm(asset);
    setEditBaseline();
    openModal(editModal);

    window.setTimeout(function(){
      Array.prototype.slice.call(editModal.querySelectorAll('.field-highlight')).forEach(function(el){
        el.classList.remove('field-highlight');
      });

      var field = document.getElementById('e_' + fieldKey);
      if (!field) field = document.getElementById('e_ASSET_TAG');
      if (!field) return;

      var wrapper = field.closest('.field');
      if (wrapper) {
        wrapper.classList.add('field-highlight');
        wrapper.scrollIntoView({behavior:'smooth',block:'center'});
      }

      try { field.focus({preventScroll:true}); } catch (err) { field.focus(); }
    },90);
  }

  function clearPendingPhoto(renderCurrent) {
    pendingDetailPhoto = null;
    pendingDetailPhotoFile = null;
    pendingPhotoAssetId = '';
    photoInput.value = '';

    var aiButton = document.getElementById('photoAiBtn');
    if (aiButton) {
      aiButton.disabled = true;
      aiButton.textContent = 'REMOVE BACKGROUND — FAST';
    }

    var actions = document.getElementById('photoPendingActions');
    if (actions) actions.classList.add('hidden');
    var syncBadge = document.getElementById('photoSyncBadge');
    if (syncBadge) syncBadge.classList.add('hidden');

    var preview = document.getElementById('photoPreview');
    if (preview) preview.classList.remove('is-pending');

    if (renderCurrent && currentAssetId) {
      var asset = getAsset(currentAssetId);
      if (asset) renderDetail(asset);
    }
  }

  function openManufacturerSupport() {
    var asset = getAsset(currentAssetId);
    if (!asset) return;

    var info = supportInfoForAsset(asset);
    if (!info.url) {
      showToast('No official support portal mapped for this brand yet');
      return;
    }

    /*
     * IMPORTANT:
     * Never fall back to window.location here.
     * Apps Script runs in a sandboxed frame; replacing its location can
     * leave the web app on a blank / broken page. Always open support
     * separately and keep the current Asset Detail exactly as-is.
     */
    if (info.identifier && !info.direct) {
      copyIdentifierQuietly(info.identifier);
    }

    var link = document.createElement('a');
    link.href = info.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    link.remove();

    if (info.identifier && !info.direct) {
      showToast('Serial / Service Tag copied — support opened in a new tab');
    } else {
      showToast('Manufacturer support opened in a new tab');
    }
  }

  function collect(prefix, includeAssetId) {
    var obj = {};
    if (includeAssetId) obj.ASSET_ID = currentAssetId;
    FIELDS.forEach(function(key) {
      var el = document.getElementById(prefix + key);
      if (el) {
        var value = String(el.value || '').trim();
        if (el.getAttribute && el.getAttribute('data-custom-other') === '1' && value === '__OTHER__') {
          var custom = document.getElementById(prefix + key + '_OTHER');
          value = String(custom && custom.value || '').trim();
        }
        if (key === 'COST') value = value.replace(/฿/g,'').replace(/,/g,'').trim();
        obj[key] = value;
      }
    });
    return obj;
  }

/* RISP photo pipeline — fast white-background default; AI only after a manual click. */
(function (root) {
  'use strict';
  var aiModulePromise = null, aiQueue = Promise.resolve();
  var fastCache = new WeakMap(), aiCache = new WeakMap();
  function deadline(p, ms) {
    var timer;
    return Promise.race([p, new Promise(function(_, reject) { timer = setTimeout(function(){ reject(new Error('Background removal timed out.')); }, ms); })]).then(function(v){ clearTimeout(timer); return v; }, function(e){ clearTimeout(timer); throw e; });
  }
  function read(blob) { return new Promise(function(resolve,reject) { var r=new FileReader(); r.onload=function(){resolve(r.result);}; r.onerror=function(){reject(new Error('Cannot read this image.'));}; r.readAsDataURL(blob); }); }
  function canvasFor(blob, max) {
    return new Promise(function(resolve,reject) {
      var url=URL.createObjectURL(blob), img=new Image();
      img.onload=function(){
        URL.revokeObjectURL(url);
        var scale=Math.min(1,max/Math.max(img.naturalWidth,img.naturalHeight));
        var c=document.createElement('canvas'); c.width=Math.max(1,Math.round(img.naturalWidth*scale)); c.height=Math.max(1,Math.round(img.naturalHeight*scale));
        c.getContext('2d').drawImage(img,0,0,c.width,c.height); resolve(c);
      };
      img.onerror=function(){URL.revokeObjectURL(url);reject(new Error('Cannot open this image. Try a JPG or PNG.'));};
      img.src=url;
    });
  }
  function blobOf(canvas,mime,quality){
    mime=mime||'image/jpeg';
    quality=quality==null?0.86:quality;
    return new Promise(function(resolve,reject){canvas.toBlob(function(b){b?resolve(b):reject(new Error('Cannot prepare image.'));},mime,quality);});
  }
  function frame(blob, cutout, maxSize, mime, quality) {
    maxSize=maxSize||920;
    mime=mime||'image/jpeg';
    return canvasFor(blob,maxSize).then(function(c){
      var ctx=c.getContext('2d'), x0=0,y0=0,x1=c.width-1,y1=c.height-1;
      if(cutout){
        var d=ctx.getImageData(0,0,c.width,c.height).data; x0=c.width;y0=c.height;x1=-1;y1=-1;
        for(var y=0;y<c.height;y++) for(var x=0;x<c.width;x++) if(d[(y*c.width+x)*4+3]>30){x0=Math.min(x0,x);x1=Math.max(x1,x);y0=Math.min(y0,y);y1=Math.max(y1,y);}
        if(x1<x0||y1<y0) throw new Error('No device was detected. Try another photo.');
      }
      var out=document.createElement('canvas'); out.width=maxSize; out.height=maxSize;
      var draw=out.getContext('2d'); draw.fillStyle='#fff'; draw.fillRect(0,0,maxSize,maxSize);
      var margin=Math.round(maxSize*0.87),w=x1-x0+1,h=y1-y0+1,s=Math.min(margin/w,margin/h);
      draw.imageSmoothingEnabled=true; draw.imageSmoothingQuality='high';
      draw.drawImage(c,x0,y0,w,h,(maxSize-w*s)/2,(maxSize-h*s)/2,w*s,h*s);
      return blobOf(out,mime,quality);
    });
  }
  function validate(file) {
    if(!file||!/^image\//.test(file.type)) throw new Error('Select an image file.');
    if(file.size>30*1024*1024) throw new Error('Please choose a photo below 30 MB.');
  }
  function nameFor(file,ext){return String(file.name||'device').replace(/\.[^.]+$/,'')+(ext||'.jpg');}
  function fastProcess(file){
    validate(file);
    return frame(file,false,920,'image/jpeg',0.84).then(function(result){return read(result).then(function(dataUrl){return {dataUrl:dataUrl,fileName:nameFor(file,'.jpg'),mimeType:'image/jpeg',blob:result,backgroundRemoved:false,whiteBackground:true};});});
  }
  function aiPanel(){
    var box=document.createElement('div'); box.setAttribute('role','dialog'); box.setAttribute('aria-modal','true'); box.setAttribute('aria-label','Remove photo background');
    box.style.cssText='position:fixed;inset:0;z-index:99999;display:grid;place-items:center;padding:20px;background:rgba(2,9,17,.7);backdrop-filter:blur(10px);font:15px/1.5 system-ui;color:#eff7ff';
    box.innerHTML='<div style="width:min(440px,100%);padding:26px;border-radius:22px;background:#0c1a2a;border:1px solid #34516f;box-shadow:0 24px 80px #0008"><b style="font-size:20px">Removing background</b><p aria-live="polite">Loading the AI model… this slow mode runs only when requested.</p></div>';
    document.body.appendChild(box); return {box:box,status:box.querySelector('p')};
  }
  function aiProcess(file){
    validate(file); var ui=aiPanel();
    return canvasFor(file,1400).then(function(c){return blobOf(c);}).then(function(resized){
      ui.status.textContent='Removing background…';
      if(!aiModulePromise) aiModulePromise=import('https://cdn.jsdelivr.net/npm/@imgly/background-removal@1.7.0/+esm').catch(function(firstError){return import('https://esm.sh/@imgly/background-removal@1.7.0?deps=onnxruntime-web@1.21.0-dev.20250206-d981b153d3').catch(function(secondError){aiModulePromise=null;throw new Error('AI module could not load from either CDN: '+(secondError&&secondError.message||firstError&&firstError.message||'network error'));});});
      return deadline(aiModulePromise,60000).then(function(mod){
        var remove=mod.removeBackground||mod.default;
        return deadline(remove(resized,{model:'isnet_quint8',device:'cpu',output:{format:'image/png',quality:1},progress:function(key,current,total){if(ui.box.isConnected)ui.status.textContent=key.indexOf('fetch')===0?'Loading AI model… '+Math.round(total?current/total*100:0)+'%':'Removing background…';}}),180000);
      });
    }).then(function(cut){return frame(cut,true,920,'image/jpeg',0.90);}).then(function(result){return read(result).then(function(dataUrl){return {dataUrl:dataUrl,fileName:nameFor(file,'.jpg'),mimeType:'image/jpeg',blob:result,backgroundRemoved:true,whiteBackground:true};});}).finally(function(){if(ui.box&&ui.box.remove)ui.box.remove();});
  }
  root.RISPPhoto={
    prepare:function(file){if(fastCache.has(file))return fastCache.get(file);var p=fastProcess(file);fastCache.set(file,p);p.catch(function(){fastCache.delete(file);});return p;},
    prepareAI:function(file){if(aiCache.has(file))return aiCache.get(file);var p=aiQueue.catch(function(){}).then(function(){return aiProcess(file);});aiQueue=p;aiCache.set(file,p);p.catch(function(){aiCache.delete(file);});return p;}
  };
})(window);

  // Verified scan results are shown above the current dashboard.
  var scanDialog=null, scanReturnHandled=false;
  var scanAudioCtx = null;
  function playScanConfirm(){
    try {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      if (!scanAudioCtx) scanAudioCtx = new AC();
      var ctx = scanAudioCtx;
      var play = function(){
        var now = ctx.currentTime;
        var gain = ctx.createGain();
        var osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, now);
        osc.frequency.exponentialRampToValueAtTime(1320, now + .075);
        gain.gain.setValueAtTime(.0001, now);
        gain.gain.exponentialRampToValueAtTime(.22, now + .008);
        gain.gain.exponentialRampToValueAtTime(.0001, now + .18);
        osc.connect(gain); gain.connect(ctx.destination); osc.start(now); osc.stop(now + .2);
      };
      if (ctx.state === 'suspended') ctx.resume().then(play).catch(function(){}); else play();
      if (navigator.vibrate) navigator.vibrate([35,35,65]);
    } catch (err) {}
  }
  function showVerifiedScan(raw){
    playScanConfirm();
    if(scanDialog)scanDialog.remove();
    scanDialog=document.createElement('div');scanDialog.className='risp-scan-overlay';
    scanDialog.innerHTML='<section role="dialog" aria-modal="true" aria-label="Scan result" class="risp-scan-card"><button type="button" class="risp-scan-close" aria-label="Close">×</button><small>QR SCAN</small><h2>Checking inventory…</h2><div class="risp-scan-content"></div><div class="risp-scan-actions"></div></section>';
    document.body.appendChild(scanDialog);var dialog=scanDialog,content=dialog.querySelector('.risp-scan-content'),actions=dialog.querySelector('.risp-scan-actions');
    function close(){dialog.remove();if(scanDialog===dialog)scanDialog=null;}
    dialog.querySelector('button').onclick=close;dialog.querySelector('button').focus();
    google.script.run.withSuccessHandler(function(r){
      if(!dialog.isConnected)return;
      if(r&&r.found){
        var a=getAsset(r.assetId)||{ASSET_ID:r.assetId,ASSET_TAG:r.assetTag,DEVICE_TYPE:r.deviceType,BRAND:r.brand,MODEL:r.model,STATUS:r.status,ASSIGNED_TO:r.assignedTo,PHOTO_FILE_ID:r.photoFileId};
        if(!getAsset(r.assetId))upsertAsset(a);
        dialog.querySelector('h2').textContent=a.ASSET_TAG||a.ASSET_ID;
        var url=photoUrl(a,720);
        content.innerHTML=(url?'<img class="risp-scan-photo" src="'+esc(url)+'" alt="Device photo">':'')+'<p>'+esc([a.BRAND,a.MODEL].filter(Boolean).join(' '))+'</p><p>'+esc(a.STATUS||'')+'</p><code>'+esc(raw)+'</code>';
        var b=document.createElement('button');b.type='button';b.className='btn navy';b.textContent='OPEN DEVICE';b.onclick=function(){close();routeToDetail(a.ASSET_ID,'push')};actions.appendChild(b);b.focus();
      }else if(r&&r.ambiguous){
        dialog.querySelector('h2').textContent='More than one device matches';content.textContent='Check QR Issues before using this code. '+(r.matches||[]).map(function(a){return a.assetTag||a.assetId}).join(', ');
      }else{close();openAdd(raw);showToast('New QR — complete the device details and save');}
    }).withFailureHandler(function(e){if(!dialog.isConnected)return;dialog.querySelector('h2').textContent='Could not verify QR';content.textContent=e.message||String(e);var retry=document.createElement('button');retry.type='button';retry.className='btn navy';retry.textContent='TRY AGAIN';retry.onclick=function(){close();showVerifiedScan(raw)};actions.appendChild(retry);}).resolveScannedAsset(raw);
  }
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&scanDialog){scanDialog.remove();scanDialog=null;}});

  function optimizeImage(file, done, fail) {
    if(!file){done(null);return;}
    window.RISPPhoto.prepare(file).then(done).catch(function(e){fail(e.message||String(e));});
  }

  function optimizeImageAI(file, done, fail) {
    if(!file){if(fail)fail('Select an image file.');return;}
    window.RISPPhoto.prepareAI(file).then(done).catch(function(e){if(fail)fail(e.message||String(e));});
  }

  function openAdd(prefillQr) {
    addForm.reset();
    rebuildBrandSelect('a_', '');
    bindWebCustomSelects(addForm);
    selectedAddPhoto = null;
    selectedAddPhotoPrepared = null;
    document.getElementById('addPhotoPreview').innerHTML = 'NO PHOTO';
    var addAiButton = document.getElementById('addPhotoAiBtn');
    if (addAiButton) { addAiButton.disabled = true; addAiButton.textContent = 'REMOVE BACKGROUND — FAST'; }

    var qrValue = String(prefillQr || '').trim();
    if (qrValue) {
      var libibField = document.getElementById('a_LIBIB');
      if (libibField) libibField.value = qrValue;
    }

    openModal(addModal);
    window.setTimeout(function(){
      var first = document.getElementById('a_ASSET_TAG');
      if (first) first.focus();
      if (qrValue) showToast('QR value added to Libib / QR Code');
    },80);
  }

  function closeAdd() {
    closeModal(addModal);
    selectedAddPhoto = null;
    selectedAddPhotoPrepared = null;
    var addAiButton = document.getElementById('addPhotoAiBtn');
    if (addAiButton) { addAiButton.disabled = true; addAiButton.textContent = 'REMOVE BACKGROUND — FAST'; }
  }


  var qrHealthBtn = document.getElementById('qrHealthBtn');
  var qrHealthPopover = document.getElementById('qrHealthPopover');
  var qrHealthList = document.getElementById('qrHealthList');
  var qrHealthPopoverTitle = document.getElementById('qrHealthPopoverTitle');
  var qrHealthPopoverSub = document.getElementById('qrHealthPopoverSub');
  var qrHealthCloseBtn = document.getElementById('qrHealthCloseBtn');
  var qrHealthLoaded = false;

  function setQrHealthButtonState(result) {
    if (!qrHealthBtn || !result) return;
    var critical = Number(result.criticalAssets || 0);
    var warnings = Number(result.warningAssets || 0);
    qrHealthBtn.classList.toggle('bad', critical > 0 || warnings > 0);
    qrHealthBtn.classList.toggle('good', critical === 0 && warnings === 0);
    if (critical > 0) qrHealthBtn.textContent = '⌗ QR ' + critical + ' ISSUE' + (critical === 1 ? '' : 'S');
    else if (warnings > 0) qrHealthBtn.textContent = '⌗ QR ' + warnings + ' WARNING' + (warnings === 1 ? '' : 'S');
    else qrHealthBtn.textContent = '⌗ QR VERIFIED';
  }

  function closeQrHealthPopover() {
    if (!qrHealthPopover || !qrHealthBtn) return;
    qrHealthPopover.classList.add('hidden');
    qrHealthBtn.setAttribute('aria-expanded','false');
  }

  function qrIssueThumbHtml(item) {
    if (item && item.photoUrl) {
      return '<div class="qr-health-thumb"><img src="'+esc(item.photoUrl)+'" alt="" loading="lazy" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'grid\'"><span style="display:none;width:100%;height:100%;place-items:center">'+brandLogoHtml(item.brand,'analytics-brand-logo')+'</span></div>';
    }
    return '<div class="qr-health-thumb">'+brandLogoHtml(item && item.brand,'analytics-brand-logo')+'</div>';
  }

  function renderQrHealthDetails(result) {
    setQrHealthButtonState(result);
    if (!qrHealthList || !qrHealthPopoverTitle || !qrHealthPopoverSub) return;
    var critical = Number(result.criticalAssets || 0);
    var warnings = Number(result.warningAssets || 0);
    var affected = critical + warnings;
    qrHealthPopoverTitle.textContent = affected ? (affected + ' ASSET' + (affected === 1 ? '' : 'S') + ' TO CHECK') : 'ALL QR IDENTITIES VERIFIED';
    qrHealthPopoverSub.textContent = affected
      ? (critical + ' critical • ' + warnings + ' warning • tap a device to open Detail')
      : (String(result.total || 0) + ' assets checked • canonical QR mapping is clean');

    var items = Array.isArray(result.items) ? result.items : [];
    if (!items.length) {
      qrHealthList.innerHTML = '<div class="qr-health-empty">✓ NO QR COLLISIONS OR WARNINGS</div>';
      return;
    }

    qrHealthList.innerHTML = items.map(function(item) {
      var status = String(item.status || 'WARNING').toUpperCase();
      var cls = status === 'CRITICAL' ? 'critical' : 'warning';
      var name = item.assetTag || item.assetId || 'Unknown asset';
      var meta = [item.deviceType,item.brand,item.model].filter(Boolean).join(' • ');
      var issueText = String(item.issues || '').replace(/CRITICAL:\s*/g,'').replace(/WARNING:\s*/g,'');
      return '<button type="button" class="qr-health-item '+cls+'" data-qr-asset-id="'+esc(item.assetId)+'">'+
        qrIssueThumbHtml(item)+
        '<span class="qr-health-copy" title="'+esc(issueText)+'"><strong>'+esc(name)+'</strong><span>'+esc(meta || item.assetId)+'</span><em>'+esc(issueText || 'Identifier needs review')+'</em></span>'+
        '<span class="qr-health-severity">'+esc(status)+'</span></button>';
    }).join('');

    Array.prototype.forEach.call(qrHealthList.querySelectorAll('[data-qr-asset-id]'), function(row) {
      row.addEventListener('click', function() {
        var id = row.getAttribute('data-qr-asset-id') || '';
        closeQrHealthPopover();
        if (!routeToDetail(id, 'push')) showToast('Asset detail is not available in the current cache.');
      });
    });
  }

  function loadQrHealthDetails(openAfterLoad) {
    if (!qrHealthBtn) return;
    var old = qrHealthBtn.textContent;
    qrHealthBtn.disabled = true;
    if (!qrHealthLoaded) qrHealthBtn.textContent = '⌗ CHECKING…';
    if (qrHealthList) qrHealthList.innerHTML = '<div class="qr-health-loading">AUDITING LIVE DATABASE…</div>';
    google.script.run
      .withSuccessHandler(function(result) {
        qrHealthBtn.disabled = false;
        if (!result || !result.success) {
          qrHealthBtn.textContent = old;
          if (qrHealthList) qrHealthList.innerHTML = '<div class="qr-health-empty">QR audit failed.</div>';
          return;
        }
        qrHealthLoaded = true;
        renderQrHealthDetails(result);
        if (openAfterLoad && qrHealthPopover) {
          qrHealthPopover.classList.remove('hidden');
          qrHealthBtn.setAttribute('aria-expanded','true');
        }
      })
      .withFailureHandler(function(err) {
        qrHealthBtn.disabled = false;
        qrHealthBtn.textContent = old;
        if (qrHealthList) qrHealthList.innerHTML = '<div class="qr-health-empty">'+esc(err && err.message ? err.message : String(err))+'</div>';
      })
      .getQrIntegrityDetails();
  }

  if (qrHealthBtn) {
    qrHealthBtn.addEventListener('click', function(ev) {
      ev.stopPropagation();
      var isOpen = qrHealthPopover && !qrHealthPopover.classList.contains('hidden');
      if (isOpen) { closeQrHealthPopover(); return; }
      if (qrHealthLoaded) {
        qrHealthPopover.classList.remove('hidden');
        qrHealthBtn.setAttribute('aria-expanded','true');
      }
      loadQrHealthDetails(true);
    });
  }
  if (qrHealthCloseBtn) qrHealthCloseBtn.addEventListener('click', function(ev){ ev.stopPropagation(); closeQrHealthPopover(); });
  if (qrHealthPopover) qrHealthPopover.addEventListener('click', function(ev){ ev.stopPropagation(); });
  document.addEventListener('click', function(){ closeQrHealthPopover(); });
  document.addEventListener('keydown', function(ev){ if (ev.key === 'Escape') closeQrHealthPopover(); });
  window.setTimeout(function(){ loadQrHealthDetails(false); }, 650);

  function closeQuickStatus() {
    quickStatusMenu.classList.add('hidden');
    quickStatusAssetId = '';
  }

  function openQuickStatus(button, assetId) {
    var asset = getAsset(assetId);
    if (!asset) return;

    quickStatusAssetId = assetId;
    var options = ['Active','Inactive','Repair','Maintenance','Storage','Retired'];
    document.getElementById('quickStatusOptions').innerHTML = options.map(function(status) {
      return '<button type="button" class="quick-status-option' +
        (normalize(asset.STATUS) === normalize(status) ? ' current' : '') +
        '" data-status-value="' + esc(status) + '">' +
        statusDotHtml(status) + '<span>' + esc(status) + '</span></button>';
    }).join('');

    var rect = button.getBoundingClientRect();
    var menuWidth = 210;
    var left = Math.min(window.innerWidth - menuWidth - 10, Math.max(10, rect.right - menuWidth));
    var top = rect.bottom + 7;
    if (top + 300 > window.innerHeight) top = Math.max(10, rect.top - 300);

    quickStatusMenu.style.left = left + 'px';
    quickStatusMenu.style.top = top + 'px';
    quickStatusMenu.classList.remove('hidden');
  }

  function saveQuickStatus(status) {
    var id = quickStatusAssetId;
    if (!id) return;

    var asset = getAsset(id);
    if (!asset) return;

    closeQuickStatus();
    showToast('Saving status…');

    google.script.run
      .withSuccessHandler(function(result) {
        if (result && result.success && result.asset) {
          upsertAsset(result.asset);
          renderDashboard();
          if (currentAssetId && normalize(currentAssetId) === normalize(id)) renderDetail(result.asset);
          showToast('Status changed to ' + result.asset.STATUS);
        } else {
          alert('Could not change status.');
        }
      })
      .withFailureHandler(function(err) {
        alert(err && err.message ? err.message : String(err));
      })
      .updateAssetStatus(id, status);
  }

  function isLaptopAsset(asset) {
    return !!asset && normalize(asset.DEVICE_TYPE) === 'LAPTOP';
  }

  function splitLocalCredentialValues(value) {
    return String(value == null ? '' : value).split(',').map(function(item){ return String(item || '').trim(); }).filter(Boolean);
  }

  function credentialPairs(asset) {
    if (!asset) return [];
    var users = splitLocalCredentialValues(asset.LOCAL_USERNAME);
    var passwords = splitLocalCredentialValues(asset.LOCAL_PASSWORD);
    var count = Math.max(users.length, passwords.length);
    var pairs = [];
    for (var i = 0; i < count; i++) {
      var username = users[i] || (users.length === 1 ? users[0] : '');
      var password = passwords[i] || (passwords.length === 1 ? passwords[0] : '');
      if (username && password) pairs.push({ username: username, password: password, index: i });
    }
    return pairs;
  }

  function firstCredentialPair(asset) {
    return credentialPairs(asset)[0] || null;
  }

  function hasLocalCredentials(asset) {
    return credentialPairs(asset).length > 0;
  }

  function localCredentialMessage(asset) {
    if (!isLaptopAsset(asset)) return 'Username / password stickers are available for Laptop assets only.';
    if (!hasLocalCredentials(asset)) return 'This laptop has no matching Local Username / Local Password pair saved yet.';
    return '';
  }

  function fitCredentialText(root) {
    if (!root) return;
    Array.prototype.slice.call(root.querySelectorAll('.credential-line,.qr-label-credentials')).forEach(function(element) {
      element.style.whiteSpace = 'nowrap';
      element.style.overflow = 'visible';
      element.style.textOverflow = 'clip';
      element.style.overflowWrap = 'normal';
      element.style.wordBreak = 'normal';
      var size = 10.0;
      var minimum = 5.2;
      element.style.fontSize = size + 'pt';
      // Wait until the sticker has a measurable width; then reduce only this line.
      var guard = 64;
      while (guard-- > 0 && element.clientWidth > 0 && element.scrollWidth > element.clientWidth + 0.5 && size > minimum) {
        size = Math.max(minimum, size - 0.15);
        element.style.fontSize = size.toFixed(2) + 'pt';
      }
      element.setAttribute('data-fit-font-pt', size.toFixed(2));
    });
  }

  function openQrPrintMode(asset) {
    if (!asset) return;
    qrPrintModeAsset = asset;
    if (!asset.__full) {
      ensureFullAsset(asset.ASSET_ID, function(fullAsset) {
        qrPrintModeAsset = fullAsset || asset;
        openQrPrintModeReady(qrPrintModeAsset);
      });
      return;
    }
    openQrPrintModeReady(asset);
  }

  function openQrPrintModeReady(asset) {
    qrPrintModeAsset = asset || qrPrintModeAsset;
    var laptop = isLaptopAsset(qrPrintModeAsset);
    var hint = document.getElementById('qrPrintModeAssetHint');
    var accountCount = laptop ? credentialPairs(qrPrintModeAsset).length : 0;
    if (hint) hint.textContent = (qrPrintModeAsset.ASSET_TAG || qrPrintModeAsset.ASSET_ID || 'Device') + (laptop ? ' • ' + (accountCount || 0) + ' Local account' + (accountCount === 1 ? '' : 's') + ' available.' : ' • QR-only is available for this device.');
    Array.prototype.slice.call(qrPrintModeModal.querySelectorAll('[data-qr-print-mode]')).forEach(function(button) {
      var mode = button.getAttribute('data-qr-print-mode');
      var disabled = mode !== 'qr-only' && !laptop;
      button.disabled = disabled;
      button.title = disabled ? 'Username / password printing is for Laptop assets only.' : '';
    });
    openModal(qrPrintModeModal);
  }

  function openCredentialAccountPicker(asset, mode) {
    var pairs = credentialPairs(asset);
    var credentialError = localCredentialMessage(asset);
    if (credentialError) {
      showToast(credentialError);
      return;
    }
    if (pairs.length === 1) {
      if (mode === 'credentials-only') openCredentialLabel(asset, pairs[0]);
      else openQrLabel(asset, mode, pairs[0]);
      return;
    }
    pendingCredentialPrintMode = mode;
    pendingCredentialPrintAsset = asset;
    pendingCredentialPairs = pairs;
    credentialAccountSelect.innerHTML = pairs.map(function(pair, index) {
      return '<option value="' + index + '">User ' + (index + 1) + ' — ' + esc(pair.username) + '</option>';
    }).join('');
    credentialAccountHint.textContent = (asset.ASSET_TAG || asset.ASSET_ID || 'This laptop') + ' has ' + pairs.length + ' Local accounts. Choose which account to print.';
    openModal(credentialAccountModal);
  }

  function useSelectedCredentialAccount() {
    var index = Number(credentialAccountSelect.value || 0);
    var asset = pendingCredentialPrintAsset;
    var mode = pendingCredentialPrintMode;
    var pair = pendingCredentialPairs[index] || pendingCredentialPairs[0];
    pendingCredentialPrintMode = '';
    pendingCredentialPrintAsset = null;
    pendingCredentialPairs = [];
    closeModal(credentialAccountModal);
    if (!asset || !pair) return;
    if (mode === 'credentials-only') openCredentialLabel(asset, pair);
    else openQrLabel(asset, mode, pair);
  }

  function cancelCredentialAccountPicker() {
    pendingCredentialPrintMode = '';
    pendingCredentialPrintAsset = null;
    pendingCredentialPairs = [];
    closeModal(credentialAccountModal);
  }

  function qrDisplayAssetName_(asset) {
    var name = String(asset && (asset.ASSET_TAG || asset.ASSET_ID) || '-').trim();
    return name.replace(/\s*\([^)]*\)\s*$/, '').trim() || String(asset && asset.ASSET_ID || '-');
  }

  function openQrLabel(asset, mode, credentials) {
    if (!asset) return;
    mode = mode || 'qr-only';
    qrLabelAsset = asset;
    qrLabelMode = mode;
    qrLabelCredentials = credentials || null;
    qrIncludeAssignedTo = false;
    if (qrIncludeAssignedToInput) qrIncludeAssignedToInput.checked = false;
    var hasAssignee = !!String(asset.ASSIGNED_TO || '').trim();
    if (qrAssignedToggleWrap) qrAssignedToggleWrap.hidden = !hasAssignee;
    if (qrLabelCopies) qrLabelCopies.value = '1';
    var value = 'RISPIT|1|' + String(asset.ASSET_ID || '').trim();
    if (!asset.ASSET_ID) {
      showToast('Asset ID is required before generating QR');
      return;
    }
    if (mode !== 'qr-only') {
      var credentialError = localCredentialMessage(asset);
      if (credentialError) {
        showToast(credentialError);
        return;
      }
      credentials = credentials || firstCredentialPair(asset);
      if (!credentials) {
        showToast('Choose a matching Local Username / Local Password pair first.');
        return;
      }
    }

    var qr = document.getElementById('qrCode');
    qr.innerHTML = '';

    if (typeof QRCode !== 'function') {
      alert('QR generator did not load. Please reload and try again.');
      return;
    }

    new QRCode(qr, {
      text: value,
      width: 220,
      height: 220,
      colorDark: '#08101a',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.M
    });

    var label = document.getElementById('qrPrintLabel');
    label.classList.toggle('qr-with-credentials', mode === 'qr-credentials');
    label.setAttribute('data-print-mode', mode);
    document.getElementById('qrLabelTag').textContent = qrDisplayAssetName_(asset);
    var serial = asset.SERIAL || asset.SERVICE_TAG || '-';
    document.getElementById('qrLabelSerial').innerHTML = '<b>Serial:</b> ' + esc(serial);
    document.getElementById('qrLabelId').innerHTML = '<b>Asset ID:</b> ' + esc(asset.ASSET_ID || '-');
    var deviceLine = document.getElementById('qrLabelDevice');
    if (deviceLine) deviceLine.textContent = [asset.DEVICE_TYPE, asset.BRAND].filter(Boolean).join(' • ') || 'IT Asset';
    var assignedLine = document.getElementById('qrLabelAssigned');
    if (assignedLine) {
      assignedLine.textContent = '';
      assignedLine.innerHTML = '';
      assignedLine.hidden = true;
    }
    document.getElementById('qrLabelUsername').textContent = credentials && credentials.username || '-';
    document.getElementById('qrLabelPassword').textContent = credentials && credentials.password || '-';
    var title = document.querySelector('#qrLabelModal .modal-head h2');
    var subtitle = document.querySelector('#qrLabelModal .modal-head p');
    if (title) title.textContent = mode === 'qr-credentials' ? 'RISP QR + Laptop Credentials' : 'RISP QR Asset Label';
    if (subtitle) subtitle.textContent = mode === 'qr-credentials' ? 'QR plus Local Username / Local Password • laptop label' : 'School-logo asset label • Avery 5160 / Libib-style 2⅝″ × 1″.';
    openModal(qrLabelModal);
    window.setTimeout(function(){ fitCredentialText(label); }, 0);
  }

  function credentialStickerHtml(asset, credentials) {
    var pair = credentials || firstCredentialPair(asset) || {};
    return '<div class="credential-line"><b>User: </b><span class="credential-value">' + esc(pair.username || '-') + '</span></div>' +
      '<div class="credential-line"><b>Pw: </b><span class="credential-value">' + esc(pair.password || '-') + '</span></div>';
  }

  function credentialRowParts(row) {
    var asset = row && row.asset ? row.asset : row;
    var credentials = row && row.credentials ? row.credentials : firstCredentialPair(asset);
    return { asset: asset, credentials: credentials };
  }

  function buildCredentialPage(pageItems, pageIndex, totalPages) {
    var page = document.createElement('section');
    page.className = 'credential-sheet-page';
    page.setAttribute('data-page', String(pageIndex + 1));
    (pageItems || []).forEach(function(row) {
      var parts = credentialRowParts(row);
      var sticker = document.createElement('div');
      sticker.className = 'credential-sticker';
      sticker.innerHTML = credentialStickerHtml(parts.asset, parts.credentials);
      page.appendChild(sticker);
    });
    for (var i = (pageItems || []).length; i < 60; i++) {
      var empty = document.createElement('div');
      empty.className = 'credential-sticker';
      page.appendChild(empty);
    }
    return page;
  }

  function openCredentialLabel(asset, credentials) {
    var credentialError = localCredentialMessage(asset);
    if (credentialError) {
      showToast(credentialError);
      return;
    }
    credentialLabelAsset = asset;
    credentialLabelCredentials = credentials || firstCredentialPair(asset);
    if (credentialLabelCopies) credentialLabelCopies.value = '1';
    credentialStickerPreview.innerHTML = credentialStickerHtml(asset, credentialLabelCredentials);
    openModal(credentialLabelModal);
    window.setTimeout(function(){ fitCredentialText(credentialStickerPreview); }, 0);
  }

  function printCredentialLabel(asset, credentials) {
    asset = asset || credentialLabelAsset;
    if (!asset) return;
    credentials = credentials || credentialLabelCredentials || firstCredentialPair(asset);
    if (!credentialPrintPortal) return;
    var copies = qrCopyCount(credentialLabelCopies);
    var rows = [];
    for (var i = 0; i < copies; i++) rows.push({ asset: asset, credentials: credentials });
    var pageCount = Math.ceil(rows.length / 60);
    credentialPrintPortal.innerHTML = '';
    for (var pageIndex = 0; pageIndex < pageCount; pageIndex++) {
      credentialPrintPortal.appendChild(buildCredentialPage(rows.slice(pageIndex * 60, pageIndex * 60 + 60), pageIndex, pageCount));
    }
    credentialPrintPortal.setAttribute('aria-hidden', 'false');
    credentialPrintPortal.style.display = 'block';
    credentialPrintPortal.style.position = 'absolute';
    credentialPrintPortal.style.left = '-100000px';
    credentialPrintPortal.style.top = '0';
    credentialPrintPortal.style.width = '215.9mm';
    document.body.classList.add('printing-credentials');
    window.setTimeout(function() {
      fitCredentialText(credentialPrintPortal);
      window.print();
      window.setTimeout(function() {
        document.body.classList.remove('printing-credentials');
        credentialPrintPortal.setAttribute('aria-hidden', 'true');
        credentialPrintPortal.style.display = '';
        credentialPrintPortal.style.position = '';
        credentialPrintPortal.style.left = '';
        credentialPrintPortal.style.top = '';
        credentialPrintPortal.style.width = '';
      }, 350);
    }, 80);
  }

  function bulkAssetsForCategory(category) {
    if (!category || category === '__ALL__') return ASSETS.slice();
    return ASSETS.filter(function(asset) {
      return String(asset.DEVICE_TYPE || 'Other') === category;
    });
  }

  function bulkAssetsForPrintMode(category, mode) {
    var items = bulkAssetsForCategory(category);
    if (mode === 'qr-credentials' || mode === 'credentials-only') {
      items = items.filter(isLaptopAsset);
    }
    return items;
  }

  function credentialRowsForAssets(items) {
    var rows = [];
    (items || []).forEach(function(asset) {
      credentialPairs(asset).forEach(function(credentials, index) {
        rows.push({ asset: asset, credentials: credentials, credentialIndex: index });
      });
    });
    return rows;
  }

  function populateBulkCategories() {
    var categories = Array.from(new Set(ASSETS.map(function(asset) {
      return String(asset.DEVICE_TYPE || 'Other');
    }))).sort();

    bulkQrCategory.innerHTML = '<option value="__ALL__">All Categories</option>' +
      categories.map(function(category) {
        return '<option value="' + esc(category) + '">' + esc(category) + '</option>';
      }).join('');
  }

  function buildBulkQrLabel(asset, index, mode, credentials) {
    var cell = document.createElement('div');
    cell.className = 'qr-label-cell';

    var label = document.createElement('div');
    label.className = 'qr-label' + (mode === 'qr-credentials' ? ' qr-with-credentials' : '');
    label.innerHTML =
      '<div class="qr-code" id="bulkQrCode_' + index + '"></div>' +
      '<div class="qr-label-copy">' +
        '<div class="qr-label-school"><img class="qr-school-logo" src="' + esc(SCHOOL_LOGO_URI) + '" alt="RIS Phuket"><strong>RISP IT ASSET</strong></div>' +
        '<div class="qr-label-tag">' + esc(qrDisplayAssetName_(asset)) + '</div>' +
        '<div class="qr-line qr-label-id"><b>Asset ID:</b> ' + esc(asset.ASSET_ID || '-') + '</div>' +
        '<div class="qr-line qr-label-device">' + esc([asset.DEVICE_TYPE, asset.BRAND].filter(Boolean).join(' • ') || 'IT Asset') + '</div>' +
        '<div class="qr-line qr-label-serial"><b>Serial:</b> ' + esc(asset.SERIAL || asset.SERVICE_TAG || '-') + '</div>' +
        (qrIncludeAssignedTo && String(asset.ASSIGNED_TO || '').trim() ? '<div class="qr-line qr-label-assigned"><b>Assigned to:</b> ' + esc(asset.ASSIGNED_TO) + '</div>' : '') +
      '</div>' +
      (mode === 'qr-credentials' ? '<div class="qr-credential-side"><div class="qr-credential-item"><span>USERNAME</span><b>' + esc(credentials && credentials.username || '-') + '</b></div><div class="qr-credential-item"><span>PASSWORD</span><b>' + esc(credentials && credentials.password || '-') + '</b></div></div>' : '');

    cell.appendChild(label);
    return cell;
  }

  function buildBulkQrPage(pageItems, pageIndex, totalPages, globalStartIndex, mode) {
    var page = document.createElement('section');
    page.className = 'qr-sheet-page';
    page.setAttribute('data-page', String(pageIndex + 1));

    var badge = document.createElement('div');
    badge.className = 'qr-page-badge';
    badge.textContent = 'PAGE ' + (pageIndex + 1) + ' / ' + totalPages;
    page.appendChild(badge);

    var grid = document.createElement('div');
    grid.className = 'qr-sheet-grid';

    pageItems.forEach(function(row, localIndex) {
      var asset = row && row.asset ? row.asset : row;
      var credentials = row && row.credentials ? row.credentials : firstCredentialPair(asset);
      grid.appendChild(buildBulkQrLabel(asset, globalStartIndex + localIndex, mode, credentials));
    });

    // Always build exactly 30 physical cells so each browser page maps 1:1 to one Avery 5160 sheet.
    for (var i = pageItems.length; i < 30; i++) {
      var empty = document.createElement('div');
      empty.className = 'qr-empty-cell';
      grid.appendChild(empty);
    }

    page.appendChild(grid);
    return page;
  }

  function makeQr(host, value, pixels) {
    if (!host || !value) return;
    new QRCode(host, {
      text: value,
      width: pixels || 220,
      height: pixels || 220,
      colorDark: '#08101a',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.M
    });
  }

  function syncBulkPrintPortal() {
    if (!bulkPrintPortal) return;
    bulkPrintPortal.innerHTML = '';

    var sourcePages = bulkQrPrintRoot.querySelectorAll('.qr-sheet-page');
    sourcePages.forEach(function(sourcePage) {
      var clone = sourcePage.cloneNode(true);
      var sourceQr = sourcePage.querySelectorAll('.qr-code');
      var cloneQr = clone.querySelectorAll('.qr-code');

      sourceQr.forEach(function(sourceHost, i) {
        var targetHost = cloneQr[i];
        if (!targetHost) return;
        targetHost.removeAttribute('id');
        var canvas = sourceHost.querySelector('canvas');
        var image = sourceHost.querySelector('img');
        var dataUrl = '';

        try {
          if (canvas) dataUrl = canvas.toDataURL('image/png');
          else if (image && image.src) dataUrl = image.src;
        } catch (err) {}

        targetHost.innerHTML = dataUrl
          ? '<img class="qr-print-img" src="' + dataUrl + '" alt="QR Code">'
          : '';
      });

      bulkPrintPortal.appendChild(clone);
    });
  }

  function qrCopyCount(input) {
    var n = Number.parseInt(input && input.value, 10);
    if (!isFinite(n)) n = 1;
    n = Math.max(1, Math.min(99, n));
    if (input) input.value = String(n);
    return n;
  }

  function buildSingleQrPrintPages(asset, mode, credentials, copies) {
    var rows = [];
    for (var i = 0; i < copies; i++) {
      rows.push(mode === 'qr-credentials' ? { asset: asset, credentials: credentials } : asset);
    }

    bulkQrPrintRoot.innerHTML = '';
    var pageCount = Math.ceil(rows.length / 30);
    for (var pageIndex = 0; pageIndex < pageCount; pageIndex++) {
      var start = pageIndex * 30;
      bulkQrPrintRoot.appendChild(buildBulkQrPage(rows.slice(start, start + 30), pageIndex, pageCount, start, mode));
    }

    rows.forEach(function(row, index) {
      var current = row && row.asset ? row.asset : row;
      var value = 'RISPIT|1|' + String(current && current.ASSET_ID || '').trim();
      makeQr(document.getElementById('bulkQrCode_' + index), value, 220);
    });
    fitCredentialText(bulkQrPrintRoot);
    syncBulkPrintPortal();
  }

  function renderBulkQrLabels() {
    var bulkModeNow = bulkQrMode ? bulkQrMode.value : 'qr-only';
    var assignedCandidates = bulkAssetsForCategory(bulkQrCategory ? bulkQrCategory.value : '__ALL__');
    var hasAnyAssignee = assignedCandidates.some(function(asset){ return !!String(asset.ASSIGNED_TO || '').trim(); });
    var canIncludeAssignee = bulkModeNow !== 'credentials-only' && hasAnyAssignee;
    if (bulkQrAssignedToggleWrap) bulkQrAssignedToggleWrap.hidden = !canIncludeAssignee;
    if (bulkQrIncludeAssignedInput) {
      bulkQrIncludeAssignedInput.disabled = !canIncludeAssignee;
      if (!canIncludeAssignee) { bulkQrIncludeAssignedInput.checked = false; bulkQrIncludeAssigned = false; }
    }
    qrIncludeAssignedTo = !!bulkQrIncludeAssigned && canIncludeAssignee;
    if (typeof QRCode !== 'function') {
      alert('QR generator did not load. Please reload and try again.');
      return;
    }

    var mode = bulkQrMode ? bulkQrMode.value : 'qr-only';
    if (mode !== 'qr-only') {
      var credentialCandidates = bulkAssetsForCategory(bulkQrCategory.value).filter(isLaptopAsset);
      var pendingCredentialAssets = credentialCandidates.filter(function(asset){ return !asset.__full; });
      if (pendingCredentialAssets.length) {
        if (bulkCredentialRenderBusy) return;
        bulkCredentialRenderBusy = true;
        bulkQrPrintRoot.innerHTML = '<div class="bulk-empty">Loading laptop Local Username / Local Password…</div>';
        document.getElementById('bulkQrSummary').textContent = 'Loading laptop credentials…';
        var remaining = pendingCredentialAssets.length;
        pendingCredentialAssets.forEach(function(asset) {
          ensureFullAsset(asset.ASSET_ID, function(){
            if (!asset.__full) asset.__full = true;
            remaining -= 1;
            if (remaining <= 0) {
              bulkCredentialRenderBusy = false;
              renderBulkQrLabels();
            }
          });
        });
        return;
      }
    }
    var candidateItems = bulkAssetsForPrintMode(bulkQrCategory.value, mode);
    var skippedCredentialCount = mode === 'qr-only' ? 0 : candidateItems.filter(function(asset){ return !hasLocalCredentials(asset); }).length;
    var items = mode === 'qr-only' ? candidateItems : credentialRowsForAssets(candidateItems.filter(hasLocalCredentials));
    bulkQrPrintRoot.innerHTML = '';
    if (bulkPrintPortal) bulkPrintPortal.innerHTML = '';
    if (credentialPrintPortal) credentialPrintPortal.innerHTML = '';

    if (!items.length) {
      bulkQrPrintRoot.innerHTML = mode === 'qr-only'
        ? '<div class="bulk-empty">No assets in this category.</div>'
        : '<div class="bulk-empty">No Laptop assets with both Local Username and Local Password in this category.</div>';
      document.getElementById('bulkQrSummary').textContent = '0 labels • 0 pages';
      return;
    }

    var labelsPerPage = mode === 'credentials-only' ? 60 : 30;
    var pageCount = Math.ceil(items.length / labelsPerPage);

    for (var pageIndex = 0; pageIndex < pageCount; pageIndex++) {
      var start = pageIndex * labelsPerPage;
      var pageItems = items.slice(start, start + labelsPerPage);
      bulkQrPrintRoot.appendChild(mode === 'credentials-only'
        ? buildCredentialPage(pageItems, pageIndex, pageCount)
        : buildBulkQrPage(pageItems, pageIndex, pageCount, start, mode));
    }

    if (mode !== 'credentials-only') {
      items.forEach(function(row, index) {
        var asset = row && row.asset ? row.asset : row;
        var value = 'RISPIT|1|' + String(asset.ASSET_ID || '').trim();
        makeQr(document.getElementById('bulkQrCode_' + index), value, 220);
      });
    }

    fitCredentialText(bulkQrPrintRoot);
    syncBulkPrintPortal();

    var scope = bulkQrCategory.value === '__ALL__' ? 'All Categories' : bulkQrCategory.value;
    document.getElementById('bulkQrSummary').textContent =
      items.length + ' labels • ' + pageCount + (pageCount === 1 ? ' page' : ' pages') + ' • ' + scope +
      (mode === 'qr-only' ? '' : ' • laptops only' + (skippedCredentialCount ? ' • skipped ' + skippedCredentialCount + ' without a matching Local Username / Password' : '') + (items.some(function(row){ return row && row.credentialIndex > 0; }) ? ' • multiple account labels included' : ''));
  }

  function openBulkQrStudio() {
    populateBulkCategories();
    if (bulkQrMode) bulkQrMode.value = 'qr-only';
    bulkQrCategory.value = '__ALL__';
    bulkQrIncludeAssigned = false;
    if (bulkQrIncludeAssignedInput) bulkQrIncludeAssignedInput.checked = false;
    renderBulkQrLabels();
    openModal(bulkQrModal);
    window.setTimeout(function(){ fitCredentialText(bulkQrPrintRoot); syncBulkPrintPortal(); }, 0);
  }

  function printBulkQrLabels() {
    var mode = bulkQrMode ? bulkQrMode.value : 'qr-only';
    var candidateItems = bulkAssetsForPrintMode(bulkQrCategory.value, mode);
    var items = mode === 'qr-only' ? candidateItems : credentialRowsForAssets(candidateItems.filter(hasLocalCredentials));
    if (!items.length) {
      showToast('No labels to print');
      return;
    }

    // Rebuild the print portal immediately before printing so the chosen category and QR images are exact.
    fitCredentialText(bulkQrPrintRoot);
    syncBulkPrintPortal();
    if (!bulkPrintPortal || !(mode === 'credentials-only'
      ? bulkQrPrintRoot.querySelector('.credential-sheet-page')
      : bulkPrintPortal.querySelector('.qr-sheet-page'))) {
      alert('Print pages are not ready yet. Please try again.');
      return;
    }

    if (mode === 'credentials-only') {
      document.body.classList.add('printing-credentials');
      credentialPrintPortal.innerHTML = '';
      var sourcePages = bulkQrPrintRoot.querySelectorAll('.credential-sheet-page');
      sourcePages.forEach(function(page){ credentialPrintPortal.appendChild(page.cloneNode(true)); });
      credentialPrintPortal.setAttribute('aria-hidden', 'false');
    } else {
      document.body.classList.add('printing-bulk');
      bulkPrintPortal.setAttribute('aria-hidden', 'false');
    }

    window.setTimeout(function() {
      window.print();
      window.setTimeout(function() {
        document.body.classList.remove('printing-bulk');
        document.body.classList.remove('printing-credentials');
        bulkPrintPortal.setAttribute('aria-hidden', 'true');
        if (credentialPrintPortal) credentialPrintPortal.setAttribute('aria-hidden', 'true');
      }, 350);
    }, 80);
  }

  function printQrLabel() {
    var asset = qrLabelAsset;
    if (!asset) return;
    var mode = qrLabelMode || 'qr-only';
    var credentials = qrLabelCredentials || firstCredentialPair(asset);
    var copies = qrCopyCount(qrLabelCopies);
    buildSingleQrPrintPages(asset, mode, credentials, copies);
    closeModal(qrLabelModal);
    document.body.classList.add('printing-bulk');
    bulkPrintPortal.setAttribute('aria-hidden', 'false');
    window.setTimeout(function() {
      window.print();
      window.setTimeout(function(){
        document.body.classList.remove('printing-bulk');
        bulkPrintPortal.setAttribute('aria-hidden', 'true');
      }, 350);
    }, 80);
  }

  function wireMoneyInputs() {
    ['a_COST','e_COST'].forEach(function(id) {
      var el = document.getElementById(id);
      if (!el) return;
      el.addEventListener('blur', function(){ formatMoneyField(el); });
      el.addEventListener('focus', function(){
        var n = moneyNumber(el.value);
        if (n !== null) el.value = String(n);
      });
    });
  }

  wireMoneyInputs();

  statsEl.addEventListener('click', function(e) {
    var btn = e.target.closest('[data-filter-category]');
    if (!btn) return;
    currentCategory = btn.getAttribute('data-filter-category') || '__ALL__';
    renderDashboard();
  });

  searchInput.addEventListener('input', renderCards);
  [filterBrand,filterDepartment,filterStatus,sortAssets].forEach(function(el){if(el)el.addEventListener('change',renderCards);});
  var resetAssetFilters=document.getElementById('resetAssetFilters');
  if(resetAssetFilters) resetAssetFilters.addEventListener('click',function(){if(filterBrand)filterBrand.value='';if(filterDepartment)filterDepartment.value='';if(filterStatus)filterStatus.value='';if(sortAssets)sortAssets.value='tag';currentCategory='__ALL__';searchInput.value='';renderDashboard();showToast('Filters reset');});

  assetGrid.addEventListener('pointerover', function(e) {
    var card = e.target.closest('[data-asset-id]');
    if (card) prefetchFullAsset(card.getAttribute('data-asset-id'));
  }, {passive:true});
  assetGrid.addEventListener('pointerdown', function(e) {
    var card = e.target.closest('[data-asset-id]');
    if (card) prefetchFullAsset(card.getAttribute('data-asset-id'));
  }, {passive:true});

  assetGrid.addEventListener('click', function(e) {
    var statusButton = e.target.closest('[data-quick-status]');
    if (statusButton) {
      e.preventDefault();
      e.stopPropagation();
      openQuickStatus(statusButton, statusButton.getAttribute('data-quick-status'));
      return;
    }

    var card = e.target.closest('[data-asset-id]');
    if (!card) return;
    e.preventDefault();
    dashboardScroll = window.scrollY || 0;
    routeToDetail(card.getAttribute('data-asset-id'), 'push');
  });

  assetGrid.addEventListener('keydown', function(e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    if (e.target.closest('[data-quick-status]')) return;
    var card = e.target.closest('[data-asset-id]');
    if (!card) return;
    e.preventDefault();
    dashboardScroll = window.scrollY || 0;
    routeToDetail(card.getAttribute('data-asset-id'), 'push');
  });

  quickStatusMenu.addEventListener('click', function(e) {
    var option = e.target.closest('[data-status-value]');
    if (!option) return;
    e.preventDefault();
    e.stopPropagation();
    saveQuickStatus(option.getAttribute('data-status-value'));
  });

  document.addEventListener('click', function(e) {
    if (!quickStatusMenu.classList.contains('hidden') &&
        !e.target.closest('#quickStatusMenu') &&
        !e.target.closest('[data-quick-status]')) {
      closeQuickStatus();
    }
  });

  Array.prototype.slice.call(document.querySelectorAll('.js-theme-toggle')).forEach(function(btn) {
    btn.addEventListener('click', function(e){ e.preventDefault(); e.stopPropagation(); toggleWebTheme(); });
  });
  applyWebTheme(document.documentElement.getAttribute('data-theme') || 'light', false);

  Array.prototype.slice.call(document.querySelectorAll('.js-dashboard-link')).forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      routeToDashboard('push', true);
    });
  });

  var headerAddBtn = document.getElementById('headerAddBtn');
  if (headerAddBtn) headerAddBtn.addEventListener('click', openAdd);
  document.getElementById('heroAddBtn').addEventListener('click', openAdd);
  var headerBulkQrBtn = document.getElementById('headerBulkQrBtn');
  if (headerBulkQrBtn) headerBulkQrBtn.addEventListener('click', openBulkQrStudio);
  document.getElementById('heroBulkQrBtn').addEventListener('click', openBulkQrStudio);
  document.getElementById('closeAddX').addEventListener('click', closeAdd);
  document.getElementById('cancelAddBtn').addEventListener('click', closeAdd);

  document.getElementById('editBtn').addEventListener('click', function() {
    openEditField('ASSET_TAG');
  });

  document.getElementById('summaryStrip').addEventListener('click', function(e) {
    var statusTarget = e.target.closest('#detailStatusTrigger');
    if (statusTarget) {
      e.preventDefault();
      e.stopPropagation();
      openQuickStatus(statusTarget, currentAssetId);
      return;
    }

    var copyTarget = e.target.closest('[data-copy-field]');
    if (!copyTarget) return;

    var asset = getAsset(currentAssetId);
    if (!asset) return;

    var key = copyTarget.getAttribute('data-copy-field');
    var value = key === 'SERIAL'
      ? String(asset.SERIAL || asset.SERVICE_TAG || '').trim()
      : String(asset[key] || '').trim();

    if (!value) {
      showToast('Nothing to copy');
      return;
    }

    copyIdentifierQuietly(value);
    var label = key === 'DEVICE_TYPE' ? 'Type' : key.charAt(0) + key.slice(1).toLowerCase();
    showToast(label + ' copied');
  });

  document.getElementById('supportLookupBtn').addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    openManufacturerSupport();
  });

  document.getElementById('qrLabelBtn').addEventListener('click', function() {
    var asset = getAsset(currentAssetId);
    if (asset) openQrPrintMode(asset);
  });

  document.getElementById('closeQrX').addEventListener('click', function(){ closeModal(qrLabelModal); });
  document.getElementById('closeQrBtn').addEventListener('click', function(){ closeModal(qrLabelModal); });
  document.getElementById('backQrToFormatBtn').addEventListener('click', function(){ closeModal(qrLabelModal); openQrPrintModeReady(qrPrintModeAsset || qrLabelAsset); });
  document.getElementById('printQrBtn').addEventListener('click', printQrLabel);
  if (qrIncludeAssignedToInput) {
    qrIncludeAssignedToInput.addEventListener('change', function() {
      qrIncludeAssignedTo = !!qrIncludeAssignedToInput.checked;
      var line = document.getElementById('qrLabelAssigned');
      if (line) {
        line.hidden = !qrIncludeAssignedTo;
        line.innerHTML = qrIncludeAssignedTo
          ? '<b>Assigned to:</b> ' + esc(qrLabelAsset && qrLabelAsset.ASSIGNED_TO || '')
          : '';
      }
    });
  }
  document.getElementById('closeQrPrintModeX').addEventListener('click', function(){ closeModal(qrPrintModeModal); });
  document.getElementById('closeQrPrintModeBtn').addEventListener('click', function(){ closeModal(qrPrintModeModal); });
  Array.prototype.slice.call(qrPrintModeModal.querySelectorAll('[data-qr-print-mode]')).forEach(function(button) {
    button.addEventListener('click', function() {
      var mode = button.getAttribute('data-qr-print-mode');
      var asset = qrPrintModeAsset;
      closeModal(qrPrintModeModal);
      if (!asset) return;
      if (mode === 'qr-only') openQrLabel(asset, mode);
      else openCredentialAccountPicker(asset, mode);
    });
  });
  document.getElementById('closeCredentialAccountX').addEventListener('click', cancelCredentialAccountPicker);
  document.getElementById('cancelCredentialAccountBtn').addEventListener('click', cancelCredentialAccountPicker);
  document.getElementById('backCredentialAccountBtn').addEventListener('click', function(){ var asset=pendingCredentialPrintAsset || qrPrintModeAsset; cancelCredentialAccountPicker(); if(asset) openQrPrintModeReady(asset); });
  document.getElementById('useCredentialAccountBtn').addEventListener('click', useSelectedCredentialAccount);
  credentialAccountModal.addEventListener('click', function(e){ if (e.target === credentialAccountModal) cancelCredentialAccountPicker(); });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape' && credentialAccountModal.classList.contains('open')) cancelCredentialAccountPicker(); });
  document.getElementById('closeCredentialLabelX').addEventListener('click', function(){ closeModal(credentialLabelModal); });
  document.getElementById('closeCredentialLabelBtn').addEventListener('click', function(){ closeModal(credentialLabelModal); });
  document.getElementById('backCredentialToFormatBtn').addEventListener('click', function(){ closeModal(credentialLabelModal); openQrPrintModeReady(qrPrintModeAsset || credentialLabelAsset); });
  document.getElementById('printCredentialLabelBtn').addEventListener('click', function(){
    closeModal(credentialLabelModal);
    printCredentialLabel(credentialLabelAsset, credentialLabelCredentials);
  });
  document.getElementById('closeBulkQrX').addEventListener('click', function(){ closeModal(bulkQrModal); });
  document.getElementById('closeBulkQrBtn').addEventListener('click', function(){ closeModal(bulkQrModal); });
  document.getElementById('printBulkQrBtn').addEventListener('click', printBulkQrLabels);
  bulkQrCategory.addEventListener('change', renderBulkQrLabels);
  if (bulkQrMode) bulkQrMode.addEventListener('change', renderBulkQrLabels);
  if (bulkQrIncludeAssignedInput) bulkQrIncludeAssignedInput.addEventListener('change', function(){
    bulkQrIncludeAssigned = !!bulkQrIncludeAssignedInput.checked;
    renderBulkQrLabels();
  });

  document.getElementById('deleteBtn').addEventListener('click', function() {
    if (!currentAssetId) return;
    openModal(deleteModal);
  });

  document.getElementById('closeEditX').addEventListener('click', requestCloseEdit);
  document.getElementById('cancelEditBtn').addEventListener('click', requestCloseEdit);
  document.getElementById('cancelDeleteBtn').addEventListener('click', function(){ closeModal(deleteModal); });

  document.getElementById('keepEditingBtn').addEventListener('click', function(){ closeModal(editGuardModal); });
  document.getElementById('discardEditBtn').addEventListener('click', forceCloseEdit);
  document.getElementById('saveBeforeCloseBtn').addEventListener('click', function(){
    closeModal(editGuardModal);
    if (typeof editForm.requestSubmit === 'function') editForm.requestSubmit();
    else document.getElementById('saveEditBtn').click();
  });


  // V6.11.4 bilingual UI: translates interface copy only; asset names, IDs and user-entered data remain unchanged.
  var RISP_UI_TH = {
    'DATABASE LIVE':'ฐานข้อมูลออนไลน์','ASSETS':'อุปกรณ์','QR HEALTH':'ตรวจสอบ QR','THEME':'ธีม','OPEN V7 ↗':'เปิดแอป V7 ↗',
    'Asset Control.':'จัดการอุปกรณ์','All Devices':'อุปกรณ์ทั้งหมด','ADD DEVICE':'เพิ่มอุปกรณ์','PRINT QR':'พิมพ์ QR',
    'QR Label Studio':'จัดทำป้าย QR','Label format':'รูปแบบป้าย','Print scope':'ขอบเขตการพิมพ์','All Categories':'ทุกประเภท',
    'Include assigned person':'แสดงชื่อผู้รับผิดชอบ','QR ONLY':'QR เท่านั้น','QR + USERNAME PASSWORD (LAPTOPS)':'QR พร้อมชื่อผู้ใช้และรหัสผ่าน (Laptop)',
    'USERNAME PASSWORD ONLY (LAPTOPS)':'ชื่อผู้ใช้และรหัสผ่านเท่านั้น (Laptop)','CANCEL':'ยกเลิก','PRINT / SAVE PDF':'พิมพ์ / บันทึก PDF',
    'RISP QR Asset Label':'ป้าย QR ทรัพย์สิน RISP','RISP QR + Laptop Credentials':'ป้าย QR พร้อมบัญชี Laptop',
    'Assigned to:':'ผู้รับผิดชอบ:','Asset ID:':'รหัสทรัพย์สิน:','Serial:':'หมายเลขเครื่อง:','User:':'ชื่อผู้ใช้:','Pw:':'รหัสผ่าน:',
    'Maintenance / Repair Record':'ประวัติการซ่อม / บำรุงรักษา','Repair history':'ประวัติการซ่อม','Add record':'เพิ่มประวัติ',
    'Add service record':'เพิ่มประวัติการซ่อม','Edit service record':'แก้ไขประวัติการซ่อม','SAVE RECORD':'บันทึกประวัติ',
    'SAVE CHANGES':'บันทึกการเปลี่ยนแปลง','REPORTED DATE':'วันที่แจ้งปัญหา','SENT DATE':'วันที่ส่งซ่อม','RETURN DATE':'วันที่รับคืน',
    'SHOP / SERVICE CENTER':'ร้านซ่อม / ศูนย์บริการ','CONTACT / TECHNICIAN':'ผู้ติดต่อ / ช่างผู้รับผิดชอบ',
    'PARTS REPLACED':'อะไหล่ที่เปลี่ยน','PROBLEM / REASON':'อาการเสีย / สาเหตุ','DIAGNOSIS':'ผลการตรวจสอบ',
    'REPAIR / ACTION TAKEN':'รายละเอียดการซ่อม','NOTES':'หมายเหตุ','PARTS COST (THB)':'ค่าอะไหล่ (บาท)',
    'LABOR COST (THB)':'ค่าแรง (บาท)','PHOTOS (BEFORE / AFTER)':'ภาพก่อนและหลังซ่อม','INVOICE / QUOTATION / DOCUMENTS':'ใบเสร็จ / ใบเสนอราคา / เอกสาร',
    'No service history yet':'ยังไม่มีประวัติการซ่อม','Repairs, checks and warranty visits appear here.':'ประวัติการซ่อม การตรวจเช็ก และการใช้ประกันจะแสดงที่นี่',
    'Loading history…':'กำลังโหลดประวัติ…','Could not load history.':'ไม่สามารถโหลดประวัติได้','No assets in this category.':'ไม่พบอุปกรณ์ในประเภทนี้',
    'Choose Label Format':'เลือกรูปแบบป้าย','QR READY':'QR พร้อมใช้งาน','BACK':'ย้อนกลับ','DELETE DEVICE':'ลบอุปกรณ์'
  };
  
  Object.assign(RISP_UI_TH, {"Device Information":"ข้อมูลอุปกรณ์","Assignment":"การมอบหมายอุปกรณ์","Identification":"ข้อมูลระบุตัวตน","Accounts & Access":"บัญชีและการเข้าถึง","Device Type":"ประเภทอุปกรณ์","Brand":"ยี่ห้อ","Model":"รุ่น","Serial Number":"หมายเลขเครื่อง","Service Tag":"รหัส Service Tag","Color":"สี","Department":"แผนก","Assigned To":"ผู้รับผิดชอบ","Status":"สถานะ","Purchase Date":"วันที่ซื้อ","Warranty":"การรับประกัน","Cost":"ราคา","Asset ID":"รหัสทรัพย์สิน","Asset Tag":"ชื่อเรียกอุปกรณ์","Libib / QR Code":"รหัส Libib / QR","Serial":"หมายเลขเครื่อง","Product Key":"รหัสผลิตภัณฑ์","Local Username":"ชื่อผู้ใช้ในเครื่อง","Local Password":"รหัสผ่านในเครื่อง","Admin Username":"ชื่อผู้ดูแลระบบ","Admin Password":"รหัสผ่านผู้ดูแลระบบ","Microsoft Username":"บัญชี Microsoft","Microsoft Password":"รหัสผ่าน Microsoft","Email / Account Email":"อีเมล / บัญชี","Email Password":"รหัสผ่านอีเมล","iCloud / Apple ID":"บัญชี iCloud / Apple ID","iCloud Password":"รหัสผ่าน iCloud","Password Hint":"คำใบ้รหัสผ่าน","Unassigned":"ยังไม่ได้มอบหมาย","Active":"พร้อมใช้งาน","Maintenance":"อยู่ระหว่างบำรุงรักษา","Repair":"อยู่ระหว่างซ่อม","Storage":"เก็บสำรอง","Retired":"เลิกใช้งาน","Lost":"สูญหาย","Edit Device":"แก้ไขอุปกรณ์","Save Changes":"บันทึกการเปลี่ยนแปลง","Cancel":"ยกเลิก","Add Device":"เพิ่มอุปกรณ์","Search":"ค้นหา","Refresh":"รีเฟรช","Back to Dashboard":"กลับหน้าหลัก","Live Asset Profile":"ข้อมูลอุปกรณ์","No service history yet":"ยังไม่มีประวัติการซ่อม","No repair history yet":"ยังไม่มีประวัติการซ่อม","Include assigned person":"แสดงชื่อผู้รับผิดชอบ","Username":"ชื่อผู้ใช้","Password":"รหัสผ่าน","RANK":"อันดับ","AGE":"อายุการใช้งาน"});

  var RISP_UI_EN = Object.fromEntries(Object.keys(RISP_UI_TH).map(function(k){return [RISP_UI_TH[k],k]}));
  Object.assign(RISP_UI_TH, {"TECHNOLOGY INVENTORY":"ระบบทะเบียนอุปกรณ์เทคโนโลยี","Asset Control.":"จัดการทรัพย์สิน","devices connected to ASSET_DATABASE":"อุปกรณ์ที่เชื่อมต่อกับฐานข้อมูล ASSET_DATABASE","DATABASE LIVE":"ฐานข้อมูลออนไลน์","ASSETS":"อุปกรณ์","QR HEALTH":"ตรวจสอบ QR","THEME":"ธีม","OPEN V7 ↗":"เปิดแอป V7 ↗","ADD DEVICE":"เพิ่มอุปกรณ์","PRINT QR":"พิมพ์ QR","PORTFOLIO VALUE • LIVE":"มูลค่าทรัพย์สินรวม • ปัจจุบัน","All Assets":"อุปกรณ์ทั้งหมด","All Devices":"อุปกรณ์ทั้งหมด","Laptop":"แล็ปท็อป","Desktop":"คอมพิวเตอร์ตั้งโต๊ะ","Tablet":"แท็บเล็ต","iPad":"ไอแพด","Printer":"เครื่องพิมพ์","Top 5 Brands":"5 อันดับยี่ห้อที่มีมากที่สุด","TOP 5 BRANDS":"5 อันดับยี่ห้อที่มีมากที่สุด","INVENTORY INTELLIGENCE":"ข้อมูลภาพรวมอุปกรณ์","Most deployed manufacturers across":"ยี่ห้อที่มีจำนวนอุปกรณ์มากที่สุดจากทั้งหมด","ASSET LIFECYCLE":"อายุการใช้งานทรัพย์สิน","45 DAYS TO COMPLETE":"ครบกำหนดใน 45 วัน","Calculated live from Purchase Date":"คำนวณจากวันที่ซื้อของอุปกรณ์","FLEET READINESS":"ความพร้อมใช้งานของอุปกรณ์","READY":"พร้อมใช้งาน","DEVICE NEED ATTENTION":"อุปกรณ์ที่ต้องตรวจสอบ","TOTAL ASSETS":"อุปกรณ์ทั้งหมด","LIVE INVENTORY":"รายการอุปกรณ์ล่าสุด","Asset Control":"จัดการทรัพย์สิน","QR Label Studio":"จัดทำป้าย QR","Label format":"รูปแบบป้าย","Print scope":"ขอบเขตการพิมพ์","All Categories":"ทุกประเภท","Include assigned person":"แสดงชื่อผู้รับผิดชอบ","CANCEL":"ยกเลิก","PRINT / SAVE PDF":"พิมพ์ / บันทึก PDF","RISP QR Asset Label":"ป้าย QR ทรัพย์สิน RISP","RISP QR + Laptop Credentials":"ป้าย QR พร้อมบัญชีแล็ปท็อป","Assigned to:":"ผู้รับผิดชอบ:","Asset ID:":"รหัสทรัพย์สิน:","Serial:":"หมายเลขเครื่อง:","User:":"ชื่อผู้ใช้:","Pw:":"รหัสผ่าน:","Repair history":"ประวัติการซ่อม","Add record":"เพิ่มประวัติ","Add service record":"เพิ่มประวัติการซ่อม","Edit service record":"แก้ไขประวัติการซ่อม","No service history yet":"ยังไม่มีประวัติการซ่อม","Repairs, checks and warranty visits appear here.":"ประวัติการซ่อม การตรวจเช็ก และการใช้ประกันจะแสดงที่นี่","Loading history…":"กำลังโหลดประวัติ…","Could not load history.":"ไม่สามารถโหลดประวัติได้","REPORTED DATE":"วันที่แจ้งปัญหา","SENT DATE":"วันที่ส่งซ่อม","RETURN DATE":"วันที่รับคืน","SHOP / SERVICE CENTER":"ร้านซ่อม / ศูนย์บริการ","CONTACT / TECHNICIAN":"ผู้ติดต่อ / ช่างผู้รับผิดชอบ","PARTS REPLACED":"อะไหล่ที่เปลี่ยน","PROBLEM / REASON":"อาการเสีย / สาเหตุ","DIAGNOSIS":"ผลการตรวจสอบ","REPAIR / ACTION TAKEN":"รายละเอียดการซ่อม","NOTES":"หมายเหตุ","PARTS COST (THB)":"ค่าอะไหล่ (บาท)","LABOR COST (THB)":"ค่าแรง (บาท)","PHOTOS (BEFORE / AFTER)":"ภาพก่อนและหลังซ่อม","INVOICE / QUOTATION / DOCUMENTS":"ใบเสร็จ / ใบเสนอราคา / เอกสาร","SAVE CHANGES":"บันทึกการเปลี่ยนแปลง","BACK":"ย้อนกลับ","PRINT LABEL":"พิมพ์ป้าย","QR ONLY":"QR เท่านั้น","QR + USERNAME PASSWORD":"QR พร้อมชื่อผู้ใช้และรหัสผ่าน","USERNAME PASSWORD ONLY":"ชื่อผู้ใช้และรหัสผ่านเท่านั้น","HOME":"หน้าหลัก","SEARCH":"ค้นหา","SCAN":"สแกน","MORE":"เพิ่มเติม"});
  RISP_UI_EN = Object.fromEntries(Object.entries(RISP_UI_TH).map(function(pair){return [pair[1],pair[0]]}));

  Object.assign(RISP_UI_TH, {"Device Information":"ข้อมูลอุปกรณ์","Assignment":"การมอบหมาย","Identification":"ข้อมูลระบุตัวตน","Accounts & Access":"บัญชีและการเข้าถึง","Device Type":"ประเภทอุปกรณ์","Brand":"ยี่ห้อ","Model":"รุ่น","Serial Number":"หมายเลขเครื่อง","Service Tag":"Service Tag","Color":"สี","Department":"แผนก","Assigned To":"ผู้รับผิดชอบ","Status":"สถานะ","Purchase Date":"วันที่ซื้อ","Warranty":"การรับประกัน","Cost":"ราคา","Asset ID":"รหัสทรัพย์สิน","Asset Tag":"ชื่ออุปกรณ์","Libib / QR Code":"รหัส Libib / QR","Serial":"หมายเลขเครื่อง","Product Key":"รหัสผลิตภัณฑ์","Local Username":"ชื่อผู้ใช้ในเครื่อง","Local Password":"รหัสผ่านในเครื่อง","Admin Username":"ชื่อผู้ดูแลระบบ","Admin Password":"รหัสผ่านผู้ดูแลระบบ","Microsoft Username":"ชื่อผู้ใช้ Microsoft","Microsoft Password":"รหัสผ่าน Microsoft","Email / Account Email":"อีเมล / อีเมลบัญชี","Email Password":"รหัสผ่านอีเมล","iCloud / Apple ID":"iCloud / Apple ID","iCloud Password":"รหัสผ่าน iCloud","Password Hint":"คำใบ้รหัสผ่าน","Last updated:":"อัปเดตล่าสุด:","Service History":"ประวัติการซ่อมและบำรุงรักษา","Service history":"ประวัติการซ่อมและบำรุงรักษา","Asset notes":"หมายเหตุอุปกรณ์","No service history yet":"ยังไม่มีประวัติการซ่อม","No service or repair activity has been recorded for this device.":"ยังไม่มีการบันทึกประวัติการซ่อมหรือการตรวจเช็กอุปกรณ์เครื่องนี้","Repairs, checks and warranty visits appear here.":"ประวัติการซ่อม การตรวจเช็ก และการใช้ประกันจะแสดงที่นี่","Service records":"รายการประวัติการซ่อม","Maintenance / Repair Record":"ประวัติการซ่อม / บำรุงรักษา","Device details":"รายละเอียดอุปกรณ์","Open device":"เปิดข้อมูลอุปกรณ์","Back to dashboard":"กลับไปหน้าภาพรวม","Search assets":"ค้นหาอุปกรณ์","Search by asset tag, serial, brand or model":"ค้นหาด้วยชื่ออุปกรณ์ หมายเลขเครื่อง ยี่ห้อ หรือรุ่น","Add device":"เพิ่มอุปกรณ์","Edit device":"แก้ไขอุปกรณ์","Save changes":"บันทึกการเปลี่ยนแปลง","Delete device":"ลบอุปกรณ์","Cancel":"ยกเลิก","Refresh":"รีเฟรช","Print QR":"พิมพ์ QR","Student":"นักเรียน","Staff":"บุคลากร","Teacher":"ครู","Ready / in use":"พร้อมใช้งาน / กำลังใช้งาน","Repair / maintenance":"ซ่อม / บำรุงรักษา","Most deployed manufacturers across 111 managed assets":"ยี่ห้อที่มีจำนวนอุปกรณ์มากที่สุดจากอุปกรณ์ทั้งหมด 111 รายการ","Most deployed manufacturers across":"ยี่ห้อที่มีจำนวนอุปกรณ์มากที่สุดจากทั้งหมด","assets connected to ASSET_DATABASE":"รายการอุปกรณ์ที่เชื่อมต่อกับฐานข้อมูล ASSET_DATABASE","45 DAYS TO COMPLETE":"ครบกำหนดใน 45 วัน","Calculated live from Purchase Date":"คำนวณจากวันที่ซื้อของอุปกรณ์","1 DEVICE NEED ATTENTION":"มีอุปกรณ์ที่ต้องตรวจสอบ 1 เครื่อง","109 assets operational • live service snapshot":"อุปกรณ์พร้อมใช้งาน 109 เครื่อง • ข้อมูลสถานะล่าสุด","TOTAL ASSETS":"อุปกรณ์ทั้งหมด","LAPTOP":"แล็ปท็อป","TABLET":"แท็บเล็ต","PRINTER":"เครื่องพิมพ์","MAC MINI":"Mac mini","IPAD":"iPad","DESKTOP":"คอมพิวเตอร์ตั้งโต๊ะ","PORTFOLIO VALUE • LIVE":"มูลค่าทรัพย์สินรวม • ปัจจุบัน","Top 5 brands":"5 อันดับยี่ห้อที่มีมากที่สุด","INVENTORY INTELLIGENCE":"ข้อมูลภาพรวมอุปกรณ์","ASSET LIFECYCLE":"อายุการใช้งานทรัพย์สิน","FLEET READINESS":"ความพร้อมใช้งานของอุปกรณ์","DEVICE NEED ATTENTION":"อุปกรณ์ที่ต้องตรวจสอบ","QR INTEGRITY":"ความถูกต้องของ QR","CHECKING…":"กำลังตรวจสอบ…","Change status & save":"เปลี่ยนสถานะและบันทึก","TYPE":"ประเภท","STATUS":"สถานะ","REPORTED DATE":"วันที่แจ้งปัญหา","SENT DATE":"วันที่ส่งซ่อม","RETURN DATE":"วันที่รับคืน","SHOP / SERVICE CENTER":"ร้านซ่อม / ศูนย์บริการ","CONTACT / TECHNICIAN":"ผู้ติดต่อ / ช่างผู้รับผิดชอบ","PARTS REPLACED":"อะไหล่ที่เปลี่ยน","PROBLEM / REASON":"อาการเสีย / สาเหตุ","DIAGNOSIS":"ผลการตรวจสอบ","REPAIR / ACTION TAKEN":"รายละเอียดการซ่อม","NOTES":"หมายเหตุ","PARTS COST (THB)":"ค่าอะไหล่ (บาท)","LABOR COST (THB)":"ค่าแรง (บาท)","PHOTOS (BEFORE / AFTER)":"ภาพก่อนและหลังซ่อม","INVOICE / QUOTATION / DOCUMENTS":"ใบเสร็จ / ใบเสนอราคา / เอกสาร","SAVE RECORD":"บันทึกประวัติ","PRINT LABEL":"พิมพ์ป้าย","QR ONLY":"QR เท่านั้น","QR + USERNAME PASSWORD":"QR พร้อมชื่อผู้ใช้และรหัสผ่าน","USERNAME PASSWORD ONLY":"ชื่อผู้ใช้และรหัสผ่านเท่านั้น","Include assigned person":"แสดงชื่อผู้รับผิดชอบ","All Categories":"ทุกประเภท","Label format":"รูปแบบป้าย","Print scope":"ขอบเขตการพิมพ์"});
  RISP_UI_EN = Object.fromEntries(Object.entries(RISP_UI_TH).map(function(pair){return [pair[1],pair[0]]}));
  Object.assign(RISP_UI_TH, {"Device Type":"ประเภทอุปกรณ์","Brand":"ยี่ห้อ","Model":"รุ่น","Serial Number":"หมายเลขเครื่อง","Service Tag":"Service Tag","Color":"สี","Department":"แผนก","Assigned To":"ผู้รับผิดชอบ","Status":"สถานะ","Purchase Date":"วันที่ซื้อ","Warranty":"การรับประกัน","Cost":"ราคา","Asset ID":"รหัสทรัพย์สิน","Asset Tag":"ชื่ออุปกรณ์","Libib / QR Code":"รหัส Libib / QR","Serial":"หมายเลขเครื่อง","Product Key":"รหัสผลิตภัณฑ์","Local Username":"ชื่อผู้ใช้ในเครื่อง","Local Password":"รหัสผ่านในเครื่อง","Admin Username":"ชื่อผู้ดูแลระบบ","Admin Password":"รหัสผ่านผู้ดูแลระบบ","Microsoft Username":"ชื่อผู้ใช้ Microsoft","Microsoft Password":"รหัสผ่าน Microsoft","Email / Account Email":"อีเมล / อีเมลบัญชี","Email Password":"รหัสผ่านอีเมล","iCloud / Apple ID":"iCloud / Apple ID","iCloud Password":"รหัสผ่าน iCloud","Password Hint":"คำใบ้รหัสผ่าน","Device Information":"ข้อมูลอุปกรณ์","Assignment":"การมอบหมาย","Identification":"ข้อมูลระบุตัวตน","Accounts & Access":"บัญชีและการเข้าถึง","Last updated:":"อัปเดตล่าสุด:","Service History":"ประวัติการซ่อมและบำรุงรักษา","Service history":"ประวัติการซ่อมและบำรุงรักษา","Asset notes":"หมายเหตุอุปกรณ์","No service history yet":"ยังไม่มีประวัติการซ่อม","No service or repair activity has been recorded for this device.":"ยังไม่มีการบันทึกประวัติการซ่อมหรือการตรวจเช็กอุปกรณ์เครื่องนี้","Repairs, checks and warranty visits appear here.":"ประวัติการซ่อม การตรวจเช็ก และการใช้ประกันจะแสดงที่นี่","Service records":"รายการประวัติการซ่อม","Maintenance / Repair Record":"ประวัติการซ่อม / บำรุงรักษา","Device details":"รายละเอียดอุปกรณ์","Open device":"เปิดข้อมูลอุปกรณ์","Back to dashboard":"กลับไปหน้าภาพรวม","Search assets":"ค้นหาอุปกรณ์","Search by asset tag, serial, brand or model":"ค้นหาด้วยชื่ออุปกรณ์ หมายเลขเครื่อง ยี่ห้อ หรือรุ่น","Add device":"เพิ่มอุปกรณ์","Edit device":"แก้ไขอุปกรณ์","Save changes":"บันทึกการเปลี่ยนแปลง","Delete device":"ลบอุปกรณ์","Cancel":"ยกเลิก","Refresh":"รีเฟรช","Print QR":"พิมพ์ QR","Student":"นักเรียน","Staff":"บุคลากร","Teacher":"ครู","Ready / in use":"พร้อมใช้งาน / กำลังใช้งาน","Repair / maintenance":"ซ่อม / บำรุงรักษา","assets connected to ASSET_DATABASE":"รายการอุปกรณ์ที่เชื่อมต่อกับฐานข้อมูล ASSET_DATABASE","Most deployed manufacturers across 111 managed assets":"ยี่ห้อที่มีจำนวนอุปกรณ์มากที่สุดจากอุปกรณ์ทั้งหมด 111 รายการ","1 DEVICE NEED ATTENTION":"มีอุปกรณ์ที่ต้องตรวจสอบ 1 เครื่อง","109 assets operational • live service snapshot":"อุปกรณ์พร้อมใช้งาน 109 เครื่อง • ข้อมูลสถานะล่าสุด","TOTAL ASSETS":"อุปกรณ์ทั้งหมด","LAPTOP":"แล็ปท็อป","TABLET":"แท็บเล็ต","PRINTER":"เครื่องพิมพ์","MAC MINI":"Mac mini","IPAD":"iPad","DESKTOP":"คอมพิวเตอร์ตั้งโต๊ะ","PORTFOLIO VALUE • LIVE":"มูลค่าทรัพย์สินรวม • ปัจจุบัน","INVENTORY INTELLIGENCE":"ข้อมูลภาพรวมอุปกรณ์","ASSET LIFECYCLE":"อายุการใช้งานทรัพย์สิน","FLEET READINESS":"ความพร้อมใช้งานของอุปกรณ์","DEVICE NEED ATTENTION":"อุปกรณ์ที่ต้องตรวจสอบ","Change status & save":"เปลี่ยนสถานะและบันทึก","TYPE":"ประเภท","STATUS":"สถานะ","QR INTEGRITY":"ความถูกต้องของ QR","CHECKING…":"กำลังตรวจสอบ…","QR READY":"QR พร้อมใช้งาน","QR READY • ASSET TAG":"QR พร้อมใช้งาน • รหัสอุปกรณ์","Add device.":"เพิ่มอุปกรณ์","Search inventory":"ค้นหาอุปกรณ์","Try Asset Tag, Serial, Brand, Model or Assigned To.":"ค้นหาด้วยชื่ออุปกรณ์ หมายเลขเครื่อง ยี่ห้อ รุ่น หรือผู้รับผิดชอบ","Control centre.":"ศูนย์ควบคุม","LIVE INVENTORY":"รายการอุปกรณ์ทั้งหมด","DATABASE LIVE":"ฐานข้อมูลออนไลน์","Most deployed manufacturers across":"ยี่ห้อที่มีจำนวนอุปกรณ์มากที่สุดจากทั้งหมด","All Assets":"อุปกรณ์ทั้งหมด","All Devices":"อุปกรณ์ทั้งหมด","Repair history":"ประวัติการซ่อม","No assets in this category.":"ไม่พบอุปกรณ์ในประเภทนี้","Include assigned person":"แสดงชื่อผู้รับผิดชอบ","Assigned to:":"ผู้รับผิดชอบ:","APP":"แอปพลิเคชัน","BACKEND":"ระบบหลังบ้าน","ENGINEERED":"พัฒนาโดย","THEME":"ธีม","HOME":"หน้าหลัก","SEARCH":"ค้นหา","SCAN":"สแกน","MORE":"เพิ่มเติม","ADD DEVICE":"เพิ่มอุปกรณ์","DELETE DEVICE":"ลบอุปกรณ์","CANCEL":"ยกเลิก","PRINT QR":"พิมพ์ QR","SAVE CHANGES":"บันทึกการเปลี่ยนแปลง","ADD RECORD":"เพิ่มประวัติ","No matching assets":"ไม่พบอุปกรณ์ที่ตรงกัน"});
  RISP_UI_EN = Object.fromEntries(Object.entries(RISP_UI_TH).map(function(pair){return [pair[1],pair[0]]}));
  Object.keys(RISP_UI_TH).forEach(function(k){RISP_UI_TH[k.toUpperCase()]=RISP_UI_TH[k];RISP_UI_TH[k.toLowerCase()]=RISP_UI_TH[k]});
  RISP_UI_EN = Object.fromEntries(Object.entries(RISP_UI_TH).map(function(pair){return [pair[1],pair[0]]}));
  function rispTranslateDom(root, lang) {
    root = root || document.body;
    var map = lang === 'th' ? RISP_UI_TH : RISP_UI_EN;
    var lookup=function(value){var t=String(value||'').replace(/\\s+/g,' ').trim();return map[t]||map[t.toUpperCase()]||map[t.toLowerCase()]||null;};
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    var node;
    while ((node = walker.nextNode())) {
      var raw = node.nodeValue || '', trimmed = raw.trim();
      if (!trimmed || (node.parentElement && node.parentElement.closest('script,style,code,pre,input,textarea,select,[data-no-translate]'))) continue;
      var translated=lookup(trimmed);if(translated)node.nodeValue=raw.replace(trimmed,translated);
    }
    root.querySelectorAll && root.querySelectorAll('[placeholder],[aria-label],[title]').forEach(function(el){
      ['placeholder','aria-label','title'].forEach(function(attr){var v=el.getAttribute(attr),translated=lookup(v);if(v&&translated)el.setAttribute(attr,translated);});
    });
  }
  var rispWebLang = 'en';
  try { rispWebLang = localStorage.getItem('RISP_IT_ASSET_LANG') || 'en'; } catch(e) {}
  function applyRispWebLanguage(lang) {
    rispWebLang = lang === 'th' ? 'th' : 'en';
    try { localStorage.setItem('RISP_IT_ASSET_LANG',rispWebLang); } catch(e) {}
    document.documentElement.lang = rispWebLang;
    rispTranslateDom(document.body,rispWebLang);
    document.querySelectorAll('[data-web-lang-current]').forEach(function(el){el.textContent=rispWebLang==='th'?'TH':'EN'});
    document.querySelectorAll('[data-web-lang-flag]').forEach(function(el){el.classList.toggle('flag-th',rispWebLang==='th');el.classList.toggle('flag-gb',rispWebLang!=='th')});
    document.querySelectorAll('[data-web-lang]').forEach(function(el){el.classList.toggle('selected',el.dataset.webLang===rispWebLang)});
  }
  document.querySelectorAll('[data-risp-language-toggle]').forEach(function(b){b.addEventListener('click',function(e){e.preventDefault();var menu=b.parentElement.querySelector('.web-language-menu');if(menu)menu.hidden=!menu.hidden;b.setAttribute('aria-expanded',String(menu&&!menu.hidden));})});
  document.addEventListener('click',function(e){var choice=e.target.closest('[data-web-lang]');if(choice){applyRispWebLanguage(choice.dataset.webLang);document.querySelectorAll('.web-language-menu').forEach(function(m){m.hidden=true});document.querySelectorAll('[data-risp-language-toggle]').forEach(function(b){b.setAttribute('aria-expanded','false')});return}if(!e.target.closest('.web-language-picker'))document.querySelectorAll('.web-language-menu').forEach(function(m){m.hidden=true})});
  var rispWebLangObserver = new MutationObserver(function(records){records.forEach(function(r){r.addedNodes&&r.addedNodes.forEach(function(n){if(n.nodeType===1)rispTranslateDom(n,rispWebLang);else if(n.nodeType===3)rispTranslateDom(n.parentElement,rispWebLang)})})});
  rispWebLangObserver.observe(document.body,{childList:true,subtree:true});
  applyRispWebLanguage(rispWebLang);

  // Edit deliberately does NOT close when the pointer lands outside the modal.
  // This prevents accidental data loss while selecting text and dragging the mouse.
  [addModal, deleteModal, qrLabelModal, qrPrintModeModal, credentialAccountModal, credentialLabelModal, bulkQrModal].forEach(function(modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) closeModal(modal);
    });
  });

  editModal.addEventListener('click', function(e) {
    if (e.target === editModal) showToast('Edit stays open — use Cancel or × when you are done');
  });

  editGuardModal.addEventListener('click', function(e) {
    if (e.target === editGuardModal) closeModal(editGuardModal);
  });

  document.addEventListener('keydown', function(e) {
    if (e.key !== 'Escape') return;
    if (editGuardModal.classList.contains('open')) {
      closeModal(editGuardModal);
      return;
    }
    if (editModal.classList.contains('open')) {
      requestCloseEdit();
      return;
    }
    [addModal, deleteModal, qrLabelModal, qrPrintModeModal, credentialAccountModal, credentialLabelModal, bulkQrModal].forEach(function(modal) {
      if (modal.classList.contains('open')) closeModal(modal);
    });
  });

  var addPhotoJob=0;
  addPhotoInput.addEventListener('change', function() {
    var file=addPhotoInput.files&&addPhotoInput.files[0],job=++addPhotoJob;
    selectedAddPhoto=null;
    selectedAddPhotoPrepared=null;
    var preview=document.getElementById('addPhotoPreview'),save=document.getElementById('saveAddBtn');
    var aiButton=document.getElementById('addPhotoAiBtn');
    if(aiButton){aiButton.disabled=true;aiButton.textContent='REMOVE BACKGROUND — FAST';}
    if(!file){preview.innerHTML='NO PHOTO';return;}
    save.disabled=true;preview.textContent='PREPARING PHOTO…';
    optimizeImage(file,function(photo){
      if(job!==addPhotoJob)return;
      selectedAddPhoto=file; selectedAddPhotoPrepared=photo;
      preview.innerHTML='<img src="'+photo.dataUrl+'" alt="Prepared device photo">';
      save.disabled=false;
      if(aiButton){aiButton.disabled=false;aiButton.textContent='REMOVE BACKGROUND — FAST';}
    },function(message){
      if(job!==addPhotoJob)return;
      preview.textContent='NO PHOTO';save.disabled=false;showToast(message);
    });
  });

  document.getElementById('addPhotoAiBtn').addEventListener('click', function() {
    if(!selectedAddPhoto)return;
    var aiButton=this,preview=document.getElementById('addPhotoPreview'),save=document.getElementById('saveAddBtn'),job=addPhotoJob;
    aiButton.disabled=true;aiButton.textContent='REMOVING BG…';save.disabled=true;
    optimizeImageAI(selectedAddPhoto,function(photo){
      if(job!==addPhotoJob)return;
      selectedAddPhotoPrepared=photo;
      preview.innerHTML='<img src="'+photo.dataUrl+'" alt="AI background removed device photo">';
      aiButton.disabled=false;aiButton.textContent='REMOVE BACKGROUND — FAST';save.disabled=false;
      showToast('AI background removed • photo ready');
    },function(message){
      if(job!==addPhotoJob)return;
      aiButton.disabled=false;aiButton.textContent='REMOVE BACKGROUND — FAST';save.disabled=false;alert(message);
    });
  });

  addForm.addEventListener('submit', function(e) {
    e.preventDefault();

    var button = document.getElementById('saveAddBtn');
    var asset = collect('a_', false);
    var preparedPhoto = selectedAddPhotoPrepared;
    button.disabled = true;
    button.textContent = 'SAVING...';

    google.script.run
      .withSuccessHandler(function(result) {
        if (!result || !result.success) {
          button.disabled = false;
          button.textContent = 'SAVE DEVICE';
          alert('Could not add device.');
          return;
        }

        var newId = result.assetId;
        if (result.asset) upsertAsset(result.asset);

        function finish(newAsset) {
          if (newAsset) upsertAsset(newAsset);
          button.disabled = false;
          button.textContent = 'SAVE DEVICE';
          closeAdd();
          renderDashboard();
          showToast(preparedPhoto ? 'Device added • photo syncing…' : 'Device added • QR ready');
          routeToDetail(newId, 'push');
          var labelAsset = newAsset || getAsset(newId);
          if (labelAsset) window.setTimeout(function(){ openQrLabel(labelAsset); }, 260);
        }

        finish(result.asset || getAsset(newId));
        if (preparedPhoto) {
          google.script.run
            .withSuccessHandler(function(photoResult) {
              if (photoResult && photoResult.asset) {
                upsertAsset(photoResult.asset);
                renderDashboard();
                if (normalize(currentAssetId) === normalize(newId)) renderDetail(photoResult.asset);
              }
              showToast('Photo saved');
            })
            .withFailureHandler(function(err) {
              showToast('Device saved • photo sync failed');
              console.warn('Photo upload failed after device save:', err && err.message ? err.message : err);
            })
            .saveAssetPhoto(newId, preparedPhoto.dataUrl, preparedPhoto.fileName, preparedPhoto.mimeType);
        }
      })
      .withFailureHandler(function(err) {
        button.disabled = false;
        button.textContent = 'SAVE DEVICE';
        alert(err && err.message ? err.message : String(err));
      })
      .addAsset(asset);
  });

  editForm.addEventListener('submit', function(e) {
    e.preventDefault();

    var button = document.getElementById('saveEditBtn');
    var asset = collect('e_', true);
    button.disabled = true;
    button.textContent = 'SAVING...';

    google.script.run
      .withSuccessHandler(function(result) {
        button.disabled = false;
        button.textContent = 'SAVE CHANGES';

        if (result && result.success && result.asset) {
          upsertAsset(result.asset);
          renderDashboard();
          renderDetail(result.asset);
          editInitialState = '';
          closeModal(editGuardModal);
          closeModal(editModal);
          showToast('Changes saved to database');
          document.title = valueOrDash(result.asset.ASSET_TAG) + ' • ' + APP_TITLE;
        } else {
          alert('Could not save changes.');
        }
      })
      .withFailureHandler(function(err) {
        button.disabled = false;
        button.textContent = 'SAVE CHANGES';
        alert(err && err.message ? err.message : String(err));
      })
      .updateAsset(asset);
  });

  document.getElementById('confirmDeleteBtn').addEventListener('click', function() {
    var button = this;
    var deletingId = currentAssetId;
    if (!deletingId) return;

    button.disabled = true;
    button.textContent = 'DELETING...';

    google.script.run
      .withSuccessHandler(function(result) {
        button.disabled = false;
        button.textContent = 'YES, DELETE DEVICE';

        if (result && result.success) {
          closeModal(deleteModal);
          removeAsset(deletingId);
          renderDashboard();
          routeToDashboard('replace', false);
          showToast('Device deleted');
        } else {
          alert('Delete failed.');
        }
      })
      .withFailureHandler(function(err) {
        button.disabled = false;
        button.textContent = 'YES, DELETE DEVICE';
        alert(err && err.message ? err.message : String(err));
      })
      .deleteAsset(deletingId);
  });

  photoInput.addEventListener('change', function() {
    var file = photoInput.files && photoInput.files[0];
    if (!file || !currentAssetId) return;

    var assetId = currentAssetId;
    if (photoUploadInFlight[normalize(assetId)]) {
      photoInput.value = '';
      showToast('Previous photo is still syncing…');
      return;
    }
    var label = document.getElementById('photoButton');
    label.textContent = 'PREPARING PREVIEW...';
    label.style.pointerEvents = 'none';

    optimizeImage(
      file,
      function(photo) {
        pendingDetailPhoto = photo;
        pendingDetailPhotoFile = file;
        pendingPhotoAssetId = assetId;
        label.textContent = '＋ CHOOSE DIFFERENT PHOTO';
        label.style.pointerEvents = '';
        photoInput.value = '';
        var aiButton = document.getElementById('photoAiBtn');
        if (aiButton) { aiButton.disabled = false; aiButton.textContent = 'REMOVE BACKGROUND — FAST'; }

        var asset = getAsset(assetId);
        if (asset && normalize(currentAssetId) === normalize(assetId)) renderDetail(asset);
        showToast('Photo ready — Save Changes to upload');
      },
      function(message) {
        label.textContent = '＋ ADD / CHANGE PHOTO';
        label.style.pointerEvents = '';
        photoInput.value = '';
        pendingDetailPhotoFile = null;
        var aiButton = document.getElementById('photoAiBtn');
        if (aiButton) { aiButton.disabled = true; aiButton.textContent = 'REMOVE BACKGROUND — FAST'; }
        alert(message);
      }
    );
  });

  document.getElementById('photoAiBtn').addEventListener('click', function() {
    if(!pendingDetailPhotoFile || !pendingPhotoAssetId)return;
    var aiButton=this, label=document.getElementById('photoButton'), file=pendingDetailPhotoFile, assetId=pendingPhotoAssetId;
    aiButton.disabled=true; aiButton.textContent='REMOVING BG…';
    label.textContent='REMOVING BG (AI)…'; label.style.pointerEvents='none';
    optimizeImageAI(file,function(photo){
      if(assetId!==pendingPhotoAssetId)return;
      pendingDetailPhoto=photo;
      aiButton.disabled=false; aiButton.textContent='REMOVE BACKGROUND — FAST';
      label.textContent='＋ CHOOSE DIFFERENT PHOTO'; label.style.pointerEvents='';
      var asset=getAsset(assetId);
      if(asset && normalize(currentAssetId)===normalize(assetId)) renderDetail(asset);
      showToast('AI background removed • Save Changes to upload');
    },function(message){
      aiButton.disabled=false; aiButton.textContent='REMOVE BACKGROUND — FAST';
      label.textContent='＋ CHOOSE DIFFERENT PHOTO'; label.style.pointerEvents='';
      alert(message);
    });
  });

  document.getElementById('cancelPhotoBtn').addEventListener('click', function() {
    var label = document.getElementById('photoButton');
    label.textContent = '＋ ADD / CHANGE PHOTO';
    label.style.pointerEvents = '';
    clearPendingPhoto(true);
    showToast('Photo change cancelled');
  });

  document.getElementById('savePhotoBtn').addEventListener('click', function() {
    if (!pendingDetailPhoto || !pendingPhotoAssetId) return;

    var button = this;
    var cancelButton = document.getElementById('cancelPhotoBtn');
    var label = document.getElementById('photoButton');
    var syncBadge = document.getElementById('photoSyncBadge');
    var pendingActions = document.getElementById('photoPendingActions');
    var uploadId = pendingPhotoAssetId;
    var uploadKey = normalize(uploadId);
    var photo = pendingDetailPhoto;
    var uploadToken = String(Date.now()) + '_' + Math.random().toString(36).slice(2);

    if (photoUploadInFlight[uploadKey]) {
      showToast('The previous photo is still syncing…');
      return;
    }

    photoUploadInFlight[uploadKey] = {photo: photo, token: uploadToken};

    // Optimistic UI: keep the new preview visible and return control immediately.
    pendingDetailPhoto = null;
    pendingDetailPhotoFile = null;
    pendingPhotoAssetId = '';
    photoInput.value = '';
    button.disabled = false;
    cancelButton.disabled = false;
    button.textContent = 'SAVE CHANGES';
    label.textContent = '＋ ADD / CHANGE PHOTO';
    label.style.pointerEvents = '';
    if (pendingActions) pendingActions.classList.add('hidden');
    if (syncBadge) syncBadge.classList.remove('hidden');
    var aiButton = document.getElementById('photoAiBtn');
    if (aiButton) { aiButton.disabled = true; aiButton.textContent = 'REMOVE BACKGROUND — FAST'; }
    var visibleAsset = getAsset(uploadId);
    if (visibleAsset && normalize(currentAssetId) === uploadKey) renderDetail(visibleAsset);
    showToast('Photo syncing in the background…');

    function restorePending(message) {
      var entry = photoUploadInFlight[uploadKey];
      if (!entry || entry.token !== uploadToken) return;
      delete photoUploadInFlight[uploadKey];
      pendingDetailPhoto = photo;
      pendingDetailPhotoFile = null;
      pendingPhotoAssetId = uploadId;
      if (visibleAsset && normalize(currentAssetId) === uploadKey) renderDetail(visibleAsset);
      showToast(message || 'Photo sync failed — try again');
    }

    google.script.run
      .withSuccessHandler(function(result) {
        var entry = photoUploadInFlight[uploadKey];
        if (!entry || entry.token !== uploadToken) return;

        if (result && result.success) {
          delete photoUploadInFlight[uploadKey];
          if (syncBadge) syncBadge.classList.add('hidden');
          if (result.asset) upsertAsset(result.asset);
          var updated = result.asset || getAsset(uploadId);
          renderDashboard();
          if (updated && normalize(currentAssetId) === normalize(uploadId)) renderDetail(updated);
          showToast('Photo saved');
        } else {
          restorePending('Photo sync failed — try again');
        }
      })
      .withFailureHandler(function(err) {
        if (syncBadge) syncBadge.classList.add('hidden');
        console.warn('Photo sync failed:', err && err.message ? err.message : err);
        restorePending('Photo sync failed — try again');
      })
      .saveAssetPhoto(uploadId, photo.dataUrl, photo.fileName, photo.mimeType);
  });

  // --------------------------------------------------------------
  // MOBILE APP EXPERIENCE
  // --------------------------------------------------------------
  function isStandaloneMode() {
    return !!(window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) ||
      !!window.navigator.standalone;
  }

  function refreshStandaloneClass() {
    document.body.classList.toggle('is-standalone', isStandaloneMode());
  }
  refreshStandaloneClass();

  window.addEventListener('beforeinstallprompt', function(e) {
    e.preventDefault();
    deferredInstallPrompt = e;
    if (!isStandaloneMode() && installAppChip) installAppChip.classList.remove('hidden');
    if (nativeInstallBtn) nativeInstallBtn.classList.remove('hidden');
  });

  if (window.innerWidth <= 760 && !isStandaloneMode()) {
    try {
      if (localStorage.getItem('RISP_INSTALL_HINT_DISMISSED') !== '1') {
        window.setTimeout(function(){ if (installAppChip) installAppChip.classList.remove('hidden'); }, 900);
      }
    } catch (err) {}
  }

  if (installAppChip) installAppChip.addEventListener('click', function(){ openModal(installAppModal); });
  document.getElementById('closeInstallBtn').addEventListener('click', function(){
    closeModal(installAppModal);
    if (installAppChip) installAppChip.classList.add('hidden');
    try { localStorage.setItem('RISP_INSTALL_HINT_DISMISSED','1'); } catch (err) {}
  });
  if (nativeInstallBtn) nativeInstallBtn.addEventListener('click', function(){
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    deferredInstallPrompt.userChoice.then(function(){
      deferredInstallPrompt = null;
      closeModal(installAppModal);
      if (installAppChip) installAppChip.classList.add('hidden');
    });
  });

  document.getElementById('mHomeBtn').addEventListener('click', function(){ routeToDashboard('push', false); });
  document.getElementById('mAddBtn').addEventListener('click', function(){ openAdd(''); });
  document.getElementById('mLabelsBtn').addEventListener('click', openBulkQrStudio);
  document.getElementById('mSearchBtn').addEventListener('click', function(){
    routeToDashboard('push', false);
    window.setTimeout(function(){
      try { searchInput.focus(); } catch (err) {}
      searchInput.scrollIntoView({behavior:'smooth',block:'center'});
    },120);
  });

  // Native-feeling edge swipe: from the left edge on Detail -> Dashboard.
  var swipeStartX = 0, swipeStartY = 0, swipeStartedAt = 0;
  document.addEventListener('touchstart', function(e) {
    if (!e.touches || e.touches.length !== 1 || document.querySelector('.modal.open')) return;
    var t = e.touches[0];
    if (t.clientX > 28 || !currentAssetId) return;
    swipeStartX = t.clientX; swipeStartY = t.clientY; swipeStartedAt = Date.now();
  }, {passive:true});
  document.addEventListener('touchend', function(e) {
    if (!swipeStartedAt || !e.changedTouches || !e.changedTouches.length) return;
    var t = e.changedTouches[0];
    var dx = t.clientX - swipeStartX, dy = Math.abs(t.clientY - swipeStartY);
    var fastEnough = Date.now() - swipeStartedAt < 650;
    swipeStartedAt = 0;
    if (dx > 95 && dy < 70 && fastEnough && currentAssetId) routeToDashboard('push', true);
  }, {passive:true});

  var appsScriptHistoryInstalled = installHistoryHandler();

  if (!appsScriptHistoryInstalled) {
    window.addEventListener('popstate', function() {
      var params = new URLSearchParams(location.search);
      var id = params.get('id') || '';
      if (id && getAsset(id)) routeToDetail(id, '');
      else routeToDashboard('', true);
    });
  }

  function pollDashboardMeta() {
    if (document.visibilityState !== 'visible') return;
    if (!(window.google && google.script && google.script.run)) return;
    google.script.run
      .withSuccessHandler(function(meta) {
        if (!meta || !meta.success) return;
        if (typeof meta.totalValue === 'number') animateWebAssetValue(meta.totalValue);
        if (meta.count != null) {
          var hc = document.getElementById('headerAssetCount'); if (hc) hc.textContent = String(meta.count);
        }
        var stamp = String(meta.generatedAt || '');
        if (stamp && lastMetaStamp && stamp !== lastMetaStamp) {
          google.script.run.withSuccessHandler(function(payload) {
            if (payload && payload.generatedAt) lastMetaStamp = String(payload.generatedAt);
            if (payload && Array.isArray(payload.assets)) applyBootstrapAssets(payload.assets, true);
          }).getBootstrapData();
        } else if (stamp) {
          lastMetaStamp = stamp;
        }
      })
      .withFailureHandler(function(){})
      .getDashboardMeta();
  }

  function startMetaPolling() {
    if (metaPollTimer) clearInterval(metaPollTimer);
    metaPollTimer = setInterval(pollDashboardMeta, 5000);
    document.addEventListener('visibilitychange', function(){ if (document.visibilityState === 'visible') pollDashboardMeta(); });
    window.addEventListener('focus', pollDashboardMeta);
  }

  bootstrapApp();
  startMetaPolling();
})();
</script>
</body>
</html>`;

  return HtmlService
    .createHtmlOutput(html)
    .setTitle(APP_TITLE)
    // IMPORTANT: Apps Script validates favicon type from the URL extension.
    // Do not append ?v=... here or it can throw "favicon image type is not supported".
    .setFaviconUrl(FAVICON_URL)
    // Apps Script HtmlOutput only accepts a limited set of meta tags here.
    // Keep viewport via addMetaTag; theme/app-capable tags remain in the HTML head
    // where browsers that support them can read them without throwing at runtime.
    .addMetaTag('viewport', 'width=device-width,initial-scale=1,viewport-fit=cover');
}

function renderDashboard_(headers, rows) {
  return renderApp_(headers, rows, '', '');
}

function renderFormFields_(asset, prefix) {
  asset = asset || {};
  prefix = prefix || '';
  const fields = [
    ['ASSET_TAG','Asset Tag *','text',false],
    ['DEVICE_TYPE','Category *','device',false],
    ['BRAND','Brand','brand',false],
    ['MODEL','Model','text',false],
    ['SERIAL','Serial Number','text',false],
    ['LIBIB','Libib / QR Code','text',false],
    ['SERVICE_TAG','Service Tag','text',false],
    ['PRODUCT_KEY','Product Key','text',false],
    ['DEPARTMENT','Department','department',false],
    ['ASSIGNED_TO','Assigned To','text',false],
    ['COLOR','Color','text',false],
    ['LOCAL_USERNAME','Local Username','text',false],
    ['LOCAL_PASSWORD','Local Password','text',false],
    ['ADMIN_USERNAME','Admin Username','text',false],
    ['ADMIN_PASSWORD','Admin Password','text',false],
    ['MICROSOFT_USERNAME','Microsoft Username','text',false],
    ['MICROSOFT_PASSWORD','Microsoft Password','text',false],
    ['EMAIL','Email / Account Email','text',false],
    ['EMAIL_PASSWORD','Email Password','text',false],
    ['ICLOUD','iCloud / Apple ID','text',false],
    ['ICLOUD_PASSWORD','iCloud Password','text',false],
    ['PASSWORD_HINT','Password Hint','text',false],
    ['STATUS','Status','status',false],
    ['PURCHASE_DATE','Purchase Date','date',false],
    ['WARRANTY','Warranty','text',false],
    ['COST','Cost (THB)','money',false],
    ['NOTES','Notes','textarea',true]
  ];

  return fields.map(function(item) {
    const key=item[0], label=item[1], type=item[2], full=item[3];
    const id=prefix+key;
    const value=String(asset[key] || '');
    let control='';
    if (type === 'device') {
      control=deviceControl_(id, value || 'Laptop');
    } else if (type === 'brand') {
      control=brandControl_(id, value, asset.DEVICE_TYPE || 'Laptop');
    } else if (type === 'department') {
      control=departmentControl_(id, value);
    } else if (type === 'status') {
      control='<select class="control" id="'+id+'">'+statusOptions_(value || 'Active')+'</select>';
    } else if (type === 'textarea') {
      control='<textarea class="control" id="'+id+'">'+escapeHtml_(value)+'</textarea>';
    } else if (type === 'date') {
      control='<input class="control" type="date" id="'+id+'" value="">';
    } else if (type === 'money') {
      control='<div class="money-wrap"><span class="money-prefix">฿</span><input class="control money-control" inputmode="decimal" autocomplete="off" id="'+id+'" value="'+escapeHtml_(value)+'" placeholder="0.00"></div><div class="quick-help">Thai Baht • automatically formatted with commas</div>';
    } else {
      control='<input class="control" id="'+id+'" value="'+escapeHtml_(value)+'"'+(key==='ASSET_TAG'?' required':'')+'>';
    }
    return '<div class="field'+(full?' full':'')+'"><label>'+escapeHtml_(label)+'</label>'+control+'</div>';
  }).join('');
}

// ================================================================
// DETAIL PAGE COMPATIBILITY WRAPPER
// ================================================================

function renderAssetPage_(headers, rows, searchId) {
  return renderApp_(headers, rows, searchId, '');
}

// ================================================================
// ERROR PAGES
// ================================================================

function renderAssetNotFound_(searchId) {
  const appUrl = ScriptApp.getService().getUrl();
  const html = String.raw`<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><base target="_top"><title>Asset not found</title><style>${commonBaseCss_()}body{padding:25px}.box{max-width:620px;margin:60px auto;background:#fff;border:1px solid var(--line);border-radius:20px;padding:28px}.box h1{margin-top:0}</style></head><body><div class="box"><h1>Asset not found</h1><p>No asset matched <strong>${escapeHtml_(searchId)}</strong>.</p><a class="btn dark" href="${escapeHtml_(appUrl)}" target="_top">← BACK TO DASHBOARD</a></div></body></html>`;
  return HtmlService.createHtmlOutput(html).setTitle('Asset not found').setFaviconUrl(FAVICON_URL);
}

function renderScanNotFound_(scannedValue) {
  const appUrl = ScriptApp.getService().getUrl();
  const scannerUrl = buildScannerUrl_(appUrl);
  const html = String.raw`<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><base target="_top"><title>Scan result</title><style>${commonBaseCss_()}body{padding:25px}.box{max-width:680px;margin:60px auto;background:#fff;border:1px solid var(--line);border-radius:20px;padding:28px}.scan{padding:14px;background:#f0efe9;border-radius:12px;word-break:break-word;margin:17px 0}

/* ================================================================
   v6.10.19 — EXECUTIVE ANALYTICS / INTERACTIVE PORTFOLIO VALUE
   ================================================================ */
.asset-value-overview{min-height:146px!important;padding:24px 28px!important;border-radius:25px!important;background:radial-gradient(circle at 79% -5%,rgba(72,205,255,.26),transparent 31%),radial-gradient(circle at 12% 118%,rgba(67,255,169,.13),transparent 34%),linear-gradient(118deg,#04101d 0%,#07233a 48%,#07324d 100%)!important;box-shadow:0 20px 48px rgba(3,31,57,.25),0 0 0 1px rgba(96,196,255,.08) inset!important}
.asset-value-copy small{display:block!important;font-size:9px!important;letter-spacing:.18em!important;font-weight:950!important;color:#8bdcff!important}.asset-value-copy b{display:block!important;margin-top:7px!important;font-size:43px!important;line-height:1!important;letter-spacing:-.035em!important;color:#f3fbff!important}.asset-value-breakdown{gap:9px!important;margin-top:2px!important}.asset-value-breakdown .web-value-chip{appearance:none;border:1px solid rgba(112,201,255,.23)!important;background:linear-gradient(145deg,rgba(4,20,34,.72),rgba(9,41,65,.72))!important;color:#dff5ff!important;border-radius:13px!important;padding:9px 12px!important;min-height:48px!important;display:grid!important;grid-template-columns:28px auto!important;align-items:center!important;gap:9px!important;cursor:pointer!important;transition:transform .16s ease,border-color .16s ease,box-shadow .16s ease,background .16s ease!important;backdrop-filter:blur(10px)}.asset-value-breakdown .web-value-chip:hover{transform:translateY(-2px);border-color:rgba(122,220,255,.58)!important;box-shadow:0 8px 18px rgba(0,125,201,.16),0 0 18px rgba(79,191,255,.10)}.asset-value-breakdown .web-value-chip.active{background:linear-gradient(145deg,rgba(16,78,116,.92),rgba(6,40,69,.96))!important;border-color:#62cbff!important;box-shadow:0 0 0 1px rgba(140,229,255,.10) inset,0 0 22px rgba(63,182,255,.20)!important}.web-value-chip-icon{width:28px;height:28px;border-radius:8px;display:grid;place-items:center;background:rgba(104,200,255,.09);color:#8edfff}.web-value-chip-icon svg,.portfolio-hero-svg svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}.web-value-chip-copy{display:grid;gap:2px;text-align:left}.asset-value-breakdown .web-value-chip b{font-size:8px!important;line-height:1.1!important;color:#89a9bf!important;letter-spacing:.04em!important}.asset-value-breakdown .web-value-chip em{font-size:11px!important;line-height:1.1!important;color:#eefaff!important}.asset-value-icon{width:86px!important;height:86px!important;border:1px solid rgba(113,206,255,.24)!important;background:linear-gradient(145deg,rgba(8,47,75,.84),rgba(5,28,48,.72))!important;box-shadow:0 12px 30px rgba(0,0,0,.18),0 0 22px rgba(51,175,242,.12)!important}.asset-value-icon .portfolio-hero-svg{width:42px;height:42px;display:grid;place-items:center;color:#92e1ff}.asset-value-icon .portfolio-hero-svg svg{width:38px;height:38px;stroke-width:1.45}.asset-value-icon em{font-size:7px!important;color:#75f2b0!important}

.mini-analytics-wrap{padding:15px!important;border-radius:20px!important}.mini-analytics-head span{font-size:10px!important;letter-spacing:.15em!important}.mini-analytics-grid{gap:13px!important}.premium-analytics-card{min-height:168px!important;padding:18px 19px!important;border-radius:20px!important;position:relative!important;isolation:isolate!important;overflow:hidden!important}.premium-card-glow{position:absolute;z-index:-1;width:160px;height:160px;border-radius:50%;right:-50px;top:-70px;background:radial-gradient(circle,rgba(56,158,232,.16),transparent 66%);pointer-events:none}.age-glow{background:radial-gradient(circle,rgba(130,95,255,.18),transparent 67%)}.health-glow{background:radial-gradient(circle,rgba(52,218,126,.17),transparent 67%)}.analytics-kicker-pro{display:block!important;font-size:7.5px!important;font-weight:950!important;letter-spacing:.18em!important;color:#4e7da3!important;text-transform:uppercase}.analytics-heading-pro{display:block!important;margin-top:6px!important;font-size:22px!important;line-height:1.02!important;font-weight:950!important;letter-spacing:-.025em!important;color:#10283f!important}.premium-analytics-card p{font-size:8.5px!important;margin-top:7px!important}.mini-analytics-glyph{width:42px!important;height:42px!important;border-radius:13px!important;font-size:10px!important;font-weight:900!important;letter-spacing:.04em!important;box-shadow:0 7px 17px rgba(35,101,151,.09)}
.premium-leaderboard{gap:8px!important;margin-top:13px!important}.mini-bar.premium{grid-template-columns:24px 38px 92px minmax(120px,240px) 30px!important;justify-content:start!important;gap:9px!important;min-height:35px!important}.mini-bar.premium .rank{font-size:9px!important;letter-spacing:.02em!important;color:#426d91!important}.analytics-brand-logo{width:38px!important;height:30px!important;border-radius:9px!important;box-shadow:0 4px 12px rgba(20,67,102,.08)!important}.analytics-brand-logo img{width:88%!important;height:76%!important}.mini-bar.premium b{font-size:11px!important;color:#17334c!important;letter-spacing:-.01em!important}.mini-bar.premium i{height:10px!important;max-width:240px!important;background:linear-gradient(90deg,#dce9f2,#eef5f9)!important;border:1px solid rgba(78,120,151,.08)!important;box-shadow:inset 0 1px 2px rgba(33,73,103,.08)!important}.mini-bar.premium i:after{background:linear-gradient(90deg,#185f9b 0%,#2b9ee3 56%,#7de1ff 100%)!important;box-shadow:0 0 10px rgba(44,165,231,.38),0 0 20px rgba(63,192,245,.16)!important}.mini-bar.premium em{font-size:10px!important;color:#143b5e!important}
.pro-meter{height:12px!important;margin-top:17px!important;box-shadow:inset 0 1px 2px rgba(18,54,80,.08)}.pro-meter .age-unknown-seg{background:#f15c69!important}.metric-grid-pro{display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:8px!important;margin-top:13px!important}.metric-grid-pro .mini-metric,.health-grid-pro .mini-metric{min-height:48px!important;border-radius:12px!important;padding:8px 10px!important;display:grid!important;grid-template-columns:auto 1fr!important;gap:7px!important;align-items:center!important}.metric-grid-pro .mini-metric b,.health-grid-pro .mini-metric b{font-size:15px!important;line-height:1!important}.metric-grid-pro .mini-metric i,.health-grid-pro .mini-metric i{font-style:normal!important;font-size:6.5px!important;letter-spacing:.08em!important;font-weight:900!important}.age-new{background:linear-gradient(145deg,#f1fff7,#e7f9ee)!important;border-color:#bee8cd!important}.age-mid{background:linear-gradient(145deg,#f1f8ff,#e7f1fb)!important;border-color:#bfd8ed!important}.age-old{background:linear-gradient(145deg,#f7f3ff,#ede7fb)!important;border-color:#d2c6ed!important}.age-missing{background:linear-gradient(145deg,#fff3f4,#ffe7e9)!important;border-color:#efb7bc!important;box-shadow:0 0 0 1px rgba(220,65,78,.03) inset!important}
.mini-health-layout{grid-template-columns:112px minmax(0,1fr)!important;gap:18px!important}.pro-ring{width:104px!important;height:104px!important;box-shadow:0 0 0 7px rgba(68,213,126,.07),0 12px 24px rgba(18,96,56,.09)!important}.pro-ring:after{inset:11px!important}.pro-ring b{font-size:23px!important}.pro-ring span{font-size:7px!important}.health-grid-pro{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:8px!important;margin-top:13px!important}.health-active{background:linear-gradient(145deg,#effff5,#e4f8ec)!important;border-color:#b8e6c9!important}.health-attention{background:linear-gradient(145deg,#fff7ed,#ffecd5)!important;border-color:#f0cc9f!important}.health-free{background:linear-gradient(145deg,#f0f7ff,#e4effb)!important;border-color:#bdd5eb!important}
html[data-theme="dark"] .analytics-kicker-pro{color:#72a8d3!important}html[data-theme="dark"] .analytics-heading-pro{color:#eef8ff!important}html[data-theme="dark"] .mini-bar.premium b{color:#d8ebfa!important}html[data-theme="dark"] .mini-bar.premium .rank{color:#73a6cf!important}html[data-theme="dark"] .mini-bar.premium em{color:#bfe4ff!important}html[data-theme="dark"] .age-new{background:#0c2519!important;border-color:#235c3d!important}html[data-theme="dark"] .age-mid{background:#0a2033!important;border-color:#245171!important}html[data-theme="dark"] .age-old{background:#1c1830!important;border-color:#4c4071!important}html[data-theme="dark"] .age-missing{background:#2a1217!important;border-color:#713842!important}html[data-theme="dark"] .health-active{background:#0c2519!important;border-color:#235c3d!important}html[data-theme="dark"] .health-attention{background:#2b1c0e!important;border-color:#714c23!important}html[data-theme="dark"] .health-free{background:#0a2033!important;border-color:#245171!important}
@media(max-width:760px){.asset-value-overview{min-height:120px!important;padding:18px!important}.asset-value-copy b{font-size:32px!important}.asset-value-icon{width:64px!important;height:64px!important}.asset-value-breakdown .web-value-chip{min-height:44px!important;padding:7px 9px!important}.mini-analytics-card{flex:0 0 280px!important}.metric-grid-pro{grid-template-columns:repeat(2,minmax(0,1fr))!important}.mini-bar.premium{grid-template-columns:20px 32px 76px minmax(90px,1fr) 24px!important}.analytics-brand-logo{width:32px!important;height:26px!important}}


/* ================================================================
   v6.10.21 — PORTFOLIO CLEAN FIX
   Purpose: isolate the web value switcher from old generic span/button CSS.
   ================================================================ */
.asset-value-overview{
  grid-template-columns:minmax(0,1fr) 164px!important;
  gap:22px!important;
  min-height:138px!important;
  padding:22px 24px!important;
  overflow:hidden!important;
}
.asset-value-overview:after{
  right:118px!important;
  top:-38px!important;
  font-size:170px!important;
  color:rgba(112,210,255,.035)!important;
}
.asset-value-copy{min-width:0!important}
.asset-value-copy small#webAssetValueLabel{
  color:#8edcff!important;
  font-size:9px!important;
  letter-spacing:.18em!important;
  font-weight:950!important;
}
.asset-value-copy #webTotalAssetValue{
  margin-top:7px!important;
  font-size:42px!important;
  letter-spacing:-.035em!important;
  color:#f4fbff!important;
}
.asset-value-spark{margin:9px 0 10px!important;height:16px!important}

/* Real desktop switcher — no legacy pills, no nested span styling. */
#webAssetValueBreakdown.asset-value-breakdown{
  display:grid!important;
  grid-template-columns:repeat(auto-fit,minmax(150px,188px))!important;
  justify-content:start!important;
  gap:9px!important;
  margin:0!important;
  max-width:1180px!important;
}
#webAssetValueBreakdown .web-value-chip{
  appearance:none!important;
  -webkit-appearance:none!important;
  position:relative!important;
  isolation:isolate!important;
  min-width:0!important;
  min-height:58px!important;
  margin:0!important;
  padding:9px 12px!important;
  border:1px solid rgba(118,202,255,.22)!important;
  border-radius:15px!important;
  background:
    radial-gradient(circle at 12% 18%,rgba(90,199,255,.10),transparent 34%),
    linear-gradient(145deg,rgba(6,24,39,.94),rgba(9,42,66,.90))!important;
  color:#eefaff!important;
  display:grid!important;
  grid-template-columns:36px minmax(0,1fr) 7px!important;
  align-items:center!important;
  gap:10px!important;
  text-align:left!important;
  font-family:inherit!important;
  cursor:pointer!important;
  overflow:hidden!important;
  box-shadow:inset 0 1px 0 rgba(255,255,255,.035),0 7px 16px rgba(0,0,0,.10)!important;
  transform:translateZ(0)!important;
  transition:transform .16s ease,border-color .16s ease,box-shadow .16s ease,background .16s ease!important;
}
#webAssetValueBreakdown .web-value-chip:before{
  content:"";
  position:absolute;
  inset:0;
  z-index:-1;
  background:linear-gradient(110deg,transparent 0 42%,rgba(123,224,255,.07) 51%,transparent 60%);
  transform:translateX(-115%);
  transition:transform .45s ease;
}
#webAssetValueBreakdown .web-value-chip:hover{
  transform:translateY(-2px)!important;
  border-color:rgba(118,211,255,.58)!important;
  box-shadow:0 11px 24px rgba(0,80,132,.16),0 0 20px rgba(77,190,255,.09)!important;
}
#webAssetValueBreakdown .web-value-chip:hover:before{transform:translateX(115%)}
#webAssetValueBreakdown .web-value-chip.active{
  border-color:#65d6ff!important;
  background:
    radial-gradient(circle at 12% 16%,rgba(94,218,255,.21),transparent 39%),
    linear-gradient(145deg,rgba(11,67,103,.97),rgba(5,36,61,.98))!important;
  box-shadow:0 0 0 1px rgba(142,229,255,.08) inset,0 0 22px rgba(64,188,255,.19),0 10px 22px rgba(0,68,112,.18)!important;
}
#webAssetValueBreakdown .web-value-chip-icon{
  width:36px!important;
  height:36px!important;
  padding:0!important;
  margin:0!important;
  border:1px solid rgba(137,219,255,.22)!important;
  border-radius:11px!important;
  background:linear-gradient(145deg,rgba(111,213,255,.13),rgba(39,111,160,.10))!important;
  display:grid!important;
  place-items:center!important;
  color:#9ce9ff!important;
  backdrop-filter:none!important;
}
#webAssetValueBreakdown .web-value-chip-icon svg{
  width:19px!important;
  height:19px!important;
  fill:none!important;
  stroke:currentColor!important;
  stroke-width:1.8!important;
  stroke-linecap:round!important;
  stroke-linejoin:round!important;
}
#webAssetValueBreakdown .web-value-chip-copy{
  min-width:0!important;
  padding:0!important;
  margin:0!important;
  display:grid!important;
  gap:4px!important;
  background:none!important;
  border:0!important;
}
#webAssetValueBreakdown .web-value-chip-copy strong{
  min-width:0!important;
  overflow:hidden!important;
  text-overflow:ellipsis!important;
  white-space:nowrap!important;
  font-size:10px!important;
  line-height:1!important;
  font-weight:900!important;
  letter-spacing:.02em!important;
  color:#c9e2f5!important;
}
#webAssetValueBreakdown .web-value-chip-copy em{
  padding:0!important;
  margin:0!important;
  background:none!important;
  border:0!important;
  border-radius:0!important;
  font-style:normal!important;
  font-size:13px!important;
  line-height:1!important;
  font-weight:950!important;
  letter-spacing:-.01em!important;
  color:#f5fbff!important;
}
#webAssetValueBreakdown .web-value-chip-led{
  width:7px!important;
  height:7px!important;
  padding:0!important;
  margin:0!important;
  border:0!important;
  border-radius:50%!important;
  background:#3e6078!important;
  box-shadow:none!important;
}
#webAssetValueBreakdown .web-value-chip.active .web-value-chip-led{
  background:#73efb3!important;
  box-shadow:0 0 0 3px rgba(115,239,179,.09),0 0 13px rgba(115,239,179,.52)!important;
}

/* Glowing THB currency mark — always visible, independent of selected category. */
.asset-value-icon.portfolio-currency-panel{
  position:relative!important;
  width:164px!important;
  height:98px!important;
  min-width:164px!important;
  padding:13px!important;
  border-radius:23px!important;
  border:1px solid rgba(105,203,255,.29)!important;
  background:
    radial-gradient(circle at 46% 42%,rgba(83,198,255,.15),transparent 40%),
    linear-gradient(145deg,rgba(7,39,64,.96),rgba(5,25,43,.96))!important;
  display:grid!important;
  grid-template-columns:62px minmax(0,1fr)!important;
  align-items:center!important;
  gap:11px!important;
  overflow:hidden!important;
  box-shadow:inset 0 1px 0 rgba(255,255,255,.04),0 0 28px rgba(52,173,238,.13),0 12px 26px rgba(0,0,0,.15)!important;
}
.portfolio-currency-ghost{
  position:absolute;
  right:-4px;
  top:-22px;
  font-size:112px!important;
  line-height:1!important;
  font-weight:1000!important;
  color:rgba(107,211,255,.055)!important;
  pointer-events:none!important;
}
.portfolio-currency-coin{
  position:relative!important;
  z-index:1!important;
  width:58px!important;
  height:58px!important;
  border-radius:19px!important;
  border:1px solid rgba(143,226,255,.33)!important;
  background:
    radial-gradient(circle at 34% 28%,rgba(190,246,255,.33),transparent 34%),
    linear-gradient(145deg,#0f5a89,#0a3154 64%,#071f36)!important;
  display:grid!important;
  place-items:center!important;
  box-shadow:inset 0 0 0 1px rgba(255,255,255,.045),0 0 18px rgba(85,204,255,.31),0 0 42px rgba(45,152,218,.16)!important;
  animation:portfolioCurrencyGlow 3.6s ease-in-out infinite!important;
}
.portfolio-currency-coin b{
  margin:0!important;
  font-size:31px!important;
  line-height:1!important;
  font-weight:1000!important;
  color:#b9efff!important;
  text-shadow:0 0 14px rgba(103,220,255,.42)!important;
}
.portfolio-currency-copy{
  position:relative!important;
  z-index:1!important;
  min-width:0!important;
  display:grid!important;
  gap:5px!important;
  align-content:center!important;
}
.portfolio-currency-copy small{
  padding:0!important;
  margin:0!important;
  font-size:7px!important;
  line-height:1!important;
  font-weight:950!important;
  letter-spacing:.16em!important;
  color:#73efb3!important;
}
.portfolio-currency-copy strong{
  min-width:0!important;
  font-size:9px!important;
  line-height:1.18!important;
  font-weight:950!important;
  letter-spacing:.06em!important;
  color:#eefaff!important;
  overflow-wrap:anywhere!important;
}
@keyframes portfolioCurrencyGlow{
  0%,100%{transform:translateY(0) scale(1);box-shadow:inset 0 0 0 1px rgba(255,255,255,.045),0 0 18px rgba(85,204,255,.28),0 0 42px rgba(45,152,218,.14)}
  50%{transform:translateY(-1px) scale(1.025);box-shadow:inset 0 0 0 1px rgba(255,255,255,.055),0 0 27px rgba(85,204,255,.44),0 0 58px rgba(45,152,218,.21)}
}

/* Light theme keeps the same structure, but flips materials cleanly. */
html:not([data-theme="dark"]) #webAssetValueBreakdown .web-value-chip{
  border-color:#bfd1df!important;
  background:linear-gradient(145deg,rgba(255,255,255,.98),rgba(238,246,251,.96))!important;
  box-shadow:0 8px 17px rgba(22,60,92,.065)!important;
}
html:not([data-theme="dark"]) #webAssetValueBreakdown .web-value-chip:hover{
  border-color:#7db5d6!important;
  box-shadow:0 11px 22px rgba(22,60,92,.10)!important;
}
html:not([data-theme="dark"]) #webAssetValueBreakdown .web-value-chip.active{
  border-color:#5da9d5!important;
  background:linear-gradient(145deg,#edf7fd,#dcecf7)!important;
  box-shadow:0 0 0 1px rgba(65,145,194,.05) inset,0 9px 20px rgba(24,83,124,.10)!important;
}
html:not([data-theme="dark"]) #webAssetValueBreakdown .web-value-chip-icon{
  border-color:#bfd5e4!important;
  background:linear-gradient(145deg,#f7fbfe,#dfedf6)!important;
  color:#245f87!important;
}
html:not([data-theme="dark"]) #webAssetValueBreakdown .web-value-chip-copy strong{color:#36566f!important}
html:not([data-theme="dark"]) #webAssetValueBreakdown .web-value-chip-copy em{color:#103653!important}
html:not([data-theme="dark"]) #webAssetValueBreakdown .web-value-chip-led{background:#9fb3c2!important}
html:not([data-theme="dark"]) #webAssetValueBreakdown .web-value-chip.active .web-value-chip-led{background:#1fb675!important;box-shadow:0 0 0 3px rgba(31,182,117,.08),0 0 10px rgba(31,182,117,.26)!important}
html:not([data-theme="dark"]) .asset-value-icon.portfolio-currency-panel{
  border-color:#9bc3dc!important;
  background:radial-gradient(circle at 46% 42%,rgba(75,175,225,.10),transparent 42%),linear-gradient(145deg,#f4faff,#dfedf7)!important;
  box-shadow:inset 0 1px 0 rgba(255,255,255,.75),0 12px 24px rgba(20,68,101,.09)!important;
}
html:not([data-theme="dark"]) .portfolio-currency-ghost{color:rgba(32,103,151,.055)!important}
html:not([data-theme="dark"]) .portfolio-currency-coin{
  border-color:#9dc9e2!important;
  background:radial-gradient(circle at 34% 28%,rgba(255,255,255,.78),transparent 37%),linear-gradient(145deg,#dff3ff,#a8d8ef 62%,#7db8d9)!important;
  box-shadow:inset 0 0 0 1px rgba(255,255,255,.75),0 0 20px rgba(55,146,198,.18)!important;
  animation:none!important;
}
html:not([data-theme="dark"]) .portfolio-currency-coin b{color:#13577f!important;text-shadow:none!important}
html:not([data-theme="dark"]) .portfolio-currency-copy small{color:#188c65!important}
html:not([data-theme="dark"]) .portfolio-currency-copy strong{color:#153955!important}

@media(max-width:980px){
  .asset-value-overview{grid-template-columns:1fr!important}
  .asset-value-icon.portfolio-currency-panel{display:none!important}
  #webAssetValueBreakdown.asset-value-breakdown{grid-template-columns:repeat(auto-fit,minmax(145px,1fr))!important;max-width:none!important}
}

</style></head><body><div class="box"><h1>QR read — asset not found</h1><p>The scanner worked, but this value did not match Asset ID, Asset Tag, Libib, Serial, or Service Tag.</p><div class="scan">${escapeHtml_(scannedValue)}</div><div style="display:flex;gap:9px;flex-wrap:wrap"><a class="btn dark" href="${escapeHtml_(appUrl)}" target="_top">← DASHBOARD</a><a class="btn acid" href="${escapeHtml_(scannerUrl)}" target="_top">SCAN AGAIN</a></div></div></body></html>`;
  return HtmlService.createHtmlOutput(html).setTitle('Scan result').setFaviconUrl(FAVICON_URL);
}


// ================================================================
// v6.10.8 PATCH — AUTO NBRISP PHOTO INJECTION
// Added by ChatGPT for Mr. New
// - Auto-creates the provided ASUS Vivobook photo in Drive
// - Applies it safely to NBRISP01..NBRISP16
// - Keeps iPad rows unchanged while moving non-Apple tablets to Mi
// ================================================================
function runOneTimeAssetMigrationV6108() {
  return runOneTimeAssetMigrationV6107();
}

function runOneTimeAssetMigrationV6107() {
  requireAuthorizedPrivateUser_();

  return withWriteLock_(function() {
    ensureDatabaseColumns_();
    const sheet = getSheet_();
    const data = sheet.getDataRange().getValues();
    if (!data || data.length < 2) {
      return { success: true, tabletUpdated: 0, nbrispUpdated: 0, photoApplied: false, message: 'ASSET_DATABASE is empty.' };
    }

    const rows = data.slice(1);
    const now = new Date();
    const purchaseDate = new Date(2024, 8, 30); // 30/09/2024
    let tabletUpdated = 0;
    let ipadPreserved = 0;
    let nbrispUpdated = 0;
    let photoApplied = false;
    let sourcePhotoId = '';

    for (let i = 0; i < rows.length; i++) {
      const compactTag = String(rows[i][COL.ASSET_TAG] || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
      if (compactTag === 'NBRISP01') {
        sourcePhotoId = String(rows[i][COL.PHOTO_FILE_ID] || '').trim();
        break;
      }
    }

    if (!sourcePhotoId) {
      sourcePhotoId = ensureNBRISPReferencePhotoV6108_();
    }

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const assetId = String(row[COL.ASSET_ID] || '').trim();
      const tag = String(row[COL.ASSET_TAG] || '').trim();
      const compactTag = tag.toUpperCase().replace(/[^A-Z0-9]/g, '');
      const type = String(row[COL.DEVICE_TYPE] || '').trim();
      const brand = String(row[COL.BRAND] || '').trim();
      const model = String(row[COL.MODEL] || '').trim();

      const isTabletRecord =
        /^TAB-/i.test(assetId) ||
        normalize_(type).indexOf('TABLET') !== -1 ||
        compactTag.indexOf('TABLET') !== -1;

      const isAppleIpad =
        normalize_(brand) === 'APPLE' ||
        normalize_(model).indexOf('IPAD') !== -1 ||
        compactTag.indexOf('IPAD') !== -1;

      if (isTabletRecord) {
        if (isAppleIpad) {
          ipadPreserved++;
        } else {
          const nextType = 'Tablet';
          const nextBrand = 'Mi';
          if (String(row[COL.DEVICE_TYPE] || '') !== nextType || String(row[COL.BRAND] || '') !== nextBrand) {
            row[COL.DEVICE_TYPE] = nextType;
            row[COL.BRAND] = nextBrand;
            row[COL.UPDATED] = now;
            tabletUpdated++;
          }
        }
      }

      if (/^NBRISP(0[1-9]|1[0-6])$/.test(compactTag)) {
        row[COL.DEVICE_TYPE] = 'Laptop';
        row[COL.BRAND] = 'ASUS';
        row[COL.MODEL] = 'ASUS VIVOBOOK 14 M1404FA-NK552WS';
        row[COL.PURCHASE_DATE] = purchaseDate;
        row[COL.COST] = 15990;
        row[COL.PHOTO_FILE_ID] = sourcePhotoId;
        row[COL.UPDATED] = now;
        photoApplied = true;
        nbrispUpdated++;
      }
    }

    const rowCount = rows.length;
    const deviceTypes = rows.map(function(r){ return [r[COL.DEVICE_TYPE]]; });
    const brands = rows.map(function(r){ return [r[COL.BRAND]]; });
    const models = rows.map(function(r){ return [r[COL.MODEL]]; });
    const purchaseDates = rows.map(function(r){ return [r[COL.PURCHASE_DATE]]; });
    const costs = rows.map(function(r){ return [r[COL.COST]]; });
    const updated = rows.map(function(r){ return [r[COL.UPDATED]]; });
    const photoIds = rows.map(function(r){ return [r[COL.PHOTO_FILE_ID]]; });

    sheet.getRange(2, COL.DEVICE_TYPE + 1, rowCount, 1).setValues(deviceTypes);
    sheet.getRange(2, COL.BRAND + 1, rowCount, 1).setValues(brands);
    sheet.getRange(2, COL.MODEL + 1, rowCount, 1).setValues(models);
    sheet.getRange(2, COL.PURCHASE_DATE + 1, rowCount, 1).setValues(purchaseDates).setNumberFormat('dd/MM/yyyy');
    sheet.getRange(2, COL.COST + 1, rowCount, 1).setValues(costs);
    sheet.getRange(2, COL.UPDATED + 1, rowCount, 1).setValues(updated);
    sheet.getRange(2, COL.PHOTO_FILE_ID + 1, rowCount, 1).setValues(photoIds);

    SpreadsheetApp.flush();
    invalidateDatabaseCache_();

    return {
      success: true,
      tabletUpdated: tabletUpdated,
      ipadPreserved: ipadPreserved,
      nbrispUpdated: nbrispUpdated,
      photoApplied: photoApplied,
      sourcePhotoId: sourcePhotoId,
      purchaseDate: '30/09/2024',
      costPerNBRISP: 15990,
      model: 'ASUS VIVOBOOK 14 M1404FA-NK552WS',
      message: 'v6.10.8 migration complete. ASUS Vivobook photo, model, date, and cost were applied to NBRISP01–16.'
    };
  });
}

function applyNBRISP01PhotoToNBRISP01_16() {
  requireAuthorizedPrivateUser_();

  return withWriteLock_(function() {
    const sheet = getSheet_();
    const data = sheet.getDataRange().getValues();
    const rows = data.length > 1 ? data.slice(1) : [];
    let sourcePhotoId = '';

    for (let i = 0; i < rows.length; i++) {
      const compactTag = String(rows[i][COL.ASSET_TAG] || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
      if (compactTag === 'NBRISP01') {
        sourcePhotoId = String(rows[i][COL.PHOTO_FILE_ID] || '').trim();
        break;
      }
    }

    if (!sourcePhotoId) {
      sourcePhotoId = ensureNBRISPReferencePhotoV6108_();
    }

    const now = new Date();
    let updatedCount = 0;
    for (let i = 0; i < rows.length; i++) {
      const compactTag = String(rows[i][COL.ASSET_TAG] || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
      if (!/^NBRISP(0[1-9]|1[0-6])$/.test(compactTag)) continue;
      rows[i][COL.PHOTO_FILE_ID] = sourcePhotoId;
      rows[i][COL.UPDATED] = now;
      updatedCount++;
    }

    if (updatedCount > 0) {
      const photoIds = rows.map(function(r){ return [r[COL.PHOTO_FILE_ID]]; });
      const updated = rows.map(function(r){ return [r[COL.UPDATED]]; });
      sheet.getRange(2, COL.UPDATED + 1, rows.length, 1).setValues(updated);
      sheet.getRange(2, COL.PHOTO_FILE_ID + 1, rows.length, 1).setValues(photoIds);
    }

    SpreadsheetApp.flush();
    invalidateDatabaseCache_();
    return {
      success: true,
      updated: updatedCount,
      sourcePhotoId: sourcePhotoId,
      message: 'ASUS Vivobook photo linked safely to NBRISP01–16.'
    };
  });
}


function runOneTimeIPadAndTabletSplitV6110() {
  requireAuthorizedPrivateUser_();

  return withWriteLock_(function() {
    const sheet = getSheet_();
    const data = sheet.getDataRange().getValues();
    const rows = data.length > 1 ? data.slice(1) : [];
    if (!rows.length) return { success: true, updated: 0, message: 'No rows found.' };

    const now = new Date();
    const ipadPhotoId = ensureIPadGen9ReferencePhotoV6110_();
    let ipadUpdated = 0;
    let tabletUpdated = 0;

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const assetTag = String(row[COL.ASSET_TAG] || '').trim();
      const compactTag = assetTag.toUpperCase().replace(/[^A-Z0-9]/g, '');
      const type = String(row[COL.DEVICE_TYPE] || '').trim();
      const brand = String(row[COL.BRAND] || '').trim();
      const model = String(row[COL.MODEL] || '').trim();
      const nType = type.toUpperCase();
      const nBrand = brand.toUpperCase();
      const nModel = model.toUpperCase();

      const isIpad = /IPAD/.test(compactTag) || /IPAD/.test(nType) || /IPAD/.test(nModel) ||
        (nBrand === 'APPLE' && (/TABLET/.test(nType) || nType === 'IPAD'));
      const looksTablet = isIpad || /TABLET/.test(nType) || nType === 'TABLET / IPAD' ||
        /^TABLETESSTUDENT/.test(compactTag) || (/^TAB/.test(compactTag) && nBrand !== 'APPLE');

      if (isIpad) {
        row[COL.DEVICE_TYPE] = 'iPad';
        row[COL.BRAND] = 'Apple';
        row[COL.MODEL] = 'iPad (Gen 9th)';
        row[COL.PURCHASE_DATE] = '17/06/2022';
        row[COL.COST] = 11400;
        row[COL.EMAIL] = 'rise.media@icloud.com';
        row[COL.EMAIL_PASSWORD] = 'MediaEarlyYears2020';
        row[COL.ICLOUD] = 'rise.media@icloud.com';
        row[COL.ICLOUD_PASSWORD] = 'MediaEarlyYears2020';
        row[COL.PHOTO_FILE_ID] = ipadPhotoId;
        row[COL.UPDATED] = now;
        ipadUpdated++;
      } else if (looksTablet) {
        if (String(row[COL.DEVICE_TYPE] || '') !== 'Tablet') {
          row[COL.DEVICE_TYPE] = 'Tablet';
          row[COL.UPDATED] = now;
          tabletUpdated++;
        }
      }
    }

    sheet.getRange(2, 1, rows.length, rows[0].length).setValues(rows);
    SpreadsheetApp.flush();
    invalidateDatabaseCache_();

    return {
      success: true,
      ipadUpdated: ipadUpdated,
      tabletUpdated: tabletUpdated,
      photoFileId: ipadPhotoId,
      message: 'v6.10.10 complete. iPad details were applied and Tablet / iPad was split into Tablet + iPad.'
    };
  });
}

function ensureIPadGen9ReferencePhotoV6110_() {
  requireAuthorizedPrivateUser_();
  const props = PropertiesService.getScriptProperties();
  const propKey = 'RISP_IPAD_GEN9_PHOTO_ID_V6110';
  const fileName = 'RISP_IT_ASSET_IPAD_GEN9_REFERENCE.jpg';
  const saved = String(props.getProperty(propKey) || '').trim();
  if (saved) {
    try {
      DriveApp.getFileById(saved);
      return saved;
    } catch (err) {}
  }

  const files = DriveApp.getFilesByName(fileName);
  if (files.hasNext()) {
    const existing = files.next().getId();
    props.setProperty(propKey, existing);
    return existing;
  }

  const base64 = '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';
  const blob = Utilities.newBlob(Utilities.base64Decode(base64), 'image/jpeg', fileName);
  const file = DriveApp.createFile(blob);
  props.setProperty(propKey, file.getId());
  return file.getId();
}

function ensureNBRISPReferencePhotoV6108_() {
  requireAuthorizedPrivateUser_();
  const props = PropertiesService.getScriptProperties();
  const propKey = 'RISP_NBRISP01_16_PHOTO_ID_V6108';
  const fileName = 'RISP_IT_ASSET_NBRISP01_16_ASUS_VIVOBOOK_14_M1404FA_NK552WS.jpg';
  const saved = String(props.getProperty(propKey) || '').trim();
  if (saved) {
    try {
      DriveApp.getFileById(saved);
      return saved;
    } catch (err) {}
  }

  const files = DriveApp.getFilesByName(fileName);
  if (files.hasNext()) {
    const existing = files.next().getId();
    props.setProperty(propKey, existing);
    return existing;
  }

  const base64 = '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rnKYXOWaq6g7Xjas5Se8niT1yrWwBd3GVzzzzzzzzzzzzzzzzzzzf3pCw3yZtSwCvu7nv972D/EF7rbX6+z938b9rKhQ+u9rTzzzzzzzzzzzzzzzzzz1D44/zzZj+7vL3nfi06fdVVLrp5W5vTbt9M7CY4xjCpNTzzzzzzzzzzzzzzzzzyarQD33zEsiPn1+p7z3jBc76fKdxDym+uD662459b8jvRTzzzzzzzzzzzzzzzzzwYDzzQoKvdl3/ij9ze5X/jtoy5P9R19VOZXLS70W06fZ3TzzzzzzzzzzzzzzzzzzIv8A9792+eexv25P0Y/Va82lLsyvWExPMr8NVhqcpybrpU888888888888888888SR59qXWb/n0vefvoP67XUn6nlr/aHjPXIx1zjVhygyrw8888888888888888888O/kzz3qYUdqvVxhVppaWpQ6WzJ/veKfOzTzGMeEhs6vPU888888888888888888pDQF9k2b08kpSeTHT+WaG6e+OapYntqeffnNGNdt+7pnc8888888888888888889/NW7F9sx8qvM/XwX36N9y91sYdx8vrVKLp99yxV2/9B0888888888888888888U9fg9UPzp31KkMNDQzo04E2Ra7TvMr4reu4R3uf2Km5lc888888888888888888U/O2vs5v6c9lmp62g3Ky6jH45uKjgN7pvff8AW5EPjxPjPPPPPPPPPPPPPPPPPPPDEdPDn7L8nONPK/C+1t2GtALBwI+KsxnOQv8A3twrvdI3vTzzzzzzzzzzzzzzzzzzn/XLe1D97r3Dv+WbGeM/JmG8z+mjHnd11DZhT21pfWO9TzzzzzzzzzzzzzzzzzyE/wDsKeoL98NXA09Poi18Vt3aIkal4+YfsMeV131qLP7HU888888888888888888Resyumq2a/j/4ce+wDyd+jt8dLSv7HWpX8NO6dbNt8LZc888888888888888888dI8iJl1t8UWbQcuIw/q7t9Om6ZuW5R0/xYh+/2hVt484888888888888888888877Oyol7j/8ADEe2dL+OTv6H1niPBVHsvbLfViu+bQ/u5bdPPPPPPPPPPPPPPPPPPFPvrDPLPLDDDDDjPPffDycVbQPLnvjnjnjjnj3vjr3rjHPPPPPPPPPPPPPPPPPPKIJPcRYTfbTbfTTbXfffedSXQcVfdcaYfbQbYYYccfXHNPPPPPPPPPPPPPPPPPDfWGcAfJWFPTPVPQJfGfbVNFHNSPaBRTPfLffcPaaYKdbbXfPPPPPPPPPPPPPPGHfMNBNEKINOKPJLNBNPMHIKNCHFBNECPOPNFPNNFNJMLNTbVfPPPPPPPPPPPPHNcIDDCPKDDWFMDKPGODFJNHNDCYGGTLXMKMLEHKGJPOBDQPVWffPPPPPPPPPOLMfTOLGPNYOHLBLLFHOLLJEDDGNPeOGPGFNDPGJGKJPPJKPLIFafdfPPPPPPPPMNTfZaXcfdXfWQXbTTTTTTTTTfffecbYcbTdfQVfeVfcRfffTfXbeXePPPPPPJaPXZZUbRXecaTXfaVddTTTXWQQYVYQSdfbUffWfTcbcfQffVedfVVXZSVNPPPLXXXfWedTbbZeZTUbbcaYXeTbUXeTReeaVXeZRdfRdfScTVVdXfTacebeXZePPPPPbffbffTTffbTbfffTTTXbTTTfffffXffTXfbTfXfXfbfbfbfXbTffbfffffPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP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';
  const blob = Utilities.newBlob(Utilities.base64Decode(base64), 'image/jpeg', fileName);
  const file = DriveApp.createFile(blob);
  props.setProperty(propKey, file.getId());
  return file.getId();
}


// ================================================================
// ONE-TIME ES STUDENT 01–15 MIGRATION — v6.10.11
// Run `runOneTimeESStudent01To15V6111` ONCE from Apps Script editor.
// Preserves serial numbers, Libib codes, assignment, department, color,
// status, and all unrelated fields.
// ================================================================
function runOneTimeESStudent01To15V6111() {
  requireAuthorizedPrivateUser_();

  return withWriteLock_(function() {
    ensureDatabaseColumns_();
    const sheet = getSheet_();
    const data = sheet.getDataRange().getValues();
    const rows = data.length > 1 ? data.slice(1) : [];
    if (!rows.length) return { success: true, updated: 0, message: 'No asset rows found.' };

    const photoId = ensureESStudentRedmiPadPhotoV6111_();
    const now = new Date();
    const purchaseDate = new Date(2025, 2, 9); // 09/03/2025
    let updatedCount = 0;
    const updatedTags = [];

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const tag = String(row[COL.ASSET_TAG] || '').trim();
      const compact = tag.toUpperCase().replace(/[^A-Z0-9]/g, '');
      const match = compact.match(/^(?:TABLET)?ESSTUDENT0?([1-9]|1[0-5])$/);
      if (!match) continue;

      row[COL.DEVICE_TYPE] = 'Tablet';
      row[COL.BRAND] = 'REDMI';
      row[COL.MODEL] = 'Xiaomi Redmi Pad Pro Ram 8GB / Rom 256GB';
      row[COL.PURCHASE_DATE] = purchaseDate;
      row[COL.COST] = 8999;
      row[COL.EMAIL] = 'test01@risphuket.ac.th';
      row[COL.EMAIL_PASSWORD] = 'risp2025';
      row[COL.PHOTO_FILE_ID] = photoId;
      row[COL.UPDATED] = now;
      updatedCount++;
      updatedTags.push(tag);
    }

    if (updatedCount) {
      sheet.getRange(2, 1, rows.length, rows[0].length).setValues(rows);
      sheet.getRange(2, COL.PURCHASE_DATE + 1, rows.length, 1).setNumberFormat('dd/MM/yyyy');
      SpreadsheetApp.flush();
      invalidateDatabaseCache_();
    }

    return {
      success: true,
      updated: updatedCount,
      tags: updatedTags,
      photoFileId: photoId,
      purchaseDate: '09/03/2025',
      cost: 8999,
      brand: 'REDMI',
      model: 'Xiaomi Redmi Pad Pro Ram 8GB / Rom 256GB',
      email: 'test01@risphuket.ac.th',
      message: 'ES Student 1–15 migration complete.'
    };
  });
}

function ensureESStudentRedmiPadPhotoV6111_() {
  requireAuthorizedPrivateUser_();
  const props = PropertiesService.getScriptProperties();
  const propKey = 'RISP_ES_STUDENT_01_15_REDMIPAD_PHOTO_V6111';
  const fileName = 'RISP_IT_ASSET_ES_STUDENT_01_15_REDMIPAD_PRO.webp';
  const saved = String(props.getProperty(propKey) || '').trim();
  if (saved) {
    try {
      DriveApp.getFileById(saved);
      return saved;
    } catch (err) {}
  }

  const folder = getPhotoFolder_();
  const existingFiles = folder.getFilesByName(fileName);
  if (existingFiles.hasNext()) {
    const existing = existingFiles.next().getId();
    props.setProperty(propKey, existing);
    return existing;
  }

  const base64 = 'UklGRrx0AQBXRUJQVlA4WAoAAAAQAAAASwQASwQAQUxQSAIHAAABHMZtGzmi+m97L+d7RcQE0KXab8tpJi2FJbuEEcwwHvzeYZGZczYeVZqmmuhUzVzHHrZPhiRbv4jMY9u2bdu2bfuca9u2fWzbtm37rDoz4/fH7D57V7NRcdARMQFAgfj7jyJiAtD3v//973//+9///ve///3vf//73//+97///e9///vf//73v//7/v/MtZrGdLcjOqYlnARe0ZQHpi55kfXXWnsMrrXuKlPknEaaByaVzkJENQ3UUee03L/P/O8YPXO9nHXCndBFnzPsgyFj8KOP3l8QoytJRaRzkJTwf92aY/pwTNDzvKttu++xp335q1/vjL/29Zc4pn/1+W98feDXvnzaMXtvtercGGnSTkEzAJl+9YO//6f/XHDF1aO+5vL72ph+5PJrrp5QX3v9Tfc9/wG7ZxvTHM33n7v1d4cvO5UASbsCSQCmX+Wkc1/hYLyW0uuUjWO69EZdSuVI7dHzj1kMgGoXkACs/PP7PyBJa62OZhtjrU7Ymxk7fbNWm5HkK//ecmogi/epYvItz6wkSzUGbauV5AtnzAWo7yVgi5tJtmoM3a2SfOKoqZHE70Sx3N8rW2UEt0LetR6gXqfAwe+QlVG8NQ7/wQzIPqeY5fdkZSRv5F3LQMXhMua7i80Yy63wtd2g/paw+nOsjOeNbVskcbaMFZ5iYUSvNnx3qK8pVniVlTG9cciWUE9Tme12Fkb1xndWQfI0XMnCuF755FyibpZwCosFNlaeDTdTrPJRNUZ267VDkZxM5HY2xnbjWwuLuljC3rUyulf+HC6mMtez1sKb2etzinoYjmNhfC/8JZKDQR81C3DNXpwH6l4ZB7BFOFYe5l8i6RoWRnizJwXenbH28MYYx7aJJOdKOIYlxrHyx/Au4CK2IFd44+QiriWY/UNGeWvD10B2LcXujPM97uNcGb9kDXON/4Bri+iNgc742KSupZjv2VD3xrwQx0pY/h22MEf2VoG61hpDaYGO27tWxqZmgc54PJJr7cXKON/4fWTHSjiRJdBV/tW5vhjqCs/DJI6l+Eawu8C5vv2JEt/p+89//vOf//znP//5LzzId4PdhepZgm8Eu3ORHWuymb4T6ipvW3sKt8rY7bm3Ge1ngTjVJDiaLdo1zzrEetHOPOtQlr7//Oc///nPf/7zn//85z//9f3nP//5z38fNzi49YKd9TzrOMb7Wd0qYdPrnqEFuso7tpoKfi3yJZZAV3g2smMpvhPsLsyTfILEBej7z3/+85///Oc///nPf/7zn//85z//+c9//vOf//znP//5z3/+85///Oc///nPf/7zn//85z//+c9//vOf//znP//5z3/+85///Oc///nPf/7zn//85z//+c9//vOf//znP//5z3/+85///Oc///nPf/7zn//85z//+c9//vOf//znP//5z3/+85///Oc///nPf/7zn//85z//+c9//vOf//znP//5z3/+85///Oc///nPf/7zn//85z//+c9//vOf//znP//5z3/+85///Oc///nPf/7zn//85z//+c9//vOf//znP//5z3/+85///Oc///nPf/7zn//85z//9f3nP//579MZvv2JEl8PdZX/RXashC8Eu1+7Vsaxoc74RSTX2pU11B3gWgkbNVqcIzeAutbqQwKd8cOlIa617Ftsge7FGVxLMccTga7xFoFni+JK1jBX+TWoZyHje2xhrsftkV1LsQXDfOPLCyG5FjDd67QgV3kuBN79V2tBrvEMJOdKciB7Mc44YlGod2HZ98xCXOPF8O+EM1mC3Kai/iUbFLMAV3n3tCLuBeAKtgDX2pFI8O8k27PGt2aPTypwcNEpr2KJbzwa6mFIWOajasGt8u6pRVwMij+xxjZrQ9dBgo+LTncPa2gr/DIUXq5Ya3hrga3y3ymJmyHjSNa4Vnj3rFA4esa32LOg1vj4HBB4uqj+gdVCWuEDSyHB10Xy91ktnlnlkwtA4e0CfIcs0ayRVy+GBH8XxW7vssaySvvtVFC4fMJKt5DVophV8pHtAIXTK6Y4bQRZQ5gVcshPZ4cK3F6BFf88hGzNYpdVI8t/FwcSPF8UWONMI1tpYauVSvKFX20AqML5VYElv/4QSbbWmtnEgY3SY8zaYJsk37/2kJkAFXSACcDUu//p3h4HWu1NBDaOvJWeu1YOvss9vzxoVQCS0BFKAjDt4gf+8e5XhnAiccSQD4eMMLrshy8+dP/g+Z4LvrnbotMAEBV0iJIFA+dde7ejzzh98H/IjpuuvebaG29/wGlnnO6th++0+uwYdOskCV2jiKoKQqCmwbSqCjpLTXmSicGc08CcJ3HYnAR9//vf/33/+9//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';
  const blob = Utilities.newBlob(Utilities.base64Decode(base64), 'image/webp', fileName);
  const file = folder.createFile(blob);
  props.setProperty(propKey, file.getId());
  return file.getId();
}


// ================================================================
// ONE-TIME MAC MINI 01–18 MIGRATION — v6.10.12
// Run `runOneTimeMacMini01To18V6112` ONCE from Apps Script editor.
// Exact rows are matched by Asset Tag RISPmc_01 .. RISPmc_18.
// Existing Serial / Service Tag / Libib / Assignment data are preserved.
// ================================================================
function runOneTimeMacMini01To18V6112() {
  requireAuthorizedPrivateUser_();

  return withWriteLock_(function() {
    ensureDatabaseColumns_();
    const sheet = getSheet_();
    const data = sheet.getDataRange().getValues();
    const rows = data.length > 1 ? data.slice(1) : [];
    if (!rows.length) return { success: true, updated: 0, message: 'ASSET_DATABASE is empty.' };

    const now = new Date();
    const photoId = ensureMacMiniM4ReferencePhotoV6112_();
    let updatedCount = 0;
    const updatedTags = [];

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const tag = String(row[COL.ASSET_TAG] || '').trim();
      const match = /^RISPmc_(0[1-9]|1[0-8])$/i.exec(tag);
      if (!match) continue;

      const number = parseInt(match[1], 10);
      const padded = String(number).padStart(2, '0');
      let purchaseDate;
      if (number >= 1 && number <= 15) purchaseDate = new Date(2025, 7, 27);   // 27/08/2025
      else if (number === 16) purchaseDate = new Date(2025, 8, 16);           // 16/09/2025
      else purchaseDate = new Date(2026, 7, 27);                              // 27/08/2026

      row[COL.DEVICE_TYPE] = 'Mac mini';
      row[COL.BRAND] = 'Apple';
      row[COL.MODEL] = 'Apple Mac mini: M4 chip 10C CPU/10C GPU/16GB/256GB SSD (2024)';
      row[COL.COLOR] = 'Silver';
      row[COL.ADMIN_USERNAME] = 'RISPmc_' + padded;
      row[COL.ADMIN_PASSWORD] = 'risp2024';
      row[COL.PURCHASE_DATE] = purchaseDate;
      row[COL.COST] = 28900;
      row[COL.PHOTO_FILE_ID] = photoId;
      row[COL.UPDATED] = now;

      updatedCount++;
      updatedTags.push('RISPmc_' + padded);
    }

    if (updatedCount) {
      sheet.getRange(2, 1, rows.length, rows[0].length).setValues(rows);
      sheet.getRange(2, COL.PURCHASE_DATE + 1, rows.length, 1).setNumberFormat('dd/MM/yyyy');
    }

    SpreadsheetApp.flush();
    invalidateDatabaseCache_();

    return {
      success: true,
      updated: updatedCount,
      tags: updatedTags,
      photoFileId: photoId,
      model: 'Apple Mac mini: M4 chip 10C CPU/10C GPU/16GB/256GB SSD (2024)',
      costEach: 28900,
      color: 'Silver',
      adminPassword: 'risp2024',
      message: 'Mac mini 01–18 migration completed.'
    };
  });
}

function ensureMacMiniM4ReferencePhotoV6112_() {
  requireAuthorizedPrivateUser_();
  const props = PropertiesService.getScriptProperties();
  const propKey = 'RISP_MAC_MINI_M4_01_18_PHOTO_ID_V6112';
  const fileName = 'RISP_IT_ASSET_MAC_MINI_M4_2024_REFERENCE.png';
  const saved = String(props.getProperty(propKey) || '').trim();

  if (saved) {
    try {
      DriveApp.getFileById(saved);
      return saved;
    } catch (err) {}
  }

  const files = DriveApp.getFilesByName(fileName);
  if (files.hasNext()) {
    const existing = files.next().getId();
    props.setProperty(propKey, existing);
    return existing;
  }

  const base64 = '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';
  const blob = Utilities.newBlob(Utilities.base64Decode(base64), 'image/png', fileName);
  const file = DriveApp.createFile(blob);
  props.setProperty(propKey, file.getId());
  return file.getId();
}


// ================================================================
// ONE-TIME FINAL DATA CLEANUP — v6.10.13
// Run `runOneTimeFinalTabletIPadPhotoFixV6113` ONCE.
// - RISP IPAD 01..04 -> iPad + exact Gen 9 data / credentials / photo
// - TABLET ES Student 01..15 -> Tablet + Redmi details / shared test account / photo
// - All remaining tablet-family assets -> Tablet (never "Tablet / iPad")
// - Makes migration photos visible to the PWA when Workspace sharing allows it
// - PWA also has an authenticated JSONP photo fallback when public-link sharing is blocked
// ================================================================
function runOneTimeFinalTabletIPadPhotoFixV6113() {
  requireAuthorizedPrivateUser_();

  return withWriteLock_(function() {
    ensureDatabaseColumns_();
    const sheet = getSheet_();
    const data = sheet.getDataRange().getValues();
    const rows = data.length > 1 ? data.slice(1) : [];
    if (!rows.length) return { success: true, updated: 0, message: 'ASSET_DATABASE is empty.' };

    const now = new Date();
    const ipadPhotoId = ensureIPadGen9ReferencePhotoV6110_();
    const redmiPhotoId = ensureESStudentRedmiPadPhotoV6111_();
    let ipadUpdated = 0;
    let esUpdated = 0;
    let tabletNormalized = 0;
    let appVisiblePhotos = 0;

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const assetId = String(row[COL.ASSET_ID] || '').trim();
      const tag = String(row[COL.ASSET_TAG] || '').trim();
      const compact = tag.toUpperCase().replace(/[^A-Z0-9]/g, '');
      const type = String(row[COL.DEVICE_TYPE] || '').trim();
      const brand = String(row[COL.BRAND] || '').trim();
      const model = String(row[COL.MODEL] || '').trim();
      const nType = type.toUpperCase();
      const nBrand = brand.toUpperCase();
      const nModel = model.toUpperCase();

      // Exact school iPads requested by New.
      const schoolIpad = /^RISPIPAD0?[1-4]$/.test(compact);
      const genericIpad = /IPAD/.test(compact) || /IPAD/.test(nType) || /IPAD/.test(nModel) ||
        (nBrand === 'APPLE' && (/TABLET/.test(nType) || nType === 'IPAD'));

      if (schoolIpad) {
        row[COL.DEVICE_TYPE] = 'iPad';
        row[COL.BRAND] = 'Apple';
        row[COL.MODEL] = 'iPad (Gen 9th)';
        row[COL.PURCHASE_DATE] = new Date(2022, 5, 17); // 17/06/2022
        row[COL.COST] = 11400;
        row[COL.EMAIL] = 'rise.media@icloud.com';
        row[COL.EMAIL_PASSWORD] = 'MediaEarlyYears2020';
        row[COL.ICLOUD] = 'rise.media@icloud.com';
        row[COL.ICLOUD_PASSWORD] = 'MediaEarlyYears2020';
        row[COL.PHOTO_FILE_ID] = ipadPhotoId;
        row[COL.UPDATED] = now;
        ipadUpdated++;
        continue;
      }

      if (genericIpad) {
        if (String(row[COL.DEVICE_TYPE] || '') !== 'iPad') {
          row[COL.DEVICE_TYPE] = 'iPad';
          row[COL.UPDATED] = now;
          ipadUpdated++;
        }
        continue;
      }

      // Actual Libib tags are usually "TABLET ES Student 01" etc.
      const esMatch = compact.match(/^(?:TABLET)?ESSTUDENT0?([1-9]|1[0-5])$/);
      if (esMatch) {
        row[COL.DEVICE_TYPE] = 'Tablet';
        row[COL.BRAND] = 'REDMI';
        row[COL.MODEL] = 'Xiaomi Redmi Pad Pro Ram 8GB / Rom 256GB';
        row[COL.PURCHASE_DATE] = new Date(2025, 2, 9); // 09/03/2025
        row[COL.COST] = 8999;
        row[COL.EMAIL] = 'test01@risphuket.ac.th';
        row[COL.EMAIL_PASSWORD] = 'risp2025';
        row[COL.PHOTO_FILE_ID] = redmiPhotoId;
        row[COL.UPDATED] = now;
        esUpdated++;
        continue;
      }

      // Normalize every other tablet-family record into a single Tablet category.
      const tabletFamily =
        nType === 'TABLET' || nType === 'TABLET / IPAD' || /TABLET/.test(nType) ||
        /^TABLETESSTUDENT/.test(compact) ||
        (/^TAB[-_0-9A-Z]*/.test(assetId.toUpperCase()) && nBrand !== 'APPLE') ||
        (/REDMI PAD|MI PAD|XIAOMI PAD/.test(nModel));

      if (tabletFamily && String(row[COL.DEVICE_TYPE] || '') !== 'Tablet') {
        row[COL.DEVICE_TYPE] = 'Tablet';
        row[COL.UPDATED] = now;
        tabletNormalized++;
      }
    }

    // Make all existing asset photos app-viewable when domain policy permits.
    const photoIds = Object.create(null);
    for (let i = 0; i < rows.length; i++) {
      const id = String(rows[i][COL.PHOTO_FILE_ID] || '').trim();
      if (id) photoIds[id] = true;
    }
    Object.keys(photoIds).forEach(function(id) {
      if (makeAssetPhotoAppVisibleV6113_(id)) appVisiblePhotos++;
    });

    sheet.getRange(2, 1, rows.length, rows[0].length).setValues(rows);
    sheet.getRange(2, COL.PURCHASE_DATE + 1, rows.length, 1).setNumberFormat('dd/MM/yyyy');
    SpreadsheetApp.flush();
    invalidateDatabaseCache_();

    return {
      success: true,
      ipadUpdated: ipadUpdated,
      esStudentUpdated: esUpdated,
      tabletNormalized: tabletNormalized,
      uniquePhotosProcessed: appVisiblePhotos,
      message: 'Final v6.10.13 cleanup complete: Tablet/iPad split, iPad data, ES Student 01–15 data, and PWA photo visibility refreshed.'
    };
  });
}


// ================================================================
// v6.10.15 ONE-TIME DISPLAY POLISH
// Run once after deploying v6.10.15. It does not change asset prices;
// it only converts parseable COST values to numbers and applies one
// consistent Thai Baht number format across the COST column.
// ================================================================
function runOneTimeMoneyFormatV6115() {
  requireAuthorizedPrivateUser_();
  return withWriteLock_(function() {
    const sheet=getSheet_();
    const lastRow=sheet.getLastRow();
    if(lastRow<2)return {success:true,updated:0,message:'No asset rows.'};
    const range=sheet.getRange(2,COL.COST+1,lastRow-1,1);
    const values=range.getDisplayValues();
    let updated=0;
    const normalized=values.map(function(r){
      const raw=String(r[0]||'').trim();
      if(!raw)return [''];
      const n=Number(raw.replace(/฿/g,'').replace(/THB/gi,'').replace(/,/g,'').replace(/[^0-9.\-]/g,''));
      if(!isFinite(n))return [r[0]];
      updated++; return [n];
    });
    range.setValues(normalized).setNumberFormat('฿#,##0.00');
    SpreadsheetApp.flush(); invalidateDatabaseCache_();
    return {success:true,updated:updated,message:'COST formatting normalized to ฿#,##0.00 across ASSET_DATABASE.'};
  });
}


// ================================================================
// ONE-TIME STUDENT + DELL SCHOOL_4–SCHOOL_23 MIGRATION — v6.10.22
// Run `runOneTimeStudentDellMigrationV61022` ONCE from Apps Script editor.
// - Adds / normalizes Student department records.
// - School_4 through School_23 become Dell Inspiron 3530 student laptops.
// - EMAIL / EMAIL_PASSWORD are copied from each row's Microsoft credentials.
// - Existing Asset ID, Serial, Libib, Service Tag, Assigned To and Purchase Date are preserved.
// - Tries to attach one shared exact-model product photo; if public product-image fetch is blocked,
//   it safely preserves existing photos and reports photoApplied=false instead of guessing.
// ================================================================
function runOneTimeStudentDellMigrationV61022() {
  requireAuthorizedPrivateUser_();
  return withWriteLock_(function() {
    ensureDatabaseColumns_();
    const sheet = getSheet_();
    const data = sheet.getDataRange().getValues();
    const rows = data.length > 1 ? data.slice(1) : [];
    if (!rows.length) return { success:true, updated:0, message:'ASSET_DATABASE is empty.' };

    const now = new Date();
    let normalizedStudentDepartments = 0;
    let dellUpdated = 0;
    const updatedTags = [];
    let photoId = '';
    let photoError = '';

    try {
      photoId = ensureSchoolDell3530PhotoV61022_();
    } catch (photoErr) {
      photoError = photoErr && photoErr.message ? photoErr.message : String(photoErr);
    }

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const deptRaw = String(row[COL.DEPARTMENT] || '').trim();
      const deptNorm = normalize_(deptRaw).replace(/[\-_:/()]+/g,' ').replace(/\s+/g,' ').trim();

      // Any legacy Other/Student wording becomes the canonical Student department.
      if (deptNorm === 'STUDENT' || (deptNorm.indexOf('STUDENT') !== -1 && deptNorm.indexOf('OTHER') !== -1)) {
        if (String(row[COL.DEPARTMENT] || '') !== 'Student') {
          row[COL.DEPARTMENT] = 'Student';
          row[COL.UPDATED] = now;
          normalizedStudentDepartments++;
        }
      }

      const schoolNo = schoolAssetNumberV61022_(row[COL.ASSET_TAG]);
      if (!schoolNo) continue;

      row[COL.DEVICE_TYPE] = 'Laptop';
      row[COL.BRAND] = 'Dell';
      row[COL.MODEL] = 'Dell Inspiron 3530 OIN3530100501GTH (Silver)';
      row[COL.COLOR] = 'Silver';
      row[COL.DEPARTMENT] = 'Student';
      row[COL.COST] = 14990;
      row[COL.EMAIL] = String(row[COL.MICROSOFT_USERNAME] || '').trim();
      row[COL.EMAIL_PASSWORD] = String(row[COL.MICROSOFT_PASSWORD] || '').trim();
      if (photoId) row[COL.PHOTO_FILE_ID] = photoId;
      row[COL.UPDATED] = now;

      dellUpdated++;
      updatedTags.push(String(row[COL.ASSET_TAG] || 'School_' + schoolNo));
    }

    if (dellUpdated || normalizedStudentDepartments) {
      sheet.getRange(2, 1, rows.length, rows[0].length).setValues(rows);
      sheet.getRange(2, COL.COST + 1, rows.length, 1).setNumberFormat('฿#,##0.00');
      SpreadsheetApp.flush();
      invalidateDatabaseCache_();
    }

    return {
      success: true,
      updated: dellUpdated,
      studentDepartmentsNormalized: normalizedStudentDepartments,
      tags: updatedTags,
      model: 'Dell Inspiron 3530 OIN3530100501GTH (Silver)',
      costEach: 14990,
      department: 'Student',
      emailCopiedFromMicrosoft: true,
      photoApplied: !!photoId,
      photoFileId: photoId,
      photoWarning: photoError,
      message: 'Student department + School_4–School_23 Dell migration completed.'
    };
  });
}

function schoolAssetNumberV61022_(assetTag) {
  let compact = String(assetTag || '').toUpperCase().replace(/[^A-Z0-9]/g,'');
  compact = compact.replace(/^SHOOL/, 'SCHOOL');
  const match = /^SCHOOL0*(\d{1,2})$/.exec(compact);
  if (!match) return 0;
  const n = Number(match[1]);
  return n >= 4 && n <= 23 ? n : 0;
}

function ensureSchoolDell3530PhotoV61022_() {
  return ensureExactDellPhotoV61024_();
}
function ensureExactDellPhotoV61024_() {
  requireAuthorizedPrivateUser_();
  const props=PropertiesService.getScriptProperties(),key='RISP_EXACT_DELL_PHOTO_V61024';
  const saved=props.getProperty(key);
  if(saved){try{const f=DriveApp.getFileById(saved);if(!f.isTrashed()){makeAssetPhotoAppVisibleV6113_(saved);return saved;}}catch(e){}}
  const bytes=Utilities.base64Decode('/9j/4QAC/+EAAv/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQECAQECAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/8IAEQgD6APoAwERAAIRAQMRAf/EADoAAQAABgMBAQAAAAAAAAAAAAABAgMEBwgFBgkKCwEBAAICAwEBAAAAAAAAAAAAAAECAwgEBQcGCf/aAAwDAQACEAMQAAAA+/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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XEU+IpH4inxFLiKXEU+Ip8RS4inxFPiKXEUuIp8RT4ilxFPiKXEUuIpcRSLxES8REhSIUiEREUi8RSIUiFIhHiIkKReIiKRCIiQpF4ikQiXiKQpCIpCIiQpEKRCJCkQNRCJCIiQiQpCkI8RERIRIRERSIUi8REhERIRIRIUhFIiQ9ERSLBYLBYPRMLZ7U6zmKBAu8YzGP7Y9Q7NXzapmDQoK1dOkNvWtms61nclGfPr2bUTDXZq6dKaTXVm+vHQtIkUNgq853mnMsIq853mn0wirznea8ywirzneacywirznea8ywirzneacywirzneafTCKvOd5rzLCKvOd5pzLCKvOd5pzLCKvOd5rzLCKvOd5pzLCKvOd5pzLCKvOd5pzLCKvOd5rzLCKvOd5rzLCKvOd5p9MIq853mn0wirzneafTCKvOd5pzLCKvOd5pzLCKvOd5pzLCKvOd5p9MIq+53mnMsIq853mnMsIq853mn0wirzneacywirzneacywirzneafTCKvOd5pzLCKvOd5p9MIq853mn0wirzneacywirzneacywirzneacywirzneafTCKvOd5pzLCKvOd5rzLCKvOd5pzLCKvOd5pzLCKvOd5pzLCKvOd5rzLCKvOd5pzLCKvOd5pzLCKvOd5pzLCKvOd5pzLCKvOd5rzLCKvOd5rzLCKvud5pzLCKvOd5pzLCKuud5rzLCKvOd5pzLCKvOd5pzLCKvOd5pzLCKuud5rzLCKvOd5pzLCKvOd5pzLCKvOd5rzLCKvOd5p9MIq853mnMsIq853mnMsIq853mn0wirzneacywirzneacywirzneacywirznea8ywirzneacywirzneacywirzneacywirznea8ywirzneacywirzneafTCKvOd5rzLCKvud5pzLCKvOd5pzLCKvud5p9MIq853mnMsIq853mn0wirzneafTCKvOd5p9MIq853mvMsIq853mnMsIq853mn0wirzneafTCKvOd5p9MIq853mn0wirzneafTCKvOd5p9MIq853mn0wirzneafTCKvOd5p9MIq853mn0wirzneafTCKvud5p9MIq853mnMsIq853mn0wirzneafTCJVktg4u5NWRrNRrhbDcfgW6Zrs1dGkU0g9u+Q/eLKHsafil5VTNdmro0iERIXb/kP3iyh7Gn4peVU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RMRMRMROaJiJiJiJiJiJiJiJiJiJiJiJikYpK3ikreKSt4pK3ikreKSt4pK3imreKat4pq3imreKat4pq3imreKa94pr3imreKa94pq3imveKat4pq3imveKat4iYpr3imreKat4pr3imveKa94pr3imreKa94pq3imreKat4pr3imreKat4pq3imreKat4pq3imreKat4pq3ikreKSt4pK3ikreKSt4pK3ikreImImImImImImImImInNERMRMRMRP/AMG7/8QARxEAAAMDBwUNBgUEAgMBAAAAAAEDAgQRBRAWIVKR0gYSIDFAEyIwMjQ1QVBRYXFzsRQzYHKCslNigaHBFSNC0SRDY7Dh8P/aAAgBAwEBPwL/ANxtUKpqhUIEKp4CAhNUKp6hAVCBTQECFQgU1QgICAgQgQgU0CEJ4CAhpwmhNCaAqngKhAQEBVMU8BCeAhNAQnhoQEBUITQnqEOpCEeD8dDwnhPCbVoV8IU1elGuEx6erWNc/jox0Kx4CufVpRmhMc2sapodQ1aB905j1nq0y0ap49Ir04zR4Cubx0CmhNDQ8J46UZqpozENQiOnRiNfAFo9G2Sk+NubtuyREbWdCsUhfLKdx4hSF8sp3HiFIXywlceIUhfLKf74hSF8sp3HiFIXyynceIUhfLKVx4hSF8sp3HiFIXyynceIUhfLKdx4hSF8sp3HiFIXyylceIUifLKVx4hSF8sp/viFIn2ynceIUhfLKVx4hSF8sp3HiFIn2ynceIUhfLKdx4hSF8sp3HiFIXyylceIUhfLKdx4hSF8sp3HiFIXyylceIUhfLKdx4hSF8sp3HiFIXyynceIUhfLKdx4hSF8spXHiFIXyynceIUhfLKdx4hSF8sp3HiFIXyynceIUhfLKVx4hSF8spXHiFIXyylceIUhfLKdx4hSF8spXHiFIn2ynceIUhfLKVx4hSF8sp3HiFIXyynceIUhfLKdx4hSF9sp3HiFIHyyn++IUgfLKdx4hSF8sp3HiFIXyynceIUhfbKdx4hSF8spXHiFIHyylceIUhfLKVx4hSF8sp3HiFIXyyn++IUhfLKdx4hSB8sp/viFIXyynceIUhfLKVx4hSB8sp/viFIXyylceIUhfLKdx4hSF8sp3HiFIXyylceIUhfLKVx4hSJ8sp3HiFIXyynceIUhfLKdx4hSF8sp3HiF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FxZ42c0EnJ1Q90wyRzPMqOjtrOLXcHyWXh53rG9TEY9VZO8sa8v+WdqMS3zc34s+pdWk0bJxZqMIyy/I/wCWcXeE8o/xU7jDOUDkfGzy/Qf1uTrZ3GDlyTy1GZ/oGsoXUuIy0YVyiVP3TBEF5Re3jjtnDq3J7lbXl/yQrBbTLfNzf0+pfEWTvK2/L/ktqMS3zc3+n3F8RZO8qb8v+S2oxLXNzf0/cXxFk7ypvy/5LaoCWubW/wBPuL4iyd5U38n8lMW0y1zcp9P3F8RZO8pb+T+S2uWubW/p+4viLJ3lLfyfyKgW0GJa5tb+n7i+IsneUN/J/MxbQYlnm1T6fuL4iyc5Qp8n8zFtMtc3KfT9xfEWTnv1Pk/kVAtplrm1T6fuL4iyd9+p8v8AO1GJa5tU+n7i+IsnPfKfL/O1GJZ5tU+n7i+IsnfeqfKXrMW0y1zap9P3F8RZOe9U+UhAFtMtc2qfT9xfEWTnvVPlKYtplnm1T6fuL4iyc94r4EDBbS/u7b26NIJwzmoa/EjFHn20leeEUefbSV54RR19tJXnhFHny0le1hFHny0le1hFHn20le1hFHX20leeEUdfbSV54RR19tJXnhFHX20le1hFHn20leeEUdfLSV7WEUdfbSV7WEUdfbSV54RR19tJXtYRR19tJXtYRR19tJXnhFHX20leeEUdfbSV54RR59tJXnhFHn20leeEUefbSV54RR59tJXnhFHn20leeEUefbSV54RR59tJXnhFHn20leeEUefLSV54RR19tJXnhFHny0leeEUefbSV54RR59tJXnhFHn20leeEUefbSV54RR59tJXnhFHn20leeEUefbSd54RR59tJXnhFHny0leeEUefbSV54RR59tJXnhFHny0leeEUefbSV54RR58tJ3nhFHn20neeEUefbSV54RR59tJ3nhFHn20neeEUefbSV54RR59tJXnhFHn20leeEUefbSV54RR59tJXnhFHn20leeEUefbSV54RR59tJ3nhFHn20neeEUefbSV54RR98tJ3nhFHn20neeEUefLSV54RR59tJXnhFHn20neeEUffbSd54RR59tJXnhFHn20leeEUefbSd54RR59tJXnhFHn20leeEUefbSV54RR59tJXnhFHn20neeEUefLSV54RR59tJXnhFHn20leeEUefbSV54RR59tJ3nhFHn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');
  const file=getPhotoFolder_().createFile(Utilities.newBlob(bytes,'image/jpeg','RISP_DELL_SCHOOL_04_23_EXACT_V61024.jpg'));
  makeAssetPhotoAppVisibleV6113_(file.getId());props.setProperty(key,file.getId());return file.getId();
}

// Preview is read-only; no credentials are returned or logged.
function previewDellSchool04To23V61024() {
  requireAuthorizedPrivateUser_();ensureDatabaseColumns_();
  const data=getSheet_().getDataRange().getValues();
  const tags=data.slice(1).filter(r=>schoolAssetNumberV61022_(r[COL.ASSET_TAG])).map(r=>String(r[COL.ASSET_TAG]));
  const result={count:tags.length,expected:20,tags:tags,model:'Dell Inspiron 3530 OIN3530100501GTH (Silver)',costEach:14990};
  console.log(JSON.stringify(result));return result;
}
function runOneTimeDellSchool04To23V61024() {
  requireAuthorizedPrivateUser_();
  return withWriteLock_(function(){
    ensureDatabaseColumns_();const sheet=getSheet_(),data=sheet.getDataRange().getValues();
    const matches=[];for(let i=1;i<data.length;i++)if(schoolAssetNumberV61022_(data[i][COL.ASSET_TAG]))matches.push(i);
    if(!matches.length)throw new Error('No School_4–School_23 rows found. No assets changed.');
    const photo=ensureExactDellPhotoV61024_(),now=new Date(),tags=[];
    matches.forEach(function(i){
      const row=data[i];
      const updates={DEVICE_TYPE:'Laptop',BRAND:'Dell',MODEL:'Dell Inspiron 3530 OIN3530100501GTH (Silver)',COLOR:'Silver',DEPARTMENT:'Student',COST:14990,EMAIL:String(row[COL.MICROSOFT_USERNAME]||''),EMAIL_PASSWORD:String(row[COL.MICROSOFT_PASSWORD]||''),PHOTO_FILE_ID:photo,UPDATED:now};
      // Touch only requested cells. All other rows, formulas and identity fields stay intact.
      Object.keys(updates).forEach(function(k){const cell=sheet.getRange(i+1,COL[k]+1);if(k==='EMAIL'||k==='EMAIL_PASSWORD')cell.setNumberFormat('@');cell.setValue(updates[k]);});
      sheet.getRange(i+1,COL.COST+1).setNumberFormat('฿#,##0.00');tags.push(String(row[COL.ASSET_TAG]));
    });
    SpreadsheetApp.flush();invalidateDatabaseCache_();
    const result={success:true,updated:tags.length,expected:20,tags:tags,photoApplied:true,message:'Exact Dell photo and details applied to matching School_4–School_23 rows.'};
    console.log(JSON.stringify(result));return result;
  });
}

function extractProductImageUrlV61022_(html) {
  html = String(html || '');
  const patterns = [
    /<meta[^>]+property=["']og:image(?::secure_url)?["'][^>]+content=["']([^"']+)["']/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image(?::secure_url)?["']/i,
    /<meta[^>]+name=["']twitter:image(?::src)?["'][^>]+content=["']([^"']+)["']/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+name=["']twitter:image(?::src)?["']/i,
    /["']image["']\s*:\s*["'](https?:\\?\/\\?\/[^"']+?\.(?:jpg|jpeg|png|webp)(?:\?[^"']*)?)["']/i
  ];
  for (let i = 0; i < patterns.length; i++) {
    const m = patterns[i].exec(html);
    if (!m || !m[1]) continue;
    return String(m[1])
      .replace(/\\\//g,'/')
      .replace(/&amp;/g,'&')
      .replace(/&#x2F;/gi,'/')
      .replace(/&#47;/g,'/');
  }
  return '';
}

