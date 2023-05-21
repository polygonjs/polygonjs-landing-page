import { fetchSceneAndMount_scene_04 } from "./fetchSceneAndMount.js";

export async function loadSceneAndMount_scene_04(options) {
  const { publicPath, onProgress } = options;
  const domElement = options.domElement || "polygonjs-app-scene_04";
  const loadedData = await fetchSceneAndMount_scene_04({
    domElement,
    autoPlay: true,
    onProgress,
    sceneDataRoot: publicPath + "/polygonjs/scenes",
    assetsRoot: publicPath,
    libsRootPrefix: publicPath,
  });
  return loadedData;
}
