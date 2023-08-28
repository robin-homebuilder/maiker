"use client"

import Image from 'next/image';

import { Fragment, useEffect, useState } from 'react'

import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Dialog, Transition } from '@headlessui/react';

import CarouselNextArrow from '../Utils/CarouselNextArrow';
import CarouselPreviousArrow from '../Utils/CarouselPreviousArrow';

interface ProjectImageURLProps {
  isOpen: boolean;
  closeModal: () => void;
  imageURL: string;
  imageBaseURL: string;
  other_image: string[]
}

const settings = {
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <CarouselNextArrow />,
  prevArrow: <CarouselPreviousArrow />,
};

export default function ProjectImage_Modal({ isOpen, closeModal, imageURL, imageBaseURL, other_image } : ProjectImageURLProps) {
  const [ showPanel, setShowPanel ] = useState(true);

  useEffect( () => {
    if(isOpen) {
      setShowPanel(true)
    }

  }, [isOpen])

  const closeGallery = () => {
    closeModal();
    
    if (window.innerWidth <= 768) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    }
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
          <div className='flex min-h-0 sm:min-h-full items-center justify-center sm:p-4 text-center w-[100vh] h-[100vw] rotate-90 top-[-100vw] absolute sm:w-full sm:h-full sm:rotate-0 sm:static sm:top-0 origin-bottom-left'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-out duration-300'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='relative w-full max-w-[1250px] max-h-[100vh] h-full sm:h-auto sm:max-h-[90vh] overflow-y-auto transform rounded-none sm:rounded-[20px] bg-white text-left shadow-xl transition-all flex flex-col gap-5 text-dark'>
                <div className={`w-full h-full absolute top-0 left-0 z-20 bg-[#00000080] ${showPanel ? "flex sm:hidden" : "hidden"} justify-center items-center gap-x-5`}>
                  <button type="button" className="bg-primary w-[180px] h-[42px] rounded-[20px] text-white" onClick={() => setShowPanel(false)}>View All Images</button>
                  <button type="button" className="bg-danger w-[150px] h-[42px] rounded-[20px] text-white" onClick={closeGallery}>Close</button>
                </div>
                <div className='w-[-webkit-fill-available] sm:w-[1250px] h-full sm:h-[800px] overflow-hidden relative'>
                  <Slider {...settings}>
                    {/* <div className='w-[1250px] h-[810px] relative'> */}
                    <div>
                      <Image 
                        alt={imageURL}
                        src={`${process.env.APP_S3_BUCKET}${imageBaseURL}/${imageURL}`}
                        width={1250}
                        height={800}
                        className="max-w-[1250px] sm:max-w-full max-h-[400px] sm:max-h-full w-full" 
                      />
                    </div>
                    {other_image.map((item, index) => (
                      // <div className='w-[1250px] h-[810px] relative' key={index}>
                      <div key={index}>
                        <Image 
                          src={`${process.env.APP_S3_BUCKET}${imageBaseURL}/${item}`} 
                          alt={item} 
                          width={1250}
                          height={800}
                          className="max-w-[1250px] sm:max-w-full max-h-[400px] sm:max-h-full w-full"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
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
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
