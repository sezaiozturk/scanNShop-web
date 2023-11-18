import Button from "../button";
import useStyle from "./stylesheet";
import { useSelector } from "react-redux";

const Header = () => {
    const colors = useSelector(({ theme }) => theme.colors);
    const language = useSelector(({ locale }) => locale.language);
    const classes = useStyle({ color: colors });

    return (
        <div className={classes.container}>
            <div className={classes.contentContainer}>
                <div className={classes.logoContainer}>
                    <span className={classes.logo}>ScanNShop</span>
                </div>
                <div className={classes.menuContainer}>
                    <Button
                        title={"login"}
                        disabled
                        onClick={() => {
                            console.log("run");
                        }}
                    />
                    <Button
                        title={"login"}
                        variant="outlined"
                        onClick={() => {
                            console.log("run");
                        }}
                    />
                    <Button
                        title={"login"}
                        variant="ghost"
                        onClick={() => {
                            console.log("run");
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
export default Header;
