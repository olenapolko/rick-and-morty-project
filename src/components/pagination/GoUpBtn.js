import React, { useState, useEffect } from "react";
import arrow from '../../resources/img/blue-up.png';

function GoUpButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <img
          className="btn-up"
          src={arrow}
          alt='Arrow Up icon'
          onClick={handleClick}
        ></img>
      )}
    </>
  );
}

export default GoUpButton;


