# Google Apps Script Webhook

Этот вариант подключает Google Sheets без Google Cloud, Service Account и private key.

Схема:

```text
Форма -> POST /api/lead -> Google Apps Script Web App -> Google Sheets
```

## Как создать Web App

1. Создайте Google Sheet.
2. В таблице откройте `Extensions` -> `Apps Script`.
3. Вставьте код ниже в файл `Code.gs`.
4. Нажмите `Save`.
5. Нажмите `Deploy` -> `New deployment`.
6. Выберите тип `Web app`.
7. В поле `Execute as` выберите `Me`.
8. В поле `Who has access` выберите `Anyone`.
9. Нажмите `Deploy`.
10. Скопируйте `Web app URL` и добавьте его в `.env.local` как `GOOGLE_APPS_SCRIPT_WEBHOOK_URL`.

## Code.gs

```js
const STATUS_NEW = "new";
const TOTAL_COLUMNS = 11;

function normalizeName(value) {
  return String(value || "").trim().toLowerCase().replace(/\s+/g, " ");
}

function normalizePhone(value) {
  return String(value || "").replace(/\D/g, "");
}

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    const phoneAsText = data.phone ? "'" + String(data.phone) : "";
    const leadNameKey = normalizeName(data.name);
    const leadPhoneKey = normalizePhone(data.phone);
    const rows = sheet.getDataRange().getValues();

    let existingRowIndex = -1;

    for (let index = 1; index < rows.length; index += 1) {
      const row = rows[index];
      const rowNameKey = normalizeName(row[1]);
      const rowPhoneKey = normalizePhone(row[2]);

      if (rowNameKey === leadNameKey && rowPhoneKey === leadPhoneKey) {
        existingRowIndex = index + 1;
        break;
      }
    }

    if (existingRowIndex > -1) {
      const currentStatus = sheet.getRange(existingRowIndex, 9).getValue();
      const currentRequestCount = Number(sheet.getRange(existingRowIndex, 10).getValue()) || 1;
      const nextRequestCount = currentRequestCount + 1;

      sheet.getRange(existingRowIndex, 1, 1, TOTAL_COLUMNS).setValues([[
        data.createdAt || "",
        data.name || "",
        phoneAsText,
        data.service || "",
        data.preferredDate || "",
        data.preferredTime || "",
        data.comment || "",
        data.source || "website",
        currentStatus || STATUS_NEW,
        nextRequestCount,
        new Date().toISOString(),
      ]]);

      return jsonResponse({ ok: true, mode: "updated" });
    }

    sheet.appendRow([
      data.createdAt || "",
      data.name || "",
      phoneAsText,
      data.service || "",
      data.preferredDate || "",
      data.preferredTime || "",
      data.comment || "",
      data.source || "website",
      data.status || STATUS_NEW,
      1,
      new Date().toISOString(),
    ]);

    return jsonResponse({ ok: true, mode: "created" });
  } catch (error) {
    return jsonResponse({ ok: false, error: String(error) });
  }
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## Рекомендуемые заголовки таблицы

Добавьте в первую строку Google Sheet:

```text
createdAt | name | phone | service | preferredDate | preferredTime | comment | source | status | requestCount | lastRequestAt
```

## Проверка

1. Запустите проект локально.
2. Заполните форму на сайте.
3. Проверьте Telegram.
4. Откройте Google Sheet и проверьте новую или обновленную строку.

Если клиент оставил заявку повторно с тем же именем и телефоном, скрипт обновит существующую строку, сохранит текущий `status`, увеличит `requestCount` и обновит `lastRequestAt`.

Если `GOOGLE_APPS_SCRIPT_WEBHOOK_URL` не задан, проект просто пропускает запись в Google Sheets.

## Частые ошибки

### Не удалось найти функцию doPost

Это значит, что опубликованный Web App не видит функцию `doPost`.

Проверьте:

1. Код вставлен именно в Apps Script project, который вы деплоите.
2. Название функции написано как `doPost`, с большой `P`.
3. После правок нажата кнопка `Save`.
4. После правок создан новый deploy.
5. В `.env.local` используется URL `/exec`, а не `/dev`.

### Телефон превращается в число

Google Sheets может воспринимать номер с `+7` как формулу. Скрипт сохраняет телефон как текст через префикс `'`, поэтому номер не должен ломаться.
