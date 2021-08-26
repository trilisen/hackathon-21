import React from "react";
import Missionen from "../Images/logo-1.jpg";
import Yrgo from "../Images/yrgo.jpg";

const infoDivStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  position: "absolute",
  right: 0,
  background: "white",
  height: "100vh",
  width: "30vw",
};

const linkDivStyles = {
  paddingTop: "60px",
  margin: "40px",
  display: "flex",
  flexDirection: "column",
};

const pStyles = {
  color: "white",
  marginBottom: 0,
};

const bottomStyles = {
  width: "100%",
  background: "#019294",
  textAlign: "center",
  fontFamily: "Lota Grotesque Regular",
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

const linkStyles = {
  color: "black",
  marginBottom: "10px",
  fontFamily: "Lota Grotesque Regular",
};

const Info = () => {
  return (
    <div style={infoDivStyles}>
      <div style={linkDivStyles}>
        <h2 style={linkStyles}>Svåraste steget</h2>
        <a href="/about" style={linkStyles}>
          Om projektet
        </a>
        <a href="/people" style={linkStyles}>
          Om oss
        </a>
      </div>
      <div style={bottomStyles}>
        <p style={pStyles}>Ett sammarbete mellan:</p>
        <div style={logosDivStyles}>
          <a href="https://raddningsmissionen.se/">
            <img src={Missionen} alt="Räddningsmissionen" style={logoStyles} />
          </a>
          <a href="https://www.yrgo.se/">
            <img src={Yrgo} alt="Yrgo" style={logoStyles} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Info;
