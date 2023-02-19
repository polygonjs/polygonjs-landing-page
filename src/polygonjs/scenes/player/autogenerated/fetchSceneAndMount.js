import { loadScene_player } from "./loadScene.js";

export const fetchSceneAndMount_player = async function (options = {}) {
  if (options && options.createViewer == null) {
    options.createViewer = true;
  }
  return loadScene_player(options);
};
