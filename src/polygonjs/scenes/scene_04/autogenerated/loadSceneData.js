import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1690795221911",
  root: "1690794950156",
  nodes: {
    geo1: "1690794950156",
    "geo1/MAT": "1690794950156",
    "geo1/MAT/meshStandardBuilder_GROUND": "1690794950156",
    "geo1/MAT/meshStandardBuilder_PLAYER": "1690794950156",
    "geo1/MAT/meshStandardBuilder_BLOCKS": "1690794950156",
    "geo1/physicsPlayer1": "1690794950156",
    "geo1/cameraControls_PLAYER1": "1690794950156",
    "geo1/physicsWorld1": "1690794950156",
    lights: "1690794950156",
    cameras: "1690794950156",
    "cameras/cameraControls1": "1690794950156",
    env: "1690794950156",
    "env/MAT": "1690794950156",
    "env/MAT/meshLambertBuilder_INSTANCES": "1690794950156",
  },
  shaders: {
    "/geo1/MAT/meshStandardBuilder_GROUND": {
      vertex: "1690795217402",
      fragment: "1690795217402",
      "customDepthMaterial.vertex": "1690795217402",
      "customDepthMaterial.fragment": "1690795217402",
      "customDistanceMaterial.vertex": "1690795217402",
      "customDistanceMaterial.fragment": "1690795217402",
      "customDepthDOFMaterial.vertex": "1690795217402",
      "customDepthDOFMaterial.fragment": "1690795217402",
    },
    "/geo1/MAT/meshStandardBuilder_PLAYER": {
      vertex: "1690795217402",
      fragment: "1690795217402",
      "customDepthMaterial.vertex": "1690795217402",
      "customDepthMaterial.fragment": "1690795217402",
      "customDistanceMaterial.vertex": "1690795217402",
      "customDistanceMaterial.fragment": "1690795217402",
      "customDepthDOFMaterial.vertex": "1690795217402",
      "customDepthDOFMaterial.fragment": "1690795217402",
    },
    "/geo1/MAT/meshStandardBuilder_BLOCKS": {
      vertex: "1690795217402",
      fragment: "1690795217402",
      "customDepthMaterial.vertex": "1690795217402",
      "customDepthMaterial.fragment": "1690795217402",
      "customDistanceMaterial.vertex": "1690795217402",
      "customDistanceMaterial.fragment": "1690795217402",
      "customDepthDOFMaterial.vertex": "1690795217402",
      "customDepthDOFMaterial.fragment": "1690795217402",
    },
    "/env/MAT/meshLambertBuilder_INSTANCES": {
      vertex: "1690795217402",
      fragment: "1690795217402",
      "customDepthMaterial.vertex": "1690795217402",
      "customDepthMaterial.fragment": "1690795217402",
      "customDistanceMaterial.vertex": "1690795217402",
      "customDistanceMaterial.fragment": "1690795217402",
      "customDepthDOFMaterial.vertex": "1690795217402",
      "customDepthDOFMaterial.fragment": "1690795217402",
    },
  },
  jsFunctionBodies: {
    "/geo1/physicsPlayer1": "1690795217402",
    "/geo1/physicsWorld1": "1690795217402",
  },
};

export const loadSceneData_scene_04 = async (options = {}) => {
  const sceneDataRoot = options.sceneDataRoot || "./polygonjs/scenes";
  return await SceneDataManifestImporter.importSceneData({
    sceneName: "scene_04",
    urlPrefix: sceneDataRoot + "/scene_04",
    manifest: manifest,
    onProgress: options.onProgress,
  });
};
