import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
    cityContainer: {
        flexDirection: "column",
        backgroundColor: ({ colors }) => colors.secondary,
        padding: "6rem 8rem",
        display: "flex",
        gap: "3rem",
    },
    cityTitle: {
        color: ({ colors }) => colors.text,
        fontFamily: "Alegreya-Regular",
        fontSize: "3rem",
    },
    cityContentContainer: {
        display: "flex",
        flexWrap: "wrap",
        gap: "3rem",
    },
    row: {
        justifyContent: "start",
        alignItems: "center",
        display: "flex",
        gap: "3rem",
    },
    cityBox: {
        position: "relative",
        height: "30rem",
        border: "none",
        width: "30rem",
    },
    cityPhoto: {
        backgroundColor: "gray",
        borderRadius: 20,
        height: "100%",
        width: "100%",
    },
    nameContainer: {
        backgroundColor: ({ colors }) => colors.background,
        justifyContent: "center",
        display: "inline-flex",
        padding: "1rem 2rem",
        alignItems: "center",
        position: "absolute",
        borderRadius: 10,
        bottom: "1rem",
        left: "1rem",
        "& span": {
            color: ({ colors }) => colors.text,
            fontFamily: "Alegreya-Regular",
            fontSize: "1.8rem",
        },
    },
});
export default useStyle;
