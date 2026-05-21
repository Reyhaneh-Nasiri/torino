import * as yup from "yup";
import { trimmedRequiredString } from "./helper";

export const accountSchema = yup.object({
  email: trimmedRequiredString("ایمیل الزامی است").email(
    "فرمت ایمیل معتبر نیست",
  ),
});

export const personalSchema = yup.object({
  nationalCode: trimmedRequiredString("کد ملی الزامی است").matches(
    /^\d{10}$/,
    "کد ملی باید ۱۰ رقم باشد",
  ),
  fullName: trimmedRequiredString("نام و نام خانوادگی الزامی است").min(
    2,
    "نام و نام خانوادگی باید حداقل ۲ کاراکتر باشد",
  ),
  gender: yup.string().required("جنسیت را انتخاب کنید"),
  birthDate: trimmedRequiredString("تاریخ تولد را وارد کنید"),
});

export const bankSchema = yup.object({
  shaba_code: trimmedRequiredString("شماره شبا الزامی است").matches(
    /^\d{24}$/,
    "شماره شبا باید ۲۴ رقم باشد",
  ),
  debitCard_code: trimmedRequiredString("شماره کارت الزامی است").matches(
    /^\d{16}$/,
    "شماره کارت باید ۱۶ رقم باشد",
  ),
  accountIdentifier: trimmedRequiredString("شماره حساب را وارد کنید"),
});

export const profileSchemas = {
  account: accountSchema,
  personal: personalSchema,
  bank: bankSchema,
};
