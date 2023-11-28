import Link from "next/link";
import ClientComponent from "./ui/ClientComponent";
import ThemeSelect from "@/app/ui/theme/ThemeSelect";
import { FaArrowRight, FaGit, FaGithub, FaGithubAlt } from "react-icons/fa";
import Footer from "./ui/footer/Footer";

export default function Home() {
	return (
		<div className="min-h-dscreen flex flex-col gap-10 justify-between">
			<header className="flex justify-between p-2 h-[60px] gap-2 items-center bg-primary-800 dark:bg-primary-950 text-primary-50">
				<div className="flex-1">
					<Link
						href={"/"}
						className="p-2 text-xl font-bold flex flex-row gap-1 items-center">
						Dony-Next-SimpleAdmin
					</Link>
				</div>

				<div>
					<ThemeSelect />
				</div>
			</header>
			<main className="flex flex-col gap-y-10 p-4 flex-1 ">
				<section className="">
					<div className="container mx-auto w-full grid md:grid-cols-12 gap-10 items-center">
						<div className="md:col-span-7  text-center md:text-start">
							<img
								className="w-1/2 mx-auto md:hidden"
								src="./assets/monster-showcase.png"
								alt="Admin Panel screenshot"
							/>
							<h1 className="text-4xl font-extrabold tracking-tight leading-none p-2">
								A Simple Starter Admin Template
							</h1>
							<h2 className="text-sm font-light tracking-tight leading-none px-2">
								by Deniz Özkan
							</h2>
							<p className="p-2  text-fgNeutral/90 mt-3">
								Welcome to Monster Panel, a simple responsive
								next.js & tailwind template for admin panel
								dashboards. All components are hand crafted
								without any ui libraries.
							</p>
							<ul className="py-2 px-4  text-fgNeutral/90 leading-snug text-start space-y-1">
								<li>✓ Simple and responsive design</li>
								<li>✓ Easy to expand upon</li>
								<li>✓ Very few dependencies</li>
								<li>✓ Next.js 14 & App router</li>
								<li>
									✓ Using clsx and tailwind-merge for tailwind
									conflict resolutions and conditional
									classes.
								</li>
								<li>✓ Changeable theme using tailwind</li>
								<li>✓ Remembers selected Theme & Dark mode</li>
								<li>
									✓ Detects system dark/light mode changes
								</li>
								<li>✓ Css transitions for animations</li>
								<li>
									✓ Responsive sidebar menu uses dynamic
									viewport height
								</li>
								<li>
									✓ Multiple Custom hooks including persistent
									state
								</li>
								<li>
									✓ Format numbers and dates according to
									client browser locale
								</li>
								<li>
									✓ Local font loaded using next/font/local
									and imported via tailwind config.
								</li>
							</ul>

							<div className="mt-10 flex flex-row gap-2 items-center justify-center md:justify-start">
								<Link
									href="/dashboard"
									className="px-5 py-3  text-base font-medium text-center rounded-lg bg-primary-700 hover:bg-primary-800 text-primary-50 flex flex-row gap-2 items-center">
									View Dashboard
									<FaArrowRight />
								</Link>
								<Link
									href="https://github.com/donis3/Dony-Next-SimpleAdmin"
									className="px-5 py-3  text-base font-medium text-center rounded-lg border border-neutral-300 hover:bg-primary-800 flex flex-row gap-2 items-center">
									View Repo
									<FaGithub />
								</Link>
							</div>
							<p className="p-2 font-light text-fgNeutral/70 text-sm mt-2 px-10 md:px-0">
								This project is created for learning purposes.
								Please do appropriate tests before deploying to
								production environments.
							</p>
						</div>
						<div className="hidden md:col-span-5 md:block">
							<img
								src="./assets/monster-showcase.png"
								alt="Admin Panel screenshot"
							/>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
