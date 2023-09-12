import Link from "next/link";

import { useState } from "react";

import { OwnerProps, ClientInformationProps, CompanyOwnerProps, TrusteeOwnerProps, ClientOwnerProps } from "@/types";
import IndividualOwner from "@/components/Payment/OwnerGroup/IndividualOwner";
import CompanyOwner from "@/components/Payment/OwnerGroup/CompanyOwner";
import TrustOwner from "@/components/Payment/OwnerGroup/TrustOwner";

interface Step1Props {
  handleNext: (data: ClientOwnerProps[]) => void;
  step1Data: ClientOwnerProps[] | null;
}

export default function ClientInformation({ handleNext, step1Data } : Step1Props) {
  const [ owners, setOwners ] = useState<ClientOwnerProps[]>(step1Data || [
    {
      type: "individual_owner",
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
    }
  ]);
  
  const [ ownerError, setOwnerError ] = useState<string>("");
  
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(owners.length == 0) {
      setOwnerError("There must be atleast one owner");
      return;
    }

    handleNext(owners);
  }

  const addAdditionalOwner = () => {
    const updatedOwners = [...owners];
    const countOwner = owners.length;
    
    updatedOwners[countOwner] = {
        type:"individual_owner",
        first_name: "", 
        last_name: "", 
        phone: "", 
        email: "" 
    };

    setOwners(updatedOwners)
    setOwnerError("")
  }

  const addCompanyOwner = () => {
    const updatedOwners = [...owners];
    const countOwner = owners.length;

    updatedOwners[countOwner] = {
        type:"company_owner",
        company_name: "",
        abn: "",
        first_name: "",
        last_name: "",
        phone: "",
        email: ""
    };

    setOwners(updatedOwners)
    setOwnerError("")
  }

  const addTrustOwner = () => {
    const updatedOwners = [...owners];
    const countOwner = owners.length;

    updatedOwners[countOwner] = {
      type:"trust_owner",
      trustee_name: "",
      trust_name: "",
      abn: "",
      first_name: "",
      last_name: "",
      phone: "",
      email: ""
    };

    setOwners(updatedOwners)
    setOwnerError("")
  }
  
  const handleInputChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const updatedOwners = [...owners];

    updatedOwners[index] = {
      ...updatedOwners[index],
      [name]: value
    };

    setOwners(updatedOwners);
  }
  
  const handleRemoveGroup = (indexToRemove: number) => {
    setOwners(prevOwners => 
      (prevOwners).filter((_, index) => index !== indexToRemove)
    );
  }

  return (
    <>
      <h2 className="text-tertiary text-[25px] font-[800]">1. Client Information</h2>
      <p className="text-dark text-[16px] font-[500]">Enter client information for the project.</p>
      {ownerError && <p className="text-danger mb-3">{ownerError}</p>}
      <form onSubmit={onSubmit} className="max-h-full pr-1 pb-2.5 mt-[25px]" autoComplete="off">
        {owners.length > 0 &&
          owners.map((owner, index) => (
            <div className="mb-5" key={index}>
              {owner?.type == "individual_owner" ? 
                <IndividualOwner handleInputChange={handleInputChange(index)} owner={owner as OwnerProps} handleRemoveGroup={() => handleRemoveGroup(index)}/>
              : owner?.type == "company_owner" ? 
                <CompanyOwner handleInputChange={handleInputChange(index)} owner={owner as CompanyOwnerProps} handleRemoveGroup={() => handleRemoveGroup(index)}/>
              : owner?.type == "trust_owner" ? 
                <TrustOwner handleInputChange={handleInputChange(index)} owner={owner as TrusteeOwnerProps} handleRemoveGroup={() => handleRemoveGroup(index)}/>
              : null }
            </div>
          ))
        }
        <div className="flex flex-wrap sm:flex-nowrap gap-x-4 gap-y-3 sm:gap-y-0">
          <button type="button" className="text-tertiary font-[500] text-[16px] w-full sm:w-[200px] h-[42px] shadow-mainShadow border border-tertiary rounded-[20px] bg-white" onClick={addAdditionalOwner}>Add Additional Owner</button>
          <button type="button" className="text-tertiary font-[500] text-[16px] w-full sm:w-[200px] h-[42px] shadow-mainShadow border border-tertiary rounded-[20px] bg-white" onClick={addCompanyOwner}>Add Company Owner</button>
          <button type="button" className="text-tertiary font-[500] text-[16px] w-full sm:w-[200px] h-[42px] shadow-mainShadow border border-tertiary rounded-[20px] bg-white" onClick={addTrustOwner}>Add Trust Owner</button>
        </div>
        <div className="w-full flex justify-end mt-10">
          <Link href="/">
            <button type="button" className="text-warning text-[16px] font-[600] h-[42px] w-[120px]">Cancel</button>
          </Link>
          <button type="submit" className="text-white bg-warning rounded-[20px] text-[16px] shadow-mainShadow font-[600] w-[200px] h-[42px]">Next</button>
        </div>
      </form>
    </>
  );
};