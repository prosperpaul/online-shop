import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../features/products/ProductSlice'

import productReducer from "../features/products/ProductSlice";

export const store = configureStore({
  reducer:{
    cart:cartReducer,
    product: productReducer,

  }
})