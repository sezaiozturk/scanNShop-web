import { createUseStyles } from "react-jss";

const useStyle = createUseStyles(
    {
        container: {
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(100,200,100,0.5)",
        },
        innerContainer: {
            display: "flex",
            gap: "20rem",
            padding: "5rem",
            justifyContent: "space-between",
            borderRadius: 10,
        },
        messageContainer: {
            width: 400,
            backgroundColor: "red",
            backgroundColor: "rgba(0,0,0,0.8)",
            height: 220,
            padding: 15,
            borderRadius: 10,
            gap: "2rem",
            display: "flex",
            flexDirection: "column",
            "& span:nth-child(1)": {
                fontSize: "3rem",
                color: "white",
                fontFamily: "Alegreya-Medium",
            },
            "& span:nth-child(2)": {
                fontSize: "1.5rem",
                display: "flex",
                gap: "2rem",
                color: "white",
                fontFamily: "Alegreya-Regular",
                flexDirection: "column",
            },
        },
        formContainer: {
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            alignItems: "center",
            padding: "4rem 3rem",
            backgroundColor: "white",
            borderRadius: 10,
            "& span:nth-child(1)": {
                textAlign: "center",
                fontSize: "1.5rem",
                fontFamily: "Alegreya-Regular",
            },
        },
        form: {
            display: "flex",
            flexDirection: "column",
            gap: "2.5rem",
            width: 350,
            "& button": {
                marginTop: 30,
            },
        },
    },
    {
        name: "Page-Login",
    }
);
export default useStyle;
