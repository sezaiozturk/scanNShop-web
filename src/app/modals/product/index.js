import axios from "axios";
import { Button, TextInput } from "../../components";
import { useState } from "react";
import { useColors, useLanguage } from "../../utils/setting";
import useStyle from "./stylesheet";

const ProductModal = ({ data, close }) => {
    const colors = useColors();
    const language = useLanguage();
    const classes = useStyle({ colors });
    const label = { padding: "5px 0", fontSize: 20 };
    const container = { display: "flex", justifyContent: "space-between" };
    const input = { width: 300 };
    const { list, setList, companyId } = data;

    const [barkod, setBarkod] = useState("201213096");
    const [name, setName] = useState("muz");
    const [price, setPrice] = useState("100");
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState("sebze");

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
        console.log("submit oldu");
        e.preventDefault();
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
                />
                <TextInput
                    title={"Ürün Kategorisi:"}
                    id={"category"}
                    type="text"
                    onChangeText={(e) => setCategory(e.target.value)}
                />
                <TextInput
                    title={"Ürün Adı:"}
                    id={"name"}
                    type="text"
                    onChangeText={(e) => setName(e.target.value)}
                />
                <TextInput
                    title={"Ürün Fiyatı:"}
                    id={"price"}
                    type="number"
                    onChangeText={(e) => setPrice(e.target.value)}
                />
                <div className={classes.buttonContainer}>
                    <Button
                        title={"İptal"}
                        variant="outlined"
                        onClick={close}
                    />
                    <Button title={"Kaydet"} type="submit" />
                </div>
            </form>
        </div>
    );
};
export default ProductModal;
