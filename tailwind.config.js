/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio'), require('@tailwindcss/typography')],
	corePlugins: {
		aspectRatio: false, // https://github.com/tailwindlabs/tailwindcss-aspect-ratio
	},
	darkMode: 'class',
};
