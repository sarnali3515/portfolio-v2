import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

        await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: ["kjsarnali@gmail.com"],
            subject: `New Message from ${name}`,
            html: `
                <h2>Message from portfolio</h2>
                <p><b>Name:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Message:</b></p>
                <p>${message}</p>
            `,
        });

        return Response.json({ success: true });
    } catch (error) {
        return Response.json(
            { error: error.message },
            { status: 500 }
        );
    }
}