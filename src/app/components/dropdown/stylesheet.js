import { createUseStyles } from "react-jss";

const useStyle = createUseStyles(
    {
        container: {
            display: "flex",
            flexDirection: "column",
            gap: 2,
        },
        optionContainer: {
            display: "flex",
            flexDirection: "column",
            border: ({ colors }) => `1px solid ${colors.primary}`,
            boxShadow: "2px 2px 2px rgba(0,0,0,0.4)",
            borderRadius: 5,
        },
        option: {
            padding: 5,
            transition: "all 0s",
            "&:hover": {
                backgroundColor: ({ colors }) => colors.primary,
                color: "white",
            },
        },
        label: {
            fontSize: "1.4rem",
            fontFamily: "Alegreya-Regular",
        },
    },
    {
        name: "Component-Dropdown",
    }
);
export default useStyle;
