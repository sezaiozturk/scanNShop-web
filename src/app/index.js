import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "./redux/theme/themeSlice";
import { changeLocale } from "./redux/locale/localeSlice";

function App() {
    const colors = useSelector(({ theme }) => theme.colors);
    const language = useSelector(({ locale }) => locale.language);

    const dispatch = useDispatch();
    return (
        <div className="App">
            <span style={{ fontSize: 50, color: colors.secondary }}>
                {language.message}
            </span>
            <button
                onClick={() => {
                    dispatch(changeTheme());
                }}
            >
                change theme
            </button>
            <button
                onClick={() => {
                    dispatch(changeLocale());
                }}
            >
                change locale
            </button>
        </div>
    );
}

export default App;
