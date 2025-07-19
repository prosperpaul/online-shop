import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../features/cart/cartSlice'

import productReducer from "../features/products/ProductSlice";

export const store = configureStore({
  reducer:{
    cart:cartReducer,
    product: productReducer,

  }
})