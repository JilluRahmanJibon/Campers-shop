 import { Link } from "react-router-dom";

 type FeaturedProductCardProps = {
		product: {
			product_id: string;
			product_name: string;
			price: number;
			image_url: string;
		};
 };

const FeaturedProductCard = ({ product }: FeaturedProductCardProps
    
) => {
  return (
		<div className="bg-white rounded-lg shadow-md overflow-hidden">
			<img
				className="w-full h-48 object-cover"
				src={product.image_url}
				alt={product.product_name}
			/>
			<div className="p-4">
				<h3 className="text-lg font-semibold text-gray-900">
					{product.product_name}
				</h3>
				<p className="text-gray-600 mt-2">${product.price}</p>
				<Link to={`/product/${product.product_id}`}>
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
						View Details
					</button>
				</Link>
			</div>
		</div>
	);
}

export default FeaturedProductCard
