import React, { useState } from "react";
import useStyle from "./stylesheet";
import { useColors } from "../../utils/setting";
import Button from "../button";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Dropdown = ({ options, onSelect }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [toggle, setToggle] = useState(false);
    const colors = useColors();
    const classes = useStyle({ colors });

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        onSelect(option);
        setToggle(false);
    };

    return (
        <div className={classes.container}>
            <Button
                variant="outlined"
                alignSelf="stretch"
                title={selectedOption ? selectedOption.value : "Sıralama"}
                onClick={() => setToggle(!toggle)}
                style={{
                    justifyContent: "space-between",
                    padding: "0.3rem 1rem",
                    borderRadius: 5,
                }}
            >
                {toggle ? (
                    <IoMdArrowDropup color={colors.primary} size={20} />
                ) : (
                    <IoMdArrowDropdown color={colors.primary} size={20} />
                )}
            </Button>
            {toggle && (
                <div className={classes.optionContainer}>
                    {options.map((option) => (
                        <div
                            key={option.key}
                            className={classes.option}
                            onClick={() => handleOptionSelect(option)}
                        >
                            <span className={classes.label}>
                                {option.value}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
