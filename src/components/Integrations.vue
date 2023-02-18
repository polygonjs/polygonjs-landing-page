<template>
	<section class="text-gray-900 box-border">
		<div class="py-12 leading-7 md:pt-24 md:pb-20 box-border">
			<div class="relative px-10 md:px-5 mx-auto w-full text-gray-900">
				<div class="flex flex-wrap justify-center mt-0">
					<div
						class="relative flex-none mb-16 lg:mb-24 px-5 mt-0 w-full max-w-full text-center md:w-5/6 md:flex-none lg:w-2/3 lg:flex-none"
					>
						<h6
							class="mt-0 mb-2 text-xs font-normal tracking-widest text-yellow-200 uppercase"
						>
							Integrations
						</h6>
						<h1
							class="mt-0 mb-4 text-4xl font-semibold tracking-normal text-white"
						>
							Works with your favorite tech stack
						</h1>
						<p class="mt-0 text-lg leading-8 text-gray-400">
							We've built some seamless integrations with some of
							the industries favorite tools and services.
						</p>
					</div>
				</div>
				<div class="flex flex-wrap mt-0 max-w-6xl mx-auto">
					<div
						v-for="integration of INTEGRATIONS"
						class="relative flex-none px-5 mt-10 w-full max-w-full text-center md:w-1/2 md:flex-none lg:w-1/3 lg:flex-none"
					>
						<div class="mb-4 text-white stroke-blue-400 mx-auto">
							<component
								:is="ICON_BY_INTEGRATION[integration]"
							></component>
						</div>
						<h3
							class="mt-0 mb-2 text-xl font-semibold tracking-normal text-white"
						>
							{{ integration }}
						</h3>
						<p class="mt-0 mb-12 md:mb-0 text-gray-400">
							{{ DESCRIPTION_BY_INTEGRATION[integration] }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import GitIcon from "./icons/GitIcon.vue";
import MapboxIcon from "./icons/MapboxIcon.vue";
import ReactIcon from "./icons/ReactIcon.vue";
import VueIcon from "./icons/VueIcon.vue";
import ThreejsIcon from "./icons/ThreejsIcon.vue";
import WebflowIcon from "./icons/WebflowIcon.vue";
import { Integration, ICON_BY_INTEGRATION } from "./common/Integration";

const INTEGRATIONS: Integration[] = [
	Integration.REACT,
	Integration.VUE,
	Integration.THREEJS,
	Integration.GIT,
	Integration.WEBFLOW,
	Integration.MAPBOX,
];
const DESCRIPTION_BY_INTEGRATION: Record<Integration, string> = {
	[Integration.REACT]: "Simply add our <PolygonjsScene/> component",
	[Integration.VUE]: "Simply add our <PolygonjsScene/> component",
	[Integration.THREEJS]: "Polygonjs is based on threejs after all",
	[Integration.GIT]:
		"Polygonjs only saves javascript and json files, super easy to diff and review",
	[Integration.WEBFLOW]: "Simply add our <PolygonjsScene/> component",
	[Integration.MAPBOX]: "Simply add our <PolygonjsScene/> component",
};

export default defineComponent({
	components: {
		ReactIcon,
		VueIcon,
		ThreejsIcon,
		GitIcon,
		WebflowIcon,
		MapboxIcon,
	},
	setup() {
		return {
			INTEGRATIONS,
			DESCRIPTION_BY_INTEGRATION,
			ICON_BY_INTEGRATION,
		};
	},
});
</script>
