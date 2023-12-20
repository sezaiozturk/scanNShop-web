import useStyle from "./stylesheet";
import { useColors } from "../../utils/setting";
import { useState } from "react";

const RadioGroup = ({ options, onChange }) => {
    const [selectedValue, setSelectedValue] = useState("");
    const colors = useColors();
    const classes = useStyle({ colors });

    const handleOptionChange = (e) => {
        setSelectedValue(parseInt(e.target.value));
        onChange(e.target.value);
    };

    return (
        <div className={classes.container}>
            {options.map((option) => (
                <label key={option.key} className={classes.radioContainer}>
                    <input
                        className={classes.radio}
                        type="radio"
                        value={option.key}
                        checked={selectedValue === option.key}
                        onChange={handleOptionChange}
                    />
                    <span className={classes.label}>{option.value}</span>
                </label>
            ))}
        </div>
    );
};
export default RadioGroup;
