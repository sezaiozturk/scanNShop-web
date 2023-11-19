import { createUseStyles } from "react-jss";

const useStyle = createUseStyles(
    {
        container: {
            backgroundColor: ({ colors }) => colors.gray,
            borderRadius: "1.25rem",
            userSelect: "none",
            margin: "1rem",
            width: "5rem",
        },
        circle: {
            transform: ({ toggle }) => `translateX(${toggle}%)`,
            justifyContent: "center",
            backgroundColor: ({ colors }) => colors.primary,
            alignItems: "center",
            borderRadius: 12.5,
            display: "flex",
            height: 25,
            width: 25,
        },
    },
    {
        name: "Component-Switcher",
    }
);

export default useStyle;
