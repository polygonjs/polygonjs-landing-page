import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1690795339368",
  root: "1690794959837",
  nodes: {
    particles: "1690794959837",
    "particles/MAT": "1690794959837",
    "particles/MAT/meshBasicBuilder_INSTANCES": "1690794959837",
    "particles/MAT/meshBasicBuilder_INSTANCES_PARTICLES": "1690795335732",
    "particles/MAT/pointsParticles": "1690794959837",
    "particles/actor1": "1690795183949",
    "particles/actor_particles1": "1690794959837",
    "particles/particlesSystemGpu1": "1690795335732",
    cameras: "1690794959837",
    "cameras/cameraControls1": "1690794959837",
    "cameras/cameraControls2": "1690794959837",
  },
  shaders: {
    "/particles/MAT/meshBasicBuilder_INSTANCES": {
      vertex: "1690795048731",
      fragment: "1690795048731",
      "customDepthMaterial.vertex": "1690795048731",
      "customDepthMaterial.fragment": "1690795048731",
      "customDistanceMaterial.vertex": "1690795048731",
      "customDistanceMaterial.fragment": "1690795048731",
      "customDepthDOFMaterial.vertex": "1690795048731",
      "customDepthDOFMaterial.fragment": "1690795048731",
    },
    "/particles/MAT/meshBasicBuilder_INSTANCES_PARTICLES": {
      vertex: "1690795048731",
      fragment: "1690795048731",
      "customDepthMaterial.vertex": "1690795048731",
      "customDepthMaterial.fragment": "1690795048731",
      "customDistanceMaterial.vertex": "1690795048731",
      "customDistanceMaterial.fragment": "1690795048731",
      "customDepthDOFMaterial.vertex": "1690795048731",
      "customDepthDOFMaterial.fragment": "1690795048731",
    },
    "/particles/MAT/pointsParticles": {
      vertex: "1690795048731",
      fragment: "1690795048731",
      "customDistanceMaterial.vertex": "1690795048731",
      "customDistanceMaterial.fragment": "1690795048731",
      "customDepthMaterial.vertex": "1690795048731",
      "customDepthMaterial.fragment": "1690795048731",
      "customDepthDOFMaterial.vertex": "1690795048731",
      "customDepthDOFMaterial.fragment": "1690795048731",
    },
    "/particles/particlesSystemGpu1": {
      instancePosition_x_state: "1690795048731",
      velocity: "1690795048731",
    },
  },
  jsFunctionBodies: {
    "/particles/actor1": "1690795183949",
    "/particles/actor_particles1": "1690795048731",
  },
};

export const loadSceneData_scene_02 = async (options = {}) => {
  const sceneDataRoot = options.sceneDataRoot || "./polygonjs/scenes";
  return await SceneDataManifestImporter.importSceneData({
    sceneName: "scene_02",
    urlPrefix: sceneDataRoot + "/scene_02",
    manifest: manifest,
    onProgress: options.onProgress,
  });
};
