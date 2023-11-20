import { useSelector } from "react-redux";
import useStyle from "./stylesheet";

const CitySection = () => {
    const colors = useSelector(({ theme }) => theme.colors);
    const language = useSelector(({ locale }) => locale.language);
    const classes = useStyle({ colors });
    return (
        <div className={classes.cityContainer}>
            <span className={classes.cityTitle}>{language.city}</span>
            <div className={classes.cityContentContainer}>
                <div className={classes.row}>
                    <div className={classes.cityBox}>
                        <img
                            className={classes.cityPhoto}
                            src="./assets/images/istanbul.jpeg"
                            alt="istanbul"
                        />
                        <div className={classes.nameContainer}>
                            <span>İstanbul</span>
                        </div>
                    </div>
                    <div className={classes.cityBox}>
                        <img
                            className={classes.cityPhoto}
                            src="./assets/images/ankara.jpeg"
                            alt="ankara"
                        />
                        <div className={classes.nameContainer}>
                            <span>Ankara</span>
                        </div>
                    </div>
                    <div className={classes.cityBox}>
                        <img
                            className={classes.cityPhoto}
                            src="./assets/images/bursa.jpeg"
                            alt="bursa"
                        />
                        <div className={classes.nameContainer}>
                            <span>Bursa</span>
                        </div>
                    </div>
                    <div className={classes.cityBox}>
                        <img
                            className={classes.cityPhoto}
                            src="./assets/images/antalya.jpeg"
                            alt="antalya"
                        />
                        <div className={classes.nameContainer}>
                            <span>Antalya</span>
                        </div>
                    </div>
                </div>
                <div className={classes.row}>
                    <div className={classes.cityBox}>
                        <img
                            className={classes.cityPhoto}
                            src="./assets/images/isparta.jpeg"
                            alt="isparta"
                        />
                        <div className={classes.nameContainer}>
                            <span>Isparta</span>
                        </div>
                    </div>
                    <div className={classes.cityBox}>
                        <img
                            className={classes.cityPhoto}
                            src="./assets/images/ordu.jpeg"
                            alt="ordu"
                        />
                        <div className={classes.nameContainer}>
                            <span>Ordu</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CitySection;
