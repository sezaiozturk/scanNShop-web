import { createUseStyles } from "react-jss";

const useStyle = createUseStyles(
    {
        container: {
            backgroundColor: ({ color }) => color.secondary,
            padding: "2rem 4rem",
            boxSizing: "border-box",
        },
        contentContainer: {},
        logoContainer: {},
        logo: {
            fontSize: 20,
            color: ({ color }) => color.primary,
            fontFamily: "Alegreya-SemiBold",
        },
        menuContainer: {},
    },
    {
        name: "Component-Header",
    }
);
export default useStyle;
