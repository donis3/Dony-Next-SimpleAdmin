import Card from "@/app/ui/card/Card";
import PageTitle from "@/app/ui/page-title/PageTitle";

export default function ProductsPage() {
	return (
		<div className="container mx-auto flex flex-col gap-5 md:gap-8 px-3 py-5">
			<PageTitle>Products</PageTitle>
			<Card title="Product Listings">
				This is a mock empty page layout. Use this to create your own admin
				panel pages
			</Card>
		</div>
	);
}
