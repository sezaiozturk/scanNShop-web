import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
    mobileContainer: {
        backgroundColor: ({ colors }) => colors.secondary,
        flexDirection: "column",
        padding: "6rem 8rem",
        display: "flex",
        gap: "3rem",
    },
    mobileContentContainer: {
        backgroundColor: ({ colors }) => colors.primary,
        flexDirection: "column",
        borderRadius: 20,
        display: "flex",
        padding: "4rem",
        gap: "3rem",
    },
    appTitle: {
        color: ({ colors }) => colors.white,
        fontFamily: "Alegreya-Regular",
        fontSize: "2.2rem",
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
    cityTitle: {
        color: ({ colors }) => colors.text,
        fontFamily: "Alegreya-Regular",
        fontSize: "3rem",
    },
});
export default useStyle;
