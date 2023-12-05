import { configureStore } from "@reduxjs/toolkit";
import authenticationSlice from "./authentication/authenticationSlice";
import localeSlice from "./locale/localeSlice";
import themeSlice from "./theme/themeSlice";
import modalSlice from "./modal/modalSlice";

export const store = configureStore({
    reducer: {
        theme: themeSlice,
        locale: localeSlice,
        authentication: authenticationSlice,
        modal: modalSlice,
    },
});
