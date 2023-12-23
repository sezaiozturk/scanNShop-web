import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCompany } from "../../redux/authentication/authenticationSlice";
import { useDispatch } from "react-redux";
import { Button, Input, TextInput } from "../../components";
import { Form, Formik } from "formik";
import { loginSchema } from "../../schemas/loginSchema";
import useStyle from "./stylesheet";
import { useColors } from "../../utils/setting";
import Cookies from "js-cookie";

const Login = () => {
    const nav = useNavigate();
    const dispatch = useDispatch();
    const colors = useColors();
    const classes = useStyle({ colors });

    const handleSubmit = ({ email, password }, { setSubmitting }) => {
        setSubmitting(true);
        axios
            .post("http://localhost:3001/login", {
                email,
                password,
            })
            .then((res) => {
                const company = res.data[0];
                const { companyName, name, surName } = company;
                const currentCompany = {
                    companyName,
                    name,
                    surName,
                    isLoggedIn: true,
                };
                Cookies.set("companyData", JSON.stringify(currentCompany), {
                    expires: 7,
                    path: "/",
                });
                nav(`/admin/${company._id}`);
                //dispatch(setCompany(company));
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => setSubmitting(false));
    };

    return (
        <div className={classes.container}>
            <div className={classes.centerContainer}>
                <div className={classes.formContainer}>
                    <img src="./assets/images/logo.png" />
                    <span>
                        ScanNshop İşletme
                        <br />
                        Portalına hoş geldiniz
                    </span>
                    <Formik
                        initialValues={{
                            email: "",
                            password: "",
                        }}
                        validationSchema={loginSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form className={classes.form}>
                                <TextInput
                                    name="email"
                                    label="E posta"
                                    type="text"
                                    id="email"
                                />
                                <TextInput
                                    name="password"
                                    label="Şifre"
                                    type="password"
                                    id="password"
                                />
                                <Button
                                    type="submit"
                                    title={"Giriş Yap"}
                                    alignSelf="stretch"
                                    disabled={isSubmitting}
                                />
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className={classes.routeContainer}>
                    <span>
                        ScanNShop platformuna katılarak yeni müşterilere ulaşın
                        ve satışlarınızı artırın!
                    </span>
                    <Link to={"/signup"}>
                        <Button
                            title={"Kayıt Ol"}
                            variant="outlined"
                            alignSelf="stretch"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
