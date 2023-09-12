import Link from "next/link";
import { useState } from "react";

import Select from 'react-select';
import { PiCurrencyDollarBold } from "react-icons/pi";

import { ProjectInformationTwoProps } from "@/types";
import { YesNoOptions } from "@/libs/selectOptions";

interface Step5Props {
  handleNext: (data: ProjectInformationTwoProps) => void;
  handlePrevious: () => void;
  step5Data: ProjectInformationTwoProps | null;
}

export default function ProjectInfoTwo({ handleNext, handlePrevious, step5Data } : Step5Props) {
  const [ formValues, setFormValues ] = useState(step5Data || {
    commence: "",
    extensions: "",
    project_budget: "",
    completing_plan: "",
    builder: "",
    quoting: "",
    proposed_works: ""
  });

  const [ built, setBuilt ] = useState(step5Data?.completing_plan ? {value: step5Data.completing_plan, label: step5Data.completing_plan} : null);
  const [ showBuilder, setShowBuilder ] = useState(step5Data?.completing_plan == "Yes" ? true : false);

  const handleSelectChangePlan = (selectedOption: any) => {
    setBuilt(selectedOption);

    setFormValues((prevData) => ({...prevData,  completing_plan: selectedOption.value}));

    if(selectedOption.value == "Yes"){
      setShowBuilder(true)
    } else{
      setShowBuilder(false)
      setFormValues((prevData) => ({...prevData,  builder: ""}));
    }
  };

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
      <h2 className="text-tertiary text-[25px] font-[800]">5. Project Information - Part 2</h2>
      <form className="mt-5" onSubmit={onSubmit} autoComplete="off">
        <div className="mb-7">
          <p className="text-dark text-[16px] font-[500] mb-3">When are you looking to commence your project?</p>
          <input 
            type="text" 
            name="commence" 
            value={formValues.commence}
            onChange={handleInputChange}
            placeholder="Insert Reply*"
            className="border border-tertiary rounded-[20px] h-[42px] w-[620px]"
            required
          />
        </div>
        <div className="mb-7">
          <p className="text-dark text-[16px] font-[500] mb-3">For Extensions/Renovations do you intend to move out during the works?</p>
          <input 
            type="text" 
            name="extensions" 
            value={formValues.extensions}
            onChange={handleInputChange}
            placeholder="Insert Reply*"
            className="border border-tertiary rounded-[20px] h-[42px] w-[620px]"
            required
          />
        </div>
        <div className="mb-7">
          <p className="text-dark text-[16px] font-[500] mb-3">Do you have a project budget?</p>
          <div className="w-[620px] relative">
            <div className="absolute top-0 left-4 h-full flex justify-center items-center">
              <PiCurrencyDollarBold color="black" size={15}/>
            </div>
            <input 
              type="number" 
              name="project_budget" 
              value={formValues.project_budget}
              onChange={handleInputChange}
              className="border border-tertiary rounded-[20px] h-[42px] w-full no-spinners pl-[35px]"
              required
            />
          </div>
        </div>
        <div className="mb-7">
          <p className="text-dark text-[16px] font-[500] mb-4">Have you ever Built/Renovated or Extended before?</p>
          <Select
            options={YesNoOptions}
            value={built}
            onChange={handleSelectChangePlan}
            placeholder="Yes / No"
            isSearchable={false}
            required
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderColor: state.isFocused ? "#358AC3" : "#358AC3",
                width: "620px",
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
                width: "620px",
                color: state.isSelected ? 'white' : "black",
                backgroundColor: state.isSelected ? '#358AC3' : 'white',
                ":hover": {
                  backgroundColor: "lightgray"
                }
              }),
              menu: (provided) => ({
                ...provided,
                width: '620px',
                marginTop: "0px",
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
        {showBuilder &&
          <div className="mb-7">
            <p className="text-dark text-[16px] font-[500] mb-3">Who was the builder?</p>
            <input 
              type="text" 
              name="builder" 
              value={formValues.builder}
              onChange={handleInputChange}
              placeholder="Insert Builder*"
              className="border border-tertiary rounded-[20px] h-[42px] w-[620px]"
              required
            />
          </div>
        }
        <div className="mb-7">
          <p className="text-dark text-[16px] font-[500] mb-3">Are you speaking with them and are they quoting as well?</p>
          <input 
            type="text" 
            name="quoting" 
            value={formValues.quoting}
            onChange={handleInputChange}
            placeholder="Insert Reply*"
            className="border border-tertiary rounded-[20px] h-[42px] w-[620px]"
            required
          />
        </div>
        <div className="mb-7">
          <p className="text-dark text-[16px] font-[500] mb-3">Have you spoken to any other Builder's in regards to your proposed works?</p>
          <input 
            type="text" 
            name="proposed_works" 
            value={formValues.proposed_works}
            onChange={handleInputChange}
            placeholder="Insert Reply*"
            className="border border-tertiary rounded-[20px] h-[42px] w-[620px]"
            required
          />
        </div>
        <div className="w-full flex justify-end gap-x-4 mt-10">
          <Link href="/">
            <button type="button" className="text-warning text-[16px] font-[600] h-[42px] w-[120px] outline-none border-none">Cancel</button>
          </Link>
          <button type="button" className="text-warning border border-warning rounded-[20px] text-[16px] shadow-mainShadow font-[600] w-[200px] h-[42px]" onClick={handlePrevious}>Back</button>
          <button type="submit" className="text-white bg-warning rounded-[20px] text-[16px] shadow-mainShadow font-[600] w-[200px] h-[42px]">Next</button>
        </div>
      </form>
    </>
  );
};