import * as yup from "yup";
import { trimmedRequiredString } from "./helper";

export const searchSchema = yup.object({
  originId: trimmedRequiredString("مبدا را انتخاب کنید"),

  destinationId: trimmedRequiredString("مقصد را انتخاب کنید"),

  dates: yup.array().of(yup.string()).min(1).optional(),
});
