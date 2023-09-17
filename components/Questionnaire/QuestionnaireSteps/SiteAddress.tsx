import Link from "next/link";

import { useState } from "react";

import Select from 'react-select';

import { SiteAddressProps } from "@/types";
import AutoCompletePlace from "@/components/Utils/GooglePlaceAutoComplete";
import { SiteddressOptions } from "@/libs/selectOptions";

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
    state_code: "",
    postcode: ""
  });

  const [ addressState, setAddressState ] = useState(step3Data?.state ? {value: step3Data.state, label: step3Data.state_code} : null);

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
    setFormValues((prevData) => ({...prevData,  state_code: selectedOption.label}));
  };

  return (
    <>
      <h2 className="text-tertiary text-[25px] font-[800]">3. Site Address</h2>
      <p className="text-dark text-[16px] font-[500]">Provide a single mailing address for any hard copy correspondance.</p>
      <form className="mt-[25px]" onSubmit={onSubmit} autoComplete="off">
        <div className="w-full sm:w-[620px]">
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
                options={SiteddressOptions}
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
        <div className="w-full flex flex-wrap sm:flex-nowrap justify-end gap-x-4 mt-10 gap-y-5 sm:gap-y-0">
          <div className="w-full sm:w-auto flex">
            <Link href="/" className="block w-1/2 sm:w-[120px]">
              <button type="button" className="text-warning text-[16px] font-[600] h-[42px] w-full">Cancel</button>
            </Link>
            <button type="button" className="text-warning border border-warning rounded-[20px] text-[16px] shadow-mainShadow font-[600] w-1/2 sm:w-[200px] h-[42px]" onClick={handlePrevious}>Back</button>
          </div>
          <button type="submit" className="text-white bg-warning rounded-[20px] text-[16px] shadow-mainShadow font-[600] w-full sm:w-[200px] h-[42px]">Next</button>
        </div>
      </form>
    </>
  );
};