"use client"

import { Fragment, useEffect, useRef, useState } from 'react'

import { FaSpinner } from 'react-icons/fa';

import { Dialog, Transition } from '@headlessui/react';

import { ConsultantDataProps } from '@/types';

import { updateConsultant } from '@/services/administration/consultantServices';

import 'react-day-picker/dist/style.css';
import MyDatePicker from "../Utils/DatePicker";

import { convertArticleDate } from '@/libs/convertDate';

interface ConsultantProps {
  isOpen: boolean;
  closeModal: () => void;
  consultantData: ConsultantDataProps;
  refreshClientList: () => void;
}

export default function Edit_Consultant({ isOpen, closeModal, consultantData, refreshClientList } : ConsultantProps) {
  const [ showPanel, setShowPanel ] = useState(true);
  const [ loading, setLoading ] = useState<boolean>(true);
  
  const insuranceRef = useRef<HTMLInputElement | null>(null);
  const dateRef = useRef<HTMLDivElement | null>(null);

  const [ showDatePicker, setShowDatePicker ] = useState<boolean>(false);
  const [ selectedDate, setSelectedDate ] = useState<string>("");

  const [ formData, setFormData ] = useState<ConsultantDataProps>({
    _id: "",
    id_number: 0,
    name: "",
    licence: "",
    insurance: "",
    email: "",
  });

  useEffect( () => {
    setFormData(consultantData);
    setLoading(false);
    
    setFormData((prevFormValues) => ({
      ...prevFormValues,
      insurance_expiry: new Date(consultantData.insurance_expiry!)
    }));

    setSelectedDate(convertArticleDate(consultantData.insurance_expiry!));
  }, [consultantData]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dateRef.current && !dateRef.current.contains(event.target as Node)) {
        setShowDatePicker(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect( () => {
    if(isOpen) {
      setShowPanel(true)
    }

  }, [isOpen])

  const closeTheModal = () => {
    closeModal();
  }

  const handleSelectDate = (data: string) => {
    setSelectedDate(data);

    setFormData((prevFormValues) => ({
      ...prevFormValues,
      insurance_expiry: new Date(data)
    }));
  }

  const handleClearDate = () => {
    setSelectedDate("");

    setFormData((prevFormValues) => ({
      ...prevFormValues,
      insurance_expiry: undefined
    }));
  }

  const handleChangeHide = () => {

  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    
    if (!selectedFile) {
      return;
    }

    setFormData((prevFormValues) => ({
      ...prevFormValues,
      insurance: selectedFile.name,
      insurance_file: selectedFile
    }));

  };

  const handleRemoveInsurance = () => {
    setFormData((prevFormValues) => ({
      ...prevFormValues,
      insurance: "",
      insurance_file: undefined
    }));

    if (insuranceRef.current) {
      insuranceRef.current.value = '';
    }
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setLoading(true);

    await updateConsultant({ data: formData });
    
    refreshClientList();
    closeModal();
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-[100]' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-70' />
        </Transition.Child>
        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center text-center top-[-100vw] static w-full h-full'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-out duration-300'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='relative w-[525px] h-auto transform rounded-[20px] bg-white text-left shadow-xl transition-all text-dark border border-[#7D7D7D] p-[30px]'>
                <div className={`absolute top-0 left-0 w-full h-full bg-[#ffffff96] justify-center items-center text-tertiary text-[70px] z-30 ${loading ? "flex" : "hidden"}`}><FaSpinner className="animate-spin"/></div>
                <h3 className="text-[#1C7FCD] text-[25px] font-[800] mb-[25px]">Edit Consultant</h3>
                <form className="flex flex-wrap gap-y-[25px]" autoComplete="off" onSubmit={onSubmit}>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Consultant Name"
                    className="border border-tertiary rounded-[20px] h-[42px] shadow-mainShadow w-full"
                    value={formData?.name || ""}
                    onChange={handleInputChange}
                    required
                  />
                  <input 
                    type="text" 
                    name="licence" 
                    placeholder="License Number"
                    className="border border-tertiary rounded-[20px] h-[42px] shadow-mainShadow w-full"
                    value={formData?.licence || ""}
                    onChange={handleInputChange}
                    required
                  />
                  <div className="flex relative w-full">
                    <div className="relative w-3/4">
                      <input 
                        type="text" 
                        name="postcode" 
                        placeholder="Add Insurance"
                        className="border border-tertiary rounded-l-[20px] h-[42px] shadow-mainShadow w-full pr-[30px]"
                        value={formData.insurance}
                        disabled
                        required
                      />
                      {formData.insurance &&
                        <button 
                          type="button" 
                          className="rounded-full w-5 h-5 border border-tertiary text-tertiary flex justify-center items-center font-[600] absolute top-[10px] right-1.5"
                          onClick={handleRemoveInsurance}
                        >
                          x
                        </button>
                      }
                    </div>
                    <div className="w-[166px] rounded-r-[20px] h-[42px] bg-portalText relative flex justify-center items-center shadow-mainShadow">
                      <span className="text-white">Browse Computer</span>
                      <input 
                        type="file" 
                        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                        accept="application/pdf"
                        onChange={handleFileUpload}
                        ref={insuranceRef}
                      />
                    </div>
                  </div>
                  <div className="w-[550px] relative" ref={dateRef}>
                    <input type="text" className="h-[42px] w-full rounded-[20px] absolute border border-portalText shadow-mainShadow text-left opacity-0" value={selectedDate} required onChange={handleChangeHide}/>
                    <button type="button" className={`h-[42px] w-full rounded-[20px] border border-portalText shadow-mainShadow relative z-10 text-left px-5 ${selectedDate ? "text-dark" : "text-[#888]"}`} onClick={() => setShowDatePicker(!showDatePicker)}>
                      {selectedDate ? selectedDate : "Issue Date"}
                    </button>
                    {selectedDate && 
                      <div className="absolute top-[10px] right-[10px] z-20">
                        <button type="button" className="w-5 h-5 rounded-full text-tertiary border border-tertiary flex justify-center items-center" onClick={handleClearDate}>x</button>
                      </div>
                    }
                    {showDatePicker && (
                      <div className="border border-tertiary rounded-[10px] absolute top-[42px] left-0 w-full h-auto z-[29] bg-white">
                        <MyDatePicker handleSelectDate={handleSelectDate} selectedDate={formData.insurance_expiry!}/>
                      </div>
                    )}
                  </div>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Email Address"
                    className="border border-tertiary rounded-[20px] h-[42px] shadow-mainShadow w-full"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <div className="flex justify-end gap-x-2.5 w-full">
                    <button type="button" className="text-danger border border-danger rounded-[20px] text-[16px] shadow-mainShadow font-[600] w-[120px] h-[42px]">Delete</button>
                    <button type="button" className="text-warning border border-warning rounded-[20px] text-[16px] shadow-mainShadow font-[600] w-[120px] h-[42px]" onClick={closeTheModal}>Cancel</button>
                    <button type="submit" className="text-white bg-warning rounded-[20px] text-[16px] shadow-mainShadow font-[600] w-[120px] h-[42px]">Save</button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
