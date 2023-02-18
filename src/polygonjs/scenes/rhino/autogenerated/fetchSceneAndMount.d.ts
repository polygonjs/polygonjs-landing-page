import { LoadSceneOptions, LoadedData } from "./loadScene";

type FetchSceneAndMount_rhino = (
  options?: LoadSceneOptions
) => Promise<LoadedData>;

export const fetchSceneAndMount_rhino: FetchSceneAndMount_rhino;
