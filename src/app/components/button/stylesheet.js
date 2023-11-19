import { createUseStyles } from "react-jss";
import { clickEvent } from "../../themes/helpers";

const baseStyle = {
    backgroundColor: ({ colors }) => colors.primary,
    borderColor: ({ colors }) => colors.primary,
    padding: "0.5rem 2rem",
    justifyContent: "center",
    borderStyle: "solid",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 2,
    display: "flex",
    ...clickEvent(),
    height: 20,
    gap: 10,
    "& span": {
        color: ({ colors }) => colors.white,
        fontFamily: "Alegreya-Medium",
        fontSize: "1.5rem",
    },
};
const useStyle = createUseStyles(
    {
        container: {
            display: "flex",
            flexDirection: "column",
        },
        filled: {
            ...baseStyle,
        },
        outlined: {
            ...baseStyle,
            backgroundColor: ({ colors }) => colors.secondary,
            "& span": {
                color: ({ colors }) => colors.primary,
                fontFamily: "Alegreya-Medium",
                fontSize: "1.5rem",
            },
        },
        ghost: {
            ...baseStyle,
            backgroundColor: "transparent",
            borderWidth: "0",
            "& span": {
                color: ({ colors }) => colors.primary,
                fontFamily: "Alegreya-Medium",
                fontSize: "1.5rem",
            },
        },
    },
    { name: "Component-Button" }
);

export default useStyle;
