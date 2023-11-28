import localFont from "next/font/local";

// Font files can be colocated inside of `app`
export const NeueHaas = localFont({
	src: [
		{
			path: "./neuehaas/NeueHaasDisplayXThin.ttf",
			style: "normal",
			weight: "100",
		},
		{
			path: "./neuehaas/NeueHaasDisplayXThinItalic.ttf",
			style: "italic",
			weight: "100",
		},
		{
			path: "./neuehaas/NeueHaasDisplayThin.ttf",
			style: "normal",
			weight: "200",
		},
		{
			path: "./neuehaas/NeueHaasDisplayThinItalic.ttf",
			style: "italic",
			weight: "200",
		},
		{
			path: "./neuehaas/NeueHaasDisplayLight.ttf",
			style: "normal",
			weight: "300",
		},
		{
			path: "./neuehaas/NeueHaasDisplayLightItalic.ttf",
			style: "italic",
			weight: "300",
		},
		{
			path: "./neuehaas/NeueHaasDisplayRoman.ttf",
			style: "normal",
			weight: "400",
		},
		{
			path: "./neuehaas/NeueHaasDisplayRomanItalic.ttf",
			style: "italic",
			weight: "400",
		},
		{
			path: "./neuehaas/NeueHaasDisplayMedium.ttf",
			style: "normal",
			weight: "500",
		},
		{
			path: "./neuehaas/NeueHaasDisplayMediumItalic.ttf",
			style: "italic",
			weight: "500",
		},
		{
			path: "./neuehaas/NeueHaasDisplayBold.ttf",
			style: "normal",
			weight: "600",
		},
		{
			path: "./neuehaas/NeueHaasDisplayBoldItalic.ttf",
			style: "italic",
			weight: "600",
		},
		{
			path: "./neuehaas/NeueHaasDisplayBlack.ttf",
			style: "normal",
			weight: "700",
		},
		{
			path: "./neuehaas/NeueHaasDisplayBlackItalic.ttf",
			style: "italic",
			weight: "700",
		},
	],
	variable: "--font-neuehaas",
	display: "swap",
});
