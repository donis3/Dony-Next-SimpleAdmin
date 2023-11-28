"use client";

import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	Legend,
} from "recharts";

/**
 * NOTE: This component must be dynamically loaded without SSR because it has randomized parts.
 * If those random parts run both on the server and the client, they wont match and next will throw errors.
 */
import data from "../table/salesData";
import useLocale from "@/lib/useLocale";

export default function Saleschart() {
	const { formatDate } = useLocale();
	const orderedData = data
		.map((item) => {
			return { ...item, date: new Date(item.date) };
		})
		.sort((a, b) => a.date.getTime() - b.date.getTime());
	return (
		<ResponsiveContainer width="100%" height={300}>
			<LineChart
				width={500}
				height={300}
				data={orderedData}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}>
				<XAxis
					dataKey="date"
					tickFormatter={(v) => {
						return formatDate(v);
					}}
				/>
				<YAxis />
				<Tooltip
					labelFormatter={(label) => {
						return formatDate(label);
					}}
				/>
				<Legend />
				<Line type="monotone" dataKey="amount" stroke="#8884d8" />
			</LineChart>
		</ResponsiveContainer>
	);
}
