import { configureStore } from "@reduxjs/toolkit";
import basketReducer from './slices/basketSlice';
import userReducer from './slices/userSlice'
import productReducer from './slices/productSlice'

const store = configureStore({
    reducer:{
        basket: basketReducer,
        user: userReducer,
        products: productReducer
    }
});

export default store