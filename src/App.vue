<template>
	<div class="dark bg-gray-900">
		<Header></Header>
		<Hero></Hero>
		<PlayerSection></PlayerSection>
		<Editor></Editor>
		<Integrations></Integrations>
		<Examples></Examples>
	</div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Editor from "./components/Editor.vue";
import PlayerSection from "./components/player/PlayerSection.vue";
import Integrations from "./components/Integrations.vue";
import Examples from "./components/Examples.vue";
</script>
