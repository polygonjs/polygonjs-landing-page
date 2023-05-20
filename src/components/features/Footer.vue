<template>
	<section>
		<h2>What's next?</h2>
		<p>
			If you haven't yet, you could start by going through the
			<a class="border-b-4 border-sky-400 hover:bg-sky-400 dark:border-sky-700" href="/docs">Documentation</a>. Or
			you can go straight to the
			<a class="border-b-4 border-lime-400 hover:bg-lime-400 dark:border-lime-700" href="/docs/tutorials"
				>Video Tutorials</a
			>.
		</p>
		<p>
			Or if you want to play with our editor, go to the
			<a class="border-b-4 border-orange-400 hover:bg-orange-400 dark:border-orange-700" href="/demo"
				>Live Demo</a
			>
			or
			<a class="border-b-4 border-purple-400 hover:bg-purple-400 dark:border-purple-700" href="/docs/examples"
				>Examples</a
			>.
		</p>

		<div v-for="section of FOOTER_SECTIONS">
			<p class="space-x-2">
				<span class="block lg:inline font-bold">{{ section }}:</span>
				<a
					v-for="link of LINKS_BY_SECTION[section] || []"
					:href="link.href"
					:class="[
						'block lg:inline border-b-4 hover:opacity-80',
						`border-${link.color}-400 dark:border-${link.color}-700`,
					]"
				>
					<Component
						class="inline mr-1"
						v-if="COMPONENT_BY_LINK[link.href]"
						:is="COMPONENT_BY_LINK[link.href]"
					/>
					<span>{{ link.label }}</span>
				</a>
			</p>
		</div>
	</section>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import TwitterIcon from '../icons/TwitterIcon.vue';
import GithubIcon from '../icons/GithubIcon.vue';
import YoutubeIcon from '../icons/YoutubeIcon.vue';
import DiscordIcon from '../icons/DiscordIcon.vue';
import DiscourseIcon from '../icons/DiscourseIcon.vue';
import {TAILWIND_COLORS, TailwindColor} from '../../core/Tailwind';

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
		name: 'twitter',
		href: '/twitter',
		component: TwitterIcon,
	},
	{
		name: 'github',
		href: '/github',
		component: GithubIcon,
	},
	{
		name: 'youtube',
		href: '/youtube',
		component: YoutubeIcon,
	},
	{
		name: 'discord',
		href: '/discord',
		component: DiscordIcon,
	},
	{
		name: 'Discourse',
		href: '/forum',
		component: DiscourseIcon,
	},
];
const COMPONENT_BY_LINK: Record<string, FooterIcon> = {
	'/twitter': TwitterIcon,
	'/github': GithubIcon,
	'/youtube': YoutubeIcon,
	'/discord': DiscordIcon,
	'/forum': DiscourseIcon,
};

enum FooterSection {
	DISCOVER = 'Discover',
	EXAMPLES = 'Examples',
	COMMUNITY = 'Community',
	INTEGRATIONS = 'Integrations',
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
	color: TailwindColor;
}
const MIN = 5;
let currentColorIndex = TAILWIND_COLORS.length - 1;
function nextColor() {
	currentColorIndex--;
	if (currentColorIndex < MIN) {
		currentColorIndex = TAILWIND_COLORS.length - 1;
	}
	const color = TAILWIND_COLORS[currentColorIndex];
	if (color) {
		return color;
	} else {
		// currentColorIndex = START;
		return TAILWIND_COLORS[0];
	}
}

const LINKS_BY_SECTION: Record<FooterSection, FooterLink[]> = {
	[FooterSection.DISCOVER]: [
		{label: 'Demo', href: '/demo', color: TailwindColor.ORANGE},
		{label: 'Documentation', href: '/docs', color: TailwindColor.SKY},
		{label: 'Changelog', href: '/docs/changelog', color: nextColor()},
		{label: 'Tutorials', href: '/docs/tutorials', color: TailwindColor.LIME},
		{label: 'Install', href: '/docs/install', color: nextColor()},
		{label: 'Pricing', href: '/pricing', color: nextColor()},
		{label: 'Marketplace', href: '/market', color: nextColor()},
	],
	[FooterSection.EXAMPLES]: [
		// { label: "Raymarching", href: "/docs/examples/raymarching" },
		{
			label: 'Custom Materials',
			href: '/docs/examples-category/Custom%20Materials',
			color: nextColor(),
		},
		{
			label: 'States & Events',
			href: '/docs/examples-category/State%20&%20Events',
			color: nextColor(),
		},
		{label: 'Physics', href: '/docs/examples-category/Physics', color: nextColor()},
		{label: 'Effects', href: '/docs/examples-category/Effects', color: nextColor()},
		{label: 'View All ->', href: '/docs/examples', color: TailwindColor.PURPLE},
	],
	[FooterSection.COMMUNITY]: [
		{label: 'Discord', href: '/discord', color: nextColor()},
		{label: 'Forum', href: '/forum', color: nextColor()},
		{label: 'Twitter', href: '/twitter', color: nextColor()},
		{label: 'Github', href: '/github', color: nextColor()},
		{label: 'Youtube', href: '/youtube', color: nextColor()},
		{label: 'Affiliates', href: '/affiliates', color: nextColor()},
		{label: 'About', href: '/about', color: nextColor()},
	],
	[FooterSection.INTEGRATIONS]: [
		{label: 'React', href: '/docs/integrations/react', color: nextColor()},
		{label: 'Vue', href: '/docs/integrations/vue', color: nextColor()},
		{label: 'Threejs', href: '/docs/integrations/threejs', color: nextColor()},
		{
			label: 'React Three Fiber',
			href: '/docs/integrations/react_three_fiber',
			color: nextColor(),
		},
		{label: 'Webflow', href: '/docs/integrations/webflow', color: nextColor()},
		{label: 'Mapbox', href: '/docs/integrations/mapbox', color: nextColor()},
		{label: 'View All ->', href: '/docs/integrations', color: nextColor()},
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
		return {FOOTER_SECTIONS, LINKS_BY_SECTION, FOOTER_BOTTOM_ICONS, TAILWIND_COLORS, COMPONENT_BY_LINK};
	},
});
</script>
