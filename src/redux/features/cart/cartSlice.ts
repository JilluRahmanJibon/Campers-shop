import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
	product_id: string;
	product_name: string;
	price: number;
	quantity: number;
	image_url: string;
};

type CartState = {
	items: CartItem[];
};

const initialState: CartState = {
	items: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<CartItem>) => {
			const item = state.items.find(
				item => item.product_id === action.payload.product_id
			);
			if (item) {
				item.quantity += action.payload.quantity;
			} else {
				state.items.push(action.payload);
			}
		},
		removeItem: (state, action: PayloadAction<string>) => {
			state.items = state.items.filter(
				item => item.product_id !== action.payload
			);
		},
		updateQuantity: (
			state,
			action: PayloadAction<{ product_id: string; quantity: number }>
		) => {
			const item = state.items.find(
				item => item.product_id === action.payload.product_id
			);
			if (item) {
				item.quantity = action.payload.quantity;
			}
		},
	},
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
