import { Resend } from 'resend';
import { EmailTemplate } from '../../emails/index.jsx';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(req) {
    const response=await req.json()
    try {
        
        const data=await resend.emails.send({
            from: 'rhysgregory90@gmail.com',
            to: [response.data.email],
            subject: 'Booking confirmation',
            react: <EmailTemplate userEmail={response.data.userEmail} />,
        });
        return NextResponse.json({ data: 'Email sent' })

    } catch (error) {
        return NextResponse.json({ error: error.message })
}
}