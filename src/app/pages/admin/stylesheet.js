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
            justifyContent: "space-between",
            flexDirection: "column",
            padding: "2rem 1.5rem",
            alignItems: "center",
            display: "flex",
            height: "100%",
            gap: 20,
        },
        companyName: {
            color: ({ colors }) => colors.secondary,
            fontFamily: "Alegreya-Bold",
            fontSize: "3rem",
        },
        filterContainer: {
            backgroundColor: ({ colors }) => colors.secondary,
            flexDirection: "column",
            overflowY: "scroll",
            borderRadius: "10px 0 0 10px",
            display: "flex",
            height: "100%",
            padding: 10,
            gap: 20,
            "&::-webkit-scrollbar": {
                width: "3px",
            },
            "&::-webkit-scrollbar-thumb": {
                backgroundColor: "orange",
                borderRadius: "5px",
            },
            "&::-webkit-scrollbar-track": {
                backgroundColor: "#f0f0f0",
            },
        },
        sectionContainer: {
            flexDirection: "column",
            display: "flex",
            gap: 10,
        },
        sectionContentContainer: {
            display: "flex",
            gap: 10,
        },
        title: {
            fontFamily: "Alegreya-Medium",
            fontSize: "1.6rem",
        },
        price: {
            border: "1.5px solid green",
            MozAppearance: "textfield",
            WebkitAppearance: "none",
            fontSize: "1.2rem",
            borderRadius: 5,
            padding: 5,
            width: 52,
        },
        logo: {
            height: 75,
            width: 75,
        },
        rightContainer: {
            backgroundColor: ({ colors }) => colors.gray100,
            borderRadius: "10px 0 0 10px",
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
            boxShadow: "2px 2px 4px 1px rgba(0,0,0,0.2)",
            border: "0.2px solid green",
            backgroundColor: "#E8FFE0",
            alignItems: "center",
            fontSize: "1.5rem",
            padding: "0 2rem",
            display: "flex",
            borderRadius: 5,
            outline: "none",
            width: 300,
            height: 30,
        },
        contentContainer: {
            backgroundColor: ({ colors }) => colors.secondary,
            flexDirection: "column",
            padding: "0.5rem 2rem",
            overflow: "hidden",
            borderRadius: 15,
            display: "flex",
            height: "100%",
            width: "100%",
        },
        menuContainer: {
            padding: "1rem 0",
            display: "flex",
            width: "100%",
            gap: "1.5rem",
        },
        cardContainer: {
            flexDirection: "column",
            overflowY: "scroll",
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
            padding: "0.5rem",
            display: "flex",
            gap: "3rem",
        },
    },
    {
        name: "Pages-Admin",
    }
);
export default useStyle;
