<template>
	<div class="relative isolate overflow-hidden">
		<HeroGrid></HeroGrid>
		<HeroGradient></HeroGradient>>
		<div
			class="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8"
		>
			<div
				class="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8"
			>
				<!-- <img
					class="h-11"
					src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=500"
					alt="Your Company"
				/>
				<div class="mt-24 sm:mt-32 lg:mt-16">
					<a href="#" class="inline-flex space-x-6">
						<span
							class="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-400 ring-1 ring-inset ring-indigo-500/20"
							>What's new</span
						>
						<span
							class="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300"
						>
							<span>Just shipped v1.4.1</span>
							<ChevronRightIcon
								class="h-5 w-5 text-gray-500"
								aria-hidden="true"
							/>
						</span>
					</a>
				</div> -->
				<h1
					class="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl"
				>
					Create
					<span
						class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-red-400 to-pink-400"
						>Wonderful
					</span>
					3D For The Web
				</h1>
				<p class="mt-6 text-lg leading-8 text-gray-300">
					Polygonjs is a procedural & node-based WebGL Design tool.
				</p>
				<div class="mt-10 flex items-center gap-x-6">
					<a
						href="#"
						class="rounded-md bg-indigo-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
						>Try Online Demo</a
					>
					<a
						href="#"
						class="text-base font-semibold leading-7 text-white"
						>Install <span aria-hidden="true">→</span></a
					>
				</div>
			</div>
			<div
				class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32"
			>
				<div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
					<img
						src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
						alt="App screenshot"
						width="2432"
						height="1442"
						class="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { ChevronRightIcon } from "@heroicons/vue/20/solid";
import HeroGrid from "./hero/HeroGrid.vue";
import HeroGradient from "./hero/HeroGradient.vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
	components: { ChevronRightIcon, HeroGrid, HeroGradient },
	setup() {
		const mobile = ref(false);
		const isOpen = ref(false);
		return { mobile, isOpen };
	},
});
</script>
