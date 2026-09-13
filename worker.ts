export default {
  async fetch(request: Request, env: { ASSETS: { fetch: typeof fetch } }): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/waitlist" && request.method === "POST") {
      try {
        const { name, email, type } = (await request.json()) as {
          name?: string;
          email?: string;
          type?: string;
        };

        if (!email) {
          return new Response(JSON.stringify({ error: "Email is required" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        const discordWebhookUrl =
          "https://discord.com/api/webhooks/1517310781539221544/1aOWrfdveBesnV8_z1EMUkUzaWObXMs_w2sbHKzKEqgJxdJHZmyghlSisAEeRW4haf0x";
        const typeLabel =
          type === "VET"
            ? "🏥 Clínica Veterinaria (Acceso Anticipado)"
            : "📱 Dueño de Mascota (Lista de Espera iOS)";

        const embed = {
          title: "🎉 ¡Nuevo Registro en Lista de Espera! 🎉",
          color: type === "VET" ? 0x00d9ff : 0x6366f1,
          fields: [
            { name: "Nombre / Clínica", value: name || "No especificado", inline: true },
            { name: "Correo Electrónico", value: email, inline: true },
            { name: "Tipo de Registro", value: typeLabel, inline: false },
          ],
          timestamp: new Date().toISOString(),
        };

        const response = await fetch(discordWebhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            embeds: [embed],
          }),
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error("Failed to post to Discord webhook:", errorText);
          return new Response(JSON.stringify({ error: "Failed to post to webhook" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }

        return new Response(JSON.stringify({ success: true }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      } catch (error) {
        console.error("Waitlist API error:", error);
        return new Response(JSON.stringify({ error: "Internal server error" }), {
          status: 500,
          headers: { "Content-Type": "application/json" },
        });
      }
    }

    return env.ASSETS.fetch(request);
  },
};
