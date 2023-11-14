import { useSelector, useDispatch } from "react-redux";
import { change } from "./redux/theme/themeSlice";

function App() {
    const colors = useSelector(({ theme }) => theme.colors);

    const dispatch = useDispatch();
    return (
        <div className="App">
            <span style={{ fontSize: 50, color: colors.secondary }}>
                ScanNShop Web Site
            </span>
            <button
                onClick={() => {
                    dispatch(change());
                }}
            >
                change theme
            </button>
        </div>
    );
}

export default App;
