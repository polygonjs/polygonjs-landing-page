<template>
	<h1 class="flex items-center space-x-2">
		<img class="inline-block rounded-full h-10 w-10" src="/polygonjs.png" />
		<span>Polygonjs</span>
	</h1>
	<p class="subtitle">Node-Based Design & Animation Tool for the Web</p>
	<p class="block lg:flex items-center space-x-0 lg:space-x-2 max-w-full w-full">
		<a
			href="/demo"
			class="block lg:inline whitespace-nowrap leading-tight border-b-4 border-orange-400 hover:bg-orange-400 dark:border-orange-700 dark:hover:bg-orange-700"
			>Live Demo</a
		>
		<span class="hidden lg:inline text-sm">&bull;</span>
		<a
			href="/docs"
			class="block lg:inline whitespace-nowrap leading-tight border-b-4 border-sky-400 hover:bg-sky-400 dark:border-sky-700 dark:hover:bg-sky-700"
			>Docs & Tutorials</a
		>
		<span class="hidden lg:inline text-sm">&bull;</span>
		<a
			href="/market"
			class="block lg:inline whitespace-nowrap leading-tight border-b-4 border-purple-400 hover:bg-purple-400 dark:border-purple-700 dark:hover:bg-purple-700"
			>Marketplace</a
		>
		<span class="hidden lg:inline text-sm">&bull;</span>
		<a
			href="/pricing"
			class="block lg:inline whitespace-nowrap leading-tight border-b-4 border-teal-400 hover:bg-teal-400 dark:border-teal-700 dark:hover:bg-teal-700"
			>Pricing</a
		>
		<span class="flex-1"></span>
		<a
			v-if="loggedIn"
			:href="dashboardRoute"
			class="block lg:inline whitespace-nowrap leading-tight border-b-4 border-rose-700 hover:bg-rose-700 dark:border-rose-700 dark:hover:bg-rose-700"
			>Dashboard</a
		>
		<a
			v-if="!loggedIn"
			:href="loginRoute"
			class="block lg:inline whitespace-nowrap leading-tight border-b-4 border-fuchsia-400 hover:bg-fuchsia-400 dark:border-fuchsia-700 dark:hover:bg-fuchsia-700"
			>Login</a
		>
		<span v-if="!loggedIn" class="hidden lg:inline text-sm">&bull;</span>
		<a
			v-if="!loggedIn"
			:href="signupRoute"
			class="block lg:inline whitespace-nowrap leading-tight border-b-4 border-fuchsia-400 hover:bg-fuchsia-400 dark:border-fuchsia-700 dark:hover:bg-fuchsia-700"
			>Sign Up</a
		>
	</p>
</template>

<script lang="ts">
import {defineComponent, ref, onMounted} from 'vue';

export default defineComponent({
	components: {},
	setup() {
		const loggedIn = ref(false);
		const loginRoute = ref('/users/login');
		const signupRoute = ref('/users/signup/sign_up');
		const pricingRoute = ref('/pricing');
		const dashboardRoute = ref('/dashboard');
		onMounted(_checkRoutes);
		function _checkRoutes() {
			const element = document.getElementById('landing-page-data');
			if (!element) {
				return;
			}
			loggedIn.value = element.dataset['username'] != null;

			const dataLoginRoute = element.dataset['route-login'];
			if (dataLoginRoute) {
				loginRoute.value = dataLoginRoute;
			}
			const dataSignupRoute = element.dataset['route-signup'];
			if (dataSignupRoute) {
				signupRoute.value = dataSignupRoute;
			}
			const dataPricingRoute = element.dataset['route-pricing'];
			if (dataPricingRoute) {
				pricingRoute.value = dataPricingRoute;
			}
			const dataDashboardRoute = element.dataset['route-dashboard'];
			if (dataDashboardRoute) {
				dashboardRoute.value = dataDashboardRoute;
			}
		}
		return {loggedIn, loginRoute, signupRoute, dashboardRoute};
	},
});
</script>
