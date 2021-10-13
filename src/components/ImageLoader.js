import { useState, useEffect } from "react";

function ImageLoader(src) {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [hasStartedInitialFetch, setHasStartedInitialFetch] = useState(false);

  useEffect(() => {
      setHasStartedInitialFetch(true);
      setHasLoaded(false);

      const image = new Image();
      image.src = src;

      const handleLoad = () => {
          setHasLoaded(true);
      };

      image.onload = handleLoad;

      return () => {
        image.removeEventListener("load", handleLoad);
      };
  }, [src]);

  return { hasLoaded, hasStartedInitialFetch };
}

export default ImageLoader;