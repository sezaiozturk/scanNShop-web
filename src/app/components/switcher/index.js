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
                    <i
                        className="fa-solid fa-sun fa-lg"
                        style={{ color: colors.secondary }}
                    ></i>
                ) : (
                    <i
                        className="fa-solid fa-moon fa-lg"
                        style={{ color: colors.secondary }}
                    ></i>
                )}
            </div>
        </div>
    );
};
export default Switcher;
