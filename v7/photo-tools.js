/* RISP IT ASSET V7.6.7 photo pipeline — FAST WHITE BG by default, optional AI on demand. */
(function (root) {
  'use strict';
  let aiModulePromise = null;
  let aiQueue = Promise.resolve();
  const fastCache = new WeakMap();
  const aiCache = new WeakMap();

  function read(blob) {
    return new Promise((resolve, reject) => {
      const r = new FileReader();
      r.onload = () => resolve(r.result);
      r.onerror = () => reject(new Error('Cannot read this image.'));
      r.readAsDataURL(blob);
    });
  }
  function blobOf(canvas, mime, quality) {
    mime = mime || 'image/jpeg';
    quality = quality == null ? 0.86 : quality;
    return new Promise((resolve, reject) => {
      canvas.toBlob(b => b ? resolve(b) : reject(new Error('Cannot prepare image.')), mime, quality);
    });
  }
  async function openCanvas(blob, maxSize) {
    const url = URL.createObjectURL(blob), img = new Image();
    try {
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = () => reject(new Error('Cannot open this image. Try a JPG or PNG.'));
        img.src = url;
      });
      const scale = Math.min(1, maxSize / Math.max(img.naturalWidth, img.naturalHeight));
      const c = document.createElement('canvas');
      c.width = Math.max(1, Math.round(img.naturalWidth * scale));
      c.height = Math.max(1, Math.round(img.naturalHeight * scale));
      c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
      return c;
    } finally { URL.revokeObjectURL(url); }
  }
  async function whiteBackground(blob) {
    const source = await openCanvas(blob, 920);
    const out = document.createElement('canvas'); out.width = 920; out.height = 920;
    const ctx = out.getContext('2d'); ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, 920, 920);
    const scale = Math.min(Math.round(920 * 0.87) / source.width, Math.round(920 * 0.87) / source.height);
    const w = Math.max(1, Math.round(source.width * scale)), h = Math.max(1, Math.round(source.height * scale));
    ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(source, Math.round((920 - w) / 2), Math.round((920 - h) / 2), w, h);
    return blobOf(out, 'image/jpeg', 0.84);
  }
  async function frameCutout(blob) {
    const c = await openCanvas(blob, 1200), ctx = c.getContext('2d'), d = ctx.getImageData(0, 0, c.width, c.height).data;
    let x0 = c.width, y0 = c.height, x1 = -1, y1 = -1;
    for (let y = 0; y < c.height; y++) for (let x = 0; x < c.width; x++) if (d[(y * c.width + x) * 4 + 3] > 30) {
      x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y);
    }
    if (x1 < x0 || y1 < y0) throw new Error('No device was detected. Try another photo.');
    const out = document.createElement('canvas'); out.width = 920; out.height = 920; const draw = out.getContext('2d');
    draw.fillStyle = '#fff'; draw.fillRect(0, 0, 920, 920);
    const w = x1 - x0 + 1, h = y1 - y0 + 1, scale = Math.min(Math.round(920 * 0.87) / w, Math.round(920 * 0.87) / h);
    draw.imageSmoothingEnabled = true; draw.imageSmoothingQuality = 'high';
    draw.drawImage(c, x0, y0, w, h, (920 - w * scale) / 2, (920 - h * scale) / 2, w * scale, h * scale);
    return blobOf(out, 'image/jpeg', 0.90);
  }
  function aiPanel() {
    const box = document.createElement('div'); box.setAttribute('role', 'dialog'); box.setAttribute('aria-modal', 'true');
    box.style.cssText = 'position:fixed;inset:0;z-index:99999;display:grid;place-items:center;padding:20px;background:rgba(2,9,17,.72);backdrop-filter:blur(10px);font:15px/1.5 system-ui;color:#eff7ff';
    box.innerHTML = '<div style="width:min(440px,100%);padding:26px;border-radius:22px;background:#0c1a2a;border:1px solid #34516f;box-shadow:0 24px 80px #0008"><b style="font-size:20px">Remove background (AI)</b><p aria-live="polite">This can take 5–15 seconds the first time. Keep this window open.</p></div>';
    document.body.appendChild(box); return { box, status: box.querySelector('p') };
  }
  async function aiProcess(file) {
    validate(file); const ui = aiPanel();
    try {
      ui.status.textContent = 'Loading AI remover… First use may take longer.';
      if (!aiModulePromise) aiModulePromise = import('https://esm.sh/@imgly/background-removal@1.7.0?deps=onnxruntime-web@1.21.0-dev.20250206-d981b153d3').catch(e => { aiModulePromise = null; throw e; });
      const mod = await aiModulePromise, remove = mod.removeBackground || mod.default, source = await blobOf(await openCanvas(file, 1400), 'image/png', 1);
      const cut = await remove(source, { model: 'isnet_quint8', device: 'cpu', output: { format: 'image/png', quality: 1 }, progress: (key, current, total) => {
        if (ui.box.isConnected) ui.status.textContent = key.indexOf('fetch') === 0 ? 'Loading AI model… ' + Math.round(total ? current / total * 100 : 0) + '%' : 'Removing background…';
      }});
      ui.status.textContent = 'Finishing photo…'; const result = await frameCutout(cut);
      return { dataUrl: await read(result), fileName: String(file.name || 'device').replace(/\.[^.]+$/, '') + '.jpg', mimeType: 'image/jpeg', blob: result, backgroundRemoved: true, whiteBackground: true };
    } finally { ui.box.remove(); }
  }
  function validate(file) {
    if (!file || !/^image\//.test(file.type)) throw new Error('Select an image file.');
    if (file.size > 30 * 1024 * 1024) throw new Error('Please choose a photo below 30 MB.');
  }
  async function fastProcess(file) {
    validate(file); const result = await whiteBackground(file);
    return { dataUrl: await read(result), fileName: String(file.name || 'device').replace(/\.[^.]+$/, '') + '.jpg', mimeType: 'image/jpeg', blob: result, backgroundRemoved: false, whiteBackground: true };
  }
  root.RISPPhoto = {
    prepare(file) { validate(file); if (fastCache.has(file)) return fastCache.get(file); const p = fastProcess(file); fastCache.set(file, p); p.catch(() => fastCache.delete(file)); return p; },
    prepareAI(file) { validate(file); if (aiCache.has(file)) return aiCache.get(file); const p = aiQueue.catch(() => {}).then(() => aiProcess(file)); aiQueue = p; aiCache.set(file, p); p.catch(() => aiCache.delete(file)); return p; }
  };
})(window);
