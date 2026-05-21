import * as yup from "yup";
import { trimmedRequiredString } from "./helper";

export const otpSmsSchema = yup.object({
  mobile: trimmedRequiredString("شماره موبایل الزامی است").matches(
    /^(?:\+98|0)9\d{9}$/,
    "شماره موبایل نامعتبر است",
  ),
});
