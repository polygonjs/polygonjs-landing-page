<template>
	<video class="max-w-full" ref="videoElement" :poster="posterUrl" muted loop>
		<source :src="videoUrl" />
	</video>
</template>

<script lang="ts">
import {defineComponent, Ref, ref, onMounted, computed, nextTick} from 'vue';
import {ChevronDownIcon} from '@heroicons/vue/20/solid';

export default defineComponent({
	components: {ChevronDownIcon},
	props: {
		filePath: {
			type: String,
			required: true,
		},
		widths: {
			type: Array as () => number[],
			required: true as true,
		},
	},
	setup(props) {
		const videoElement: Ref<HTMLVideoElement | null> = ref(null);
		const sortedWidths: Ref<number[]> = ref(props.widths.sort((a, b) => a - b));
		const expectedWidth: Ref<number> = ref(sortedWidths.value[sortedWidths.value.length - 1]);
		onMounted(findExpectedVideoSize);

		function findExpectedVideoSize() {
			if (!videoElement.value) {
				return;
			}
			const parentElement = videoElement.value.parentElement;
			if (!parentElement) {
				return;
			}
			const elementWidth = parentElement.getBoundingClientRect().width;
			const foundWidth = sortedWidths.value.find((width) => elementWidth <= width);
			if (foundWidth != null) {
				expectedWidth.value = foundWidth;
			}
			nextTick(() => {
				toggleVideoPlay();
			});
		}
		function toggleVideoPlay() {
			if (!videoElement.value) {
				return;
			}
			const video = videoElement.value;
			const observerOptions: IntersectionObserverInit = {
				threshold: 0.5,
			};
			const onObserverChange: IntersectionObserverCallback = (entries, observer) => {
				entries.forEach((entry) => {
					const isVisible: boolean = entry.isIntersecting;
					if (isVisible) {
						// console.log('play');
						video.play();
					} else {
						// console.log('pause');
						video.pause();
					}
				});
			};
			let observer = new IntersectionObserver(onObserverChange, observerOptions);
			observer.observe(video);
		}

		const videoUrl = computed(() => `${props.filePath}.${expectedWidth.value}x.mp4`);
		const posterUrl = computed(() => `${props.filePath}.webp`);

		return {videoElement, videoUrl, posterUrl};
	},
});
</script>
