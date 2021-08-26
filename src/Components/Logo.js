import React from "react";

const Logo = () => {
  const logoStyles = {
    margin: "40px",
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: "28px",
    fontFamily: "CanvasScript-Heavy",
    textDecoration: "none",
    color: "black",
  };

  return (
    <a href="/" style={logoStyles}>
      Svåraste steget
    </a>
  );
};

export default Logo;
