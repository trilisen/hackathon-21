import React, { useEffect, useState } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import Endscreen from "./End";
import InfoBtn from "../Images/info.svg";
import Xbtn from "../Images/x-button.svg";
import Info from "./Info";
import Logo from "./Logo";
import Sound from "../Images/sound.svg";
import Muted from "../Images/muted.svg";

const unityContext = new UnityContext({
  loaderUrl: "Build/NoCompression.loader.js",
  dataUrl: "Build/NoCompression.data",
  frameworkUrl: "Build/NoCompression.framework.js",
  codeUrl: "Build/NoCompression.wasm",
});

const gameStyles = {
  width: "100vw",
  height: "100vh",
  maxWidth: "100%",
};

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

const soundBtnStyles = {
  zIndex: "1",
  margin: "40px",
  position: "absolute",
  top: "50px",
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

const Game = () => {
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    unityContext.on("GameOver", () => {
      setIsGameOver(true);
    });
  }, []);

  const [infoBarOpen, setInfoBarOpen] = useState(false);

  const [soundOn, setSoundOn] = useState(true);

  const handleInfoToggle = () => {
    setInfoBarOpen((prev) => !prev);
  };

  const handleSoundToggle = () => {
    setSoundOn((prev) => !prev);
    unityContext.send("MusicPlayer", "ToggleAudio");
  };

  return (
    <main>
      <div style={divStyles}>
        <Logo></Logo>
        <img
          src={infoBarOpen ? Xbtn : InfoBtn}
          alt=""
          style={infoBarOpen ? exitBtnStyles : infoBtnStyles}
          onClick={handleInfoToggle}
          className="infoBtn"
        />
        {!infoBarOpen && (
          <img
            src={soundOn ? Sound : Muted}
            alt=""
            style={soundBtnStyles}
            onClick={handleSoundToggle}
            className="infoBtn"
          ></img>
        )}
        {infoBarOpen && <Info></Info>}
      </div>
      <div style={{ display: "flex" }}>
        {isGameOver === true && <Endscreen></Endscreen>}
        <Unity unityContext={unityContext} style={gameStyles} />
      </div>
    </main>
  );
};

export default Game;
