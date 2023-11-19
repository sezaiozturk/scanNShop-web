import { createUseStyles } from "react-jss";

const useStyle = createUseStyles(
    {
        container: {
            backgroundColor: ({ color }) => color.secondary,
            padding: "1.5rem 4rem",
            boxSizing: "border-box",
        },
        contentContainer: {
            justifyContent: "space-between",
            display: "flex",
        },
        logoContainer: {
            alignItems: "center",
            display: "flex",
        },
        logo: {
            fontSize: 20,
            color: ({ color }) => color.primary,
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
