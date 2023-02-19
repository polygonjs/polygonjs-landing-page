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
							Keen to jump in?
						</h6>
						<h2
							class="mt-0 mb-4 text-4xl font-semibold tracking-normal text-white"
						>
							Learn From Examples
						</h2>
						<div
							class="mt-0 text-md md:text-lg leading-8 text-gray-400"
						>
							<div>
								There's nothing like a good starting point to
								get a sense of how things work.
							</div>
							<div>
								<a
									href="/docs/examples"
									class="cursor-pointer border-b-2 border-white hover:opacity-80 whitespace-nowrap"
									>View All Examples
									<span aria-hidden="true">→</span></a
								>
							</div>
						</div>
					</div>
					<ul
						role="list"
						class="mx-auto mt-20 grid max-w-2xl grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-y-16 gap-x-16 text-center lg:mx-0 lg:max-w-none"
					>
						<Example
							v-for="exampleData in exampleDatas"
							:key="exampleData.name"
							:example-name="exampleData.name"
							:exampleData="exampleData"
						>
						</Example>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

import { EXAMPLE_NAMES, EXAMPLE_LABELS_BY_NAME } from "../common/ExampleNames";
import { createExampleData } from "../common/Example";

import Example from "./Example.vue";

export default defineComponent({
	components: { Example },
	setup() {
		const exampleDatas = computed(() =>
			EXAMPLE_NAMES.map((e) => {
				const label = EXAMPLE_LABELS_BY_NAME[e as any];
				return createExampleData(e, label || e);
			})
		);

		return {
			EXAMPLE_NAMES,
			exampleDatas,
		};
	},
});
</script>
