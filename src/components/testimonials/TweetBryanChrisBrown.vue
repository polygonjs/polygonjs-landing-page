<template>
	<Tweet
		author="Bryan Chris Brown"
		content="woah what!!! Incredible! :O"
		thumbnail-url="/landing-page/images/testimonials/tweets/bryanchrisbrown.jpg"
		tweet-url="https://twitter.com/BryanChrisBrown/status/1583535420025229312"
	>
	</Tweet>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Tweet from "./Tweet.vue";

export default defineComponent({
	name: "testimonial-tweet-bryan-chris-brown",
	components: { Tweet },
	setup(props) {
		return {};
	},
});
</script>
