 
import ProductCard from "../components/ProductCard";

const Products = () => {
	const products = [
		{
			product_id: "101",
			product_name: "Wireless Bluetooth Headphones",
			category: "Electronics",
			price: 89.99,
			units_sold: 1500,
			rating: 4.5,
			image_url:
				"https://contents.mediadecathlon.com/p2583050/k$e9cf7a10e01a5fdb16eaada7d7d71cdc/picture.jpg?format=auto&f=320x0",
		},
		{
			product_id: "102",
			product_name: "Smartphone XYZ",
			category: "Electronics",
			price: 699.99,
			units_sold: 1200,
			rating: 4.7,
			image_url:
				"https://contents.mediadecathlon.com/p2583050/k$e9cf7a10e01a5fdb16eaada7d7d71cdc/picture.jpg?format=auto&f=320x0",
		},
		{
			product_id: "103",
			product_name: "Running Shoes",
			category: "Sportswear",
			price: 59.99,
			units_sold: 2000,
			rating: 4.3,
			image_url:
				"https://contents.mediadecathlon.com/p2583050/k$e9cf7a10e01a5fdb16eaada7d7d71cdc/picture.jpg?format=auto&f=320x0",
		},
		{
			product_id: "104",
			product_name: "Stainless Steel Water Bottle",
			category: "Home & Kitchen",
			price: 25.99,
			units_sold: 3000,
			rating: 4.8,
			image_url:
				"https://contents.mediadecathlon.com/p2583050/k$e9cf7a10e01a5fdb16eaada7d7d71cdc/picture.jpg?format=auto&f=320x0",
		},
		{
			product_id: "105",
			product_name: "Yoga Mat",
			category: "Sportswear",
			price: 30.0,
			units_sold: 1800,
			rating: 4.4,
			image_url:
				"https://contents.mediadecathlon.com/p2583050/k$e9cf7a10e01a5fdb16eaada7d7d71cdc/picture.jpg?format=auto&f=320x0",
		},
		{
			product_id: "106",
			product_name: "4K Ultra HD TV",
			category: "Electronics",
			price: 999.99,
			units_sold: 800,
			rating: 4.6,
			image_url:
				"https://contents.mediadecathlon.com/p2583050/k$e9cf7a10e01a5fdb16eaada7d7d71cdc/picture.jpg?format=auto&f=320x0",
		},
		{
			product_id: "107",
			product_name: "Organic Green Tea",
			category: "Groceries",
			price: 15.99,
			units_sold: 2500,
			rating: 4.9,
			image_url:
				"https://contents.mediadecathlon.com/p2583050/k$e9cf7a10e01a5fdb16eaada7d7d71cdc/picture.jpg?format=auto&f=320x0",
		},
		{
			product_id: "108",
			product_name: "Noise Cancelling Earbuds",
			category: "Electronics",
			price: 59.99,
			units_sold: 2200,
			rating: 4.2,
			image_url:
				"https://contents.mediadecathlon.com/p2583050/k$e9cf7a10e01a5fdb16eaada7d7d71cdc/picture.jpg?format=auto&f=320x0",
		},
		{
			product_id: "109",
			product_name: "Electric Toothbrush",
			category: "Personal Care",
			price: 39.99,
			units_sold: 1600,
			rating: 4.6,
			image_url:
				"https://contents.mediadecathlon.com/p2583050/k$e9cf7a10e01a5fdb16eaada7d7d71cdc/picture.jpg?format=auto&f=320x0",
		},
		{
			product_id: "110",
			product_name: "Stainless Steel Cookware Set",
			category: "Home & Kitchen",
			price: 129.99,
			units_sold: 1400,
			rating: 4.7,
			image_url:
				"https://contents.mediadecathlon.com/p2583050/k$e9cf7a10e01a5fdb16eaada7d7d71cdc/picture.jpg?format=auto&f=320x0",
		},
	];
	return (
		<div>
			<section className="mb-12">
				<div className="grid lg:grid-cols-4 md:grid-cols-2">
					{products?.map(product => (
						<ProductCard key={product.product_id} product={product} />
					))}
				</div>
			</section>
		</div>
	);
};

export default Products;
