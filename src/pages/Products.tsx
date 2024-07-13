import ProductCard from "../components/ProductCard";
import { useGetAllProductsQuery } from "../redux/features/products/productsApi";

const Products = () => {
	const { data: products, isLoading } = useGetAllProductsQuery([]);

	if (isLoading) {
		return (
			<div className="text-2xl font-bold flex justify-center items-center h-[80vh]">
				Loading...
			</div>
		);
	}
	// const products = [

	// 	{
	// 		product_id: "101",
	// 		product_name: "Wireless Bluetooth Headphones",
	// 		category: "Electronics",
	// 		price: 89.99,
	// 		units_sold: 1500,
	// 		rating: 4.5,
	// 		image_url:
	// 			"https://i5.walmartimages.com/asr/375d2852-d985-4aa9-b69c-b686da6e513f_1.eef652ba8620bde5c2b792e0ce74f113.jpeg",
	// 		description:
	// 			"High-quality wireless Bluetooth headphones with excellent sound quality and long battery life.",
	// 	},
	// 	{
	// 		product_id: "102",
	// 		product_name: "Smartphone XYZ",
	// 		category: "Electronics",
	// 		price: 699.99,
	// 		units_sold: 1200,
	// 		rating: 4.7,
	// 		image_url:
	// 			"https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2023/03/15/bd2699709ff9b92ed09de2a756837446.jpg?quality=80&zoom=1&ssl=1",
	// 		description:
	// 			"Latest model smartphone with a powerful processor, stunning display, and advanced camera features.",
	// 	},
	// 	{
	// 		product_id: "103",
	// 		product_name: "Running Shoes",
	// 		category: "Sportswear",
	// 		price: 59.99,
	// 		units_sold: 2000,
	// 		rating: 4.3,
	// 		image_url:
	// 			"https://hips.hearstapps.com/hmg-prod/images/bestshoes-65f2d1f26eed0.jpg",
	// 		description:
	// 			"Comfortable and durable running shoes designed for optimal performance and support.",
	// 	},
	// 	{
	// 		product_id: "104",
	// 		product_name: "Stainless Steel Water Bottle",
	// 		category: "Home & Kitchen",
	// 		price: 25.99,
	// 		units_sold: 3000,
	// 		rating: 4.8,
	// 		image_url:
	// 			"https://m.media-amazon.com/images/I/41ig3qcUv7L._SX300_SY300_QL70_FMwebp_.jpg",
	// 		description:
	// 			"Eco-friendly stainless steel water bottle that keeps your drinks cold or hot for hours.",
	// 	},
	// 	{
	// 		product_id: "105",
	// 		product_name: "Yoga Mat",
	// 		category: "Sportswear",
	// 		price: 30.0,
	// 		units_sold: 1800,
	// 		rating: 4.4,
	// 		image_url:
	// 			"https://www.smarteshopbd.com/wp-content/uploads/2020/08/yoga-mat-2.jpg",
	// 		description:
	// 			"Non-slip yoga mat providing excellent cushioning and support for your yoga practice.",
	// 	},
	// 	{
	// 		product_id: "106",
	// 		product_name: "4K Ultra HD TV",
	// 		category: "Electronics",
	// 		price: 999.99,
	// 		units_sold: 800,
	// 		rating: 4.6,
	// 		image_url:
	// 			"https://res.cloudinary.com/sharp-consumer-eu/image/fetch/w_1100,f_auto,q_auto/https://s3.infra.brandquad.io/accounts-media/SHRP/DAM/origin/e9601a9c-b16f-11ea-b758-26771c4dcb1c.jpg",
	// 		description:
	// 			"Ultra high-definition TV with stunning picture quality and smart features for a superior viewing experience.",
	// 	},
	// 	{
	// 		product_id: "107",
	// 		product_name: "Organic Green Tea",
	// 		category: "Groceries",
	// 		price: 15.99,
	// 		units_sold: 2500,
	// 		rating: 4.9,
	// 		image_url:
	// 			"https://tearaja.in/cdn/shop/products/organic-green-tea-tearaja-1.jpg?v=1704912609",
	// 		description:
	// 			"Premium organic green tea with a delicate flavor and numerous health benefits.",
	// 	},
	// 	{
	// 		product_id: "108",
	// 		product_name: "Noise Cancelling Earbuds",
	// 		category: "Electronics",
	// 		price: 59.99,
	// 		units_sold: 2200,
	// 		rating: 4.2,
	// 		image_url:
	// 			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu4itMV-ioEs9jFgvXJmTQx9RpjfNOx6Ykmg&s",
	// 		description:
	// 			"Compact and comfortable noise cancelling earbuds with superior sound quality.",
	// 	},
	// 	{
	// 		product_id: "109",
	// 		product_name: "Electric Toothbrush",
	// 		category: "Personal Care",
	// 		price: 39.99,
	// 		units_sold: 1600,
	// 		rating: 4.6,
	// 		image_url:
	// 			"https://nypost.com/wp-content/uploads/sites/2/2022/05/electric-toothbrush.jpg?quality=75&strip=all",
	// 		description:
	// 			"Advanced electric toothbrush with multiple brushing modes and a long-lasting battery.",
	// 	},
	// 	{
	// 		product_id: "110",
	// 		product_name: "Stainless Steel Cookware Set",
	// 		category: "Home & Kitchen",
	// 		price: 129.99,
	// 		units_sold: 1400,
	// 		rating: 4.7,
	// 		image_url:
	// 			"https://i5.walmartimages.com/seo/Cook-N-Home-Stainless-Steel-Cookware-Sets-10-Piece-Pots-and-Pans-Kitchen-Cooking-Set-with-Stay-Cool-Handles-Dishwasher-Safe-Silver_8a95c483-d16d-404e-832b-656fe69bb164.4f98a67d00105d9d2b93b3aff5bfa407.jpeg",
	// 		description:
	// 			"High-quality stainless steel cookware set with non-stick coating and even heat distribution.",
	// 	},
	// ];

	return (
		<div>
			<section className="my-12">
				{products?.length ? (
					<div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
						<>
							{products?.map(product => (
								<ProductCard key={product.product_id} product={product} />
							))}
						</>
					</div>
				) : (
					<div className="h-[65vh] flex w-full justify-center items-center font-bold text-2xl text-gray-600">
						<p>No Data Found!</p>
					</div>
				)}
			</section>
		</div>
	);
};

export default Products;
