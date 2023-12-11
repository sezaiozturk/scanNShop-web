import axios from "axios";
import { Button, TextInput } from "../../components";
import { useEffect, useState } from "react";
import { useColors, useLanguage } from "../../utils/setting";
import useStyle from "./stylesheet";

const ProductModal = ({ data, close }) => {
    const colors = useColors();
    const language = useLanguage();
    const classes = useStyle({ colors });
    const { list, setList, setSelectedProduct, companyId, page, product } =
        data;

    const [barkod, setBarkod] = useState();
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState();

    useEffect(() => {
        if (page === "update") {
            const { category, image, barkod, name, price } = product;
            setCategory(category);
            setImage(image);
            setBarkod(barkod);
            setName(name);
            setPrice(price);
        }
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
        if (page === "add") {
            axios
                .post("http://localhost:3001/admin/add", {
                    companyId,
                    category,
                    image,
                    barkod,
                    name,
                    price,
                    date: new Date(),
                })
                .then((res) => {
                    setList([...list, res.data]);
                    close();
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            axios
                .post("http://localhost:3001/admin/update", {
                    _id: product._id,
                    companyId,
                    category,
                    image,
                    barkod,
                    name,
                    price,
                })
                .then((res) => {
                    const updatedProduct = res.data;
                    let updatedList = list.map((product) => {
                        if (product._id === updatedProduct._id) {
                            return { ...updatedProduct };
                        }
                        return product;
                    });
                    setList(updatedList);
                    setSelectedProduct(null);
                    close();
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    return (
        <div className={classes.container}>
            <form onSubmit={handleSubmit} className={classes.form}>
                <div className={classes.imageContainer}>
                    <label htmlFor="image" className={classes.selectContainer}>
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
                            <img className={classes.image} src={image} />
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
                    title={"Ürün kodu:"}
                    id={"barkod"}
                    type="text"
                    onChangeText={(e) => setBarkod(e.target.value)}
                    value={barkod}
                />
                <TextInput
                    title={"Ürün Kategorisi:"}
                    id={"category"}
                    type="text"
                    onChangeText={(e) => setCategory(e.target.value)}
                    value={category}
                />
                <TextInput
                    title={"Ürün Adı:"}
                    id={"name"}
                    type="text"
                    onChangeText={(e) => setName(e.target.value)}
                    value={name}
                />
                <TextInput
                    title={"Ürün Fiyatı:"}
                    id={"price"}
                    type="number"
                    onChangeText={(e) => setPrice(e.target.value)}
                    value={price}
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
            </form>
        </div>
    );
};
export default ProductModal;
