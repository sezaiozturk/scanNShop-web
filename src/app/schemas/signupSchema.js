import * as Yup from "yup";
export const signupSchema = Yup.object({
    companyName: Yup.string().required("Bu alanın doldurulması zorunludur"),
    companyType: Yup.string().required("Bu alanın doldurulması zorunludur"),
    city: Yup.string().required("Bu alanın doldurulması zorunludur"),
    district: Yup.string().required("Bu alanın doldurulması zorunludur"),
    neighbourhood: Yup.string().required("Bu alanın doldurulması zorunludur"),
    name: Yup.string().required("Bu alanın doldurulması zorunludur"),
    surName: Yup.string().required("Bu alanın doldurulması zorunludur"),
    email: Yup.string()
        .required("E posta girilmesi zorunludur")
        .email("Geçersiz e posta adresi"),
    phoneNumber: Yup.string()
        .required("Bu alanın doldurulması zorunludur")
        .min(10, "Geçersiz telefon numarası")
        .max(10, "Geçersiz telefon numarası"),
    password: Yup.string()
        .required("Şifre girilmesi zorunludur")
        .min(6, "Şifre 6 karakterden az olamaz"),
    rePassword: Yup.string()
        .required("Şifre girilmesi zorunludur")
        .oneOf([Yup.ref("password")], "Şifreler eşleşmiyor"),
});
