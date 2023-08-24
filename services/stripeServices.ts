import { ClientInformationProps } from "@/types";

type PaymentProps = {
  owner: ClientInformationProps,
  amount: number
}

export async function createPaymentIntent({ amount, owner } : PaymentProps){
  const user = owner.owners[0];
  
  const data = {
    customer_name: `${user.first_name} ${user.last_name}`,
    email: user.email,
    amount
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/stripe/payment-intent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      cache: "no-store"
    });

    const paymentIntent = await response.json();

    return paymentIntent;
  } catch (error) {
    console.error('Error while creating payment intent:', error);
    throw error;
  }
}