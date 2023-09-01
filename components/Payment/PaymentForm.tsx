"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import ClientInformationStep from './ClientInformationStep';
import ProjectInformation from './ProjectInformation';
import PaymentElement_Container from '../Stripe/PaymentElement';

import { ClientInformationProps, ProjectInformationProps } from "@/types";
import { createNewClient } from '@/services/newClientServices';
import { processXero } from '@/services/xeroServices';

interface PackageProps {
  price: number,
  slug: string
}

export default function PaymentForm({ price, slug } : PackageProps) {
  const router = useRouter();
  
  const [ step, setStep ] = useState<number>(1);
  const [ step1Data, setStep1Data ] = useState<ClientInformationProps | null >(null);
  const [ step2Data, setStep2Data ] = useState<ProjectInformationProps | null>(null);

  const handleBeforeUnload = (event: BeforeUnloadEvent) => {
    event.preventDefault();
    return (event.returnValue = 'Are you sure you want to leave?');
  }

  const handleStep1Next = (data: ClientInformationProps) => {
    setStep1Data(data);
    setStep(step + 1);
    
    window.onbeforeunload = handleBeforeUnload;
  };

  const handleStep2Next = (data: ProjectInformationProps) => {
    setStep2Data(data);
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    const project_id = await createNewClient({client_information: step1Data!, project_information: step2Data! });

    await processXero({client_information: step1Data!, project_id: project_id!, slug: slug });

    window.onbeforeunload = null;

    router.push("/payment/success");
  };

  switch (step) {
    case 1:
      return <ClientInformationStep onNext={handleStep1Next} />;
    case 2:
      return <ProjectInformation onPrevious={handlePrevious} onNext={handleStep2Next} />;
    case 3:
      return <PaymentElement_Container price={price} handlePrevious={handlePrevious} handleSubmit={handleSubmit} client_information={step1Data!}/>;
    default:
      return null;
  }
};