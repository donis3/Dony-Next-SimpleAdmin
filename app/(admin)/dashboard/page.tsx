import Card from "@/app/ui/card/Card";

import InfoCard from "@/app/ui/info-card/InfoCard";
import PageTitle from "@/app/ui/page-title/PageTitle";
import SalesTable from "@/app/ui/table/SalesTable";
import dynamic from "next/dynamic";
import { FaHandshake, FaMoneyBill, FaUser } from "react-icons/fa";

// Lazy load chart
const Saleschart = dynamic(() => import("../../ui/chart/Saleschart"), {
	ssr: false,
	loading: () => <p>Loading...</p>,
});

export default function Dashboard() {
	return (
		<div className="container mx-auto flex flex-col gap-5 md:gap-8 px-3 py-5">
			<PageTitle>Dony Dashboard</PageTitle>
			<div className="w-full grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-8">
				<InfoCard title="Total Users" icon={<FaUser />}>
					25
				</InfoCard>
				<InfoCard
					title="Sales"
					icon={<FaMoneyBill />}
					subtext="Up %20 since last week"
					subtextStyle="positive">
					750
				</InfoCard>
				<InfoCard
					title="Engagement"
					icon={<FaHandshake />}
					subtext="Down %12 since last month"
					subtextStyle="negative">
					0.2
				</InfoCard>
			</div>

			<Card title="Message from developer">
				Welcome to DonyAdmin, a modern next.js and tailwind admin
				dashboard.
			</Card>

			<SalesTable />
			<Card title="Sales Data" bodyClass="px-0 md:px-2 py-5 relative">
				<Saleschart />
			</Card>
		</div>
	);
}
