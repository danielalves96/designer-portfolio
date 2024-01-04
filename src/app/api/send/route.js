import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ['paolatoliveira@gmail.com'],
      subject: `Contato site | ${subject}`,
      react: (
        <div>
          <h1>{subject}</h1>
          <h3>
            Você recebeu uma nova mensagem de <strong>{email}</strong>{' '}
          </h3>
          <h3>Mensagem recebida:</h3>
          <h3>{message}</h3>
        </div>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
