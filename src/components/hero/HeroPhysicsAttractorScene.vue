<template>
	<div class="absolute w-full h-full z-0">
		<PhysicsAttractor></PhysicsAttractor>
	</div>
</template>

<script lang="ts">
import PhysicsAttractor from "../../polygonjs/scenes/PhysicsAttractor.vue";
import { defineComponent } from "vue";

export default defineComponent({
	components: { PhysicsAttractor },
	setup() {
		return {};
	},
});
</script>
