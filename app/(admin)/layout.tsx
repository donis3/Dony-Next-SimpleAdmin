import type { Metadata } from "next";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import Navbar from "../ui/navbar/Navbar";
import Sidebar from "../ui/sidebar/Sidebar";
import DashboardContextProvider from "./dashboard/DashboardContext";

export const metadata: Metadata = {
	title: "DonyAdmin - Admin Zone",
	description: "An admin dashboard - learn by making project",
};

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const rows = [];
	for (let i = 1; i <= 100; i++) {
		rows.push(("Hello from row" + i) as string);
	}
	return (
		<>
			<DashboardContextProvider>
				<Navbar />
				<Sidebar />
				{/* <aside className="fixed left-0 top-0 w-1/4 bg-primary-600 h-screen flex flex-col justify-between">
					<nav className="mt-[60px] bg-gray-500 w-full p-3 flex-1 overflow-y-scroll">
						
					</nav>
					<div className="bg-red-400 w-full p-3">User</div>
				</aside> */}
			</DashboardContextProvider>
			<main className="pt-[60px] w-full transition-transform duration-300 z-0 ease-in-out">
				<div className="container mx-auto ">{children}</div>
			</main>
		</>
	);
}
