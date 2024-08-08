import { createSlice } from "@reduxjs/toolkit";
import { isVisible } from "@testing-library/user-event/dist/utils";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    isVisible: false,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      return state.cart.filter((item) => item.id !== action.payload);
    },
    toggleCart: (state) => {
      state.isVisible = !state.isVisible;
    },
  },
});

export const { addToCart, removeFromCart, toggleCart } = cartSlice.actions;
export default cartSlice.reducer;
