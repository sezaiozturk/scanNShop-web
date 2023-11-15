import { createUseStyles } from "react-jss";

const useStyle = createUseStyles(
    {
        container: {
            backgroundColor: "green",
            height: 100,
        },
    },
    {
        name: "Component-Header",
    }
);
export default useStyle;
