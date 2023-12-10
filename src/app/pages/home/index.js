import useStyle from "./stylesheet";
import { CitySection, PartnerSection, WelcomeSection } from "./views";
import MobileSection from "./views/mobileSection";
import { useColors, useLanguage } from "../../utils/setting";

const Home = () => {
    const colors = useColors();
    const language = useLanguage();
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
