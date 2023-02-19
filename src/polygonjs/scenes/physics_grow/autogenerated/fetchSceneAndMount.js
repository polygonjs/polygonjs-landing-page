import { loadScene_physics_grow } from "./loadScene.js";

export const fetchSceneAndMount_physics_grow = async function (options = {}) {
  if (options && options.createViewer == null) {
    options.createViewer = true;
  }
  return loadScene_physics_grow(options);
};
