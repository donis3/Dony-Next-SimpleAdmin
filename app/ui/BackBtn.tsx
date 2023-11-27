"use client";

import { cn } from "@/lib/helpers/utils";
import { useRouter } from "next/navigation";

export default function BackBtn({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	const router = useRouter();
	return (
		<button
			type="button"
			className={cn(
				"px-4 py-2 rounded-md bg-neutral-400/20 text-fgNeutral flex gap-2 items-center",
				className,
			)}
			onClick={() => router.back()}>
			{children}
		</button>
	);
}
