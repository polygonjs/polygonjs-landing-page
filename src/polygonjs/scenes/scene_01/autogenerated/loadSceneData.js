import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1696286865014",
  root: "1684601820575",
  nodes: {
    geo1: "1696286862335",
    "geo1/MAT": "1684540520673",
    "geo1/MAT/rayMarchingBuilder1": "1696286865014",
    COP: "1684880820562",
    lights: "1696286862335",
    cameras: "1696286862335",
    "cameras/actor_rotate": "1690794740435",
    "cameras/cameraRenderer1": "1690794740435",
  },
  shaders: {
    "/geo1/MAT/rayMarchingBuilder1": {
      vertex: "1684540520673",
      fragment: "1684540520673",
    },
  },
  jsFunctionBodies: {
    "/cameras/actor_perf_check": "1696286862335",
    "/cameras/actor_rotate": "1690794740435",
  },
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
