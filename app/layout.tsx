import type { Metadata } from "next";
import './globals.css'
import { cn } from "@/lib/helpers/utils";

export const metadata: Metadata = {
	title: "Landing Page",
	description: "An admin dashboard - learn by making project",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={cn("theme-green", "theme-fuchsia")}>
			<body className="bg-bgNeutral text-fgNeutral theme-light dark:theme-dark transition-colors duration-300">
				{children}
			</body>
		</html>
	);
}
