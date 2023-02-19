<template>
	<div class="dark bg-gray-900">
		<Hero></Hero>
		<PlayerSection></PlayerSection>
		<Editor></Editor>
		<Integrations></Integrations>
		<Examples></Examples>
		<Footer></Footer>
	</div>
</template>

<script setup lang="ts">
import Hero from "./components/hero/Hero.vue";
import Editor from "./components/Editor.vue";
import PlayerSection from "./components/player/PlayerSection.vue";
import Integrations from "./components/integrations/Integrations.vue";
import Examples from "./components/examples/Examples.vue";
import Footer from "./components/footer/Footer.vue";
</script>
