import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1684540520673",
  root: "1684540693803",
  nodes: {
    geo1: "1684540525558",
    "geo1/MAT": "1684540520673",
    "geo1/MAT/rayMarchingBuilder1": "1684541430296",
    COP: "1675552563896",
    lights: "1684540520673",
    cameras: "1684540520673",
  },
  shaders: {
    "/geo1/MAT/rayMarchingBuilder1": {
      vertex: "1684540520673",
      fragment: "1684540520673",
      "customDepthMaterial.vertex": "1684540520673",
      "customDepthMaterial.fragment": "1684540520673",
      "customDistanceMaterial.vertex": "1684540520673",
      "customDistanceMaterial.fragment": "1684540520673",
    },
  },
  jsFunctionBodies: {},
};

export const loadSceneData_scene_01 = async (options = {}) => {
  const sceneDataRoot = options.sceneDataRoot || "./polygonjs/scenes";
  return await SceneDataManifestImporter.importSceneData({
    sceneName: "scene_01",
    urlPrefix: sceneDataRoot + "/scene_01",
    manifest: manifest,
    onProgress: options.onProgress,
  });
};
