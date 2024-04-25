import { useColors } from "../../../../utils/setting";
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
    const colors = useColors();
    const tagColors = [colors.pink, colors.green, colors.red, colors.khaki];
    const tagColor = tagColors[index % 4];
    const classes = useStyle({ colors, tagColor });
    const isSelected = productId === selectedProductId;
    console.log(image);
    return (
        <div
            key={productId}
            className={classes.container}
            onClick={handleProductSelect}
        >
            <span
                className={isSelected ? classes.filter2 : classes.filter}
            ></span>
            <img
                src={`http://localhost:3000/${image}`}
                className={classes.photo}
            />
            <span className={classes.name}>{name}</span>
            <div className={classes.priceContainer}>
                <span>{price}</span>
            </div>
        </div>
    );
};
export default Card;
