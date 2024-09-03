import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductCart } from "../interfaces/interfaces";
const initialState: { products: [] | ProductCart[] } = {
  products: [],
};
export const Cart = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addOrRemoveProductsFromCart: (
      state,
      action: PayloadAction<[] | ProductCart[]>
    ) => {
      state.products = action.payload;
    },
  },
});

export const { addOrRemoveProductsFromCart } = Cart.actions;
export default Cart.reducer;
