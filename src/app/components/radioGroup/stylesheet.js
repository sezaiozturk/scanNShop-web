import { createUseStyles } from "react-jss";

const useStyle = createUseStyles(
    {
        container: {
            flexDirection: "column",
            display: "flex",
            gap: 8,
        },
        radioContainer: {
            alignItems: "center",
            display: "flex",
            gap: 5,
        },
        radio: {
            accentColor: ({ colors }) => colors.primary,
        },
        label: {
            fontFamily: "Alegreya-Regular",
            fontSize: "1.4rem",
        },
    },
    {
        name: "Component-RadioButton",
    }
);
export default useStyle;
