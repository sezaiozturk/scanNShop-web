import axios from "axios";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextInput } from "../../components";
import { signupSchema } from "../../schemas/signupSchema";
import useStyle from "./stylesheet";
import { useColors } from "../../utils/setting";

const Signup = () => {
    const nav = useNavigate();
    const colors = useColors();
    const classes = useStyle({ colors });

    const handleSubmit = (
        {
            companyName,
            companyType,
            city,
            district,
            neighbourhood,
            name,
            surName,
            email,
            phoneNumber,
            password,
        },
        actions
    ) => {
        axios
            .post("http://localhost:3001/signup", {
                companyName,
                companyType,
                city,
                district,
                neighbourhood,
                name,
                surName,
                email,
                phoneNumber,
                password,
            })
            .then((res) => {
                console.log(res);
                nav("/login");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className={classes.container}>
            <div className={classes.innerContainer}>
                <div className={classes.messageContainer}>
                    <span>Bizimle Çalışın!</span>
                    <span>
                        <p>
                            Alışveriş denince akla gelen en iyi seçenekleri
                            kullanıcılarımıza ulaştırmak bizim için büyük bir
                            keyif!
                        </p>
                        <p>
                            Hiç durmadan büyüyen ve iş ortaklarını da büyüten
                            ScanNShop ailesi olarak, sizin için buradayız!
                        </p>
                    </span>
                </div>
                <div className={classes.formContainer}>
                    <span>
                        Formu doldurun, ailemize katılın, işlerinizi
                        <br />
                        kolaylaştırmaya ve kazanmaya hemen
                        <br />
                        başlayın!
                    </span>
                    <Formik
                        initialValues={{
                            companyName: "",
                            companyType: "",
                            city: "",
                            district: "",
                            neighbourhood: "",
                            name: "",
                            surName: "",
                            email: "",
                            phoneNumber: "",
                            password: "",
                            rePassword: "",
                        }}
                        validationSchema={signupSchema}
                        onSubmit={handleSubmit}
                    >
                        {() => (
                            <Form className={classes.form}>
                                <TextInput
                                    name="companyName"
                                    label="İşyeri Adı"
                                    type="text"
                                    id="companyName"
                                />
                                <TextInput
                                    name="companyType"
                                    label="İşletme Türü"
                                    type="text"
                                    id="companyType"
                                />
                                <TextInput
                                    name="city"
                                    label="Şehir"
                                    type="text"
                                    id="city"
                                />
                                <TextInput
                                    name="district"
                                    label="İlçe"
                                    type="text"
                                    id="district"
                                />
                                <TextInput
                                    name="neighbourhood"
                                    label="Mahalle"
                                    type="text"
                                    id="neighbourhood"
                                />
                                <TextInput
                                    name="name"
                                    label="Ad"
                                    type="text"
                                    id="name"
                                />
                                <TextInput
                                    name="surName"
                                    label="Soyad"
                                    type="text"
                                    id="surName"
                                />
                                <TextInput
                                    name="email"
                                    label="E posta"
                                    type="text"
                                    id="email"
                                />
                                <TextInput
                                    name="phoneNumber"
                                    label="Telefon Numarası"
                                    type="number"
                                    id="phoneNumber"
                                />
                                <TextInput
                                    name="password"
                                    label="Şifre"
                                    type="password"
                                    id="password"
                                />{" "}
                                <TextInput
                                    name="rePassword"
                                    label="Şifre(Tekrar)"
                                    type="password"
                                    id="rePassword"
                                />
                                <Button
                                    type="submit"
                                    title={"Kayıt Ol"}
                                    alignSelf="stretch"
                                />
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default Signup;
