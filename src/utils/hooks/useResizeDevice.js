import {useEffect, useState} from "react";

export const useResizeDevice = (minWidth) => {
  const [device, setDevice] = useState(window.matchMedia(`(min-width: ${minWidth}px)`).matches);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setDevice(window.matchMedia(`(min-width: ${minWidth}px)`).matches);
    });
  }, []);

  return [device];
}