import { cn } from "@/lib/helpers/utils";
import ClientComponent from "./ClientComponent";

export default function Home() {
	return (
		<main className="p-4">
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
		</main>
	);
}
