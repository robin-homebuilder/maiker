"use client"

import { useState } from "react";

import ProjectPhotoCard from "./ProjectPhotoCard";
import AddEdit_ProjectPhoto from "../Modal/AddEdit_ProjectPhoto";

interface ProjectProps {
  name: string
}

interface CompletedProjectProps {
  projects: ProjectProps[]
}

export default function CompletedProject({ projects } : CompletedProjectProps) {
  const [ openModal, setOpenModal ] = useState(false);
  const [ action, setAction ] = useState<string>("");
  
  const showModal = async (action: string) => {
    setOpenModal(true);
    setAction(action);
  }
  
  return (
    <>
      <div className="mb-6">
        <p className="text-[16px] text-portalText font-[600] mb-3">Add New Project</p>
        <button type="button" className="w-[200px] h-[42px] bg-portalBG rounded-[20px] shadow-mainShadow text-[16px] font-[600]" onClick={() => showModal("Add")}>Add Complete Project</button>
      </div>
      <div className="mb-6">
        <div className="flex flex-wrap gap-5">
          {projects.map((item,index) => (
            <div key={index}>
              <ProjectPhotoCard />
            </div>
          ))}
        </div>
      </div>
      <AddEdit_ProjectPhoto isOpen={openModal} closeModal={() => setOpenModal(false)} action={action}/>
    </>
  )
}
