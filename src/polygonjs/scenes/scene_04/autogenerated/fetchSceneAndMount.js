import { loadScene_scene_04 } from "./loadScene.js";

export const fetchSceneAndMount_scene_04 = async function (options = {}) {
  if (options && options.createViewer == null) {
    options.createViewer = true;
  }
  return loadScene_scene_04(options);
};
