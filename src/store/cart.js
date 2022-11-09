import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  cartVisible: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem(state, action) {
      const existingCartItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingCartItem = state.cartItems[existingCartItemIndex];
      if (existingCartItem) {
        state.cartItems[existingCartItemIndex].amount++;
      } else {
        state.cartItems.push(action.payload);
      }
      state.cartChange = true;
    },
    removeCartItem(state, action) {
      const existingCartItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      const itemAmount = state.cartItems[existingCartItemIndex].amount;
      if (itemAmount === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.cartItems[existingCartItemIndex].amount--;
      }
      state.cartChange = true;
    },
    hideCart(state) {
      state.cartVisible = false;
    },
    toggleCart(state) {
      state.cartVisible = !state.cartVisible;
    },
  },
});
export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
