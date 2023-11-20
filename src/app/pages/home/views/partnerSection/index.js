import { useSelector } from "react-redux";
import useStyle from "./stylesheet";
import { Button } from "../../../../components";

const PartnerSection = () => {
    const colors = useSelector(({ theme }) => theme.colors);
    const language = useSelector(({ locale }) => locale.language);
    const classes = useStyle({ colors });
    return (
        <div className={classes.advertContainer}>
            <span className={classes.advertTitle}>{language.advert}</span>
            <img
                src="./assets/images/advert.svg"
                alt="advert"
                className={classes.advertPhoto}
            />
            <div className={classes.space} />
            <div className={classes.box}>
                <span className={classes.title}>{language.start}</span>
                <span className={classes.text}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </span>
                <Button title={language.startUs} />
            </div>
        </div>
    );
};
export default PartnerSection;