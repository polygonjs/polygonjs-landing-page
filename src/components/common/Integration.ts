import ReactIcon from "../icons/ReactIcon.vue";
import VueIcon from "../icons/VueIcon.vue";
import ThreejsIcon from "../icons/ThreejsIcon.vue";
import GitIcon from "../icons/GitIcon.vue";
import WebflowIcon from "../icons/WebflowIcon.vue";
import MapboxIcon from "../icons/MapboxIcon.vue";

export enum Integration {
	REACT = "React",
	VUE = "Vue",
	THREEJS = "Threejs",
	GIT = "Git",
	WEBFLOW = "Webflow",
	MAPBOX = "Mapbox",
}

export const ICON_BY_INTEGRATION: Record<Integration, any> = {
	[Integration.REACT]: ReactIcon,
	[Integration.VUE]: VueIcon,
	[Integration.THREEJS]: ThreejsIcon,
	[Integration.GIT]: GitIcon,
	[Integration.WEBFLOW]: WebflowIcon,
	[Integration.MAPBOX]: MapboxIcon,
};
