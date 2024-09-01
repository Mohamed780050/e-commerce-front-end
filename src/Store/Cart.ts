import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../interfaces/interfaces";
const initialState: { products: [] | Product[] } = {
  products: [],
};
export const Cart = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addOrRemoveProductsFromCart: (state, action: PayloadAction<[] | Product[]>) => {
      state.products = action.payload;
    },
  },
});

export const { addOrRemoveProductsFromCart } = Cart.actions;
export default Cart.reducer;
