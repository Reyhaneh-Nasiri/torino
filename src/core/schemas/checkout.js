import * as yup from "yup";
import { trimmedRequiredString } from "./helper";

export const checkoutSchema = yup.object({
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
