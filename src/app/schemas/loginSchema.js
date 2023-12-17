import * as Yup from "yup";
export const loginSchema = Yup.object({
    email: Yup.string()
        .required("E posta girilmesi zorunludur")
        .email("Geçersiz e posta adresi"),
    password: Yup.string()
        .required("Şifre girilmesi zorunludur")
        .min(6, "Şifre 6 karakterden az olamaz"),
});
