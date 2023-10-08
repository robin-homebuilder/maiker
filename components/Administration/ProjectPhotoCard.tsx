"use client"

import { useState } from "react";

import Add_ProjectPhoto from "../Modal/Add_ProjectPhoto";

export default function ProjectPhotoCard() {
  const [ openModal, setOpenModal ] = useState(false);
  const [ action, setAction ] = useState<string>("");
  
  const showModal = async (action: string) => {
    setOpenModal(true);
    setAction(action);
  }
  
  return (
    <>
      <div className="w-[273px] h-[273px] bg-[#D9D9D9] relative">
        <button type="button" className="absolute top-3 right-3 bg-warning w-[120px] h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow" onClick={() => showModal("Edit")}>Edit</button>
        <p className="text-dark absolute bottom-3 right-3">12/3/2023</p>
      </div>
      {/* <Add_ProjectPhoto isOpen={openModal} closeModal={() => setOpenModal(false)}/> */}
    </>
  )
}
