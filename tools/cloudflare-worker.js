// Дала мұрасы · ЖИ гидке арналған прокси (Cloudflare Workers).
// Сайтты жалпыға ашқанда API кілтін браузерге бермеу үшін қолданылады.
//
// Орнату:
//   1. dash.cloudflare.com → Workers & Pages → Create → «Hello World» worker жаса.
//   2. Осы файлдың мазмұнын worker кодына қой да, Deploy бас.
//   3. Settings → Variables → ANTHROPIC_API_KEY (Secret) айнымалысына кілтті жаз.
//      Қаласаң ALLOWED_ORIGIN айнымалысына сайтыңның мекенжайын жаз (мысалы https://iazamat748-star.github.io).
//   4. Сайтта «Гидті баптау» → «Өз проксиің» → worker мекенжайын (https://….workers.dev) енгіз.
const MODELS = new Set(["claude-sonnet-5-5", "claude-haiku-5-5", "claude-opus-5-5"]);

export default {
  async fetch(request, env) {
    const origin = request.headers.get("origin") || "";
    const allowed = env.ALLOWED_ORIGIN || "*";
    const cors = {
      "access-control-allow-origin": allowed === "*" ? "*" : (origin === allowed ? origin : allowed),
      "access-control-allow-methods": "POST, OPTIONS",
      "access-control-allow-headers": "content-type",
      "vary": "origin"
    };
    if (request.method === "OPTIONS") return new Response(null, {headers: cors});
    if (request.method !== "POST") return new Response("POST only", {status: 405, headers: cors});
    if (allowed !== "*" && origin !== allowed) return new Response("Forbidden origin", {status: 403, headers: cors});

    let body;
    try { body = await request.json(); } catch { return new Response("Bad JSON", {status: 400, headers: cors}); }
    // Шығынды шектеу: модель, жауап ұзындығы және тарих көлемі
    const payload = {
      model: MODELS.has(body.model) ? body.model : "claude-haiku-5-5",
      max_tokens: Math.min(Number(body.max_tokens) || 800, 1200),
      stream: true,
      system: String(body.system || "").slice(0, 12000),
      messages: (Array.isArray(body.messages) ? body.messages : []).slice(-10).map((m) => ({role: m.role === "assistant" ? "assistant" : "user", content: String(m.content).slice(0, 4000)}))
    };
    const upstream = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {"content-type": "application/json", "x-api-key": env.ANTHROPIC_API_KEY, "anthropic-version": "2023-06-01"},
      body: JSON.stringify(payload)
    });
    return new Response(upstream.body, {status: upstream.status, headers: {...cors, "content-type": upstream.headers.get("content-type") || "text/event-stream"}});
  }
};
