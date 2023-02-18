import { fetchSceneAndMount_rhino } from "./fetchSceneAndMount.js";

export async function loadSceneAndMount_rhino(options) {
  const { publicPath, onProgress } = options;
  const domElement = options.domElement || "polygonjs-app-rhino";
  const loadedData = await fetchSceneAndMount_rhino({
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
