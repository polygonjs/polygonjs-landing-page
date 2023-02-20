<template>
	<section class="text-gray-900 box-border">
		<div class="py-12 leading-7 md:pt-24 md:pb-20 box-border">
			<div class="relative px-10 md:px-5 mx-auto w-full text-gray-900">
				<div class="flex flex-wrap justify-center mt-0">
					<div
						class="relative flex-none mb-4 md:mb-8 px-5 mt-0 w-full max-w-full text-center md:w-5/6 md:flex-none lg:w-2/3 lg:flex-none"
					>
						<h6
							class="mt-0 mb-2 text-xs font-normal tracking-widest text-yellow-200 uppercase"
						>
							Integrations
						</h6>
						<h1
							class="mt-0 mb-4 font-semibold tracking-normal text-white text-3xl sm:text-6xl"
						>
							Works with your favorite tech stack
						</h1>
						<p
							class="mt-0 text-md md:text-lg leading-8 text-gray-400"
						>
							It couldn't be easier to add your 3D scenes to your
							websites.
							<a
								href="/dccs/integrations"
								class="cursor-pointer border-b-2 border-white hover:opacity-80 whitespace-nowrap"
								>View All Integrations
								<span aria-hidden="true">→</span></a
							>
						</p>
					</div>
				</div>
				<div class="flex flex-wrap mt-0 max-w-6xl mx-auto">
					<a
						v-for="integration of INTEGRATIONS"
						:href="integrationRoute(integration)"
						class="relative flex-none px-5 mt-2 md:mt-10 w-full max-w-full text-center md:w-1/2 md:flex-none lg:w-1/3 lg:flex-none hover:cursor-pointer border-4 border-transparent hover:border-gray-800 rounded-lg p-4"
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
						<p class="mt-0 mb-2 text-gray-400">
							{{ DESCRIPTION_BY_INTEGRATION[integration] }}
						</p>
					</a>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import GitIcon from "../icons/GitIcon.vue";
import MapboxIcon from "../icons/MapboxIcon.vue";
import ReactIcon from "../icons/ReactIcon.vue";
import VueIcon from "../icons/VueIcon.vue";
import ThreejsIcon from "../icons/ThreejsIcon.vue";
import WebflowIcon from "../icons/WebflowIcon.vue";
import { Integration, ICON_BY_INTEGRATION } from "../common/Integration";

const INTEGRATIONS: Integration[] = [
	Integration.REACT,
	Integration.VUE,
	Integration.THREEJS,
	Integration.GIT,
	Integration.WEBFLOW,
	Integration.MAPBOX,
];
const DESCRIPTION_BY_INTEGRATION: Record<Integration, string> = {
	[Integration.REACT]:
		"Our <PolygonjsScene/> component makes it reactive immediately.",
	[Integration.VUE]: "Simply add our <PolygonjsScene/> component.",
	[Integration.THREEJS]: "Polygonjs is based on threejs after all.",
	[Integration.GIT]:
		"Polygonjs only saves javascript and json files, super easy to diff and review.",
	[Integration.WEBFLOW]:
		"Just one line in the custom code section to add, and you're set.",
	[Integration.MAPBOX]: "Add 3D objects to maps with our visual editor.",
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
		function integrationRoute(integration: Integration) {
			return `/docs/integrations/${integration.toLowerCase()}`;
		}

		return {
			INTEGRATIONS,
			DESCRIPTION_BY_INTEGRATION,
			ICON_BY_INTEGRATION,
			integrationRoute,
		};
	},
});
</script>
