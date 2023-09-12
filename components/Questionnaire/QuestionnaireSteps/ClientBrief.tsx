import Link from "next/link";

import { ChangeEvent, useRef, useState } from "react";

import { FaSpinner } from "react-icons/fa";

import { ClientBriefProps } from "@/types";

import { ClientBriefCheckboxOptions } from "@/libs/checkboxOptions";

interface Step6Props {
  handleNext: (data: ClientBriefProps) => void;
  handlePrevious: (data: ClientBriefProps) => void;
  step6Data: ClientBriefProps | null;
}

export default function ClientBrief({ handleNext, handlePrevious, step6Data } : Step6Props) {
  const [ isSubmitting, setIsSubmitting ] = useState(false);

  const [ formValues, setFormValues ] = useState(step6Data || {
    brief_information: "",
    client_checkbox: [],
    other_requirements: ""
  });

  const otherRequirements = useRef<HTMLTextAreaElement | null>(null);

  const [ checkboxOther, setCheckboxOther ] = useState(step6Data?.other_requirements ? true : false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setIsSubmitting(true);

    handleNext(formValues);
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const checkboxValue = e.target.value;

    if (e.target.checked) {
      setFormValues((prevFormValues) => ({
        ...prevFormValues,
        client_checkbox: [...prevFormValues.client_checkbox, checkboxValue]
      }));
    } else {
      setFormValues((prevFormData) => ({
        ...prevFormData,
        client_checkbox: prevFormData.client_checkbox.filter(
          (checkbox) => checkbox !== checkboxValue
        ),
      }));
    }
  };

  const handleCheckboxOtherChange = (e: ChangeEvent<HTMLInputElement>) => {
    const checkboxValue = e.target.value;

    if (e.target.checked) {
      setCheckboxOther(true);
    } else {
      setCheckboxOther(false);
      
      if (otherRequirements.current) {
        otherRequirements.current.value = '';
      }

      setFormValues((prevFormValues) => ({
        ...prevFormValues,
        other_requirements: ""
      }));
    }
  };

  return (
    <>
      <h2 className="text-tertiary text-[25px] font-[800] mb-5">6. Client Brief</h2>
      <form className="mt-[25px]" onSubmit={onSubmit} autoComplete="off">
        <div className="mb-7">
          <p className="text-dark text-[16px] font-[500] mb-4">Please provide a brief description of the works with anything else you would like to add that may assist us with your enquiry:</p>
          <textarea 
            className="w-full h-[200px] rounded-[20px] border border-tertiary resize-none px-5 py-2 text-dark outline-none" 
            name="brief_information" 
            placeholder="Insert Project Brief Information" 
            onChange={handleInputChange} 
            required 
            value={formValues.brief_information}
          />
        </div>
        <div className="mb-7">
          <p className="text-dark text-[16px] font-[500] mb-3">What do you need next in order to proceed with your proposed project?</p>
          <p className="text-dark text-[15px] mb-4">The stage of home design and planning can be quite time-intensive, but meticulous attention to detail is crucial. By collecting as much information as possible at this stage, we can minimize potential extended delays in the future.</p>
          <div className="w-4/5 flex flex-wrap gap-y-5 mb-4">
            {ClientBriefCheckboxOptions.map((item,index) => (
              <div className="flex justify-start items-center gap-x-2.5 w-1/3" key={index}>
                <input type="checkbox" className="custom-checkbox" id={item.id} value={item.value} onChange={handleCheckboxChange} checked={formValues.client_checkbox.includes(item.value)}/>
                <label htmlFor={item.id} className="text-tertiary cursor-pointer">{item.value}</label>
              </div>
            ))}
            <div className="flex justify-start items-center gap-x-2.5 w-full">
              <input type="checkbox" className="custom-checkbox" id="other" onChange={handleCheckboxOtherChange} checked={checkboxOther}/>
              <label htmlFor="other" className="text-tertiary cursor-pointer">Other:</label>
            </div>
          </div>
          <textarea 
            className="w-full h-[71px] rounded-[20px] border border-tertiary resize-none px-5 py-2 text-dark outline-none disabled:cursor-not-allowed" 
            name="other_requirements" 
            ref={otherRequirements} 
            placeholder="Insert Other Requirements" 
            onChange={handleInputChange} 
            disabled={!checkboxOther}
            value={formValues.other_requirements}
          />
        </div>
        <div className="w-full flex justify-end gap-x-4 mt-10">
          <Link href="/">
            <button 
              type="button" 
              className={`text-warning text-[16px] font-[600] h-[42px] w-[120px] ${isSubmitting && "cursor-not-allowed"}`}
              disabled={isSubmitting}
            >Cancel</button>
          </Link>
          <button 
            type="button" 
            className={`text-warning border border-warning rounded-[20px] text-[16px] shadow-mainShadow font-[600] w-[200px] h-[42px] ${isSubmitting && "cursor-not-allowed"}`} 
            onClick={() => handlePrevious(formValues)}
            disabled={isSubmitting}
          >Back</button>
          <button 
            type="submit" 
            className={`text-white bg-warning rounded-[20px] text-[16px] shadow-mainShadow font-[600] w-[200px] h-[42px] flex justify-center items-center ${isSubmitting && "cursor-not-allowed"}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (<>Submitting&nbsp;&nbsp;<FaSpinner className="animate-spin"/></>) : "Next" }
          </button>
        </div>
      </form>
    </>
  );
};