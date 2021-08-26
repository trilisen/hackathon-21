import * as React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "Build/Build.loader.js",
  dataUrl: "Build/Build.data",
  frameworkUrl: "Build/Build.framework.js",
  codeUrl: "Build/Build.wasm",
});

const gameStyles = {
  width: "100vw",
  height: "100vh",
  maxWidth: "100%",
};

const Game = () => {
  return <Unity unityContext={unityContext} style={gameStyles} />;
};

export default Game;
