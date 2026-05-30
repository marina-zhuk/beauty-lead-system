import { z } from "zod";

const optionalText = z.preprocess(
  (value) => (typeof value === "string" && value.trim() === "" ? undefined : value),
  z.string().trim().optional(),
);

export function getTodayDateString() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

const optionalPreferredDate = optionalText
  .refine((value) => !value || /^\d{4}-\d{2}-\d{2}$/.test(value), "Выберите корректную дату")
  .refine(
    (value) => !value || value >= getTodayDateString(),
    "Нельзя выбрать дату раньше сегодняшней",
  );

const phoneRegex = /^[\d\s\+\-\(\)]{5,20}$/;

export const leadSchema = z.object({
  name: z.string({ required_error: "Укажите имя" }).trim().min(2, "Укажите имя"),
  phone: z
    .string({ required_error: "Укажите телефон" })
    .trim()
    .min(5, "Укажите телефон")
    .regex(phoneRegex, "Укажите корректный номер телефона"),
  service: z.string({ required_error: "Выберите услугу" }).trim().min(1, "Выберите услугу"),
  preferredDate: optionalPreferredDate,
  preferredTime: optionalText,
  comment: optionalText,
});

export type LeadInput = z.infer<typeof leadSchema>;

export type LeadRecord = LeadInput & {
  createdAt: string;
  source: string;
  status: "new";
};
