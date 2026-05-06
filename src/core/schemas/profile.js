// src/core/schemas/profile.ts
import { z } from "zod";

export const accountSchema = z.object({
  email: z
    .string()
    .trim()
    .nonempty("ایمیل الزامی است")
    .email("فرمت ایمیل معتبر نیست"),
});

export const personalSchema = z.object({
  nationalCode: z
    .string()
    .trim()
    .regex(/^\d{10}$/, "کد ملی باید ۱۰ رقم باشد"),
  fullName: z.string().trim().nonempty("نام و نام خانوادگی الزامی است"),
  gender: z.string().nonempty("جنسیت را انتخاب کنید"),
  birthDate: z.string().trim().nonempty("تاریخ تولد را وارد کنید"),
});

export const bankSchema = z.object({
  shaba_code: z
    .string()
    .trim()
    .regex(/^\d{24}$/, "شماره شبا باید ۲۴ رقم باشد"),
  debitCard_code: z
    .string()
    .trim()
    .regex(/^\d{16}$/, "شماره کارت باید ۱۶ رقم باشد"),
  accountIdentifier: z.string().trim().nonempty("شماره حساب را وارد کنید"),
});

export const profileSchemas = {
  account: accountSchema,
  personal: personalSchema,
  bank: bankSchema,
};
