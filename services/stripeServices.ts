// "use server";

type PaymentProps = {
  customer_name: string,
  email: string,
  amount: number
}

export async function createPaymentIntent({ amount, customer_name, email } : PaymentProps){
  const data = {
    customer_name,
    email,
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