/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link } from "react-router-dom";

const ProductCard = ({ product }: any) => {
	console.log("🚀 ~ ProductCard ~ product:", product);

	return (
		<div className="">
			<Link to={`/product/${product?.product_id}`}>
				<div className="max-w-sm rounded overflow-hidden shadow-lg  ">
					<div className="flex justify-center ">
						<img
							className=" w-full h-[250px]"
							src={product.image_url}
							alt={product.product_name}
						/>
					</div>
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
		</div>
	);
};

export default ProductCard;
