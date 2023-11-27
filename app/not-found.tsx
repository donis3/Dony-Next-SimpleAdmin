import Link from "next/link";
import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/helpers/utils";
import ThemeSelect from "./ui/theme/ThemeSelect";
import { FaArrowLeft, FaHome } from "react-icons/fa";
import BackBtn from "./ui/BackBtn";

export const metadata: Metadata = {
	title: "Landing Page",
	description: "An admin dashboard - learn by making project",
};

export default function NotFound() {
	return (
		<html
			lang="en"
			className={cn(
				"theme-green",
				"theme-fuchsia",
				"max-w-[100vw] overflow-x-hidden",
			)}>
			<body className="bg-bgNeutral text-fgNeutral theme-light dark:theme-dark transition-colors duration-300">
				<header className="flex justify-end p-4">
					<ThemeSelect />
				</header>
				<main className="flex flex-col gap-y-10 p-4">
					<section>
						<h1 className="bg-bgPrimary/20 text-fgPrimary p-3 font-bold text-xl rounded-md">
							Not Found!
						</h1>
						<p className="p-3">Requested page doesn't exist!</p>
						<div className="w-full p-2 flex gap-2 flex-row justify-center items-center">
							<BackBtn className="hover:bg-neutral-400/40">
								<FaArrowLeft /> Back
							</BackBtn>
							<Link
								href="/"
								className="px-4 py-2 rounded-md bg-bgPrimary text-fgPrimary flex gap-2 items-center">
								<FaHome /> Home
							</Link>
						</div>
					</section>
				</main>
			</body>
		</html>
	);
}
