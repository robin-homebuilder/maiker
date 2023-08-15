"use client"

import { FaChevronRight, FaSpinner } from "react-icons/fa"
import { MdReplay } from "react-icons/md";

import { createLead } from "@/services/zohoServices";
import { useRef, useState } from "react";

export default function RequstCallBackForm() {
  const [ submitting, setSubmitting ] = useState(false);
  const [ submitStatus, setSubmitStatus ] = useState<Number>(0);

  const formRef = useRef<HTMLFormElement | null>(null); 

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitting(true);

    try {
      const formData = new FormData(formRef.current!);
      const first_name = formData.get("firstName") as string;
      const last_name = formData.get("lastName") as string;
      const email = formData.get("email") as string;
      const phone = formData.get("phone") as string;

      const leadProps = {
        first_name,
        last_name,
        email,
        phone
      }

      const response = await createLead(leadProps);

      if(response){
        setSubmitStatus(1);
      } else{
        setSubmitStatus(2);
      }
      
    } catch (error) {
      setSubmitStatus(2);
    } finally {
      formRef.current!.reset();
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitStatus(0);
  }

  return (
    <form className="w-full flex flex-col gap-y-[30px]" onSubmit={onSubmit} ref={formRef}>
      <input type="text" placeholder="First Name" name="firstName" className="w-full h-[45px] rounded-[20px]"/>
      <input type="text" placeholder="Last Name" name="lastName" className="w-full h-[45px] rounded-[20px]"/>
      <div className="flex flex-wrap sm:flex-nowrap gap-x-5 gap-y-[30px] sm:gap-y-0">
        <input type="email" placeholder="Email" name="email" className="w-full h-[45px] rounded-[20px]"/>
        <input type="text" placeholder="Phone" name="phone" className="w-full h-[45px] rounded-[20px]"/>
      </div>
      <div className="flex gap-x-3 justify-center">
        <button type="submit" className={`${submitStatus == 1 ? "bg-warning text-white shadow-mainShadow" : "bg-white text-dark"} rounded-[20px] w-[200px] flex items-center justify-center font-[600] h-[45px]`} disabled={submitStatus === 1}>
          {submitStatus == 1 ? "Submitted" : ( <>Request Call Back&nbsp;&nbsp;{submitting ? (<><FaSpinner className="animate-spin"/></>) : (<><FaChevronRight /></>)}</>) }
        </button>
        {submitStatus == 1 && 
          <button type="button" className="bg-warning text-white shadow-mainShadow rounded-full w-[45px] flex items-center justify-center font-[600] h-[45px]" onClick={resetForm}>
            <MdReplay color="#FFFFFF" size={25}/>
          </button>
        }
      </div>
    </form>
  )
}