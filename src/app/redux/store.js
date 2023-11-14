import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./theme/themeSlice";
import localeSlice from "./locale/localeSlice";

export const store = configureStore({
    reducer: {
        theme: themeSlice,
        locale: localeSlice,
    },
});
