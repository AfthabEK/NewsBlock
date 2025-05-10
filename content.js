function hideNewsSection() {
    const sections = document.querySelectorAll("ytd-rich-section-renderer");
    sections.forEach(section => {
      const header = section.querySelector("h2");
      if (header && /news/i.test(header.textContent)) {
        section.style.display = "none";
      }
    });
  }
  
  browser.storage.local.get('hideNews').then((data) => {
    if (data.hideNews ?? true) {
      hideNewsSection();
      const observer = new MutationObserver(hideNewsSection);
      observer.observe(document.body, { childList: true, subtree: true });
    }
  });
  