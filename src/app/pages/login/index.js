import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setemail] = useState("ozturksezai@gmail.com");
    const [password, setpassword] = useState("1234554321");
    const nav = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3001/login", {
                email,
                password,
            })
            .then((res) => {
                nav(`/admin/${res.data[0]._id}`);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const label = { padding: "5px 0", fontSize: 20 };
    const container = { display: "flex", justifyContent: "space-between" };
    const input = { width: 300 };

    return (
        <div
            style={{
                height: "100vh",
                margin: "100px 0 0 100px",
                width: "40%",
            }}
        >
            <h1>Kayıt Formu</h1>
            <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: 25 }}
            >
                <div style={container}>
                    <label style={label}>E posta:</label>
                    <input
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        required
                        style={input}
                    />
                </div>
                <div style={container}>
                    <label style={label}>Şifre:</label>
                    <input
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        required
                        style={input}
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "green",
                        color: "white",
                        fontSize: 20,
                        textAlign: "center",
                    }}
                >
                    Giriş Yap
                </button>
            </form>
        </div>
    );
};

export default Login;
