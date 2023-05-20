<template>
	<section>
		<div class="epigraph border-l-4 border-teal-400 dark:border-teal-700 pl-4">
			<blockquote>
				<p>
					{{ content }}
				</p>
				<footer>
					<img :src="thumbnailUrl" class="rounded-full w-8 h-8 inline-block mr-2" /><a :href="tweetUrl">{{
						author
					}}</a>
				</footer>
			</blockquote>
		</div>
	</section>
</template>

<script lang="ts">
import {
	defineComponent,
	computed,
	// ref,
	// Ref,
	// ComputedRef,
	// onMounted
} from 'vue';

export default defineComponent({
	name: 'testimonial-tweet',
	// components: {},
	props: {
		author: {
			type: String,
			required: true as true,
		},
		content: {
			type: String,
			required: true as true,
		},
		thumbnailUrl: {
			type: String,
			required: true as true,
		},
		tweetUrl: {
			type: String,
			required: true as true,
		},
	},
	setup(props) {
		return {};
	},
});
</script>
