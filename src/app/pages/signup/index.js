import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [companyName, setcompanyname] = useState("Çamlık Manav");
    const [companyType, setcompanyType] = useState("manav");
    const [city, setcity] = useState("istanbul");
    const [district, setdistrict] = useState("kartal");
    const [neighbourhood, setneighbourhood] = useState("cevizli");
    const [name, setname] = useState("sezai");
    const [surName, setSurName] = useState("öztürk");
    const [email, setemail] = useState("ozturksezai@gmail.com");
    const [phoneNumber, setphoneNumber] = useState("05368505555");
    const [password, setpassword] = useState("1234554321");
    const nav = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3001/signup", {
                companyName,
                companyType,
                city,
                district,
                neighbourhood,
                name,
                surName,
                email,
                phoneNumber,
                password,
            })
            .then((res) => {
                console.log(res);
                nav("/login");
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
                    <label style={label}>İşyeri:</label>
                    <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setcompanyname(e.target.value)}
                        required
                        style={input}
                    />
                </div>
                <div style={container}>
                    <label style={label}>İşletme Türü:</label>
                    <input
                        type="text"
                        value={companyType}
                        onChange={(e) => setcompanyType(e.target.value)}
                        required
                        style={input}
                    />
                </div>
                <div style={container}>
                    <label style={label}>Şehir:</label>
                    <input
                        value={city}
                        onChange={(e) => setcity(e.target.value)}
                        required
                        style={input}
                    />
                </div>
                <div style={container}>
                    <label style={label}>İlçe:</label>
                    <input
                        value={district}
                        onChange={(e) => setdistrict(e.target.value)}
                        required
                        style={input}
                    />
                </div>
                <div style={container}>
                    <label style={label}>Mahalle:</label>
                    <input
                        value={neighbourhood}
                        onChange={(e) => setneighbourhood(e.target.value)}
                        required
                        style={input}
                    />
                </div>
                <div style={container}>
                    <label style={label}>Ad:</label>
                    <input
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        required
                        style={input}
                    />
                </div>
                <div style={container}>
                    <label style={label}>Soyad:</label>
                    <input
                        value={surName}
                        onChange={(e) => setSurName(e.target.value)}
                        required
                        style={input}
                    />
                </div>
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
                    <label style={label}>Telefon:</label>
                    <input
                        value={phoneNumber}
                        onChange={(e) => setphoneNumber(e.target.value)}
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
                    Gönder
                </button>
            </form>
        </div>
    );
};

export default Signup;
