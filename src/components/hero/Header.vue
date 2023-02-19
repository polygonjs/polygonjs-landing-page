<template>
	<Popover class="relative">
		<div class="mx-auto max-w-7xl px-6">
			<div
				class="flex items-center justify-between py-6 md:justify-start md:space-x-10"
			>
				<div class="flex justify-start lg:w-0 lg:flex-1">
					<a href="/">
						<img
							class="h-8 w-auto sm:h-10 rounded-full inline"
							src="/polygonjs.png"
							alt="Polygonjs"
						/>
						<span class="ml-1 text-gray-200">Polygonjs</span>
					</a>
				</div>
				<div class="-my-2 -mr-2 md:hidden">
					<PopoverButton
						class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
					>
						<span class="sr-only">Open menu</span>
						<Bars3Icon class="h-6 w-6" aria-hidden="true" />
					</PopoverButton>
				</div>
				<nav class="hidden space-x-10 md:flex">
					<a
						href="/pricing"
						class="text-base font-medium text-gray-500 hover:text-gray-400"
						>Pricing</a
					>
					<a
						href="/market"
						class="text-base font-medium text-gray-500 hover:text-gray-400"
						>Marketplace</a
					>
					<a
						href="/docs"
						class="text-base font-medium text-gray-500 hover:text-gray-400"
						>Docs</a
					>
				</nav>
				<div
					class="hidden items-center justify-end md:flex md:flex-1 lg:w-0"
				>
					<a
						v-if="loggedIn"
						:href="dashboardRoute"
						class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-sm border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700"
						>Dashboard</a
					>
					<a
						v-if="!loggedIn"
						:href="loginRoute"
						class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
						>Sign in</a
					>
					<a
						v-if="!loggedIn"
						:href="signupRoute"
						class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-sm border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
						>Sign up</a
					>
				</div>
			</div>
		</div>

		<transition
			enter-active-class="duration-200 ease-out"
			enter-from-class="opacity-0 scale-95"
			enter-to-class="opacity-100 scale-100"
			leave-active-class="duration-100 ease-in"
			leave-from-class="opacity-100 scale-100"
			leave-to-class="opacity-0 scale-95"
		>
			<PopoverPanel
				focus
				class="z-50 absolute inset-x-0 top-0 origin-top-right transform p-2 mt-2 transition md:hidden"
			>
				<div
					class="divide-y-2 divide-gray-900 rounded-lg bg-black shadow-lg ring-1 ring-black ring-opacity-5"
				>
					<div class="px-5 pt-5 pb-6">
						<div class="flex items-center justify-between">
							<div>
								<img
									class="h-8 w-auto rounded-full"
									src="/polygonjs.png"
									alt="Polygonjs"
								/>
							</div>
							<div class="-mr-2">
								<PopoverButton
									class="inline-flex items-center justify-center rounded-md bg-black p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
								>
									<span class="sr-only">Close menu</span>
									<XMarkIcon
										class="h-6 w-6"
										aria-hidden="true"
									/>
								</PopoverButton>
							</div>
						</div>
						<!-- <div class="mt-6">
							<nav class="grid gap-y-8">
								<a
									href="/pricing"
									class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
								>
									<span
										class="ml-3 text-base font-medium text-gray-900"
										>Pricing</span
									>
								</a>
							</nav>
						</div> -->
					</div>
					<div class="space-y-6 py-6 px-5">
						<div
							class="grid grid-cols-1 gap-y-4 gap-x-8 text-center"
						>
							<a
								href="/pricing"
								class="text-base font-medium text-gray-400 hover:text-gray-300"
								>Pricing</a
							>

							<a
								href="/docs"
								class="text-base font-medium text-gray-400 hover:text-gray-300"
								>Docs</a
							>
							<a
								href="/market"
								class="text-base font-medium text-gray-400 hover:text-gray-300"
								>Marketplace</a
							>
						</div>
						<div>
							<a
								v-if="loggedIn"
								:href="dashboardRoute"
								class="flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700"
								>Dashboard</a
							>
							<a
								v-if="!loggedIn"
								:href="signupRoute"
								class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
								>Sign up</a
							>
							<p
								class="mt-6 text-center text-base font-medium text-gray-500"
							>
								<a
									v-if="!loggedIn"
									:href="loginRoute"
									class="text-indigo-600 hover:text-indigo-500"
									>Sign in</a
								>
							</p>
						</div>
					</div>
				</div>
			</PopoverPanel>
		</transition>
	</Popover>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

import {
	Popover,
	PopoverButton,
	PopoverGroup,
	PopoverPanel,
} from "@headlessui/vue";
import {
	ArrowPathIcon,
	Bars3Icon,
	BookmarkSquareIcon,
	CalendarIcon,
	ChartBarIcon,
	CursorArrowRaysIcon,
	LifebuoyIcon,
	PhoneIcon,
	PlayIcon,
	ShieldCheckIcon,
	Squares2X2Icon,
	XMarkIcon,
} from "@heroicons/vue/24/outline";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";

export default defineComponent({
	components: {
		Popover,
		PopoverButton,
		PopoverGroup,
		PopoverPanel,
		ArrowPathIcon,
		Bars3Icon,
		BookmarkSquareIcon,
		CalendarIcon,
		ChartBarIcon,
		CursorArrowRaysIcon,
		LifebuoyIcon,
		PhoneIcon,
		PlayIcon,
		ShieldCheckIcon,
		Squares2X2Icon,
		XMarkIcon,
		ChevronDownIcon,
	},
	setup() {
		const loggedIn = ref(false);
		const loginRoute = ref("/users/login");
		const signupRoute = ref("/users/signup/sign_up");
		const pricingRoute = ref("/pricing");
		const dashboardRoute = ref("/dashboard");
		onMounted(_checkRoutes);
		function _checkRoutes() {
			const element = document.getElementById("landing-page-data");
			if (!element) {
				return;
			}
			loggedIn.value = element.dataset["username"] != null;

			const dataLoginRoute = element.dataset["route-login"];
			if (dataLoginRoute) {
				loginRoute.value = dataLoginRoute;
			}
			const dataSignupRoute = element.dataset["route-signup"];
			if (dataSignupRoute) {
				signupRoute.value = dataSignupRoute;
			}
			const dataPricingRoute = element.dataset["route-pricing"];
			if (dataPricingRoute) {
				pricingRoute.value = dataPricingRoute;
			}
			const dataDashboardRoute = element.dataset["route-dashboard"];
			if (dataDashboardRoute) {
				dashboardRoute.value = dataDashboardRoute;
			}
		}
		return { loggedIn, loginRoute, signupRoute, dashboardRoute };
	},
});
</script>
