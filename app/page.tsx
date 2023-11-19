import { cn } from "@/lib/helpers/utils";
import ClientComponent from "./ClientComponent";
import Link from "next/link";
import ThemeSelect from "@/components/theme/ThemeSelect";

export default function Home() {
	return (
		<main className="p-4">
			<header className="flex justify-end p-4">
				<ThemeSelect />
			</header>

			<h1
				className={cn("font-bold", {
					"text-red-400": true,
					"text-green-400": false,
				})}>
				Homepage
			</h1>
			<div className="w-full min-h-[100px] p-4 ">Testing Cw</div>
			<div className="border-t">
				<h2 className="p-2">A client component here!</h2>
				<ClientComponent />
			</div>
			<div className="w-full p-4 border-t mt-10">
				<Link
					href={"/theme"}
					className="bg-red-400 p-2 rounded-md text-red-50">
					Go to custom theme page
				</Link>
			</div>
		</main>
	);
}
