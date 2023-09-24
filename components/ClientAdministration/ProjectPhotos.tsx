"use client"

import { useState } from "react";

import { FaTrashAlt } from "react-icons/fa";

import Add_Photos from "../Modal/ClientAdministration/Add_Photo";

const test = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {}
]

export default function ProjectPhotosList() {
  const [ openModal, setOpenModal ] = useState(false);
  
  const showModal = async () => {
    setOpenModal(true);
  }
  
  return (
    <>
      <div className="mb-[25px]">
        <div className="flex flex-wrap gap-4">
          {test.map((item,index) => (
            <div className="w-[273px] h-[272px] bg-[#D9D9D9] relative" key={index}>
              <button type="button" className="absolute top-2 right-2 w-[32px] h-[32px] rounded-full bg-primary flex justify-center items-center"><FaTrashAlt /></button>
              <p className="absolute bottom-2 right-2 text-dark text-[12px]">12/3/2023</p>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-[.5px] border-[#7D7D7D] mb-5"/>
      <div className="w-full flex justify-end">
        <button type="button" className="w-[200px] h-[42px] bg-portalBG rounded-[20px] text-[16px] font-[600]" onClick={showModal}>Add Photos</button>
      </div>
      <Add_Photos isOpen={openModal} closeModal={() => setOpenModal(false)}/>
    </>
  )
}
