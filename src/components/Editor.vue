<template>
	<section class="text-gray-900 box-border">
		<div class="py-12 leading-7 md:pt-24 md:pb-20 box-border">
			<div class="relative px-10 md:px-5 mx-auto w-full text-gray-900">
				<div class="flex flex-wrap justify-center mt-0">
					<div
						class="relative flex-none mb-4 md:mb-16 lg:mb-24 px-5 mt-0 w-full max-w-full text-center md:w-5/6 md:flex-none lg:w-2/3 lg:flex-none"
					>
						<h6
							class="mt-0 mb-2 text-xs font-normal tracking-widest text-yellow-200 uppercase"
						>
							You may want to try our
						</h6>
						<h1
							class="mt-0 mb-4 text-4xl font-semibold tracking-normal text-white"
						>
							Powerful & Visual Editor
						</h1>
						<div
							class="mt-0 text-md md:text-lg leading-8 text-gray-400"
						>
							<div>
								Create Lights
								<span class="block md:inline"
									>+ Animations</span
								>
								<span class="block md:inline"
									>+ Custom Materials</span
								>
								<span class="block md:inline"
									>+ Procedural modeling</span
								>
								& more.
							</div>
							<div>
								All from the same tool.
								<a
									href="/demo"
									class="cursor-pointer border-b-2 border-white hover:opacity-80 whitespace-nowrap"
									>Try it now
									<span aria-hidden="true">→</span></a
								>
							</div>
						</div>
					</div>
				</div>
				<div class="flex flex-wrap mt-0 max-w-6xl mx-auto">
					<img
						src="/editor_screenshot.webp"
						alt="App screenshot"
						class="rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
	setup() {
		return {};
	},
});
</script>
