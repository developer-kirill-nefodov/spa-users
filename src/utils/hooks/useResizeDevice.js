import {useEffect, useState} from "react";

export const useResizeDevice = (minWidth) => {
  const [device, setDevice] = useState(window.matchMedia(`(min-width: ${minWidth}px)`).matches);

  useEffect(() => {
    const resize = () => {
      setDevice(window.matchMedia(`(min-width: ${minWidth}px)`).matches);
    }

    window.addEventListener('resize', resize);

    return () => (
      window.removeEventListener('resize', resize)
    )
  }, [minWidth]);

  return [device];
}