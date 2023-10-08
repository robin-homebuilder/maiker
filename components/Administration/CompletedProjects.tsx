"use client"

import Image from "next/image";

import { useState } from "react";

import { FaTrashAlt } from "react-icons/fa";

import { ProjectPhotoListProps } from "@/types";

import { convertProjectPhotoDate } from "@/libs/convertDate";

import Add_ProjectPhoto from "../Modal/Add_ProjectPhoto";
import Edit_ProjectPhoto from "../Modal/Edit_PhojectPhoto";
import Delete_Modal from "../Modal/Delete";

import { deleteProject, getCompleteProjectPhotos } from "@/services/administration/projectServices";

interface CompletedProjectProps {
  projects: ProjectPhotoListProps[]
}

export default function CompletedProject({ projects } : CompletedProjectProps) {
  const [ projectLists, setProjectLists ] = useState<ProjectPhotoListProps[]>(projects);

  const [ openModal, setOpenModal ] = useState(false);
  const [ openEditModal, setOpenEditModal ] = useState(false);
  const [ openDeleteModal, setOpenDeleteModal ] = useState(false);
  
  const [ photoID, setPhotoID ] = useState<string>("");
  const [ mainImage, setMainImage ] = useState<string>("");
  const [ mainImageName, setMainImageName ] = useState<string>("");
  const [ otherImages, setOtherImages ] = useState<string[]>([]);
  const [ otherImagesList, setOtherImagesList ] = useState<string[]>([]);
  
  const showModal = async () => {
    setOpenModal(true);
  }

  const showEditModal = async (id: string, main: string, images: string[], imagesList: string[], mainName: string) => {
    setOpenEditModal(true);

    setMainImage(main);
    setPhotoID(id);
    setOtherImages(images);
    setOtherImagesList(imagesList)
    setMainImageName(mainName)
  }

  const refreshList = async () => {
    const projects = await getCompleteProjectPhotos();

    setProjectLists(projects);
  }  

  const showDeleteModal = async (id: string) => {
    setPhotoID(id);

    setOpenDeleteModal(true)
  }

  const handleDelete = async () => {
    await deleteProject(photoID);
    
    refreshList();

    setOpenDeleteModal(false)
  }

  return (
    <>
      <div className="mb-6">
        <p className="text-[16px] text-portalText font-[600] mb-3">Add New Project</p>
        <button type="button" className="w-[200px] h-[42px] bg-portalBG rounded-[20px] shadow-mainShadow text-[16px] font-[600]" onClick={showModal}>Add Complete Project</button>
      </div>
      <div className="mb-6">
        <div className="flex flex-wrap gap-5">
          {projectLists.map((item,index) => {
            const mainImageUrl = `${process.env.APP_S3_BUCKET}${item.image_base_url}/${item.main_image}`;
            const otherImagesURL = item.other_image.map((img) => `${process.env.APP_S3_BUCKET}${item.image_base_url}/${img}`);
            
            return (
              <div key={index}>
                <div className="w-[273px] h-[273px] bg-[#D9D9D9] relative">
                  <Image src={mainImageUrl} alt="" fill={true} className="object-cover"/>
                  <div className="flex gap-x-2.5 w-auto absolute top-3 right-3">
                    <button type="button" className="bg-warning h-[32px] w-[32px] text-white font-[600] rounded-full flex justify-center items-center" onClick={() => showDeleteModal(item._id)}>
                      <FaTrashAlt />
                    </button>
                    <button 
                      type="button" 
                      className="bg-warning w-[120px] h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow" 
                      onClick={() => showEditModal(item._id, mainImageUrl, otherImagesURL, item.other_image, item.main_image)}
                    >
                      Edit
                    </button>
                  </div>
                  <p className="text-dark absolute bottom-3 right-3">{convertProjectPhotoDate(item.createdAt)}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <Add_ProjectPhoto isOpen={openModal} closeModal={() => setOpenModal(false)} refreshList={refreshList}/>
      <Edit_ProjectPhoto isOpen={openEditModal} closeModal={() => setOpenEditModal(false)} photoID={photoID} mainImage={mainImage} otherImages={otherImages} otherImagesList={otherImagesList} mainImageName={mainImageName} refreshList={refreshList}/>
      <Delete_Modal isOpen={openDeleteModal} closeModal={() => setOpenDeleteModal(false)} handleDelete={handleDelete}/>
    </>
  )
}
