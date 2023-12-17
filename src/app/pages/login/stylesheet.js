import { createUseStyles } from "react-jss";

const useStyle = createUseStyles(
    {
        container: {
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(100,200,100,0.5)",
        },
        centerContainer: {
            width: 500,
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            padding: "5rem",
            borderRadius: 10,
        },
        formContainer: {
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            alignItems: "center",
            backgroundColor: "white",
            padding: "4rem 3rem",
            borderRadius: 10,
            "& img": {
                width: 90,
                height: 90,
            },
            "& span:nth-child(2)": {
                fontSize: "3rem",
                fontFamily: "Alegreya-Regular",
                textAlign: "center",
            },
        },
        form: {
            display: "flex",
            flexDirection: "column",
            gap: "2.5rem",
            width: "100%",
            "& button": {
                marginTop: 30,
            },
        },
        routeContainer: {
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            backgroundColor: "white",
            padding: "3rem 3rem",
            borderRadius: 10,
            "& span": {
                fontSize: "1.5rem",
                fontFamily: "Alegreya-Regular",
                textAlign: "center",
            },
        },
    },
    {
        name: "Page-Login",
    }
);
export default useStyle;
