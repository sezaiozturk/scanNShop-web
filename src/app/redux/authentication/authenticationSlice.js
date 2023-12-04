import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    company: null,
};

export const authenticationSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        setCompany: (state, action) => {
            state.company = action.payload;
        },
        /*decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },*/
    },
});

export const { setCompany } = authenticationSlice.actions;

export default authenticationSlice.reducer;
