import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useStyle from "./stylesheet";
import { Button, TextInput } from "../../components";
import Card from "./components/card";
import { createModal, useModals } from "../../utils/modal";
import Modal from "../../modals";
import { useColors, useLanguage } from "../../utils/setting";
import { useSelector } from "react-redux";
import { FaCaretDown } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

const Admin = () => {
    const { companyId } = useParams();
    const [productList, setProductList] = useState([]);
    const [tempList, setTempList] = useState([]);
    const colors = useColors();
    const language = useLanguage();
    const currentCompany = useSelector(
        ({ authentication }) => authentication.company
    );
    const classes = useStyle({ colors });
    const [selectedProduct, setSelectedProduct] = useState(null);
    const modals = useModals();
    const [searchKey, setSearchKey] = useState("");

    useEffect(() => {
        getProduct();
    }, []);

    useEffect(() => {
        const temp = productList;
        const filteredProducts = temp.filter((product) => {
            return product.name.toLowerCase().includes(searchKey.toLowerCase());
        });
        setTempList(filteredProducts);
    }, [searchKey]);

    const getProduct = () => {
        axios
            .post("http://localhost:3001/admin/find", {
                companyId,
            })
            .then((res) => {
                setProductList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const deleteProduct = () => {
        axios
            .post("http://localhost:3001/admin/delete", {
                _id: selectedProduct._id,
            })
            .then((res) => {
                let newList = [];
                newList = productList.filter(
                    (item) => item._id !== res.data._id
                );
                setProductList(newList);
                setSelectedProduct(null);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const renderProductCards = (list) => {
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
                            selectedProductId={
                                selectedProduct === null
                                    ? null
                                    : selectedProduct._id
                            }
                            image={product.image}
                            name={product.name}
                            price={product.price}
                            handleProductSelect={() =>
                                setSelectedProduct(product)
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
                        <input
                            type="text"
                            value={searchKey}
                            onChange={(e) => setSearchKey(e.target.value)}
                            placeholder="Ara..."
                            className={classes.search}
                        />

                        <Button
                            title={"Sezai Öztürk"}
                            variant="ghost"
                            icon={
                                <FaCaretDown
                                    size={"1.5rem"}
                                    color={colors.primary}
                                />
                            }
                            reverse
                        />
                    </div>
                    <div className={classes.contentContainer}>
                        <div className={classes.menuContainer}>
                            <Button
                                title="Ürün Ekle"
                                onClick={() =>
                                    createModal("product", {
                                        productList,
                                        setProductList,
                                        companyId,
                                        page: "add",
                                    })
                                }
                            />
                            {modals.length > 0 && <Modal />}
                            <Button
                                title="Sil"
                                variant="outlined"
                                visible={selectedProduct}
                                onClick={deleteProduct}
                            />
                            <Button
                                title="Güncelle"
                                variant="outlined"
                                visible={selectedProduct}
                                onClick={() => {
                                    createModal("product", {
                                        productList,
                                        setProductList,
                                        setSelectedProduct,
                                        companyId,
                                        page: "update",
                                        product: selectedProduct,
                                    });
                                }}
                            />
                            <Button
                                variant="outlined"
                                visible={selectedProduct}
                                icon={
                                    <IoIosClose
                                        size="2.5rem"
                                        color={colors.primary}
                                    />
                                }
                                onClick={() => setSelectedProduct(null)}
                                style={{
                                    padding: "0.5rem 1rem",
                                }}
                            />
                        </div>
                        <div className={classes.cardContainer}>
                            {searchKey.length === 0
                                ? renderProductCards(productList)
                                : renderProductCards(tempList)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
