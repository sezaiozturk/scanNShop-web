import { useSelector } from "react-redux";
import useStyle from "./stylesheet";
import { CitySection, PartnerSection, WelcomeSection } from "./views";
import MobileSection from "./views/mobileSection";

const Home = () => {
    const colors = useSelector(({ theme }) => theme.colors);
    const language = useSelector(({ locale }) => locale.language);
    const classes = useStyle({ colors });
    return (
        <div className={classes.container}>
            <WelcomeSection />
            <PartnerSection />
            <CitySection />
            <MobileSection />
        </div>
    );
};
export default Home;
