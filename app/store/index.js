import { configureStore } from '@reduxjs/toolkit';
import { productSlice } from './testSlice';
import { apiSlice } from './apiSlice';

export const store = configureStore({
    reducer: {
        products: productSlice.reducer,
        api: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware().concat(apiSlice.middleware),
    
});