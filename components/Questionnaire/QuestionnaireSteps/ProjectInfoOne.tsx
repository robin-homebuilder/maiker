"use client"

import Link from "next/link";

import { ChangeEvent, useEffect, useState } from "react";
import { TfiClose } from "react-icons/tfi";
import Select from 'react-select';

import { ProjectInformationOneProps } from "@/types";

import FileUpload from "@/components/Utils/FileUpload";

import { ProjectTypeOptions, YesNoOptions } from "@/libs/selectOptions";
import { convertBytesToSize } from "@/libs/convertSize";
import { ProjectOneCheckboxOptions } from "@/libs/checkboxOptions";

interface Step4Props {
  handleNext: (data: ProjectInformationOneProps) => void;
  handlePrevious: () => void;
  step4Data: ProjectInformationOneProps | null;
}
            
export default function ProjectInfoOne({ handleNext, handlePrevious, step4Data } : Step4Props) {
  const [ uploadedFiles, setUploadedFiles ] = useState<File[]>(step4Data?.files || []);

  const [ projectType, setProjectType ] = useState(step4Data?.project_type ? {value: step4Data.project_type, label: step4Data.project_type} : null);
  const [ planToComplete, setPlanToComplete ] = useState(step4Data?.complete_plan ? {value: step4Data.project_type, label: step4Data.complete_plan} : null);

  const [ showArchitect, setShowArchitect ] = useState(false);

  const [ formData, setFormData ] = useState<ProjectInformationOneProps>(step4Data || {
    project_type: "",
    complete_plan: "",
    architect_name: "",
    architect_contact: "",
    project_checkbox: [],
    files: []
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleNext(formData);
  }

  const handleSelectChange = (selectedOption: any) => {
    setProjectType(selectedOption);
    setFormData((prevData) => ({...prevData,  project_type: selectedOption.value}));
  };

  const handleSelectChangePlan = (selectedOption: any) => {
    setPlanToComplete(selectedOption);
    setFormData((prevData) => ({...prevData,  complete_plan: selectedOption.value}));

    if(selectedOption.value == "Yes"){
      setShowArchitect(true);
    } else{
      setShowArchitect(false);
      setFormData((prevData) => ({...prevData,  architect_name: ""}));
      setFormData((prevData) => ({...prevData,  architect_contact: ""}));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormValues) => ({
      ...prevFormValues,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const checkboxValue = e.target.value;

    if (e.target.checked) {
      setFormData((prevFormValues) => ({
        ...prevFormValues,
        project_checkbox: [...prevFormValues.project_checkbox, checkboxValue]
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        project_checkbox: prevFormData.project_checkbox.filter(
          (checkbox) => checkbox !== checkboxValue
        ),
      }));
    }
  };

  const handleFileUpload = (files: File[]) => {
    setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const handleRemoveFile = (indexToRemove: number) => {
    setUploadedFiles((prevFiles) => {
      const updatedFiles = [...prevFiles];
      updatedFiles.splice(indexToRemove, 1);
      return updatedFiles;
    });
  };

  useEffect( () => {
    setFormData((prevData) => ({...prevData,  files: uploadedFiles}));
  }, [uploadedFiles]);

  return (
    <>
      <h2 className="text-tertiary text-[23px] sm:text-[25px] font-[800]">4. Project Information - Part 1</h2>
      <form className="mt-5" onSubmit={onSubmit} autoComplete="off">
        <div className="mb-7">
          <p className="text-dark text-[16px] font-[500] mb-4">What type of project type does your enquiry relate to?</p>
          <div className="w-full sm:w-[620px]">
            <Select
              options={ProjectTypeOptions}
              value={projectType}
              onChange={handleSelectChange}
              placeholder="Insert Project Type"
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
                  }
                }),
                menu: (provided) => ({
                  ...provided,
                  width: "100%",
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
        </div>
        <div className="mb-7">
          <p className="text-dark text-[16px] font-[500] mb-4">Do you have plans for your Home Construction project or are you in process of completing plans?</p>
          <div className="w-full sm:w-[620px]">
            <Select
              options={YesNoOptions}
              value={planToComplete}
              onChange={handleSelectChangePlan}
              placeholder="Yes / No"
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
                  }
                }),
                menu: (provided) => ({
                  ...provided,
                  width: "100%",
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
        </div>
        {showArchitect &&
          <div className="mb-7">
            <p className="text-dark text-[16px] font-[500] mb-3">Who is your Architect or Home Designer?</p>
            <div className="w-full sm:w-[620px] flex flex-wrap gap-y-3">
              <input 
                type="text" 
                name="architect_name" 
                value={formData.architect_name}
                onChange={handleInputChange}
                placeholder="Insert Name*"
                className="border border-tertiary rounded-[20px] h-[42px] w-full"
                required
              />
              <input 
                type="text" 
                name="architect_contact" 
                value={formData.architect_contact} 
                onChange={handleInputChange}
                placeholder="Insert Contact Number*"
                className="border border-tertiary rounded-[20px] h-[42px] w-full"
                required
              />
            </div>
          </div>
        }
        <div className="mb-7">
          <p className="text-dark text-[16px] font-[500] mb-4">Please select from the following list if you have any of the following:</p>
          <div className="w-4/5 flex flex-wrap gap-y-5">
            {ProjectOneCheckboxOptions.map((item,index) => (
              <div className="flex justify-start items-center gap-x-2.5 w-full sm:w-1/3" key={index}>
                <input type="checkbox" className="custom-checkbox" onChange={handleCheckboxChange} value={item.value} id={item.id} checked={formData.project_checkbox.includes(item.value)}/>
                <label htmlFor={item.id} className="text-tertiary cursor-pointer">{item.value}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-7">
          <p className="text-dark text-[16px] font-[500] mb-4">Please upload any documents that you have that is relevant to your home site or home construction project.</p>
          <div className='border border-tertiary rounded-[20px] w-full sm:w-[819px] h-full sm:h-[364px] flex flex-wrap sm:flex-nowrap bg-white overflow-hidden'>
            <div className='w-full sm:w-1/2 h-full border-b sm:border-b-0 border-r-0 sm:border-r border-tertiary flex items-center'>
              <FileUpload onFileUploaded={handleFileUpload}/>
            </div>
            <div className='w-full sm:w-1/2 p-10'>
              <div className='scrollable-content max-h-full overflow-y-auto'>
                {uploadedFiles.map((file, index) => (
                  <div className="mb-2.5 flex items-center justify-between" key={index}>
                    <span className="text-dark w-full flex items-center gap-x-1">
                      <span className="w-[29px] h-[29px] rounded-full border border-[#1C7FCD] bg-[#1C7FCD1A] text-dark text-[10px] flex items-center justify-center">PDF</span>
                      <p className="text-dark w-fit flex flex-wrap">
                        <span className="w-full text-[13px] line-clamp-1">
                          {file.name}
                        </span>
                        <span className="w-full text-[10px]">
                          {convertBytesToSize(file.size)}
                        </span>
                      </p>
                    </span>
                    <button type="button" className="text-dark" onClick={() => handleRemoveFile(index)}><TfiClose /></button>
                  </div>
                ))}
              </div>
            </div>
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