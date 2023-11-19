import { createUseStyles } from "react-jss";

const useStyle = createUseStyles(
    {
        container: {
            backgroundColor: ({ colors }) => colors.secondary,
            padding: "1.5rem 8rem",
            boxSizing: "border-box",
        },
        contentContainer: {
            justifyContent: "space-between",
            alignItems: "center",
            display: "flex",
        },
        logoContainer: {
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            gap: "2rem",
            "& span": {
                color: ({ colors }) => colors.primary,
                fontFamily: "Alegreya-SemiBold",
                fontSize: "14px",
            },
        },
        logo: {
            width: "4rem",
            height: "4rem",
        },
        version: {
            justifyContent: "space-between",
            alignItems: "center",
            display: "flex",
            "& span": {
                color: ({ colors }) => colors.primary,
                fontFamily: "Alegreya-SemiBold",
                fontSize: "14px",
            },
        },
    },
    {
        name: "Component-Footer",
    }
);
export default useStyle;
