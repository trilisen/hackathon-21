import * as React from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import Information from "../Images/Vector.svg";

const unityContext = new UnityContext({
  loaderUrl: "Build/Build.loader.js",
  dataUrl: "Build/Build.data",
  frameworkUrl: "Build/Build.framework.js",
  codeUrl: "Build/Build.wasm",
});

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

const gameStyles = {
  width: "100vw",
  height: "100vh",
};

const Game = () => {
  return (
    <div style={divStyles}>
      <div style={logoStyles}>Svåraste steget</div>
      <img src={Information} alt="" style={infoBtnStyles} />
      <Unity unityContext={unityContext} style={gameStyles} />
    </div>
  );
};

export default Game;
