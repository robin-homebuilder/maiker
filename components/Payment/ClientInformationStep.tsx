import { useEffect, useState } from "react";

import { TfiClose } from "react-icons/tfi";

import { OwnerProps, ClientInformationProps, CompanyOwnerProps, TrusteeOwnerProps } from "@/types";

import IndividualOwner from "./OwnerGroup/IndividualOwner";
import CompanyOwner from "./OwnerGroup/CompanyOwner";
import TrustOwner from "./OwnerGroup/TrustOwner";

interface Step1Props {
  onNext: (data: ClientInformationProps) => void;
}

export default function ClientInformationStep({ onNext } : Step1Props) {
  const [ owners, setOwners ] = useState<OwnerProps[] | CompanyOwnerProps[] | TrusteeOwnerProps[] | [] >([{
    type:"individual_owner",
    first_name: "", 
    last_name: "", 
    phone: "", 
    email: "" 
  }]);

  const [ ownerError, setOwnerError ] = useState<string>("");

  const [ formData, setFormData ] = useState<ClientInformationProps>({
    owners: []
  });
  
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(owners.length == 0) {
      setOwnerError("There must be atleast one owner");
      return;
    }

    setFormData(prevData => ({
      ...prevData,
      owners: owners
    }));

    onNext({
      ...formData,
      owners: owners
    });
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

    setOwners(updatedOwners as OwnerProps[])
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

    setOwners(updatedOwners as CompanyOwnerProps[])
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

    setOwners(updatedOwners as TrusteeOwnerProps[])
    setOwnerError("")
  }
  
  const handleInputChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const updatedOwners = [...owners];

    updatedOwners[index] = {
      ...updatedOwners[index],
      [name]: value
    };

    setOwners(updatedOwners as (OwnerProps[] | CompanyOwnerProps[] | TrusteeOwnerProps[] | []));
  }
  
  const handleRemoveGroup = (indexToRemove: number) => {
    setOwners(prevOwners => 
      (prevOwners as OwnerProps[]).filter((_, index) => index !== indexToRemove)
    );
  }

  return (
    <>
      <h2 className='text-tertiary font-[800] text-[25px]'>Enter Client Information</h2>
      <p className='text-dark mb-3'>Enter client names and detail information for the project.</p>
      {ownerError && <p className="text-danger mb-3">{ownerError}</p>}
      <form onSubmit={onSubmit} className="scrollable-content overflow-y-scroll max-h-[750px] pr-1 pb-2.5">
        {owners.length > 0 &&
          owners.map((owner, index) => (
            <div className="mb-4" key={index}>
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
        <div className="flex gap-x-4">
          <button type="button" className="text-tertiary font-[500] text-[16px] w-[200px] h-[42px] shadow-mainShadow border border-tertiary rounded-[20px] bg-white" onClick={addAdditionalOwner}>Add Additional Owner</button>
          <button type="button" className="text-tertiary font-[500] text-[16px] w-[200px] h-[42px] shadow-mainShadow border border-tertiary rounded-[20px] bg-white" onClick={addCompanyOwner}>Add Company Owner</button>
          <button type="button" className="text-tertiary font-[500] text-[16px] w-[200px] h-[42px] shadow-mainShadow border border-tertiary rounded-[20px] bg-white" onClick={addTrustOwner}>Add Trust Owner</button>
        </div>
        {/* <div className="mt-10">
          <h2 className='text-tertiary font-[800] text-[25px]'>Consultant Connect</h2>
          <p className="text-dark mb-2">If your are a consultant submitting a costing request on behalf of a client, please click <span className="text-warning font-[500]">here.</span></p>
          <p className="text-dark mb-4">This section is for consultants submitting budget and quote requests on behalf of the client.  If you are submitting a budget or quote request as the owner, this section is not required.</p>
          <div className="border border-tertiary rounded-[20px] bg-white p-5">
            <h3 className='text-tertiary font-[800] text-[18px] mb-1.5'>Consultant Connect</h3>
            <p className="text-dark mb-2.5">If you are a registered project consultant with Maiker Constructions, enter your consultant number below.</p>
            <input type="text" name="id_number" placeholder="Enter ID Number" className="border border-tertiary rounded-[20px] w-full h-[42px] mb-2"/>
            <div className="flex gap-x-2.5">
              <button type="button" className="bg-tertiary w-1/2 h-[42px] text-white shadow-mainShadow text-[16px] font-[500] border border-tertiary rounded-[20px]">Submit</button>
              <button type="button" className="bg-white w-1/2 h-[42px] text-tertiary shadow-mainShadow text-[16px] font-[500] border border-tertiary rounded-[20px]">Register</button>
            </div>
          </div>
        </div> */}
        <div className="flex justify-end gap-x-2.5 mt-5">
          <button type="submit" className="text-white bg-warning font-[500] text-[16px] rounded-[20px] w-[200px] h-[42px] shadow-mainShadow">Next</button>
        </div>
      </form>
    </>
  );
};