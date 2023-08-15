"use client"

import { FaChevronRight } from "react-icons/fa";

export default function ScrollButtonHome({ targetSectionId } : { targetSectionId : string}) {

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const targetSection = document.getElementById(targetSectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button type="button" className='bg-white text-dark px-5 rounded-[20px] h-[42px] flex items-center font-[600] gap-x-2 mb-10' onClick={(e) => handleClick(e)}>Request Call Back <FaChevronRight /></button>
  )
}