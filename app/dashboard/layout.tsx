import type { Metadata } from "next";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import Navbar from "../ui/navbar/Navbar";
import Sidebar from "../ui/sidebar/Sidebar";

export const metadata: Metadata = {
	title: "Next Dashboard",
	description: "An admin dashboard - learn by making project",
};

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Navbar />
			<div className="flex flex-row w-full justify-between">
				<Sidebar>Nav</Sidebar>
				<main className=" bg-bgNeutral flex-1">{children}</main>
			</div>
		</>
	);
}
