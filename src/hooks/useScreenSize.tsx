import { useEffect, useState } from "react";

let useScreenSize = (): any => {};

if (!process.env.STAGING) {
  useScreenSize = () => {
    const [width, setWidth] = useState(window?.innerWidth);
    const handleWindowSizeChange = () => {
      setWidth(window?.innerWidth);
    };

    useEffect(() => {
      window.addEventListener("resize", handleWindowSizeChange);
      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    }, []);
    return width <= 768;
  };
} else {
  useScreenSize = () => {
    return false;
  };
}

export default useScreenSize;
