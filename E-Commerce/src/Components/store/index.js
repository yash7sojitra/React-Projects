import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-slices";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
