import { loadScene_physics_attractor } from "./loadScene.js";

export const fetchSceneAndMount_physics_attractor = async function (
  options = {}
) {
  if (options && options.createViewer == null) {
    options.createViewer = true;
  }
  return loadScene_physics_attractor(options);
};
