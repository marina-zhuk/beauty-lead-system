import { NextResponse } from "next/server";

import { formatLeadMessage } from "@/lib/formatLeadMessage";
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
      source: "landing",
      status: "new",
    };

    const telegramResult = await sendTelegramMessage(formatLeadMessage(lead));

    if (!telegramResult.ok) {
      console.error("[api/lead] Telegram delivery failed:", JSON.stringify(telegramResult));

      return NextResponse.json(
        {
          success: false,
          message: "Не удалось отправить заявку. Попробуйте еще раз.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true, lead }, { status: 201 });
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
