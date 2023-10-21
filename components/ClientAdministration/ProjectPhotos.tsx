"use client"

import Image from "next/image";

import { useEffect, useState } from "react";

import { FaTrashAlt } from "react-icons/fa";

import Add_Client_ProjectPhotos from "../Modal/ClientAdministration/Add_Photo";
import Delete_Modal from "../Modal/Delete";

import { deleteProjectPhoto, getClientProjectPhotos } from "@/services/clientAdministration/projectPhotosServices";

import { ClientProjectPhotosProps } from "@/types";

import { convertProjectPhotoDate } from "@/libs/convertDate";

interface PageProps {
  clientID: string
}

export default function ProjectPhotosList({ clientID } : PageProps) {
  const [ openModal, setOpenModal ] = useState(false);
  const [ openDeleteModal, setOpenDeleteModal ] = useState(false);

  const [ selectedPhotoID, setSelectedPhotoID ] = useState<string>("");

  const [ data, setData ] = useState<ClientProjectPhotosProps[]>([]);
  const [ projectNumber, setProjectNumber ] = useState<string>("");
  
  useEffect(() => {
    getClientProjectPhotos(clientID)
      .then(photos => {
        setData(photos.result)
        setProjectNumber(photos.projectNumber);
      })
      .catch(error => {
        console.error(error);
      });
  }, [clientID])

  const showModal = async () => {
    setOpenModal(true);
  }

  const showDeleteModal = async (id: string) => {
    setSelectedPhotoID(id);

    setOpenDeleteModal(true);
  }

  const refreshList = async () => {
    const photos = await getClientProjectPhotos(clientID);

    setData(photos.result);
  }

  const handleDelete = async () => {
    await deleteProjectPhoto(selectedPhotoID, clientID);

    refreshList();

    setOpenDeleteModal(false);
  }
  
  return (
    <>
      <div className="mb-[25px]">
        <div className="flex flex-wrap gap-4">
          {data.map((item,index) => (
            <div className="w-[273px] h-[272px] bg-[#D9D9D9] relative" key={index}>
              <Image src={`${process.env.APP_S3_BUCKET}/documents/${projectNumber}/08. Project Photos/${item.file_name}`} alt="" fill={true} className="object-cover"/>
              <button type="button" className="absolute top-2 right-2 w-[32px] h-[32px] rounded-full bg-primary flex justify-center items-center" onClick={() => showDeleteModal(item._id!)}><FaTrashAlt /></button>
              <p className="absolute bottom-2 right-2 text-white text-[12px] bg-warning px-1 rounded-[20px]">{convertProjectPhotoDate(item.createdAt!)}</p>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-[.5px] border-[#7D7D7D] mb-5"/>
      <div className="w-full flex justify-end">
        <button type="button" className="w-[200px] h-[42px] bg-portalBG rounded-[20px] text-[16px] font-[600]" onClick={showModal}>Add Photos</button>
      </div>
      <Add_Client_ProjectPhotos isOpen={openModal} closeModal={() => setOpenModal(false)} clientID={clientID} refreshList={refreshList}/>
      <Delete_Modal isOpen={openDeleteModal} closeModal={() => setOpenDeleteModal(false)} handleDelete={handleDelete}/>
    </>
  )
}
