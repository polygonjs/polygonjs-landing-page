import { ASSETS_ROOT } from "@polygonjs/polygonjs/dist/src/core/loader/AssetsUtils";
import { sanitizeUrl } from "@polygonjs/polygonjs/dist/src/core/UrlHelper";
export interface ExampleData {
	name: string;
	label: string;
	thumbnailUrl: string;
	videoUrl: string;
	href: string;
}

export const EXAMPLES_ROOT_URL = sanitizeUrl(`${ASSETS_ROOT}/examples`);

function removeSpaces(word: string): string {
	return word.replace(/ /g, "").replace(/_/g, "");
}
function _thumbnailUrl(exampleName: string) {
	const short = removeSpaces(exampleName).toLowerCase();
	return `${EXAMPLES_ROOT_URL}/${short}/image.webp`;
}
function _videoUrl(exampleName: string) {
	const short = removeSpaces(exampleName).toLowerCase();
	return `${EXAMPLES_ROOT_URL}/${short}/video.mp4`;
}
export function exampleNameToId(exampleName: string): string {
	return exampleName
		.replace(/[^A-Za-z0-9\/]/g, "")
		.toLowerCase()
		.replace(/\//g, ":");
}

export function createExampleData(
	exampleName: string,
	label: string
): ExampleData {
	const href = `/examples/${exampleNameToId(exampleName)}`;
	const data: ExampleData = {
		name: exampleName,
		thumbnailUrl: _thumbnailUrl(exampleName),
		videoUrl: _videoUrl(exampleName),
		href: href,
		label,
	};
	return data;
}
