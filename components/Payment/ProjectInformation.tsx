import React, { useEffect, useState } from 'react';

import FileUpload from '../Utils/FileUpload';
import { convertBytesToSize } from '@/libs/convertSize';

import { TfiClose } from "react-icons/tfi";
import { ProjectInformationProps } from '@/types';

interface ProjectInformationPageProps {
  onPrevious: () => void;
  onNext: (data: ProjectInformationProps) => void;
}

export default function ProjectInformation({ onPrevious, onNext } : ProjectInformationPageProps) {
  const [ uploadedFiles, setUploadedFiles ] = useState<File[]>([]);

  const [ formData, setFormData ] = useState<ProjectInformationProps>({
    site_address: '',
    files: []
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    onNext(formData);
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFormData(prevData => ({ ...prevData, site_address: value }));
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
      <h2 className='text-tertiary font-[800] text-[25px] mb-2.5'>Enter Project Information</h2>
      <form onSubmit={onSubmit} className="scrollable-content overflow-y-scroll max-h-[750px] pr-1 pb-2.5">
        <div className="mb-10">
          <h3 className='text-dark font-[900] text-[18px] mb-2'>Site Address</h3>
          <input 
            type="text" 
            name="site_address" 
            placeholder="Site Address*" 
            value={formData.site_address}
            onChange={handleInputChange}
            className="border border-tertiary rounded-[20px] h-[42px] w-full" 
            required
          />
        </div>
        <div className="mb-10">
          <h3 className='text-dark font-[900] text-[18px] mb-2'>Add Documents</h3>
          <p className='text-dark mb-4'>Upload documents for pricing. Note that the more detailed the documentation is, the more accurate the budget.</p>
          <div className='border border-tertiary rounded-[20px] w-full h-[364px] flex bg-white overflow-hidden'>
            <div className='w-1/2 h-full border-r border-tertiary flex items-center'>
              <FileUpload onFileUploaded={handleFileUpload}/>
            </div>
            <div className='w-1/2 p-10'>
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
        <div className="flex justify-end gap-x-2.5 mt-5">
          <button type="submit" className="text-warning bg-white border border-warning font-[500] text-[16px] rounded-[20px] w-[200px] h-[42px] shadow-mainShadow" onClick={onPrevious}>Back</button>
          <button type="submit" className="text-white bg-warning font-[500] text-[16px] rounded-[20px] w-[200px] h-[42px] shadow-mainShadow">Next</button>
        </div>
      </form>
    </>
  );
};