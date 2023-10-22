"use client"

import Image from "next/image"

import { useState } from "react";

import { ClientProjectPhotosProps } from "@/types"

import { convertProjectPhotoDate } from "@/libs/convertDate"

import ProjectPhotoImage from "../Modal/ProjectPhotoImage";

interface PageProps {
  projectPhotos: ClientProjectPhotosProps[],
  projectNumber: string
}

export default function ClientPortal_ProjectPhotosList({ projectPhotos, projectNumber } : PageProps) {
  const [ openModal, setOpenModal ] = useState(false);
  const [ imageURL, setImageURL ] = useState<string>("");

  const showModal = async (url: string) => {
    setImageURL(url);
    setOpenModal(true);
  }

  return (
    <>
      <div className="mb-[25px]">
        <div className="flex flex-wrap gap-4">
          {projectPhotos.map((item,index) => (
            <div className="w-[273px] h-[272px] bg-[#D9D9D9] relative cursor-pointer" key={index} onClick={() => showModal(`${process.env.APP_S3_BUCKET}/documents/${projectNumber}/08. Project Photos/${item.file_name}`)}>
              <Image src={`${process.env.APP_S3_BUCKET}/documents/${projectNumber}/08. Project Photos/${item.file_name}`} alt="" fill={true} className="object-cover"/>
              <p className="absolute bottom-2 right-2 text-white text-[12px] bg-warning px-1 rounded-[20px]">{convertProjectPhotoDate(item.createdAt!)}</p>
            </div>
          ))}
        </div>
      </div>
      <ProjectPhotoImage isOpen={openModal} closeModal={() => setOpenModal(false)} imageURL={imageURL}/>
    </>
  )
}
