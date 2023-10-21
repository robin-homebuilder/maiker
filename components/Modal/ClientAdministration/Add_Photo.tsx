"use client"

import { Fragment, useEffect, useRef, useState } from 'react'

import { FaSpinner } from 'react-icons/fa';

import { Dialog, Transition } from '@headlessui/react';

import { ClientProjectPhotosProps } from '@/types';

import { addProjectPhoto } from '@/services/clientAdministration/projectPhotosServices';

interface ClientProps {
  isOpen: boolean;
  closeModal: () => void;
  clientID: string,
  refreshList: () => void;
}

export default function Add_Client_ProjectPhotos({ isOpen, closeModal, clientID, refreshList } : ClientProps) {
  const [ showPanel, setShowPanel ] = useState(true);
  const [ loading, setLoading ] = useState<boolean>(false);

  const fileRef = useRef<HTMLInputElement | null>(null);

  const [ formData, setFormData ] = useState<ClientProjectPhotosProps>({
    file_name: ""
  });

  useEffect( () => {
    if(isOpen) {
      setShowPanel(true);

      setLoading(false);

      setFormData({
        file_name: ""
      })
    }

  }, [isOpen])

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

    await addProjectPhoto({ data: formData, clientID: clientID});

    refreshList();
    
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
              <Dialog.Panel className='relative w-[525px] h-auto overflow-y-auto transform rounded-[20px] bg-white text-left shadow-xl transition-all text-dark border border-[#7D7D7D] p-[30px]'>
                <div className={`absolute top-0 left-0 w-full h-full bg-[#ffffff96] justify-center items-center z-10 text-tertiary text-[70px] ${loading ? "flex" : "hidden"}`}><FaSpinner className="animate-spin"/></div>
                <h3 className="text-[#1C7FCD] text-[25px] font-[800] mb-[25px]">Add Photo</h3>
                <form className="flex flex-wrap gap-y-[25px]" autoComplete="off" onSubmit={onSubmit}>
                  <div className="flex relative w-full">
                    <div className="relative w-3/4">
                      <input 
                        type="text" 
                        name="file_name" 
                        placeholder="Add Photo"
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
                        accept="image/*"
                        onChange={handleFileUpload}
                        ref={fileRef}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-x-2.5 w-full">
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
