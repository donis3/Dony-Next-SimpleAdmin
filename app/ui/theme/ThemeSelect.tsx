"use client";
import useStoredState from "@/lib/useStoredState";
import useThemeListener from "@/lib/useThemeListener";
import { FaSun, FaMoon, FaPalette } from "react-icons/fa";
import { useEffect } from "react";
import { cn } from "@/lib/helpers/utils";

const themeNames = ["theme-fuchsia", "theme-green"];

export default function ThemeSelect() {
	const [mode, setMode] = useStoredState<string>("light", "theme-mode");
	const [theme, setTheme] = useStoredState<string>("fuchsia", "theme");

	//Handler for operating system dark mode changes
	const handleSystemThemeChange = (currentTheme: "dark" | "light" | any) => {
		if (currentTheme === "dark") {
			setMode("dark");
		} else {
			setMode("light");
		}
	};
	//Listener for dark mode system changes
	useThemeListener(handleSystemThemeChange);

	//Manual theme changing
	useEffect(() => {
		const newThemeClass = `theme-${theme}`;
		const newMode = mode === "dark" ? "dark" : "";

		//document.documentElement.className = `${newThemeClass} ${newMode}`;

		//Remove other themes and add current theme
		document.documentElement.classList.remove(...themeNames, "dark");
		if (newMode) document.documentElement.classList.add("dark");
		document.documentElement.classList.add(newThemeClass);

		//Change meta theme-color for mobile and chrome views. Navbar color should match it.
		//Get current theme color var from css
		const themeColor = getComputedStyle(document.body).getPropertyValue(
			"--theme-color",
		);
		//Switch meta tag
		if (themeColor) {
			const ogcolor = document.querySelector('meta[name="theme-color"]');
			ogcolor?.setAttribute("content", themeColor);
		}
	}, [theme, mode]);

	return (
		<>
			<button
				title={`Toggle ${mode === "dark" ? "light" : "dark"} mode`}
				className="p-2 bg-primary-900 text-primary-50 rounded-full opacity-25 hover:opacity-100 transition-opacity duration-500"
				onClick={() =>
					mode === "dark" ? setMode("light") : setMode("dark")
				}>
				{mode === "dark" ? (
					<FaSun aria-label="Sun Icon" />
				) : (
					<FaMoon aria-label="Moon Icon" />
				)}
			</button>

			<button
				title="Change theme"
				className={cn(
					"p-2 text-primary-50 rounded-full opacity-25 hover:opacity-100 transition-opacity duration-500",
					theme === "fuchsia" ? "bg-pink-600" : "bg-green-600",
				)}
				onClick={() =>
					theme === "fuchsia"
						? setTheme("green")
						: setTheme("fuchsia")
				}>
				<FaPalette aria-label="Palette Icon" />
			</button>
		</>
	);
}
