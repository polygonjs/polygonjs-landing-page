import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1684834747475",
  root: "1684601820575",
  nodes: {
    geo1: "1684540525558",
    "geo1/MAT": "1684540520673",
    "geo1/MAT/rayMarchingBuilder1": "1684834747475",
    COP: "1675552563896",
    lights: "1684601815224",
    cameras: "1684834747475",
    "cameras/actor_rotate": "1684834747475",
    "cameras/cameraRenderer1": "1684606786734",
  },
  shaders: {
    "/geo1/MAT/rayMarchingBuilder1": {
      vertex: "1684540520673",
      fragment: "1684540520673",
    },
  },
  jsFunctionBodies: { "/cameras/actor_rotate": "1684834747475" },
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
