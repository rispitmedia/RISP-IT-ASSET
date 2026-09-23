
(function(){
  'use strict';

  const CACHE_KEY = 'RISP_V7_STEP2_SAFE_CACHE_23';
  const CONNECTION_STORAGE_KEY = 'RISP_V7_SECURE_CONNECTION_23';
  const BRIDGE_SOURCE = 'RISP_V7_PUBLIC_BRIDGE';
  const APP_SOURCE = 'RISP_V7_APP';

  const splash = document.getElementById('splash');
  const screens = Array.from(document.querySelectorAll('[data-screen]'));
  const tabs = Array.from(document.querySelectorAll('.tab[data-route]'));
  const routeButtons = Array.from(document.querySelectorAll('[data-route]'));
  const bridge = document.getElementById('backendBridge');
  const syncButton = document.getElementById('syncButton');
  const syncText = document.getElementById('syncText');
  const syncBanner = document.getElementById('syncBanner');
  const openBackendBtn = document.getElementById('openBackendBtn');
  const categoryRail = document.getElementById('categoryRail');
  const assetList = document.getElementById('assetList');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  const searchEmpty = document.getElementById('searchEmpty');
  const searchResultCount = document.getElementById('searchResultCount');
  const connectionSheet = document.getElementById('connectionSheet');
  const apiUrlInput = document.getElementById('apiUrlInput');
  const apiKeyInput = document.getElementById('apiKeyInput');
  const saveConnectionBtn = document.getElementById('saveConnectionBtn');
  const closeConnectionBtn = document.getElementById('closeConnectionBtn');
  const disconnectBtn = document.getElementById('disconnectBtn');
  const toggleKeyBtn = document.getElementById('toggleKeyBtn');

  let ASSETS = [];
  let assetMap = Object.create(null);
  let currentCategory = '__ALL__';
  let currentSpecialFilter = '';
  let currentDetailId = '';
  let bridgeReady = false;
  let serverConnected = false;
  let lastSyncAt = 0;
  let requestSeq = 0;
  const pendingDetail = Object.create(null);

  const TOKEN = (() => {
    try {
      const a = new Uint32Array(4);
      crypto.getRandomValues(a);
      return Array.from(a).map(n => n.toString(36)).join('');
    } catch (e) {
      return 't' + Date.now().toString(36) + Math.random().toString(36).slice(2);
    }
  })();

  function standalone(){
    return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  }

  function normalize(v){
    return String(v == null ? '' : v).trim().toUpperCase();
  }

  function esc(v){
    return String(v == null ? '' : v)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;').replace(/'/g,'&#039;');
  }

  function value(v){
    const s = String(v == null ? '' : v).trim();
    return s || '—';
  }

  function showToast(msg){
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 1900);
  }

  function setSync(state, text){
    syncButton.classList.remove('connected','syncing','error');
    if (state) syncButton.classList.add(state);
    syncText.textContent = text;
  }

  function route(name, push){
    const target = document.querySelector('[data-screen="' + name + '"]');
    if (!target) return;
    screens.forEach(el => el.classList.toggle('active', el === target));
    tabs.forEach(el => el.classList.toggle('active', name !== 'detail' && el.dataset.route === name));
    target.scrollTop = 0;
    if (push !== false && name !== 'detail') {
      try { history.replaceState({screen:name}, '', '#' + name); } catch(e) {}
    }
  }

  routeButtons.forEach(btn => btn.addEventListener('click', function(){
    if (this.dataset.route) route(this.dataset.route);
  }));

  function normalizeApiUrl(raw){
    let rawUrl = String(raw || '').trim();
    if (!rawUrl) return '';

    // Users may paste any of Google's current Apps Script web-app URL forms:
    //   https://script.google.com/macros/s/.../exec
    //   https://script.google.com/a/domain.tld/macros/s/.../exec
    //   https://script.google.com/a/macros/domain.tld/s/.../exec
    // Be strict about the host and /exec endpoint, but do not reject valid
    // Google Workspace path variants.
    if (!/^https?:\/\//i.test(rawUrl)) rawUrl = 'https://' + rawUrl;

    try {
      const u = new URL(rawUrl);
      if (u.protocol !== 'https:') return '';
      if (u.hostname.toLowerCase() !== 'script.google.com') return '';

      let path = u.pathname.replace(/\/+$/,'');
      if (!/\/exec$/i.test(path)) return '';
      if (path.indexOf('/s/') === -1) return '';

      // Remove query/hash so the app can append its own bridge parameters safely.
      u.search = '';
      u.hash = '';
      u.pathname = path;
      return u.toString().replace(/\/+$/,'');
    } catch (err) {
      return '';
    }
  }

  function loadConnection(){
    try {
      const raw=localStorage.getItem(CONNECTION_STORAGE_KEY);
      if (!raw) return null;
      const parsed=JSON.parse(raw);
      const url=normalizeApiUrl(parsed && parsed.url);
      const key=String(parsed && parsed.key || '').trim();
      if (!url || key.length < 24) return null;
      return {url:url,key:key};
    } catch(e){ return null; }
  }

  function saveConnection(url,key){
    localStorage.setItem(CONNECTION_STORAGE_KEY, JSON.stringify({url:url,key:key,savedAt:Date.now()}));
  }

  function forgetConnection(){
    try { localStorage.removeItem(CONNECTION_STORAGE_KEY); } catch(e){}
    try { bridge.src='about:blank'; } catch(e) {}
    bridgeReady=false; serverConnected=false;
    setSync('', 'SETUP');
    syncBanner.classList.remove('hidden');
    document.getElementById('syncBannerTitle').textContent='V7 API not paired';
    document.getElementById('syncBannerText').textContent='Tap SETUP and enter the dedicated V7 API deployment URL + connection key.';
  }

  function openConnectionSheet(){
    const saved=loadConnection();
    apiUrlInput.value=saved ? saved.url : '';
    apiKeyInput.value=saved ? saved.key : '';
    apiKeyInput.type='password';
    toggleKeyBtn.textContent='SHOW';
    connectionSheet.classList.add('open');
    connectionSheet.setAttribute('aria-hidden','false');
  }

  function closeConnectionSheet(){
    connectionSheet.classList.remove('open');
    connectionSheet.setAttribute('aria-hidden','true');
  }

  function saveCache(){
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify({
        savedAt: Date.now(),
        assets: ASSETS
      }));
    } catch(e) {}
  }

  function loadCache(){
    try {
      const raw = localStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      const data = JSON.parse(raw);
      if (!data || !Array.isArray(data.assets)) return null;
      return data;
    } catch(e) { return null; }
  }

  function rebuildMap(){
    assetMap = Object.create(null);
    ASSETS.forEach(a => {
      if (a && a.ASSET_ID) assetMap[normalize(a.ASSET_ID)] = a;
    });
  }

  function statusClass(status){
    const s = normalize(status);
    if (s === 'ACTIVE' || s === 'IN USE' || s === 'AVAILABLE') return 'active';
    if (s.indexOf('REPAIR') !== -1 || s.indexOf('MAINTENANCE') !== -1) return 'repair';
    if (s === 'INACTIVE' || s === 'RETIRED' || s === 'LOST') return 'inactive';
    return '';
  }

  function imageCandidates(asset, size){
    const id = String(asset && asset.PHOTO_FILE_ID || '').trim();
    if (!id) return [];
    const encoded = encodeURIComponent(id);
    size = size || 420;
    return [
      'https://lh3.googleusercontent.com/d/' + encoded + '=w' + size,
      'https://drive.google.com/thumbnail?id=' + encoded + '&sz=w' + size,
      'https://drive.google.com/uc?export=view&id=' + encoded
    ];
  }

  function photoMarkup(asset, size){
    const urls = imageCandidates(asset, size || 420);
    const type = String(asset.DEVICE_TYPE || 'IT').slice(0,10);
    if (!urls.length) return '<div class="asset-photo"><span class="photo-fallback">' + esc(type) + '</span></div>';
    return '<div class="asset-photo">' +
      '<img src="' + esc(urls[0]) + '" data-f1="' + esc(urls[1] || '') + '" data-f2="' + esc(urls[2] || '') + '" alt="' + esc(asset.ASSET_TAG || 'Asset') + '">' +
      '<span class="photo-fallback" style="display:none">' + esc(type) + '</span></div>';
  }

  function attachImageFallbacks(root){
    (root || document).querySelectorAll('img[data-f1]').forEach(img => {
      if (img.dataset.bound === '1') return;
      img.dataset.bound = '1';
      img.addEventListener('error', function(){
        const stage = Number(this.dataset.stage || '0');
        if (stage === 0 && this.dataset.f1) {
          this.dataset.stage = '1'; this.src = this.dataset.f1; return;
        }
        if (stage <= 1 && this.dataset.f2) {
          this.dataset.stage = '2'; this.src = this.dataset.f2; return;
        }
        this.style.display='none';
        const fb=this.parentElement && this.parentElement.querySelector('.photo-fallback');
        if (fb) fb.style.display='';
      });
    });
  }

  function cardHtml(asset){
    return '<button class="asset-card" type="button" data-asset-id="' + esc(asset.ASSET_ID) + '">' +
      photoMarkup(asset, 420) +
      '<div class="asset-main">' +
        '<div class="asset-kicker">' + esc(value(asset.DEVICE_TYPE)) + '</div>' +
        '<div class="asset-tag">' + esc(value(asset.ASSET_TAG)) + '</div>' +
        '<div class="asset-device">' + esc([asset.BRAND,asset.MODEL].filter(Boolean).join(' ') || '—') + '</div>' +
        '<div class="asset-assigned">ASSIGNED TO<b>' + esc(asset.ASSIGNED_TO || 'Unassigned') + '</b></div>' +
      '</div>' +
      '<div class="asset-side"><span class="status-pill ' + statusClass(asset.STATUS) + '">' + esc(value(asset.STATUS)) + '</span><span class="chev">›</span></div>' +
    '</button>';
  }

  function bindCards(root){
    (root || document).querySelectorAll('[data-asset-id]').forEach(el => {
      el.addEventListener('click', function(){ openDetail(this.dataset.assetId); });
    });
    attachImageFallbacks(root);
  }

  function renderStats(){
    const total = ASSETS.length;
    const active = ASSETS.filter(a => ['ACTIVE','IN USE','AVAILABLE'].includes(normalize(a.STATUS))).length;
    const attention = ASSETS.filter(a => {
      const s = normalize(a.STATUS);
      return s.includes('REPAIR') || s.includes('MAINTENANCE');
    }).length;
    const unassigned = ASSETS.filter(a => !String(a.ASSIGNED_TO || '').trim()).length;
    document.getElementById('heroCount').textContent = total || '0';
    document.getElementById('statTotal').textContent = total;
    document.getElementById('statActive').textContent = active;
    document.getElementById('statAttention').textContent = attention;
    document.getElementById('statUnassigned').textContent = unassigned;
  }

  function renderCategories(){
    const counts = Object.create(null);
    ASSETS.forEach(a => {
      const t = String(a.DEVICE_TYPE || 'Other').trim() || 'Other';
      counts[t] = (counts[t] || 0) + 1;
    });
    const cats = Object.keys(counts).sort((a,b) => counts[b]-counts[a] || a.localeCompare(b));
    categoryRail.innerHTML = '<button class="category-chip ' + (currentCategory==='__ALL__' && !currentSpecialFilter ? 'active' : '') + '" data-category="__ALL__">ALL</button>' +
      cats.map(c => '<button class="category-chip ' + (currentCategory===c && !currentSpecialFilter ? 'active' : '') + '" data-category="' + esc(c) + '">' + esc(c.toUpperCase()) + ' · ' + counts[c] + '</button>').join('');
    categoryRail.querySelectorAll('[data-category]').forEach(btn => btn.addEventListener('click', function(){
      currentSpecialFilter=''; currentCategory=this.dataset.category; renderHomeList(); renderCategories();
    }));
  }

  function homeFilteredAssets(){
    let items = ASSETS.slice();
    if (currentSpecialFilter === '__UNASSIGNED__') {
      items = items.filter(a => !String(a.ASSIGNED_TO || '').trim());
    } else if (currentSpecialFilter === 'Active') {
      items = items.filter(a => ['ACTIVE','IN USE','AVAILABLE'].includes(normalize(a.STATUS)));
    } else if (currentSpecialFilter === 'Repair') {
      items = items.filter(a => {
        const s=normalize(a.STATUS); return s.includes('REPAIR') || s.includes('MAINTENANCE');
      });
    } else if (currentCategory !== '__ALL__') {
      items = items.filter(a => String(a.DEVICE_TYPE || 'Other') === currentCategory);
    }
    return items;
  }

  function renderHomeList(){
    const items = homeFilteredAssets();
    let title='All Devices', subtitle='INVENTORY';
    if (currentSpecialFilter === '__UNASSIGNED__') { title='Unassigned'; subtitle='NEEDS OWNER'; }
    else if (currentSpecialFilter === 'Active') { title='Active Devices'; subtitle='STATUS FILTER'; }
    else if (currentSpecialFilter === 'Repair') { title='Needs Attention'; subtitle='REPAIR / MAINTENANCE'; }
    else if (currentCategory !== '__ALL__') { title=currentCategory; subtitle='CATEGORY'; }
    document.getElementById('inventoryTitle').textContent=title;
    document.getElementById('inventorySubtitle').textContent=subtitle;
    document.getElementById('visibleCount').textContent=items.length;
    assetList.classList.remove('skeleton-list');
    assetList.innerHTML = items.length ? items.map(cardHtml).join('') :
      '<div class="empty-state"><div class="empty-icon">⌁</div><h3>No devices here</h3><p>Choose another category or reset the filter.</p></div>';
    bindCards(assetList);
  }

  function renderSearch(){
    const q = normalize(searchInput.value);
    const items = !q ? ASSETS.slice(0,30) : ASSETS.filter(a => normalize([
      a.ASSET_ID,a.ASSET_TAG,a.DEVICE_TYPE,a.BRAND,a.MODEL,a.SERIAL,a.LIBIB,a.SERVICE_TAG,a.DEPARTMENT,a.ASSIGNED_TO,a.STATUS
    ].join(' ')).includes(q));
    searchResultCount.textContent = items.length + (items.length===1 ? ' result' : ' results');
    searchResults.innerHTML = items.map(cardHtml).join('');
    searchEmpty.classList.toggle('hidden', items.length !== 0);
    bindCards(searchResults);
  }

  function applyAssets(assets, fromServer){
    ASSETS = Array.isArray(assets) ? assets : [];
    rebuildMap();
    renderStats();
    renderCategories();
    renderHomeList();
    renderSearch();
    if (fromServer) {
      saveCache();
      lastSyncAt=Date.now();
      syncBanner.classList.add('hidden');
      setSync('connected','LIVE');
      serverConnected=true;
    }
  }

  document.querySelectorAll('[data-stat-filter]').forEach(btn => btn.addEventListener('click', function(){
    const f=this.dataset.statFilter;
    currentCategory='__ALL__';
    currentSpecialFilter = f==='__ALL__' ? '' : f;
    renderCategories(); renderHomeList();
  }));

  document.getElementById('clearFilterBtn').addEventListener('click', function(){
    currentCategory='__ALL__'; currentSpecialFilter=''; renderCategories(); renderHomeList();
  });

  searchInput.addEventListener('input', renderSearch);
  document.getElementById('clearSearchBtn').addEventListener('click', function(){
    searchInput.value=''; renderSearch(); searchInput.focus();
  });

  function safeDetailMerge(lite, detail){
    return Object.assign({}, lite || {}, detail || {});
  }

  function setDetail(asset){
    asset = asset || {};
    document.getElementById('detailTopTag').textContent=value(asset.ASSET_TAG);
    document.getElementById('detailType').textContent=value(asset.DEVICE_TYPE).toUpperCase();
    document.getElementById('detailTag').textContent=value(asset.ASSET_TAG);
    document.getElementById('detailDevice').textContent=[asset.BRAND,asset.MODEL].filter(Boolean).join(' ') || '—';
    document.getElementById('detailStatus').textContent=value(asset.STATUS);
    document.getElementById('detailAssigned').textContent=asset.ASSIGNED_TO || 'Unassigned';
    document.getElementById('dAssetId').textContent=value(asset.ASSET_ID);
    document.getElementById('dSerial').textContent=value(asset.SERIAL);
    document.getElementById('dService').textContent=value(asset.SERVICE_TAG);
    document.getElementById('dLibib').textContent=value(asset.LIBIB);
    document.getElementById('dDepartment').textContent=value(asset.DEPARTMENT);
    document.getElementById('dColor').textContent=value(asset.COLOR);
    document.getElementById('dPurchase').textContent=value(asset.PURCHASE_DATE);
    document.getElementById('dWarranty').textContent=value(asset.WARRANTY);
    document.getElementById('dCost').textContent=value(asset.COST);
    document.getElementById('dUpdated').textContent=value(asset.UPDATED);

    const img=document.getElementById('detailPhoto');
    const fb=document.getElementById('detailPhotoFallback');
    const urls=imageCandidates(asset,1000);
    img.hidden=true; fb.style.display='grid'; fb.textContent=String(asset.DEVICE_TYPE || 'IT').slice(0,10).toUpperCase();
    if (urls.length) {
      let idx=0;
      img.onload=function(){img.hidden=false;fb.style.display='none';};
      img.onerror=function(){
        idx++;
        if (idx<urls.length) img.src=urls[idx];
        else {img.hidden=true;fb.style.display='grid';}
      };
      img.src=urls[0];
    }
  }

  function openDetail(id){
    currentDetailId=String(id || '');
    const lite=assetMap[normalize(currentDetailId)] || {};
    setDetail(lite);
    route('detail', false);
    try { history.replaceState({screen:'detail',id:currentDetailId},'', '#detail/' + encodeURIComponent(currentDetailId)); } catch(e) {}
    if (bridgeReady) requestAsset(currentDetailId);
  }

  document.getElementById('detailBack').addEventListener('click', function(){
    route('home');
  });

  function nextRequestId(prefix){
    requestSeq += 1;
    return prefix + '-' + requestSeq + '-' + Date.now().toString(36);
  }

  // STEP 2.3: direct JSONP API.
  // Apps Script ContentService is loaded as a <script>, so there is no CORS,
  // iframe sandbox, postMessage, or third-party Google sign-in dependency.
  function jsonpRequest(action, extra, timeoutMs){
    const saved=loadConnection();
    if (!saved) return Promise.reject(new Error('V7 API is not paired.'));

    extra=extra || {};
    timeoutMs=Math.max(3000, Number(timeoutMs) || 12000);

    return new Promise(function(resolve,reject){
      const rid=nextRequestId('jsonp').replace(/[^A-Za-z0-9_$]/g,'_');
      const cb='RISPv7_' + rid;
      const script=document.createElement('script');
      let finished=false;

      function cleanup(){
        if (finished) return;
        finished=true;
        clearTimeout(timer);
        try { delete window[cb]; } catch(e) { window[cb]=undefined; }
        try { script.remove(); } catch(e) {}
      }

      window[cb]=function(payload){
        cleanup();
        if (!payload || payload.success === false) {
          reject(new Error(payload && payload.error ? payload.error : 'V7 API returned an invalid response.'));
          return;
        }
        resolve(payload);
      };

      const params=new URLSearchParams();
      params.set('v7api', String(action || 'bootstrap'));
      params.set('key', saved.key);
      params.set('callback', cb);
      params.set('t', String(Date.now()));
      Object.keys(extra).forEach(function(k){
        if (extra[k] != null && String(extra[k]) !== '') params.set(k,String(extra[k]));
      });

      script.async=true;
      script.src=saved.url + '?' + params.toString();
      script.onerror=function(){
        cleanup();
        reject(new Error('Could not reach the V7 API deployment.'));
      };

      const timer=setTimeout(function(){
        cleanup();
        reject(new Error('V7 API timed out.'));
      },timeoutMs);

      document.head.appendChild(script);
    });
  }

  function showApiError(err){
    bridgeReady=false;
    serverConnected=false;
    setSync('error','RETRY');
    syncBanner.classList.remove('hidden');
    document.getElementById('syncBannerTitle').textContent='V7 API connection failed';
    document.getElementById('syncBannerText').textContent=(err && err.message) ? err.message : String(err || 'Unknown API error');
  }

  function requestBootstrap(){
    if (!loadConnection()) { openConnectionSheet(); return; }
    setSync('syncing','SYNC');
    jsonpRequest('bootstrap',{},15000)
      .then(function(payload){
        bridgeReady=true;
        if (Array.isArray(payload.assets)) {
          applyAssets(payload.assets,true);
          showToast('Inventory synced');
        } else {
          throw new Error('Inventory payload is missing assets.');
        }
      })
      .catch(showApiError);
  }

  function requestAsset(id){
    if (!id || !loadConnection()) return;
    jsonpRequest('asset',{id:String(id)},12000)
      .then(function(payload){
        const detail=payload && payload.asset;
        if (!detail || !detail.ASSET_ID) return;
        const key=normalize(detail.ASSET_ID);
        const merged=safeDetailMerge(assetMap[key],detail);
        assetMap[key]=merged;
        for (let i=0;i<ASSETS.length;i++) {
          if (normalize(ASSETS[i].ASSET_ID)===key) { ASSETS[i]=merged; break; }
        }
        if (normalize(currentDetailId)===key) setDetail(merged);
      })
      .catch(function(err){ showToast((err && err.message) || 'Could not load device detail'); });
  }

  function connectBridge(){
    const saved=loadConnection();
    if (!saved) {
      bridgeReady=false; serverConnected=false;
      setSync('', 'SETUP');
      syncBanner.classList.remove('hidden');
      document.getElementById('syncBannerTitle').textContent='V7 API not paired';
      document.getElementById('syncBannerText').textContent='Tap SETUP and enter the dedicated V7 API deployment URL + connection key.';
      return;
    }
    bridgeReady=true;
    serverConnected=false;
    setSync('syncing','CONNECT');
    requestBootstrap();
  }

  syncButton.addEventListener('click', function(){
    if (loadConnection()) requestBootstrap();
    else openConnectionSheet();
  });

  openBackendBtn.addEventListener('click', openConnectionSheet);

  closeConnectionBtn.addEventListener('click', closeConnectionSheet);
  connectionSheet.addEventListener('click', function(e){
    if (e.target === connectionSheet) closeConnectionSheet();
  });
  toggleKeyBtn.addEventListener('click', function(){
    const show=apiKeyInput.type === 'password';
    apiKeyInput.type=show ? 'text' : 'password';
    toggleKeyBtn.textContent=show ? 'HIDE' : 'SHOW';
  });
  saveConnectionBtn.addEventListener('click', function(){
    const url=normalizeApiUrl(apiUrlInput.value);
    const key=String(apiKeyInput.value || '').trim();
    if (!url) { showToast('Paste a valid Apps Script /exec URL'); return; }
    if (key.length < 24) { showToast('Connection key looks too short'); return; }
    try {
      saveConnection(url,key);
      const verify=loadConnection();
      if (!verify) { showToast('Saved, but URL could not be validated'); return; }
    } catch(e) { showToast('Could not save connection'); return; }
    closeConnectionSheet();
    showToast('API paired — connecting…');
    connectBridge();
  });
  disconnectBtn.addEventListener('click', function(){
    forgetConnection();
    closeConnectionSheet();
    showToast('Connection forgotten');
  });

  const cache=loadCache();
  if (cache && cache.assets && cache.assets.length) {
    applyAssets(cache.assets,false);
    setSync('', 'CACHE');
  } else {
    document.getElementById('visibleCount').textContent='—';
  }

  setTimeout(() => splash.classList.add('hidden'), standalone() ? 480 : 650);

  if (loadConnection()) {
    connectBridge();
  } else {
    setSync('', 'SETUP');
    syncBanner.classList.remove('hidden');
    document.getElementById('syncBannerTitle').textContent='V7 API not paired';
    document.getElementById('syncBannerText').textContent='Tap SETUP and enter the dedicated V7 API deployment URL + connection key.';
  }

  setTimeout(function(){
    if (!serverConnected && loadConnection()) {
      syncBanner.classList.remove('hidden');
      document.getElementById('syncBannerTitle').textContent = cache && cache.assets && cache.assets.length ? 'Using saved inventory' : 'Bridge did not connect';
      document.getElementById('syncBannerText').textContent = cache && cache.assets && cache.assets.length
        ? 'Saved data is visible. Tap the top-right chip to retry the V7 API.'
        : 'Check the V7 API URL, connection key, and that the API deployment access is set to Anyone.';
      if (!cache || !cache.assets || !cache.assets.length) setSync('error','RETRY');
    }
  },16000);

  if ('serviceWorker' in navigator) {
    window.addEventListener('load',() => navigator.serviceWorker.register('./sw.js').catch(() => {}));
  }

  const initial=(location.hash || '#home').slice(1);
  if (initial.startsWith('detail/')) {
    const id=decodeURIComponent(initial.slice(7));
    setTimeout(() => openDetail(id),100);
  } else {
    route(['home','search','scan','add','labels'].includes(initial) ? initial : 'home',false);
  }
})();
