"use client"

import Image from 'next/image';

import { Fragment, useEffect, useState } from 'react'

import { Dialog, Transition } from '@headlessui/react';

interface ClientProps {
  isOpen: boolean;
  closeModal: () => void;
}

export default function Add_ProgressClaim({ isOpen, closeModal } : ClientProps) {
  const [ showPanel, setShowPanel ] = useState(true);

  useEffect( () => {
    if(isOpen) {
      setShowPanel(true)
    }

  }, [isOpen])

  const closeTheModal = () => {
    closeModal();
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
                <h3 className="text-[#1C7FCD] text-[25px] font-[800] mb-[25px]">Add Progress Claim</h3>
                <form className="flex flex-wrap gap-y-[25px]" autoComplete="off" onSubmit={onSubmit}>
                  <input 
                    type="text" 
                    name="postcode" 
                    placeholder="Document Name"
                    className="border border-tertiary rounded-[20px] h-[42px] shadow-mainShadow w-full"
                    required
                  />
                  <input 
                    type="text" 
                    name="postcode" 
                    placeholder="Claim Amount"
                    className="border border-tertiary rounded-[20px] h-[42px] shadow-mainShadow w-full"
                    required
                  />
                  <input 
                    type="text" 
                    name="postcode" 
                    placeholder="Document Date"
                    className="border border-tertiary rounded-[20px] h-[42px] shadow-mainShadow w-full"
                    required
                  />
                  <input 
                    type="text" 
                    name="postcode" 
                    placeholder="Status"
                    className="border border-tertiary rounded-[20px] h-[42px] shadow-mainShadow w-full"
                    required
                  />
                  <div className="flex relative w-full">
                    <input 
                      type="text" 
                      name="postcode" 
                      placeholder="Add File"
                      className="border border-tertiary rounded-[20px] h-[42px] shadow-mainShadow w-full"
                      disabled
                      required
                    />
                    <div className="w-[166px] rounded-r-[20px] h-[42px] bg-portalText absolute right-0 flex justify-center items-center">
                      <span className="text-white">Browse Computer</span>
                      <input type="file" className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"/>
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
