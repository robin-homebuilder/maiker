import { NextResponse } from 'next/server'
import Stripe from "stripe"

const stripe = new Stripe(process.env.NEXT_PUBLIC_SECRET_KEY_TEST!, {
  typescript: true,
  apiVersion: "2022-11-15",
});

export async function POST(req: Request) {
  const { data } = await req.json();
  const { amount, customer_name, email } = data;
  
  try {
    let customer;

    customer = await stripe.customers.search({
      query: `name:\'${customer_name}\' AND email:\'${email}\'`,
    });

    if (customer.data.length == 0) {
      customer = await stripe.customers.create({
        name: customer_name,
        email: email
      });
    } else{
      customer = customer.data[0];
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(amount) * 100,
      currency: "AUD",
      automatic_payment_methods: { enabled: true },
      customer: customer.id,
      confirm: false
    });

    return new NextResponse(paymentIntent.client_secret, { status: 200 });
  } catch (e) {
    return NextResponse.json(`error: ${e}`, {
      status: 500
    })
  }
}