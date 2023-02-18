import { loadScene_rhino } from "./loadScene.js";

export const fetchSceneAndMount_rhino = async function (options = {}) {
  if (options && options.createViewer == null) {
    options.createViewer = true;
  }
  return loadScene_rhino(options);
};
