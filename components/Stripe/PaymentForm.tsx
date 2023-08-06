"use client";

import { CardElement, useElements, useStripe, PaymentElement } from "@stripe/react-stripe-js";
import axios from "axios";
import React from "react";

export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await elements?.submit();

      if (!stripe || !elements) {
        return;
      }

      const {error} = await stripe.confirmPayment({
        elements,
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

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h3 className='text-dark font-[900] text-[18px] mb-[30px]'>Enter Personal Details</h3>
      <div className="w-[390px] mb-[30px] flex flex-wrap gap-y-3">
        <input type="text" name="name" placeholder="Name" className="border border-tertiary rounded-[20px] h-[42px] w-full" required/>
        <input type="text" name="phone" placeholder="Phone" className="border border-tertiary rounded-[20px] h-[42px] w-full" required/>
        <input type="email" name="email" placeholder="Email" className="border border-tertiary rounded-[20px] h-[42px] w-full" required/>
      </div>
      <h3 className='text-dark font-[900] text-[18px] mb-[30px]'>Amount Payable is $650 (inc GST)</h3>
      <div className="w-[390px] mb-[30px]">
        <PaymentElement options={{ fields: { billingDetails: { address: { country: "never" }} }, }}/>
      </div>
      <h3 className='text-dark font-[900] text-[18px] mb-[30px]'>Payment Terms</h3>
      <div className="flex gap-x-5 mb-[30px]">
        <button type="button" className="border border-warning rounded-[20px] text-warning w-[200px] h-[42px] shadow-mainShadow font-[500] text-[16px]">Cancel</button>
        <button type="submit" className="border border-warning bg-warning rounded-[20px] w-[200px] h-[42px] shadow-mainShadow font-[500] text-[16px]">Submit</button>
      </div>
      <p className="text-dark">The amount indicated will be debited from your account when the Process Payment button is clicked.   An invoice to your nominated email address after the payment is processed.</p>
    </form>
  );
}