import z from "zod";

export const OtpSmsSchema = z.object({
  mobile: z
    .string()
    .trim()
    .regex(/^(\+98|0)?9\d{9}$/, "شماره موبایل نامعتبر است"),
});
