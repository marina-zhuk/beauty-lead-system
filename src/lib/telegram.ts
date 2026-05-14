type TelegramSendResult =
  | {
      ok: true;
    }
  | {
      ok: false;
      reason: string;
      status?: number;
    };

type TelegramApiResponse = {
  ok?: boolean;
  description?: string;
  [key: string]: unknown;
};

function getErrorDetails(error: unknown) {
  if (!(error instanceof Error)) {
    return "Unknown error";
  }

  const cause = "cause" in error ? error.cause : undefined;

  return JSON.stringify({
    name: error.name,
    message: error.message,
    cause: cause instanceof Error ? { name: cause.name, message: cause.message } : cause,
  });
}

export async function sendTelegramMessage(text: string): Promise<TelegramSendResult> {
  const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const chatId = process.env.TELEGRAM_CHAT_ID?.trim();

  console.info("[telegram] env token exists:", Boolean(token));
  console.info("[telegram] env chat id exists:", Boolean(chatId));

  if (!token || !chatId) {
    console.error("[telegram] Missing required Telegram env variables");
    return { ok: false, reason: "missing_config" };
  }

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        disable_web_page_preview: true,
      }),
    });

    console.info("[telegram] Telegram API response status:", response.status);

    if (!response.ok) {
      let data: TelegramApiResponse | null = null;

      try {
        data = (await response.json()) as TelegramApiResponse;
      } catch {
        data = {
          ok: false,
          description: "Telegram API returned a non-JSON error response",
        };
      }

      console.error("[telegram] Telegram API error response:", JSON.stringify(data));

      return { ok: false, reason: "api_error", status: response.status };
    }

    return { ok: true };
  } catch (error) {
    console.error("[telegram] Network error while sending message:", getErrorDetails(error));

    return { ok: false, reason: "network_error" };
  }
}
