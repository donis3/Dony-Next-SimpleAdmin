"use client";
import useStoredState from "@/lib/useStoredState";
import useThemeListener from "@/lib/useThemeListener";
import { useEffect } from "react";

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

		document.documentElement.className = `${newThemeClass} ${newMode}`;
	}, [theme, mode]);

	return (
		<div className="flex gap-2">
			<button
				onClick={() =>
					mode === "dark" ? setMode("light") : setMode("dark")
				}>
				{mode}
			</button>

			<button
				onClick={() =>
					theme === "fuchsia"
						? setTheme("green")
						: setTheme("fuchsia")
				}>
				{theme}
			</button>
		</div>
	);
}
