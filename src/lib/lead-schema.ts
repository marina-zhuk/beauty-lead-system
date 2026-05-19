import { z } from "zod";

const optionalText = z.preprocess(
  (value) => (typeof value === "string" && value.trim() === "" ? undefined : value),
  z.string().trim().optional(),
);

export function getTodayDateString() {
  const parts = new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "2-digit",
    timeZone: "Europe/Moscow",
    year: "numeric",
  }).formatToParts(new Date());

  const dateParts = Object.fromEntries(parts.map((part) => [part.type, part.value]));

  return `${dateParts.year}-${dateParts.month}-${dateParts.day}`;
}

const optionalPreferredDate = optionalText
  .refine((value) => !value || /^\d{4}-\d{2}-\d{2}$/.test(value), "Выберите корректную дату")
  .refine(
    (value) => !value || value >= getTodayDateString(),
    "Нельзя выбрать дату раньше сегодняшней",
  );

export const leadSchema = z.object({
  name: z.string({ required_error: "Укажите имя" }).trim().min(2, "Укажите имя"),
  phone: z.string({ required_error: "Укажите телефон" }).trim().min(5, "Укажите телефон"),
  service: z.string({ required_error: "Выберите услугу" }).trim().min(1, "Выберите услугу"),
  preferredDate: optionalPreferredDate,
  preferredTime: optionalText,
  comment: optionalText,
});

export type LeadInput = z.infer<typeof leadSchema>;
