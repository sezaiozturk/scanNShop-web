import useStyle from "./stylesheet";
import { useColors, useLanguage } from "../../../../utils/setting";

const CitySection = () => {
    const colors = useColors();
    const language = useLanguage();
    const classes = useStyle({ colors });
    const cities = [
        [
            {
                id: "istanbul",
                name: "İstanbul",
            },
            {
                id: "ankara",
                name: "Ankara",
            },
            {
                id: "bursa",
                name: "Bursa",
            },
            {
                id: "antalya",
                name: "Antalya",
            },
        ],
        [
            {
                id: "isparta",
                name: "Isparta",
            },
            {
                id: "ordu",
                name: "Ordu",
            },
        ],
    ];
    return (
        <div className={classes.cityContainer}>
            <span className={classes.cityTitle}>{language.city}</span>
            <div className={classes.cityContentContainer}>
                {cities.map((row, index) => {
                    return (
                        <div key={index} className={classes.row}>
                            {row.map((city, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={classes.cityBox}
                                    >
                                        <img
                                            className={classes.cityPhoto}
                                            src={`./assets/images/${city.id}.jpeg`}
                                            alt={city.id}
                                        />
                                        <div className={classes.nameContainer}>
                                            <span>{city.name}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default CitySection;
