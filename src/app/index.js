import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "./redux/theme/themeSlice";
import { changeLocale } from "./redux/locale/localeSlice";
import useStyle from "./stylesheet";
import { Header, Footer } from "./components";
import Navigation from "./navigations";
function App() {
    const colors = useSelector(({ theme }) => theme.colors);
    const language = useSelector(({ locale }) => locale.language);
    const classes = useStyle();

    const dispatch = useDispatch();
    return (
        <div className={classes.container}>
            <Header />
            <Navigation />
            <Footer />
        </div>
    );
}

export default App;
