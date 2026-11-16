export const useOptimizedEffect = (effect, deps) => {
  useEffect(() => {
    const startTime = performance.now();
    effect();
    const endTime = performance.now();
    console.log(`Effect executed in ${endTime - startTime}ms`);
  }, deps);
};

export const memoizedComponents = (Component, props) => {
  return useMemo(() => <Component {...props} />, [props]);
};

export const optimizeImage = (src, width = 1000) => {
  return `${src}?width=${width}&optimize=true`;
};

export const optimizeScroll = (callback) => {
  let lastScroll = 0;
  return (e) => {
    const now = Date.now();
    if (now - lastScroll > 100) {
      lastScroll = now;
      callback(e);
    }
  };
};
