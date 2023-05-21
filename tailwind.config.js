/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	safelist: [
		{
			pattern: /(bg|border)-(.*)-(700)/,
			variants: ['hover'],
		},
		// 'bg-slate-700',
		// 'bg-gray-700',
		// 'bg-zinc-700',
		// 'bg-neutral-700',
		// 'bg-stone-700',
		// 'bg-red-700',
		// 'bg-orange-700',
		// 'bg-amber-700',
		// 'bg-yellow-700',
		// 'bg-lime-700',
		// 'bg-green-700',
		// 'bg-emerald-700',
		// 'bg-teal-700',
		// 'bg-cyan-700',
		// 'bg-sky-700',
		// 'bg-blue-700',
		// 'bg-indigo-700',
		// 'bg-violet-700',
		// 'bg-purple-700',
		// 'bg-fuchsia-700',
		// 'bg-pink-700',
	],
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio'), require('@tailwindcss/typography')],
	corePlugins: {
		aspectRatio: false, // https://github.com/tailwindlabs/tailwindcss-aspect-ratio
	},
	darkMode: 'class',
};
