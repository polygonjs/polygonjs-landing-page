<template>
	<div class="relative isolate overflow-hidden">
		<Header></Header>
		<HeroGrid></HeroGrid>
		<HeroGradient></HeroGradient>
		<div
			class="mx-auto max-w-7xl px-6 pt-10 pb-10 sm:pb-32 lg:flex lg:pt-40 lg:pb-10 lg:px-8"
		>
			<div
				class="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8"
			>
				<h1
					class="mt-10 font-bold tracking-tight text-white text-3xl sm:text-6xl text-center md:text-left"
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
					<span class="block sm:inline">For The Web</span>
				</h1>
				<p
					class="mt-6 leading-8 text-gray-300 text-md sm:text-lg text-center md:text-left"
				>
					<span class="opacity-60">Polygonjs is a </span>
					<span class="text-pink-400 font-bold"
						>Procedural Design & Animation</span
					>
					<span class="opacity-60"> Tool.</span>
				</p>
				<div class="mt-10 flex items-center gap-x-6">
					<a
						href="/demo"
						class="rounded-sm bg-indigo-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 whitespace-nowrap"
						>Try Online Demo</a
					>
					<a
						href="/docs"
						class="text-base font-semibold leading-7 text-white whitespace-nowrap"
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
import Header from "./Header.vue";
import HeroGrid from "./HeroGrid.vue";
import HeroGradient from "./HeroGradient.vue";
import HeroSideImage from "./HeroSideImage.vue";
import HeroSideSceneRhino from "./HeroSideSceneRhino.vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
	components: {
		ChevronRightIcon,
		Header,
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
