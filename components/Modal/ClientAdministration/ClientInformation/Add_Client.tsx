"use client"

import { Fragment, useEffect, useState } from 'react'
import { FaSpinner } from 'react-icons/fa';

import { Dialog, Transition } from '@headlessui/react';

import { ClientInformationClientsProps } from '@/types';

import { addClientAdditional } from '@/services/clientAdministration/clientInformationServices';

interface ClientProps {
  isOpen: boolean;
  closeModal: () => void;
  clientID: string;
  refreshList: () => void;
}

export default function Add_ClientInformation_Client({ isOpen, closeModal, clientID, refreshList } : ClientProps) {
  const [ showPanel, setShowPanel ] = useState(true);
  const [ loading, setLoading ] = useState<boolean>(false);

  const [ formData, setFormData ] = useState<ClientInformationClientsProps>({
    client_name: "",
    phone: "",
    email: "",
    mailing_address: ""
  });

  useEffect( () => {
    if(isOpen) {
      setShowPanel(true);

      setLoading(false);

      setFormData({
        client_name: "",
        phone: "",
        email: "",
        mailing_address: ""
      })
    }

  }, [isOpen])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const closeTheModal = () => {
    closeModal();
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setLoading(true);

    await addClientAdditional({ data: formData, clientID: clientID});
    
    refreshList();

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
              <Dialog.Panel className='relative w-[525px] h-auto overflow-y-auto transform rounded-[20px] bg-white text-left shadow-xl transition-all text-dark border border-[#7D7D7D] p-[30px]'>
                <div className={`absolute top-0 left-0 w-full h-full bg-[#ffffff96] justify-center items-center z-10 text-tertiary text-[70px] ${loading ? "flex" : "hidden"}`}><FaSpinner className="animate-spin"/></div>
                <h3 className="text-[#1C7FCD] text-[25px] font-[800] mb-[25px]">Add Client</h3>
                <form className="flex flex-wrap gap-y-[25px]" autoComplete="off" onSubmit={onSubmit}>
                  <input 
                    type="text" 
                    name="client_name" 
                    placeholder="Client Name"
                    className="border border-tertiary rounded-[20px] h-[42px] shadow-mainShadow w-full"
                    value={formData.client_name}
                    onChange={handleInputChange}
                    required
                  />
                  <input 
                    type="text" 
                    name="phone" 
                    placeholder="Phone Number"
                    className="border border-tertiary rounded-[20px] h-[42px] shadow-mainShadow w-full"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Email"
                    className="border border-tertiary rounded-[20px] h-[42px] shadow-mainShadow w-full"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <input 
                    type="text" 
                    name="mailing_address" 
                    placeholder="Mailing Address"
                    className="border border-tertiary rounded-[20px] h-[42px] shadow-mainShadow w-full"
                    value={formData.mailing_address}
                    onChange={handleInputChange}
                    required
                  />
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
