<template>
	<div class="dark bg-gray-900">
		<div class="absolute isolate h-full w-full max-w-full overflow-hidden">
			<HeroGrid></HeroGrid>
			<HeroGradient></HeroGradient>
		</div>
		<HeroPhysicsAttractorScene></HeroPhysicsAttractorScene>
		<Hero></Hero>
		<!-- <TweetBryanChrisBrown></TweetBryanChrisBrown> -->
		<Editor></Editor>
		<TweetCgWiki></TweetCgWiki>
		<Integrations></Integrations>
		<TweetAndersonMancini></TweetAndersonMancini>
		<Examples></Examples>
		<TweetFHAS></TweetFHAS>
		<Footer></Footer>
	</div>
</template>

<script setup lang="ts">
import HeroPhysicsAttractorScene from "./components/hero/HeroPhysicsAttractorScene.vue";
import Hero from "./components/hero/Hero.vue";
import HeroGrid from "./components/hero/HeroGrid.vue";
import HeroGradient from "./components/hero/HeroGradient.vue";
import Editor from "./components/Editor.vue";
// import PlayerSection from "./components/player/PlayerSection.vue";
import Integrations from "./components/integrations/Integrations.vue";
import Examples from "./components/examples/Examples.vue";
import Footer from "./components/footer/Footer.vue";

// import TweetBryanChrisBrown from "./components/testimonials/TweetBryanChrisBrown.vue";
import TweetCgWiki from "./components/testimonials/TweetCgWiki.vue";
import TweetAndersonMancini from "./components/testimonials/TweetAndersonMancini.vue";
import TweetFHAS from "./components/testimonials/TweetFHAS.vue";
</script>
