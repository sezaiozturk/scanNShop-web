import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useStyle from "./stylesheet";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components";
import Card from "./components/card";

const Admin = () => {
    const { id } = useParams();
    const [barkod, setBarkod] = useState("201213096");
    const [name, setName] = useState("muz");
    const [price, setPrice] = useState("100");
    const label = { padding: "5px 0", fontSize: 20 };
    const container = { display: "flex", justifyContent: "space-between" };
    const input = { width: 300 };
    const [list, setList] = useState([]);
    const colors = useSelector(({ theme }) => theme.colors);
    const language = useSelector(({ locale }) => locale.language);
    const currentCompany = useSelector(
        ({ authentication }) => authentication.company
    );
    const classes = useStyle({ colors });
    const dispatch = useDispatch();
    const [image, setImage] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        productList();
    }, []);

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3001/admin/add", {
                id,
                image,
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
    const renderProductCards = () => {
        const rows = [];
        const productsPerPage = 5;

        for (let i = 0; i < list.length; i += productsPerPage) {
            const products = list.slice(i, i + productsPerPage);
            const row = (
                <div key={i / productsPerPage} className={classes.row}>
                    {products.map((product, index) => (
                        <Card
                            index={index}
                            productId={product._id}
                            selectedProductId={selectedProduct}
                            image={product.image}
                            name={product.name}
                            price={product.price}
                            handleProductSelect={() =>
                                setSelectedProduct(product._id)
                            }
                        />
                    ))}
                </div>
            );
            rows.push(row);
        }

        return rows;
    };

    return (
        <div>
            <div className={classes.container}>
                <div className={classes.leftContainer}>
                    <span className={classes.companyName}>Çamlık Manav</span>
                    <div className={classes.filterContainer}></div>
                    <div
                        style={{
                            padding: 15,
                            backgroundColor: "white",
                            borderRadius: 10,
                        }}
                    >
                        <img
                            src="/assets/images/logo.png"
                            alt="logo"
                            className={classes.logo}
                        />
                    </div>
                </div>
                <div className={classes.rightContainer}>
                    <div className={classes.topContainer}>
                        <span>Merhaba Sezai,</span>
                        <div className={classes.search}>Ara...</div>
                        <Button
                            title={"Sezai Öztürk"}
                            variant="ghost"
                            icon={"fa-solid fa-caret-down"}
                            iconColor="green"
                            reverse
                        />
                    </div>
                    <div className={classes.contentContainer}>
                        <div>
                            <div style={{}}>
                                <Button title="Ürün Ekle" />
                                <Button
                                    title="Sil"
                                    variant="outlined"
                                    visible={selectedProduct}
                                />
                                <Button
                                    title="Güncelle"
                                    variant="outlined"
                                    visible={selectedProduct}
                                />
                                <Button
                                    title="X"
                                    variant="outlined"
                                    visible={selectedProduct}
                                    onClick={() => setSelectedProduct(null)}
                                />
                            </div>
                            {renderProductCards()}
                        </div>
                    </div>
                </div>
            </div>
            <div>
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
                    <form
                        onSubmit={handleSubmit}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 25,
                        }}
                    >
                        <div>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileInputChange}
                            />

                            {image && (
                                <img
                                    style={{
                                        width: "100%",
                                        height: 250,
                                    }}
                                    src={image}
                                />
                            )}
                        </div>
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
        </div>
    );
};

export default Admin;

/**
 *
 */
