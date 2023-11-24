import { cn } from "@/lib/helpers/utils";

type CardProps = {
	title?: string;
	children: React.ReactNode;
};

export default function Card({ title, children }: CardProps) {
	return (
		<div className="flex flex-col justify-between bg-neutral-200 text-neutral-900 dark:bg-neutral-800 rounded-md dark:text-neutral-100">
			{title && (
				<h2 className="p-2 rounded-t-md dark:bg-neutral-900 font-medium text-base bg-neutral-300">
					Card Title
				</h2>
			)}
			<div className={cn("px-2 pt-2 pb-2 text-sm", title && "pb-4")}>
				{children}
			</div>
		</div>
	);
}
