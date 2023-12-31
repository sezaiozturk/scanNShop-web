import { createUseStyles } from "react-jss";

const useStyle = createUseStyles(
    {
        container: {
            flexDirection: "column",
            display: "flex",
            width: "100%",
            gap: "0.5rem",
        },
        titleContainer: {
            display: "flex",
            gap: "1rem",
            padding: "0 1rem",
            backgroundColor: "white",
            position: "absolute",
            transform: "translate(10px, -50%)",
            "& span": {
                color: "red",
                fontSize: "2rem",
            },
        },
        label: {
            color: ({ colors }) => colors.primary,
            fontFamily: "Alegreya-Medium",
            fontSize: 14,
        },
        input: {
            backgroundColor: ({ colors }) => colors.secondary,
            border: ({ colors }) => `1px solid ${colors.primary}`,
            color: ({ colors }) => colors.black,
            fontFamily: "poppins-medium",
            padding: "0.8rem 1rem",
            borderRadius: 10,
            outline: "none",
            fontSize: 16,
            "&:focus": {
                border: ({ colors }) => `2px solid ${colors.primary}`,
            },
            boxSizing: "border-box !important",
        },
        errorInput: {
            backgroundColor: ({ colors }) => colors.secondary,
            border: ({ colors }) => `1px solid red`,
            color: ({ colors }) => colors.black,
            fontFamily: "poppins-medium",
            padding: "0.8rem 1rem",
            borderRadius: 10,
            outline: "none",
            fontSize: 16,
            "&:focus": {
                border: ({ colors }) => `2px solid red`,
            },
        },
        error: {
            color: "red",
        },
    },
    { name: "Component-TextInput" }
);
export default useStyle;
