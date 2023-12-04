const express = require("express");
const mongoose = require("mongoose");
const CompanyModel = require("./models/Company");
const ProductModel = require("./models/Product");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

mongoose
    .connect("mongodb://127.0.0.1:27017/ScanNShop")
    .then(() => console.log("Mongodb connected"))
    .catch((err) => console.log(err));

app.post("/signup", (req, res) => {
    CompanyModel.create(req.body)
        .then((company) => {
            res.json(company);
        })
        .catch((err) => {
            res.json(err);
        });
});
app.post("/login", (req, res) => {
    CompanyModel.find({ email: req.body.email })
        .then((company) => {
            if (req.body.password == company[0].password) {
                res.json(company);
            } else {
                res.json({ message: "şifre yanlış" });
            }
        })
        .catch((err) => {
            res.json(err);
        });
});

app.post("/admin/add", (req, res) => {
    ProductModel.create(req.body)
        .then((product) => {
            res.json(product);
        })
        .catch((err) => {
            res.json(err);
        });
});

app.post("/admin/find", (req, res) => {
    ProductModel.find({ id: req.body.id })
        .then((products) => {
            res.json(products);
        })
        .catch((err) => {
            res.json(err);
        });
});

app.listen("3001", () => {
    console.log("Server is running");
});
