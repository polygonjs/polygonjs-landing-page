<template>
	<Tweet
		author="Andersonmancini"
		content="I'm speechless😍. Can't imagine all the amazing things we will be able to do with it. One life isn't enough to learn all things we have to haha."
		thumbnail-url="images/testimonials/tweets/andersonmancini.jpg"
		tweet-url="https://twitter.com/Andersonmancini/status/1513903934691291138"
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
