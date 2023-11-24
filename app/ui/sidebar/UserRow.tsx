"use client";
import { cn } from "@/lib/helpers/utils";
import { useEffect, useRef, useState } from "react";
import {
	FaEllipsisV,
	FaSignInAlt,
	FaSignOutAlt,
	FaUserCircle,
} from "react-icons/fa";

export default function UserRow({ user = false }) {
	const [menuOpen, setMenuOpen] = useState(false);
	const userRowRef = useRef(null);

	useEffect(() => {

	},[])

	if (!user) {
		return (
			<div className="w-full">
				<div
					ref={userRowRef}
					className="bg-neutral-100  dark:bg-neutral-900 text-fgNeutral w-full px-3 py-4 flex flex-row justify-between gap-2 items-center group relative  pb-8 md:pb-4">
					<button
						type="button"
						className="w-full  p-2 rounded-md hover:bg-neutral-200  dark:hover:bg-neutral-800 flex gap-2 items-center justify-center text-blue-700 font-medium">
						<FaSignInAlt className="text-blue-700" />
						Log In
					</button>
				</div>
			</div>
		);
	}
	return (
		<div className="w-full">
			<div
				className={cn(
					"w-full bg-neutral-100  dark:bg-neutral-900 p-4  left-0   z-30 transition-transform ease-in-out duration-300",
					menuOpen === false && "hidden",
				)}>
				<UserCtxMenu />
			</div>

			<div
				ref={userRowRef}
				className="bg-neutral-100  dark:bg-neutral-900 text-fgNeutral w-full px-3 py-4 flex flex-row justify-between gap-2 items-center group relative pb-8 md:pb-4">
				<div className="flex items-center gap-2 text-base font-medium opacity-70 group-hover:opacity-100">
					<FaUserCircle className="text-blue-700" />
					Username
				</div>
				<button
					type="button"
					onClick={() => setMenuOpen(!menuOpen)}
					className=" py-1 px-2 rounded-md">
					<FaEllipsisV />
				</button>
			</div>
		</div>
	);
}

function UserCtxMenu() {
	return (
		<ul>
			<li className="border-b dark:border-neutral-800">
				<button
					type="button"
					className="w-full  p-2 rounded-md text-left  hover:bg-neutral-200 flex gap-2 items-center text-blue-700">
					<FaUserCircle />
					Profile
				</button>
			</li>
			<li className="border-b dark:border-neutral-800">
				<button
					type="button"
					className="w-full  p-2 rounded-md text-left hover:bg-neutral-200 flex gap-2 items-center text-blue-700">
					<FaSignOutAlt />
					LogOut
				</button>
			</li>
		</ul>
	);
}
