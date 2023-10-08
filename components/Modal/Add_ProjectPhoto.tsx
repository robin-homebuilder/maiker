"use client"

import Image from "next/image"

import { Fragment, useEffect, useRef, useState } from 'react'

import { Dialog, Transition } from '@headlessui/react';

import { ProjectPhotoProps } from "@/types";

import { createCompletedProject } from "@/services/administration/projectServices";

interface ProjectImageURLProps {
  isOpen: boolean;
  closeModal: () => void;
  refreshList: () => void;
}

export default function Add_ProjectPhoto({ isOpen, closeModal, refreshList } : ProjectImageURLProps) {
  const [ showPanel, setShowPanel ] = useState(true);

  const [ imagePreviewUrl, setImagePreviewUrl ] = useState<string>("");
  const [ imageName, setImageName ] = useState<string>("");

  const [ otherImagePreviewUrl, setOtherImagePreviewUrl ] = useState<string[]>([]);
  const [ formData, setFormData ] = useState<ProjectPhotoProps>({
    main_image: undefined,
    other_image: undefined
  });

  const mainImageRef = useRef<HTMLInputElement | null>(null);
  const otherImageRef = useRef<HTMLInputElement | null>(null);

  useEffect( () => {
    if(isOpen) {
      setShowPanel(true);

      setFormData({
        main_image: undefined,
        other_image: undefined
      });

      setOtherImagePreviewUrl([]);

      setImagePreviewUrl("");
      setImageName("");
    }

  }, [isOpen])

  useEffect( () => {
    if(otherImagePreviewUrl.length == 0){
      if (otherImageRef.current) {
        otherImageRef.current.value = "";
      }
    }
  }, [otherImagePreviewUrl])

  const closeTheModal = () => {
    closeModal();
  }

  const handleFileMainImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) {
      return;
    }

    setFormData((prevFormValues) => ({
      ...prevFormValues,
      main_image: selectedFile
    }));

    setImageName(selectedFile.name);

    const imageUrl = URL.createObjectURL(selectedFile);
    setImagePreviewUrl(imageUrl);
  };

  const handleCloseImage = () => {
    setFormData((prevFormValues) => ({
      ...prevFormValues,
      main_image: undefined
    }));
    
    setImageName("");
    setImagePreviewUrl("");
    
    if (mainImageRef.current) {
      mainImageRef.current.value = '';
    }
  }

  const handleFileOtherImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
  
    if (!selectedFiles || selectedFiles.length === 0) {
      return;
    }
  
    const newFilesArray = Array.from(selectedFiles);
  
    setFormData((prevFormValues) => ({
      ...prevFormValues,
      other_image: prevFormValues.other_image
      ? [...prevFormValues.other_image, ...newFilesArray]
      : [...newFilesArray]
    }));
    
    const imageUrls = newFilesArray.map((file) => URL.createObjectURL(file));
    setOtherImagePreviewUrl((prevImage) => [...prevImage, ...imageUrls]);
  };

  const handleRemoveOtherImage = (index: number) => {
    setFormData((prevFormValues) => {
      const updatedOtherImage = [...prevFormValues.other_image!];

      updatedOtherImage.splice(index, 1);

      return {
        ...prevFormValues,
        other_image: updatedOtherImage,
      };
    });
  
    setOtherImagePreviewUrl((prevImageUrls) => {
      const updatedImageUrls = [...prevImageUrls];

      updatedImageUrls.splice(index, 1);

      return updatedImageUrls;
    });
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await createCompletedProject({ data: formData });

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
              <Dialog.Panel className='relative w-[1000px] h-auto min-h-[550px] overflow-y-auto transform rounded-[20px] bg-white text-left shadow-xl transition-all text-dark border border-[#7D7D7D] p-[30px]'>
                <h3 className="text-[#1C7FCD] text-[25px] font-[800] mb-[25px]">Add Photo</h3>
                <form className="flex flex-wrap gap-y-[25px]" autoComplete="off" onSubmit={onSubmit}>
                  <div className="flex gap-x-10 w-full">
                    <div className="w-1/2">
                      <div className="flex relative w-[390px]">
                        <input 
                          type="text" 
                          name="main_image" 
                          placeholder="Add Photo"
                          className="border border-tertiary rounded-[20px] h-[42px] shadow-mainShadow w-full"
                          value={imageName || ""}
                          disabled
                        />
                        <div className="w-[166px] rounded-r-[20px] h-[42px] bg-portalText absolute right-0 flex justify-center items-center">
                          <span className="text-white">Browse Computer</span>
                          <input 
                            type="file" 
                            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                            required
                            onChange={handleFileMainImage}
                            ref={mainImageRef}
                          />
                        </div>
                      </div>
                      {imagePreviewUrl && 
                        <div className="w-[390px] h-[290px] mt-5 relative">
                          <button type="button" className="w-5 h-5 absolute top-2 right-2 rounded-full font-[600] text-white border border-white flex justify-center items-center z-[1]" onClick={handleCloseImage}>x</button>
                          <Image src={imagePreviewUrl} alt="" fill={true} className="object-cover"/>
                        </div>
                      }
                    </div>
                    <div className="w-1/2">
                      <div className="flex relative w-full">
                        <input 
                          type="text" 
                          name="additional_image" 
                          placeholder="Additional Images"
                          className="border border-tertiary rounded-[20px] h-[42px] shadow-mainShadow w-full"
                          disabled
                          required
                        />
                        <div className="w-[166px] rounded-r-[20px] h-[42px] bg-portalText absolute right-0 flex justify-center items-center">
                          <span className="text-white">Browse Computer</span>
                          <input 
                            type="file" 
                            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                            required
                            multiple
                            onChange={handleFileOtherImage}
                            ref={otherImageRef}
                          />
                        </div>
                      </div>
                      {otherImagePreviewUrl.length > 0 && 
                        <div className="w-full flex flex-wrap gap-2.5 justify-between max-h-[300px] overflow-y-auto mt-5">
                          {otherImagePreviewUrl.map((item,index) => (
                            <div className="w-[210px] h-[150px] relative" key={index}>
                              <button type="button" className="w-5 h-5 absolute top-2 right-2 rounded-full font-[600] text-white border border-white flex justify-center items-center z-[1]" onClick={() => handleRemoveOtherImage(index)}>x</button>
                              <Image src={item} alt="" fill={true} className="object-cover"/>
                            </div>
                          ))}
                        </div>
                      }
                    </div>
                  </div>
                  <div className="flex justify-end gap-x-2.5 w-full absolute right-5 bottom-5">
                    <button type="button" className="text-warning border border-warning rounded-[20px] text-[16px] shadow-mainShadow font-[600] w-[120px] h-[42px]" onClick={closeTheModal}>Cancel</button>
                    <button type="submit" className="text-white bg-warning rounded-[20px] text-[16px] shadow-mainShadow font-[600] w-[120px] h-[42px]">Publish</button>
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
