import { useEffect, useState } from "react";

interface Size {
  width?: number;
  height?: number;
}

interface Args {
  width?: number;
  height?: number;
}

function useWindowSize(args?: Args) {
  const [windowSize, setWindowSize] = useState<Size>({
    width: args?.width,
    height: args?.height,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect runs only on mount and unmount

  return windowSize;
}

export default useWindowSize;
