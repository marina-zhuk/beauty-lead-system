import { NextResponse } from "next/server";

import { formatLeadMessage } from "@/lib/formatLeadMessage";
import { sendLeadToGoogleAppsScript } from "@/lib/googleAppsScript";
import { leadSchema, type LeadInput } from "@/lib/lead-schema";
import { sendTelegramMessage } from "@/lib/telegram";

type LeadRecord = LeadInput & {
  createdAt: string;
  source: string;
  status: "new";
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = leadSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Проверьте обязательные поля формы.",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const lead: LeadRecord = {
      ...result.data,
      createdAt: new Date().toISOString(),
      source: "website",
      status: "new",
    };

    const [googleAppsScriptResult, telegramResult] = await Promise.all([
      sendLeadToGoogleAppsScript(lead),
      sendTelegramMessage(formatLeadMessage(lead)),
    ]);

    if (!googleAppsScriptResult.ok) {
      console.error(
        "[api/lead] Google Apps Script sync failed:",
        JSON.stringify(googleAppsScriptResult),
      );
    }

    if (!telegramResult.ok) {
      console.error("[api/lead] Telegram delivery failed:", JSON.stringify(telegramResult));

      if (googleAppsScriptResult.ok && !googleAppsScriptResult.skipped) {
        return NextResponse.json(
          {
            success: true,
            message:
              "Заявка сохранена, но Telegram сейчас недоступен. Проверьте доступ к api.telegram.org или настройки бота.",
            lead,
            telegramDelivered: false,
          },
          { status: 202 },
        );
      }

      if (process.env.NODE_ENV === "development" && telegramResult.reason === "network_error") {
        return NextResponse.json(
          {
            success: true,
            message:
              "Демо-заявка принята локально, но Telegram API недоступен с этой машины. Для полной проверки откройте доступ к api.telegram.org или проверьте deploy на Vercel.",
            lead,
            telegramDelivered: false,
          },
          { status: 202 },
        );
      }

      return NextResponse.json(
        {
          success: false,
          message:
            "Не удалось отправить заявку в Telegram. Проверьте TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID и доступ к api.telegram.org.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Заявка отправлена. Проверьте Telegram владельца.",
        lead,
        telegramDelivered: true,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error(
      "[api/lead] Lead request failed:",
      error instanceof Error ? error.message : "Unknown error",
    );

    return NextResponse.json(
      {
        success: false,
        message: "Не удалось обработать заявку. Попробуйте еще раз.",
      },
      { status: 500 },
    );
  }
}
