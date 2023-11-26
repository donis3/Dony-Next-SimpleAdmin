import Card from "@/app/ui/card/Card";
import InfoCard from "@/app/ui/info-card/InfoCard";
import PageTitle from "@/app/ui/page-title/PageTitle";
import SalesTable from "@/app/ui/table/SalesTable";
import { FaHandshake, FaMoneyBill, FaUser } from "react-icons/fa";

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

			<Card>Main card content</Card>

			<Card title="Another card">Main card content</Card>

			<SalesTable />

			<div className="w-full h-full bg-green-700">Main Content</div>
		</div>
	);
}
