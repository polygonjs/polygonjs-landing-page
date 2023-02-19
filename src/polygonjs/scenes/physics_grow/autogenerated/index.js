import { fetchSceneAndMount_physics_grow } from "./fetchSceneAndMount.js";

export async function loadSceneAndMount_physics_grow(options) {
  const { publicPath, onProgress } = options;
  const domElement = options.domElement || "polygonjs-app-physics_grow";
  const loadedData = await fetchSceneAndMount_physics_grow({
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
