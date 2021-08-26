import React, { useState } from "react";
import InfoBtn from "../Images/info.svg";
import Xbtn from "../Images/x-button.svg";
import Info from "./Info";
import Logo from "./Logo";

const divStyles = {
  position: "relative",
};

const infoBtnStyles = {
  zIndex: "1",
  margin: "40px",
  position: "absolute",
  top: 0,
  right: 0,
  height: "40px",
  width: "40px",
};

const exitBtnStyles = {
  zIndex: "1",
  margin: "45px",
  position: "absolute",
  top: 0,
  right: 0,
  height: "30px",
  width: "30px",
};

const Header = (props) => {
  const [infoBarOpen, setInfoBarOpen] = useState(false);

  const handleToggle = () => {
    setInfoBarOpen((prev) => !prev);
  };

  return (
    <div style={divStyles}>
      <Logo></Logo>
      <img
        src={infoBarOpen ? Xbtn : InfoBtn}
        alt=""
        style={infoBarOpen ? exitBtnStyles : infoBtnStyles}
        onClick={handleToggle}
        className="infoBtn"
      />
      {infoBarOpen && <Info></Info>}
    </div>
  );
};

export default Header;
