import ThemeSelect from "@/components/theme/ThemeSelect";
import Link from "next/link";

export default function Theme() {
	return (
		<>
			<header className="flex justify-end p-4">
				<ThemeSelect />
			</header>
			<main className="flex flex-col gap-4 p-4">
				<h1 className="bg-bgPrimary text-fgPrimary p-3 font-bold text-xl">
					Using custom tw theme!
				</h1>
				<p className="p-3">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Voluptas repellat voluptate ea, fuga quia eum cumque
					necessitatibus itaque est nemo, quisquam, accusantium
					praesentium temporibus porro modi mollitia eos provident
					repellendus.
				</p>
				<div>
					<Link
						href={"/"}
						className="p-2 bg-primary-400 text-fgPrimary">
						{" "}
						Go Back
					</Link>
				</div>
			</main>
		</>
	);
}
