import { useDispatch, useSelector } from "react-redux";
import useStyle from "./stylesheet";
import { useState } from "react";
import { changeTheme } from "../../redux/theme/themeSlice";
const Switcher2 = ({ onClick }) => {
    const colors = useSelector(({ theme }) => theme.colors);
    const [toggle, setToggle] = useState(0);
    const dispatch = useDispatch();

    const classes = useStyle({ colors, toggle });

    return (
        <div
            id="switcher"
            className={classes.container}
            onClick={() => {
                setToggle(toggle === 0 ? 100 : 0);
                dispatch(changeTheme());
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
export default Switcher2;
