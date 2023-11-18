export const clickEvent = () => {
    return {
        "&:hover": {
            opacity: 0.75,
            cursor: "pointer",
        },
        "&:active": {
            transform: "translateY(2px)",
            transition: "transform 0.1s",
        },
    };
};
