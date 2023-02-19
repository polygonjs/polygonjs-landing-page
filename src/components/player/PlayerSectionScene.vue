<template>
	<Player
		@keydown.prevent.stop="doNothing"
		@keyup.prevent.stop="doNothing"
	></Player>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Player from "../../polygonjs/scenes/Player.vue";

export default defineComponent({
	components: { Player },
	setup() {
		function doNothing(event: KeyboardEvent) {}
		return { doNothing };
	},
});
</script>
