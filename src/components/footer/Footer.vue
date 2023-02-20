<template>
	<section>
		<div
			class="px-8 pt-32 mx-auto lg:px-12 xl:px-16 max-w-7xl text-gray-400"
		>
			<div class="flex flex-wrap items-start justify-between pb-20">
				<a
					href="/"
					class="flex items-center w-auto text-lg font-bold md:w-1/6 hidden md:visible"
				>
					<img
						class="h-6 w-auto rounded-full"
						src="/landing-page/polygonjs.png"
						alt="Polygonjs"
					/>
					<span class="ml-2">Polygonjs</span>
				</a>
				<div
					class="grid w-full grid-cols-2 mt-20 sm:grid-cols-4 gap-y-16 lg:gap-x-8 md:w-5/6 md:mt-0 md:pr-6"
				>
					<div
						v-for="section of FOOTER_SECTIONS"
						class="md:justify-self-end"
					>
						<h3 class="font-semibold text-gray-200 font-semibold">
							{{ section }}
						</h3>
						<ul class="mt-6 space-y-4 text-sm">
							<li v-for="link of LINKS_BY_SECTION[section] || []">
								<a
									:href="link.href"
									class="relative inline-block text-gray-400 hover:text-gray-100"
								>
									<span>{{ link.label }}</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div
				class="flex flex-col items-center justify-between py-10 border-t-2 border-solid lg:flex-row border-gray-800"
			>
				<ul class="flex flex-wrap space-x-5 text-xs">
					<!-- <li class="mb-6 text-center flex-full lg:flex-none lg:mb-0">
						&copy; 2021 Tails.
					</li>
					<li class="lg:ml-6">
						<a
							href="#_"
							class="relative inline-block text-black group"
						>
							<span
								class="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
							></span>
							<span>Privacy Policy</span>
						</a>
					</li>
					<li class="ml-auto mr-auto text-center lg:ml-6 lg:mr-0">
						<a
							href="#_"
							class="relative inline-block text-black group"
						>
							<span
								class="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
							></span>
							<span>Disclaimers</span>
						</a>
					</li>
					<li class="lg:ml-6">
						<a
							href="#_"
							class="relative inline-block text-black group"
						>
							<span
								class="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
							></span>
							<span>Terms and Conditions</span>
						</a>
					</li> -->
				</ul>
				<ul class="flex items-center mt-0 md:mt-10 space-x-5 lg:mt-0">
					<li v-for="icon of FOOTER_BOTTOM_ICONS">
						<a
							:href="icon.href"
							class="text-gray-600 hover:text-gray-300"
						>
							<span class="sr-only">{{ icon.name }}</span>
							<component :is="icon.component"></component>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import TwitterIcon from "../icons/TwitterIcon.vue";
import GithubIcon from "../icons/GithubIcon.vue";
import YoutubeIcon from "../icons/YoutubeIcon.vue";
import DiscordIcon from "../icons/DiscordIcon.vue";
import DiscourseIcon from "../icons/DiscourseIcon.vue";

type FooterIcon =
	| typeof TwitterIcon
	| typeof GithubIcon
	| typeof YoutubeIcon
	| typeof DiscordIcon
	| typeof DiscourseIcon;
interface FooterBottomIcon {
	name: string;
	href: string;
	component: FooterIcon;
}
const FOOTER_BOTTOM_ICONS: FooterBottomIcon[] = [
	{
		name: "twitter",
		href: "/twitter",
		component: TwitterIcon,
	},
	{
		name: "github",
		href: "/github",
		component: GithubIcon,
	},
	{
		name: "youtube",
		href: "/youtube",
		component: YoutubeIcon,
	},
	{
		name: "discord",
		href: "/discord",
		component: DiscordIcon,
	},
	{
		name: "Discourse",
		href: "/forum",
		component: DiscourseIcon,
	},
];

enum FooterSection {
	DISCOVER = "Discover",
	EXAMPLES = "Examples",
	COMMUNITY = "Community",
	INTEGRATIONS = "Integrations",
}

const FOOTER_SECTIONS: FooterSection[] = [
	FooterSection.DISCOVER,
	FooterSection.EXAMPLES,
	FooterSection.COMMUNITY,
	FooterSection.INTEGRATIONS,
];
interface FooterLink {
	label: string;
	href: string;
}
const LINKS_BY_SECTION: Record<FooterSection, FooterLink[]> = {
	[FooterSection.DISCOVER]: [
		{ label: "Documentation", href: "/docs" },
		{ label: "Tutorials", href: "/docs/tutorials" },
		{ label: "Install", href: "/docs/install" },
		{ label: "Marketplace", href: "/market" },
	],
	[FooterSection.EXAMPLES]: [
		// { label: "Raymarching", href: "/docs/examples/raymarching" },
		{
			label: "Custom Materials",
			href: "/docs/examples-category/Custom%20Materials",
		},
		{
			label: "States & Events",
			href: "/docs/examples-category/State%20&%20Events",
		},
		{ label: "Physics", href: "/docs/examples-category/Physics" },
		{ label: "Effects", href: "/docs/examples-category/Effects" },
		{ label: "View All ->", href: "/docs/examples" },
	],
	[FooterSection.COMMUNITY]: [
		{ label: "Discord", href: "/discord" },
		{ label: "Forum", href: "/forum" },
		{ label: "Twitter", href: "/twitter" },
		{ label: "Github", href: "/github" },
		{ label: "Youtube", href: "/youtube" },
		{ label: "About", href: "/about" },
	],
	[FooterSection.INTEGRATIONS]: [
		{ label: "React", href: "/docs/integrations/react" },
		{ label: "Vue", href: "/docs/integrations/vue" },
		{ label: "Threejs", href: "/docs/integrations/threejs" },
		{
			label: "React Three Fiber",
			href: "/docs/integrations/reactthreefiber",
		},
		{ label: "Webflow", href: "/docs/integrations/webflow" },
		{ label: "Mapbox", href: "/docs/integrations/mapbox" },
		{ label: "View All ->", href: "/docs/integrations" },
	],
};

export default defineComponent({
	components: {
		TwitterIcon,
		GithubIcon,
		YoutubeIcon,
		DiscordIcon,
		DiscourseIcon,
	},
	setup() {
		return { FOOTER_SECTIONS, LINKS_BY_SECTION, FOOTER_BOTTOM_ICONS };
	},
});
</script>
