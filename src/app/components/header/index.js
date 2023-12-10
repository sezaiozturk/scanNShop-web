import Button from "../button";
import useStyle from "./stylesheet";
import Switcher from "../switcher";
import { Link } from "react-router-dom";
import {
    useColors,
    useLanguage,
    useActiveLanguage,
    changeThemes,
    changeLocales,
} from "../../utils/setting";

const Header = () => {
    const colors = useColors();
    const language = useLanguage();
    const activeLanguage = useActiveLanguage();
    const classes = useStyle({ colors });
    return (
        <div className={classes.container}>
            <div className={classes.contentContainer}>
                <div className={classes.logoContainer}>
                    <Link to={"/"}>
                        <span className={classes.logo}>ScanNShop</span>
                    </Link>
                </div>
                <div className={classes.menuContainer}>
                    <Link to={"login"}>
                        <Button title={language.login} variant="outlined" />
                    </Link>
                    <Link to={"signup"}>
                        <Button title={language.signup} />
                    </Link>
                    <div className={classes.settings}>
                        <Button
                            variant="ghost"
                            title={activeLanguage.toUpperCase()}
                            icon={"fa-solid fa-globe"}
                            iconColor={colors.icon}
                            iconSize="fa-2x"
                            onClick={changeLocales}
                        />
                        <Switcher onClick={changeThemes} />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;
