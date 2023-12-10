import { destroyModal, useModals } from "../utils/modal";
import ModalList from "./modalList";
const Modal = () => {
    const globalModals = useModals();

    return (
        <div
            style={{
                backgroundColor: "rgba(0,0,0,0.6)",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {globalModals.map((item) => {
                const modal = ModalList.find((m) => m.name === item.name);
                return <modal.element data={item.data} close={destroyModal} />;
            })}
        </div>
    );
};
export default Modal;
