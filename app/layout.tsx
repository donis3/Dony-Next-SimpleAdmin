import type { Metadata, Viewport } from "next";
import "./globals.css";
import { cn } from "@/lib/helpers/utils";
import { NeueHaas } from "./fonts/fonts";

export const metadata: Metadata = {
	title: "Landing Page",
	description: "An admin dashboard - learn by making project",
};

export const viewport: Viewport = {
	//Default theme color
	themeColor: "rgb(29 94 29)",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={cn(
				"theme-green",
				"theme-fuchsia",
				"max-w-[100vw] overflow-x-hidden",
				NeueHaas.variable,
			)}>
			<body className="bg-bgNeutral text-fgNeutral theme-light dark:theme-dark transition-colors duration-300 ">
				{children}
			</body>
		</html>
	);
}
