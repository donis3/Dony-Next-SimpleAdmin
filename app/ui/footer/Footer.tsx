import Link from "next/link";

export default function Footer() {
	return (
		<footer className="w-full pt-4 pb-2 px-4 bg-bgPrimary/30 text-fgNeutral">
			<div className="w-full container mx-auto">
				<div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-between">
					<Link
						href="/dashboard"
						className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
						<img
							src="./assets/appicon.png"
							className="h-10"
							alt="Monster Icon"
						/>
						<span className="text-2xl font-bold whitespace-nowrap ">
							MonsterPanel
						</span>
					</Link>
					<ul className="flex flex-wrap items-center text-sm font-medium gap-x-4 ">
						<li>
							<Link href={"/"} className="hover:underline">
								Home
							</Link>
						</li>
						<li>
							<Link
								href={"/dashboard"}
								className="hover:underline">
								Dashboard
							</Link>
						</li>
						<li>
							<Link
								href={"/products"}
								className="hover:underline">
								Products
							</Link>
						</li>
					</ul>
				</div>

				<div className="text-sm py-2 border-t border-fgPrimary/20 mt-8 font-medium text-fgNeutral/70">
					<span>©2023 Deniz Özkan</span>
				</div>
			</div>
		</footer>
	);
}
