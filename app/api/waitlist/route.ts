import { NextResponse } from "next/server"

export async function POST(request: Request) {
    try {
        const { name, email, type } = await request.json()

        if (!email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 })
        }

        const discordWebhookUrl = "https://discord.com/api/webhooks/1517310781539221544/1aOWrfdveBesnV8_z1EMUkUzaWObXMs_w2sbHKzKEqgJxdJHZmyghlSisAEeRW4haf0x"

        const typeLabel = type === "VET" ? "🏥 Clínica Veterinaria (Acceso Anticipado)" : "📱 Dueño de Mascota (Lista de Espera iOS)"

        // Rich Discord Embed payload
        const embed = {
            title: "🎉 ¡Nuevo Registro en Lista de Espera! 🎉",
            color: type === "VET" ? 0x00D9FF : 0x6366F1, // Cyan for Vet, Indigo for Owner
            fields: [
                { name: "Nombre / Clínica", value: name || "No especificado", inline: true },
                { name: "Correo Electrónico", value: email, inline: true },
                { name: "Tipo de Registro", value: typeLabel, inline: false },
            ],
            timestamp: new Date().toISOString()
        }

        const response = await fetch(discordWebhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                embeds: [embed]
            })
        })

        if (!response.ok) {
            const errorText = await response.text()
            console.error("Failed to post to Discord webhook:", errorText)
            return NextResponse.json({ error: "Failed to post to webhook" }, { status: 500 })
        }

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error("Waitlist API error:", error)
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}
