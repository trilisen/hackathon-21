import * as React from "react";
import Info from "../Images/info.svg";

const divStyles = {
  position: "relative",
};

const logoStyles = {
  margin: "1rem",
  position: "absolute",
  top: 0,
  left: 0,
  color: "white",
  fontSize: "28px",
  fontFamily: "Lota Grotesque SemiBold",
};

const infoBtnStyles = {
  margin: "1rem",
  position: "absolute",
  top: 0,
  right: 0,
  height: "50px",
  width: "50px",
};

const Header = () => {
  return (
    <div style={divStyles}>
      <div style={logoStyles}>Svåraste steget</div>
      <img src={Info} alt="" style={infoBtnStyles} />
    </div>
  );
};

export default Header;
