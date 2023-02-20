import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1676911884206",
  root: "1676911884206",
  nodes: {
    geo1: "1676911884206",
    "geo1/MAT": "1676911884206",
    ground: "1676911884206",
    "ground/MAT": "1676911884206",
    "ground/MAT/meshStandardBuilder1": "1676911884206",
    COP: "1676911884206",
    lights: "1676911884206",
    cameras: "1676911884206",
    "cameras/cameraControls1": "1676911884206",
  },
  shaders: {},
};

export const loadSceneData_demo = async (options = {}) => {
  const sceneDataRoot = options.sceneDataRoot || "./polygonjs/scenes";
  return await SceneDataManifestImporter.importSceneData({
    sceneName: "demo",
    urlPrefix: sceneDataRoot + "/demo",
    manifest: manifest,
    onProgress: options.onProgress,
  });
};
