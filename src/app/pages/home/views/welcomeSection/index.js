import useStyle from "./stylesheet";
import { useColors, useLanguage } from "../../../../utils/setting";

const WelcomeSection = () => {
    const colors = useColors();
    const language = useLanguage();
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
