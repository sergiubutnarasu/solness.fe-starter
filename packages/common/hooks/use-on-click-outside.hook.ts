import { RefObject, useEffect } from 'react';

const useOnClickOutside = (
  ref: RefObject<HTMLDivElement>,
  handler: () => void,
  closest?: string,
) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      if (event.target.closest(closest)) {
        return;
      }

      handler();
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, closest]);
};

export default useOnClickOutside;
