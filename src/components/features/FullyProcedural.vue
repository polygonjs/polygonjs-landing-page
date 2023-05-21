<script setup lang="ts"></script>

<template>
	<section>
		<h2>Fully Procedural</h2>
		<p>
			It is not just the visual editor that's procedural. The core library is built to be
			<span class="bg-green-300 dark:bg-green-800">fully procedural from the ground up.</span>
		</p>
		<p>
			This means that even once your scene is exported,
			<span class="bg-orange-300 dark:bg-orange-800">you can still change any parameter</span> and see the changes
			propagate through the scene. This is great for product configurators or game dynamics. Or wherever you need
			to tie the 3D scene with any other code. Use
			<span class="bg-sky-300 dark:bg-sky-800">our simple javascript API</span>
			to update the scene based on any user interaction.
		</p>
		<!-- <pre><code language="js" class="bg-black px-2 mx-0">
// get a node using its path
const box1 = scene.node('/geo1/box1');

// update its 'size' parameter
box1.p.size.set(2);

// That's it! The scene will update instantly.
		</code></pre> -->
	</section>
</template>

<style scoped></style>
