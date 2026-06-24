type ContactValue = string | string[];
type ContactPayload = Record<string, ContactValue>;

type ContactRequest = {
  method?: string;
  body?: unknown;
};

type ContactResponse = {
  status: (statusCode: number) => ContactResponse;
  setHeader: (name: string, value: string | string[]) => void;
  json: (body: { ok: boolean; error?: string }) => void;
};

declare const process: {
  env: Record<string, string | undefined>;
};

const FIELD_LABELS: Record<string, string> = {
  request_type: "Tipo de solicitud",
  type_of_web: "Tipo de web",
  operation: "Funcionamiento",
  referencia: "Referencia de diseno",
  sections: "Secciones",
  functionalities: "Funcionalidades",
  budget: "Presupuesto",
  message: "Mensaje",
  name: "Nombre",
  email: "Email",
  tel: "Telefono",
};

const FIELD_ORDER = [
  "request_type",
  "type_of_web",
  "operation",
  "referencia",
  "sections",
  "functionalities",
  "budget",
  "message",
  "name",
  "email",
  "tel",
];

const DISCORD_CONTENT_LIMIT = 1900;

function parsePayload(body: unknown): ContactPayload | null {
  if (typeof body === "string") {
    try {
      return parsePayload(JSON.parse(body));
    } catch {
      return null;
    }
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return null;
  }

  const payload: ContactPayload = {};

  for (const [key, value] of Object.entries(body)) {
    if (typeof value === "string") {
      payload[key] = value.trim();
      continue;
    }

    if (Array.isArray(value)) {
      payload[key] = value
        .filter((item): item is string => typeof item === "string")
        .map((item) => item.trim())
        .filter(Boolean);
    }
  }

  return payload;
}

function hasUsefulInformation(payload: ContactPayload): boolean {
  return Object.values(payload).some((value) =>
    Array.isArray(value) ? value.length > 0 : value.length > 0
  );
}

function formatValue(value: ContactValue): string {
  if (Array.isArray(value)) {
    return value.length > 0 ? value.join(", ") : "Sin completar";
  }

  return value || "Sin completar";
}

function formatDiscordMessage(payload: ContactPayload): string {
  if (payload.request_type === "advisory") {
    return [
      "Nueva solicitud de asesoramiento",
      "",
      `**Email:** ${formatValue(payload.email ?? "")}`,
      "",
      "No completar cuestionario",
      "Solicita contacto personalizado",
    ].join("\n");
  }

  const knownFields = FIELD_ORDER.filter((key) => key in payload);
  const extraFields = Object.keys(payload).filter(
    (key) => !FIELD_ORDER.includes(key)
  );

  const lines = [...knownFields, ...extraFields].map((key) => {
    const label = FIELD_LABELS[key] ?? key;
    return `**${label}:** ${formatValue(payload[key])}`;
  });

  return [
    "Nueva solicitud desde el portfolio freelance",
    "",
    ...lines,
  ].join("\n");
}

function chunkDiscordMessage(message: string): string[] {
  if (message.length <= DISCORD_CONTENT_LIMIT) {
    return [message];
  }

  const chunks: string[] = [];
  let currentChunk = "";

  for (const line of message.split("\n")) {
    const nextChunk = currentChunk ? `${currentChunk}\n${line}` : line;

    if (nextChunk.length <= DISCORD_CONTENT_LIMIT) {
      currentChunk = nextChunk;
      continue;
    }

    if (currentChunk) {
      chunks.push(currentChunk);
    }

    if (line.length <= DISCORD_CONTENT_LIMIT) {
      currentChunk = line;
      continue;
    }

    for (let index = 0; index < line.length; index += DISCORD_CONTENT_LIMIT) {
      chunks.push(line.slice(index, index + DISCORD_CONTENT_LIMIT));
    }

    currentChunk = "";
  }

  if (currentChunk) {
    chunks.push(currentChunk);
  }

  return chunks;
}

export default async function handler(
  req: ContactRequest,
  res: ContactResponse
) {
  res.setHeader("Content-Type", "application/json");

  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "Metodo no permitido" });
    return;
  }

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    res
      .status(500)
      .json({ ok: false, error: "Falta configurar DISCORD_WEBHOOK_URL" });
    return;
  }

  const payload = parsePayload(req.body);

  if (!payload || !hasUsefulInformation(payload)) {
    res
      .status(400)
      .json({ ok: false, error: "No se recibio informacion del formulario" });
    return;
  }

  try {
    for (const messageChunk of chunkDiscordMessage(
      formatDiscordMessage(payload)
    )) {
      const discordResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: messageChunk,
          allowed_mentions: { parse: [] },
        }),
      });

      if (!discordResponse.ok) {
        res
          .status(502)
          .json({ ok: false, error: "Discord rechazo el mensaje" });
        return;
      }
    }

    res.status(200).json({ ok: true });
  } catch {
    res
      .status(500)
      .json({ ok: false, error: "No se pudo enviar el mensaje a Discord" });
  }
}
