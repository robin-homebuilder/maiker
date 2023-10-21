"use client"

import { Fragment, useEffect, useState } from 'react'

import { Dialog, Transition } from '@headlessui/react';
import { FaExclamationCircle, FaSpinner } from 'react-icons/fa';

interface ClientProps {
  isOpen: boolean;
  closeModal: () => void;
  handleDelete: () => void;
}

export default function Delete_Modal({ isOpen, closeModal, handleDelete } : ClientProps) {
  const [ showPanel, setShowPanel ] = useState(true);
  const [ disableButtons, setDisableButtons ] = useState<boolean>(false);
  const [ deleting, setDeleting ] = useState<boolean>(false); 

  useEffect( () => {
    if(isOpen) {
      setShowPanel(true)

      setDisableButtons(false);
      setDeleting(false);
    }

  }, [isOpen])

  const closeTheModal = () => {
    closeModal();
  }

  const processDelete = () => {
    setDisableButtons(true)
    setDeleting(true)
    handleDelete();
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
              <Dialog.Panel className='relative w-[400px] h-auto overflow-y-auto transform rounded-[20px] bg-white text-left shadow-xl transition-all text-dark border border-[#7D7D7D] p-[30px]'>
                <div className={`absolute top-0 left-0 w-full h-full bg-[#ffffff96] justify-center items-center z-10 text-tertiary text-[70px] ${deleting ? "flex" : "hidden"}`}><FaSpinner className="animate-spin"/></div>
                <div className="w-full flex justify-center text-[50px] text-[#1C7FCD]"><FaExclamationCircle/></div>
                <h3 className="text-[#1C7FCD] text-[25px] font-[800] mb-[25px] text-center">Confirmation to Delete</h3>
                <div className="flex justify-center gap-x-2.5 w-full">
                  <button type="button" className="text-warning border border-warning rounded-[20px] text-[16px] shadow-mainShadow font-[600] w-[120px] h-[42px] disabled:cursor-not-allowed" onClick={closeTheModal} disabled={disableButtons}>Cancel</button>
                  <button type="button" className="text-white bg-warning rounded-[20px] text-[16px] shadow-mainShadow font-[600] w-[120px] h-[42px] flex justify-center items-center disabled:cursor-not-allowed" onClick={processDelete} disabled={disableButtons}>
                    {/* {deleting ? (<>Deleting&nbsp;&nbsp;<FaSpinner className="animate-spin"/></>) : "Delete"} */}
                    Delete
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
