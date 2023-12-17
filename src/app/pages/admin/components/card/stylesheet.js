import { createUseStyles } from "react-jss";
const useStyle = createUseStyles(
    {
        container: {
            boxShadow: ({ colors }) => `0px 4px 4px ${colors.boxShadow}`,
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            borderRadius: 10,
            display: "flex",
            padding: 15,
            gap: 5,
        },
        filter: {
            background:
                "linear-gradient(0deg, #FFF 0.5%, rgba(255, 255, 255, 0.00) 36.35%)",
            position: "absolute",
            height: 125,
            width: 125,
            top: 15,
        },
        filter2: {
            border: ({ colors }) => `2px solid ${colors.primary}`,
            background: "rgba(49, 139, 17, 0.57)",
            position: "absolute",
            borderRadius: 10,
            height: "100%",
            width: "100%",
        },

        photo: {
            borderRadius: "10px 10px 0 0",
            height: 125,
            width: 125,
        },
        name: {
            color: ({ tagColor }) => tagColor,
            fontFamily: "Alegreya-Regular",
            fontSize: "1.5rem",
        },
        priceContainer: {
            backgroundColor: ({ tagColor }) => tagColor,
            padding: "3px 20px",
            borderRadius: 15,
            "& span:nth-child(1)": {
                color: ({ colors }) => colors.white,
                fontSize: "1.8rem",
            },
        },
    },
    { name: "Component-Card" }
);

export default useStyle;
