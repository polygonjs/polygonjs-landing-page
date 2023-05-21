<script setup lang="ts">
import VideoAuto from './components/utils/VideoAuto.vue';
import Separator from './components/utils/Separator.vue';
// features
import MainTitle from './components/features/MainTitle.vue';
import WhatIsPolygonjs from './components/features/WhatIsPolygonjs.vue';
import NodeBasedWorkflow from './components/features/NodeBasedWorkflow.vue';
import FullyProcedural from './components/features/FullyProcedural.vue';
import WithYourFavoriteStack from './components/features/WithYourFavoriteStack.vue';
import JustForFun from './components/features/JustForFun.vue';
import Footer from './components/features/Footer.vue';
// quotes
import QuoteFHAS from './components/quotes/QuoteFHAS.vue';
import QuoteAndersonMancini from './components/quotes/QuoteAndersonMancini.vue';
import QuoteBryanChrisBrown from './components/quotes/QuoteBryanChrisBrown.vue';
import QuoteCGWiki from './components/quotes/QuoteCGWiki.vue';
// scenes
import Scene01 from './polygonjs/scenes/Scene01.vue';
import Scene02 from './polygonjs/scenes/Scene02.vue';
import Scene03 from './polygonjs/scenes/Scene03.vue';
import Scene04 from './polygonjs/scenes/Scene04.vue';
</script>

<template>
	<article class="relative z-10">
		<MainTitle />
		<Scene01 />
		<WhatIsPolygonjs />
		<QuoteFHAS />
		<!-- <Separator /> -->
		<Scene02 />
		<!-- <Separator />
		<QuoteBryanChrisBrown /> -->
		<NodeBasedWorkflow />
		<VideoAuto filePath="/landing-page/videos/editor.v01" />
		<QuoteCGWiki />
		<FullyProcedural />
		<Scene03 />
		<WithYourFavoriteStack />
		<JustForFun />
		<Scene04 />
		<QuoteAndersonMancini />
		<Footer />
	</article>
</template>

<style scoped></style>
