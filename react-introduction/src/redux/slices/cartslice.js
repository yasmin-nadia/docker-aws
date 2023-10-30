import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart_items: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart_items.push({ id: Date.now(), text: action.payload });
    },
  },
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
