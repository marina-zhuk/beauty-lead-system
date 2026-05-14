import { NextResponse } from "next/server";

import { sendTelegramMessage } from "@/lib/telegram";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const result = await sendTelegramMessage("Telegram test from Beauty Lead System");

    if (!result.ok) {
      console.error("[api/telegram-test] Telegram test failed:", JSON.stringify(result));

      return NextResponse.json(
        {
          success: false,
          message: "Не удалось отправить тестовое сообщение в Telegram. Подробности смотрите в terminal.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Тестовое сообщение отправлено в Telegram.",
    });
  } catch (error) {
    console.error(
      "[api/telegram-test] Telegram test request failed:",
      error instanceof Error ? error.message : "Unknown error",
    );

    return NextResponse.json(
      {
        success: false,
        message: "Не удалось выполнить Telegram test. Подробности смотрите в terminal.",
      },
      { status: 500 },
    );
  }
}
