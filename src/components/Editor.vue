<template>
	<section class="text-gray-900 box-border" ref="sectionElement">
		<div class="py-12 leading-7 md:pt-24 md:pb-20 box-border">
			<div class="relative px-2 md:px-10 mx-auto w-full text-gray-900">
				<div class="flex flex-wrap justify-center mt-0">
					<div
						class="relative flex-none mb-4 md:mb-16 px-5 mt-0 w-full max-w-full text-center md:w-5/6 md:flex-none lg:w-2/3 lg:flex-none"
					>
						<h6
							class="mt-0 mb-2 text-xs font-normal tracking-widest text-yellow-200 uppercase"
						>
							Use the power of
						</h6>
						<h2
							class="mt-0 mb-4 font-semibold tracking-normal text-white text-4xl sm:text-4xl"
						>
							Non-Destructive Workflow
						</h2>
						<div
							class="text-center cursor-pointer pointer-events-auto hover:opacity-80"
							@click="scrollToSection"
						>
							<ChevronDownIcon
								class="w-8 text-white mx-auto inline-block"
							></ChevronDownIcon>
						</div>
					</div>
				</div>
				<div class="flex flex-wrap mt-0 max-w-6xl mx-auto">
					<video
						ref="videoElement"
						poster="/landing-page/videos/editor.v01.webp"
						muted
						loop
					>
						<source src="/landing-page/videos/editor.v01.mp4" />
					</video>
				</div>
				<div class="flex flex-wrap justify-center mt-0">
					<div
						class="relative flex-none mb-4 md:mb-16 lg:mb-24 px-5 mt-0 w-full max-w-full text-center md:w-5/6 md:flex-none lg:w-2/3 lg:flex-none"
					>
						<div
							class="mt-0 text-md md:text-lg leading-8 text-gray-400 text-left md:text-center"
						>
							<div>
								<span class="block">Everything is a node.</span>
								<span class="block md:inline ml-1">Lights</span>
								<span class="block md:inline ml-1"
									>+ Animations</span
								>
								<span class="block md:inline ml-1"
									>+ Custom Materials</span
								>
								<span class="block md:inline ml-1"
									>+ Procedural modeling</span
								>
								& more.
							</div>
							<div>
								100% Procedural.
								<a
									href="/demo"
									class="cursor-pointer border-b-2 border-white hover:opacity-80 whitespace-nowrap"
									>Try our editor
									<span aria-hidden="true">→</span></a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, onMounted } from "vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";

export default defineComponent({
	components: { ChevronDownIcon },
	setup() {
		const sectionElement: Ref<HTMLElement | null> = ref(null);
		const videoElement: Ref<HTMLVideoElement | null> = ref(null);
		function scrollToSection() {
			sectionElement.value?.scrollIntoView({ behavior: "smooth" });
		}

		onMounted(toggleVideoPlay);
		function toggleVideoPlay() {
			if (!videoElement.value) {
				return;
			}
			const video = videoElement.value;
			const observerOptions: IntersectionObserverInit = {
				threshold: 0.5,
			};
			const onObserverChange: IntersectionObserverCallback = (
				entries,
				observer
			) => {
				entries.forEach((entry) => {
					const isVisible: boolean = entry.isIntersecting;
					if (isVisible) {
						console.log("play");
						video.play();
					} else {
						console.log("pause");
						video.pause();
					}
				});
			};
			let observer = new IntersectionObserver(
				onObserverChange,
				observerOptions
			);
			observer.observe(video);
		}

		return { scrollToSection, sectionElement, videoElement };
	},
});
</script>
