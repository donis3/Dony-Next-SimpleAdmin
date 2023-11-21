"use client";

import { ReactNode } from "react";

export default function Sidebar({ children }: { children: ReactNode }) {
	return (
		<nav className="min-h-[calc(100vh-60px)] bg-bgPrimary border-t border-primary-900  transition-all duration-500 w-1/4">
			{children}
		</nav>
	);
}
