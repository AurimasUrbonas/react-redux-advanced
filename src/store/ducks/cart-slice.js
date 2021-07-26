import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalQuantity: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.cart = action.payload.cart;
      state.totalQuantity = action.payload.totalQuantity;
    },
    addToCart(state, action) {
      const { title, price, id } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      state.totalQuantity++;
      state.changed = true;

      if (existingItem) {
        existingItem.quantity++;
        existingItem.total += existingItem.price;
      } else {
        state.cart.push({
          id,
          title,
          price,
          quantity: 1,
          total: price,
        });
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;

      if (existingItem.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.total -= existingItem.price;
      }
    },
  },
});

export const { addToCart, removeFromCart, replaceCart } = cartSlice.actions;

export default cartSlice;
