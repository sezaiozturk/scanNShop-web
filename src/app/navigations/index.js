import { Routes, Route } from "react-router-dom";
import { Home, Signup, Login, Admin } from "../pages";
const Navigation = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin/:companyId" element={<Admin />} />
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
