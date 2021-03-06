import React from "react";
import Blob1 from "../Images/blob1.svg";
import Blob2 from "../Images/blob2.svg";
import Replay from "../Images/replay.svg";

const infoDivStyles = {
  zIndex: "1",
  position: "absolute",
  right: 0,
  background: "rgba(255, 255, 255, 0.8)",
  height: "100vh",
  width: "70vw",
};

const replayStyles = {
  position: "absolute",
  top: "20px",
  left: "20px",
  display: "flex",
  alignItems: "center",
  border: "none",
  borderRadius: "5px",
};

const containerStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  height: "100%",
};

const blobStyles = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
};

const blob2Styles = {
  zIndex: -1,
  width: "fit-content",
  display: "flex",
  alignItems: "flex-end",
};

const blob2ImgStyles = {
  position: "relative",
  left: "-30px",
};

const textStyles = {
  width: "60%",
};

const button1Styles = {
  background: "rgba(212, 237, 237, 1)",
  boxShadow: "-6px 7px 4px rgba(0, 0, 0, 0.25)",
  border: "none",
  borderRadius: "10px",
  width: "281px",
  height: "80px",
  color: "#019294",
  fontFamily: "Lota Grotesque SemiBold",
  fontSize: "1.5rem",
  marginRight: "2rem",
  appearance: "button",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textDecoration: "none",
};

const button2Styles = {
  background: "#019294",
  boxShadow: "-6px 7px 4px rgba(0, 0, 0, 0.25)",
  border: "none",
  borderRadius: "10px",
  width: "281px",
  height: "80px",
  color: "white",
  fontFamily: "Lota Grotesque SemiBold",
  fontSize: "1.5rem",
  appearance: "button",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textDecoration: "none",
};

const Endscreen = () => {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div style={infoDivStyles}>
      <button onClick={handleClick} style={replayStyles} className="replayBtn">
        <img src={Replay} alt="Spela igen" />
        <h2 style={{ color: "#019294", fontSize: "1rem" }}>SPELA IGEN</h2>
      </button>
      <div style={containerStyles}>
        <div style={blobStyles}>
          <img src={Blob1} alt="Vill du g??ra skillnad p?? riktigt?" />
          <div style={blob2Styles}>
            <img
              src={Blob2}
              alt="Tillsammans f??r en varmare stad"
              style={blob2ImgStyles}
            />
          </div>
        </div>
        <div style={textStyles}>
          R??ddningsmissionen ??r en ideel f??rening driven av volont??rer,
          eldsj??lar och g??vor fr??n allm??nheten. Din g??va g??r det m??jligt f??r oss
          att hj??lpa fler utsatta och ensamma personer med allt fr??n en fika
          till tak ??ver huvudet.
        </div>
        <div style={{ display: "flex" }}>
          <a style={button1Styles} className="endBtn" href="/about">
            L??S MER
          </a>
          <a
            style={button2Styles}
            className="endBtn"
            href="https://raddningsmissionen.se"
          >
            GE EN G??VA
          </a>
        </div>
      </div>
    </div>
  );
};

export default Endscreen;
