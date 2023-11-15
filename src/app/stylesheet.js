import { createUseStyles } from "react-jss";

const useStyle = createUseStyles(
    {
        "@global": {
            "@font-face": [
                {
                    fontFamily: "Alegreya-Black",
                    src: "url('/assets/fonts/Alegreya-Black.ttf')",
                },
                {
                    fontFamily: "Alegreya-BlackItalic",
                    src: "url('/assets/fonts/Alegreya-BlackItalic.ttf')",
                },
                {
                    fontFamily: "Alegreya-Bold",
                    src: "url('/assets/fonts/Alegreya-Bold.ttf')",
                },
                {
                    fontFamily: "Alegreya-BoldItalic",
                    src: "url('/assets/fonts/Alegreya-BoldItalic.ttf')",
                },
                {
                    fontFamily: "Alegreya-Italic",
                    src: "url('/assets/fonts/Alegreya-Italic.ttf')",
                },
                {
                    fontFamily: "Alegreya-Medium",
                    src: "url('/assets/fonts/Alegreya-Medium.ttf')",
                },
                {
                    fontFamily: "Alegreya-MediumItalic",
                    src: "url('/assets/fonts/Alegreya-MediumItalic.ttf')",
                },
                {
                    fontFamily: "Alegreya-Regular",
                    src: "url('/assets/fonts/Alegreya-Regular.ttf')",
                },
                {
                    fontFamily: "Alegreya-SemiBold",
                    src: "url('/assets/fonts/Alegreya-SemiBold.ttf')",
                },
                {
                    fontFamily: "Alegreya-SemiBoldItalic",
                    src: "url('/assets/fonts/Alegreya-SemiBoldItalic.ttf')",
                },
            ],
            "*": {
                textDecoration: "none",
                boxSizing: "border-box",
                scrollBehavior: "smooth",
                margin: 0,
            },
            html: {
                fontSize: "62.5%",
                userSelect: "none",
            },
        },
        container: {},
    },
    {
        name: "Global",
    }
);
export default useStyle;
