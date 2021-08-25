import * as React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "Build/Build.loader.js",
  dataUrl: "Build/Build.data",
  frameworkUrl: "Build/Build.framework.js",
  codeUrl: "Build/Build.wasm",
});

const gameStyles = {
  background: "grey",
  width: "100vw",
  height: "500px",
};

const Game = () => {
  return <Unity unityContext={unityContext} />;
};

export default Game;
