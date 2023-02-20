<template>
	<div>
		<div class="aspect-w-1 aspect-h-1 relative">
			<div class="border-b-0 border-sky-200 h-full">
				<Rhino :refractionTint="refractionTint"> </Rhino>
				<div class="absolute bottom-0 left-0 w-full text-center">
					<div class="mx-auto">
						<div
							v-for="(colorName, i) of COLOR_NAMES"
							:class="[
								'inline-block cursor-pointer hover:opacity-80 mr-1 rounded-full w-4 h-4 border-2',
								BG_CLASS_BY_COLOR_NAME[colorName],
								colorNameSelectedStates[i]
									? 'border-white'
									: 'border-transparent',
							]"
							@click="setColorName(colorName)"
						></div>
					</div>
				</div>
			</div>
		</div>
		<!-- <div class="bg-black text-white text-xs">
			<div v-for="integration of INTEGRATIONS">
				<component
					:class="[
						'text-white h-4 w-4 stroke-white cursor-pointer',
						integrationsSelectedStates ? '' : 'opacity-70',
					]"
					:is="ICON_BY_INTEGRATION[integration]"
					@click="setIntegration(integration)"
				></component>
			</div>
			<pre><code>{{ displayedCode }}</code></pre>
		</div> -->
	</div>
</template>

<script lang="ts">
import Rhino from "../../polygonjs/scenes/Rhino.vue";
import { defineComponent, Ref, ref, computed } from "vue";
import { Color } from "three";
import { Number3 } from "@polygonjs/polygonjs/dist/src/types/GlobalTypes";
// import { Integration, ICON_BY_INTEGRATION } from "../common/Integration";

enum ColorName {
	AMBER = "amber",
	PURPLE = "purple",
	TEAL = "teal",
	GREEN = "green",
	FUCHSIA = "fuchsia",
}
const COLOR_NAMES: ColorName[] = [
	ColorName.AMBER,
	ColorName.PURPLE,
	ColorName.TEAL,
	ColorName.GREEN,
	ColorName.FUCHSIA,
];
const COLORS_BY_COLOR_NAME: Record<ColorName, Number3> = {
	[ColorName.AMBER]: new Color(
		0.7764705882352941,
		0.5490196078431373,
		0.06274509803921569
	).toArray() as Number3,
	[ColorName.PURPLE]: new Color(
		0.5882352941176471,
		0.06274509803921569,
		0.7764705882352941
	).toArray() as Number3,
	[ColorName.TEAL]: new Color(
		0.06274509803921569,
		0.6941176470588235,
		0.7764705882352941
	).toArray() as Number3,
	[ColorName.GREEN]: new Color(
		0.3843137254901961,
		0.7764705882352941,
		0.06274509803921569
	).toArray() as Number3,
	[ColorName.FUCHSIA]: new Color(
		0.7764705882352941,
		0.06274509803921569,
		0.20392156862745098
	).toArray() as Number3,
};
const BG_CLASS_BY_COLOR_NAME: Record<string, string> = {
	[ColorName.AMBER]: "bg-amber-400",
	[ColorName.PURPLE]: "bg-purple-400",
	[ColorName.TEAL]: "bg-teal-400",
	[ColorName.GREEN]: "bg-green-400",
	[ColorName.FUCHSIA]: "bg-fuchsia-400",
};
// const REACT = `<PolygonjsScene
// 	sceneName={"scene_01"}
// 	loadFunction={loadScene_scene_01}
// />`;
// const VUE = `<PolygonjsScene
// 	:sceneName='sceneName'
// 	:loadFunction="loadFunction"
// />`;
// const THREE = `const loadedData = await loadScene_scene_01({
// 	domElement: 'app',
// });
// scene.add(loadedData.scene.threejsScene());
// `;
// type AvailableIntegration =
// 	| Integration.REACT
// 	| Integration.VUE
// 	| Integration.THREEJS;
// const INTEGRATIONS: AvailableIntegration[] = [
// 	Integration.REACT,
// 	Integration.VUE,
// 	Integration.THREEJS,
// ];
// const CODE_BY_INTEGRATION: Record<AvailableIntegration, string> = {
// 	[Integration.REACT]: `<PolygonjsScene
// 	sceneName={"scene_01"}
// 	loadFunction={loadScene_scene_01}
// />`,
// 	[Integration.VUE]: `<PolygonjsScene
// 	:sceneName='sceneName'
// 	:loadFunction="loadFunction"
// />`,
// 	[Integration.THREEJS]: `const loadedData = await loadScene_scene_01({
// 	domElement: 'app',
// });
// scene.add(loadedData.scene.threejsScene());
// `,
// };

export default defineComponent({
	components: { Rhino },
	setup() {
		//
		// refractionTint
		//
		const currentColorName: Ref<ColorName> = ref(ColorName.AMBER);
		function setColorName(colorName: ColorName) {
			currentColorName.value = colorName;
		}
		const colorNameSelectedStates = computed(() =>
			COLOR_NAMES.map((colorName) => colorName == currentColorName.value)
		);
		const refractionTint = computed(
			() => COLORS_BY_COLOR_NAME[currentColorName.value]
		);
		//
		// Integration
		//
		// const currentIntegration: Ref<AvailableIntegration> = ref(
		// 	Integration.REACT
		// );
		// function setIntegration(integration: AvailableIntegration) {
		// 	currentIntegration.value = integration;
		// }
		// const integrationsSelectedStates = computed(() =>
		// 	INTEGRATIONS.map(
		// 		(integration) => integration == currentIntegration.value
		// 	)
		// );
		// const displayedCode = computed(
		// 	() => CODE_BY_INTEGRATION[currentIntegration.value]
		// );

		return {
			setColorName,
			refractionTint,
			COLOR_NAMES,
			COLORS_BY_COLOR_NAME,
			BG_CLASS_BY_COLOR_NAME,
			colorNameSelectedStates,
			// setIntegration,
			// INTEGRATIONS,
			// ICON_BY_INTEGRATION,
			// integrationsSelectedStates,
			// displayedCode,
		};
	},
});
</script>
