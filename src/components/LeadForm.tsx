"use client";

import { FormEvent, useState } from "react";

import { leadSchema, type LeadInput } from "@/lib/lead-schema";

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
      setMessage("Демо-заявка отправлена. Проверьте Telegram владельца.");
      setForm(initialForm);
      setErrors({});
    } catch {
      setStatus("error");
      setMessage("Не удалось отправить заявку. Проверьте соединение и попробуйте снова.");
    }
  }

  return (
    <section className="px-5 py-14" id="lead-form">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
            Demo lead form
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
            Попробуйте демо-заявку
          </h2>
          <p className="mt-4 leading-7 text-ink/65">
            Заполните форму как тестовую заявку. Она придет в Telegram владельцу и покажет,
            как работает сценарий: сайт, форма и уведомление.
          </p>
          <div className="mt-6 rounded-lg border border-ink/10 bg-white p-5 shadow-sm">
            <p className="font-semibold text-ink">Это не запись в реальный салон</p>
            <p className="mt-2 leading-7 text-ink/65">
              Форма демонстрирует digital-систему для beauty-бизнеса: какие данные собираются
              и как быстро владелец получает заявку.
            </p>
          </div>
        </div>

        <form className="rounded-lg border border-ink/10 bg-cream p-5 shadow-soft" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-medium text-ink">Имя</span>
              <input
                className="min-h-12 rounded-md border border-ink/15 bg-white px-4 outline-none transition focus:border-accent"
                name="name"
                onChange={(event) => updateField("name", event.target.value)}
                placeholder="Анна"
                value={form.name}
              />
              {errors.name ? <span className="text-sm text-accent">{errors.name}</span> : null}
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium text-ink">Телефон</span>
              <input
                className="min-h-12 rounded-md border border-ink/15 bg-white px-4 outline-none transition focus:border-accent"
                name="phone"
                onChange={(event) => updateField("phone", event.target.value)}
                placeholder="+7 999 123-45-67"
                type="tel"
                value={form.phone}
              />
              {errors.phone ? <span className="text-sm text-accent">{errors.phone}</span> : null}
            </label>

            <label className="grid gap-2 sm:col-span-2">
              <span className="text-sm font-medium text-ink">Услуга</span>
              <select
                className="min-h-12 rounded-md border border-ink/15 bg-white px-4 outline-none transition focus:border-accent"
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
              {errors.service ? <span className="text-sm text-accent">{errors.service}</span> : null}
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium text-ink">Желаемая дата</span>
              <input
                className="min-h-12 rounded-md border border-ink/15 bg-white px-4 outline-none transition focus:border-accent"
                name="preferredDate"
                onChange={(event) => updateField("preferredDate", event.target.value)}
                type="date"
                value={form.preferredDate ?? ""}
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium text-ink">Желаемое время</span>
              <input
                className="min-h-12 rounded-md border border-ink/15 bg-white px-4 outline-none transition focus:border-accent"
                name="preferredTime"
                onChange={(event) => updateField("preferredTime", event.target.value)}
                type="time"
                value={form.preferredTime ?? ""}
              />
            </label>

            <label className="grid gap-2 sm:col-span-2">
              <span className="text-sm font-medium text-ink">Комментарий</span>
              <textarea
                className="min-h-28 resize-y rounded-md border border-ink/15 bg-white px-4 py-3 outline-none transition focus:border-accent"
                name="comment"
                onChange={(event) => updateField("comment", event.target.value)}
                placeholder="Например: хочу вечернее время после 18:00"
                value={form.comment ?? ""}
              />
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
            className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-accent px-6 font-semibold text-white transition hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            disabled={status === "loading"}
            type="submit"
          >
            {status === "loading" ? "Отправляем..." : "Оставить демо-заявку"}
          </button>
        </form>
      </div>
    </section>
  );
}
