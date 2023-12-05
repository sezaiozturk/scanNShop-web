import { createUseStyles } from "react-jss";

const useStyle = createUseStyles(
    {
        container: {
            backgroundColor: ({ colors }) => colors.primary,
            height: "100vh",
            display: "flex",
        },
        leftContainer: {
            backgroundColor: ({ colors }) => colors.primary,
            justifyContent: "space-around",
            flexDirection: "column",
            padding: "2rem 1rem",
            alignItems: "center",
            display: "flex",
            height: "100%",
            width: 300,
        },
        companyName: {
            color: ({ colors }) => colors.secondary,
            fontFamily: "Alegreya-Bold",
            fontSize: "3rem",
        },
        filterContainer: {
            backgroundColor: ({ colors }) => colors.secondary,
            borderRadius: 10,
            height: "70%",
            width: "90%",
        },
        logo: {
            height: 75,
            width: 75,
        },
        rightContainer: {
            backgroundColor: ({ colors }) => colors.gray100,
            borderRadius: "30px 0 0 30px",
            padding: "0 3rem 1rem 3rem",
            flexDirection: "column",
            display: "flex",
            height: "100%",
            width: "100%",
        },
        topContainer: {
            backgroundColor: "transparent",
            justifyContent: "space-between",
            padding: "4rem 1rem",
            alignItems: "center",
            display: "flex",
            height: 50,
            "& span": {
                fontFamily: "Alegreya-SemiBold",
                fontSize: "2rem",
            },
        },
        search: {
            backgroundColor: "#E8FFE0",
            alignItems: "center",
            fontSize: "1.5rem",
            padding: "0 2rem",
            display: "flex",
            borderRadius: 10,
            width: 300,
            height: 30,
        },
        contentContainer: {
            backgroundColor: ({ colors }) => colors.secondary,
            flexDirection: "column",
            borderRadius: 15,
            padding: "0.5rem 2rem",
            display: "flex",
            height: "100%",
            width: "100%",
            overflow: "hidden",
        },
        menuContainer: {
            display: "flex",
            gap: "1.5rem",
            width: "100%",
            padding: "1rem 0",
        },
        cardContainer: {
            overflowY: "scroll",
            flexDirection: "column",
            display: "flex",
            gap: "1.5rem",
            "&::-webkit-scrollbar": {
                width: "3px",
            },
            "&::-webkit-scrollbar-thumb": {
                backgroundColor: "green",
                borderRadius: "5px",
            },
            "&::-webkit-scrollbar-track": {
                backgroundColor: "#f0f0f0",
            },
        },
        row: {
            display: "flex",
            gap: "3rem",
        },
    },
    {
        name: "Pages-Admin",
    }
);
export default useStyle;
