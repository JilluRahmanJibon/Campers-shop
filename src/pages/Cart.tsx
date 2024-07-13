import CartItem from "../components/CartItem";
import { useAppSelector } from "../redux/hooks";

const Cart = () => {
	const cartItems = useAppSelector(state => state.cart.items);
	const totalPrice = cartItems.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);
	return (
		<div className="max-w-7xl mx-auto p-6 h-[80vh]">
			{cartItems.length > 0 ? (
				<>
					<h2 className="text-3xl font-bold text-gray-900 mb-6">
						Shopping Cart
					</h2>
					{cartItems.map(item => (
						<CartItem key={item.product_id} product={item} />
					))}
					<div className="flex justify-between items-center mt-6">
						<h3 className="text-2xl font-semibold">
							Total: ${totalPrice.toFixed(2)}
						</h3>
						<button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
							Proceed to Checkout
						</button>
					</div>
				</>
			) : (
				<div className="flex justify-center items-center font-bold h-[70vh] text-xl">
					<p className="text-gray-600 ">Your cart is empty.</p>
				</div>
			)}
		</div>
	);
};

export default Cart;
