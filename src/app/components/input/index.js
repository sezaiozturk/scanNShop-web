import { useField } from "formik";

const Input = ({ label, ...props }) => {
    //console.log(field);
    return (
        <div>
            <label>
                <span>Sezai öztür</span>
            </label>
            <input {...props} />
        </div>
    );
};
export default Input;
