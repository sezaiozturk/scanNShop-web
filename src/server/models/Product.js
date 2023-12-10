const mongoose = require("mongoose");
const ProductScheme = new mongoose.Schema({
    companyId: String,
    category: String,
    image: String,
    barkod: String,
    name: String,
    price: Number,
    date: Date,
});

const ProductModel = mongoose.model("products", ProductScheme);
module.exports = ProductModel;
