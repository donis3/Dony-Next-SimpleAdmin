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
	return (
		<>
			<DashboardContextProvider>
				<Navbar />
				<Sidebar />
			</DashboardContextProvider>
			<main className="pt-[60px] w-full">{children}</main>
		</>
	);
}
