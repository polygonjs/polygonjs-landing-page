<template>
	<Quote
		author="cgwiki"
		content="houdini/touch designer in a browser, making interactive web 3d things. pretty cool."
		thumbnail-url="/landing-page/images/testimonials/tweets/cgwiki.jpg"
		tweet-url="https://twitter.com/thecgwiki/status/1621259701869752323"
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
