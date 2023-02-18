<template>
	<div class="relative isolate overflow-hidden">
		<HeroGrid></HeroGrid>
		<HeroGradient></HeroGradient>
		<div
			class="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8"
		>
			<div
				class="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8"
			>
				<h1
					class="mt-10 font-bold tracking-tight text-white sm:text-6xl"
				>
					<span class="whitespace-nowrap">
						Create
						<span
							class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-red-400 to-pink-400 whitespace-nowrap"
						>
							Interactive 3D</span
						>
					</span>
					For The Web
				</h1>
				<p class="mt-6 text-lg leading-8 text-gray-300">
					<span class="opacity-60">Polygonjs is a </span>
					<span class="text-pink-400 font-bold"
						>Procedural Design & Animation</span
					>
					<span class="opacity-60"> Tool.</span>
				</p>
				<div class="mt-10 flex items-center gap-x-6">
					<a
						href="#"
						class="rounded-md bg-indigo-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 whitespace-nowrap"
						>Try Online Demo</a
					>
					<a
						href="#"
						class="text-base font-semibold leading-7 text-white"
					>
						Docs & Examples <span aria-hidden="true">→</span></a
					>
				</div>
			</div>
			<div
				class="mx-auto mt-8 max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none xl:ml-32 w-full"
			>
				<HeroSideSceneRhino></HeroSideSceneRhino>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { ChevronRightIcon } from "@heroicons/vue/20/solid";
import HeroGrid from "./hero/HeroGrid.vue";
import HeroGradient from "./hero/HeroGradient.vue";
import HeroSideImage from "./hero/HeroSideImage.vue";
import HeroSideSceneRhino from "./hero/HeroSideSceneRhino.vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
	components: {
		ChevronRightIcon,
		HeroGrid,
		HeroGradient,
		HeroSideImage,
		HeroSideSceneRhino,
	},
	setup() {
		const mobile = ref(false);
		const isOpen = ref(false);
		return { mobile, isOpen };
	},
});
</script>
