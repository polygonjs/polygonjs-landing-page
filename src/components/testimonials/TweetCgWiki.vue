<template>
	<Tweet
		author="cgwiki"
		content="houdini/touch designer in a browser, making interactive web 3d things. pretty cool."
		thumbnail-url="images/testimonials/tweets/cgwiki.jpg"
		tweet-url="https://twitter.com/thecgwiki/status/1621259701869752323"
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
