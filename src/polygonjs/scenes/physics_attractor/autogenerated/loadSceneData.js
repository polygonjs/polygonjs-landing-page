import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1676926640870",
  root: "1676908588990",
  nodes: {
    lights: "1676901304392",
    physics: "1676901798133",
    "physics/MAT": "1676901798133",
    "physics/MAT/meshStandardBuilder_SMALL": "1676926578778",
    "physics/MAT/meshPhysicalBuilder_MAIN": "1676899547662",
    "physics/MAT/meshPhysicalBuilder_INSTANCES": "1676926578778",
    "physics/actor1": "1676929856588",
    "physics/actor2": "1676899288819",
    "physics/physicsWorld1": "1676899288819",
    "physics/actor_to_instance": "1676902269360",
    "physics/COP": "1676926640870",
    cameras: "1676909261149",
    "cameras/cameraControls1": "1676899288819",
  },
  shaders: {
    "/physics/MAT/meshStandardBuilder_SMALL": {
      vertex: "1676899288819",
      fragment: "1676899288819",
      "customDepthMaterial.vertex": "1676899288819",
      "customDepthMaterial.fragment": "1676899288819",
      "customDistanceMaterial.vertex": "1676899288819",
      "customDistanceMaterial.fragment": "1676899288819",
      "customDepthDOFMaterial.vertex": "1676899288819",
      "customDepthDOFMaterial.fragment": "1676899288819",
    },
    "/physics/MAT/meshPhysicalBuilder_MAIN": {
      vertex: "1676848843293",
      fragment: "1676848843293",
    },
    "/physics/MAT/meshPhysicalBuilder_INSTANCES": {
      vertex: "1676848843293",
      fragment: "1676848843293",
    },
  },
};

export const loadSceneData_physics_attractor = async (options = {}) => {
  const sceneDataRoot = options.sceneDataRoot || "./polygonjs/scenes";
  return await SceneDataManifestImporter.importSceneData({
    sceneName: "physics_attractor",
    urlPrefix: sceneDataRoot + "/physics_attractor",
    manifest: manifest,
    onProgress: options.onProgress,
  });
};
