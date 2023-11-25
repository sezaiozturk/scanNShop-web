import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Admin = () => {
    const { id } = useParams();
    const [barkod, setBarkod] = useState("201213096");
    const [name, setName] = useState("muz");
    const [price, setPrice] = useState("100");
    const label = { padding: "5px 0", fontSize: 20 };
    const container = { display: "flex", justifyContent: "space-between" };
    const input = { width: 300 };
    const [list, setList] = useState([]);

    useEffect(() => {
        productList();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3001/admin/add", {
                id,
                barkod,
                name,
                price,
            })
            .then((res) => {
                setList([...list, res.data]);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const productList = () => {
        axios
            .post("http://localhost:3001/admin/find", {
                id,
            })
            .then((res) => {
                setList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div style={{ padding: 100, fontSize: 20 }}>
            {list.map((product) => {
                return (
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <span>{product.name}</span>
                        <span>{product.price}</span>
                    </div>
                );
            })}
            <div
                style={{
                    backgroundColor: "#e0e0e0",
                    width: 400,
                    height: 500,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 30,
                    paddingTop: 50,
                }}
            >
                <button onClick={productList}>listele</button>
                <form
                    onSubmit={handleSubmit}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 25,
                    }}
                >
                    <img
                        style={{
                            width: "100%",
                            height: 250,
                            backgroundColor: "gray",
                        }}
                    />
                    <div style={container}>
                        <label style={label}>Ürün kodu:</label>
                        <input
                            type="text"
                            value={barkod}
                            onChange={(e) => setBarkod(e.target.value)}
                            required
                            style={input}
                        />
                    </div>
                    <div style={container}>
                        <label style={label}>Ürün adı:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            style={input}
                        />
                    </div>
                    <div style={container}>
                        <label style={label}>Fiyatı:</label>
                        <input
                            type="text"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
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
        </div>
    );
};

export default Admin;
