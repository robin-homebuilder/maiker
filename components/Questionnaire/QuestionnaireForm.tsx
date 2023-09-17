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

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

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
    window.scrollTo(0, 0);
  };

  const handleStep6Next = async (data: ClientBriefProps) => {
    // await processQuestionnaire({
    //   step1Data: step1Data, 
    //   step2Data: step2Data, 
    //   step3Data: step3Data, 
    //   step4Data: step4Data, 
    //   step5Data: step5Data, 
    //   step6Data: data
    // });

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
    window.scrollTo(0, 0);
  }

  return (
    <>
      <div className="flex items-center">
        <div className="block sm:hidden w-2/5">
          <div style={{ width: 120, height: 120 }}>
            <CircularProgressbar 
              value={step * 15} 
              text={`${step} of 7`} 
              strokeWidth={13}
              styles={{
                text: {
                  fontWeight: 'bold',
                  fill: "black",
                  fontSize: "20px"
                },
                path: {
                  stroke: "#358AC3",
                  strokeLinecap: "butt",
                  transition: "none"
                }
              }}
              counterClockwise
            />
          </div>
        </div>
        <div className="flex flex-wrap sm:flex-nowrap h-[47px] w-3/5 sm:w-full">
          <span className={`items-center text-[21px] sm:text-[15px] font-[700] sm:font-[500] ${step == 1 ? "flex" : "hidden sm:flex"}`}>
            <p 
              className={`w-full sm:w-[180px] text-center h-full flex justify-center items-center rounded-[5px] border 
                ${step == 1 ? "bg-none sm:bg-tertiary text-dark sm:text-white border-none sm:border-tertiary" : "bg-white text-[#CBCBCB] border-[#D5D5D5] shadow-stepShadow"}`
              }
            >
              Client Information
            </p>
            <div className={`hidden sm:block ml-[-21px] h-[33px] w-[34px] rotate-45 border-t-2 border-r-2 rounded-tr-[5px] rounded-bl-[20px] ${step == 1 ? "bg-tertiary border-tertiary" : "bg-white border-[#D5D5D5]"}`}></div>
          </span>
          <span className={`items-center sm:text-[15px] sm:font-[500] ml-0 sm:ml-[-20px] sm:flex ${step == 2 ? "flex text-[21px] font-[700]" : step == 1 ? "flex" : "hidden"}`}>
            <p 
              className={`w-full sm:w-[180px] text-center h-full flex justify-center items-center rounded-[5px] border 
                ${step == 2 ? "bg-none sm:bg-tertiary text-dark sm:text-white border-none sm:border-tertiary" : "text-dark sm:text-[#CBCBCB] bg-none sm:bg-white border-none sm:border-solid border-[#D5D5D5] shadow-none sm:shadow-stepShadow"}`
            }
            >
              <span className={`${step == 2 ? "block" : "hidden"} sm:block`}>Mailing Address</span>
              <span className={`${step == 1 ? "block" : "hidden"} sm:hidden font-[500]`}>Next: Mailing Address</span>
            </p>
            <div className={`hidden sm:block ml-[-21px] h-[33px] w-[34px] rotate-45 border-t-2 border-r-2 rounded-tr-[5px] rounded-bl-[20px] ${step == 2 ? "bg-tertiary border-tertiary" : "bg-white border-[#D5D5D5]"}`}></div>
          </span>
          <span className={`items-center sm:text-[15px] sm:font-[500] ml-0 sm:ml-[-20px] sm:flex ${step == 3 ? "flex text-[21px] font-[700]" : step == 2 ? "flex" : "hidden"}`}>
            <p 
              className={`w-full sm:w-[180px] text-center h-full flex justify-center items-center rounded-[5px] border 
                ${step == 3 ? "bg-none sm:bg-tertiary text-dark sm:text-white border-none sm:border-tertiary" : "text-dark sm:text-[#CBCBCB] bg-none sm:bg-white border-none sm:border-solid border-[#D5D5D5] shadow-none sm:shadow-stepShadow"}`
              }
            >
              <span className={`${step == 3 ? "block" : "hidden"} sm:block`}>Site Address</span>
              <span className={`${step == 2 ? "block" : "hidden"} sm:hidden font-[500]`}>Next: Site Address</span>
            </p>
            <div className={`hidden sm:block ml-[-21px] h-[33px] w-[34px] rotate-45 border-t-2 border-r-2 rounded-tr-[5px] rounded-bl-[20px] ${step == 3 ? "bg-tertiary border-tertiary" : "bg-white border-[#D5D5D5]"}`}></div>
          </span>
          <span className={`items-center sm:text-[15px] sm:font-[500] ml-0 sm:ml-[-20px] sm:flex ${step == 4 ? "flex text-[21px] font-[700]" : step == 3 ? "flex" : "hidden"}`}>
            <p 
              className={`w-full sm:w-[180px] text-center h-full flex justify-center items-center rounded-[5px] border 
                ${step == 4 ? "bg-none sm:bg-tertiary text-dark sm:text-white border-none sm:border-tertiary" : "text-dark sm:text-[#CBCBCB] bg-none sm:bg-white border-none sm:border-solid border-[#D5D5D5] shadow-none sm:shadow-stepShadow"}`
              }
            >
              <span className={`${step == 4 ? "block" : "hidden"} sm:block`}>Project Info. 1</span>
              <span className={`${step == 3 ? "block" : "hidden"} sm:hidden font-[500]`}>Next: Project Info. 1</span>
            </p>
            <div className={`hidden sm:block ml-[-21px] h-[33px] w-[34px] rotate-45 border-t-2 border-r-2 rounded-tr-[5px] rounded-bl-[20px] ${step == 4 ? "bg-tertiary border-tertiary" : "bg-white border-[#D5D5D5]"}`}></div>
          </span>
          <span className={`items-center sm:text-[15px] sm:font-[500] ml-0 sm:ml-[-20px] sm:flex ${step == 5 ? "flex text-[21px] font-[700]" : step == 4 ? "flex" : "hidden"}`}>
            <p 
              className={`w-full sm:w-[180px] text-center h-full flex justify-center items-center rounded-[5px] border 
                ${step == 5 ? "bg-none sm:bg-tertiary text-dark sm:text-white border-none sm:border-tertiary" : "text-dark sm:text-[#CBCBCB] bg-none sm:bg-white border-none sm:border-solid border-[#D5D5D5] shadow-none sm:shadow-stepShadow"}`
              }
            >
              <span className={`${step == 5 ? "block" : "hidden"} sm:block`}>Project Info. 2</span>
              <span className={`${step == 4 ? "block" : "hidden"} sm:hidden font-[500]`}>Next: Project Info. 2</span>
            </p>
            <div className={`hidden sm:block ml-[-21px] h-[33px] w-[34px] rotate-45 border-t-2 border-r-2 rounded-tr-[5px] rounded-bl-[20px] ${step == 5 ? "bg-tertiary border-tertiary" : "bg-white border-[#D5D5D5]"}`}></div>
          </span>
          <span className={`items-center sm:text-[15px] sm:font-[500] ml-0 sm:ml-[-20px] sm:flex ${step == 6 ? "flex text-[21px] font-[700]" : step == 5 ? "flex" : "hidden"}`}>
            <p 
              className={`w-full sm:w-[180px] text-center h-full flex justify-center items-center rounded-[5px] border 
                ${step == 6 ? "bg-none sm:bg-tertiary text-dark sm:text-white border-none sm:border-tertiary" : "text-dark sm:text-[#CBCBCB] bg-none sm:bg-white border-none sm:border-solid border-[#D5D5D5] shadow-none sm:shadow-stepShadow"}`
              }
              >
                <span className={`${step == 6 ? "block" : "hidden"} sm:block`}>Client Brief</span>
                <span className={`${step == 5 ? "block" : "hidden"} sm:hidden font-[500]`}>Next: Client Brief</span>
              </p>
            <div className={`hidden sm:block ml-[-21px] h-[33px] w-[34px] rotate-45 border-t-2 border-r-2 rounded-tr-[5px] rounded-bl-[20px] ${step == 6 ? "bg-tertiary border-tertiary" : "bg-white border-[#D5D5D5]"}`}></div>
          </span>
          <span className={`items-center sm:text-[15px] sm:font-[500] ml-0 sm:ml-[-20px] sm:flex ${step == 7 ? "flex text-[21px] font-[700]" : step == 6 ? "flex" : "hidden"}`}>
            <p 
              className={`w-full sm:w-[180px] text-center h-full flex justify-center items-center rounded-[5px] border 
                ${step == 7 ? "bg-none sm:bg-tertiary text-dark sm:text-white border-none sm:border-tertiary" : "text-dark sm:text-[#CBCBCB] bg-none sm:bg-white border-none sm:border-solid border-[#D5D5D5] shadow-none sm:shadow-stepShadow"}`
              }
            >
              <span className={`${step == 7 ? "block" : "hidden"} sm:block`}>Complete</span>
              <span className={`${step == 6 ? "block" : "hidden"} sm:hidden font-[500]`}>Next: Complete</span>
            </p>
            <div className={`hidden sm:block ml-[-21px] h-[33px] w-[34px] rotate-45 border-t-2 border-r-2 rounded-tr-[5px] rounded-bl-[20px] ${step == 7 ? "bg-tertiary border-tertiary" : "bg-white border-[#D5D5D5]"}`}></div>
          </span>
        </div>
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