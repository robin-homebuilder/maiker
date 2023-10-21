"use client"

import { Fragment, useEffect, useRef, useState } from 'react'

import { FaSpinner } from 'react-icons/fa';

import { Dialog, Transition } from '@headlessui/react';

import MyDatePicker from '@/components/Utils/DatePicker';
import 'react-day-picker/dist/style.css';

import { AuthorityApprovalFileProps } from '@/types';

import { updateAuthorityApprovalsFile } from '@/services/clientAdministration/authorityApprovalServices';
import { convertDateFormat } from '@/libs/convertDate';

interface ClientProps {
  isOpen: boolean;
  closeModal: () => void;
  data: AuthorityApprovalFileProps,
  clientID: string,
  sectionID: string,
  refreshListSection: () => void;
  showDeleteModal: () => void;
}

export default function Edit_AuthorityApproval_File({ isOpen, closeModal, data, clientID, sectionID, refreshListSection, showDeleteModal } : ClientProps) {
  const [ showPanel, setShowPanel ] = useState(true);
  const [ loading, setLoading ] = useState<boolean>(false);

  const [ showDatePicker, setShowDatePicker ] = useState<boolean>(false);
  const [ selectedDate, setSelectedDate ] = useState<string>("");

  const dateRef = useRef<HTMLDivElement | null>(null);

  const fileRef = useRef<HTMLInputElement | null>(null);

  const [ formData, setFormData ] = useState<AuthorityApprovalFileProps>({
    name: "",
    url: "",
    amendment: "",
    file_name: "",
    document_file: undefined
  });

  useEffect( () => {
    if(isOpen) {
      setShowPanel(true);

      setLoading(false);

      setSelectedDate("")

      const date = convertDateFormat(data.document_date!);
      setSelectedDate(date || "");

      setFormData({
        _id: data._id,
        name: data.name,
        url: data.url,
        file_name: data.file_name,
        amendment: data.amendment,
        document_date: new Date(data.document_date!),
        document_file: undefined
      })
    }

  }, [isOpen, data])

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

  const handleClearDate = () => {
    setSelectedDate("");

    setFormData((prevFormValues) => ({
      ...prevFormValues,
      document_date: undefined
    }));
  }

  const handleChangeHide = () => {

  }

  const handleSelectDate = (data: string) => {
    setSelectedDate(data);

    setFormData((prevFormValues) => ({
      ...prevFormValues,
      document_date: new Date(data)
    }));
  }

  const closeTheModal = () => {
    closeModal();
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
      file_name: selectedFile.name,
      document_file: selectedFile
    }));

  };
  
  const handleRemoveFile = () => {
    setFormData((prevFormValues) => ({
      ...prevFormValues,
      file_name: "",
      document_file: undefined
    }));

    if (fileRef.current) {
      fileRef.current.value = '';
    }
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setLoading(true);

    await updateAuthorityApprovalsFile({ data: formData, sectionID: sectionID, clientID: clientID});

    refreshListSection();
    
    closeModal();
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-[100]' onClose={() => {}} static>
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
                <div className={`absolute top-0 left-0 w-full h-full bg-[#ffffff96] justify-center items-center z-[21] rounded-[20px] text-tertiary text-[70px] ${loading ? "flex" : "hidden"}`}><FaSpinner className="animate-spin"/></div>
                <h3 className="text-[#1C7FCD] text-[25px] font-[800] mb-[25px]">Edi Section File</h3>
                <form className="flex flex-wrap gap-y-[25px]" autoComplete="off" onSubmit={onSubmit}>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Document Name"
                    className="border border-tertiary rounded-[20px] h-[42px] shadow-mainShadow w-full"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <div className="w-full relative" ref={dateRef}>
                    <input type="text" className="h-[42px] w-full rounded-[20px] absolute border border-portalText shadow-mainShadow text-left opacity-0" value={selectedDate} required onChange={handleChangeHide}/>
                    <button type="button" className={`h-[42px] w-full rounded-[20px] border border-portalText shadow-mainShadow relative z-10 text-left px-5 ${selectedDate ? "text-dark" : "text-[#888]"}`} onClick={() => setShowDatePicker(!showDatePicker)}>
                      {selectedDate ? selectedDate : "Document Date"}
                    </button>
                    {selectedDate && 
                      <div className="absolute top-[10px] right-[5px] z-20">
                        <button type="button" className="w-5 h-5 rounded-full text-tertiary border border-tertiary flex justify-center items-center" onClick={handleClearDate}>x</button>
                      </div>
                    }
                    {showDatePicker && (
                      <div className="border border-tertiary rounded-[10px] absolute top-[42px] left-0 w-full h-auto z-[29] bg-white">
                        <MyDatePicker handleSelectDate={handleSelectDate} selectedDate={formData.document_date!}/>
                      </div>
                    )}
                  </div>
                  <input 
                    type="text" 
                    name="amendment" 
                    placeholder="Amendment"
                    className="border border-tertiary rounded-[20px] h-[42px] shadow-mainShadow w-[150px]"
                    value={formData.amendment}
                    onChange={handleInputChange}
                    required
                  />
                  <div className="flex relative w-full">
                    <div className="relative w-3/4">
                      <input 
                        type="text" 
                        name="file_name" 
                        placeholder="Add File"
                        className="border border-tertiary rounded-l-[20px] h-[42px] shadow-mainShadow w-full pr-[30px] text-ellipsis"
                        value={formData?.file_name|| ""}
                        disabled
                        required
                      />
                      {formData.file_name &&
                        <button 
                          type="button" 
                          className="rounded-full w-5 h-5 border border-tertiary text-tertiary flex justify-center items-center font-[600] absolute top-[10px] right-1.5"
                          onClick={handleRemoveFile}
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
                        ref={fileRef}
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-x-2.5 w-full">
                    <button type="button" className="text-danger border border-danger rounded-[20px] text-[16px] shadow-mainShadow font-[600] w-[120px] h-[42px]" onClick={showDeleteModal}>Delete</button>
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
