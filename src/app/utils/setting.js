import { useSelector } from "react-redux";
import { changeTheme } from "../redux/theme/themeSlice";
import { changeLocale } from "../redux/locale/localeSlice";
import { store } from "../redux/store";

export const useColors = () => useSelector(({ theme }) => theme.colors);
export const useLanguage = () => useSelector(({ locale }) => locale.language);
export const useActiveLanguage = () =>
    useSelector(({ locale }) => locale.activeLanguage);

export const changeThemes = () => store.dispatch(changeTheme());
export const changeLocales = () => store.dispatch(changeLocale());
