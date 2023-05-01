import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    products: [],
  },
  reducers: {
    addProductToWishlist(state, action) {},
    removeProductFromWishlist(state, action) {},
  },
});
