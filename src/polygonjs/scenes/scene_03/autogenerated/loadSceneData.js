import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1696286909629",
  root: "1684667187978",
  nodes: {
    geo1: "1696286909629",
    "geo1/MAT": "1684880988611",
    ground: "1696286909629",
    "ground/MAT": "1684623152906",
    "ground/MAT/meshStandardBuilder1": "1696286909629",
    COP: "1684880988611",
    lights: "1696286909629",
    cameras: "1696286909629",
    "cameras/cameraControls1": "1684880988611",
  },
  shaders: {
    "/ground/MAT/meshStandardBuilder1": {
      vertex: "1690794850494",
      fragment: "1685480274290",
      "customDepthMaterial.vertex": "1685480274290",
      "customDepthMaterial.fragment": "1684623206045",
      "customDistanceMaterial.vertex": "1684623206045",
      "customDistanceMaterial.fragment": "1684623206045",
      "customDepthDOFMaterial.vertex": "1684623206045",
      "customDepthDOFMaterial.fragment": "1684623206045",
    },
  },
  jsFunctionBodies: {},
};

export const loadSceneData_scene_03 = async (options = {}) => {
  const sceneDataRoot = options.sceneDataRoot || "./polygonjs/scenes";
  return await SceneDataManifestImporter.importSceneData({
    sceneName: "scene_03",
    urlPrefix: sceneDataRoot + "/scene_03",
    manifest: manifest,
    onProgress: options.onProgress,
  });
};
