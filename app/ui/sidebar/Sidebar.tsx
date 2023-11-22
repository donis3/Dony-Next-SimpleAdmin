"use client";

import { DashboardContext } from "@/app/(admin)/dashboard/DashboardContext";
import { cn } from "@/lib/helpers/utils";
import useClickOutside from "@/lib/useClickOutside";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useContext } from "react";
import { FaBox, FaBoxes, FaHome } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

export default function Sidebar() {
	const pathname = usePathname();
	const { isMenuOpen, toggleMenu } = useContext(DashboardContext);
	const navRef = useClickOutside<HTMLDivElement>(() => toggleMenu(false));

	return (
		<nav
			ref={navRef}
			className={cn(
				"fixed top-0 left-0 min-h-screen bg-bgPrimary border-t border-primary-900  transition-transform duration-300 ease-in-out overflow-hidden whitespace-nowrap w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 pt-[60px] shadow-md",
				isMenuOpen ? "translate-x-0" : "-translate-x-full",
			)}
			aria-hidden={isMenuOpen ? "false" : "true"}
			tabIndex={isMenuOpen ? 10 : -1}>
			{/* Start navigation items */}

			<ul className="p-3">
				{navigationItems.map((cat, i) => {
					return (
						<NavCategory
							key={`category-${i}`}
							catName={cat.categoryName}>
							{cat.items.map((item, y) => {
								return (
									<NavItem
										icon={item.icon}
										itemName={item.itemName}
										href={item.href}
										active={pathname === item.href}
										key={`item-${i}-${y}`}
									/>
								);
							})}
						</NavCategory>
					);
				})}
			</ul>
		</nav>
	);
}

function NavCategory({
	catName,
	children,
	...props
}: {
	catName: string | null;
	children: ReactNode;
}) {
	return (
		<li {...props} className="mt-3">
			{catName && (
				<h3 className="w-full  opacity-70 text-sm text-fgPrimary">
					{catName}
				</h3>
			)}
			<div className="flex flex-col w-full items-center justify-start gap-2 mt-1">
				{children}
			</div>
		</li>
	);
}

function NavItem({
	itemName,
	icon,
	active,
	href,
	...props
}: {
	itemName: string;
	icon: ReactNode;
	href: string;
	active?: boolean;
}) {
	return (
		<Link
			className={cn(
				"transition-transform duration-300 w-full text-lg p-2 bg-primary-300 rounded-md text-primary-900 font-medium flex gap-2 items-center border border-primary-500 hover:bg-primary-900 hover:text-primary-100",
				"hover:bg-primary-900 hover:text-primary-100 hover:scale-105 ",
				"focus:border-primary-900 focus:scale-105",
				active && "bg-primary-600 border-primary-900 text-primary-50",
			)}
			href={href}
			{...props}>
			{icon}
			{itemName}
		</Link>
	);
}

const navigationItems = [
	{
		categoryName: null,
		items: [
			{ itemName: "Home", icon: <FaHome />, href: "/" },
			{
				itemName: "Dashboard",
				icon: <MdDashboard />,
				href: "/dashboard",
			},
		],
	},
	{
		categoryName: "Management",
		items: [
			{ itemName: "Products", icon: <FaBox />, href: "/products" },
			{ itemName: "Categories", icon: <FaBoxes />, href: "/categories" },
		],
	},
];
