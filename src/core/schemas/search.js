import { z } from "zod";

export const searchSchema = z.object({
  originId: z.string().trim().min(1, "مبدا را انتخاب کنید"),
  destinationId: z.string().trim().min(1, "مقصد را انتخاب کنید"),
  dates: z.array(z.any()).optional(),
});
