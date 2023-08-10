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
    const paymentIntent = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/stripe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({data}),
      cache: "no-store"
    })

    const responseText = await paymentIntent.text();

    return responseText;
  } catch (error) {
    console.error('Error while creating payment intent:', error);
    throw error;
  }
}