import type { LeadInput } from "@/lib/lead-schema";

type LeadRecord = LeadInput & {
  createdAt: string;
  source: string;
  status: "new";
};

type GoogleAppsScriptResult =
  | {
      ok: true;
      skipped?: boolean;
    }
  | {
      ok: false;
      reason: string;
      status?: number;
    };

type GoogleAppsScriptResponse = {
  ok?: boolean;
  [key: string]: unknown;
};

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : "Unknown error";
}

function compactResponse(text: string) {
  return text.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, 240);
}

export async function sendLeadToGoogleAppsScript(
  lead: LeadRecord,
): Promise<GoogleAppsScriptResult> {
  const webhookUrl = process.env.GOOGLE_APPS_SCRIPT_WEBHOOK_URL?.trim();

  if (!webhookUrl) {
    console.info("[google-apps-script] Webhook URL is not configured, skipping Sheets sync");
    return { ok: true, skipped: true };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      console.error("[google-apps-script] Webhook returned non-OK status:", response.status);
      return { ok: false, reason: "webhook_error", status: response.status };
    }

    const responseText = await response.text();

    try {
      const data = JSON.parse(responseText) as GoogleAppsScriptResponse;

      if (data.ok === false) {
        console.error("[google-apps-script] Webhook returned ok=false");
        return { ok: false, reason: "webhook_rejected", status: response.status };
      }
    } catch {
      console.error("[google-apps-script] Webhook returned non-JSON response:", compactResponse(responseText));
      return { ok: false, reason: "invalid_response", status: response.status };
    }

    return { ok: true };
  } catch (error) {
    console.error("[google-apps-script] Failed to sync lead:", getErrorMessage(error));
    return { ok: false, reason: "network_error" };
  }
}
