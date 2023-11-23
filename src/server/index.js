const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const CompanyModel = require("./models/Company");

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
                console.log("şifre doğru");
            } else {
                console.log("şifre yanlış");
            }
            res.json(company);
        })
        .catch((err) => {
            console.log(company);
            res.json(err);
        });
});

app.listen("3001", () => {
    console.log("Server is running");
});
