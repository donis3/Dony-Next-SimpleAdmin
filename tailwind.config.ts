import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
				sm: "640px",
				// => @media (min-width: 640px) { ... }

				md: "768px",
				// => @media (min-width: 768px) { ... }

				lg: "1024px",
				// => @media (min-width: 1024px) { ... }

				xl: "1280px",
				// => @media (min-width: 1280px) { ... }

				"2xl": "1536px",
				// => @media (min-width: 1536px) { ... },

				"3xl": "1921px",
				// => @media (min-width: 1536px) { ... }
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			// Custom Theme
			colors: {
				primary: {
					50: "rgb(var(--color-primary-50) / <alpha-value>)",
					100: "rgb(var(--color-primary-100) / <alpha-value>)",
					200: "rgb(var(--color-primary-200) / <alpha-value>)",
					300: "rgb(var(--color-primary-300) / <alpha-value>)",
					400: "rgb(var(--color-primary-400) / <alpha-value>)",
					500: "rgb(var(--color-primary-500) / <alpha-value>)",
					600: "rgb(var(--color-primary-600) / <alpha-value>)",
					700: "rgb(var(--color-primary-700) / <alpha-value>)",
					800: "rgb(var(--color-primary-800) / <alpha-value>)",
					900: "rgb(var(--color-primary-900) / <alpha-value>)",
					950: "rgb(var(--color-primary-950) / <alpha-value>)",
				},
				bgNeutral: "rgb(var(--bgNeutral) / <alpha-value>)",
				fgNeutral: "rgb(var(--fgNeutral) / <alpha-value>)",
				bgPrimary: "rgb(var(--bgPrimary) / <alpha-value>)",
				fgPrimary: "rgb(var(--fgPrimary) / <alpha-value>)",
			},
		},
	},
	plugins: [],
};
export default config;
