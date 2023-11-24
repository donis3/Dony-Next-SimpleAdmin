import { cn } from "@/lib/helpers/utils";
import { FaBox } from "react-icons/fa";

type InfoCardProps = {
	title: string;
	subtext?: string;
	subtextStyle?: "positive" | "negative";
	children: React.ReactNode;
	icon?: React.ReactNode;
};

export default function InfoCard({
	title,
	subtext,
	subtextStyle,
	children,
	icon,
}: InfoCardProps) {
	return (
		<div className="bg-fgNeutral/20 p-4 rounded-md flex flex-row justify-between gap-5 items-center">
			{icon && <div className="text-xl text-bgNeutral">{icon}</div>}
			<div className="flex-1 flex flex-col gap-1 ">
				<h3 className="font-light text-sm">{title}</h3>
				<span className="text-2xl font-bold">{children}</span>
				{subtext && (
					<span
						className={cn(
							"text-xs dark:text-neutral-400 text-neutral-600",

							subtextStyle === "positive" &&
								"text-green-700 dark:text-green-500",
							subtextStyle === "negative" &&
								"text-red-700 dark:text-red-500",
						)}>
						{subtext}
					</span>
				)}
			</div>
		</div>
	);
}
