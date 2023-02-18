import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1676749394856",
  root: "1676736918762",
  nodes: {
    COP: "1676736607745",
    cameras: "1676739606906",
    "cameras/actor1": "1676740593278",
    "cameras/actor2": "1676749394856",
    lights: "1676736607745",
    raymarchedObject: "1676748387843",
    "raymarchedObject/COP": "1676736607745",
    "raymarchedObject/MAT": "1676736607745",
    "raymarchedObject/MAT/rayMarchingBuilder1": "1676749394856",
    "raymarchedObject/MAT/animationsNetwork1": "1676740722796",
    "raymarchedObject/MAT/eventsNetwork1": "1676740033192",
    "raymarchedObject/actor1": "1676749394856",
  },
  shaders: {
    "/raymarchedObject/MAT/rayMarchingBuilder1": {
      vertex: "1676736918762",
      fragment: "1676736918762",
      "customDepthMaterial.vertex": "1676736918762",
      "customDepthMaterial.fragment": "1676736918762",
      "customDistanceMaterial.vertex": "1676736918762",
      "customDistanceMaterial.fragment": "1676736918762",
    },
  },
};

export const loadSceneData_rhino = async (options = {}) => {
  const sceneDataRoot = options.sceneDataRoot || "./polygonjs/scenes";
  return await SceneDataManifestImporter.importSceneData({
    sceneName: "rhino",
    urlPrefix: sceneDataRoot + "/rhino",
    manifest: manifest,
    onProgress: options.onProgress,
  });
};
