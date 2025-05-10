const toggle = document.getElementById('toggleNews');

browser.storage.local.get('hideNews').then((data) => {
  toggle.checked = data.hideNews ?? true;
});

toggle.addEventListener('change', () => {
  browser.storage.local.set({ hideNews: toggle.checked });
});
