import * as React from "react";

const headerStyles = {
  display: "flex",
  justifyContent: "center",
};

const headerDivStyles = {
  background: "#E17D40",
  height: "70px",
  width: "30%",
};

const Header = () => {
  return (
    <header style={headerStyles}>
      <div style={headerDivStyles}></div>
    </header>
  );
};

export default Header;
