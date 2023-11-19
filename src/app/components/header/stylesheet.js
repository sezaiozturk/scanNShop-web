import { createUseStyles } from "react-jss";
import { clickEvent } from "../../themes/helpers";

const useStyle = createUseStyles(
    {
        container: {
            backgroundColor: ({ colors }) => colors.background,
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            padding: "1.5rem 8rem",
            boxSizing: "border-box",
            position: "fixed",
            zIndex: 1000,
            right: 0,
            left: 0,
            top: 0,
        },
        contentContainer: {
            justifyContent: "space-between",
            display: "flex",
        },
        logoContainer: {
            alignItems: "center",
            display: "flex",
            ...clickEvent(),
            "&:hover": {
                cursor: "pointer",
            },
        },
        logo: {
            fontSize: "2.2rem",
            color: ({ colors }) => colors.primary,
            fontFamily: "Alegreya-SemiBold",
        },
        menuContainer: {
            alignItems: "center",
            display: "flex",
            gap: 20,
        },
        settings: {
            alignItems: "center",
            display: "flex",
        },
    },
    {
        name: "Component-Header",
    }
);
export default useStyle;
