"use client"

import React, { useState } from 'react';

import Step1 from './Step1';
import Step2 from './Step2';
import PaymentElement_Container from '../Stripe/PaymentElement';

interface Step1Data {
  name: string;
  phone: string;
  email: string;
  // Add other fields as needed
}

interface Step2Data {
  name: string;
  phone: string;
  email: string;
  // Add other fields as needed
}

interface PackageProps {
  price: number
}

export default function PaymentForm({ price } : PackageProps) {
  const [ step, setStep ] = useState<number>(1);
  // const [ step1Data, setStep1Data ] = useState<Step1Data>({});
  // const [step2Data, setStep2Data] = useState<Step2Data>({});

  const handleStep1Next = (data: Step1Data) => {
    // setStep1Data(data);
    setStep(step + 1);
  };

  
  const handleStep2Next = (data: Step2Data) => {
    // setStep2Data(data);
    setStep(step + 1);
  };

  const handleStep2Previous = () => {
    setStep(step - 1);
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    // Handle form submission
  };

  switch (step) {
    case 1:
      return <Step1 onNext={handleStep1Next} />;
    case 2:
      return <Step2 onPrevious={handleStep2Previous} onNext={handleStep2Next} />;
    case 3:
      return <PaymentElement_Container price={price} handlePrevious={handlePrevious}/>;
    default:
      return null;
  }
};