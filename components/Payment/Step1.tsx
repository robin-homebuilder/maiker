import { useState } from "react";
import { TfiClose } from "react-icons/tfi";

interface Step1Props {
  onNext: (data: Step1Data) => void;
}

interface Step1Data {
  name: string;
  phone: string;
  email: string;
  // Add other fields as needed
}

export default function Step1({ onNext } : Step1Props) {
  const [ formData, setFormData ] = useState<Step1Data>({
    name: '',
    phone: '',
    email: '',
  });

  const [ additionalOwner, setAdditionalOwner ] = useState<Array<any>>([])
  const [ companyOwners, setCompanyOwners ] = useState<Array<any>>([])
  const [ trustOwners, setTrustOwners ] = useState<Array<any>>([])

  const onSubmit = () => {
    onNext(formData);
  }

  const addAdditionalOwner = () => {
    setAdditionalOwner([...additionalOwner, {}]);
  }

  const addCompanyOwner = () => {
    setCompanyOwners([...companyOwners, {}]);
  }

  const addTrustOwner = () => {
    setTrustOwners([...trustOwners, {}]);
  }

  return (
    <>
      <h2 className='text-tertiary font-[800] text-[25px]'>Enter Client Information</h2>
      <p className='text-dark mb-3'>Enter client names and detail information for the project.</p>
      <form onSubmit={onSubmit} className="scrollable-content overflow-y-scroll max-h-[750px] pr-1 pb-2.5">
        <div className="mb-4">
          <div className='flex justify-between w-full mb-2'>
            <h3 className='text-dark font-[900] text-[18px]'>Individual Owner</h3>
          </div>
          <div className="w-full flex flex-wrap gap-y-3">
            <div className="w-full flex flex-wrap sm:flex-nowrap gap-x-2.5">
              <input type="text" name="name" placeholder="First Name*" className="border border-tertiary rounded-[20px] h-[42px] w-full sm:w-1/2"/>
              <input type="text" name="phone" placeholder="Last Name*" className="border border-tertiary rounded-[20px] h-[42px] w-full sm:w-1/2"/>
            </div>
            <div className="w-full flex flex-wrap sm:flex-nowrap gap-x-2.5">
              <input type="text" name="phone" placeholder="Mobile*" className="border border-tertiary rounded-[20px] h-[42px] w-full sm:w-1/2"/>
              <input type="email" name="email" placeholder="Email*" className="border border-tertiary rounded-[20px] h-[42px] w-full sm:w-1/2"/>
            </div>
          </div>
        </div>
        {additionalOwner.length > 0 &&
          additionalOwner.map((owner, index) => (
            <div className="mb-4" key={index}>
              <div className='flex justify-between w-full mb-2'>
                <h3 className='text-dark font-[900] text-[18px]'>Additional Owner</h3>
                <button type="button" className='text-dark text-[17px]' onClick={() => {setAdditionalOwner(additionalOwner.filter((_, i) => i !== index));}}><TfiClose /></button>
              </div>
              <div className="w-full flex flex-wrap gap-y-3">
                <div className="w-full flex flex-wrap sm:flex-nowrap gap-x-2.5">
                  <input type="text" name="name" placeholder="First Name*" className="border border-tertiary rounded-[20px] h-[42px] w-full sm:w-1/2"/>
                  <input type="text" name="phone" placeholder="Last Name*" className="border border-tertiary rounded-[20px] h-[42px] w-full sm:w-1/2"/>
                </div>
                <div className="w-full flex flex-wrap sm:flex-nowrap gap-x-2.5">
                  <input type="text" name="phone" placeholder="Mobile*" className="border border-tertiary rounded-[20px] h-[42px] w-full sm:w-1/2"/>
                  <input type="email" name="email" placeholder="Email*" className="border border-tertiary rounded-[20px] h-[42px] w-full sm:w-1/2"/>
                </div>
              </div>
            </div>
          ))
        }
        {companyOwners.length > 0 &&
          companyOwners.map((owner, index) => (
            <div className="mb-4" key={index}>
              <div className='flex justify-between w-full mb-2'>
                <h3 className='text-dark font-[900] text-[18px]'>Company Owner</h3>
                <button type="button" className='text-dark text-[17px]' onClick={() => {setCompanyOwners(companyOwners.filter((_, i) => i !== index));}}><TfiClose /></button>
              </div>
              <div className="w-full flex flex-wrap gap-y-3">
                <div className="w-full flex flex-wrap sm:flex-nowrap gap-x-2.5">
                  <input type="text" name="company_name" placeholder="Company Name" className="border border-tertiary rounded-[20px] h-[42px] w-full sm:w-1/2"/>
                  <input type="text" name="abn" placeholder="ABN" className="border border-tertiary rounded-[20px] h-[42px] w-full sm:w-1/2"/>
                </div>
                <div className="w-full flex flex-wrap sm:flex-nowrap gap-x-2.5">
                  <input type="text" name="contact_first_name" placeholder="Contact First Name" className="border border-tertiary rounded-[20px] h-[42px] w-full sm:w-1/2"/>
                  <input type="text" name="contact_last_name" placeholder="Contact Last Name" className="border border-tertiary rounded-[20px] h-[42px] w-full sm:w-1/2"/>
                </div>
                <div className="w-full flex flex-wrap sm:flex-nowrap gap-x-2.5">
                  <input type="text" name="phone" placeholder="Mobile" className="border border-tertiary rounded-[20px] h-[42px] w-full sm:w-1/2"/>
                  <input type="email" name="email" placeholder="Email" className="border border-tertiary rounded-[20px] h-[42px] w-full sm:w-1/2"/>
                </div>
              </div>
            </div>
          ))
        }
        {trustOwners.length > 0 &&
          trustOwners.map((owner, index) => (
            <div className="mb-4" key={index}>
              <div className='flex justify-between w-full mb-2'>
                <h3 className='text-dark font-[900] text-[18px]'>Trust Owner</h3>
                <button type="button" className='text-dark text-[17px]' onClick={() => {setTrustOwners(trustOwners.filter((_, i) => i !== index));}}><TfiClose /></button>
              </div>
              <div className="w-full flex flex-wrap gap-y-3 gap-x-4">
                <input type="text" name="trustee_name" placeholder="Trustee Name" className="border border-tertiary rounded-[20px] h-[42px] w-full"/>
                <div className="w-full flex flex-wrap sm:flex-nowrap gap-x-2.5">
                  <input type="text" name="trust_name" placeholder="Trust Name" className="border border-tertiary rounded-[20px] h-[42px] w-full sm:w-1/2"/>
                  <input type="text" name="abn" placeholder="ABN" className="border border-tertiary rounded-[20px] h-[42px] w-full sm:w-1/2"/>
                </div>
                <div className="w-full flex flex-wrap sm:flex-nowrap gap-x-2.5">
                  <input type="text" name="contact_first_name" placeholder="Contact First Name" className="border border-tertiary rounded-[20px] h-[42px] w-full sm:w-1/2"/>
                  <input type="text" name="contact_last_name" placeholder="Contact Last Name" className="border border-tertiary rounded-[20px] h-[42px] w-full sm:w-1/2"/>
                </div>
                <div className="w-full flex flex-wrap sm:flex-nowrap gap-x-2.5">
                  <input type="text" name="phone" placeholder="Contact Mobile" className="border border-tertiary rounded-[20px] h-[42px] w-full sm:w-1/2"/>
                  <input type="email" name="email" placeholder="Contact Email" className="border border-tertiary rounded-[20px] h-[42px] w-full sm:w-1/2"/>
                </div>
              </div>
            </div>
          ))
        }
        <div className="flex gap-x-4">
          <button type="button" className="text-tertiary font-[500] text-[16px] w-[200px] h-[42px] shadow-mainShadow border border-tertiary rounded-[20px] bg-white" onClick={addAdditionalOwner}>Add Additional Owner</button>
          <button type="button" className="text-tertiary font-[500] text-[16px] w-[200px] h-[42px] shadow-mainShadow border border-tertiary rounded-[20px] bg-white" onClick={addCompanyOwner}>Add Company Owner</button>
          <button type="button" className="text-tertiary font-[500] text-[16px] w-[200px] h-[42px] shadow-mainShadow border border-tertiary rounded-[20px] bg-white" onClick={addTrustOwner}>Add Trust Owner</button>
        </div>
        <div className="mt-10">
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
        </div>
        <div className="flex justify-end gap-x-2.5 mt-5">
          <button type="submit" className="text-white bg-warning font-[500] text-[16px] rounded-[20px] w-[200px] h-[42px] shadow-mainShadow">Next</button>
        </div>
      </form>
    </>
  );
};