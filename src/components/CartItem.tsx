import { useAppDispatch } from "../redux/hooks";
import { removeItem, updateQuantity } from "../redux/features/cart/cartSlice";
 

type CartItemProps = {
	product: {
		product_id: string;
		product_name: string;
		price: number;
		quantity: number;
		image_url: string;
	};
};

const CartItem  = ({ product }:CartItemProps) => {
	const dispatch = useAppDispatch();

	const handleQuantityChange = (quantity: number) => {
		dispatch(updateQuantity({ product_id: product.product_id, quantity }));
	};

	const handleRemove = () => {
		dispatch(removeItem(product.product_id));
	};

	return (
		<div className="flex items-center justify-between p-4 border-b border-gray-200">
			<img
				src={product.image_url}
				alt={product.product_name}
				className="w-20 h-20 object-cover"
			/>
			<div className="flex-1 mx-4">
				<h2 className="text-lg font-bold">{product.product_name}</h2>
				<p className="text-gray-600">${product.price.toFixed(2)}</p>
			</div>
			<div className="flex items-center space-x-2">
				<input
					type="number"
					value={product.quantity}
					onChange={e => handleQuantityChange(Number(e.target.value))}
					className="w-16 p-2 border border-gray-300 rounded"
					min="1"
				/>
				<button
					onClick={handleRemove}
					className="text-red-500 hover:text-red-700">
					Remove
				</button>
			</div>
		</div>
	);
};

export default CartItem;
