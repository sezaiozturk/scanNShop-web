import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useStyle from "./stylesheet";
import { Button } from "../../components";
import Card from "./components/card";
import { createModal, useModals } from "../../utils/modal";
import Modal from "../../modals";
import { useColors, useLanguage } from "../../utils/setting";
import { useSelector } from "react-redux";

const Admin = () => {
    const { companyId } = useParams();
    const [list, setList] = useState([]);
    const colors = useColors();
    const language = useLanguage();
    const currentCompany = useSelector(
        ({ authentication }) => authentication.company
    );
    const classes = useStyle({ colors });
    const [selectedProduct, setSelectedProduct] = useState(null);
    const modals = useModals();

    useEffect(() => {
        productList();
    }, []);

    const productList = () => {
        axios
            .post("http://localhost:3001/admin/find", {
                companyId,
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
        const productsPerPage = 6;

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
                        <div className={classes.menuContainer}>
                            <Button
                                title="Ürün Ekle"
                                onClick={() =>
                                    createModal("product", {
                                        list,
                                        setList,
                                        companyId,
                                    })
                                }
                            />
                            {modals.length > 0 && <Modal />}
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
                        <div className={classes.cardContainer}>
                            {renderProductCards()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
