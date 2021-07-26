import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./ducks/cart-slice";
import uiSlice from "./ducks/ui-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
