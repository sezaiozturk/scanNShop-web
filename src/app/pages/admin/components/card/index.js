import { useSelector } from "react-redux";
import useStyle from "./stylesheet";
const Card = ({
    handleProductSelect,
    selectedProductId,
    productId,
    price,
    image,
    index,
    name,
}) => {
    const colors = useSelector(({ theme }) => theme.colors);
    const tagColors = [colors.pink, colors.green, colors.red, colors.khaki];
    const tagColor = tagColors[index % 4];
    const classes = useStyle({ colors, tagColor });
    const isSelected = productId === selectedProductId;
    return (
        <div
            key={productId}
            className={classes.container}
            onClick={handleProductSelect}
        >
            <div
                className={isSelected ? classes.filter2 : classes.filter}
            ></div>
            <img src={image} className={classes.photo} />
            <span className={classes.name}>{name}</span>
            <div className={classes.priceContainer}>
                <span>{price}</span>
            </div>
        </div>
    );
};
export default Card;