import { useSelector } from "react-redux";
import useStyle from "./stylesheet";
import { clickEvent } from "../../themes/helpers";
const Button = ({
    alignSelf = "baseline",
    iconColor = "#F5F5F5",
    variant = "filled",
    iconSize = "fa-xl",
    reverse = false,
    disabled,
    loading,
    onClick,
    title,
    icon,
}) => {
    const colors = useSelector(({ theme }) => theme.colors);
    //const typography = useSelector(({ theme }) => theme.typography);
    const classes = useStyle({ colors });
    const opacity = disabled || loading ? 0.6 : null;
    const flexDirection = reverse ? "row-reverse" : null;
    //loading, disable error
    const combinedStyle = {
        opacity,
        alignSelf,
        flexDirection,
    };

    return (
        <div className={classes.container}>
            <button
                className={classes[variant]}
                onClick={onClick}
                disabled={disabled || loading}
                style={combinedStyle}
            >
                {icon && (
                    <i
                        className={`${icon} ${iconSize}`}
                        style={{ color: iconColor }}
                    ></i>
                )}
                {title && <span>{title}</span>}
            </button>
        </div>
    );
};
export default Button;

/**
 * className={[
                    classes[variant].container,
                    (disabled || loading) && { opacity: 0.6 },
                    { alignSelf: spreadBehavior },
                    reverse && { flexDirection: "row-reverse" },
                ].join(" ")}

                {loading && <i className="fa-solid fa-spinner"></i>}
                {icon && <i className="fa-solid fa-close"></i>}
 */
