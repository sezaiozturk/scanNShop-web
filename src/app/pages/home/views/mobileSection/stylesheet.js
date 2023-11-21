import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
    container: {
        backgroundColor: ({ colors }) => colors.secondary,
        flexDirection: "column",
        padding: "6rem 8rem",
        display: "flex",
        gap: "3rem",
    },
    contentContainer: {
        backgroundColor: ({ colors }) => colors.primary,
        flexDirection: "column",
        borderRadius: 20,
        display: "flex",
        padding: "4rem",
        gap: "3rem",
    },
    title: {
        color: ({ colors }) => colors.text,
        fontFamily: "Alegreya-Regular",
        fontSize: "3rem",
    },
    qrContainer: {
        display: "flex",
        width: "40%",
        gap: "3rem",
    },
    qr: {
        backgroundColor: "red",
        borderRadius: 5,
        height: 100,
        width: 100,
    },
    appContent: {
        color: ({ colors }) => colors.white,
        fontFamily: "Alegreya-Regular",
        fontSize: "1.8rem",
    },
    subTitle: {
        color: ({ colors }) => colors.white,
        fontFamily: "Alegreya-Regular",
        fontSize: "2.2rem",
    },
});
export default useStyle;
