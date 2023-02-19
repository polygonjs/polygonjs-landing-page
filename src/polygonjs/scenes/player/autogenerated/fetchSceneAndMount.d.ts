import { LoadSceneOptions, LoadedData } from "./loadScene";

type FetchSceneAndMount_player = (
  options?: LoadSceneOptions
) => Promise<LoadedData>;

export const fetchSceneAndMount_player: FetchSceneAndMount_player;
