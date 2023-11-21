import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
    container: {
        backgroundColor: ({ colors }) => colors.secondary,
        padding: "10rem 8rem 4rem 8rem",
    },
    contentContainer: {
        justifyContent: "space-between",
        alignItems: "center",
        display: "flex",
        gap: "20rem",
    },
    slogan: {
        color: ({ colors }) => colors.text,
        fontFamily: "Alegreya-Regular",
        marginBottom: "10rem",
        letterSpacing: 1,
        fontSize: "4rem",
    },
    welcome: {
        height: "50rem",
        width: "50rem",
    },
});
export default useStyle;
