import Link from "next/link";
import { FaBars } from "react-icons/fa";
import ThemeSelect from "../theme/ThemeSelect";

export default function Navbar() {
	return (
		<header className="w-full h-[60px] bg-bgPrimary text-fgPrimary flex flex-row gap-4 p-4 justify-between items-center">
			<button type="button">
				<FaBars />
			</button>

			<div className="p-2">AppLogo</div>
			<div className=" flex-1 flex items-center justify-end gap-2">
				<Link href={"/"}>Home</Link>
				<ThemeSelect />
			</div>
		</header>
	);
}
