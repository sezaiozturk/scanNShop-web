import { useDispatch, useSelector } from "react-redux";
import { append, destroy, destroyAll } from "../redux/modal/modalSlice";
import { store } from "../redux/store";

export const useModals = () => useSelector(({ modal }) => modal.modals);
export const createModal = (name, data = false) => {
    store.dispatch(append({ name, data }));
};
export const destroyModal = () => store.dispatch(destroy());
export const destroyAllModal = () => store.dispatch(destroyAll());
