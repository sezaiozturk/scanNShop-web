import { useModals } from "../utils/modal";
import ModalList from "./modalList";
const Modal = () => {
    const globalModals = useModals();

    return (
        <div>
            {globalModals.map((item) => {
                const modal = ModalList.find((m) => m.name === item.name);
                return <modal.element />;
            })}
        </div>
    );
};
export default Modal;
