<template>
	<Quote
		author="FHAS"
		content="Yes! Yes! Yes! Yes! And Yes! to all of the above! I'm intrigued and ready to dive into it!  This basically sounds like everything I've ever wanted [...]"
		thumbnail-url="/landing-page/images/testimonials/tweets/fhas.jpg"
		tweet-url="https://twitter.com/franckaubry/status/1570386642455642112"
	/>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Quote from './Quote.vue';

export default defineComponent({
	components: {
		Quote,
	},
	setup() {
		return {};
	},
});
</script>
