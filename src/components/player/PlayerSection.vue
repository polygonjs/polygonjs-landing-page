<template>
	<section class="text-gray-900 box-border">
		<div class="py-12 leading-7 md:pt-24 md:pb-20 box-border">
			<div class="relative px-10 md:px-5 mx-auto w-full text-gray-900">
				<div class="flex flex-wrap justify-center mt-0">
					<div
						class="relative flex-none mb-4 md:mb-8 px-5 mt-0 w-full max-w-full text-center md:w-5/6 md:flex-none lg:w-2/3 lg:flex-none"
					>
						<h6
							class="mt-0 mb-2 text-xs font-normal tracking-widest text-yellow-200 uppercase"
						>
							Let's play
						</h6>
						<h1
							class="mt-0 mb-4 text-4xl font-semibold tracking-normal text-white"
						>
							Try a little game
						</h1>
						<p
							class="mt-0 text-md md:text-lg leading-8 text-gray-400"
						>
							Just explore this tiny little world. Use
							<Key v-for="key of WASD_KEYS" :keyName="key"></Key>
							to move, <Key :keyName="'Shift'"></Key> to run and
							<Key :keyName="'Space'"></Key> to jump.
						</p>
					</div>
				</div>
				<div class="max-w-6xl mx-auto">
					<div class="aspect-w-1 md:aspect-w-2 aspect-h-1">
						<PlayerSectionScene></PlayerSectionScene>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import PlayerSectionScene from "./PlayerSectionScene.vue";
import Key from "./Key.vue";

const WASD_KEYS = ["W", "A", "S", "D"];

export default defineComponent({
	components: { PlayerSectionScene, Key },
	setup() {
		return { WASD_KEYS };
	},
});
</script>
