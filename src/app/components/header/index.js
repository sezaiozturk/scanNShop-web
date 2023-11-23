import Button from "../button";
import useStyle from "./stylesheet";
import { changeLocale } from "../../redux/locale/localeSlice";
import { useSelector, useDispatch } from "react-redux";
import Switcher from "../switcher";
import { changeTheme } from "../../redux/theme/themeSlice";
import { Link } from "react-router-dom";

const Header = () => {
    const colors = useSelector(({ theme }) => theme.colors);
    const language = useSelector(({ locale }) => locale.language);
    const activeLanguage = useSelector(({ locale }) => locale.activeLanguage);
    const classes = useStyle({ colors });
    const dispatch = useDispatch();
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
                        <Button
                            title={language.login}
                            variant="outlined"
                            onClick={() => {
                                console.log("run");
                            }}
                        />
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
                            onClick={() => {
                                dispatch(changeLocale());
                            }}
                        />
                        <Switcher onClick={() => dispatch(changeTheme())} />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;
