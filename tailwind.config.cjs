/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
const typography = require("./tailwind.typography.cjs");

module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		// fontSize: {
		// 	'2xs': ['0.75rem', {lineHeight: '1.25rem'}],
		// 	xs: ['0.8125rem', {lineHeight: '1.5rem'}],
		// 	sm: ['0.875rem', {lineHeight: '1.5rem'}],
		// 	base: ['1rem', {lineHeight: '1.75rem'}],
		// 	lg: ['1.125rem', {lineHeight: '1.75rem'}],
		// 	xl: ['1.25rem', {lineHeight: '1.75rem'}],
		// 	'2xl': ['1.5rem', {lineHeight: '2rem'}],
		// 	'3xl': ['1.875rem', {lineHeight: '2.25rem'}],
		// 	'4xl': ['2.25rem', {lineHeight: '2.5rem'}],
		// 	'5xl': ['3rem', {lineHeight: '1'}],
		// 	'6xl': ['3.75rem', {lineHeight: '1'}],
		// 	'7xl': ['4.5rem', {lineHeight: '1'}],
		// 	'8xl': ['6rem', {lineHeight: '1'}],
		// 	'9xl': ['8rem', {lineHeight: '1'}],
		// },
		typography: typography,
		extend: {
			boxShadow: {
				glow: "0 0 4px rgb(0 0 0 / 0.1)",
			},
			maxWidth: {
				lg: "33rem",
				"2xl": "40rem",
				"3xl": "50rem",
				"5xl": "66rem",
			},
			opacity: {
				1: "0.01",
				2.5: "0.025",
				7.5: "0.075",
				15: "0.15",
			},
			saturate: {
				// 5: '.05',
				10: ".1",
				20: ".2",
				30: ".3",
			},
			fontFamily: {
				sans: ["Inter", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				bg: {
					dark: colors.neutral[900],
					DEFAULT: colors.neutral[800],
					medium: colors.neutral[700],
					light: colors.neutral[600],
				},
				text: {
					strong: colors.neutral[100],
					DEFAULT: colors.neutral[200],
					faded: colors.neutral[400],
				},
			},
		},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/aspect-ratio"),
		require("@tailwindcss/typography"),
	],
	corePlugins: {
		aspectRatio: false, // https://github.com/tailwindlabs/tailwindcss-aspect-ratio
	},
	darkMode: "class",
};
