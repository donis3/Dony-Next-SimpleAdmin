import ClientComponent from "./ClientComponent";
import ThemeSelect from "@/components/theme/ThemeSelect";

export default function Home() {
	return (
		<>
			<header className="flex justify-end p-4">
				<ThemeSelect />
			</header>
			<main className="flex flex-col gap-y-10 p-4">
				<section>
					<h1 className="bg-bgPrimary text-fgPrimary p-3 font-bold text-xl">
						Using custom tw theme!
					</h1>
					<p className="p-3">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Voluptas repellat voluptate ea, fuga quia eum
						cumque necessitatibus itaque est nemo, quisquam,
						accusantium praesentium temporibus porro modi mollitia
						eos provident repellendus.
					</p>
				</section>

				<section>
					<h2 className="bg-bgPrimary text-fgPrimary p-3 font-bold text-lg">
						A client component!
					</h2>
					<div className="p-3">
						<ClientComponent />
					</div>
				</section>
			</main>
		</>
	);
}
