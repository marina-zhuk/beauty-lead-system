"use client";

import { FormEvent, useState } from "react";

import { getTodayDateString, leadSchema, type LeadInput } from "@/lib/lead-schema";

type FormStatus = "idle" | "loading" | "success" | "error";

const initialForm: LeadInput = {
  name: "",
  phone: "",
  service: "",
  preferredDate: "",
  preferredTime: "",
  comment: "",
};

const serviceOptions = [
  "Маникюр",
  "Брови",
  "Lash-услуги",
  "Косметология",
  "Массаж",
  "Комплексный уход",
];

export function LeadForm() {
  const [form, setForm] = useState<LeadInput>(initialForm);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Partial<Record<keyof LeadInput, string>>>({});
  const todayDate = getTodayDateString();

  function updateField(field: keyof LeadInput, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    if (status !== "loading") {
      setStatus("idle");
      setMessage("");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const parsed = leadSchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      setErrors({
        name: fieldErrors.name?.[0],
        phone: fieldErrors.phone?.[0],
        service: fieldErrors.service?.[0],
        preferredDate: fieldErrors.preferredDate?.[0],
      });
      setStatus("error");
      setMessage("Заполните обязательные поля.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      const data = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !data.success) {
        setStatus("error");
        setMessage(data.message ?? "Не удалось отправить заявку. Попробуйте еще раз.");
        return;
      }

      setStatus("success");
      setMessage(data.message ?? "Демо-заявка отправлена в Telegram и сохранена в Google Sheets.");
      setForm(initialForm);
      setErrors({});
    } catch {
      setStatus("error");
      setMessage("Не удалось отправить заявку. Проверьте соединение и попробуйте снова.");
    }
  }

  return (
    <section className="px-5 py-16" id="lead-form">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
            Demo lead form
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Проверьте путь заявки на примере
          </h2>
          <p className="mt-4 leading-7 text-ink/65">
            Заполните форму как тестовый клиент. Вы увидите, какие данные собирает система
            и как такую форму можно адаптировать под ваш список услуг.
          </p>
          <div className="mt-6 rounded-lg border border-ink/10 bg-white p-5 shadow-[0_18px_35px_rgba(31,33,31,0.04)]">
            <p className="font-semibold text-ink">Это не запись в реальный салон</p>
            <p className="mt-2 leading-7 text-ink/65">
              Это demo project для портфолио. Он показывает рабочий поток заявки:
              форма на сайте, уведомление в Telegram и строка в Google Sheets.
            </p>
          </div>
        </div>

        <form className="rounded-lg border border-white/70 bg-white p-5 shadow-soft sm:p-6" onSubmit={handleSubmit}>
          {status === "loading" ? (
            <div className="mb-5 grid gap-3 rounded-md border border-accent/15 bg-accent/5 p-4">
              <div className="loading-shimmer h-3 w-2/3 rounded-full bg-accent/15" />
              <div className="loading-shimmer h-3 w-1/2 rounded-full bg-accent/10" />
            </div>
          ) : null}

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-medium text-ink">Имя</span>
              <input
                className="min-h-12 rounded-md border border-ink/15 bg-cream px-4 outline-none transition duration-300 focus:border-accent focus:bg-white"
                name="name"
                onChange={(event) => updateField("name", event.target.value)}
                placeholder="Марина"
                value={form.name}
              />
              <span className="text-xs text-ink/45">Так владелец понимает, к кому обратиться.</span>
              {errors.name ? <span className="text-sm text-accent">{errors.name}</span> : null}
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium text-ink">Телефон</span>
              <input
                className="min-h-12 rounded-md border border-ink/15 bg-cream px-4 outline-none transition duration-300 focus:border-accent focus:bg-white"
                name="phone"
                onChange={(event) => updateField("phone", event.target.value)}
                placeholder="Введите телефон"
                type="tel"
                value={form.phone}
              />
              <span className="text-xs text-ink/45">Для демо можно указать тестовый номер.</span>
              {errors.phone ? <span className="text-sm text-accent">{errors.phone}</span> : null}
            </label>

            <label className="grid gap-2 sm:col-span-2">
              <span className="text-sm font-medium text-ink">Услуга</span>
              <select
                className="min-h-12 rounded-md border border-ink/15 bg-cream px-4 outline-none transition duration-300 focus:border-accent focus:bg-white"
                name="service"
                onChange={(event) => updateField("service", event.target.value)}
                value={form.service}
              >
                <option value="">Выберите услугу</option>
                {serviceOptions.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              <span className="text-xs text-ink/45">Список услуг можно заменить под ваш бизнес.</span>
              {errors.service ? <span className="text-sm text-accent">{errors.service}</span> : null}
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium text-ink">Желаемая дата</span>
              <input
                className="min-h-12 rounded-md border border-ink/15 bg-cream px-4 outline-none transition duration-300 focus:border-accent focus:bg-white"
                min={todayDate}
                name="preferredDate"
                onChange={(event) => updateField("preferredDate", event.target.value)}
                type="date"
                value={form.preferredDate ?? ""}
              />
              <span className="text-xs text-ink/45">Дата помогает сразу понять желаемый день записи.</span>
              {errors.preferredDate ? <span className="text-sm text-accent">{errors.preferredDate}</span> : null}
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium text-ink">Желаемое время</span>
              <input
                className="min-h-12 rounded-md border border-ink/15 bg-cream px-4 outline-none transition duration-300 focus:border-accent focus:bg-white"
                name="preferredTime"
                onChange={(event) => updateField("preferredTime", event.target.value)}
                type="time"
                value={form.preferredTime ?? ""}
              />
              <span className="text-xs text-ink/45">Необязательное поле.</span>
            </label>

            <label className="grid gap-2 sm:col-span-2">
              <span className="text-sm font-medium text-ink">Комментарий</span>
              <textarea
                className="min-h-28 resize-y rounded-md border border-ink/15 bg-cream px-4 py-3 outline-none transition duration-300 focus:border-accent focus:bg-white"
                name="comment"
                onChange={(event) => updateField("comment", event.target.value)}
                placeholder="Например: хочу вечернее время после 18:00"
                value={form.comment ?? ""}
              />
              <span className="text-xs text-ink/45">Комментарий помогает уточнить запрос до звонка или сообщения.</span>
            </label>
          </div>

          {message ? (
            <p
              className={`mt-4 rounded-md px-4 py-3 text-sm ${
                status === "success" ? "bg-moss/10 text-moss" : "bg-accent/10 text-accent"
              }`}
            >
              {message}
            </p>
          ) : null}

          <button
            className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-accent px-6 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-accent/90 active:translate-y-[1px] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            disabled={status === "loading"}
            type="submit"
          >
            {status === "loading" ? "Отправляем..." : "Отправить тестовую заявку"}
          </button>
        </form>
      </div>
    </section>
  );
}
