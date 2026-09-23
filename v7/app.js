
(function(){
  'use strict';

  const screens = Array.from(document.querySelectorAll('[data-screen]'));
  const tabs = Array.from(document.querySelectorAll('.tab[data-route]'));
  const routeButtons = Array.from(document.querySelectorAll('[data-route]'));
  const viewport = document.getElementById('viewport');
  const splash = document.getElementById('splash');
  const installSheet = document.getElementById('installSheet');
  const installHelpButton = document.getElementById('installHelpButton');
  const installButton = document.getElementById('installButton');
  const closeSheet = document.getElementById('closeSheet');
  const modeLabel = document.getElementById('modeLabel');
  const installPanel = document.getElementById('installPanel');

  function standalone(){
    return window.matchMedia('(display-mode: standalone)').matches ||
      window.navigator.standalone === true;
  }

  function setModeLabel(){
    if (standalone()) {
      modeLabel.textContent = 'STANDALONE • NO BROWSER BAR';
      if (installPanel) installPanel.style.display = 'none';
    } else {
      modeLabel.textContent = 'PWA SHELL • STEP 1';
    }
  }

  function route(name, push){
    const target = document.querySelector('[data-screen="' + name + '"]');
    if (!target) return;

    screens.forEach(el => el.classList.toggle('active', el === target));
    tabs.forEach(el => el.classList.toggle('active', el.dataset.route === name));

    target.scrollTop = 0;

    if (push !== false) {
      try { history.replaceState({screen:name}, '', '#' + name); } catch(e){}
    }
  }

  routeButtons.forEach(btn => {
    btn.addEventListener('click', function(){
      const name = this.dataset.route;
      if (name) route(name);
    });
  });

  function openInstall(){
    installSheet.classList.add('open');
    installSheet.setAttribute('aria-hidden','false');
  }

  function closeInstall(){
    installSheet.classList.remove('open');
    installSheet.setAttribute('aria-hidden','true');
  }

  if (installHelpButton) installHelpButton.addEventListener('click', openInstall);
  if (installButton) installButton.addEventListener('click', openInstall);
  if (closeSheet) closeSheet.addEventListener('click', closeInstall);
  installSheet.addEventListener('click', e => {
    if (e.target === installSheet) closeInstall();
  });

  // Keep navigation predictable inside the app shell.
  window.addEventListener('hashchange', () => {
    const routeName = (location.hash || '#home').slice(1);
    route(routeName, false);
  });

  // Service worker: cache the shell so the app can launch instantly after first visit.
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    });
  }

  setModeLabel();
  route((location.hash || '#home').slice(1), false);

  // Splash is deliberately brief: app shell appears immediately, no backend wait.
  window.setTimeout(() => {
    splash.classList.add('hidden');
  }, standalone() ? 520 : 720);
})();
