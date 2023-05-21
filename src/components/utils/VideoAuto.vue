<template>
	<video class="max-w-full" ref="videoElement" :poster="posterUrl" muted loop>
		<source :src="videoUrl" />
	</video>
</template>

<script lang="ts">
import {defineComponent, Ref, ref, onMounted, computed} from 'vue';
import {ChevronDownIcon} from '@heroicons/vue/20/solid';

export default defineComponent({
	components: {ChevronDownIcon},
	props: {
		filePath: {
			type: String,
			required: true,
		},
	},
	setup(props) {
		const videoElement: Ref<HTMLVideoElement | null> = ref(null);

		onMounted(toggleVideoPlay);
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

		const videoUrl = computed(() => `${props.filePath}.mp4`);
		const posterUrl = computed(() => `${props.filePath}.webp`);

		return {videoElement, videoUrl, posterUrl};
	},
});
</script>
