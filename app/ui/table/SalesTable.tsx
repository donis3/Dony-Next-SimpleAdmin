"use client";
import salesData from "./salesData";
import { cn } from "@/lib/helpers/utils";
import useLocale from "@/lib/useLocale";
import usePagination from "@/lib/usePagination";
import { FaArrowLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function SalesTable() {
	const { formatCurrency, formatDate } = useLocale();
	const { pagination, currentPage, totalPages, size } = usePagination({
		data: salesData,
		perPage: 3,
		storageKey: "sales-table",
	});

	return (
		<section className="w-full bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100 rounded-md">
			<table className="w-full rounded-md overflow-clip">
				<thead className="dark:bg-neutral-900 font-medium text-base bg-neutral-300 rounded-t-md">
					<tr>
						<th className="px-1.5 py-2 text-center">Sale ID</th>
						<th className="px-1.5 py-2 text-center">Name</th>
						<th className="px-1.5 py-2 text-center">Email</th>
						<th className="px-1.5 py-2 text-center">Amount</th>
						<th className="px-1.5 py-2 text-center">Date</th>
					</tr>
				</thead>
				<tbody className="">
					{pagination.currentData.map((row) => (
						<tr key={row.saleId} className="group">
							<TCell className="text-center">{row.saleId}</TCell>
							<TCell className="text-center">{row.name}</TCell>
							<TCell className="text-center">{row.email}</TCell>
							<TCell className="text-center">
								{formatCurrency(row.amount, "USD")}
							</TCell>
							<TCell className="text-center">
								{formatDate(row.date)}
							</TCell>
						</tr>
					))}
				</tbody>
			</table>
			<div className="flex flex-row items-center justify-between gap-3 p-2 text-sm border-t border-neutral-950/20">
				<div className="flex flex-row gap-3">
					<button
						type="button"
						className="px-2 py-1 bg-neutral-950/20 rounded-md font-medium disabled:bg-transparent disabled:font-light disabled:opacity-50"
						disabled={!pagination.isPrevAvailable()}
						onClick={pagination.prev}>
						<FaChevronLeft />
					</button>
					<span>
						{currentPage} / {totalPages}
					</span>
					<button
						type="button"
						className="px-2 py-1 bg-neutral-950/20 rounded-md disabled:bg-transparent disabled:font-light disabled:opacity-50"
						disabled={!pagination.isNextAvailable()}
						onClick={pagination.next}>
						<FaChevronRight />
					</button>
				</div>
				<div className="flex flex-row gap-2 items-center">
					<label className="text-sm" htmlFor="sales-table-size">
						Size
					</label>
					<select
						id="sales-table-size"
						className="rounded-md bg-neutral-600/40 font-medium p-1 text-sm"
						value={size}
						onChange={(e) =>
							pagination.changeSize(parseInt(e.target.value))
						}>
						<option value={5}>5</option>
						<option value={10}>10</option>
					</select>
				</div>
			</div>
		</section>
	);
}

function TCell({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<td className={cn("p-1.5 group-hover:bg-bgNeutral/40", className)}>
			{children}
		</td>
	);
}
