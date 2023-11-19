import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Next Dashboard",
	description: "An admin dashboard - learn by making project",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="theme-green theme-fuchsia">
			<body className="bg-bgNeutral text-fgNeutral theme-light dark:theme-dark">
				{children}
			</body>
		</html>
	);
}
