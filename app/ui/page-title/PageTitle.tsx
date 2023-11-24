import { ReactNode } from "react";
import { FaSearch } from "react-icons/fa";

export default function PageTitle({ children }: { children: ReactNode }) {
	return (
		<div className="w-full p-4 rounded-md bg-fgNeutral/20 flex flex-col gap-2 justify-between items-center md:flex-row">
			<h1 className="flex-1 font-bold text-xl text-fgNeutral/80">
				{children}
			</h1>
			<div className="flex py-0 pl-2 pr-0 gap-2 items-center bg-fgNeutral/40 rounded-md text-base">
				<FaSearch className="text-sm text-bgNeutral/50" />
				<input
					type="search"
					name="search"
					className="p-1 bg-transparent rounded-md"
					placeholder="search"
					autoComplete="false"
					defaultValue={""}
				/>
			</div>
		</div>
	);
}
