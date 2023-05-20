<template>
	<Quote
		author="Bryan Chris Brown"
		content="woah what!!! Incredible! :O"
		thumbnail-url="/landing-page/images/testimonials/tweets/bryanchrisbrown.jpg"
		tweet-url="https://twitter.com/BryanChrisBrown/status/1583535420025229312"
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
