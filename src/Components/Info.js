import React from "react";
import Footer from "./Footer";

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
          Kreatörer
        </a>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Info;
