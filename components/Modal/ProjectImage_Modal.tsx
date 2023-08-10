"use client"

import Image from 'next/image';

import { Fragment } from 'react'

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
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-30' onClose={closeModal}>
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
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-out duration-300'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='relative w-full max-w-fit max-h-[90vh] overflow-y-auto transform rounded-[20px] bg-white text-left shadow-xl transition-all flex flex-col gap-5 text-dark'>
                <div className='w-[1250px] h-[810px] overflow-hidden relative'>
                <Slider {...settings}>
                  <div className='w-[1250px] h-[810px] relative'>
                    <Image src={`${process.env.APP_S3_BUCKET}${imageBaseURL}/${imageURL}`} alt={imageURL} fill={true} className='object-cover'/>
                  </div>
                  {other_image.map((item, index) => (
                    <div className='w-[1250px] h-[810px] relative' key={index}>
                      <Image src={`${process.env.APP_S3_BUCKET}${imageBaseURL}/${item}`} alt={item} fill={true} className='object-cover'/>
                    </div>
                  ))}
                </Slider>
                </div>
                <button
                  type='button'
                  className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
                  onClick={closeModal}
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
