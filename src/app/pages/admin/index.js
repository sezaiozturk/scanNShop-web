import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useStyle from "./stylesheet";
import { Button, Dropdown, RadioGroup } from "../../components";
import Card from "./components/card";
import { createModal, useModals } from "../../utils/modal";
import Modal from "../../modals";
import { useColors, useLanguage } from "../../utils/setting";
import { useSelector } from "react-redux";
import { FaCaretDown, FaSearch } from "react-icons/fa";
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
    const [categories, setCategories] = useState([]);
    const [min, setMin] = useState("");
    const [max, setMax] = useState("");
    const [radioOptions, setRadioOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState("");

    const sortOptions = [
        { key: "priceAsc", value: "Fiyata Göre Artan" },
        { key: "priceDesc", value: "Fiyata Göre Azalan" },
        { key: "dateAsc", value: "Tarihe Göre (Yeni)" },
        { key: "dateDesc", value: "Tarihe Göre (Eski)" },
    ];

    const handleDropdown = (e) => {
        const temp = productList;
        let islem;
        switch (e.key) {
            case "priceAsc":
                islem = (a, b) => a.price - b.price;
                break;
            case "priceDesc":
                islem = (a, b) => b.price - a.price;
                break;
            case "dateAsc":
                islem = (a, b) => new Date(b.date) - new Date(a.date);
                break;
            case "dateDesc":
                islem = (a, b) => new Date(a.date) - new Date(b.date);
                break;
        }
        const sortedProducts = temp.slice().sort(islem);
        setTempList(sortedProducts);
    };

    useEffect(() => {
        getProduct();
    }, []);

    useEffect(() => {
        const temp = productList;
        const filteredProducts = temp.filter((product) => {
            return (
                product.name.toLowerCase().includes(searchKey.toLowerCase()) ||
                product.barkod.includes(searchKey)
            );
        });
        setTempList(filteredProducts);
    }, [searchKey]);

    useEffect(() => {
        if (selectedOption != -1) {
            const temp = productList;
            let selectedValue = "";
            radioOptions.map((option) => {
                if (option.key == selectedOption) {
                    selectedValue = option.value;
                }
            });
            const categorizedProduct = temp.filter((product) => {
                return product.category == selectedValue;
            });
            setTempList(categorizedProduct);
        } else {
            setTempList(productList);
        }
    }, [selectedOption]);

    useEffect(() => {
        const options = categories.map((category, index) => ({
            key: index,
            value: category,
        }));
        options.push({ key: -1, value: "tümü" });
        setRadioOptions(options);
    }, [categories]);

    const priceFilter = () => {
        const temp = productList;
        const filteredProducts = temp.filter((product) => {
            return product.price >= min && product.price <= max;
        });
        setTempList(filteredProducts);
    };

    const getCategories = (list) => {
        const categoryList = [
            ...new Set(list.map((product) => product.category)),
        ];
        setCategories(categoryList);
    };

    const getProduct = () => {
        axios
            .post("http://localhost:3001/admin/find", {
                companyId,
            })
            .then((res) => {
                setProductList(res.data);
                getCategories(res.data);
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
                    <div className={classes.filterContainer}>
                        <div className={classes.sectionContainer}>
                            <span className={classes.title}>Kategori</span>
                            <RadioGroup
                                options={radioOptions}
                                onChange={(e) => setSelectedOption(e)}
                            />
                        </div>
                        <div className={classes.sectionContainer}>
                            <span className={classes.title}>Fiyat Aralığı</span>
                            <div className={classes.sectionContentContainer}>
                                <input
                                    type="number"
                                    onChange={(e) => setMin(e.target.value)}
                                    value={min}
                                    className={classes.price}
                                    placeholder="En az"
                                />
                                <span style={{ fontSize: 20 }}>-</span>
                                <input
                                    type="number"
                                    onChange={(e) => setMax(e.target.value)}
                                    value={max}
                                    placeholder="En çok"
                                    className={classes.price}
                                />
                                <Button
                                    icon={<FaSearch color="white" size={12} />}
                                    type="button"
                                    onClick={priceFilter}
                                    style={{
                                        padding: "0.3rem 1rem",
                                        borderRadius: 5,
                                    }}
                                />
                            </div>
                        </div>
                        <div className={classes.sectionContainer}>
                            <Dropdown
                                options={sortOptions}
                                onSelect={handleDropdown}
                            />
                        </div>
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
                                        radioOptions,
                                        setRadioOptions,
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
                            {tempList.length > 0
                                ? renderProductCards(tempList)
                                : renderProductCards(productList)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
