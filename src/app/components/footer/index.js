import { useColors, useLanguage } from "../../utils/setting";

import useStyle from "./stylesheet";

const Footer = () => {
    const colors = useColors();
    const language = useLanguage();
    const classes = useStyle({ colors });
    return (
        <div className={classes.container}>
            <div className={classes.contentContainer}>
                <div className={classes.logoContainer}>
                    <img
                        src="/assets/images/logo.png"
                        alt="logo"
                        className={classes.logo}
                    />
                    <span>{language.copyright}</span>
                </div>
                <div className={classes.version}>
                    <span>v1.0</span>
                </div>
            </div>
        </div>
    );
};
export default Footer;
