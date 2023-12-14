import { FaMoon, FaSun } from "react-icons/fa";
import { useColors, changeThemes } from "../../utils/setting";
import useStyle from "./stylesheet";
import { useState } from "react";
const Switcher = ({ onClick }) => {
    const colors = useColors();
    const [toggle, setToggle] = useState(0);

    const classes = useStyle({ colors, toggle });

    return (
        <div
            id="switcher"
            className={classes.container}
            onClick={() => {
                setToggle(toggle === 0 ? 100 : 0);
                changeThemes();
            }}
        >
            <div className={classes.circle}>
                {toggle === 0 ? (
                    <FaSun size="1.2rem" color={colors.secondary} />
                ) : (
                    <FaMoon size="1.2rem" color={colors.secondary} />
                )}
            </div>
        </div>
    );
};
export default Switcher;
