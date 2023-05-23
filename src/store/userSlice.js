import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setCurrentUser: (state, action) => {
            const user = action.payload
            state.currentUser = user;
        }
    }
})