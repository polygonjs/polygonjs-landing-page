import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1676819061850",
  root: "1676818153766",
  nodes: {
    COP: "1676818119650",
    lights: "1676818119650",
    cameras: "1676818119650",
    "cameras/actor1": "1676818119650",
    "cameras/cameraControls1": "1676818119650",
    physics: "1676818119650",
    "physics/MAT": "1676750131484",
    "physics/MAT/meshPhysicalBuilder1": "1676818153766",
    "physics/MAT/meshStandardBuilder1": "1676818153766",
    "physics/MAT/meshStandardBuilder_PLAYER": "1676818153766",
    "physics/cameraControls_PLAYER1": "1676818119650",
    "physics/physicsPlayer1": "1676819061850",
    "physics/physicsWorld1": "1676818119650",
    "physics/subnet_dominos": "1676818119650",
    "physics/subnet_dominos/MAT": "1676818119650",
    "physics/subnet_plank": "1676818119650",
    "physics/subnet_plank/MAT": "1676818119650",
  },
  shaders: {
    "/physics/MAT/meshPhysicalBuilder1": {
      vertex: "1676818119650",
      fragment: "1676818119650",
      "customDepthMaterial.vertex": "1676818119650",
      "customDepthMaterial.fragment": "1676818119650",
      "customDistanceMaterial.vertex": "1676818119650",
      "customDistanceMaterial.fragment": "1676818119650",
      "customDepthDOFMaterial.vertex": "1676818119650",
      "customDepthDOFMaterial.fragment": "1676818119650",
    },
    "/physics/MAT/meshStandardBuilder1": {
      vertex: "1676818119650",
      fragment: "1676818119650",
      "customDepthMaterial.vertex": "1676818119650",
      "customDepthMaterial.fragment": "1676818119650",
      "customDistanceMaterial.vertex": "1676818119650",
      "customDistanceMaterial.fragment": "1676818119650",
      "customDepthDOFMaterial.vertex": "1676818119650",
      "customDepthDOFMaterial.fragment": "1676818119650",
    },
    "/physics/MAT/meshStandardBuilder_PLAYER": {
      vertex: "1676750131484",
      fragment: "1676750131484",
      "customDepthMaterial.vertex": "1676750131484",
      "customDepthMaterial.fragment": "1676750131484",
      "customDistanceMaterial.vertex": "1676750131484",
      "customDistanceMaterial.fragment": "1676750131484",
      "customDepthDOFMaterial.vertex": "1676750131484",
      "customDepthDOFMaterial.fragment": "1676750131484",
    },
  },
};

export const loadSceneData_player = async (options = {}) => {
  const sceneDataRoot = options.sceneDataRoot || "./polygonjs/scenes";
  return await SceneDataManifestImporter.importSceneData({
    sceneName: "player",
    urlPrefix: sceneDataRoot + "/player",
    manifest: manifest,
    onProgress: options.onProgress,
  });
};
