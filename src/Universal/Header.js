import React, { useState, useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import WAVE from "vanta/dist/vanta.waves.min";
import CLOUD from "vanta/dist/vanta.clouds.min";

function Header({ Title, background = "net" }) {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      if (background === "net") {
        setVantaEffect(
          NET({
            el: myRef.current,
          })
        );
      } else if (background === "wave") {
        setVantaEffect(
          WAVE({
            el: myRef.current,
          })
        );
      } else if (background === "clouds") {
        setVantaEffect(
          CLOUD({
            el: myRef.current,
          })
        );
      }
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="header">
      <div className="header_3d" ref={myRef}>
        
        <h1 className="header_Title">{Title}</h1>
      </div>
    </div>
  );
}

export default Header;
