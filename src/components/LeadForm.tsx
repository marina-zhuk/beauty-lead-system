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

const fieldClass =
  "min-h-12 rounded-[6px] border border-line bg-white/75 px-4 outline-none transition duration-300 focus:border-accent focus:bg-white disabled:opacity-70";

export function LeadForm() {
  const [form, setForm] = useState<LeadInput>(initialForm);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Partial<Record<keyof LeadInput, string>>>({});
  const todayDate = getTodayDateString();
  const isLoading = status === "loading";

  function updateField(field: keyof LeadInput, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    if (!isLoading) {
      setStatus("idle");
      setMessage("");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isLoading) {
      return;
    }

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
      setMessage("Заполните обязательные поля: имя, телефон и услуга.");
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
        setMessage("Заявку не удалось отправить. Проверьте данные и попробуйте еще раз.");
        return;
      }

      setStatus("success");
      setMessage("Заявка принята. Мы свяжемся с вами и подскажем следующий шаг.");
      setForm(initialForm);
      setErrors({});
    } catch {
      setStatus("error");
      setMessage("Сейчас заявка не отправилась. Проверьте подключение и попробуйте снова.");
    }
  }

  return (
    <section className="section-pad" id="lead-form">
      <div className="page-shell grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <div>
          <p className="eyebrow">Заявка</p>
          <h2 className="serif-display mt-4 text-5xl leading-[1.03] text-ink md:text-6xl">
            Оставьте заявку на настройку системы
          </h2>
          <p className="mt-6 max-w-2xl leading-8 text-ink/65">
            Расскажите, какая услуга или направление для вас главное. Мы
            свяжемся, уточним детали и покажем, как система заявок подойдет
            вашему салону или студии.
          </p>

          <div className="glass-panel mt-8 rounded-[10px] p-5">
            <p className="font-semibold text-ink">Что происходит после отправки</p>
            <p className="mt-2 leading-7 text-ink/65">
              Заявка приходит владельцу в Telegram и сохраняется в таблице,
              чтобы контакт не потерялся после первого сообщения.
            </p>
          </div>
        </div>

        <form className="glass-panel rounded-[12px] p-5 sm:p-7" noValidate onSubmit={handleSubmit}>
          <div className="mb-6">
            <p className="serif-display text-3xl text-ink">Запись в салон</p>
            <p className="mt-1 text-sm text-ink/60">Оставьте контакты, мы свяжемся с вами</p>
          </div>

          {isLoading ? (
            <div className="mb-5 grid gap-3 rounded-[8px] border border-accent/20 bg-accent/10 p-4" role="status">
              <div className="loading-shimmer h-3 w-2/3 rounded-full bg-accent/15" />
              <div className="loading-shimmer h-3 w-1/2 rounded-full bg-accent/10" />
              <span className="sr-only">Заявка отправляется</span>
            </div>
          ) : null}

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-medium text-ink">Имя *</span>
              <input
                aria-invalid={Boolean(errors.name)}
                autoComplete="name"
                className={fieldClass}
                disabled={isLoading}
                name="name"
                onChange={(event) => updateField("name", event.target.value)}
                placeholder="Введите имя"
                required
                value={form.name}
              />
              {errors.name ? <span className="text-sm text-accent">{errors.name}</span> : null}
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium text-ink">Телефон *</span>
              <input
                aria-invalid={Boolean(errors.phone)}
                autoComplete="tel"
                className={fieldClass}
                disabled={isLoading}
                name="phone"
                onChange={(event) => updateField("phone", event.target.value)}
                placeholder="Введите телефон"
                required
                type="tel"
                value={form.phone}
              />
              {errors.phone ? <span className="text-sm text-accent">{errors.phone}</span> : null}
            </label>

            <label className="grid gap-2 sm:col-span-2">
              <span className="text-sm font-medium text-ink">Услуга *</span>
              <select
                aria-invalid={Boolean(errors.service)}
                className={fieldClass}
                disabled={isLoading}
                name="service"
                onChange={(event) => updateField("service", event.target.value)}
                required
                value={form.service}
              >
                <option value="">Выберите услугу</option>
                {serviceOptions.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              {errors.service ? <span className="text-sm text-accent">{errors.service}</span> : null}
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium text-ink">Желаемая дата</span>
              <input
                aria-invalid={Boolean(errors.preferredDate)}
                className={fieldClass}
                disabled={isLoading}
                min={todayDate}
                name="preferredDate"
                onChange={(event) => updateField("preferredDate", event.target.value)}
                type="date"
                value={form.preferredDate ?? ""}
              />
              {errors.preferredDate ? <span className="text-sm text-accent">{errors.preferredDate}</span> : null}
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium text-ink">Желаемое время</span>
              <input
                className={fieldClass}
                disabled={isLoading}
                name="preferredTime"
                onChange={(event) => updateField("preferredTime", event.target.value)}
                type="time"
                value={form.preferredTime ?? ""}
              />
            </label>

            <label className="grid gap-2 sm:col-span-2">
              <span className="text-sm font-medium text-ink">Комментарий</span>
              <textarea
                className="min-h-28 resize-y rounded-[6px] border border-line bg-white/75 px-4 py-3 outline-none transition duration-300 focus:border-accent focus:bg-white disabled:opacity-70"
                disabled={isLoading}
                name="comment"
                onChange={(event) => updateField("comment", event.target.value)}
                placeholder="Например: хочу принимать заявки с сайта в Telegram"
                value={form.comment ?? ""}
              />
            </label>
          </div>

          {message ? (
            <p
              className={`mt-5 rounded-[8px] px-4 py-3 text-sm ${
                status === "success" ? "bg-moss/10 text-moss" : "bg-accent/10 text-accent"
              }`}
            >
              {message}
            </p>
          ) : null}

          <button
            className="mt-6 inline-flex min-h-14 w-full items-center justify-center rounded-[6px] bg-accent px-6 font-semibold text-white shadow-panel transition duration-300 hover:-translate-y-0.5 hover:bg-berry active:translate-y-[1px] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            disabled={isLoading}
            type="submit"
          >
            {isLoading ? "Отправляем заявку..." : "Оставить заявку"}
          </button>
        </form>
      </div>
    </section>
  );
}
