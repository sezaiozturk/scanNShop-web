import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modals: [],
};
const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        append: (state, action) => {
            state.modals = [...state.modals, action.payload];
        },
        destroy: (state) => {
            //add
            const data = [...state.modals];
            data.pop();
            state.modals = data;
        },
        destroyAll: (state) => {
            state.modals = [];
        },
    },
});
export const { append, destroy, destroyAll } = modalSlice.actions;
export default modalSlice.reducer;
