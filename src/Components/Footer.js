import React from "react";
import Missionen from "../Images/logo-1.jpg";
import Yrgo from "../Images/yrgo.jpg";

const bottomStyles = {
  width: "100%",
  background: "#019294",
  textAlign: "center",
  fontFamily: "Lota Grotesque Regular",
};

const pStyles = {
  color: "white",
  marginBottom: 0,
};

const logosDivStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

//Fix responsiveness
const logoStyles = {
  margin: "10px",
  height: "80px",
};

const Footer = () => {
  return (
    <div style={bottomStyles}>
      <p style={pStyles}>Ett sammarbete mellan:</p>
      <div style={logosDivStyles}>
        <a
          href="https://raddningsmissionen.se/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Missionen} alt="Räddningsmissionen" style={logoStyles} />
        </a>
        <a href="https://www.yrgo.se/" target="_blank" rel="noreferrer">
          <img src={Yrgo} alt="Yrgo" style={logoStyles} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
