"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, StripeElementsOptions  } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_PUBLISHABLE_KEY_TEST!,
  {locale: 'en-AU'}
);

export default function PaymentElement_Container({ clientSecret } : { clientSecret: string }) {
  console.log(clientSecret)
  const options: StripeElementsOptions = {
    clientSecret: clientSecret,
    appearance: {
      theme: "stripe",
      variables:{
        borderRadius: "20px"
      },
      rules:{
        ".Input": {
          border: '1px solid #358AC3',
          height: "43px"
        },
        ".Label": {
          height: "42px",
          opacity: "0",
          lineHeight: "0"
        }
      },   
    },
  }
  
  return (
    <Elements stripe={stripePromise} options={options}>
      <PaymentForm />
    </Elements>
  );
}