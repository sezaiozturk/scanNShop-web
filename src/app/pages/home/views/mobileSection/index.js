import { useSelector } from "react-redux";
import useStyle from "./stylesheet";

const MobileSection = () => {
    const colors = useSelector(({ theme }) => theme.colors);
    const language = useSelector(({ locale }) => locale.language);
    const classes = useStyle({ colors });
    return (
        <div className={classes.mobileContainer}>
            <span className={classes.cityTitle}>{language.downloadApp}</span>
            <div className={classes.mobileContentContainer}>
                <span className={classes.appTitle}>{language.appTitle}</span>
                <div className={classes.qrContainer}>
                    <img
                        src="./assets/images/qr.png"
                        className={classes.qr}
                        alt="qr"
                    />
                    <div className={classes.appContent}>
                        <span>
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem
                        </span>
                    </div>
                </div>
                <img
                    src="./assets/images/googlePlay.png"
                    alt="googlePlay"
                    style={{
                        width: 162,
                        height: 63,
                    }}
                />
            </div>
        </div>
    );
};
export default MobileSection;
