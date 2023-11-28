import Link from "next/link";
import ClientComponent from "./ui/ClientComponent";
import ThemeSelect from "@/app/ui/theme/ThemeSelect";

export default function Home() {
	return (
		<>
			<header className="flex justify-between p-2 h-[60px] gap-2 items-center bg-primary-800 dark:bg-primary-950 text-primary-50">
				<div className="flex-1">
					<Link
						href={"/"}
						className="p-2 text-xl font-bold flex flex-row gap-1 items-center">
						Dony Admin Design
					</Link>
				</div>

				<div>
					<ThemeSelect />
				</div>
			</header>
			<main className="flex flex-col gap-y-10 p-4">
				<section>
					<h2 className="bg-bgPrimary text-fgPrimary p-3 font-bold text-lg">
						Looking for the dashboard?
					</h2>
					<div className="p-3">
						<Link
							href={"/dashboard"}
							className="p-2 bg-primary-300 text-primary-900 rounded-sm">
							Go to dashboard
						</Link>
					</div>
				</section>
			</main>
		</>
	);
}
