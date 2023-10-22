"use client"

import Image from 'next/image';

import { Fragment, useEffect, useState } from 'react'

import { Dialog, Transition } from '@headlessui/react';

interface ClientProps {
  isOpen: boolean;
  closeModal: () => void;
  imageURL: string;
}

export default function ProjectPhotoImage({ isOpen, closeModal, imageURL } : ClientProps) {
  const [ showPanel, setShowPanel ] = useState(true);

  useEffect( () => {
    if(isOpen) {
      setShowPanel(true)
    }

  }, [isOpen])

  const closeGallery = () => {
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
              <Dialog.Panel className='relative max-w-[1250px] w-full h-[810px] overflow-y-auto transform rounded-[20px] bg-white text-left shadow-xl transition-all text-dark border border-[#7D7D7D]'>
                <div className='w-full h-full relative'>
                  <button
                    type='button'
                    className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
                    onClick={closeGallery}
                  >
                    <Image
                      src='/close-button.svg'
                      alt='close'
                      width={25}
                      height={25}
                      className='object-contain'
                    />
                  </button>
                  <Image src={imageURL} alt="" fill={true} className="object-fill"/>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
