"use client";

import React, { useRef, useState } from "react";

import { useElements, useStripe, PaymentElement } from "@stripe/react-stripe-js";

import { createPaymentIntent } from "@/services/stripeServices";

import { FaSpinner } from "react-icons/fa";

interface Step3Props {
  price: number,
  handlePrevious: () => void;
  handleSubmit: () => void;
}

export default function StripeForm({ price, handlePrevious, handleSubmit } : Step3Props ) {
  const [ isSubmitting, setIsSubmitting ] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const formRef = useRef<HTMLFormElement | null>(null); 

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {

      if (!stripe || !elements) {
        return;
      }

      const {error: submitError} = await elements.submit();
      if (submitError) {
        return;
      }

      setIsSubmitting(true);

      const formData = new FormData(formRef.current!);
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;

      const paymentProps = {
        customer_name: name,
        email: email,
        amount: price
      }

      const clientSecret = await createPaymentIntent(paymentProps);
      
      const {error} = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: 'https://example.com/order/123/complete',
          payment_method_data: {
            billing_details: {
              address: {
                country: "AU"
              }
            }
          }
        },
        redirect: "if_required"
      });

      handleSubmit();
    } catch (error) {
      console.log(error);
    } finally {
      // setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} ref={formRef}>
      <h2 className='text-tertiary font-[800] text-[25px] mb-10'>Enter Payment Information</h2>
      <h3 className='text-dark font-[900] text-[18px] mb-[30px]'>Amount Payable is ${price.toLocaleString('en-US', { minimumFractionDigits: 2 })} (inc GST)</h3>
      <div className="w-[390px] mb-[30px]">
        <PaymentElement options={{ fields: { billingDetails: { address: { country: "never" }} }, }}/>
      </div>
      <h3 className='text-dark font-[900] text-[18px] mb-5'>Payment Terms</h3>
      <p className="text-dark mb-[30px]">The amount indicated will be debited from your account when the Process Payment button is clicked. An invoice to your nominated email address after the payment is processed.</p>
      <div className="flex gap-x-5">
        <button 
          type="button" 
          className={`border border-warning rounded-[20px] text-warning w-[200px] h-[42px] shadow-mainShadow font-[500] text-[16px] ${isSubmitting && "cursor-not-allowed"}`} 
          onClick={handlePrevious} 
          disabled={isSubmitting}
        >
          Back
        </button>
        <button 
          type="submit" 
          className={`border border-warning bg-warning rounded-[20px] w-[200px] h-[42px] shadow-mainShadow font-[500] text-[16px] flex justify-center items-center gap-x-2.5 ${isSubmitting && "cursor-not-allowed"}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (<>Processing <FaSpinner className="animate-spin"/></>) : "Submit" }
        </button>
      </div>
    </form>
  );
}