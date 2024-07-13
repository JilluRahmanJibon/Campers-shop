import { useParams } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { addItem } from "../redux/features/cart/cartSlice";
import { useGetProductByIdQuery } from "../redux/features/products/productsApi";

const ProductsDetails = () => {
	const { id } = useParams();

	const dispatch = useAppDispatch();
	const { data: product, isLoading } = useGetProductByIdQuery(id);
	console.log("🚀 ~ ProductsDetails ~ product:", product)

	const handleAddToCart = () => {
		if (product) {
			dispatch(addItem({ ...product, quantity: 1 }));
		}
	};

	if (isLoading) {
		return (
			<div className="text-2xl font-bold flex justify-center items-center h-[80vh]">
				Loading...
			</div>
		);
	}
	if (!product) {
		return (
			<div className="text-2xl font-bold flex justify-center items-center h-[80vh]">
				Product does not exist!
			</div>
		);
	}

	return (
		<div className="max-w-4xl mx-auto p-6">
			<div className="flex flex-col md:flex-row items-center">
				<img
					src={product?.image_url}
					alt={product?.product_name}
					className="w-80 h-80 object-cover"
				/>
				<div className="mt-6 md:mt-0 md:ml-6">
					<h2 className="text-3xl font-bold">{product?.product_name}</h2>
					<p className="text-gray-600 mt-2">{product?.description}</p>
					<p className="text-xl font-semibold mt-4">
						${product?.price.toFixed(2)}
					</p>
					<button
						onClick={handleAddToCart}
						className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductsDetails;
