import { useEffect, useRef } from "react";

export const useOutsideClick = (callback: () => void): any => {
  const ref = useRef();
  useEffect(() => {
    const handleClick = (event: object) => {
      // @ts-ignore
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref]);
  return ref;
};
