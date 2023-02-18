<template>
	<div class="py-24 sm:py-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto lg:mx-0 text-center">
				<h2
					class="text-3xl font-bold tracking-tight text-white sm:text-4xl"
				>
					Learn From Examples
				</h2>
				<p
					class="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-600"
				>
					There's nothing like a good starting point to create a
					Scene. Comments attached to nodes will help you follow step
					by step how scenes are built.
				</p>
			</div>
			<ul
				role="list"
				class="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-y-16 gap-x-8 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
			>
				<li v-for="person in people" :key="person.name">
					<img
						class="mx-auto h-24 w-24 rounded-full"
						:src="person.imageUrl"
						alt=""
					/>
					<h3
						class="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900"
					>
						{{ person.name }}
					</h3>
					<p class="text-sm leading-6 text-gray-600">
						{{ person.role }}
					</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// import { __ExamplesRegister__ } from "../../../polygonjs-editor-rails/app/javascript/polygonjs-editor/src/engine/examples/ExamplesRegister";
// console.log(__ExamplesRegister__);

const imageUrl =
	"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80";
const people = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(() => ({
	name: "Michael Foster",
	role: "Co-Founder / CTO",
	imageUrl,
}));
export default defineComponent({
	components: {},
	setup() {
		return {
			people,
		};
	},
});
</script>
