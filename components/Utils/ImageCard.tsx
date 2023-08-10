"use client"

import { useState } from "react"

import Image from "next/image"

import ProjectImage_Modal from "../Modal/ProjectImage_Modal";

interface ProjectImageProps {
  imageURL: string,
  imageBaseURL: string,
  title: string,
  other_image: string[]
}

export default function ImageCard( { imageURL, imageBaseURL, title, other_image } : ProjectImageProps) {
  const [ openModal, setOpenModal ] = useState(false);
  
  return (
    <>
      <div className='w-[283px] h-[283px]'>
        <button type="button" className='w-full h-full bg-black relative' onClick={() => setOpenModal(true)}>
          <Image src={`${process.env.APP_S3_BUCKET}${imageBaseURL}/${imageURL}`} fill={true} alt={title} className="object-cover"/>
        </button>
      </div>
      <ProjectImage_Modal isOpen={openModal} closeModal={() => setOpenModal(false)} imageURL={imageURL} imageBaseURL={imageBaseURL} other_image={other_image}/>
    </>
  )
}