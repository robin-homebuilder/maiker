"use client"

import { useState } from "react"

import ClientInformation from "./QuestionnaireSteps/ClientInformation";
import MailingAddress from "./QuestionnaireSteps/MailingAddress";
import SiteAddress from "./QuestionnaireSteps/SiteAddress";
import ProjectInfoOne from "./QuestionnaireSteps/ProjectInfoOne";
import ProjectInfoTwo from "./QuestionnaireSteps/ProjectInfoTwo";
import ClientBrief from "./QuestionnaireSteps/ClientBrief";
import Complete from "./QuestionnaireSteps/Complete";

import { ClientBriefProps, ClientOwnerProps, MailAddressProps, ProjectInformationOneProps, ProjectInformationTwoProps, SiteAddressProps } from "@/types";

import { processQuestionnaire } from "@/services/questionnaireServices";

export default function QuestionnaireForm() {
  const [ step, setStep ] = useState(1);

  const [ step1Data, setStep1Data ] = useState<ClientOwnerProps[] | null >(null);
  const [ step2Data, setStep2Data ] = useState<MailAddressProps | null>(null);
  const [ step3Data, setStep3Data ] = useState<SiteAddressProps | null>(null);
  const [ step4Data, setStep4Data ] = useState<ProjectInformationOneProps | null>(null);
  const [ step5Data, setStep5Data ] = useState<ProjectInformationTwoProps | null>(null);
  const [ step6Data, setStep6Data ] = useState<ClientBriefProps | null>(null);
  
  const handleStep1Next = (data: ClientOwnerProps[]) => {
    setStep1Data(data)
    handleNext();
  };

  const handleStep2Next = (data: MailAddressProps) => {
    setStep2Data(data);
    handleNext();
  };

  const handleStep3Next = (data: SiteAddressProps) => {
    setStep3Data(data);
    handleNext();
  };

  const handleStep4Next = (data: ProjectInformationOneProps) => {
    setStep4Data(data);
    handleNext();
  };

  const handleStep5Next = (data: ProjectInformationTwoProps) => {
    setStep5Data(data);
    handleNext();
  };

  const handleStep6Previous = (data: ClientBriefProps) => {
    setStep6Data(data);

    setStep(step - 1);
  };

  const handleStep6Next = async (data: ClientBriefProps) => {
    await processQuestionnaire({
      step1Data: step1Data, 
      step2Data: step2Data, 
      step3Data: step3Data, 
      step4Data: step4Data, 
      step5Data: step5Data, 
      step6Data: data
    });

    handleNext();

    window.onbeforeunload = null;
  };

  const handleBeforeUnload = (event: BeforeUnloadEvent) => {
    event.preventDefault();
    return (event.returnValue = 'Are you sure you want to leave?');
  }

  const handleNext = () => {
    setStep(step + 1);
    window.onbeforeunload = handleBeforeUnload;
    window.scrollTo(0, 0);
  }

  const handlePrevious = () => {
    setStep(step - 1);
  }

  return (
    <>
      <div className="flex h-[47px] w-full">
        <span className={`flex items-center text-[15px] font-[500]`}>
          <p className={`w-[180px] text-center h-full flex justify-center items-center rounded-[5px] border ${step == 1 ? "bg-tertiary text-white border-tertiary" : "bg-white text-[#CBCBCB] border-[#D5D5D5] shadow-stepShadow"}`}>Client Information</p>
          <div className={`ml-[-21px] h-[33px] w-[34px] rotate-45 border-t-2 border-r-2 rounded-tr-[5px] rounded-bl-[20px] ${step == 1 ? "bg-tertiary border-tertiary" : "bg-white border-[#D5D5D5]"}`}></div>
        </span>
        <span className={`flex items-center text-[15px] font-[500] ml-[-20px]`}>
          <p className={`w-[180px] text-center h-full flex justify-center items-center rounded-[5px] border ${step == 2 ? "bg-tertiary text-white border-tertiary" : "bg-white text-[#CBCBCB] border-[#D5D5D5] shadow-stepShadow"}`}>Mailing Address</p>
          <div className={`ml-[-21px] h-[33px] w-[34px] rotate-45 border-t-2 border-r-2 rounded-tr-[5px] rounded-bl-[20px] ${step == 2 ? "bg-tertiary border-tertiary" : "bg-white border-[#D5D5D5]"}`}></div>
        </span>
        <span className={`flex items-center text-[15px] font-[500] ml-[-20px]`}>
          <p className={`w-[180px] text-center h-full flex justify-center items-center rounded-[5px] border ${step == 3 ? "bg-tertiary text-white border-tertiary" : "bg-white text-[#CBCBCB] border-[#D5D5D5] shadow-stepShadow"}`}>Site Address</p>
          <div className={`ml-[-21px] h-[33px] w-[34px] rotate-45 border-t-2 border-r-2 rounded-tr-[5px] rounded-bl-[20px] ${step == 3 ? "bg-tertiary border-tertiary" : "bg-white border-[#D5D5D5]"}`}></div>
        </span>
        <span className={`flex items-center text-[15px] font-[500] ml-[-20px]`}>
          <p className={`w-[180px] text-center h-full flex justify-center items-center rounded-[5px] border ${step == 4 ? "bg-tertiary text-white border-tertiary" : "bg-white text-[#CBCBCB] border-[#D5D5D5] shadow-stepShadow"}`}>Project Info. 1</p>
          <div className={`ml-[-21px] h-[33px] w-[34px] rotate-45 border-t-2 border-r-2 rounded-tr-[5px] rounded-bl-[20px] ${step == 4 ? "bg-tertiary border-tertiary" : "bg-white border-[#D5D5D5]"}`}></div>
        </span>
        <span className={`flex items-center text-[15px] font-[500] ml-[-20px]`}>
          <p className={`w-[180px] text-center h-full flex justify-center items-center rounded-[5px] border ${step == 5 ? "bg-tertiary text-white border-tertiary" : "bg-white text-[#CBCBCB] border-[#D5D5D5] shadow-stepShadow"}`}>Project Info. 2</p>
          <div className={`ml-[-21px] h-[33px] w-[34px] rotate-45 border-t-2 border-r-2 rounded-tr-[5px] rounded-bl-[20px] ${step == 5 ? "bg-tertiary border-tertiary" : "bg-white border-[#D5D5D5]"}`}></div>
        </span>
        <span className={`flex items-center text-[15px] font-[500] ml-[-20px]`}>
          <p className={`w-[180px] text-center h-full flex justify-center items-center rounded-[5px] border ${step == 6 ? "bg-tertiary text-white border-tertiary" : "bg-white text-[#CBCBCB] border-[#D5D5D5] shadow-stepShadow"}`}>Client Brief</p>
          <div className={`ml-[-21px] h-[33px] w-[34px] rotate-45 border-t-2 border-r-2 rounded-tr-[5px] rounded-bl-[20px] ${step == 6 ? "bg-tertiary border-tertiary" : "bg-white border-[#D5D5D5]"}`}></div>
        </span>
        <span className={`flex items-center text-[15px] font-[500] ml-[-20px]`}>
          <p className={`w-[180px] text-center h-full flex justify-center items-center rounded-[5px] border ${step == 7 ? "bg-tertiary text-white border-tertiary" : "bg-white text-[#CBCBCB] border-[#D5D5D5] shadow-stepShadow"}`}>Complete</p>
          <div className={`ml-[-21px] h-[33px] w-[34px] rotate-45 border-t-2 border-r-2 rounded-tr-[5px] rounded-bl-[20px] ${step == 7 ? "bg-tertiary border-tertiary" : "bg-white border-[#D5D5D5]"}`}></div>
        </span>
      </div>
      <div className="mt-10">
        {step == 1 ? (
          <ClientInformation handleNext={handleStep1Next} step1Data={step1Data}/>
        ) : step == 2 ? (
          <MailingAddress handleNext={handleStep2Next} handlePrevious={handlePrevious} step2Data={step2Data}/>
        ) : step == 3 ? (
          <SiteAddress handleNext={handleStep3Next} handlePrevious={handlePrevious} step3Data={step3Data}/>
        ) : step == 4 ? (
          <ProjectInfoOne handleNext={handleStep4Next} handlePrevious={handlePrevious} step4Data={step4Data}/>
        ) : step == 5 ? (
          <ProjectInfoTwo handleNext={handleStep5Next} handlePrevious={handlePrevious} step5Data={step5Data}/>
        ) : step == 6 ? (
          <ClientBrief handleNext={handleStep6Next} handlePrevious={handleStep6Previous} step6Data={step6Data} />
        ) : step == 7 ? (
          <Complete/>
        ) : null}
      </div>
    </>
  )
};