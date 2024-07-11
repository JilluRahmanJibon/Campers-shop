import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";

const Home = () => {
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
	const categories = [
		{
			category: "Electronics",
			imageUrl: "https://example.com/images/electronics.jpg",
		},
		{
			category: "Fashion",
			imageUrl: "https://example.com/images/fashion.jpg",
		},
		{
			category: "Home & Kitchen",
			imageUrl: "https://example.com/images/home_kitchen.jpg",
		},
		{
			category: "Beauty & Personal Care",
			imageUrl: "https://example.com/images/beauty_personal_care.jpg",
		},
		{
			category: "Sports & Outdoors",
			imageUrl: "https://example.com/images/sports_outdoors.jpg",
		},
		{
			category: "Toys & Games",
			imageUrl: "https://example.com/images/toys_games.jpg",
		},
	];
	return (
		<main>
			{/* banner section  */}
			<section className="py-12">
				<section className="  overflow-hidden">
					<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
						<div className="flex items-center justify-center   mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 w-full">
							<img
								src="https://contents.mediadecathlon.com/s1045801/k$f565435ab9f757520f7ff22b34494a77?format=auto&f=969x0"
								alt=""
								className=" w-full"
							/>
						</div>
						<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
							<h1 className="text-5xl font-bold leading-none sm:text-6xl">
								Camping
							</h1>
							<p className="mt-6 mb-8 text-lg sm:mb-12">
								Create your dream campsite with our camping essentials. Under
								the stars, every night is an adventure waiting to unfold.
							</p>
						</div>
					</div>
				</section>
			</section>
			{/* best selling section  */}
			<section className="mb-12">
				{products?.length ? (
					<div>
						<h1 className="font-semibold text-3xl">Best Selling Products</h1>
						<div className="grid lg:grid-cols-4 md:grid-cols-2">
							{products?.slice(0, 8).map(product => (
								<ProductCard key={product.product_id} product={product} />
							))}
						</div>
						<div className="flex justify-center">
							<Link to={"/products"}>
								{" "}
								<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
									View More
								</button>
							</Link>
						</div>
					</div>
				) : (
					""
				)}
			</section>

			{/* category section  */}
			<section>
				<h1 className="text-3xl font-semibold">Category</h1>
				<div className="max-w-7xl mx-auto p-6">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
						{categories.map(category => (
							<CategoryCard
								key={category.category}
								category={category.category}
								imageUrl={category.imageUrl}
							/>
						))}
					</div>
				</div>
			</section>
		</main>
	);
};

export default Home;
