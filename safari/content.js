(function () {
  function rewind() {
    const el = document.querySelector('[data-purpose="rewind-skip-button"]');
    if (el) el.click();
  }

  function forward() {
    const el = document.querySelector('[data-purpose="forward-skip-button"]');
    if (el) el.click();
  }

  function playOrPause() {
    const el = document.querySelector(
      '[data-purpose="pause-button"], [data-purpose="play-button"]'
    );
    if (el) el.click();
  }

  function registerHandlers() {
    navigator.mediaSession.setActionHandler("previoustrack", rewind);
    navigator.mediaSession.setActionHandler("nexttrack", forward);
    navigator.mediaSession.setActionHandler("play", playOrPause);
    navigator.mediaSession.setActionHandler("pause", playOrPause);
  }

  // Register immediately if a video already exists
  if (document.querySelector("video")) {
    registerHandlers();
  }

  // Watch for video elements appearing (SPA navigation / lazy load)
  const observer = new MutationObserver(() => {
    if (document.querySelector("video")) {
      registerHandlers();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
