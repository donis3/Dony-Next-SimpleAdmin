"use client";
import { useEffect } from "react";

/**
 * A custom hook for listening system color scheme changes.
 *
 * @param handleChange Handler callback that'll be called when user changes preferred color scheme.
 */
export default function useThemeListener(
	handleChange: (theme: string) => void,
) {
	useEffect(() => {
		function getPreferredColorScheme() {
			if (window.matchMedia) {
				if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
					return "dark";
				} else {
					return "light";
				}
			}
			return "light";
		}

		function setColorScheme(scheme: "dark" | "light" | any) {
			switch (scheme) {
				case "dark":
					handleChange("dark");
					break;
				case "light":
					handleChange("light");
					// Light
					break;
				default:
					// Default
					handleChange("default");
					break;
			}
		}

		function updateColorScheme() {
			setColorScheme(getPreferredColorScheme());
		}

		if (window.matchMedia) {
			var colorSchemeQuery = window.matchMedia(
				"(prefers-color-scheme: dark)",
			);
			colorSchemeQuery.addEventListener("change", updateColorScheme);
		}

		return () => {
			if (window.matchMedia) {
				window
					.matchMedia("(prefers-color-scheme: dark)")
					.removeEventListener("change", updateColorScheme);
			}
		};
	}, []);
}
