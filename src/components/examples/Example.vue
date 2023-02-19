<template>
	<a
		:href="exampleData.href"
		class="group relative block hover:opacity-90 mx-auto lg:mx-0 cursor-pointer"
		@mouseenter="onMouseenter"
		@mouseleave="onMouseleave"
		:title="exampleData.name"
	>
		<div
			class="relative rounded-lg overflow-hidden bg-gray-400 h-40 w-40 min-w-40 bg-cover bg-center"
			:style="thumbnailStyleObject"
		>
			<video
				v-if="videoDisplayed"
				ref="video"
				class="absolute inset-0 rounded-lg h-40 m-0 max-w-fit pointer-events-none"
				loop
				autoplay
				muted
			>
				<source :src="exampleData.videoUrl" type="video/mp4" />
			</video>
		</div>
		<span class="truncate text-xs max-w-40 w-40 block text-gray-200 pt-4">
			{{ exampleData.label }}
		</span>
	</a>
</template>

<script lang="ts">
import {
	defineComponent,
	computed,
	ref,
	Ref,
	// ComputedRef,
	// onMounted
} from "vue";
import {
	ExampleData,
	// EXAMPLES_ROOT_URL
} from "../common/Example";
// import type {ExamplesRegisterClass} from '../../engine/examples/ExamplesRegister';
// import {ExamplesRegisterAsync} from '../../engine/examples/ExamplesRegisterAsync';
// import {docsRoute} from '../../routes';
// import {DocsRoute} from '../pages/Pages';

// function removeSpaces(word: string): string {
// 	return word.replace(/ /g, '').replace(/_/g, '');
// }

export default defineComponent({
	name: "docs-example",
	components: {},

	props: {
		exampleName: {
			type: String,
			required: true as true,
		},
		exampleData: {
			type: Object as () => ExampleData,
			required: true as true,
		},
	},

	setup(props) {
		const videoDisplayed = ref(false);
		const video: Ref<HTMLVideoElement | null> = ref(null);
		// function _thumbnailUrl(exampleName: string) {
		// 	const short = removeSpaces(exampleName).toLowerCase();
		// 	return `${EXAMPLES_ROOT_URL}/${short}/image.webp`;
		// }
		// function _videoUrl(exampleName: string) {
		// 	const short = removeSpaces(exampleName).toLowerCase();
		// 	return `${EXAMPLES_ROOT_URL}/${short}/video.mp4`;
		// }
		// onMounted(loadExamples)
		// let ExamplesRegister: ExamplesRegisterClass|undefined
		// const _loaded:Ref<boolean>=ref(false)
		// 	const loading:Ref<boolean>=ref(false)
		// async function loadExamples(){
		// 	_loaded.value=false
		// 	ExamplesRegister = await ExamplesRegisterAsync()
		// 	_loaded.value=true
		// }

		// const exampleData: ComputedRef<ExampleData|null> = computed(() => {
		// 	if(!(_loaded.value&&ExamplesRegister)){
		// 		return null
		// 	}
		// 	const example = ExamplesRegister.exampleFromName(props.exampleName);
		// 	if (!example) {
		// 		console.log(`no example found from name`, props.exampleName);
		// 	}
		// 	const label = example?.label();
		// 	const href = ExamplesRegister.route(props.exampleName) || docsRoute(DocsRoute.EXAMPLES);
		// 	const data: ExampleData = {
		// 		name: props.exampleName,
		// 		label: label ? label : props.exampleName,
		// 		thumbnailUrl: _thumbnailUrl(props.exampleName),
		// 		videoUrl: _videoUrl(props.exampleName),
		// 		href: href,
		// 	};
		// 	return data;
		// });
		const thumbnailStyleObject = computed(() => {
			return {
				backgroundImage: props.exampleData
					? `url('${props.exampleData.thumbnailUrl}')`
					: "",
			};
		});

		function onMouseenter() {
			videoDisplayed.value = true;
			video.value?.play();
		}
		function onMouseleave() {
			// videoPlaying.value=false
			video.value?.pause();
		}

		return {
			video,
			videoDisplayed,
			thumbnailStyleObject,
			onMouseenter,
			onMouseleave,
		};
	},
});
</script>
