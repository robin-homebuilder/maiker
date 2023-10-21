"use client"

import { Fragment, useEffect, useState } from 'react'

import { FaSpinner } from 'react-icons/fa';

import { Dialog, Transition } from '@headlessui/react';

import { DrawingsAndReportProps } from '@/types';

import { updateSectionName } from '@/services/clientAdministration/drawingsReportsServices';

interface ClientProps {
  isOpen: boolean;
  closeModal: () => void;
  data: DrawingsAndReportProps,
  refreshListSection: () => void;
}

export default function Edit_DrawingsAndReport_Section({ isOpen, closeModal, data, refreshListSection } : ClientProps) {
  const [ showPanel, setShowPanel ] = useState(true);
  const [ loading, setLoading ] = useState<boolean>(false);

  const [ sectionName, setSectionName ] = useState<string>("");

  useEffect( () => {
    if(isOpen) {
      setShowPanel(true);

      setLoading(false);

      setSectionName(data.section_name);
    }

  }, [isOpen])

  const closeTheModal = () => {
    closeModal();
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setSectionName(value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    await updateSectionName({ data: sectionName, id: data._id!})

    refreshListSection();

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
                <h3 className="text-[#1C7FCD] text-[25px] font-[800] mb-[25px]">Edit Section</h3>
                <form className="flex flex-wrap gap-y-[25px]" autoComplete="off" onSubmit={onSubmit}>
                  <input 
                    type="text" 
                    name="postcode" 
                    placeholder="Section Name"
                    className="border border-tertiary rounded-[20px] h-[42px] shadow-mainShadow w-full"
                    value={sectionName}
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
