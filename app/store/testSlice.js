import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products:[
        {
            id:1,
            name:"udara"
        }
    ]
};

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{}
})