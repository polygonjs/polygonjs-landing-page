<template>
	<div class="relative aspect-w-2 aspect-h-1" @keypress.stop.prevent="onKeypress">
		<div class="h-full">
			<PolygonjsScene
				:loadFunction="loadFunction"
				:sceneName="'scene_04'"
				@sceneready="onSceneReady"
				:displayLoadingProgressBar="true"
				:displayLoadingPoster="true"
				:posterExtension="'webp'"
			></PolygonjsScene>
		</div>
	</div>
</template>

<script lang="ts">
import {defineComponent, computed} from 'vue';
// import PolygonjsScene from './PolygonjsScene.vue';
import {PolygonjsScene} from '@polygonjs/vue3';
import {loadScene_scene_04} from './scene_04/autogenerated/loadScene';
import type {PolySceneWithNodeMap_scene_04} from './scene_04/autogenerated/PolySceneWithNodeMap';

export default defineComponent({
	name: 'scene-04',
	components: {
		PolygonjsScene,
	},
	setup() {
		let scene: PolySceneWithNodeMap_scene_04 | undefined;

		function onSceneReady(loadedScene: PolySceneWithNodeMap_scene_04) {
			scene = loadedScene;
		}
		const loadFunction = computed(() => loadScene_scene_04);

		function onKeypress(event: KeyboardEvent) {
			event.stopImmediatePropagation();
			event.stopPropagation();
		}

		return {
			loadFunction,
			onSceneReady,
			onKeypress,
		};
	},
});
</script>

<style></style>
