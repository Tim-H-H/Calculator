import { useEffect, useRef, useState } from "react";
import "./Screen.css";

const Screen = ({ value }) => {
  const screenRef = useRef(null);
  const [fontsize, setFontSize] = useState(50);

  useEffect(() => {
    const adjustFontSize = () => {
      const container = screenRef.current;
      if (!container) return;
  
      let newSize = 50;
      container.style.fontSize = `${newSize}px`;

      while (container.scrollWidth > container.clientWidth && newSize > 10) {
        newSize -= 2;
        container.style.fontSize = `${newSize}px`;
      }

      setFontSize(newSize);
    }

    adjustFontSize();
    window.addEventListener("resize", adjustFontSize);
    return () => window.removeEventListener("resize", adjustFontSize);
  }, [value]);
  
  return (
    <div ref={screenRef} className="screen" style={{ fontsize: `${fontsize}px`}}>
      {value}
    </div>
  );
};

export default Screen;