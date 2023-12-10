import useStyle from "./stylesheet";
import { Header, Footer } from "./components";
import Navigation from "./navigations";
import { useColors, useLanguage } from "./utils/setting";
import { useSelector } from "react-redux";
function App() {
    const colors = useColors();
    const language = useLanguage();
    const isAuthentication = useSelector(
        ({ authentication }) => authentication.company
    );
    const classes = useStyle();

    return (
        <div className={classes.container}>
            {!isAuthentication && <Header />}
            <Navigation />
            {!isAuthentication && <Footer />}
        </div>
    );
}

export default App;
