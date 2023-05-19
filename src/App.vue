<script setup lang="ts">
import VideoAuto from './components/utils/VideoAuto.vue';
import Separator from './components/features/Separator.vue';
import WhatIsPolygonjs from './components/features/WhatIsPolygonjs.vue';
import NonDestructiveWorkflow from './components/features/NonDestructiveWorkflow.vue';
import QuickLinks from './components/features/QuickLinks.vue';
// import Scene01 from "./polygonjs/scenes/Scene01.vue";
</script>

<template>
	<article>
		<h1 class="flex items-center space-x-2">
			<img class="inline-block rounded-full h-10 w-10" src="/polygonjs.png" />
			<span>Polygonjs</span>
		</h1>
		<p class="subtitle">Node-Based Design & Animation Tool for the Web</p>
		<p class="flex items-center space-x-2">
			<a
				href="/docs"
				class="whitespace-nowrap leading-tight border-b-4 border-sky-400 hover:bg-sky-400 dark:border-sky-700 dark:hover:bg-sky-700"
				>Docs & Tutorials</a
			>
			<span class="text-sm">&bull;</span>
			<a
				href="/demo"
				class="whitespace-nowrap leading-tight border-b-4 border-orange-400 hover:bg-orange-400 dark:border-orange-700 dark:hover:bg-orange-700"
				>Live Demo</a
			>
			<span class="text-sm">&bull;</span>
			<a
				href="/market"
				class="whitespace-nowrap leading-tight border-b-4 border-purple-400 hover:bg-purple-400 dark:border-purple-700 dark:hover:bg-purple-700"
				>Marketplace</a
			>
			<span class="text-sm">&bull;</span>
			<a
				href="/pricing"
				class="whitespace-nowrap leading-tight border-b-4 border-teal-400 hover:bg-teal-400 dark:border-teal-700 dark:hover:bg-teal-700"
				>Pricing</a
			>
		</p>
		<Separator />
		<WhatIsPolygonjs />
		<Separator />
		<NonDestructiveWorkflow />
		<VideoAuto filePath="/landing-page/videos/editor.v01"></VideoAuto>
		<Separator />
		<QuickLinks />
	</article>
</template>

<style scoped></style>
