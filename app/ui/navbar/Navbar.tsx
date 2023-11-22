"use client";
import Link from "next/link";
import { FaBars, FaHome, FaTimes } from "react-icons/fa";
import ThemeSelect from "../theme/ThemeSelect";
import { useContext } from "react";
import { DashboardContext } from "@/app/(admin)/dashboard/DashboardContext";

export default function Navbar() {
	const { isMenuOpen, toggleMenu } = useContext(DashboardContext);
	return (
		<header className="w-full h-[60px] bg-primary-800 text-primary-50 flex flex-row px-2 py-4 md:px-4 justify-between items-center absolute top-0 z-20 border-b border-primary-800">
			<button
				type="button"
				onClick={() => toggleMenu()}
				className="p-2 bg-black/10 rounded-md text-xl">
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
