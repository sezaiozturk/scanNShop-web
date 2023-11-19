import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
const Navigation = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<div>lorem</div>} />
            <Route
                path="*"
                element={
                    <center>
                        <div
                            style={{
                                width: "100%",
                                height: "100%",
                                fontSize: 200,
                            }}
                        >
                            404
                        </div>
                    </center>
                }
            />
        </Routes>
    );
};
export default Navigation;
