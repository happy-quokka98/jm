const loadedScripts = new Set();

const loadScript = (src) => {
  if (loadedScripts.has(src)) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      loadedScripts.add(src);
      return resolve();
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => {
      loadedScripts.add(src);
      resolve();
    };
    script.onerror = reject;
    document.body.appendChild(script);
  });
};

export const loadExternalScripts = () => {
  // Run on idle or next tick so it never blocks initial render
  const run = async () => {
    try {
      await loadScript("/vendor/jquery/jquery.min.js");
      await loadScript("/js/owl-carousel.js");
      await loadScript("/js/custom.js");
    } catch (error) {
      console.warn("Non-critical script failed to load:", error);
    }
  };

  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(() => run(), { timeout: 1500 });
  } else {
    setTimeout(run, 100);
  }
};
  