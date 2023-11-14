import { createSlice } from "@reduxjs/toolkit";
import locales from "../../locales";

let currentLocale = "en";
const initialState = {
    language: locales[1].translations,
};

export const localeSlice = createSlice({
    name: "locale",
    initialState,
    reducers: {
        changeLocale: (state) => {
            state.language =
                currentLocale === "en"
                    ? locales[0].translations
                    : locales[1].translations;
            currentLocale = currentLocale === "en" ? "tr" : "en";
        },
        /*decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },*/
    },
});

export const { changeLocale } = localeSlice.actions;

export default localeSlice.reducer;
