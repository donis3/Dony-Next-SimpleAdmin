"use client";
import Link from "next/link";
import { FaBars, FaHome, FaTimes } from "react-icons/fa";
import ThemeSelect from "../theme/ThemeSelect";
import { useContext } from "react";
import { DashboardContext } from "@/app/(admin)/DashboardContext";
import { cn } from "@/lib/helpers/utils";

export default function Navbar() {
	const { isMenuOpen, toggleMenu } = useContext(DashboardContext);
	return (
		<header className="w-full overflow-hidden h-[60px] bg-primary-800 dark:bg-primary-950 text-primary-50 flex flex-row px-2 py-4 md:px-4 justify-between items-center fixed top-0 z-40 border-b border-primary-950 shadow-sm">
			<button
				type="button"
				onClick={() => toggleMenu(!isMenuOpen)}
				className={cn(
					"p-2  rounded-md text-xl transition-colors duration-500",
					isMenuOpen ? "bg-white/10" : "bg-black/10",
				)}>
				{isMenuOpen ? <FaTimes /> : <FaBars />}
			</button>

			<Link href={"/dashboard"} className="p-2 text-xl font-bold">
				DonyAdmin
			</Link>
			<div className=" flex-1 flex items-center justify-end gap-2">
				<Link
					href={"/"}
					className="p-2 bg-primary-900 text-primary-50 rounded-full opacity-25 hover:opacity-100 transition-opacity duration-500">
					<FaHome aria-label="Home Icon" />
				</Link>
				<ThemeSelect />
			</div>
		</header>
	);
}
