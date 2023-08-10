"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, StripeElementsOptions  } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_PUBLISHABLE_KEY_TEST!,
  {locale: 'en-AU'}
);

export default function PaymentElement_Container({ price } : { price : number }) {
  const options: StripeElementsOptions = {
    mode: 'payment',
    currency: 'aud',
    amount: price,
    appearance: {
      theme: "stripe",
      variables:{
        borderRadius: "20px"
      },
      rules:{
        ".Input": {
          border: '1px solid #358AC3',
        },
        ".Label": {
          opacity: "0",
          lineHeight: "0"
        }
      },   
    },
  }
  
  return (
    <Elements stripe={stripePromise} options={options}>
      <PaymentForm price={price}/>
    </Elements>
  );
}