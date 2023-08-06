export async function createPaymentIntent(amount: number){
  const data = {
    amount: amount
  }

  try {
    const paymentIntent = await fetch(`${process.env.API_BASE_URL}/api/stripe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({data}),
      // cache: "no-store"
    })

    const responseText = await paymentIntent.text();

    return responseText;
  } catch (error) {
    console.error('Error while creating payment intent:', error);
    throw error;
  }
}