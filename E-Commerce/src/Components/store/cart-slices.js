import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    total: 0,
  },
  reducers: {
    addProductToCart(state, action) {
      const newProduct = action.payload;
      const existingProduct = state.products.find(
        (product) => product.id === newProduct.id
      );
      state.total += newProduct.price * newProduct.quantity;
      if (!existingProduct) {
        state.products.push({
          id: newProduct.id,
          name: newProduct.name,
          category: newProduct.category,
          image: newProduct.image,
          price: newProduct.price,
          quantity: newProduct.quantity,
          totalPrice: newProduct.price * newProduct.quantity,
        });
      } else {
        existingProduct.quantity += newProduct.quantity;
        existingProduct.totalPrice += newProduct.price;
      }
    },
    removeProductFromCart(state, action) {
      const productId = action.payload;
      const existingProduct = state.products.find(
        (product) => product.id === productId
      );
      state.total -= existingProduct.totalPrice;
      const updatedProducts = state.products.filter(
        (product) => product.id !== productId
      );
      state.products = updatedProducts;
    },
    increaseCartQuantity(state, action) {
      const newProduct = action.payload;
      const existingProduct = state.products.find(
        (product) => product.id === newProduct.id
      );

      existingProduct.quantity++;
      existingProduct.totalPrice += newProduct.price;
      state.total += newProduct.price;
    },
    decreaseCartQuantity(state, action) {
      const newProduct = action.payload;
      const existingProduct = state.products.find(
        (product) => product.id === newProduct.id
      );
      existingProduct.quantity--;
      existingProduct.totalPrice -= newProduct.price;
      state.total -= newProduct.price;
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
