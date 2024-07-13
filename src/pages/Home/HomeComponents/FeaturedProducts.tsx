import FeaturedProductCard from "./FeaturedProductCard";

const featuredProducts = [
	{
		product_id: "1",
		product_name: "Wireless Bluetooth Headphones",
		price: 89.99,
		image_url: "https://example.com/images/wireless_bluetooth_headphones.jpg",
	},
	{
		product_id: "2",
		product_name: "Smartphone",
		price: 699.99,
		image_url: "https://example.com/images/smartphone.jpg",
	},
	{
		product_id: "3",
		product_name: "4K TV",
		price: 1199.99,
		image_url: "https://example.com/images/4k_tv.jpg",
	},
	{
		product_id: "4",
		product_name: "Laptop",
		price: 999.99,
		image_url: "https://example.com/images/laptop.jpg",
	},
];

const FeaturedProducts = () => {
	return (
		<div className="max-w-7xl mx-auto p-6">
			<h2 className="text-3xl font-bold text-gray-900 mb-6">
				Featured Products
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{featuredProducts.map(product => (
					<FeaturedProductCard key={product.product_id} product={product} />
				))}
			</div>
		</div>
	);
};

export default FeaturedProducts;
