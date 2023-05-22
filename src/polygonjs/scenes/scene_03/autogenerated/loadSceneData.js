import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1684796450077",
  root: "1684667187978",
  nodes: {
    geo1: "1684664033662",
    "geo1/MAT": "1684623206045",
    ground: "1684667150007",
    "ground/MAT": "1684623152906",
    "ground/MAT/meshStandardBuilder1": "1684667150007",
    COP: "1684623206045",
    lights: "1684796450077",
    cameras: "1684623206045",
    "cameras/cameraControls1": "1684623206045",
  },
  shaders: {
    "/ground/MAT/meshStandardBuilder1": {
      vertex: "1684623206045",
      fragment: "1684623206045",
      "customDepthMaterial.vertex": "1684623206045",
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
