import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
    container: {
        backgroundColor: ({ colors }) => colors.background,
        flexDirection: "column",
        position: "relative",
        paddingTop: "6rem",
        display: "flex",
    },
    title: {
        color: ({ colors }) => colors.text,
        fontFamily: "Alegreya-Regular",
        padding: "0 8rem",
        fontSize: "3rem",
    },
    photo: {
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        margin: "2.5rem 0 0 0",
        objectFit: "cover",
        height: "35rem",
        width: "100%",
    },
    space: {
        backgroundColor: ({ colors }) => colors.secondary,
        height: "32rem",
    },
    box: {
        backgroundColor: ({ colors }) => colors.background,
        boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.5)",
        flexDirection: "column",
        position: "absolute",
        borderRadius: 15,
        display: "flex",
        padding: "2rem",
        left: "8rem",
        gap: "3rem",
        width: 500,
        top: "38%",
    },
    subTitle: {
        color: ({ colors }) => colors.text,
        fontFamily: "Alegreya-Medium",
        fontSize: "2.2rem",
    },
    text: {
        color: ({ colors }) => colors.text,
        fontFamily: "Alegreya-Regular",
        fontSize: "1.8rem",
    },
});
export default useStyle;
