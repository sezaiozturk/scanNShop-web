import useStyle from "./stylesheet";
import { Header, Footer } from "./components";
import Navigation from "./navigations";
import { useColors, useLanguage } from "./utils/setting";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
function App() {
    const colors = useColors();
    const language = useLanguage();
    const isAuthentication = useSelector(
        ({ authentication }) => authentication.company
    );
    const classes = useStyle();
    const location = useLocation();

    return (
        <div className={classes.container}>
            {location.pathname == "/" && <Header />}
            <Navigation />
            <Footer />
        </div>
    );
}

export default App;
