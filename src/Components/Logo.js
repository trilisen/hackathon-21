import React from "react";

const Logo = (props) => {
  const logoStyles = {
    margin: "40px",
    position: "absolute",
    top: 0,
    left: 0,
    color: props.color,
    fontSize: "28px",
    fontFamily: "Lota Grotesque SemiBold",
  };

  return <div style={logoStyles}>Svåraste steget</div>;
};

export default Logo;
