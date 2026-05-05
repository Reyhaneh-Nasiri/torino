import { z } from "zod";

export const checkoutSchema = z.object({
  nationalCode: z
    .string({ required_error: "قیمت ضروری است" })
    .trim()
    .nonempty("کدملی الزامی است")
    .regex(/^\d{10}$/, "کدملی باید ۱۰ رقم باشد")
    .min(10, "کد ملی باید ۱۰ رقم باشد"),

  fullName: z
    .string()
    .trim()
    .nonempty("نام و نام‌خانودگی الزامی است")
    .min(2, "نام و نام خانوادگی باید حداقل ۲ کاراکتر باشد"),

  gender: z.string().nonempty("جنسیت را انتخاب کنید"),

  birthDate: z.string().trim().nonempty("تاریخ تولد را وارد کنید"),
});
