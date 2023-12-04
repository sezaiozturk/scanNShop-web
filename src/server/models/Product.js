const mongoose = require("mongoose");
const ProductScheme = new mongoose.Schema({
    id: String,
    image: String,
    barkod: String,
    name: String,
    price: Number,
});

const ProductModel = mongoose.model("products", ProductScheme);
module.exports = ProductModel;
