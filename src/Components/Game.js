import React, { useEffect, useState } from "react";
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
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    unityContext.on("GameOver", () => {
      setIsGameOver(true);
    });
  }, []);
  return (
    <div style={{ display: "flex" }}>
      {isGameOver === true && <p>Game over</p>}
      <Unity unityContext={unityContext} style={gameStyles} />
    </div>
  );
};

export default Game;
