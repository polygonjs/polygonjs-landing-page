import { fetchSceneAndMount_physics_attractor } from "./fetchSceneAndMount.js";

export async function loadSceneAndMount_physics_attractor(options) {
  const { publicPath, onProgress } = options;
  const domElement = options.domElement || "polygonjs-app-physics_attractor";
  const loadedData = await fetchSceneAndMount_physics_attractor({
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
