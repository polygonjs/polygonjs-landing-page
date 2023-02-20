import { loadScene_demo } from "./loadScene.js";

export const fetchSceneAndMount_demo = async function (options = {}) {
  if (options && options.createViewer == null) {
    options.createViewer = true;
  }
  return loadScene_demo(options);
};
