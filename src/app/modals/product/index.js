import axios from "axios";
import { Button, TextInput } from "../../components";
import { useEffect, useState } from "react";
import { useColors, useLanguage } from "../../utils/setting";
import useStyle from "./stylesheet";
import { Form, Formik } from "formik";

const ProductModal = ({ data, close }) => {
    const colors = useColors();
    const language = useLanguage();
    const classes = useStyle({ colors });
    const [file, setFile] = useState("");
    const {
        productList,
        setProductList,
        radioOptions,
        setRadioOptions,
        setSelectedProduct,
        companyId,
        page,
        product,
    } = data;

    useEffect(() => {
        if (page === "update") {
            setImage(`http://localhost:3000/${product.image}`);
        }
    }, []);
    useEffect(() => {
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }, [file]);

    const initialValues =
        product === undefined
            ? { barkod: "", category: "", name: "", price: "" }
            : {
                barkod: product.barkod,
                category: product.category,
                name: product.name,
                price: product.price,
            };

    const [image, setImage] = useState(null);

    const categoryControl = (category) => {
        const list = radioOptions.filter((option) =>
            option.value === category ? true : false
        );

        if (list.length === 0) {
            setRadioOptions([
                ...radioOptions,
                { key: radioOptions.length, value: category },
            ]);
        }
    };

    const handleFileInputChange = (e) => {
        console.log(e.target.files[0])
        setFile(e.target.files[0]);
    };

    const updateProductDetails = ({ barkod, category, name, price }, filePath) => {
        axios
            .post("http://localhost:3000/admin/update", {
                _id: product._id,
                companyId,
                category,
                image: filePath,
                barkod,
                name,
                price,
            })
            .then((res) => {
                const updatedProduct = res.data;
                let updatedList = productList.map((product) => {
                    if (product._id === updatedProduct._id) {
                        return { ...updatedProduct };
                    }
                    return product;
                });
                setProductList(updatedList);
                setSelectedProduct(null);
                close();
            })
            .catch((err) => {
                console.log(err);
            });
    }
    const addProductDetails = ({ barkod, category, name, price }, filePath) => {
        axios
            .post("http://localhost:3000/admin/add", {
                companyId,
                category,
                image: filePath,
                barkod,
                name,
                price,
                date: new Date(),
            })
            .then((res) => {
                setProductList([...productList, res.data]);
                categoryControl(res.data.category);
                close();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const handleSubmit = (data, actions) => {
        const formData = new FormData();
        if (image.split(":")[0] === "http") {
            updateProductDetails(data, null);
        }
        else {
            formData.append("file", file);
            axios
                .post("http://localhost:3000/admin/upload", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then((res) => {
                    const filePath = res.data.filePath;
                    if (page === "add") {
                        addProductDetails(data, filePath);
                    } else {
                        updateProductDetails(data, filePath);
                    }
                });
        }
    };

    return (
        <div className={classes.container}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {() => (
                    <Form className={classes.form}>
                        <div className={classes.imageContainer}>
                            <label
                                htmlFor="image"
                                className={classes.selectContainer}
                            >
                                {!image ? (
                                    <div className={classes.select}>
                                        <i
                                            className={
                                                "fa-sharp fa-regular fa-images fa-4x"
                                            }
                                            style={{ color: colors.gray }}
                                        ></i>
                                        <span>
                                            Bilgisayarınızdan ürün resmini seçin
                                        </span>
                                    </div>
                                ) : (
                                    <img
                                        className={classes.image}
                                        src={image}
                                    />
                                )}
                            </label>
                            <input
                                id="image"
                                type="file"
                                accept="image/*"
                                onChange={handleFileInputChange}
                                style={{ display: "none" }}
                            />
                        </div>
                        <TextInput
                            name="barkod"
                            label={"Ürün kodu:"}
                            id={"barkod"}
                            type="text"
                        />
                        <TextInput
                            name="category"
                            label={"Ürün Kategorisi:"}
                            id={"category"}
                            type="text"
                        />
                        <TextInput
                            name="name"
                            label={"Ürün Adı:"}
                            id={"name"}
                            type="text"
                        />
                        <TextInput
                            name="price"
                            label={"Ürün Fiyatı:"}
                            id={"price"}
                            type="number"
                        />
                        <div className={classes.buttonContainer}>
                            <Button
                                title={"İptal"}
                                variant="outlined"
                                onClick={close}
                            />
                            <Button
                                title={page === "add" ? "Kaydet" : "Güncelle"}
                                type="submit"
                            />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
export default ProductModal;
