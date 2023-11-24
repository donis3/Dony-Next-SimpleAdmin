"use client";
import { ReactNode, createContext, useEffect, useState } from "react";

const DashboardContext = createContext({
	isMenuOpen: false,
	toggleMenu: (forcedState?: boolean) => {},
});

export default function DashboardContextProvider({
	children,
}: {
	children: ReactNode;
}) {
	const [menuOpen, setMenuOpen] = useState(false);

	/**
	 * If param not provided Toggle menu true or false
	 * @param forcedState force to this value instead of toggle
	 */
	const toggleMenu = (forcedState?: boolean) => {
		if (typeof forcedState === "boolean") {
			return setMenuOpen(forcedState);
		}
		return setMenuOpen(!menuOpen);
	};

	useEffect(() => {
		//Disable body scroll when menu is open
		if (menuOpen === true)
			document.documentElement.classList.add("scroll-lock");
		else document.documentElement.classList.remove("scroll-lock");
	}, [menuOpen]);

	return (
		<DashboardContext.Provider
			value={{ isMenuOpen: menuOpen, toggleMenu: toggleMenu }}>
			{children}
		</DashboardContext.Provider>
	);
}

export { DashboardContext };
