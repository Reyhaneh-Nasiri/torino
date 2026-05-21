import * as yup from "yup";

export const trimmedRequiredString = (message) =>
  yup.string().trim().required(message);
