import react, { useLayoutEffect, useState } from "react";
import Header from "./header";
import SmallHeader from "./headerSmall";

const HeaderFinal = () => {
  const [width, setwidth] = useState(window.innerWidth);
  useLayoutEffect(() => {
    const resizeFunc = () => {
      setwidth(window.innerWidth);
      console.log("called");
    };
    window.addEventListener("resize", resizeFunc);
    return () => {
      window.removeEventListener("resize", resizeFunc);
    };
  }, []);
  return width > 550 ? <Header /> : <SmallHeader />;
};
export default HeaderFinal;
