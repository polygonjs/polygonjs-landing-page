import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1684613948002",
  root: "1684612919353",
  nodes: {
    particles: "1684613948002",
    "particles/MAT": "1684612919353",
    "particles/MAT/meshBasicBuilder_INSTANCES": "1684612919353",
    "particles/MAT/meshBasicBuilder_INSTANCES_PARTICLES": "1684613497095",
    "particles/MAT/pointsParticles": "1684612919353",
    "particles/actor1": "1684612919353",
    "particles/actor_particles1": "1684612919353",
    "particles/particlesSystemGpu1": "1684613948002",
    cameras: "1684612919353",
    "cameras/cameraControls1": "1684612919353",
  },
  shaders: {
    "/particles/MAT/meshBasicBuilder_INSTANCES": {
      vertex: "1684613087793",
      fragment: "1684613087793",
      "customDepthMaterial.vertex": "1684613087793",
      "customDepthMaterial.fragment": "1684613087793",
      "customDistanceMaterial.vertex": "1684613087793",
      "customDistanceMaterial.fragment": "1684613087793",
      "customDepthDOFMaterial.vertex": "1684613087793",
      "customDepthDOFMaterial.fragment": "1684613087793",
    },
    "/particles/MAT/meshBasicBuilder_INSTANCES_PARTICLES": {
      vertex: "1684613087793",
      fragment: "1684613087793",
      "customDepthMaterial.vertex": "1684613087793",
      "customDepthMaterial.fragment": "1684613087793",
      "customDistanceMaterial.vertex": "1684613087793",
      "customDistanceMaterial.fragment": "1684613087793",
      "customDepthDOFMaterial.vertex": "1684613087793",
      "customDepthDOFMaterial.fragment": "1684613087793",
    },
    "/particles/MAT/pointsParticles": {
      vertex: "1684613087793",
      fragment: "1684613087793",
      "customDistanceMaterial.vertex": "1684613087793",
      "customDistanceMaterial.fragment": "1684613087793",
      "customDepthMaterial.vertex": "1684613087793",
      "customDepthMaterial.fragment": "1684613087793",
      "customDepthDOFMaterial.vertex": "1684613087793",
      "customDepthDOFMaterial.fragment": "1684613087793",
    },
    "/particles/particlesSystemGpu1": {
      instancePosition_SEPARATOR_state: "1684613087793",
      velocity: "1684613087793",
    },
  },
  jsFunctionBodies: {
    "/particles/actor1": "1684613087793",
    "/particles/actor_particles1": "1684613087793",
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
