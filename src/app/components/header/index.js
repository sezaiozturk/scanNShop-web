import useStyle from "./stylesheet";

const Header = () => {
    const classes = useStyle({ color: "green" });
    return <div className={classes.container}></div>;
};
export default Header;
