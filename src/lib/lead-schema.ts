import { z } from "zod";

const optionalText = z.preprocess(
  (value) => (typeof value === "string" && value.trim() === "" ? undefined : value),
  z.string().trim().optional(),
);

export const leadSchema = z.object({
  name: z.string({ required_error: "Укажите имя" }).trim().min(2, "Укажите имя"),
  phone: z.string({ required_error: "Укажите телефон" }).trim().min(5, "Укажите телефон"),
  service: z.string({ required_error: "Выберите услугу" }).trim().min(1, "Выберите услугу"),
  preferredDate: optionalText,
  preferredTime: optionalText,
  comment: optionalText,
});

export type LeadInput = z.infer<typeof leadSchema>;
