import { useField } from "formik";

const Input = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props);
    //console.log(field);
    return (
        <div>
            <label>
                <span>Sezai öztür</span>
            </label>
            <input {...field} {...props} />
        </div>
    );
};
export default Input;
