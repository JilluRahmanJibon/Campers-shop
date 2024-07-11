import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ProductsDetails = () => {
	const {id:product_id} = useParams();
	console.log("🚀 ~ ProductsDetails ~ product_id:", product_id);
	const [product, setProduct] = useState<Product | null>(null);
	type Product = {
		product_id: string;
		product_name: string;
		category: string;
		price: number;
		units_sold: number;
		rating: number;
		image_url: string;
		description: string;
	};
	useEffect(() => {
		// Simulate fetching product data based on product_id
		const fetchProduct = async (id: string) => {
			const productData: Product = {
				product_id: id,
				product_name: "Wireless Bluetooth Headphones",
				category: "Electronics",
				price: 89.99,
				units_sold: 1500,
				rating: 4.5,
				image_url:
					"https://static-01.daraz.com.bd/p/c3512ab0167c57e4aaaf6208a5b46c5b.jpg_300x0q75.webp",
				description:
					"Experience high-quality sound with our Wireless Bluetooth Headphones. Perfect for music lovers and audiophiles. With a sleek design and comfortable fit, you can enjoy your favorite tunes all day long.",
			};
			setProduct(productData);
		};

		fetchProduct(product_id as string);
	}, [product_id]);

	if (!product) {
		return <div>Loading...</div>;
	}
	return (
		<div className="  mx-auto h-screen flex justify-center items-center p-6 bg-white rounded-lg  ">
			<div className="flex flex-col lg:flex-row">
				<img
					className="w-full lg:max-w-[50%] h-auto rounded-lg"
					src={product.image_url}
					alt={product.product_name}
				/>

				<div className="lg:ml-6 mt-6 lg:mt-0 flex flex-col justify-between">
					<div>
						<h1 className="text-3xl font-bold text-gray-900">
							{product.product_name}
						</h1>
						<p className="text-gray-600 mt-2">Category: {product.category}</p>
						<p className="text-gray-600 mt-2">Price: ${product.price}</p>
						<p className="text-gray-600 mt-2">
							Units Sold: {product.units_sold}
						</p>
						<p className="text-gray-600 mt-2">Rating: {product.rating} stars</p>
						<p className="text-gray-800 mt-6">{product.description}</p>
					</div>
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6">
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductsDetails;
