import { createUseStyles } from "react-jss";

const useStyle = createUseStyles(
    {
        container: {
            border: ({ colors }) => `3px solid ${colors.primary}`,
            backgroundColor: ({ colors }) => colors.secondary,
            flexDirection: "column",
            justifyContent: "center",
            padding: "2.5rem 4rem",
            borderRadius: 15,
            display: "flex",
            width: 450,
            gap: 30,
        },
        form: {
            display: "flex",
            flexDirection: "column",
            gap: 25,
        },
        imageContainer: {
            justifyContent: "center",
            display: "flex",
            padding: "1rem",
        },
        selectContainer: {
            boxShadow: ({ colors }) => `0px 4px 4px ${colors.boxShadow}`,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            display: "flex",
            height: 150,
            width: 150,
        },
        select: {
            color: ({ colors }) => colors.gray,
            fontFamily: "Alegreya-Medium",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            fontSize: "1.2rem",
            padding: "2rem",
            display: "flex",
            gap: "2rem",
        },
        image: {
            borderRadius: 10,
            width: "100%",
            height: "100%",
        },
        buttonContainer: {
            justifyContent: "center",
            display: "flex",
            gap: "3rem",
        },
    },
    {
        name: "Modal-Product",
    }
);
export default useStyle;
