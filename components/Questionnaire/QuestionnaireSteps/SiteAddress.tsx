import Link from "next/link";

import { useState } from "react";

import { SiteAddressProps } from "@/types";

interface Step3Props {
  handleNext: (data: SiteAddressProps) => void;
  handlePrevious: () => void;
  step3Data: SiteAddressProps | null;
}

export default function SiteAddress({ handleNext, handlePrevious, step3Data } : Step3Props) {
  const [ formValues, setFormValues ] = useState(step3Data || {
    address: "",
    address_line_1: "",
    address_line_2: "",
    suburb: "",
    state: "",
    postcode: ""
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    handleNext(formValues);
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value
    }));
  };
  return (
    <>
      <h2 className="text-tertiary text-[25px] font-[800]">3. Site Address</h2>
      <p className="text-dark text-[16px] font-[500]">Provide a single mailing address for any hard copy correspondance.</p>
      <form className="mt-[25px]" onSubmit={onSubmit} autoComplete="off">
        <div className="w-[620px]">
          <input 
            type="text" 
            name="address" 
            value={formValues.address}
            onChange={handleInputChange}
            placeholder="Start Typing Address*"
            className="border border-tertiary rounded-[20px] h-[42px] w-full"
            required
          />
          <hr className="py-0 my-4 border-[#CECECE]"/>
          <input 
            type="text" 
            name="address_line_1" 
            value={formValues.address_line_1}
            onChange={handleInputChange}
            placeholder="Address Line 1*"
            className="border border-tertiary rounded-[20px] h-[42px] w-full mb-4"
            required
          />
          <input 
            type="text" 
            name="address_line_2" 
            value={formValues.address_line_2}
            onChange={handleInputChange}
            placeholder="Address Line 2*"
            className="border border-tertiary rounded-[20px] h-[42px] w-full mb-4"
            required
          />
          <input 
            type="text" 
            name="suburb" 
            value={formValues.suburb}
            onChange={handleInputChange}
            placeholder="Suburb*"
            className="border border-tertiary rounded-[20px] h-[42px] w-full mb-4"
            required
          />
          <div className="w-full flex gap-x-[30px]">
            <input 
              type="text" 
              name="state" 
              value={formValues.state}
              onChange={handleInputChange}
              placeholder="State*"
              className="border border-tertiary rounded-[20px] h-[42px] w-full"
              required
            />
            <input 
              type="text" 
              name="postcode" 
              value={formValues.postcode}
              onChange={handleInputChange}
              placeholder="Postcode*"
              className="border border-tertiary rounded-[20px] h-[42px] w-full"
              required
            />
          </div>
        </div>
        <div className="w-full flex justify-end gap-x-4 mt-10">
          <Link href="/">
            <button type="button" className="text-warning text-[16px] font-[600] h-[42px] w-[120px]">Cancel</button>
          </Link>
          <button type="button" className="text-warning border border-warning rounded-[20px] text-[16px] shadow-mainShadow font-[600] w-[200px] h-[42px]" onClick={handlePrevious}>Back</button>
          <button type="submit" className="text-white bg-warning rounded-[20px] text-[16px] shadow-mainShadow font-[600] w-[200px] h-[42px]">Next</button>
        </div>
      </form>
    </>
  );
};