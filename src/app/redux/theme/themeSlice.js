import { createSlice } from "@reduxjs/toolkit";
import themes from "../../themes";

let currentTheme = "light";
const initialState = {
    colors: themes[0].colors,
    typography: themes[0].typography,
};

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeTheme: (state) => {
            state.colors =
                currentTheme === "light" ? themes[1].colors : themes[0].colors;
            currentTheme = currentTheme === "light" ? "dark" : "light";
        },
        /*decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },*/
    },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
