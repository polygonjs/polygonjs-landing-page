import { fetchSceneAndMount_demo } from "./fetchSceneAndMount.js";

export async function loadSceneAndMount_demo(options) {
  const { publicPath, onProgress } = options;
  const domElement = options.domElement || "polygonjs-app-demo";
  const loadedData = await fetchSceneAndMount_demo({
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
