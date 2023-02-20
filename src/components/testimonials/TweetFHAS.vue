<template>
	<Tweet
		author="FHAS"
		content="Yes! Yes! Yes! Yes! And Yes! to all of the above! I'm intrigued and ready to dive into it!  This basically sounds like everything I've ever wanted [...]"
		thumbnail-url="/landing-page/images/testimonials/tweets/fhas.jpg"
		tweet-url="https://twitter.com/franckaubry/status/1570386642455642112"
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
