import { useField } from "formik";
import { useColors } from "../../utils/setting";
import useStyle from "./stylesheet";

const TextInput = ({ label, id, error, ...props }) => {
    const colors = useColors();
    const classes = useStyle({ colors });
    const [field, meta] = useField(props);

    return (
        <div className={classes.container}>
            <div className={classes.titleContainer}>
                <label className={classes.label} htmlFor={id}>
                    {label}
                </label>
            </div>
            <input
                className={
                    meta.error && meta.touched
                        ? classes.errorInput
                        : classes.input
                }
                {...props}
                {...field}
                id={id}
            />
            {meta.touched && meta.error ? (
                <div className={classes.error}> * {meta.error}</div>
            ) : null}
        </div>
    );
};
export default TextInput;
