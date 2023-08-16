import React, { useState } from 'react';

import { RxUpload } from "react-icons/rx";

interface Step2Props {
  onPrevious: () => void;
  onNext: (data: Step2Data) => void;
}

interface Step2Data {
  name: string;
  phone: string;
  email: string;
  // Add other fields as needed
}

const Step2: React.FC<Step2Props> = ({ onPrevious, onNext }) => {

  const [ formData, setFormData ] = useState<Step2Data>({
    name: '',
    phone: '',
    email: '',
  });

  const handleNext = () => {
    onNext(formData);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const onSubmit = () => {
    onNext(formData);
  }

  return (
    <>
      <h2 className='text-tertiary font-[800] text-[25px] mb-2.5'>Enter Project Information</h2>
      <form onSubmit={onSubmit} className="scrollable-content overflow-y-scroll max-h-[750px] pr-1 pb-2.5">
        <div className="mb-10">
          <h3 className='text-dark font-[900] text-[18px] mb-2'>Site Address</h3>
          <input type="text" name="site_address" placeholder="Site Address" className="border border-tertiary rounded-[20px] h-[42px] w-full"/>
        </div>
        <div className="mb-10">
          <h3 className='text-dark font-[900] text-[18px] mb-2'>Add Documents</h3>
          <p className='text-dark mb-4'>Upload documents for pricing. Note that the more detailed the documentation is, the more accurate the budget.</p>
          <div className='border border-tertiary rounded-[20px] w-full h-[364px] flex bg-white'>
            <div className='w-1/2 h-full border-r border-tertiary p-10 flex items-center'>
              <div className='flex flex-wrap justify-center items-center gap-y-0'>
                <h3 className='text-center text-tertiary text-[40px]'><RxUpload /></h3>
                <h3 className='text-tertiary text-[25px] font-[500] w-full text-center'>Drag and Drop File</h3>
                <h3 className='text-tertiary text-[25px] font-[500] w-full text-center'>or</h3>
                <button type="button" className="border border-tertiary bg-tertiary rounded-[20px] text-white text-[16px] font-[500] shadow-mainShadow w-[200px] h-[42px]">Browse</button>
              </div>
            </div>
            <div className='w-1/2 p-10'>
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

export default Step2;