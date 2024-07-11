/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link } from "react-router-dom";

 
const ProductCard = ({product}:any) => {
	console.log("🚀 ~ ProductCard ~ product:", product)
	// const {
	// 	product_id,
	// 	product_name,
	// 	category,
	// 	price,
	// 	units_sold,
	// 	rating,
	// 	image_url,
	// } = data;

	return (
		<Link to={`/product/${product?.product_id}`}>
			<div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
				<img
					className="w-full"
					src={product.image_url}
					alt={product.product_name}
				/>
				<div className="px-6 py-4">
					<div className="font-bold text-xl mb-2">{product.product_name}</div>
					<p className="text-gray-700 text-base">
						Category: {product.category}
					</p>
					<p className="text-gray-700 text-base">Price: ${product.price}</p>
					<p className="text-gray-700 text-base">
						Units Sold: {product.units_sold}
					</p>
					<p className="text-gray-700 text-base">
						Rating: {product.rating} stars
					</p>
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
