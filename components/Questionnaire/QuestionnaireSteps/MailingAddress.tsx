import Link from "next/link";

import { useState } from "react";

import Select from 'react-select';

import { MailAddressProps } from "@/types";
import AutoCompletePlace from "@/components/Utils/GooglePlaceAutoComplete";
import { MailingAddressOptions } from "@/libs/selectOptions";

interface Step2Props {
  handleNext: (data: MailAddressProps) => void;
  handlePrevious: () => void;
  step2Data: MailAddressProps | null;
}

export default function MailingAddress({ handleNext, handlePrevious, step2Data } : Step2Props) {
  const [ formValues, setFormValues ] = useState(step2Data || {
    address: "",
    address_line_1: "",
    address_line_2: "",
    suburb: "",
    state: "",
    postcode: ""
  });

  const [ addressState, setAddressState ] = useState(step2Data?.state ? {value: step2Data.state, label: step2Data.state} : null);

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

  const handleSelectChange = (selectedOption: any) => {
    setAddressState(selectedOption);
    setFormValues((prevData) => ({...prevData,  state: selectedOption.value}));
  };

  return (
    <>
      <h2 className="text-tertiary text-[25px] font-[800]">2. Mailing Address</h2>
      <p className="text-dark text-[16px] font-[500]">Provide a single mailing address for any hard copy correspondance.</p>
      <form className="mt-[25px]" onSubmit={onSubmit} autoComplete="off">
        <div className="w-[620px]">
          <div className="h-[42px]">
            <AutoCompletePlace setFormValues={setFormValues} formValues={formValues}/>
          </div>
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
            placeholder="Address Line 2"
            className="border border-tertiary rounded-[20px] h-[42px] w-full mb-4"
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
            <div className="w-1/2">
              <Select
                options={MailingAddressOptions}
                value={addressState}
                onChange={handleSelectChange}
                placeholder="State*"
                isSearchable={false}
                required
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: state.isFocused ? "#358AC3" : "#358AC3",
                    width: "100%",
                    height: "42px",
                    borderRadius: "20px",
                    color: "black",
                    paddingLeft: "20px",
                    outline: "none",
                    ":hover": {
                      borderColor: "#358AC3"
                    },
                    borderWidth: state.isFocused ? "1px" : "1px",
                  }),
                  option: (provided, state) => ({
                    ...provided,
                    width: "100%",
                    color: state.isSelected ? 'white' : "black",
                    backgroundColor: state.isSelected ? '#358AC3' : 'white',
                    ":hover": {
                      backgroundColor: "lightgray"
                    },
                    zIndex: "120"
                  }),
                  menu: (provided) => ({
                    ...provided,
                    width: '100%',
                    marginTop: "0px",
                    zIndex: "120"
                  }),
                  valueContainer: (provided) => ({
                    ...provided,
                    paddingLeft: '0px',
                  }),
                  dropdownIndicator: (provided) => ({
                    ...provided,
                    color: 'black',
                  }),
                }}
              />
            </div>
            {/* <input 
              type="text" 
              name="state" 
              value={formValues.state}
              onChange={handleInputChange}
              placeholder="State*"
              className="border border-tertiary rounded-[20px] h-[42px] w-full"
              required
            /> */}
            <input 
              type="text" 
              name="postcode" 
              value={formValues.postcode}
              onChange={handleInputChange}
              placeholder="Postcode*"
              className="border border-tertiary rounded-[20px] h-[42px] w-1/2"
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