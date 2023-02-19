<template>
	<span class="bg-black rounded-sm px-1 ml-1 border border-white text-sm">{{
		keyName
	}}</span>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
	props: {
		keyName: String,
	},
	setup() {
		return {};
	},
});
</script>
