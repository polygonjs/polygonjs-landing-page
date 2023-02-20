<template>
	<div class="relative isolate overflow-hidden pointer-events-none">
		<Header class="pointer-events-auto"></Header>
		<!-- <HeroGrid></HeroGrid> -->
		<!-- <HeroGradient></HeroGradient> -->
		<div
			class="mx-auto max-w-7xl px-6 pt-10 pb-40 sm:pb-32 lg:pt-20 lg:pb-40 lg:px-8 text-center"
		>
			<div
				class="mx-auto inline-block lg:mx-0 lg:max-w-2xl backdrop-blur rounded-lg lg:p-4"
			>
				<h1
					class="font-bold tracking-tight text-white text-3xl sm:text-6xl text-center"
				>
					<span class="whitespace-nowrap block">
						<span>
							Create
							<span
								class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-red-400 to-pink-400 whitespace-nowrap"
							>
								Interactive 3D</span
							>
						</span>
					</span>
					<span class="block">For The Web</span>
				</h1>
				<p
					class="mt-6 leading-8 text-gray-300 text-md sm:text-lg text-center"
				>
					<span class="opacity-60">Polygonjs is a </span>
					<span class="text-pink-400 font-bold pointer-events-auto"
						>Procedural Design & Animation</span
					>
					<span class="opacity-60"> Tool.</span>
				</p>
				<div class="mt-10 text-center">
					<a
						href="/demo"
						class="inline-block mx-4 rounded-sm bg-indigo-500 px-3.5 py-1.5 text-base font-semibold leading-7 shadow-sm text-gray-200 hover:text-gray-100 whitespace-nowrap pointer-events-auto"
						>Try Online Demo</a
					>
					<a
						href="/docs"
						class="inline-block mx-4 text-base font-semibold leading-7 text-white whitespace-nowrap pointer-events-auto"
					>
						Docs & Examples <span aria-hidden="true">→</span></a
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { ChevronRightIcon } from "@heroicons/vue/20/solid";
import Header from "./Header.vue";
// import HeroGrid from "./HeroGrid.vue";
// import HeroGradient from "./HeroGradient.vue";
// import HeroSideImage from "./HeroSideImage.vue";
// import HeroSideSceneRhino from "./HeroSideSceneRhino.vue";
// import HeroPhysicsAttractorScene from "./HeroPhysicsAttractorScene.vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
	components: {
		ChevronRightIcon,
		Header,
		// HeroGrid,
		// HeroGradient,
		// HeroSideImage,
		// HeroPhysicsAttractorScene,
	},
	setup() {
		const mobile = ref(false);
		const isOpen = ref(false);
		return { mobile, isOpen };
	},
});
</script>
