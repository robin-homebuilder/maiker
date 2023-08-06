"use client"

import { useState } from "react"

import Image from "next/image"

import ProjectImage_Modal from "../Modal/ProjectImage_Modal";

export default function ImageCard( { imageURL } : { imageURL : string }) {
  const [ openModal, setOpenModal ] = useState(false);

  return (
    <>
      <div className='w-[283px] h-[283px]'>
        <button type="button" className='w-full h-full bg-black relative' onClick={() => setOpenModal(true)}>
          <Image src={`${imageURL}`} fill={true} alt="About Maiker Constructions" className="object-cover"/>
        </button>
      </div>
      <ProjectImage_Modal isOpen={openModal} closeModal={() => setOpenModal(false)} imageURL={imageURL} />
    </>
  )
}