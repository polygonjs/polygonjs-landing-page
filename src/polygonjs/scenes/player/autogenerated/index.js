import { fetchSceneAndMount_player } from "./fetchSceneAndMount.js";

export async function loadSceneAndMount_player(options) {
  const { publicPath, onProgress } = options;
  const domElement = options.domElement || "polygonjs-app-player";
  const loadedData = await fetchSceneAndMount_player({
    domElement,
    autoPlay: true,
    onProgress,
    moduleImportSuffix: ".js",
    sceneDataRoot: publicPath + "/polygonjs/scenes",
    assetsRoot: publicPath,
    libsRootPrefix: publicPath,
  });
  return loadedData;
}
