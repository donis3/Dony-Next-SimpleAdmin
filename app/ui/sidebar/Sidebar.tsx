"use client";

import { DashboardContext } from "@/app/(admin)/dashboard/DashboardContext";
import { cn } from "@/lib/helpers/utils";
import useClickOutside from "@/lib/useClickOutside";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useContext, useEffect } from "react";
import { FaBox, FaBoxes, FaEllipsisV, FaHome, FaUserCircle } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

export default function Sidebar() {
	const pathname = usePathname();
	const { isMenuOpen, toggleMenu } = useContext(DashboardContext);
	const navRef = useClickOutside<HTMLDivElement>(
		() => toggleMenu(false),
		"header",
	);
	useEffect(() => {
		//Close sidebar if path changes
		toggleMenu(false);
	}, [pathname]);

	return (
		<aside
			className={cn(
				"fixed left-0 top-0 bottom-0 h-screen  flex flex-col justify-between",
				"w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4",
				"transition-transform duration-300 ease-in-out",
				" bg-bgPrimary dark:bg-primary-800 shadow-sm z-10",
				isMenuOpen ? "translate-x-0" : "-translate-x-full",
			)}
			ref={navRef}>
			<nav
				className="w-full p-3 flex-1 overflow-y-auto no-scrollbar" // Accessibility configuration.
				aria-hidden={isMenuOpen ? "false" : "true"}
				tabIndex={isMenuOpen ? 1 : -1}>
				{/* Start navigation items */}
				<ul className="mt-[60px]">
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

			<div className="bg-neutral-100  dark:bg-neutral-900 text-fgNeutral w-full px-3 py-4 border-t-2 border-primary-900 flex flex-row justify-between gap-2 items-center group">
				<div className="flex items-center gap-2 text-xl font-medium opacity-70 group-hover:opacity-100">
					<FaUserCircle className="text-blue-700" />
					Username
				</div>
				<button type="button">
					<FaEllipsisV />
				</button>
			</div>
		</aside>
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
				"transition-transform duration-300 w-full text-lg p-2  rounded-md  font-medium flex gap-2 items-center",
				"bg-primary-300 text-primary-700 border border-primary-500 ",
				"dark:bg-primary-700 dark:text-primary-100 border border-primary-500 ",
				"hover:bg-primary-900 hover:text-primary-100 hover:border-primary-950 hover:scale-105 ",
				"dark:hover:bg-primary-100 dark:hover:text-primary-900 ",
				"focus:border-primary-900 focus:scale-105",
				active &&
					"dark:bg-primary-300 border-primary-900 dark:text-primary-950 bg-primary-600 text-primary-50",
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
	// Test
	{
		categoryName: "Management",
		items: [
			{ itemName: "Products", icon: <FaBox />, href: "/products" },
			{ itemName: "Categories", icon: <FaBoxes />, href: "/categories" },
			{ itemName: "Categories", icon: <FaBoxes />, href: "/categories" },
			{ itemName: "Categories", icon: <FaBoxes />, href: "/categories" },
			{ itemName: "Categories", icon: <FaBoxes />, href: "/categories" },
			{ itemName: "Categories", icon: <FaBoxes />, href: "/categories" },
		],
	},
	// Test
	{
		categoryName: "Management",
		items: [
			{ itemName: "Products", icon: <FaBox />, href: "/products" },
			{ itemName: "Categories", icon: <FaBoxes />, href: "/categories" },
			{ itemName: "Categories", icon: <FaBoxes />, href: "/categories" },
			{ itemName: "Categories", icon: <FaBoxes />, href: "/categories" },
			{ itemName: "Categories", icon: <FaBoxes />, href: "/categories" },
			{ itemName: "Categories", icon: <FaBoxes />, href: "/categories" },
		],
	},
	// Test
	{
		categoryName: "Management",
		items: [
			{ itemName: "Products", icon: <FaBox />, href: "/products" },
			{ itemName: "Categories", icon: <FaBoxes />, href: "/categories" },
			{ itemName: "Categories", icon: <FaBoxes />, href: "/categories" },
			{ itemName: "Categories", icon: <FaBoxes />, href: "/categories" },
			{ itemName: "Categories", icon: <FaBoxes />, href: "/categories" },
			{ itemName: "Categories", icon: <FaBoxes />, href: "/categories" },
		],
	},
	// Test
	{
		categoryName: "Management",
		items: [
			{ itemName: "Products", icon: <FaBox />, href: "/products" },
			{ itemName: "Categories", icon: <FaBoxes />, href: "/categories" },
			{ itemName: "Categories", icon: <FaBoxes />, href: "/categories" },
			{ itemName: "Categories", icon: <FaBoxes />, href: "/categories" },
			{ itemName: "Categories", icon: <FaBoxes />, href: "/categories" },
			{ itemName: "Categories", icon: <FaBoxes />, href: "/categories" },
		],
	},
];
