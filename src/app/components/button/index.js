import { useColors } from "../../utils/setting";
import useStyle from "./stylesheet";
const Button = ({
    alignSelf = "baseline",
    variant = "filled",
    reverse = false,
    visible = true,
    disabled,
    children,
    loading,
    title,
    icon,
    ...props
}) => {
    //const typography = useSelector(({ theme }) => theme.typography);
    const colors = useColors();
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
        visible && (
            <div className={classes.container}>
                <button
                    className={classes[variant]}
                    disabled={disabled || loading}
                    style={combinedStyle}
                    {...props}
                >
                    {icon}
                    {title && <span>{title}</span>}
                    {children}
                </button>
            </div>
        )
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

                {icon && (
                        <i
                            className={`${icon} ${iconSize}`}
                            style={{ color: iconColor }}
                        ></i>
                    )}
 */
