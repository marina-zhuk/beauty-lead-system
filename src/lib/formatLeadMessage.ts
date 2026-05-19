import type { LeadInput } from "@/lib/lead-schema";

type LeadMessageInput = LeadInput & {
  createdAt: string;
  source: string;
  status?: string;
};

function valueOrEmpty(value: string | undefined) {
  return value?.trim() ? value.trim() : "не указано";
}

export function formatLeadMessage(lead: LeadMessageInput) {
  return [
    "Новая заявка с сайта:",
    `Имя: ${valueOrEmpty(lead.name)}`,
    `Телефон: ${valueOrEmpty(lead.phone)}`,
    `Услуга: ${valueOrEmpty(lead.service)}`,
    `Дата: ${valueOrEmpty(lead.preferredDate)}`,
    `Время: ${valueOrEmpty(lead.preferredTime)}`,
    `Комментарий: ${valueOrEmpty(lead.comment)}`,
    `Источник: ${valueOrEmpty(lead.source)}`,
    `Время создания: ${lead.createdAt}`,
  ].join("\n");
}
