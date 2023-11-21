import { useSelector } from "react-redux";
import useStyle from "./stylesheet";

const WelcomeSection = () => {
    const colors = useSelector(({ theme }) => theme.colors);
    const language = useSelector(({ locale }) => locale.language);
    const classes = useStyle({ colors });
    return (
        <div className={classes.container}>
            <div className={classes.contentContainer}>
                <span className={classes.slogan}>{language.slogan}</span>
                <img
                    src="./assets/images/welcome.svg"
                    alt="welcome"
                    className={classes.welcome}
                />
            </div>
        </div>
    );
};
export default WelcomeSection;
