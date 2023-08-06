import { NextResponse } from 'next/server'
import Stripe from "stripe"

const stripe = new Stripe(process.env.NEXT_PUBLIC_SECRET_KEY_TEST!, {
  typescript: true,
  apiVersion: "2022-11-15",
});

export async function POST(req: Request) {
  const { data } = await req.json();
  const { amount } = data;
  
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(amount) * 100,
      currency: "AUD",
    });

    return new NextResponse(paymentIntent.client_secret, { status: 200 });
  } catch (e) {
    return NextResponse.json(`error: ${e}`, {
      status: 500
    })
  }
}